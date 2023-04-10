import React from "react";
import Iframe from "react-iframe";

const Line = () => {
  return (
    <Iframe
      src="http://15.165.95.126:5601/app/dashboards#/view/eb10df20-d607-11ed-b48d-bdaa492e3482?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3A'2021-01-01T10%3A35%3A35.314Z'%2Cto%3Anow))&hide-filter-bar=true"
      height="400"
      width="100%"
      frameBorder={0}
    ></Iframe>
  );
};

export default Line;
