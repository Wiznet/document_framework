---
id: getting-started-KO
title: Getting Started-[KO]
date: 2025-09-03
---

 **Supported Languages**  
* [English](./Getting-Started-EN) 
* [Korean](./Getting-Started-KO) (current page)

![](/img/products/wiz750sr/docs_icon.png)

-----

** 이 문서는 WIZSPE-T1L 개발 보드의 활용을 기준으로 작성되었습니다. **

-----

## Unpacking the WIZSPE-T1L

### What's in the Box?

The WIZSPE-T1L evaluation board package contains the following parts.

  - WIZSPE-T1L Module


### Device Layout

TBD (img)

### Parts
  - ARM Cortex-M0 기반에 Hardwired TCP/IP core를 더한 Ethernet MCU **W7500**
  - 2선(1Pair)으로 최대 1.2km까지 통신 가능한 **PHY(10Base T1L Ethernet Transceiver)** 
  - 배선에 용이한 **Pluggable Terminal Block** 
  - App모드에서 **boot모드로 접속할 수 있는 Pin** 
  - App모드에서 **AT command모드로 접속할 수 있는 Pin** 
  - **Hardware Debug Port으로 사용되는 SWD(JTAG)** 
  - **ISP모드/디버그 로그 확인을 위한 Pin** 
  - **Reset Button** 
  - **Reset IC** 
  - 5VDC - 36VDC 의 넓은 입력 전원 스펙의 **DCDC**
  - 2pi **DC-JACK**
  - 데이터 라인으로 전원 공급 가능(**PoDL 모듈** 별매)

### Interfaces and Ports

- **Data 포트(UART)**: PIN Header
- **Network 포트**: Terminal block
- **사용자 Optional 포트**: 1x6 2.54mm Pin header (Debug(ISP Port))

-----

## Prerequisites for Setup

### Software

  - Configuration tool 프로그램 (v1.5.7.2 이상) ([Download](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases))
  - TCP 서버 / TCP 클라이언트 / UDP 터미널 프로그램
  - 시리얼 터미널 프로그램

### Hardware

  - WIZSPE-T1L 모듈
  - 제품 동작을 위한 전원
      - 5V - 36V DC 어댑터
      - 별매되는 WIZPoDL 모듈 장착시 PoDL PSE로부터 전원 공급 받을 수 있음 

-----

## Connect Your WIZSPE-T1L

### WIZSPE-T1L Factory Settings

| 네트워크 설정 | 장치  | IP 주소       | 192.168.11.2  | \-                |
| ------- | --- | ----------- | ------------- | ----------------- |
| :::     | ::: | Gateway 주소  | 192.168.11.1  | \-                |
| :::     | ::: | Subnet mask | 255.255.255.0 | \-                |
| :::     | ::: | DNS 서버 주소   | 8.8.8.8       | Google Public DNS |
| :::     | ::: | Port 번호     | 5000          | \-                |
| :::     | 목적지 | IP 주소       | 192.168.11.3  | \-                |
| :::     | ::: | Port 번호     | 5000          | \-                |

| 시리얼 포트 설정 | Data UART  | 115200-8-N-1 / Flow Control: None | \-    |
| --------- | ---------- | --------------------------------- | ----- |
| :::       | Debug UART | 115200-8-N-1 / Flow Control: None | Fixed |

  - 제품 동작 모드: **TCP 서버 모드**
  - Debug 메시지: **Enabled**
  - 시리얼 커맨드 모드 전환: **Enabled**
  - 시리얼 커맨드 모드 전환 코드: **+++** (3바이트 hex code, \[2B\]\[2B\]\[2B\])



  - 데이터 패킹 옵션 - Time: **Disabled**
  - 데이터 패킹 옵션 - Size: **Disabled**
  - 데이터 패킹 옵션 - Char: **Disabled**



  - 비활성 타이머: **Disabled**
  - 재연결 주기: **3초**
  - Keep-Alive 패킷 전송: **Enabled, 초기 지연 7초, 전송 주기 5초**

### PC Settings

WIZSPE-T1L의 설정을 위한 PC 혹은
노트북(laptop)은 **동일한 이더넷 네트워크 대역에 위치하여야 서로 통신이 가능합니다.**

#### Example: PC Network Settings

\* WIZSPE-T1L의 설정이 공장 초기화 값일 때, PC의 설정 예

| 네트워크 설정 | PC  | IP 주소       | 192.168.11.3  | \-                |
| ------- | --- | ----------- | ------------- | ----------------- |
| :::     | ::: | Gateway 주소  | 192.168.11.1  | \-                |
| :::     | ::: | Subnet mask | 255.255.255.0 | \-                |
| :::     | ::: | Port 번호     | 5000          | \-                |


  - TCP 클라이언트 및 TCP 서버/클라이언트 혼용 모드의 테스트를 위해 WIZSPE-T1L의 Remote host
    설정은 PC(혹은 laptop)와 일치하는 것이 좋습니다.



  - 만약 DHCP(자동 IP 할당) 기능을 사용 할 경우, WIZSPE-T1L 제품과 테스트용 PC는 **동일한
    공유기**로부터 IP 주소를 할당 받도록 설정하여야 합니다.

### Connecting Steps

