import React, { useState } from "react";
import NaviBar from "../../components/NaviBar";
import * as S from "./styles";
function Home() {
  return (
    <S.BodyContainer>
      <NaviBar></NaviBar>
      <div>hello</div>
    </S.BodyContainer>
  );
}

export default Home;
