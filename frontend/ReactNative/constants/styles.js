import { Dimensions } from "react-native";

export const Colors = {
  primary500: "#7862FF",
  secondary500: "#1B3773",
  background500: "#e6eeff",
  background200: "#FFFCFC",
  error100: "#F34913",
  error200: "#F34913",
  error500: "#F34913",
  marked400: "#ff78f1",
  earning500: "#f1c232",
};

export const ProfilePicSize = {
  diameter: 180,
};

export const BorderRadius = {
  primary: 15,
};

export const dimensions = {
  width: Math.round(Dimensions.get("window").width),
  height: Math.round(Dimensions.get("window").height),
};
