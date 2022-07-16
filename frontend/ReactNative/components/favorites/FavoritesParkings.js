import { StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import { FavoritesContext } from "../../store/favorites-context";
import { AuthContext } from "../../store/auth-context";

import { addToFavorite } from "./favoriteController";

const FavoritesParkings = (id) => {
  const authCtx = useContext(AuthContext);
  const favoritesCtx = useContext(FavoritesContext);
  console.log("from favoritesParkings");
  // console.log({ id });
  // console.log(authCtx.token);
  const token = authCtx.token;

  // useEffect(() => {
  //   addToFavorite();
  // }, []);

  return favoritesCtx;
};

export default FavoritesParkings;

const styles = StyleSheet.create({});
