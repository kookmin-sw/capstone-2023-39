import React from "react";
import Iframe from "react-iframe";

const HybridTable = () => {
  return (
    <Iframe
      url="http://15.165.95.126:5601/app/dashboards#/view/baf384f0-d607-11ed-b48d-bdaa492e3482?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2023-02-01T07:58:32.121Z',to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(attributes:(references:!((id:f777fef0-d162-11ed-b48d-bdaa492e3482,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:f777fef0-d162-11ed-b48d-bdaa492e3482,name:indexpattern-datasource-layer-758c8013-37d3-4a63-b354-aca34145f133,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('758c8013-37d3-4a63-b354-aca34145f133':(columnOrder:!('2724ed5a-5742-484d-ad93-df01bee407fe',c5371af2-2a40-4d26-9fd8-fe517895b77d),columns:('2724ed5a-5742-484d-ad93-df01bee407fe':(customLabel:!t,dataType:ip,isBucketed:!t,label:%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C,operationType:terms,params:(missingBucket:!f,orderBy:(columnId:c5371af2-2a40-4d26-9fd8-fe517895b77d,type:column),orderDirection:desc,otherBucket:!t,size:100),scale:ordinal,sourceField:source),c5371af2-2a40-4d26-9fd8-fe517895b77d:(dataType:number,isBucketed:!f,label:'Count%20of%20records',operationType:count,scale:ratio,sourceField:Records)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(columns:!((alignment:center,columnId:'2724ed5a-5742-484d-ad93-df01bee407fe',isTransposed:!f),(columnId:c5371af2-2a40-4d26-9fd8-fe517895b77d,hidden:!t,isTransposed:!f)),layerId:'758c8013-37d3-4a63-b354-aca34145f133',layerType:data)),title:'',type:lens,visualizationType:lnsDatatable),enhancements:()),gridData:(h:12,i:'34a4cda2-3f13-4412-997f-c83f1a10a39d',w:24,x:0,y:0),panelIndex:'34a4cda2-3f13-4412-997f-c83f1a10a39d',type:lens,version:'7.17.9')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:main_hybrid,viewMode:view)&hide-filter-bar=true"
      height="354rem"
      width="28%"
      id="myId"
      className="hybridTable"
      position="relative"
    />
  );
};

export default HybridTable;
