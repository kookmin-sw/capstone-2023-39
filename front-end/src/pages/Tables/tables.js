import React, { useState } from "react";
import DashboardBottom from "../../components/Dashboard/Bottom";
import NaviBar from "../../components/NaviBar";
import { BodyContainer,TableContainer } from "./styles";
import Table from "../../components/Table";
function Tables() {
  return (
    <BodyContainer>
      <NaviBar/>
      
      <TableContainer>
        <Table />
        <DashboardBottom />
      </TableContainer>
    </BodyContainer>
  );
}

export default Tables;
