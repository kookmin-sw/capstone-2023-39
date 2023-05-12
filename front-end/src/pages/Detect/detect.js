import React from "react";
import NaviBar from "../../components/NaviBar";
import { BodyContainer, DetectContainer } from "./styles";
import DetectDashboard from "../../components/Dashboard/Detect";
function Detect() {
  return (
    <BodyContainer>
      <NaviBar />
      <DetectContainer>
        <DetectDashboard />
      </DetectContainer>
    </BodyContainer>
  );
}

export default Detect;
