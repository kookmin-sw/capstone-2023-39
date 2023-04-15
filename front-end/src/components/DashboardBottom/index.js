import React from "react";
import Iframe from "react-iframe";

function DashboardBottom() {
  return (
    <Iframe
      src="http://203.246.112.139:15601/app/dashboards#/view/760bc710-dae6-11ed-8952-470f17d5498f?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true"
      height="700"
      width="100%"
      frameBorder={0}
    ></Iframe>
  );
}

export default DashboardBottom;
