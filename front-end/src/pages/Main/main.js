import React, { useState } from "react";
import DashboardBottom from "../../components/Dashboard/Bottom";
import DashboardGoodIp from "../../components/Dashboard/Top/GoodIP";
import DashboardBadIP from "../../components/Dashboard/Top/BadIP";
import { BodyContainer, MapButtonContainer, MapButton } from "./styles";

function Main() {
  const [dashboardValue, setDashboardValue] = useState(true);

  return (
    <BodyContainer>
      {dashboardValue === true && <DashboardBadIP />}
      {dashboardValue === false && <DashboardGoodIp />}
      <MapButtonContainer>
        <MapButton onClick={() => setDashboardValue(false)}>Good Ip</MapButton>
        <MapButton onClick={() => setDashboardValue(true)}>Bad Ip</MapButton>
      </MapButtonContainer>
      <DashboardBottom />
    </BodyContainer>
  );
}

export default Main;
