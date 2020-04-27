---
id: overview-[KO]
title: Overview-[KO]
date: 2020-04-08
---

## Content

# WIZ750SR Product Overview

\*\* Supported Languages \*\*  
\* [English](/products/wiz750sr/overview/en)  
\* [Korean](/products/wiz750sr/overview/ko) (current page)

-----

## Overview

![](/products/wiz750sr/overview/wiz750sr_simple_product_overview_v2.png)

WIZ750SR은 Cortex-M0 기반의 W7500P MCU가 탑재된 시리얼 to 이더넷 모듈 제품으로, 사용의 편의성을 위해
핀 헤더와 RJ-45 커넥터를 포함한 형태로 디자인 되었습니다.

WIZ750SR은 시리얼 장비가 보낸 데이터를 TCP/IP 패킷으로 변환하여 이더넷 네트워크로 전송시키며, 반대로 네트워크로부터
받은 TCP/IP 패킷을 시리얼 데이터로 변환하여 고객의 시리얼 장비로 전달하는 역할을 수행합니다. 이 제품을 활용하면 시리얼
인터페이스를 지원하는 장치에 손쉽게 네트워크 연결 기능을 추가 할 수 있어, 이더넷 네트워크를 통해 시리얼 장비를 제어하는 것이
가능해집니다.

**WIZ107/108SR 제품군과 호환**\[1\]되도록 제작 되었으며, 별도의 시리얼 Debug 포트와 고객의 목적에 따라
제어하고 모니터링 할 수 있는 4개의 사용자 I/O 핀을 제공합니다. (아날로그 입력 / 디지털 입-출력)

|                                                                |
| -------------------------------------------------------------- |
| ![](/products/wiz750sr/overview/wiz750sr_product_overview.png) |
| Figure: WIZ750SR Product Overview                              |

해당 제품은 상업용 온도 스펙 (Commercial temperature range, 0℃ \~ 70℃)을 만족하며, 시리얼
인터페이스에 따라 TTL / RS-232 / RS-422/485의 3가지 제품으로 구분되어 있어 목적에 맞게 선택 할
수 있습니다.

**WIZ750SR은 이더넷 네트워크를 통해 시리얼 장치를 제어하기 위한 최적의 솔루션이 될 것입니다.**

-----

## Features

  - **W7500P** MCU 기반의 시리얼 to 이더넷 모듈
  - WIZ107/108SR 시리얼 to 이더넷 모듈과 소프트웨어 커맨드 및 하드웨어 호환
  - WIZ750SR은 One board에서 3가지 형태로 구성
      - WIZ750SR-TTL: TTL Version
      - WIZ750SR-RS232: RS-232 Version
      - WIZ750SR-RS485: RS-485/422 Version 
  - **10/100Mbps 이더넷 & 최대 230kbps 시리얼 속도**
  - **핀헤더(2x6) 타입 & RJ-45 커넥터**
  - 목적에 따라 설정 가능한 **4개의 사용자 I/O 핀**
  - 스테이터스 핀: PHY link status / TCP connection status
  - 시리얼 신호 (RS-232 혹은 RS-422/485 트랜시버는 제품 타입에 따라 내장)
      - RS-232/TTL 타입: TXD, RXD, RTS, CTS
      - RS-422/485 타입: 485+/RXD+, TXD+, 485-/RXD-, TXD-, 485\_SEL
      - 선택 가능한 DTR/DSR 신호 지원 (스테이터스 핀과 DTR/DSR 중 선택하여 사용 가능)
  - Data UART와 Debug UART 분리 구성
  - 접속 비밀번호 지원
  - 제품 설정을 위한 시리얼 커맨드와 설정 툴 프로그램 지원
  - WIZ VSP (Virtual Serial Port) 프로그램 지원
  - 10/100 Mbps Ethernet ESD 보호 IC 내장 \* 
  - PCB Board design: 45mm X 30mm (Length x Width)
  - Compact size design: 48mm X 30mm X 18mm (Length x Width x Height) 

-----

## Product Contents

