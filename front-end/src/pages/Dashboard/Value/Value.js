import React from "react";
import Iframe from "react-iframe";

const Value = () => {
  return (
    <Iframe
      url="http://15.165.95.126:5601/app/dashboards#/view/770736b0-d607-11ed-b48d-bdaa492e3482?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2023-02-01T07:58:32.121Z',to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!t,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(attributes:(references:!((id:f777fef0-d162-11ed-b48d-bdaa492e3482,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:f777fef0-d162-11ed-b48d-bdaa492e3482,name:indexpattern-datasource-layer-2d7338a3-b199-4a66-9413-848f26939a7a,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('2d7338a3-b199-4a66-9413-848f26939a7a':(columnOrder:!(e0d32272-d924-428d-b33a-a4d71bc626d4),columns:(e0d32272-d924-428d-b33a-a4d71bc626d4:(dataType:number,isBucketed:!f,label:'Unique%20count%20of%20destination',operationType:unique_count,scale:ratio,sourceField:destination)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(accessor:e0d32272-d924-428d-b33a-a4d71bc626d4,layerId:'2d7338a3-b199-4a66-9413-848f26939a7a',layerType:data)),title:'',type:lens,visualizationType:lnsMetric),enhancements:()),gridData:(h:5,i:'15183538-0362-40ac-807d-cd546b8f4e0a',w:24,x:0,y:0),panelIndex:'15183538-0362-40ac-807d-cd546b8f4e0a',type:lens,version:'7.17.9')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:main_value,viewMode:view)&hide-filter-bar=true"
      height="160rem"
      width="100%"
      id="myId"
      frameBorder={0}
      className="Value"
      position="relative"
    />
  );
};

export default Value;
