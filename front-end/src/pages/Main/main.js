import React, { useState } from "react";
import DashboardBottom from "../../components/Dashboard/Bottom";
import DashboardGoodIp from "../../components/Dashboard/Top/GoodIP";
import DashboardBadIP from "../../components/Dashboard/Top/BadIP";
import {
  BodyContainer,
  MapButtonContainer,
  MapNormalButton,
  MapAbnormalButton,
  MapBothButton,
  TableContainer,
} from "./styles";
import HybridTable from "../../components/HybridTable";
import CountTable from "../../components/CountTable";

function Main() {
  const [dashboardValue, setDashboardValue] = useState(2);

  return (
    <BodyContainer>
      {dashboardValue === 0 && <DashboardBadIP />}
      {dashboardValue === 1 && <DashboardGoodIp />}
      {dashboardValue === 2 && <DashboardBadIP/>}
      <MapButtonContainer>
        <MapNormalButton onClick={() => setDashboardValue(0)}>Good Ip</MapNormalButton>
        <MapAbnormalButton onClick={() => setDashboardValue(1)}>Bad Ip</MapAbnormalButton>
        <MapBothButton onClick={() => setDashboardValue(2)}>Both</MapBothButton>
      </MapButtonContainer>
      <TableContainer>
        <HybridTable />
        <CountTable />
      </TableContainer>
      <DashboardBottom />
    </BodyContainer>
  );
}

export default Main;
