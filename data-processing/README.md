# Data-Processing Repository

이 코드는 국민대에 들어오는 Network flow 데이터를 프로파일링하고 분석하는데 사용됩니다.

## 주요 구성요소

### profiling
> profiling 함수는 네트워크 플로우 데이터 파일의 배치에 대해 프로파일링을 수행합니다. 이 함수는 데이터 파일의 배치를 입력으로 받아 그 데이터를 프로파일링하고, 각 IP에 대한 벡터를 생성합니다. 생성된 벡터는 여러 통계적 특성을 포함하 
> 며, 이를 기반으로 데이터 프레임이 생성되어 디스크에 저장됩니다.


### time_Profiling
> time_Profiling 함수는 주어진 network flow 데이터 프레임을 사용하여 특정 시간 윈도우 내에서 IP 기반 flow 분석을 수행합니다. 이 함수는 특정 IP 주소에서 시작된 연결을 계산하는데 사용되며, 
> 이후 각 IP에 대해 연결 프로파일을 벡터로 변환합니다.

>   >  useage: 
''' bash
python ./time_baseprofiled.py
'''

### count_Profiling
> count_Profiling 함수는 주어진 network flow 데이터 프레임에 대해 특정 타임아웃 내에서 IP 기반으로 flow를 분석합니다. 이는 특정 IP 주소에서 시작된 연결의 수를 계산하는데 사용됩니다. 그런 다음 각 IP에 대해 연결 프로파일을 
> 벡터로 변환합니다.

>   >  useage: 
''' bash
python ./time_baseprofiled.py
'''

## 필요 환경
Python version >= 3.6
