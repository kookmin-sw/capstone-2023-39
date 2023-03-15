import React from "react";
import Header from "../../components/Header/header";
import { Wrap, Contents } from "./styles";

function Admin() {
  return (
    <Wrap>
      <Header title={"Admin"}></Header>
      <Contents />
    </Wrap>
  );
}

export default Admin;
