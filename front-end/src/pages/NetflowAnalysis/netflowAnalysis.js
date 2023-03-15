import React from "react";
import Header from "../../components/Header/header";
import { Wrap, Contents } from "./styles";

function NewflowAnalysis() {
  return (
    <Wrap>
      <Header title={"Netflow"}></Header>
      <Contents />
    </Wrap>
  );
}

export default NewflowAnalysis;
