import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 45px;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 99;
  display: flex;
  justify-content: flex-end;
  background-color: white;
`;

export const Menu = styled.div`
  display: flex;
  width: fit-content;
  height: 45px;
  gap: 60px;
  align-items: center;
  margin-right: 80px;
`;

export const MenuItem = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #8484a0;
  cursor: pointer;
`;

export const Wrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatusBar = styled.div`
  background-color: #5756b3;
  width: 110px;
  height: 3px;
  position: absolute;
  bottom: 0;
`;
