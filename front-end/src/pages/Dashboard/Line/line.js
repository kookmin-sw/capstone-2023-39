import React from "react";
import Iframe from "react-iframe";

const Line = () => {
  return (
    <Iframe
      src="http://15.165.95.126:5601/app/dashboards#/view/eb10df20-d607-11ed-b48d-bdaa492e3482?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2023-02-01T07:58:32.121Z',to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(attributes:(references:!((id:f777fef0-d162-11ed-b48d-bdaa492e3482,name:indexpattern-datasource-current-indexpattern,type:index-pattern),(id:f777fef0-d162-11ed-b48d-bdaa492e3482,name:indexpattern-datasource-layer-33968e5f-60af-49b3-b6cb-2b7d1809c5be,type:index-pattern)),state:(datasourceStates:(indexpattern:(layers:('33968e5f-60af-49b3-b6cb-2b7d1809c5be':(columnOrder:!(b83611b8-3905-4a3b-bc6d-6358f5eec9ab,'3cdd153b-4598-485e-9c55-e9aadcd77edc'),columns:('3cdd153b-4598-485e-9c55-e9aadcd77edc':(dataType:number,isBucketed:!f,label:'Average%20of%20score',operationType:average,scale:ratio,sourceField:score),b83611b8-3905-4a3b-bc6d-6358f5eec9ab:(dataType:date,isBucketed:!t,label:first,operationType:date_histogram,params:(interval:'1m'),scale:interval,sourceField:first)),incompleteColumns:())))),filters:!(),query:(language:kuery,query:''),visualization:(axisTitlesVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),fittingFunction:None,gridlinesVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),labelsOrientation:(x:0,yLeft:0,yRight:0),layers:!((accessors:!('3cdd153b-4598-485e-9c55-e9aadcd77edc'),layerId:'33968e5f-60af-49b3-b6cb-2b7d1809c5be',layerType:data,seriesType:line,xAccessor:b83611b8-3905-4a3b-bc6d-6358f5eec9ab)),legend:(isVisible:!t,position:right),preferredSeriesType:line,tickLabelsVisibilitySettings:(x:!t,yLeft:!t,yRight:!t),valueLabels:hide,yLeftExtent:(mode:full),yRightExtent:(mode:full))),title:'',type:lens,visualizationType:lnsXY),enhancements:()),gridData:(h:13,i:ea35655f-1732-4596-a99e-f1b35c242833,w:48,x:0,y:0),panelIndex:ea35655f-1732-4596-a99e-f1b35c242833,type:lens,version:'7.17.9')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:main_timetable,viewMode:view)"
      height="600"
      width="100%"
      frameBorder={0}
    ></Iframe>
  );
};

export default Line;
