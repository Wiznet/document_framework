---
id: datasheet_kor
title: Datasheet(Kor)
date: 2020-04-15
---


## Content
# 개요

본 페이지는 WIZ550S2E와 RS232, RS422/485 인터페이스 보드들에 대한 하드웨어 관련 정보를 제공하기 위한 것으로

  - 기본적인 하드웨어 스펙
  - AC/DC 특성
  - 레퍼런스 회로도 
  - 모듈의 Dimension 정보

가 포함된다.

향후 하드웨어 사양이나 외형에 변경이 있을 경우에는 변경 내역란이 추가될 수 있다.

-----
# Hardware Specification

## WIZ550S2E

   * MCU LPC11E36FHN33
   * TCP/IP Controller W5500
   * RJ45(Integrated Transformer)
   * 2.54mm Header x2

![](/products/wiz550s2e/wiz550s2eds/wiz550s2e_pin.jpg)

### Pin Description

| Ref No. | Pin No. | Symbol      | Type    | Description                                    |
| ------- | ------- | ----------- | ------- | ---------------------------------------------- |
| J1      | **1**   | **3V3D**    | **P**   | DC +3.3V 전원                                    |
| :::     | **2**   | **RSVD1**   | **I/O** | 내부 지정된 I/O                                     |
| :::     | **3**   | **RSVD2**   | **I/O** | 내부 지정된 I/O                                     |
| :::     | **4**   | **nSYSRST** | **I**   | 시스템 리셋 입력. Active Low.                         |
| :::     | **5**   | **nFACRST** | **I**   | 팩토리 리셋 입력. Active Low(5초 이상). 모듈의 설정을 기본값으로 변경 |
| :::     | **6**   | **nHWTRIG** | **I**   | 하드웨어 트리거 입력. Active Low.                       |
| :::     | **7**   | **GND**     | **P**   | 전원 Ground                                      |
| :::     | **8**   | **GND**     | **P**   | 전원 Ground                                      |

| Ref No. | Pin No. | Symbol      | Type  | Description                                             |
| ------- | ------- | ----------- | ----- | ------------------------------------------------------- |
| J2      | **1**   | **GND**     | **P** | 전원 Ground                                               |
| :::     | **2**   | **NC**      | **-** | 미연결 핀                                                   |
| :::     | **3**   | **STATUS1** | **O** | LED 출력 핀, 전원 인가 후 1초마다 LED ON/OFF 반복                    |
| :::     | **4**   | **STATUS2** | **O** | LED 출력 핀, TCP 연결상태(Disconnected-High, Connected-Low)    |
| :::     | **5**   | **nCTS**    | **I** | UART용 CTS(Clear To Send) 입력 핀                           |
| :::     | **6**   | **nRTS**    | **O** | UART용 RTS(Request To Send) 출력 핀. 이 핀은 RS485에서는 항상 사용된다. |
| :::     | **7**   | **RXD**     | **I** | UART용 데이터 수신 핀                                          |
| :::     | **8**   | **TXD**     | **O** | UART용 데이터 송신 핀                                          |
| :::     | **9**   | **3V3D**    | **P** | DC+3.3V 전원                                              |

-----

## WIZ550S2E-232 인터페이스 보드

   * 라인 드라이버 SP3232EBEY
   * 시스템 리셋 스위치
   * 팩토리 리셋 스위치
   * 하드웨어 트리거 모드 스위치
   * 상태 LED들
   * DC 전원 단자 (+5V 전원 입력용)

![](/products/wiz550s2e/wiz550s2eds/rs232if_pin_20140729.jpg)
![](/products/wiz550s2e/wiz550s2eds/크기변환_wiz550s2e-232-evb.png)

-----

## WIZ550S2E-485/422 인터페이스 보드

   * 라인 드라이버 SP3485EN
   * 시스템 리셋 스위치
   * 팩토리 리셋 스위치
   * 하드웨어 트리거 모드 스위치
   * 상태 LED들
   * DC 전원 단자 (+5V 전원 입력용)

![](/products/wiz550s2e/wiz550s2eds/rs485-422if_pin_20140729.jpg)
![](/products/wiz550s2e/wiz550s2eds/크기변환_wiz550s2e-485-evb.png)

-----
# Characteristic

### WIZ550S2E

| 입력 전원 | DC +3.3V     |
| ----- | ------------ |
| 소모 전류 | 140mA(Typ.)  |
| 동작 온도 | \-40 \~ 85 ℃ |

### WIZ550S2E-232-EVB

| 입력 전원                       | DC +5V (단자 타입: 외경 5.5Pi - 내경 2.1Pi) |
| --------------------------- | ----------------------------------- |
| 소모 전류(WIZ550S2E 결합 상태에서 측정) | 154mA(Max.)                         |
| 동작 온도                       | \-40 \~ 85 ℃                        |

### WIZ550S2E-485/422-EVB

| 입력 전원                       | DC +5V (단자 타입: 외경 5.5Pi - 내경 2.1Pi)          |
| --------------------------- | -------------------------------------------- |
| 소모 전류(WIZ550S2E 결합 상태에서 측정) | 179mA(Max.)@RS422Mode, 157mA(Max.)@RS485Mode |
| 동작 온도                       | \-40 \~ 85 ℃                                 |

# Schematic

| 항목                         | Version | Schematic(PDF)                                                                        |
| -------------------------- | ------- | ------------------------------------------------------------------------------------- |
| WIZ550S2E                  | 1.1/1.2 | ![PDF](/wiznet_schematic/s2e_module/wiz550s2e/schematic1_wiz550s2e_v11_dotremove.pdf) |
| WIZ550S2E-232 인터페이스 보드     | 1.0     | ![](/products/wiz550s2e/wiz550s2eds/rs232if_v1_0.pdf)                                 |
| WIZ550S2E-485/422 인터페이스 보드 | 1.0     | ![](/products/wiz550s2e/wiz550s2eds/rs485-422if_v1_0.pdf)                             |

| 항목        | Version | Partlist                                                             | PCB(Unit)                                                                        |
| --------- | ------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| WIZ550S2E | 1.1     | ![Partlist\_PDF](/products/wiz550s2e/wiz550s2e_ver1.1_pl_150916.pdf) | ![WIZ550S2E\_v1.1\_PCB](/products/wiz550s2e/wiz550s2eds_kr/wiz550s2e_v1.1.1.zip) |
| WIZ550S2E | 1.2     | :::                                                                  | ![WIZ550S2E\_v1.2\_PCB](/products/wiz550s2e/wiz550s2eds_kr/wiz550s2e_v1.2.zip)   |

  - Rev 1.1/1.2 Update Schematic

![](/products/wiz550s2e/wiz550s2e_rev_point.png)

-----
# Dimension

(Unit: mm)

## WIZ550S2E

![](/products/wiz550s2e/wiz550s2eds/wiz550s2e_dimension.jpg)

-----

## WIZ550S2E-232 인터페이스 보드

![](/products/wiz550s2e/wiz550s2eds/rs232if_dimension.jpg)

-----

## WIZ550S2E-485/422 인터페이스 보드

![](/products/wiz550s2e/wiz550s2eds/rs485-422if_dimension.jpg)

-----
