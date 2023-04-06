import React from 'react';
import Iframe from 'react-iframe';

const Dashboard = () => {
  return (
    <Iframe
      url="http://localhost:5601/app/dashboards#/view/797fcd80-d085-11ed-af68-61d805810905?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(viewMode:view)&hide-filter-bar=true"
      width="100%"
      height="1000px"
      id="myId"

      className="myClassname"
      display="Full screen"
      position="relative"
    />
  );
};

export default Dashboard;
