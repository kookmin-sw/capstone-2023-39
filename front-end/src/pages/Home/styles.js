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
  width: 80%;
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
  white-space: pre-line;
`;

export const subTitle = styled.div`
  white-space: pre-line;
  font-size: 30px;
  font-family: "AppleSDGothicNeoL";
  line-height: 50px;
  color: #fff;
  opacity: 0.8;
`;
