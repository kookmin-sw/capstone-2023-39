import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 45px;
  top: 0;
  left: 0;
  //background-color: #eef1fa;
  position: fixed;
  z-index: 99s;
  display: flex;
  justify-content: flex-end;
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
