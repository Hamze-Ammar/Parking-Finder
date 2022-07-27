import { URL } from "../../../constant/backend";

export const getAllParkings = async (token) => {
  if (!token) {
    return;
  }
  try {
    const res = await fetch(`${URL}/admin/getAllParkings`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data?.status) {
      return data.res;
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteParking = async (token, id) => {
  if (!token || !id) {
    return;
  }
  try {
    const res = await fetch(`${URL}/admin/deleteParking/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data?.msg) {
      return true;
    }
  } catch (err) {
    console.log(err);
  }
};
