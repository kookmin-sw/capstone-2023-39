import React from "react";
import Iframe from "react-iframe";

function DashboardBothIp() {
  return (
    <Iframe
      styles={{ margin: 0, padding: 0 }}
      src="http://203.246.112.139:15601/app/dashboards#/view/ef96d350-e698-11ed-b563-99db2fe26a99?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-query-input=true"
      height="1120"
      width="100%"
      frameBorder={0}
    ></Iframe>
  );
}

export default DashboardBothIp;
