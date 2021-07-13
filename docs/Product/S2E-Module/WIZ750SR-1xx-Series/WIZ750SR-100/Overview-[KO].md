---
id: overview-KO
title: Overview-[KO]
date: 2020-04-09
---

 **Supported Languages**  
* [English](overview-EN) 
* [Korean](overview-KO) (current page)

-----

## Overview

WIZ750SR-100은 Cortex-M0 기반의 W7500 MCU와 외부 PHY IC가 탑재된 시리얼 to 이더넷 모듈
제품입니다.

WIZ750SR-100은 시리얼 장비가 보낸 데이터를 TCP/IP 패킷으로 변환하여 이더넷 네트워크로 전송시키며, 반대로
네트워크로부터 받은 TCP/IP 패킷을 시리얼 데이터로 변환하여 고객의 시리얼 장비로 전달하는 역할을
수행합니다. 이 제품을 활용하면 시리얼 인터페이스를 지원하는 장치에 손쉽게 네트워크 연결 기능을 추가 할 수
있어, 이더넷 네트워크를 통해 시리얼 장비를 제어하는 것이 가능해집니다.

**WIZ100SR 제품군과 호환**\[1\]되도록 제작 되었으며, 별도의 시리얼 Debug 포트와 고객의 목적에 따라 제어하고
모니터링 할 수 있는 4개의 사용자 I/O 핀을 제공합니다. (아날로그 입력 / 디지털 입-출력)

또한 제어용 커맨드는 WIZ107SR(WIZ750SR)과 호환됩니다.

**또한 WIZ750SR와 혼용**\[2\]사용할 수 있도록 제작 되었으며, 사용자는 펌웨어에서 보드 선택만 변경한다면 여러
종류의 보드 사용이 가능합니다. (ex. WIZ750SR, WIZ750SR-100, WIZ750SR-105,
WIZ750SR-110)

해당 제품은 산업용 온도 스펙 (industrial temperature standard, -40℃ \~ 85℃)을 만족하며,
WIZ750SR-100 모듈은 TTL로 동작하며 WIZ750SR-100-EVB를 사용할 경우 RS-232까지 사용 가능합니다.

**WIZ750SR-100은 이더넷 네트워크를 통해 시리얼 장치를 제어하기 위한 최적의 솔루션이 될 것입니다.**

-----

## Features

  - **W7500** MCU 기반의 시리얼 to 이더넷 모듈
  - WIZ100SR-100 시리얼 to 이더넷 모듈과 소프트웨어 커맨드 및 하드웨어 호환
  - WIZ750SR-100은 TTL Level 호환됩니다.
  - **10/100Mbps 이더넷 & 최대 230kbps 시리얼 속도**
  - **핀헤더(1x12(x3), 2mm pin-header) 타입**
  - 목적에 따라 설정 가능한 **4개의 사용자 I/O 핀**
  - 스테이터스 핀: PHY link status / TCP connection status
  - 시리얼 신호
      - WIZ750SR-100-EVB(RS-232 타입): TXD, RXD, RTS, CTS
      - 선택 가능한 DTR/DSR 신호 지원 (스테이터스 핀과 DTR/DSR 중 선택하여 사용 가능)
  - Data UART와 Debug UART 분리 구성
  - 접속 비밀번호 지원
  - 제품 설정을 위한 시리얼 커맨드와 설정 툴 프로그램 지원
  - WIZ VSP (Virtual Serial Port) 프로그램 지원
  - 10/100 Mbps Ethernet ESD 보호 IC 내장
  - Supervisor IC 내장에 의한 안정성 및 신뢰성 향상
  - PCB Board design: 50mm X 30mm (Length x Width)
  - Compact size design: 50mm X 30mm X 12mm (Length x Width x Height) 

-----

## Product Contents

### WIZ750SR-100 모듈 제품 구성

| Ordering Information | Item                     | Q'ty | Remarks |
| -------------------- | ------------------------ | ---- | ------- |
| WIZ750SR-100         | WIZ750SR-100 module(TTL) | 1    | \-      |

### WIZ750SR-100 개발보드 제품 구성

| Ordering Information | Category | Item                          | Q'ty | Remarks    |
| -------------------- | -------- | ----------------------------- | ---- | ---------- |
| WIZ750SR-100-EVB     | Device   | WIZ750SR-100 module           | 1    | \-         |
| :::                  | Cable    | D-SUB9-FEMALE serial cable    | 1    | Data port  |
| :::                  | :::      | USB 2.0 Micro B type cable 1M | 1    | Debug port |
| :::                  | :::      | 24AWG CAT5e UTP cable         | 1    | LAN cable  |

\* 본 구성은 제품의 성능 향상을 위해 더 나은 구성품으로 대체 될 수 있습니다.

-----

## Navigation

-----

WIZ750SR series Common Documents 

  - **User's Manual [(English)](/docs/Product/S2E-Module/WIZ750SR/users_manual-EN)/[(Korean)](/docs/Product/S2E-Module/WIZ750SR/users_manual-KO)** 
  
  - **Device Command Manual [(English)](../../WIZ750SR/command_manual-EN)/[(Korean)](../../WIZ750SR/command_manual-KO)**
  
  - **Troubleshooting Guide [(English)](../../WIZ750SR/trouble_shooting-EN)/[(Korean)](../../WIZ750SR/trouble_shooting-KO)**
  
  - **Update History [(English)](../../WIZ750SR/series_update_history-EN)/[(Korean)](../../WIZ750SR/series_update_history-KO)**
  
-----

**WIZ750SR series Downloads** 

  - **[Software Download](../../WIZ750SR/download)**
  - **[Technical References](../../WIZ750SR/technical_references)**

-----

