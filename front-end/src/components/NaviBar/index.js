import React from "react";
import {Link } from "react-router-dom";
import { NaviContainer, TopButton, BottomButton } from "./styles";

function NaviBar() {
  return (
      <NaviContainer>
        <TopButton>
          <Link to="/" style={{ textDecoration: "none" ,color:"white"}}>
            IP 확인
          </Link>
        </TopButton>
        <BottomButton>
          <Link to="/tables" style={{ textDecoration: "none",color:"white" }}>
            IP 분석
          </Link>
        </BottomButton>
      </NaviContainer>
  );
}

export default NaviBar;
