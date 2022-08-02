export const URL = "http://192.168.134.14:8000/api/v1";

// set timer limit for reservation
// This value should be fetched from the database? or hard coded to prevent requests
// Go to backend Laravel -> UserController -> makeReservation(id) -> distpatch(slot)->delay(..set timer here..)
// Note that timer in react is in millisecond while in laravel in seconds:
// it's also better for the timer in laravel to be slightly lower than in react-native
export const TIMER = 10000;
