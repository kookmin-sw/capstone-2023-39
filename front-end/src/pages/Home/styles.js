import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background: #000;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
`;

export const titleContainer = styled.div`
  width: 70%;
  height: fit-content;
  text-align: left;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const mainTitle = styled.div`
  font-size: 75px;
  font-weight: 400;
  font-family: "GangwonEduPowerExtraBoldA";
  line-height: 100px;
  color: #fff;
`;

export const subTitle = styled.div`
  white-space: pre-line;
  font-weight: 650;
  font-size: 70px;
  //font-family: "sans-serif";
  line-height: 80px;
  position: relative;
  margin-top: -25%;
  letter-spacing: -0.0111111em;
  color: #4e535e;
  mix-blend-mode: normal;
  opacity: 0.44;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
