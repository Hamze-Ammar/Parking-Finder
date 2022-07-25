import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/formParking/RegisterForm";
import MyMap from "../../components/formParking/Map";
import LoadingButtons from "../../ui/LoadingButton";
import SendButton from "../../ui/SendButton";
import BackButton from "../../ui/BackButton";
import FormTitle from "../../ui/FormTitle";
import { useStyles } from "./registerStyle";
import { AuthContext } from "../../store/AuthContext";
import { saveNewParkingToServer } from "./registerParkingController";
import CustomModal from "../../ui/CustomModal";

const RegisterParking = () => {
  const AuthCtx = useContext(AuthContext);
  const [hasPendingRequest, setHasPendingRequest] = useState(
    AuthCtx.hasRequest
  );
  useEffect(() => {
    setHasPendingRequest(AuthCtx.hasRequest);
  }, [AuthCtx.hasRequest]);

  let navigate = useNavigate();
  const classes = useStyles();
  // console.log(AuthCtx.token);
  const [pickedLocation, setPickedLocation] = useState();
  const [disableSave, setDisableSave] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState();
  const [response, setResponse] = useState();


  // Send data to server
  const handleSubmit = async () => {
    setIsLoading(!isLoading);
    setResponse(await saveNewParkingToServer(AuthCtx.token, info));
  };
  useEffect(() => {
    if (response === "Success") {
      AuthCtx.setRequestStatus(true);
      setIsLoading(!isLoading);
    }
  }, [response]);

  // On back button press
  const returnBack = () => navigate("/");

  if (hasPendingRequest) {
    return <CustomModal />;
  }

  return (
    <div className={classes.outerContainer}>
      <div className={classes.title}>
        <FormTitle>Become a Partner in no Time!</FormTitle>
      </div>
      <div className={classes.container}>
        <RegisterForm
          setInfo={setInfo}
          setDisableSave={setDisableSave}
          pickedLocation={pickedLocation}
        />

        <MyMap setPickedLocation={setPickedLocation} />
      </div>
      <div className={classes.btnContainer}>
        <BackButton returnBack={returnBack} />
        {isLoading ? (
          <LoadingButtons />
        ) : (
          <SendButton disableSave={disableSave} handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default RegisterParking;
