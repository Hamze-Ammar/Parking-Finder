import { URL } from "../../constants/backendSync";

export const addToFavorite = async (id, token) => {
  if (!id) {
    return;
  }

  //Just in case
  if (!token) {
    return;
  }
  const res = await fetch(`${URL}/user/addToFavorite/${id}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === "Success") {
    return data;
  } else {
    return false;
  }
};

export const getFavouriteParkings = async (token) => {
  //Just in case
  if (!token) {
    return;
  }
  const res = await fetch(`${URL}/info/getFavouriteParkings`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === "Success") {
    let response = await handleResGetAllFav(data);
    return response;
  } else {
    return false;
  }
};

// Parsing response
function handleResGetAllFav(data) {
  if (data?.res) {
    let parkings = [];
    data.res.map((item) => {
      let parking = {
        id: item.parking_info.id,
        name: item.parking_info.name,
        total_slots: item.parking_info.total_slots,
        address: item.parking_address,
        opening_hr: item.parking_info.opening_hr,
        closing_hr: item.parking_info.closing_hr,
      };
      parkings.push(parking);
    });
    return parkings;
  }
}

export const delFavFromServer = async (id, token) => {
  if (!id || !token) {
    return;
  }

  const res = await fetch(`${URL}/user/removeFromFavorite/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === "Success") {
    return data;
  } else {
    return false;
  }
};
