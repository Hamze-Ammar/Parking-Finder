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
    return data;
  } else {
    return false;
  }
};

export const getUserProfile = async (token) => {
  if (!token) {
    return;
  }
  const res = await fetch(`${URL}/user/getUserProfile`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === "Success") {
    if (data?.res) {
      // console.log(data.res);
      return data?.res;
    }
  } else {
    return false;
  }
};

export const editProfile = async (token, credentials) => {
  if (!token) {
    return;
  }
  const res = await fetch(`${URL}/user/editProfile`, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await res.json();
  if (data.status === "Success") {
    // console.log(data);
     if(data?.res){
      return(data.res)
    };
  } else {
    return false;
  }
};
