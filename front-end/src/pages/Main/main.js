import React, {useState} from "react";
import DashboardTop from "../../components/DashboardTop";
import DashboardBottom from "../../components/DashboardBottom";
import DashboardTopGoodIp from "../../components/DashboardTopGoodIp"
import { BodyContainer,MapButtonContainer,MapButton } from "./styles";

function Main() {
  const [dashboardValue, setDashboardValue] = useState(true);

  const ShowGoodIp = () => {
    setDashboardValue(false);
  };

  const ShowBadIp = () => {
    setDashboardValue(true);
  };

  return (
    <BodyContainer>
      {dashboardValue === true && <DashboardTop />}
      {dashboardValue === false && <DashboardTopGoodIp />}
      <MapButtonContainer>
        <MapButton onClick={ShowGoodIp}>Good Ip</MapButton>
        <MapButton onClick={ShowBadIp}>Bad Ip</MapButton>
      </MapButtonContainer>
      <DashboardBottom />
    </BodyContainer>
  );
}

export default Main;
