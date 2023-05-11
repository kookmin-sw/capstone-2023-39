import styled from "styled-components";

export const NaviContainer = styled.div`
  width: 5%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color:#897EDB;
  display: flex;
  flex-direction: column;
`;
export const LogoButton = styled.button`
  width: 100%;
  height: 70px;
  color: #fff;
  background-color: #897EDB;
  border: none;
  border-bottom: 0.5px solid #fff;
`;

export const RouteButton = styled.button`
  width: 100%;
  height: 70px;
  color: #fff;
  background-color: #897EDB;
  border: none;
  border-bottom: 0.5px solid #fff;
  cursor: pointer;
  transition: 0.3s all;
   &:hover{
     transform:scale(1.1);
     border:none;
   }
`;