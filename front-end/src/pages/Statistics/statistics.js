import React from "react";
import DashboardBottom from "../../components/Dashboard/Bottom";
import NaviBar from "../../components/NaviBar";
import { BodyContainer, TableContainer } from "./styles";
import Table from "../../components/Table";
function Statistics() {
  return (
    <BodyContainer>
      <NaviBar />
      <TableContainer>
        <Table />
        <DashboardBottom />
      </TableContainer>
    </BodyContainer>
  );
}

export default Statistics;
