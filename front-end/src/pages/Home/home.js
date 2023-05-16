import React from "react";
import NaviBar from "../../components/NaviBar";
import * as S from "./styles";
import { GlobalStyle } from "../../fonts/fonts";
import user from "../../imgs/user.png";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

const ShowProject = () => {
  const questionItem = useScrollFadeIn("up", 1, 0);
  const answerItemStart = useScrollFadeIn("up", 1, 0);
  const answerItemMid = useScrollFadeIn("up", 1, 0);
  const answerItemEnd = useScrollFadeIn("up", 1, 0);

  return (
    <>
      <S.questionContainer {...questionItem}>
        <S.profileImg src={user} />
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
    </>
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
        <S.ShowContainer>
          <ShowProject />
        </S.ShowContainer>
      </S.MainContainer>
    </S.BodyContainer>
  );
}

export default Home;
