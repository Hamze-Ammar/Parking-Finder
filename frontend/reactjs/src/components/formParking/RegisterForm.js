import * as React from "react";
import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

import TextInput from "../material/TextInput";
import MultilineTextFields from "../material/MultilineTextFields";
import NativePickers from "../material/MaterialUIPickers";
import CountrySelect from "../material/CountrySelect";
import { Colors } from "../../constant/color";
import FormContainer from "../../ui/FormContainer";
import FormRow from "../../ui/FormRow";
import FormTitle from "../../ui/FormTitle";

export default function RegisterForm({ pickedLocation }) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [openFrom, setOpenFrom] = useState("");
  const [openTo, setOpenTo] = useState("");
  const [numOfSlots, setNumOfSlots] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    if (pickedLocation) {
      setLatitude(pickedLocation[0]);
      setLongitude(pickedLocation[1]);
    }
  }, [pickedLocation]);

  console.log(numOfSlots);
  console.log(latitude);

  return (
    <>
      <FormContainer>
        <FormTitle>Register Your Parking</FormTitle>

        <FormRow>
          <TextInput title="Parking Name" setInput={setName} />
        </FormRow>
        <FormRow>
          <TextInput
            type="Number"
            title="Number Of Slots"
            setInput={setNumOfSlots}
            inputProps={{
              maxLength: 13,
              step: 1,
              min: 10,
              max: 150,
            }}
          />
        </FormRow>

        <FormRow>
          <MultilineTextFields title="Description" setInput={setDescription} />
        </FormRow>
        <FormRow>
          <NativePickers title="from" setInput={setOpenFrom} />
          <NativePickers title="to" setInput={setOpenTo} />
        </FormRow>

        <FormRow>
          <CountrySelect setInput={setCountry} />
          <TextInput title="City" setInput={setCity} />
        </FormRow>
        <FormRow>
          <TextInput
            disabled={true}
            type="Number"
            title="Latitude"
            userInput={latitude}
          />
          <TextInput
            disabled={true}
            type="Number"
            title="Longitude"
            userInput={longitude}
          />
        </FormRow>
      </FormContainer>
    </>
  );
}

const useStyles = createUseStyles({});
