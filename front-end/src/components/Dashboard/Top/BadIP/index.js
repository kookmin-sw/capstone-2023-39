import React from "react";
import Iframe from "react-iframe";

function DashboardTop() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Iframe
        src="http://203.246.112.139:15601/app/dashboards#/view/641fd5c0-dae4-11ed-8952-470f17d5498f?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-query-input=true&show-time-filter=true"
        height="100%"
        width="100%"
        frameBorder={0}
      ></Iframe>
    </div>
  );
}

export default DashboardTop;
