import { View, Image } from "react-native";

const Logo = ({ logo }) => {
  let mini;
  if (logo === "mini") {
    mini = true;
  }
  mini = false;
  return (
    <View>
      {mini ? (
        <Image source={require(`../assets/images/logo-mini.png`)} />
      ) : (
        <Image source={require(`../assets/images/logo.png`)} />
      )}
    </View>
  );
};

export default Logo;
