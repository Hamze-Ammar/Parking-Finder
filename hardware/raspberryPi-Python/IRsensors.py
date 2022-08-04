import RPi.GPIO as GPIO
import time
import requests
import json

sensor_16 = 16
sensor_18 = 18
sensor_22 = 22
sensor_24 = 24
sensor_26 = 26
sensor_32 = 32
sensor_38 = 38
sensor_40 = 40

GPIO.setmode(GPIO.BOARD)
GPIO.setup(sensor_16,GPIO.IN)
GPIO.setup(sensor_18,GPIO.IN)
GPIO.setup(sensor_22,GPIO.IN)
GPIO.setup(sensor_24,GPIO.IN)
GPIO.setup(sensor_26,GPIO.IN)
GPIO.setup(sensor_32,GPIO.IN)
GPIO.setup(sensor_38,GPIO.IN)
GPIO.setup(sensor_40,GPIO.IN)

is_16_Occupied = False
is_18_Occupied = False
is_22_Occupied = False
is_24_Occupied = False
is_26_Occupied = False
is_32_Occupied = False
is_38_Occupied = False
is_40_Occupied = False

url = "http://192.168.134.14:8000/api/v1/system"

def CheckSensors(sensor,isOccupied, slotId):
		if GPIO.input(sensor):
			print('detecting on '+ str(sensor) +' ... & Nothing is detected ')
			if isOccupied:
				print('call api: slot '+ str(sensor) + ' free')
				try:
					response = requests.get(url+'/setSlotToFree/'+str(slotId))
					print(response.text)
				except:
					print('api error')

				isOccupied = False	
		else:
			print('detected motion on '+str(sensor))
			if not isOccupied:
				print('call api: slot '+ str(sensor) + ' busy')
				try:
					response = requests.get(url+'/setSlotToBusy/'+str(slotId))
					print(response.text)
				except:
					print('api error')

				isOccupied = True
		return isOccupied

try:
	while True:
		time.sleep(2)
		is_16_Occupied = CheckSensors(sensor_16,is_16_Occupied, 2144)
		is_18_Occupied = CheckSensors(sensor_18,is_18_Occupied, 2143)
		is_22_Occupied = CheckSensors(sensor_22,is_22_Occupied, 2145)
		is_24_Occupied = CheckSensors(sensor_24,is_24_Occupied, 2138)
		is_26_Occupied = CheckSensors(sensor_26,is_26_Occupied, 2139)
		is_32_Occupied = CheckSensors(sensor_32,is_32_Occupied, 2141)
		is_38_Occupied = CheckSensors(sensor_38,is_38_Occupied, 2142)
		is_40_Occupied = CheckSensors(sensor_40,is_40_Occupied, 2140)

except KeyboardInterrupt:
	GPIO.cleanup()

