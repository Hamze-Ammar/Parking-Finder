export const addToFavorite = async (token, id) => {
  if (!id) {
    console.log("id not found");
    return;
  }
  console.log(id);
  // let token = await AsyncStorage.getItem("token");

  //Just in case
  if (!token) {
    return;
  }
  const res = await fetch(`${URL}/user/addToFavorite/${id}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === "Success") {
    console.log(data);
    return data;
  } else {
    return false;
  }
};
