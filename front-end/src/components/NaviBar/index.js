import React from "react";
import { Link } from "react-router-dom";
import { NaviContainer, RouteButton } from "./styles";
import "boxicons";

function NaviBar() {
  return (
    <NaviContainer>
      <RouteButton>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <box-icon name="desktop" color="#ffffff"></box-icon>
          <br />
          M&C
        </Link>
      </RouteButton>
      <RouteButton>
        <Link to="/main" style={{ textDecoration: "none", color: "white" }}>
          <box-icon name="map-alt" color="#ffffff"></box-icon>
          <br />
          외부 IP <br />
          탐지
        </Link>
      </RouteButton>
      <RouteButton>
        <Link
          to="/statistics"
          style={{ textDecoration: "none", color: "white" }}
        >
          <box-icon name="search-alt" color="#ffffff"></box-icon> <br />
          탐지 IP <br />
          정보
        </Link>
      </RouteButton>
      <RouteButton>
        <Link to="/detect" style={{ textDecoration: "none", color: "white" }}>
          <box-icon
            name="bar-chart-alt-2"
            type="solid"
            color="#ffffff"
          ></box-icon>{" "}
          <br />
          트래픽
          <br />
          대시보드
        </Link>
      </RouteButton>
    </NaviContainer>
  );
}

export default NaviBar;
