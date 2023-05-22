import React from "react";
import Iframe from "react-iframe";

function Detect() {
  return (
    <Iframe
      //styles={{ marginLeft: 60 }}
      src="http://203.246.112.139:15601/app/dashboards#/view/21ba2b90-efed-11ed-826a-41329daeef14?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-time-filter=true"
      height="1300"
      width="100%"
      frameBorder={0}
    ></Iframe>
  );
}

export default Detect;
