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

export const getAllUsersAndSlots = async (token) => {
  if (!token) {
    return;
  }
  try {
    const res = await fetch(`${URL}/admin/getAllUsersAndSlots`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data?.status === "Success") {
      return parseDataYearly(data);
    }
  } catch (err) {
    console.log(err);
  }
};

const parseDataYearly = (data) => {
  if (!data) {
    return;
  }
  let usersYearly = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let slotsYearly = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  let users = data.users;
  let slots = data.slots;
  for (let i = 0; i < users.length; i++) {
    let date = new Date(users[i].created_at);
    let month = date.getMonth();
    usersYearly[month]++;
  }
  for (let i = 0; i < slots.length; i++) {
    let date = new Date(slots[i].created_at);
    let month = date.getMonth();
    slotsYearly[month]++;
  }
  
  return { usersYearly, slotsYearly };
};
