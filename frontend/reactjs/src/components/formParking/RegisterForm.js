import * as React from "react";
import { createUseStyles } from "react-jss";

import TextInput from "../material/TextInput";
import MultilineTextFields from "../material/MultilineTextFields";
import NativePickers from "../material/MaterialUIPickers";
import CountrySelect from "../material/CountrySelect";
import { Colors } from "../../constant/color";
import FormContainer from "../../ui/FormContainer";
import FormRow from "../../ui/FormRow";
import FormTitle from "../../ui/FormTitle";

export default function RegisterForm({ info, setInfo, latitude, longitude }) {
  const classes = useStyles();

  const handleInput = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormContainer>
        <FormTitle>Register Your Parking</FormTitle>
        <FormRow>
          <TextInput name="name" title="Parking Name" setInput={handleInput} />
        </FormRow>
        <FormRow>
          <TextInput
            name="total_slots"
            type="Number"
            title="Number Of Slots"
            setInput={handleInput}
            inputProps={{
              maxLength: 13,
              step: 1,
              min: 1,
              max: 150,
            }}
          />
        </FormRow>

        <FormRow>
          <MultilineTextFields
            name="description"
            title="Description"
            setInput={handleInput}
          />
        </FormRow>
        <FormRow>
          <NativePickers
            name="opening_hr"
            title="Open at"
            setInput={handleInput}
          />
          <NativePickers
            name="closing_hr"
            title="Close at"
            setInput={handleInput}
          />
        </FormRow>

        <FormRow>
          <CountrySelect name="country_name" setInput={handleInput} />
          <TextInput name="city_name" title="City" setInput={handleInput} />
        </FormRow>
        <FormRow>
          <TextInput
            // name="latitude"
            disabled={true}
            type="Number"
            title="Latitude"
            userInput={latitude}
            // setInput={handleInput}
          />
          <TextInput
            // name="longitude"
            disabled={true}
            type="Number"
            title="Longitude"
            userInput={longitude}
            // setInput={handleInput}
          />
        </FormRow>
      </FormContainer>
    </>
  );
}

const useStyles = createUseStyles({});
