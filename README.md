# 국민대학교를 위한 네트워크 이상탐지 기술 개발 및 서비스화
```
네트워크 트래픽 분석을 통한 국민대학교 공격 탐지 플랫폼 
```

## 프로젝트 소개
**국민대학교 내부 정보통신처**를 클라이언트로 설정하여 국민대학교 외부로부터 들어오는 ip의 행동 패턴을 분석하여 공격을 탐지하는 기술을 개발하려한다. 해당 기술은 개발 단계에서 끝나는 것이 아닌, 실제 국민대학교 정보통신처 관계자들이 **국민대학교의 네트워크 트래픽과 외부로부터 들어오는 ip들에 대한 이상탐지 결과**를
쉽게 활용하고 접근 할 수 있도록 서비스화하는 것을 목표로 한다. 더불어 해당 서비스 외에도 다양한 기능들을 추가하여 국민대학교 관계자에게 보안에 대한 관심을 높이고 중요성을 부각시키려고 한다.
<br>
<br>

## 목표 서비스
### 1. netflow기반 이상 탐지
```
국민대를 대상으로 하는 사이버 공격이나 이상행위 탐지
```
* 국민대학교 트래픽 데이터를 이용하여 국민대를 대상으로 하는 사이버 공격이나 이상행위를 **ip의 행동 기반**으로 탐지
* 행동 기반 데이터와 인공지능 모델을 활용하여 이상 행위를 보이는 ip를 감지하여 네트워크 보안을 강화함

### 2. 교내 공적 자원을 이용한 사익 취득감지
```
넷플로우 데이터를 통해 공적 자원을 부정 사익에 악용하는 폐단 방지
```
* 국민대학교 내 여러 연구실에서 보유한 연구 목적의 고성능 PC와 서버가 악용될 가능성을 배제할 수 없기에 **outbound 네트워크 행동 데이터**를 통해 공적 자원을 부정 사익에 악용하는 폐단을 막고자 함
* 불법 채굴 방식이 더 교묘해지고 있는 상황에서, 단순히 신고에 의지하기보다는 네트워크를 활용해 이를 탐지하고자 함

### 3. CTI 정보 확장
```
국민대학교를 타겟으로 하는 위협정보를 확장하여 네트워크 보안 강화
```
* CTI 정보는 서비스를 제공하는 회사에서 구매하는 정보이기 때문에 현재 국민대학교 네트워크 트래픽에 CTI 정보를 적용하여 악성 행동 패턴을 추출하고 이와 비슷한 행동을 보이는 **unknown ip**를 탐지
* CTI(cyber threat information): 사이버 위협 정보
* CTI 정보는 새로운 위협이 나타났을 때 실시간으로 업데이트 된 정보를 제공하기 때문에 이를 이용하여 이상탐지에 활용함  
* CTI를 제공해주는 서비스는 주로 해외 서비스가 많기 때문에, 국민대학교를 타겟으로 하는 위협정보를 확장하여 네트워크 보안을 강화함
<br>

## 프로젝트 구조도 
<img width="600" alt="image" src="https://github.com/kookmin-sw/capstone-2023-39/assets/70675133/3cafebe8-4045-4f25-8326-8e12fa414f62">

## 메인 페이지 

