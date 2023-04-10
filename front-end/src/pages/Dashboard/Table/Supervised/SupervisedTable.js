import React from "react";
import Iframe from "react-iframe";

const SupervisedTable = () => {
  return (
    <Iframe
      url="http://15.165.95.126:5601/app/dashboards#/view/98fce8a0-d607-11ed-b48d-bdaa492e3482?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3A'2023-02-01T07%3A58%3A32.121Z'%2Cto%3Anow))&hide-filter-bar=true"
      height="354rem"
      width="35%"
      id="myId"
      frameBorder={0}
      className="supervisedTable"
      position="relative"
    />
  );
};

export default SupervisedTable;
