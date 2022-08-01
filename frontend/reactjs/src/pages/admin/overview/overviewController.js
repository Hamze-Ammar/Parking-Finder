import { URL } from "../../../constant/backend";

export const getOverviewHeaderInfo = async (token) => {
  if (!token) {
    return;
  }
  try {
    const res = await fetch(`${URL}/admin/getOverviewHeader`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data?.status === "Success") {
    //   console.log(data.res);
      return data.res;
    }
  } catch (err) {
    console.log(err);
  }
};
