import * as React from "react";
import { useState } from "react";
import TextInput from "../material/TextInput";
import MultilineTextFields from "../material/MultilineTextFields";
import NativePickers from "../material/MaterialUIPickers";
import CountrySelect from "../material/CountrySelect";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [openFrom, setOpenFrom] = useState("");
  const [openTo, setOpenTo] = useState("");
  const [numOfSlots, setNumOfSlots] = useState("");
  const [country, setCountry] = useState("");

  return (
    <>
      <h1>Register Your Parking</h1>
      <TextInput title="Name" setInput={setName} />
      <TextInput
        type="Number"
        title="Number Of Slots"
        setInput={setNumOfSlots}
      />
      {name}
      <MultilineTextFields title="Description" setInput={setDescription} />
      <NativePickers title="from" setInput={setOpenFrom} />
      <NativePickers title="to" setInput={setOpenTo} />
      <CountrySelect setInput={setCountry} />
      {country}
    </>
  );
}
