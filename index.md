# Capstone Design Team 39

# Table of Contents

<or>
  <li><a href="#tag1">Project Introduce</a></li>
  <li><a href="#tag2">Service</a></li>
  <li><a href="#tag3">Project Structure</a></li>
  <li><a href="#tag4">Team Introduce</a></li>
  <li><a href="#tag5">Technology Stack</a></li>
</or>

<a name="tag1"></a>

# Project Introduce

국민대학교 내부 IP를 클라이언트로 설정하여 **외부로부터 들어오는 공격을 탐지하는 기술**을 개발하려한다.

해당 기술은 개발 단계에서 끝나는 것이 아닌, 실제 국민대학교 관계자들이 본 기술을 **쉽게 접근하고 사용할 수 있도록 서비스화**를 목표로 한다.

더불어 해당 서비스 외에도 다양한 기능들을 추가하여 국민대학교 관계자에게 **보안에 대한 관심을 높이고 중요성을 부각**시키려고 한다.
<br/>

We are trying to develop a technology to detect attacks coming from outside by setting Kookmin University's internal IP as a client.

The technology does not end in the development stage, but aims to service the technology so that actual Kookmin University officials can easily access and use it.

In addition to the service, various functions are added to increase interest in security and highlight the importance of Kookmin University officials.

<br/>
<a name="tag2"></a>

## Service

### 1. netflow기반 이상 탐지

```
국민대를 대상으로 하는 사이버 공격이나 이상행위 탐지
```

- 국민대학교 트래픽 데이터를 이용하여 국민대를 대상으로 하는 사이버 공격이나 이상행위를 flow기반으로 탐지
- flow기반 데이터를 인공지능 모델을 활용하고 이상 flow나 ip를 감지하여 네트워크 보안을 강화함

### 2. 교내 공적 자원을 이용한 사익 취득감지

```
넷플로우 데이터를 통해 공적 자원을 부정 사익에 악용하는 폐단 방지
```

- 국민대학교 내 여러 연구실에서 보유한 연구 목적의 고성능 PC와 서버가 악용될 가능성을 배제할 수 없기에, 국민대학교 넷플로우 데이터를 통해 공적 자원을 부정 사익에 악용하는 폐단을 막고자 함
- 불법 채굴 방식이 더 교묘해지고 있는 상황에서, 단순히 신고에 의지하기보다는 네트워크를 활용해 이를 탐지하고자 함

### 3. CTI 정보 확장

```
국민대학교를 타겟으로 하는 위협정보를 확장하여 네트워크 보안 강화
```

- CTI(cyber threat information): 사이버 위협 정보
- CTI 정보는 새로운 위협이 나타났을 때 실시간으로 업데이트 된 정보를 제공하기 때문에 이를 이용하여 이상탐지에 활용함
- CTI를 제공해주는 서비스는 주로 해외 서비스가 많기 때문에, 국민대학교를 타겟으로 하는 위협정보를 확장하여 네트워크 보안을 강화함
  <br>
  <a name="tag3"></a>

## Project Structure

<img width="600" alt="image" src="https://user-images.githubusercontent.com/65989401/229453048-b368770e-4253-4cb2-bb30-83a469aacaee.png">
<br>

## Main Page

<img width="1000" alt="스크린샷 2023-04-03 오후 2 06 22" src="https://user-images.githubusercontent.com/70675133/229416383-e9e8b817-110c-4950-99c8-01cc9e04b7a7.png">
<img width="1000" alt="스크린샷 2023-04-03 오후 2 06 33" src="https://user-images.githubusercontent.com/70675133/229416390-1c61e33d-b7d1-4cf2-8b71-a8638cdd3e82.png">
<br>

<a name="tag4"></a>

## Team Introduce

**🪐 한윤석 (팀장)**

```
Student ID: ****3159
E-mail: gtavexir@kookmin.ac.kr
Role: AI Modeling
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

**🌖 이윤호**

```
Student ID: ****1645
E-mail: yhya0904@kookmin.ac.kr
Role: Data Processing & Analysis
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

<a name="tag5"></a>

## Technology Stack

### Frontend

<img alt="RED" src ="https://img.shields.io/badge/REACT-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white"/> <img alt="RED" src ="https://img.shields.io/badge/JAVASCRIPT-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/> <img alt="RED" src ="https://img.shields.io/badge/KIBANA-005571.svg?&style=for-the-badge&logo=Kibana&logoColor=white"/> <img alt="RED" src ="https://img.shields.io/badge/ELASTICSEARCH-005571.svg?&style=for-the-badge&logo=Elasticsearch&logoColor=white"/>

### Backend

<img alt="RED" src ="https://img.shields.io/badge/ELASTICSEARCH-005571.svg?&style=for-the-badge&logo=Elasticsearch&logoColor=white"/> <img alt="RED" src ="https://img.shields.io/badge/DOCKER-2496ED.svg?&style=for-the-badge&logo=Docker&logoColor=white"/> <img alt="RED" src ="https://img.shields.io/badge/NESTJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/> <img alt="RED" src ="https://img.shields.io/badge/NGINX-009639.svg?&style=for-the-badge&logo=NGINX&logoColor=white"/>
<br>
<img alt="RED" src ="https://img.shields.io/badge/TYPESCRIPT-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/> <img alt="RED" src ="https://img.shields.io/badge/SWAGGER-85EA2D.svg?&style=for-the-badge&logo=Swagger&logoColor=white"/>

### AI Modeling

<img alt="RED" src ="https://img.shields.io/badge/C++-00599C.svg?&style=for-the-badge&logo=C++&logoColor=white"/> <img alt="RED" src ="https://img.shields.io/badge/Python-3776AB.svg?&style=for-the-badge&logo=Python&logoColor=white"/> <img alt="RED" src ="https://img.shields.io/badge/PYTORCH-EE4C2C.svg?&style=for-the-badge&logo=Pytorch&logoColor=white"/> <img alt="RED" src ="https://img.shields.io/badge/SCIKIT-LEARN-F7931E.svg?&style=for-the-badge&logo=scikit-learn&logoColor=white"/>

### Data Processing & Analysis

<br>

## common

| 역할            | 종류                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Idea Memo       | <img alt="RED" src ="https://img.shields.io/badge/Notion-000000.svg?&style=for-the-badge&logo=Notion&logoColor=white"/>                                                                                       |
| Frontend Design | <img alt="RED" src ="https://img.shields.io/badge/Figma-F24E1E.svg?&style=for-the-badge&logo=Figma&logoColor=white"/>                                                                                         |
| Version Control | ![Git](https://img.shields.io/badge/git-E6484F.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) |
