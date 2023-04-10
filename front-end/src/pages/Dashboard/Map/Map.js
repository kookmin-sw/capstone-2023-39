import React from "react";
import Iframe from "react-iframe";

const Map = () => {
  return (
    <Iframe
      src="http://15.165.95.126:5601/app/dashboards#/view/679eaa00-d607-11ed-b48d-bdaa492e3482?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3A'2017-11-02T07%3A58%3A32.121Z'%2Cto%3Anow))&hide-filter-bar=true"
      height="520px"
      width="70%"
      frameBorder={0}
    ></Iframe>
  );
};

export default Map;
