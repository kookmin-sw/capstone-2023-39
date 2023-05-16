import React from "react";
import { Link } from "react-router-dom";
import { NaviContainer, RouteButton, LogoButton } from "./styles";
import "boxicons";

function NaviBar() {
  return (
    <NaviContainer>
      <RouteButton>
        <box-icon
          name="react"
          type="logo"
          animation="tada"
          flip="vertical"
          color="#ffffff"
        ></box-icon>{" "}
        <br />
        39조
      </RouteButton>
      <RouteButton>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <box-icon name="search-alt" color="#ffffff"></box-icon>
          <br />
          악성 IP
        </Link>
      </RouteButton>
      <RouteButton>
        <Link
          to="/statistics"
          style={{ textDecoration: "none", color: "white" }}
        >
          <box-icon
            name="bar-chart-alt-2"
            type="solid"
            color="#ffffff"
          ></box-icon>{" "}
          <br />
          IP 분석
        </Link>
      </RouteButton>
      <RouteButton>
        <Link to="/detect" style={{ textDecoration: "none", color: "white" }}>
          <box-icon name="error" color="#ffffff"></box-icon> <br />
          보안탐지
          <br />
          대시보드
        </Link>
      </RouteButton>
    </NaviContainer>
  );
}

export default NaviBar;
