import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100vw;
  height: 100%;
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
  width: 90%;
  height: 100%;
  text-align: left;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 20%;
`;

export const mainTitle = styled.div`
  font-size: 64px;
  font-weight: 400;
  font-family: "GangwonEduPowerExtraBoldA";
  line-height: 105px;
  color: #fff;
  white-space: pre-line;
  position: relative;
`;

export const subTitle = styled.div`
  white-space: pre-line;
  font-size: 30px;
  font-family: "AppleSDGothicNeoL";
  line-height: 30px;
  color: #fff;
  opacity: 0.7;
  position: relative;
`;

export const MapImg = styled.img`
  width: 612px;
  height: 612px;
  align-items: flex-end;
  opacity: 1;
  position: absolute;
  margin-top: 30%;
  margin-left: 40%;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  margin-top: 30%;
`;

export const TargetContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  margin-top: 12%;
  margin-bottom: 8%;
`;

export const CommonTitle = styled.div`
  white-space: pre-line;
  font-size: 35px;
  font-family: "AppleSDGothicNeoM";
  line-height: 40px;
  color: #fff;
  position: relative;
  font-weight: 500;
  margin-bottom: 5%;
`;

export const BubbleContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.content === "question" ? "row" : "column"};
  width: 90%;
  height: ${(props) => (props.content === "question" ? "60%" : "fit-content")};
  align-items: ${(props) =>
    props.content === "question" ? "center" : "flex-end"};
`;

export const profileImg = styled.img`
  width: 110px;
  height: 110px;
  align-items: flex-start;
  margin-right: 2%;
`;

export const bubbleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 3%;
`;

export const speechBubble = styled.div`
  width: ${(props) =>
    props.direction === "left" ? "fit-content" : "fit-content"};
  height: fit-content;
  background-color: ${(props) =>
    props.direction === "left" ? "#505254" : "#3476f6"};
  border-radius: 100px;
  white-space: pre-line;
  font-family: "AppleSDGothicNeoL";
  font-size: 20px;
  line-height: ${(props) => (props.direction === "left" ? "80px" : "30px")};
  color: #fff;
  padding: ${(props) => (props.direction === "left" ? "0 6%" : "2% 6%")};
`;
