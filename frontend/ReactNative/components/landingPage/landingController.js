import { URL } from "../../constants/backendSync";

export const saveRequestToServer = async (city, token) => {
  if (!city || !token) {
    return;
  }

  try {
    const res = await fetch(`${URL}/user/searchRequest`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ city }),
    });
    const data = await res.json();
    if (data?.status) {
      return data.status;
    }
  } catch (err) {
    console.log({ err });
  }
};
