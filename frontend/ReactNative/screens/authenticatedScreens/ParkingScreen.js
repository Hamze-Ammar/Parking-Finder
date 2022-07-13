import ParkingView from "../../components/parkingPage/ParkingView";

const ParkingScreen = ({ route }) => {
  if (route) {
    const param = route.params;
    const city_name = param.city[0].subregion;
    return <ParkingView city_name={city_name} />;
  }
  return <ParkingView />;
};

export default ParkingScreen;
