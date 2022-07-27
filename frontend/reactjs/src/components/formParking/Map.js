import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import FormContainer from "../../ui/FormContainer";

export default function MyMap({ center, setPickedLocation }) {
  const [defaultCenter, setDefaultCenter] = useState([
    33.891163243590825, 35.505971217496125,
  ]);
  function handleClick(e) {
    setDefaultCenter([e.latLng[0], e.latLng[1]]);
    setPickedLocation([e.latLng[0], e.latLng[1]]);
  }

  return (
    <FormContainer>
      <Map
        defaultCenter={defaultCenter}
        defaultZoom={14}
        onClick={handleClick}
      >
        <Marker width={50} anchor={defaultCenter} />
      </Map>
    </FormContainer>
  );
}
