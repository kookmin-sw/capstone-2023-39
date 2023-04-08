import React from 'react';
import Iframe from 'react-iframe';

const Chart = () => {
  return (
    <Iframe
      url="http://15.165.95.126:5601/app/dashboards#/view/589ea320-d607-11ed-b48d-bdaa492e3482?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2023-02-01T07:58:32.121Z',to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(attributes:(references:!((id:f777fef0-d162-11ed-b48d-bdaa492e3482,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:f777fef0-d162-11ed-b48d-bdaa492e3482,name:indexpattern-datasource-layer-e15388fa-9bd6-40e6-8df3-e6402af3c4e4,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:(e15388fa-9bd6-40e6-8df3-e6402af3c4e4:(columnOrder:!('39a3f111-471e-470f-9328-7e412d9053ff','08125dd1-8b84-4ea1-b839-2d4c88907d1d'),columns:('08125dd1-8b84-4ea1-b839-2d4c88907d1d':(dataType:number,isBucketed:!f,label:'Last%20value%20of%20max_pkt',operationType:last_value,params:(sortField:'@timestamp'),scale:ratio,sourceField:max_pkt),'39a3f111-471e-470f-9328-7e412d9053ff':(dataType:ip,isBucketed:!t,label:'Top%20values%20of%20source',operationType:terms,params:(missingBucket:!f,orderBy:(fallback:!t,type:alphabetical),orderDirection:asc,otherBucket:!t,size:5),scale:ordinal,sourceField:source)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(layers:!((categoryDisplay:default,groups:!('39a3f111-471e-470f-9328-7e412d9053ff'),layerId:e15388fa-9bd6-40e6-8df3-e6402af3c4e4,layerType:data,legendDisplay:default,metric:'08125dd1-8b84-4ea1-b839-2d4c88907d1d',nestedLegend:!f,numberDisplay:percent)),shape:donut)),title:'',type:lens,visualizationType:lnsPie),enhancements:()),gridData:(h:11,i:de46723c-8334-4c44-b7da-902e86e860cb,w:24,x:0,y:0),panelIndex:de46723c-8334-4c44-b7da-902e86e860cb,type:lens,version:'7.17.9')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:main_donutchart,viewMode:view)&hide-filter-bar=true"
      height="324rem"
      width="100%"
      id="myId"
      className="donutChart"
      position="relative"
    />
  );
};

export default Chart;
