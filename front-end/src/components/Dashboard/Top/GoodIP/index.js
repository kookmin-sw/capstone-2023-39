import React from "react";
import Iframe from "react-iframe";

function DashboardGoodIp() {
  return (
    <Iframe
      styles={{ marginLeft: "4%" }}
      src="http://203.246.112.139:15601/app/dashboards#/view/a8e5fe80-dd2f-11ed-bf4f-d1ab119432ec?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-query-input=true&show-time-filter=true&hide-filter-bar=true"
      height="1100"
      width="97%"
      frameBorder={0}
    ></Iframe>
  );
}

export default DashboardGoodIp;
