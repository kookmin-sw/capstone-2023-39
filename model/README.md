# AI_Model Repository
### Config.py
|    Parameters   |      Description      |
|:---------------:|:---------------------:|
|      device     |  CUDA에 할당된 device |
| sl\_model\_name |       지도 모델       |
| ul\_model\_name |      비지도 모델      |
|      epochs     |       학습 에폭       |
|    batch_size   | 학습 데이터 배치 크기 |
|    input_dims   |    입력 데이터 차원   |
|     max_dims    | 입력 데이터 차원 제한 |
|   latent_dims   |        z의 차원       |

### 시스템 구조 및 설계도
![image](https://github.com/kookmin-sw/capstone-2023-39/assets/66049032/9c91a7f6-a1dd-43e2-96c2-6e6616249bfb)

이상탐지를 위한 하이브리드 모델 구조는 다음과 같다.
먼저 데이터 팀에서 가공한 데이터는 악성/정상/그레이 라벨로 라벨링 된 데이터를 제공한다. 정제된 데이터를 IP 프로파일링을 진행하고 범주형 변수를 CDF(Cumulative Distribution Function)를 통해 수치형 변수로 변환한 뒤 정규화를 진행한다.
 이후 지도학습 모델을 통해 새로운 데이터셋에 대하여 악성/정상/그레이 라벨로 분류 학습을 진행한다. 이때 그레이 라벨로 분류된 데이터셋에 대해서는 지도학습 모델이 추가 판단을 진행하지 않고 비지도학습 모델을 사용하여 정상과 악성으로 분류한다.
 지도학습 모델, 비지도학습 모델에서 악성/정상으로 분류된 NetFlow 프로파일링 데이터셋에 대하여 IP voting을 통해서 악성/정상 IP를 분류한다.
