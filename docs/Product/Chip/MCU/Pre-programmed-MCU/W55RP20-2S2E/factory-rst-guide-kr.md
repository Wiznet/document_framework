---
id: factory-rst-guide-kr
title: Factory Reset Guide-[KR]
date: 2024-08-08
---



-----



## 공장 초기화 개요

공장 초기화를 진행하면 **W232N** 의 세팅을 출고 상태로 되돌릴 수 있습니다.



-----



## 필요한 하드웨어 및 소프트웨어



### 하드웨어


  - W232N
  - 5V~36V의 전원 어댑터
  - 데이터 케이블 (이더넷)



### 소프트웨어

  - WIZnet S2E Configuration Tool 
    - [최신 버전 다운로드](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)


-----
## W232N 공장 초기화 방법

W232N공장 초기화는 두 가지 방법으로 시행 가능합니다.

- [Config-Tool을 사용하는 방법](#config-tool을-사용한-공장초기화)
- [공장초기화 스위치를 사용하는 방법](#공장초기화-스위치를-사용)



## Config-Tool을-사용한-공장초기화

### 1단계: Config-tool 실행

설치된 **'Config-tool'** 실행

### 2단계: 상단 Icon Menu에서 ⑦Facory Rest 선택

<img src="/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/menu_icons.png" width="400" /> 

### 3단계: 공장 초기화 진행

<img src="/img/products/w232n/config-fact.png" width="500" /> 

- 공장 초기화 진행을 묻는 알림창이 뜨면 Yes 를 선택합니다.



### 4단계: 완료

<img src="/img/products/w232n/config-fact-ok.png" width="500" /> 

- 공장 초기화가 정상적으로 완료되었다면 완료 알림창을 확인할 수 있습니다.


## 공장초기화-스위치를-사용

### 1단계: 상단 케이스 분리

<img src="/img/products/w232n/Screw.png" width="200" />

- 디바이스 양 옆의 볼트를 제거하여 상단 케이스를 분리

### 2단계: 공장 초기화 스위치 클릭

<img src="/img/products/w232n/fact_rst.png" width="400" />

- 공장 초기화 스위치를 W232N이 정상적으로 부팅된 상태에서 5초간 누릅니다.
- RUN, LINK, TCP LED가 빠르게 2번 깜빡입니다.

### 3단계: 완료

- Config-tool 을 사용하여 정상적으로 초기화 되었는지 확인합니다.

-----
