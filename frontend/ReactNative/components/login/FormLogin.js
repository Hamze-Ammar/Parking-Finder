import { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import { Button } from "../../ui/Button";
import { SpecialButton } from "../../ui/SpecialButton";
import { Input } from "../../ui/Input";

import { validateInput } from "./loginController";
import { loginUser } from "./loginController";
import { getFavouriteParkings } from "../favorites/favoriteController";
import { FavoritesContext } from "../../store/favorites-context";
import { AuthContext } from "../../store/auth-context";

const FormLogin = ({ setIsAuthenticating }) => {
  const authCtx = useContext(AuthContext);
  const favCtx = useContext(FavoritesContext);

  const [sendRequest, setSendRequest] = useState(false);
  const [credentials, setCredentials] = useState({});
  const [token, setToken] = useState();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
  });

  const { email: emailIsInvalid, password: passwordIsInvalid } =
    credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }

  useEffect(() => {
    if (sendRequest) {
      submitHandler();
      return () => {
        setSendRequest(false);
        setIsAuthenticating(false);
      };
    }
  }, [sendRequest]);

  const submitHandler = async () => {
    setIsAuthenticating(true);
    const validation = validateInput({
      email: enteredEmail,
      password: enteredPassword,
    });
    if (validation !== "valid") {
      setCredentialsInvalid(validation);
    } else {
      setCredentials({
        email: enteredEmail,
        password: enteredPassword,
      });
      const input = {
        email: enteredEmail,
        password: enteredPassword,
      };
      let token = await loginUser(input);
      if (!token) {
        return;
      } else {
        // After successfully signedIn send request to get favourite parkings
        let parkings = await getFavouriteParkings(token);
        // Store favourite parkings in store
        await favCtx.storeFavorites(parkings);
        await authCtx.authenticate(token);
      }
    }
  };

  return (
    <View>
      <Input
        onUpdateValue={updateInputValueHandler.bind(this, "email")}
        value={enteredEmail}
        keyboardType="email-address"
        isInvalid={emailIsInvalid}
        placeholder="Enter Your Email"
      />

      <Input
        onUpdateValue={updateInputValueHandler.bind(this, "password")}
        secure
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
        placeholder="Enter Your Password"
      />
      <Button
        onPress={() => {
          setSendRequest(true);
        }}
      >
        Sign In
      </Button>
      <SpecialButton>Continue with Google</SpecialButton>
    </View>
  );
};

export default FormLogin;
