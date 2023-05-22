import React, { useState } from "react";
import DashboardGoodIp from "../../components/Dashboard/Top/GoodIP";
import DashboardBadIp from "../../components/Dashboard/Top/BadIP";
import DashboardAllIp from "../../components/Dashboard/Top/AllIP";
import DashboardCtiIp from "../../components/Dashboard/Top/CtiIP"
import NaviBar from "../../components/NaviBar";
import {
  BodyContainer,
  MapButtonContainer,
  MapNormalButton,
  MapAbnormalButton,
  MapAllButton,
  MapCtiButton,
  ModalContainer,
  ColorModal
} from "./styles";

function Main() {
  const [dashboardValue, setDashboardValue] = useState(3);

  return (
    <BodyContainer>
      <NaviBar></NaviBar>
      <ModalContainer>
        <ColorModal>
        🟢 정상 <br/><br/>
        🔴 악성 <br/><br/>
        🟠 CTI 정보 확장 <br/><br/>
        </ColorModal>
      </ModalContainer>
      {dashboardValue === 0 && <DashboardGoodIp />}
      {dashboardValue === 1 && <DashboardBadIp />}
      {dashboardValue === 2 && <DashboardCtiIp />}
      {dashboardValue === 3 && <DashboardAllIp />}
      <MapButtonContainer>
        <MapNormalButton onClick={() => setDashboardValue(0)}>
          정상 IP
        </MapNormalButton>
        <MapAbnormalButton onClick={() => setDashboardValue(1)}>
          악성 IP
        </MapAbnormalButton>
        <MapCtiButton onClick={() => setDashboardValue(2)}>
          CTI 정보 확장 IP
        </MapCtiButton>
        <MapAllButton onClick={() => setDashboardValue(3)}>
          전체 IP
        </MapAllButton>
      </MapButtonContainer>
    </BodyContainer>
  );
}

export default Main;
