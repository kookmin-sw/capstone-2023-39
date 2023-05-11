import React, { useState } from "react";
import DashboardGoodIp from "../../components/Dashboard/Top/GoodIP";
import DashboardBadIp from "../../components/Dashboard/Top/BadIP";
import DashboardBothIp from "../../components/Dashboard/Top/BothIP";
import NaviBar from "../../components/NaviBar";
import {
  BodyContainer,
  MapButtonContainer,
  MapNormalButton,
  MapAbnormalButton,
  MapBothButton,
} from "./styles";

function Main() {
  const [dashboardValue, setDashboardValue] = useState(2);

  return (
    <BodyContainer>
      <NaviBar></NaviBar>
      {dashboardValue === 0 && <DashboardGoodIp />}
      {dashboardValue === 1 && <DashboardBadIp />}
      {dashboardValue === 2 && <DashboardBothIp />}
      <MapButtonContainer>
        <MapNormalButton onClick={() => setDashboardValue(0)}>
          Good Ip
        </MapNormalButton>
        <MapAbnormalButton onClick={() => setDashboardValue(1)}>
          Bad Ip
        </MapAbnormalButton>
        <MapBothButton onClick={() => setDashboardValue(2)}>
          Both IP
        </MapBothButton>
      </MapButtonContainer>
    </BodyContainer>
  );
}

export default Main;
