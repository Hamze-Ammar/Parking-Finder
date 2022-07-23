import { URL } from "../../../constants/backendSync";

export const getOverviewInfo = async (token) => {
  if (!token) {
    return;
  }
  const res = await fetch(`${URL}/user/getOverviewInfo`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === "Success") {
    // console.log(data.res);
    return data;
  } else {
    return false;
  }
};
