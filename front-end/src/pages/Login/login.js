import React from "react";
import Header from "../../components/Header/header";
import { Wrap, Contents } from "./styles";

function Login() {
  return (
    <Wrap>
      <Header title={"Login"}></Header>
      <Contents />
    </Wrap>
  );
}

export default Login;
