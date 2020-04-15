---
id: getting_started_guide-[KO]
title: Getting Started Guide-[ko]
date: 2020-04-15
---

## Content

# WIZ752SR-125 Product Overview

\*\* Supported Languages \*\*  
\* [English](/products/s2e_module/wiz752sr-125/overview/en) (current
page)  
\* [Korean](/products/s2e_module/wiz752sr-125/overview/ko)

-----

## Overview

![WIZ752SR-125 Product
Overview](/products/s2e_module/wiz752sr-125/wiz752sr-125_overview.png%20)

WIZ752SR-125 is a compact sized serial to Ethernet module using the
W7500 Ethernet MCU (SoC based on ARM Cortex-M0 architecture) with
External PHY(IC+). WIZ752SR-125 is a protocol converter that transmits
data sent by serial equipment as TCP/IP data and converts the TCP/IP
data received through the network back into serial data to the serial
equipment. It complies with industrial temperature standard.

**WIZ752SR-125 is compatible\[1\] with the WIZnet WIZ125SR S2E module.**
In addition, WIZ752SR-125 contains a 4-pin GPIO expansion port that can
be controlled freely by the user. (analog input or digital in/out)

**WIZ752SR-125 is the best fit solution to control user's serial device
via Ethernet network.**

-----

## Features

  - Serial to Ethernet Module based on **W7500** MCU
  - Included External PHY chip
  - **Function and Hardware compatible with WIZ120SR S2E Module**
      - **It's not compatible configuration tool of WIZ120SR**
  - Supports 2 Ports Serial(RS-232C)
      - D-Sub 9 Connector 2EA
  - **10/100Mbps Ethernet & Up to 230kbps serial speed**
  - Status LED: Run, TCP connection status
  - Supports a search password 
  - Configuration is possible via serial AT commands or via
    Configuration tool 
  - Support WIZ VSP (Virtual Serial Port) program
  - Built-in Supervisor IC for improvements of Reset function stability
  - Supports Static IP, DHCP, PPPoE
  - Supports DNS
  - Operation Temperature : -40℃ \~ 85℃
  - Dimensions : 88.50(W) x 66.00(L) x 18.00(H) (Unit : mm)

-----

## Product Contents

### WIZ752SR-125 Module

| Ordering Information | Item                | Q'ty | Remarks |
| -------------------- | ------------------- | ---- | ------- |
| WIZ752SR-125         | WIZ752SR-125 module | 1    | \-      |

### WIZ752SR-125 Evaluation Board

| Ordering Information | Category | Item                       | Q'ty | Remarks   |
| -------------------- | -------- | -------------------------- | ---- | --------- |
| Pakage               | Device   | WIZ752SR-125               | 1    | \-        |
| :::                  | Cable    | D-SUB9-FEMALE serial cable | 1    | Data port |
| :::                  | :::      | 24AWG CAT5e UTP cable      | 1    | LAN cable |
| :::                  | Adapter  | DC5V/2A Adapter            | 1    | \-        |

\* It can be replaced with better components to improve the performance
of the product.

\<WRAP center round important 80%\> **WIZ752SR-125-EVB**는 **DB9 커넥터**를
이용하여 사용자 시리얼 장치와 연결되도록 구성되어 있습니다. 따라서 PC를 이용한 초기 제품 테스트의 경우, **이더넷 및
시리얼 포트를 모두 PC와 연결**하여 테스트 하도록 가이드 하고 있습니다. 만약 PC에 시리얼 포트가 없는 경우는 시중에 판매
중인 **RS-232 to USB 컨버터(\*별매)**를 활용하시기 바랍니다.

\</WRAP\>

#### Step 1: Plug in

WIZ752SR-125 모듈과 케이블을 다음과 같이 연결합니다.

  - 이더넷 케이블
      - 개발보드의 RJ-45 커넥터와 PC의 이더넷 네트워크 인터페이스 카드(RJ-45 커넥터)를 연결합니다.