\<slider :products:wiz750sr:wiz750sr-ttl-evb\_package\_1024x858.jpg\>

  - **WIZ750SR-RS232-EVB Package**

\<slider :products:wiz750sr:wiz750sr-rs485-evb\_package\_1024x893.jpg\>

  - **WIZ750SR-RS485-EVB Package**

\<slider :products:wiz750sr:wiz750sr\_rev1.0\_main\_1024x693.png\>

  - **WIZ750SR Module**

\<slider :products:wiz750sr:wiz750sr-ttl-evb\_1024x683.png\>

  - **WIZ750SR evaluation board for RS-232/TTL module**

\<slider :products:wiz750sr:wiz750sr-rs485-evb\_1024x683.png\>

  - **WIZ750SR evaluation board for RS-485/422 module**

\<slider :products:wiz750sr:wiz750sr-ttl-evb\_2\_1024x816.png\>

  - **Combining WIZ750SR module and EVB**

\</slider\>

### WIZ750SR 모듈 제품 구성

| Ordering Information | Item                  | Q'ty | Remarks    |
| -------------------- | --------------------- | ---- | ---------- |
| WIZ750SR-TTL         | WIZ750SR-TTL module   | 1    | \-         |
| WIZ750SR-RS232       | WIZ750SR-RS232 module | 1    | \-         |
| WIZ750SR-RS485       | WIZ750SR-RS485 module | 1    | RS-422/485 |


### WIZ750SR 개발보드 제품 구성

| Ordering Information | Category | Item                          | Q'ty | Remarks    |
| -------------------- | -------- | ----------------------------- | ---- | ---------- |
| WIZ750SR-EVB-TTL     | Device   | WIZ750SR-TTL module           | 1    | \-         |
| :::                  | :::      | WIZ750SR-RS232/TTL-EVB board  | 1    | \-         |
| :::                  | Cable    | D-SUB9-FEMALE serial cable    | 1    | Data port  |
| :::                  | :::      | USB 2.0 Micro B type cable 1M | 1    | Debug port |
| :::                  | :::      | 24AWG CAT5e UTP cable         | 1    | LAN cable  |
| WIZ750SR-EVB-RS232   | Device   | WIZ750SR-RS232 module         | 1    | \-         |
| :::                  | :::      | WIZ750SR-RS232/TTL-EVB board  | 1    | \-         |
| :::                  | Cable    | D-SUB9-FEMALE serial cable    | 1    | Data port  |
| :::                  | :::      | USB 2.0 Micro B type cable 1M | 1    | Debug port |
| :::                  | :::      | 24AWG CAT5e UTP cable         | 1    | LAN cable  |
| WIZ750SR-EVB-RS485   | Device   | WIZ750SR-RS422/485 module     | 1    | \-         |
| :::                  | :::      | WIZ750SR-EVB-RS422/485 board  | 1    | \-         |
| :::                  | Cable    | USB 2.0 Micro B type cable 1M | 1    | Debug port |
| :::                  | :::      | 24AWG CAT5e UTP cable         | 1    | LAN cable  |

\* 본 구성은 제품의 성능 향상을 위해 더 나은 구성품으로 대체 될 수 있습니다.

-----

## Navigation

-----

 **WIZ750SR** 

  - **[User's Manual (English)](User's_Manual-[EN].md)** 
  - **[User's Manual (Korean)](User's_Manual-[KO].md)** 

<!-- end list -->

  - **[Device Command Manual (English)](Command_Manual-[EN].md)**
  - **[Device Command Manual (Korean)](Command_Manual-[KO].md)**

<!-- end list -->

  - **[Troubleshooting Guide (English)](Trouble_Shooting-[EN].md)**
  - **[Troubleshooting Guide (Korean)](Trouble_Shooting-[KO].md)**

<!-- end list -->

  - **[Update History (English)](Series_Update_History-[EN].md)**
  - **[Update History (Korean)](Series_Update_History-[KO].md)**

-----

**WIZ750SR series Downloads** 

  - **[Software Download](Download.md)**

<!-- end list -->

  - **[Technical References](Technical_References.md)**

-----
