import React from "react";
import DashboardTop from "../../components/DashboardTop";
import DashboardBottom from "../../components/DashboardBottom";
import { BodyContainer } from "./styles";

function Main() {
  return (
    <BodyContainer>
      <DashboardTop />
      <DashboardBottom />
    </BodyContainer>
  );
}

export default Main;
