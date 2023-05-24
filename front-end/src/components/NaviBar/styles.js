import styled from "styled-components";

export const NaviContainer = styled.div`
  width: 4%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
`;

export const RouteButton = styled.button`
  width: 100%;
  height: 11%;
  color: #fff;
  font-size: 12px;
  background-color: #000;
  border: none;
  border-bottom: 0.7px solid rgb(255, 255, 255, 0.5);
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.1);
    border: none;
  }
`;
