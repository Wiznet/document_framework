---
id: wiz-dtu-datasheet-kr
title: wiz-dtu-datasheet-kr
date: 2024-07-30
keywords: [wiznet, wiz-dtu datasheet, hardwired tcp/ip,serial-to-ethernet, mh32, w5500]
description: wiz-dtu is a industrial serial to Ethernet module using the w55mh32
---

## 개요

본 문서는 산업용 Ethernet to RS232 데이터 변환 디바이스인 WIZ-DTU의 HW 스펙에 대한 문서입니다.

<img src="/img/products/wiz-dtu/wizdtu_side.png" width="600" />

## 특징

- RS232 to 이더넷 프로토콜 변환 디바이스
- 다양한 프로토콜 지원
  - TCP Server
  - TCP Client
  - SSL TCP Client
  - TCP Mixed
  - Modbus RTU/ASCII (TCP Server로 사용 가능)
  - UDP
  - MQTT Client
  - MQTTS Client
- 커스텀 프로토콜 지원 (커스텀 프로토콜 요청은 [**링크**](https://direct.wiznet.io/custom-firmware-request)를 통해 접수 바랍니다.)
  - HTTP
  - HTTPS
  - CoAP
  - 외부 디바이스 OTA

- 기존 시리얼 장치에 이더넷을 쉽게 구현할 수 있도록 지원
- KC,FCC 인증으로 높은 시스템 안정성과 신뢰성 보장
- 10/100Mbps 이더넷과 최대 230kbps 시리얼 속도 지원
- D-SUB9 포트로 RS232C 표준 지원
- 디바이스 검색시 비밀번호 설정 지원
- D-SUB9 포트로 AT 커맨드 지원
- Config-tool로 설정 가능
- Web Config 지원
- 넓은 입력 전압 5~36V
- 산업용 기준의 동작 온도 -25~80℃
- DIN 레일(DIN 46277) 장착 지원
- ESD에 대한 보호 기능

### 외관

 <img src="/img/products/wiz-dtu/wizdtu_front.png" width="300" />
 ***WIZ-DTU Revision 1.0 Front***


### 치수

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/Dimension.png" width="300" />                |
| ***W232N Revision 1.0 Dimension***                                    |

- 78 x 52 x 28 (mm)

### 핀맵 및 스위치

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/w232n_pinout.png" width="500" />        |
| ***W232N Revision 1.0 DB9M port***                                    |

| Pin Number | Signal | Description                  |
|------------|--------|------------------------------|
| 1          | DCD    | NC                           |
| 2          | RXD    | Receive Data                 |
| 3          | TXD    | Transmit Data                |
| 4          | DTR    | Data Terminal Ready          |
| 5          | GND    | System Ground(Signal Ground) |
| 6          | DSR    | Data Set Ready               |
| 7          | RTS    | Request To Send              |
| 8          | CTS    | Clear To Send                |
| 9          | RI     | NC                           |
<img src="/img/products/w232n/Serial.png" width="600" />


|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/RJ45_PIN.png" width="400" />            |
| ***W232N Revision 1.0 RJ45 port***                                    |

| Pin Number | Signal | Description                  |
|------------|--------|------------------------------|
| 1          | TXP    | TX+                          |
| 2          | TXN    | TX-                          |
| 3          | RXP    | RX+                          |
| 4          | NC     | PoE+ or PoE-                 |
| 5          | NC     | PoE+ or PoE-                 |
| 6          | RXN    | RX-                          |
| 7          | NC     | PoE- or PoE+                 |
| 8          | NC     | PoE- or PoE+                 |

-   PoE는 지원하는 모델만 사용 가능합니다.
-   PoE 사용시 4,5핀과 7,8핀의 극성이 달라야 합니다.
    - 4,5핀이 +이면 7,8핀이 - 또는 4,5핀이 -이면 7,8핀은 +

## 전원 인가

W232N은 DC Jack, 터미널 블럭, PoE 지원 제품일 경우 RJ45 Jack을 통해 전원을 인가할 수 있습니다.

<!--
|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/s2e_module/wiz500sr-rp/wiz500sr-rp-callout-top.png) |
| ***DC Jack 사용시***                                                   |

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/s2e_module/wiz500sr-rp/wiz500sr-rp-callout-top.png) |
| ***터미널 블럭 사용시***                                                |

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/s2e_module/wiz500sr-rp/wiz500sr-rp-callout-top.png) |
| ***PoE 사용시***                                                |
-->

사용 가능한 전압은 5V ~ 36V 입니다.
전원 인가시 극성 바뀌면 보호 회로로 인해 전원이 켜지지 않습니다.

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/POWER_LED.png" width="150" />           |
| ***전원 LED***                                                         |

정상 동작시 POWER LED가 빨간색으로 점등하고 RUN LED가 1초 주기로 점멸하면서 W232N의 FW가 정상적으로 부팅되었음을 확인할 수 있습니다.

## 매뉴얼
- [Config-tool 사용법](./Config-tool-Guide-kr.md)
- [Web config 사용법](./Web_Config_Guide_KO.md)
- [AT 커맨드 사용법](./command-manual-kr.md)
- [MQTT 연결 방법](./mqtt-connection-guide-kr.md)
- [SSL 연결 방법](./ssl-connection-guide-kr.md)
- [Modbus 연결 방법](./modbus-connection-guide-kr.md)
- [FW 업데이트 가이드](./firmware-update-guide-kr.md)
- [공장초기화 가이드](./factory-rst-guide-kr.md)


## 인증

- <a href="/img/products/w232n/KC.pdf" target="_blank">KC 인증</a>
- <a href="/img/products/w232n/FCC.pdf" target="_blank">FCC 인증</a>
- <a href="/img/products/w232n/CE.pdf" target="_blank">CE 인증</a>

<!--
## 설계 파일

### 회로

| H/W version | Filetype | Download Link                                                | Remarks |
| ----------- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/W232N/Schematic/W232N_R100.zip" target="_blank">Download</a> | \-      |
| :::         | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/W232N/Schematic/W232N_R100.pdf" target="_blank">Download</a> | \-      |


### Part list

| H/W version | Filetype | Download Link                                               | Remarks |
| ----------- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/bfa5e2d9cdb636196d6c1341709c02d7052f4d18/04_Serial_to_Ethernet_Module/W232N/Partlist/W232N%20PL_R100.xlsx" target="_blank">Download</a> | \-      |
| :::         | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/bfa5e2d9cdb636196d6c1341709c02d7052f4d18/04_Serial_to_Ethernet_Module/W232N/Partlist/W232N%20PL_R100.pdf" target="_blank">Download</a> | \-      |


### 3D 파일

| H/W version | Filetype | Download Link                                               | Remarks |
| ----------- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | Step   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/W232N/3D/W232N_3D_R100.step" target="_blank">Download</a> | \-      |
-->


