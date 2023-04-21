import React, { useState } from "react";
import DashboardTop from "../../components/DashboardTop";
import DashboardBottom from "../../components/DashboardBottom";
import DashboardTopGoodIp from "../../components/DashboardTopGoodIp";
import { BodyContainer, MapButtonContainer, MapButton } from "./styles";

function Main() {
  const [dashboardValue, setDashboardValue] = useState(true);

  return (
    <BodyContainer>
      {dashboardValue === true && <DashboardTop />}
      {dashboardValue === false && <DashboardTopGoodIp />}
      <MapButtonContainer>
        <MapButton onClick={() => setDashboardValue(false)}>Good Ip</MapButton>
        <MapButton onClick={() => setDashboardValue(true)}>Bad Ip</MapButton>
      </MapButtonContainer>
      <DashboardBottom />
    </BodyContainer>
  );
}

export default Main;
