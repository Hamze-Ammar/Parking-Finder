import { URL } from "../../constant/backend";

export const saveNewParkingToServer = async (token, info) => {
  if (!URL || !token || !info) {
    return "Missing Values";
  }
  try {
    const res = await fetch(`${URL}/user/becomePartner`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const data = await res.json();
    console.log(data.status)
      if (data?.status){
        return data.status;
      }
  } catch (err) {
    console.log(err);
  }
};