<!-- end list -->

  - 시리얼 케이블
      - 개발보드의 DB9 커넥터와 PC의 시리얼 인터페이스 카드(DB9 커넥터)를 연결합니다. 만약 PC가 시리얼
        인터페이스를 지원하지 않을 경우 'RS-232 to USB 컨버터'를 활용하여 USB에
        연결합니다.

|                                      |
| ------------------------------------ |
| ![]()                                |
| Figure: **WIZ752SR-125 모듈과 개발보드 결합** |

#### Step 2: Power on

5V 전원 어댑터를 개발보드에 연결하고 파워 스위치를 On 합니다..

  - 정상적으로 전원이 공급된 경우, 모듈과 개발 보드의 전원 LED(red)가 점등됩니다.

#### Step 3: Search

PC의 Configuration tool을 실행하여 상단 Search 버튼을 클릭합니다. 보드에 전원이 인가되고 동일한 네트워크에
연결되어 동작 중인 경우 WIZ752SR-120 모듈의 MAC 주소와 설정 값을 tool에서 확인 할 수 있습니다.

|                                                                     |
| ------------------------------------------------------------------- |
| ![](/products/s2e_module/wiz752sr-120/gettingstarted/01_search.png) |
| Figure: **WIZnet Configuration Tool**                               |

#### Step 4: Set up your WIZ752SR-125

사용자 환경에 맞춰 제품의 설정 값을 변경합니다. 본 Step에서는 제품의 공장 초기화 설정을 기반으로 초기 테스트를 수행합니다.

#### Step 5: Connect

PC를 사용자 시리얼 장치 및 TCP 클라이언트로 삼아 데이터 통신을 테스트하기 위한 연결을 수행합니다. 이를 위해 PC에서
시리얼 터미널 프로그램 및 TCP 클라이언트 터미널 프로그램이 실행 되어야 합니다. 공장 초기값 기준으로 PC와 장치를
연결하기 위해 각각 프로그램은 다음과 같이 설정 후 연결하면 됩니다.

  - 시리얼 터미널 프로그램: **115200-8-N-1, Flow control: None**
  - TCP 클라이언트 프로그램: **192.168.11.2:5000** (WIZ752SR-120의 IP 주소 및 포트 번호)

시리얼 터미널 프로그램을 연결하기 위한 COM 포트는 Windows 제어판 \> 장치 관리자에서 확인 할 수 있습니다.

  - Control Panel \> System \> Device Manager

|                                                                  |
| ---------------------------------------------------------------- |
| ![](/products/wiz750sr/gettingstarted/windows_devicemanager.png) |
| Figure: Device Manager                                           |

#### Step 6: Verify

아래와 같은 데이터 통신 과정이 올바르게 수행되면, WIZ752SR-125 제품의 기본적인 데이터 전송 기능 검증이 완료됩니다.

  - **시리얼 to 이더넷: 데이터 전송 검증**
      - 시리얼 터미널 측에 문자열을 입력하고, 동일한 문자열이 TCP 클라이언트 터미널 측에 표시되는지 확인해 봅시다. 

<!-- end list -->

  - **이더넷 to 시리얼: 데이터 전송 검증**
      - TCP 클라이언트 터미널 측에 문자열을 입력하고, 동일한 문자열이 시리얼 터미널 측에 표시되는지 확인해 봅시다. 

#### Step 7: Done

이제 WIZ752SR-125 제품을 활용할 준비가 완료되었습니다\!

  - 본 내용은 PC를 **시리얼 장치** 및 **원격 네트워크 장비**로 가정하고 WIZ752SR-125 제품의 동작을
    테스트하는 과정입니다. 

<!-- end list -->

  - 이후 사용자는 **네트워킹 기능을 추가 할 시리얼 장비**에 WIZ752SR-125 모듈을 연결하고, 이 장비를
    **원격지의 PC 혹은 서버 측(원격 네트워크 장비)**에서 데이터 송/수신을 통해 **제어 및 모니터링이
    가능**합니다.

-----

\<WRAP center round tip 80% centeralign\> **동작에 문제가 있나요?**  
**[Troubleshooting 가이드](/products/wiz750sr/troubleshooting/ko)** 문서를 참고해
보세요\! \</WRAP\>

-----
