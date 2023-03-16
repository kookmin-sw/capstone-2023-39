import React from "react";
import Map from "../../components/Map/Map";
import Header from "../../components/Header/header";
import { Wrap, Contents } from "./styles";

function Visualization() {
  return (
    <Wrap>
      <Header title={"Visualization"} />
      <Contents>
        <Map />
      </Contents>
    </Wrap>
  );
}

export default Visualization;
