import { URL } from "../../../constant/backend";

export const getSearchRequests = async (token) => {
  if (!token) {
    return;
  }
  try {
    const res = await fetch(`${URL}/info/getSearchRequests`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data?.status === "Success") {
      return parseData(data.res);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAllReservations = async (token) => {
    if (!token) {
      return;
    }
    try {
      const res = await fetch(`${URL}/info/getAllReservations`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      if (data?.status === "Success") {
        return parseData(data.res);
      }
    } catch (err) {
      console.log(err);
    }
};

const parseData = (data) => {
  let week = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < data.length; i++) {
    let date = data[i]["created_at"];
    let day = new Date(date);
    let index = day.getDay();
    week[index]++;
  }
  return week;
};
