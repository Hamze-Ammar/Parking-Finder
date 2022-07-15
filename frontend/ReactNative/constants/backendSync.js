export const URL = "http://192.168.101.16:8000/api/v1";

// set timer limit for reservation
// This value should be fetched from the database? or hard coded to prevent requests
// Go to backend Laravel -> UserController -> makeReservation(id) -> distpatch(slot)->delay(..set timer here..)
// Note that timer in react in millisecond while in laravel in seconds:
// it's also better for timer in laravel to be slightly lower than react-native
export const TIMER = 10000;
