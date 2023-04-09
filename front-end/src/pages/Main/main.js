import React from "react";
import Map from "../Dashboard/Map/Map";
import Chart from "../Dashboard/Chart/Chart";
import Value from "../Dashboard/Value/Value";
import SupervisedTable from "../Dashboard/Table/Supervised/SupervisedTable";
import UnSupervisedTable from "../Dashboard/Table/UnSupervised/UnSupervisedTable";
import HybridTable from "../Dashboard/Table/Hybrid/HybridTable";
import { BodyContainer, ColumnContainer } from "./styles";

function Main() {
  return (
    <BodyContainer>
      <Map />
      <ColumnContainer>
        <Chart />
        <Value />
      </ColumnContainer>
      <SupervisedTable />
      <UnSupervisedTable />
      <HybridTable />
    </BodyContainer>
  );
}

export default Main;
