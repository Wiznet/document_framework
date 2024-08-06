---
id: W232N Datasheet-kr
title: W232N Datasheet-kr
date: 2024-07-30
keywords: [wiznet, w55rp20,w232n datasheet, hardwired tcp/ip,serial-to-ethernet, w5500, rp2040]
description: W232N is a industrial serial to Ethernet module using the W55RP20
---

## 개요

본 문서는 산업용 Ethernet to RS232 데이터 변환 디바이스인 W232N과 관련된 자료입니다.


### 패키지 구성품

W232N의 패키지는 아래와 같이 구성되어있습니다.

<img src="/img/products/w232n/W232_Rail_mount.png" width="400" />
  - W232N
  - 5V 2A 전원 어댑터
  - Ethernet 케이블


## 하드웨어

### 외관

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/w232n/Front.png) |
| ***W232N Revision 1.0 Front***                                          |

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/w232n/Back.png) |
| ***W232N Revision 1.0 Back***                                          |

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/w232n/LED.png) |
| ***W232N Revision 1.0 LED***                              |

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/w232n/RJ45.png) |
| ***W232N Revision 1.0 RJ45,power jack***                              |

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/w232n/DSUB.png) |
| ***W232N Revision 1.0 DSUB***                              |

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/w232n/W232_Rail_mount.png) |
| ***W232N Revision 1.0 Rail bracket***                                 |

<!--
### 치수

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/w232n/Dimension.png) |
| ***W232N Revision 1.0 Dimension***                                    |
-->
### 핀맵

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/w232n/serial.png)                                   |
| ***W232N Revision 1.0 DB9M port***                                    |

| Pin Number | Signal | Description                  |
|------------|--------|------------------------------|
| 1          | DCD    | NC                           |
| 2          | RXD    | Receive Data                 |
| 3          | TXD    | Transmit Data                |
| 4          | DTR    | Transmit Data                |
| 5          | GND    | System Ground(Signal Ground) |
| 6          | DSR    | Receive Data                 |
| 7          | RTS    | Request To Send              |
| 8          | CTS    | Clear To Send                |
| 9          | RI     | NC                           |

-   W232N은 TXD, RXD, CTS, RTS, DTR, DSR 총 6개의 신호를 지원합니다.

<img src="/img/products/w232n/serial.png" width="600" />


|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/w232n/RJ45_PIN.png)                                   |
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

-----

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
| ![](/img/products/w232n/POWER_LED.png)                                 |
| ***전원 LED***                                                   |

정상 동작시 POWER LED가 빨간색으로 점등하고 RUN LED가 1초 주기로 점멸하면서 W232N의 FW가 정상적으로 부팅되었음을 확인할 수 있습니다.

## 매뉴얼
- [Config-tool 사용법](./Config-tool-Guide.md) <br>
- [Web config 사용법](./WIZ500SR-RP/overview-en.md) <br>
- [Web config 사용법](./WIZ500SR-RP/overview-en.md) <br>
- [AT 커맨드 사용법](./command-manual-en.md) <br>
- [MQTT 연결 방법](./mqtt-connection-guide-en.md) <br>
- [SSL 연결 방법](./ssl-connection-guide-en.md) <br>
- [Modbus 연결 방법](./mqtt-connection-guide-en.md) <br>
- [FW 업데이트 가이드](./firmware-update-guide-en.md) <br>
