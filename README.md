# 국민대학교를 위한 네트워크 이상탐지 기술 개발 및 서비스화
```
네트워크 트래픽 분석을 통한 국민대학교 공격 탐지 플랫폼 
```

## 프로젝트 소개
**국민대학교 내부 정보통신처**를 클라이언트로 설정하고, 국민대학교 외부로부터 들어오는 ip의 행동 패턴을 분석하여 공격을 탐지하는 기술을 개발하였다. 
해당 기술은 개발 단계에서 끝나는 것이 아닌, 실제 국민대학교 정보통신처 관계자들이 **국민대학교의 네트워크 트래픽과 외부로부터 들어오는 ip들에 대한 이상탐지 결과**를
쉽게 활용하고 접근 할 수 있도록 서비스화하는 것을 목표로 한다. 더불어 해당 서비스 외에도 다양한 기능들을 추가하여 국민대학교 관계자에게 보안에 대한 관심을 높이고 중요성을 부각시키려고 한다.
<br>
<br>

## 서비스 제공 대상
```
국민대학교 정보처
```

## 목표 서비스
### 1. Netflow기반 이상 탐지
```
국민대를 대상으로 하는 사이버 공격이나 이상행위 탐지
```
* 국민대학교 트래픽 데이터를 이용하여 국민대를 대상으로 하는 사이버 공격이나 이상행위를 **ip의 행동 기반**으로 탐지
* 행동 기반 데이터와 학습된 인공지능 모델을 활용하여 이상 행위를 보이는 ip를 감지하여 네트워크 보안을 강화함




### 2. 교내 공적 자원을 이용한 사익 취득 탐지
```
넷플로우 데이터를 통해 공적 자원을 부정 사익에 악용하는 폐단 방지
```
* 국민대학교 내 여러 연구실에서 보유한 연구 목적의 고성능 PC와 서버가 악용될 가능성을 배제할 수 없기에 **outbound 네트워크 행동 데이터**를 통해 공적 자원을 부정 사익에 악용하는 폐단을 막고자 함
* 국민대학교 네트워크 레벨에서 교내 공적 자원을 통한 불법 채굴을 감시하고자 함
* 불법 채굴 방식이 더 교묘해지고 있는 상황에서, 단순히 신고에 의지하기보다는 네트워크를 활용해 이를 탐지하고자 함

### 3. CTI 정보 확장
```
국민대학교를 타겟으로 하는 위협정보를 확장하여 네트워크 보안 강화
```
* CTI(cyber threat Intelligence): 사이버 위협 정보
* 현재 국민대학교 네트워크 트래픽에 CTI 정보를 적용하여, 기존에 신고된 악성 IP를 기반으로 Flow 행동 패턴을 추출하고 이와 비슷한 행동을 보이는 **unknown ip**를 탐지
* CTI 정보는 새로운 위협이 나타났을 때 실시간으로 업데이트 된 정보를 제공하기 때문에 이를 이용하여 이상탐지에 활용 함  
* CTI를 제공해주는 서비스는 주로 해외 서비스가 많기 때문에, 국민대학교를 타겟으로 하는 위협정보를 확장하여 네트워크 보안을 강화하고자 함
<br>

## 프로젝트 구조도 
<img width="720" alt="image" src="https://github.com/kookmin-sw/capstone-2023-39/assets/65989401/f115de3f-5939-47ba-8fee-48ba7814b0c6">
<br>
<br>

## 프로젝트 전체 개요
```
메인 페이지 
```
<img width="1300" alt="스크린샷 2023-05-24 오전 11 35 28" src="https://github.com/kookmin-sw/capstone-2023-39/assets/70675133/55ae96b6-674c-488d-926f-9ef394163afd">

* 프로젝트 소개 및 목표 설명 
<br>

```
외부 접근 IP 위치 시각화
```
<img width="1300" alt="image" src="https://github.com/kookmin-sw/capstone-2023-39/assets/65989401/9ef2802b-d8ec-42e9-aca1-fdfbc262ef0f">

* kibana maps를 사용하여 외부에서 탐지된 ip들을 지도 위에 시각화 함
* 악성 ip, 정상 ip ,CTI를 통해 확장한 ip 들을 차별된 Label 값으로 분류한 뒤 악성은 빨강, 정상은 초록, cti는 주황색으로 표현
* 탐지된 위치를 클릭하면 위도, 경도, label, ip, 지역 이름 등을 모달로 보여줌
<br>

```
탐지 IP 정보 및 IP 히스토리
```
<img width="1300" alt="image" src="https://github.com/kookmin-sw/capstone-2023-39/assets/65989401/0f89cdea-607c-48e6-85d6-bf1a6b5fd642">

* 지정한 기간동안 국민대에 접근한 ip 중 hybrid 모델을 통해 악성이라고 판단된 ip 들을 시각화 함 
* 컬럼을 클릭하면 해당 ip에 대한 정보(http 상태, ip, country code, country name 등)를 모달창에서 보여줌
* 특정 IP의 행적을 확인할 수 있도록 start time, end time, card inner port 등을 테이블로 보여줌 
<br>

```
교내 IP가 접근했던 Mining Pool 정보
```
<img width="1300" alt="image" src="https://github.com/kookmin-sw/capstone-2023-39/assets/65989401/7e9293e1-fdab-49a3-92a8-0da2a77131ce">

* 테이블에서는 교내 IP 가 접근했던 Mining pool 정보(pool name, pool ip, count) 를 보여줌
* 각 컬럼을 클릭하면 pool ip 에 접속한 Inner ip와 접속 시간을 모달창에서 보여줌
* pool ip: 국민대 내부 ip와 연결된 마이닝 풀 서버 ip
* pool name: 국민대 내부 ip와 연결된 마이닝 풀 서버 도메인
<br>

```
날짜별로 탐지된 정상ip의 수, 악성 ip의 수, 악성 IP 빈도수 시각화 
```
<img width="1300" alt="스크린샷 2023-05-24 오전 11 36 41" src="https://github.com/kookmin-sw/capstone-2023-39/assets/70675133/08d22911-0eb6-444d-9774-be5f24ddd8c2">
<br>
<br>

```
국가별 악성 IP 빈도수 , 공격 유형 빈도수, 악성 IP와 정상 IP 분포 시각화 
```
<img width="1300" alt="스크린샷 2023-05-24 오전 11 37 18" src="https://github.com/kookmin-sw/capstone-2023-39/assets/70675133/82af0d7e-494e-4ef6-9103-df7db0d4116a">
<br>
<br>

```
악성 IP가 가장 많은 국가의 IP 분포도
```
<img width="1300" alt="스크린샷 2023-05-24 오전 11 37 39" src="https://github.com/kookmin-sw/capstone-2023-39/assets/70675133/d91cd9c9-d466-40ea-87e8-094d47b3a9c2">
<br>
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
<img alt="RED" src ="https://img.shields.io/badge/NESTJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/ELASTICSEARCH-3399BB.svg?&style=for-the-badge&logo=Elasticsearch&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/LOGSTASH-BBBB00.svg?&style=for-the-badge&logo=Logstash&logoColor=white"/>  <img alt="RED" src ="https://img.shields.io/badge/KIBANA-BB2277.svg?&style=for-the-badge&logo=Kibana&logoColor=white"/>
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
