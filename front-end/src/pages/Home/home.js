import React from "react";
import NaviBar from "../../components/NaviBar";
import * as S from "./styles";
import { GlobalStyle } from "../../fonts/fonts";
import user_green from "../../imgs/user_green.png";
import user_blue from "../../imgs/user_blue.png";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

const ProjectTarget = () => {
  const title = useScrollFadeIn("up", 1, 0);
  const newflow_Q = useScrollFadeIn("up", 1, 0);
  const newflow_A = useScrollFadeIn("up", 1, 0);
  const bitcoin_Q = useScrollFadeIn("up", 1, 0);
  const bitcoin_A1 = useScrollFadeIn("up", 1, 0);
  const bitcoin_A2 = useScrollFadeIn("up", 1, 0);
  const CTI_Q = useScrollFadeIn("up", 1, 0);
  const CTI_A1 = useScrollFadeIn("up", 1, 0);
  const CTI_A2 = useScrollFadeIn("up", 1, 0);
  return (
    <S.TargetContainer>
      <S.CommonTitle {...title}>
        <span style={{ color: "#69e4d3", fontSize: "37px" }}>우리는 </span>
        이런 서비스를 제공해요
      </S.CommonTitle>
      <S.questionContainer {...newflow_Q}>
        <S.profileImg src={user_green} />
        <S.speechBubble direction="left">
          {"1. netflow 기반 이상 탐지 🌍"}
        </S.speechBubble>
      </S.questionContainer>
      <S.answerContainer>
        <S.bubbleBox {...newflow_A}>
          <S.speechBubble direction="right">
            {
              "국민대학교 트래픽 데이터를 이용하여 \n 국민대를 대상으로 하는 사이버 공격이나 이상행위를 **flow기반**으로 탐지합니다. \n\n flow기반 데이터와 인공지능 모델을 활용하고 \n이상 flow나 ip를 감지하여 네트워크 보안을 강화합니다"
            }
          </S.speechBubble>
        </S.bubbleBox>
      </S.answerContainer>

      <S.questionContainer {...bitcoin_Q}>
        <S.profileImg src={user_green} />
        <S.speechBubble direction="left">
          {"2. 교내 공적 자원을 이용한 💰 사익 취득 💰 감지"}
        </S.speechBubble>
      </S.questionContainer>
      <S.answerContainer>
        <S.bubbleBox {...bitcoin_A1}>
          <S.speechBubble direction="right">
            {
              "국민대학교 내 여러 연구실에서 보유한 연구 목적의 고성능 PC와 서버가 \n 악용될 가능성을 배제할 수 없기에, \n **국민대학교 넷플로우 데이터**를 통해 \n공적 자원을 부정 사익에 악용하는 폐단을 막고자 합니다."
            }
          </S.speechBubble>
        </S.bubbleBox>
        <S.bubbleBox {...bitcoin_A2}>
          <S.speechBubble direction="right">
            {
              "불법 채굴 방식이 더 교묘해지고 있는 상황에서, \n 단순히 신고에 의지하기보다는 네트워크를 활용해 이를 탐지하고자 합니다"
            }
          </S.speechBubble>
        </S.bubbleBox>
      </S.answerContainer>

      <S.questionContainer {...CTI_Q}>
        <S.profileImg src={user_green} />
        <S.speechBubble direction="left">
          {"3. CTI 정보 확장 💫"}
        </S.speechBubble>
      </S.questionContainer>
      <S.answerContainer>
        <S.bubbleBox {...CTI_A1}>
          <S.speechBubble direction="right">
            {
              "✔️ CTI(cyber threat information): 사이버 위협 정보 \n\n CTI 정보는 새로운 위협이 나타났을 때 실시간으로 업데이트 된 정보를 제공하기 때문에 \n 이를 이용하여 이상탐지에 활용합니다"
            }
          </S.speechBubble>
        </S.bubbleBox>
        <S.bubbleBox {...CTI_A2}>
          <S.speechBubble direction="right">
            {
              "CTI를 제공해주는 서비스는 주로 해외 서비스가 많기 때문에,\n 국민대학교를 타겟으로 하는 위협정보를 확장하여 네트워크 보안을 강화합니다 🔐"
            }
          </S.speechBubble>
        </S.bubbleBox>
      </S.answerContainer>
    </S.TargetContainer>
  );
};
const ProjectIntro = () => {
  const title = useScrollFadeIn("up", 1, 0);
  const questionItem = useScrollFadeIn("up", 1, 0);
  const answerItemStart = useScrollFadeIn("up", 1, 0);
  const answerItemMid = useScrollFadeIn("up", 1, 0);

  return (
    <S.InfoContainer>
      <S.CommonTitle {...title}>
        <span style={{ color: "#69e4d3", fontSize: "37px" }}>39팀 </span>
        어떤 프로젝트를 만들었을까?
      </S.CommonTitle>
      <S.questionContainer {...questionItem}>
        <S.profileImg src={user_blue} />
        <S.speechBubble direction="left">
          {"어떤 프로젝트인지 궁금해요 🤔"}
        </S.speechBubble>
      </S.questionContainer>
      <S.answerContainer>
        <S.bubbleBox {...answerItemStart}>
          <S.speechBubble direction="right">
            {
              "저희 팀은 **국민대학교 내부 IP**를 클라이언트로 설정하여 \n 외부로부터 들어오는 공격을 탐지하는 기술을 개발하였습니다 🚀 \n \n해당 기술은 개발 단계에서 끝나는 것이 아닌, \n실제 **국민대학교** 관계자들이 본 기술을 쉽게 접근하고 사용할 수 있도록 \n서비스화하는 것을 목표로 합니다."
            }
          </S.speechBubble>
        </S.bubbleBox>
        <S.bubbleBox {...answerItemMid}>
          <S.speechBubble direction="right">
            {
              "더불어 해당 서비스 외에도 다양한 기능들을 추가하여 \n국민대학교 관계자에게 보안에 대한 관심을 높이고 중요성을 부각시키려고 합니다 😀"
            }
          </S.speechBubble>
        </S.bubbleBox>
      </S.answerContainer>
    </S.InfoContainer>
  );
};

function Home() {
  return (
    <S.BodyContainer>
      <NaviBar></NaviBar>
      <S.MainContainer>
        <GlobalStyle />
        <S.titleContainer>
          <S.subTitle>{`국민대학교를 위한 네트워크 이상탐지 기술 개발 및 서비스화`}</S.subTitle>
          <S.mainTitle>Search ip for the Kookmin of Everything</S.mainTitle>
          {/*<S.MapImg src={worldMap} />*/}
        </S.titleContainer>
        <ProjectIntro />
        <ProjectTarget />
      </S.MainContainer>
    </S.BodyContainer>
  );
}

export default Home;
