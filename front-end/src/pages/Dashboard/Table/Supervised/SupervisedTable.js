import React from "react";
import Iframe from "react-iframe";

const SupervisedTable = () => {
  return (
    <Iframe
      url="http://15.165.95.126:5601/app/dashboards#/view/98fce8a0-d607-11ed-b48d-bdaa492e3482?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2023-02-01T07:58:32.121Z',to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(attributes:(references:!((id:f777fef0-d162-11ed-b48d-bdaa492e3482,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:f777fef0-d162-11ed-b48d-bdaa492e3482,name:indexpattern-datasource-layer-3af9d7d7-4f0f-412e-a101-f393f2e8c80c,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('3af9d7d7-4f0f-412e-a101-f393f2e8c80c':(columnOrder:!('05a249a7-e21e-4207-b6e7-674e37dd4b35',f544222c-9189-4fbd-80f3-8d3f5d65b5e5),columns:('05a249a7-e21e-4207-b6e7-674e37dd4b35':(customLabel:!t,dataType:ip,isBucketed:!t,label:%EC%A7%80%EB%8F%84%ED%95%99%EC%8A%B5,operationType:terms,params:(missingBucket:!f,orderBy:(fallback:!f,type:alphabetical),orderDirection:desc,otherBucket:!f,size:1000),scale:ordinal,sourceField:source),f544222c-9189-4fbd-80f3-8d3f5d65b5e5:(customLabel:!t,dataType:ip,isBucketed:!f,label:destination,operationType:last_value,params:(sortField:'@timestamp'),scale:ratio,sourceField:destination)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(columns:!((alignment:center,columnId:'05a249a7-e21e-4207-b6e7-674e37dd4b35',isTransposed:!f),(columnId:f544222c-9189-4fbd-80f3-8d3f5d65b5e5,hidden:!t,isTransposed:!f)),layerId:'3af9d7d7-4f0f-412e-a101-f393f2e8c80c',layerType:data)),title:'',type:lens,visualizationType:lnsDatatable),enhancements:()),gridData:(h:12,i:dde2e852-2a5c-492f-9ac0-664bd7201055,w:24,x:0,y:0),panelIndex:dde2e852-2a5c-492f-9ac0-664bd7201055,type:lens,version:'7.17.9')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:main_supervise,viewMode:view)&hide-filter-bar=true"
      height="354rem"
      width="35%"
      id="myId"
      className="supervisedTable"
      position="relative"
    />
  );
};

export default SupervisedTable;
