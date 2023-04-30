import React, { useState } from "react";
import DashboardBottom from "../../components/Dashboard/Bottom";
import DashboardGoodIp from "../../components/Dashboard/Top/GoodIP";
import DashboardBadIp from "../../components/Dashboard/Top/BadIP";
import DashboardBothIp from "../../components/Dashboard/Top/BothIP"
import {
  BodyContainer,
  MapButtonContainer,
  MapNormalButton,
  MapAbnormalButton,
  MapBothButton,
  TableContainer,
} from "./styles";
import HybridTable from "../../components/HybridTable";
import BitcoinTable from "../../components/BitcoinTable";

function Main() {
  const [dashboardValue, setDashboardValue] = useState(2);

  return (
    <BodyContainer>
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
        <MapBothButton onClick={() => setDashboardValue(2)}>Both</MapBothButton>
      </MapButtonContainer>
      <TableContainer>
        <HybridTable />
        <BitcoinTable />
      </TableContainer>
      <DashboardBottom />
    </BodyContainer>
  );
}

export default Main;
