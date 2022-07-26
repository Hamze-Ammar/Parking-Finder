import { URL } from "../../constant/backend";

export const checkForPendingRequest = async (token) => {
  if (!token) return;
  try {
    const res = await fetch(`${URL}/user/hasPendingRequest`, {
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
