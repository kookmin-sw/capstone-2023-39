import React from "react";
import Iframe from "react-iframe";

const Dashboard = () => {
  return (
    <Iframe
      url="http://15.165.95.126:5601/app/dashboards#/view/b2fad010-d38b-11ed-b48d-bdaa492e3482?embed=true&_a=(viewMode:view)&_g=(filters%3A!()%2Cquery%3A(language%3Akuery%2Cquery%3A'')%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3A'2023-02-01T07%3A58%3A32.121Z'%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true"
      height="1000"
      width="100%"
      id="myId"
      className="myClassname"
      display="Full screen"
      position="relative"
    />
  );
};

export default Dashboard;
