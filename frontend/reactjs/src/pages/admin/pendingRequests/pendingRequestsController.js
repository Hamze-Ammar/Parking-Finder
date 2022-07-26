import { URL } from "../../../constant/backend";

export const getPendingRequests = async (token) => {
  console.log(token);
  if (!token) {
    return;
  }
  try {
    const res = await fetch(`${URL}/admin/getPendingRequests`, {
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

export const acceptRequest = async (token, id) => {
  if (!token || !id) {
    return;
  }
  try {
    const res = await fetch(`${URL}/admin/acceptRequest/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data?.status) {
      return data.res;
    }
  } catch (err) {
    console.log(err);
  }
};

export const declineRequest = async (token, id) => {
  if (!token || !id) {
    return;
  }
  try {
    const res = await fetch(`${URL}/admin/declineRequest/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data?.status) {
      return data.res;
    }
  } catch (err) {
    console.log(err);
  }
};
