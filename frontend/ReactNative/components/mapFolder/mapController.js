import { URL } from "../../constants/backendSync";

export const getParkingByCityName = async ({ city, token }) => {
  if (!city || !token) {
    return;
  }
  //   console.log("wer here");
  const res = await fetch(`${URL}/info/getParkingsByCityName/${city}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  //   console.log(data);
  if (data.status === "Success") {
    let response = await handleResponse(data);
    return response;
  } else {
    return false;
  }
};

function handleResponse(data) {
  if (!!data.res) {
    let parkings = [];
    data.res.map((item) => {
      //   console.log("idparkingcheck: ", item.id);
      let parking = {
        id: item.id,
        name: item.name,
        freeSlots: item.freeSlots,
        location: item.location,
        // location: item.location,
      };
      parkings.push(parking);
    });
    // console.log(parkings[0].location["latitude"]);
    // let test = JSON.parse(parkings[0].location);
    // console.log(test.latitude);
    // console.log({ parkings });
    return parkings;
  }
}
