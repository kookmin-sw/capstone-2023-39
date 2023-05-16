import React from "react";
import NaviBar from "../../components/NaviBar";
import * as S from "./styles";
import { GlobalStyle } from "../../fonts/fonts";

function Home() {
  return (
    <S.BodyContainer>
      <NaviBar></NaviBar>
      <GlobalStyle />
      <S.MainContainer>
        <S.titleContainer>
          <S.subTitle>{`국민대학교를 위한 네트워크 이상탐지 기술 개발 및 서비스화`}</S.subTitle>
          <S.mainTitle>
            Search Engine for the Internet of Everything !
          </S.mainTitle>
        </S.titleContainer>
      </S.MainContainer>
    </S.BodyContainer>
  );
}

export default Home;
