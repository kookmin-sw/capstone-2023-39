import React from "react";
import { useState } from "react";
import Iframe from "react-iframe";
import SearchButton from "../Button/searchButton";
import SearchModal from "../Modal/searchModal";
import * as S from "./styles";

function DashboardBottom() {
  const [showSupervised, setShowSupervised] = useState(false);
  const [showUnsupervised, setShowUnsupervised] = useState(false);
  const [showHybrid, setShowHybrid] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <S.btnContainer>
        <SearchButton onClick={() => setShowSupervised(true)}></SearchButton>
        <SearchButton onClick={() => setShowUnsupervised(true)}></SearchButton>
        <SearchButton onClick={() => setShowHybrid(true)}></SearchButton>
      </S.btnContainer>
      {showSupervised ? (
        <SearchModal close={() => setShowSupervised(false)} />
      ) : null}
      {showUnsupervised ? (
        <SearchModal close={() => setShowUnsupervised(false)} />
      ) : null}
      {showHybrid ? <SearchModal close={() => setShowHybrid(false)} /> : null}
      <Iframe
        src="http://203.246.112.139:15601/app/dashboards#/view/760bc710-dae6-11ed-8952-470f17d5498f?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true"
        height="700"
        width="100%"
        frameBorder={0}
      ></Iframe>
    </div>
  );
}

export default DashboardBottom;