![화면_기록_2023-05-18_오후_7_33_17_AdobeExpress](https://github.com/kookmin-sw/capstone-2023-39/assets/70675133/55ae96b6-674c-488d-926f-9ef394163afd)
<img width="1377" alt="스크린샷 2023-05-24 오전 11 35 28" src="https://github.com/kookmin-sw/capstone-2023-39/assets/70675133/367b8b71-c63b-498c-9174-0d13c65a41fe">
<img width="1369" alt="스크린샷 2023-05-24 오전 11 35 46" src="https://github.com/kookmin-sw/capstone-2023-39/assets/70675133/ae81e92b-141f-4337-990e-6258fb1e2c9d">
<img width="1366" alt="스크린샷 2023-05-24 오전 11 36 41" src="https://github.com/kookmin-sw/capstone-2023-39/assets/70675133/08d22911-0eb6-444d-9774-be5f24ddd8c2">
<img width="1356" alt="스크린샷 2023-05-24 오전 11 37 18" src="https://github.com/kookmin-sw/capstone-2023-39/assets/70675133/82af0d7e-494e-4ef6-9103-df7db0d4116a">
<img width="1353" alt="스크린샷 2023-05-24 오전 11 37 28" src="https://github.com/kookmin-sw/capstone-2023-39/assets/70675133/df065d26-70e9-4f5e-9f79-41a0d65c85fb">
<img width="1353" alt="스크린샷 2023-05-24 오전 11 37 39" src="https://github.com/kookmin-sw/capstone-2023-39/assets/70675133/d91cd9c9-d466-40ea-87e8-094d47b3a9c2">

## backend 구조도
<img width="1353" alt="image" src="https://github.com/kookmin-sw/capstone-2023-39/assets/71022455/99a2c7f7-3ed8-4de1-a420-d16a72186c05">


네트워크 트래픽을 분석하여 나타낼 통계 정보는 다음과 같다
* 시간별 플로우 통계화
* 정상, 공격 플로우 통계화
* 공격 플로우의 공격 방식 통계
* 지도, 비지도 학습 모델의 예측 IP 통계화
* 외부 접근 IP 위치 시각화 
<br>

## 깃허브 페이지
https://kookmin-sw.github.io/capstone-2023-39/

## 팀원 소개
**🪐 이윤호 (팀장)**
```
Student ID: ****1645
E-mail: yhya0904@kookmin.ac.kr
Role: Data Processing & Analysis
```

**🌎 이상민**
```
Student ID: ****2797
E-mail: sangminlee@kookmin.ac.kr
Role: AI Modeling
```

**🌍 이종식**
```
Student ID: ****1673
E-mail: identity230c@kookmin.ac.kr
Role: AI Modeling
```

**🌏 신재혁**
```
Student ID: ****1636
E-mail: wogur6767@kookmin.ac.kr
Role: AI Modeling
```

**🌖 한윤석**
```
Student ID: ****3159
E-mail: gtavexir@kookmin.ac.kr
Role: AI Modeling
```

**🌗 최유나**
```
Student ID: ****2831
E-mail: xcv904@kookmin.ac.kr
Role: Data Processing & Analysis
```

**🌘 박보서**
```
Student ID: ****5286
E-mail: boseo@kookmin.ac.kr
Role: Data Processing & Analysis
```

**🌑 정찬진**
```
Student ID: ****1692
E-mail: chanjin@kookmin.ac.kr
Role: Frontend
```

**🌒 이다은**
```
Student ID: ****3112
E-mail: ekdms7273@kookmin.ac.kr
Role: Frontend
```

**🌓 이주원**
```
Student ID: ****1334
E-mail: jwlee51@kookmin.ac.kr
Role: Backend
```

**🌔 양민주**
```
Student ID: ****2175
E-mail: alswn0558@gmail.com
Role: Backend
```
<br>

## 기술 스택 
### Frontend
<img alt="RED" src ="https://img.shields.io/badge/REACT-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/JAVASCRIPT-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/KIBANA-005571.svg?&style=for-the-badge&logo=Kibana&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/ELASTICSEARCH-005571.svg?&style=for-the-badge&logo=Elasticsearch&logoColor=white"/>

### Backend
<img alt="RED" src ="https://img.shields.io/badge/ELASTICSEARCH-005571.svg?&style=for-the-badge&logo=Elasticsearch&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/DOCKER-2496ED.svg?&style=for-the-badge&logo=Docker&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/NESTJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/NGINX-009639.svg?&style=for-the-badge&logo=NGINX&logoColor=white"/>
<br>
<img alt="RED" src ="https://img.shields.io/badge/TYPESCRIPT-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/SWAGGER-85EA2D.svg?&style=for-the-badge&logo=Swagger&logoColor=white"/>

### AI Modeling & Data Processing & Analysis
<img alt="RED" src ="https://img.shields.io/badge/C++-00599C.svg?&style=for-the-badge&logo=C++&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/Python-3776AB.svg?&style=for-the-badge&logo=Python&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/PYTORCH-EE4C2C.svg?&style=for-the-badge&logo=Pytorch&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/SCIKIT-LEARN-F7931E.svg?&style=for-the-badge&logo=scikit-learn&logoColor=white"/>
<br>

## common
|역할|종류|
|-|-|
|Idea Memo|<img alt="RED" src ="https://img.shields.io/badge/Notion-000000.svg?&style=for-the-badge&logo=Notion&logoColor=white"/> |
|Frontend Design|<img alt="RED" src ="https://img.shields.io/badge/Figma-F24E1E.svg?&style=for-the-badge&logo=Figma&logoColor=white"/>|
|Version Control|![Git](https://img.shields.io/badge/git-E6484F.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) |