**WIZSPE-T1L**은 **UART**를 이용하여 시리얼 장치와 연결되도록 구성되어 있습니다. 따라서 PC를 이용한 초기 제품 테스트의 경우, 시중에 판매 중인 **UART to USB 컨버터**를 활용하시어 모듈과 PC가 시리얼 통신이 가능하도록 연결이 필요합니다.



#### Step 1: Plug in

WIZSPE-T1L 모듈과 개발보드를 아래 그림과 같이 결합한 후, 다음과 같이 연결합니다.

  - 10BASE-T1L 이더넷 케이블
      - WIZSPE-T1L 모듈의 터미널 블럭에 10 Base-T1L의 P, N 을 연결합니다.
        (극성을 감지하여 보정하기 때문에 P, N을 반대로 연결하셔도 무방합니다.)
      - 케이블은 UTP 케이블, RS485 케이블처럼 꼬임 케이블을 권장드리며 사용되는 케이블에 따라 최대 통신 거리의 변동(700M - 1200M)이 있습니다.

  - 시리얼 케이블
      - WIZSPE-T1L 모듈의 J11(UART 포트)와 PC를 UART to USB 모듈을 사용하여 연결합니다.
        UART to USB 모듈은 시중에 나와있는 모듈을 구매하여 사용합니다.


<!--
|                             |
| --------------------------- |
|                             |
| Figure: **WIZSPE-T1L 모듈** |
-->

#### Step 2: Power on

5V - 36V 전원 어댑터를 연결하거나 WIZPoDL(별매)를 PSE에 연결합니다.
  - 정상적으로 전원이 공급된 경우, 모듈과 개발 보드의 전원 LED(red)가 점등됩니다.

#### Step 3: Search

PC의 Configuration tool을 실행하여 상단 Search 버튼을 클릭합니다. 보드에 전원이 인가되고 동일한 네트워크에
연결되어 동작 중인 경우 WIZSPE-T1L 모듈의 MAC 주소와 설정 값을 tool에서 확인 할 수 있습니다.

|                                                       |
| ----------------------------------------------------- |
| ![](/img/products/wizspe-t1l/configtool.png) |
| Figure: **WIZnet Configuration Tool**                 |

#### Step 4: Set up your WIZSPE-T1L

사용자 환경에 맞춰 제품의 설정 값을 변경합니다. 본 Step에서는 제품의 공장 초기화 설정을 기반으로 초기 테스트를 수행합니다.

``` 
  * Configuration tool에서 설정 변경 후, 변경된 값을 적용하려면 **Setting 버튼**을 클릭해야 합니다.
```

#### Step 5: Connect

PC를 사용자 시리얼 장치 및 TCP 클라이언트로 삼아 데이터 통신을 테스트하기 위한 연결을 수행합니다. 이를 위해 PC에서
시리얼 터미널 프로그램 및 TCP 클라이언트 터미널 프로그램이 실행 되어야 합니다. 공장 초기값 기준으로 PC와 장치를
연결하기 위해 각각 프로그램은 다음과 같이 설정 후 연결하면 됩니다.

  - 시리얼 터미널 프로그램: **115200-8-N-1, Flow control: None**
  - TCP 클라이언트 프로그램: **192.168.11.2:5000** (WIZSPE-T1L의 IP 주소 및 포트 번호)

시리얼 터미널 프로그램을 연결하기 위한 COM 포트는 Windows 제어판 \> 장치 관리자에서 확인 할 수 있습니다.

  - Control Panel \> System \> Device Manager

|                                                                  |
| ---------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/windows_devicemanager.png) |
| Figure: Device Manager                                           |

#### Step 6: Verify

아래와 같은 데이터 통신 과정이 올바르게 수행되면, WIZSPE-T1L 제품의 기본적인 데이터 전송 기능 검증이 완료됩니다.

  - **시리얼 to 이더넷: 데이터 전송 검증**
      - 시리얼 터미널 측에 문자열을 입력하고, 동일한 문자열이 TCP 클라이언트 터미널 측에 표시되는지 확인해 봅니다. 



  - **이더넷 to 시리얼: 데이터 전송 검증**
      - TCP 클라이언트 터미널 측에 문자열을 입력하고, 동일한 문자열이 시리얼 터미널 측에 표시되는지 확인해 봅니다. 

#### Step 7: Done

이제 WIZSPE-T1L 제품을 활용할 준비가 완료되었습니다.

  - 본 내용은 PC를 **시리얼 장치** 및 **원격 네트워크 장비**로 가정하고 WIZSPE-T1L 제품의 동작을
    테스트하는 과정입니다. 



  - 이후 사용자는 **네트워킹 기능을 추가 할 시리얼 장비**에 WIZSPE-T1L 모듈을 연결하고, 이 장비를
    **원격지의 PC 혹은 서버 측(원격 네트워크 장비)**에서 데이터 송/수신을 통해 **제어 및 모니터링이
    가능**합니다.

## Documents History
| Title | Description | Link | Notes |
|-------|-------------|------|-------|
| Getting-Started  | Ver 1.0.0 (250919) | ![](\img\products\w5500\w5500_evb\icons\docs_icon_small.png) [Getting-Started-KO_V100](./docx/Getting-Started-KO_V100.pdf) | - |
