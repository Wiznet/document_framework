---
id: gtting_started_guide-[KO]
title: Getting Started Guide-[KO]
date: 2020-04-13
---

## Content

# Getting Started with WIZ752SR-120

 **Supported Languages**  
* [English](Getting_Started-[EN].md) 
* [Korean](Getting_Started-[KO].md) (current page)
(current page)

![](/products/wiz750sr/docs_icon.png)

-----

\*\* \* 이 문서는 WIZ752SR-120 모듈을 이용해 WIZ120SR의 개발 보드(EVB, Evaluation
Board)에서의 활용을 기준으로 작성되었습니다. \*\*

-----

## Unpacking the WIZ752SR-120

### What's in the Box?

|                                           |
| ----------------------------------------- |
| ![]()                                     |
| Figure: ***WIZ752SR-120 V1.0 개발 보드 패키지*** |

WIZ752SR-120-EVB 개발 보드 패키지는 다음과 같이 구성되어 있습니다.

  - WIZ752SR-120 모듈
  - WIZ120SR-EVB 개발 보드
  - 케이블 (이더넷 / 시리얼)
  - 아답터 (5V/2A)

개발보드 별 패키지 구성품의 전체 항목은 [WIZ752SR-120 Overview: Product
Contents](/products/s2e_module/wiz752sr-120/overview/en#product_contents)
페이지에서 확인 하실 수 있습니다.

## Prerequisites for Setup

### Software

  - Configuration tool 프로그램 ([Download page](/))
  - TCP 서버 / TCP 클라이언트 / UDP 터미널 프로그램
  - 시리얼 터미널 프로그램

### Hardware

  - WIZ752SR-120 모듈과 개발 보드(WIZ120SR-EVB)
  - 이더넷 케이블
  - DB9 시리얼 RS-232 케이블
  - 제품 동작을 위한 전원
      - DC5V 아답터

-----

## Connect Your WIZ752SR-120

### WIZ752SR-120 Factory Settings

| 네트워크 설정 | 장치  | IP 주소       | 192.168.11.2  | \-                |
| ------- | --- | ----------- | ------------- | ----------------- |
| :::     | ::: | Gateway 주소  | 192.168.11.1  | \-                |
| :::     | ::: | Subnet mask | 255.255.255.0 | \-                |
| :::     | ::: | DNS 서버 주소   | 8.8.8.8       | Google Public DNS |
| :::     | ::: | Port0 번호    | 5000          | \-                |
| :::     | ::: | Port1 번호    | 5001          | \-                |
| :::     | 목적지 | IP 주소       | 192.168.11.3  | \-                |
| :::     | ::: | Port0 번호    | 5000          | \-                |
| :::     | ::: | Port1 번호    | 5001          | \-                |

| 시리얼 포트 설정 | UART0 | 115200-8-N-1 / Flow Control: None | \- |
| --------- | ----- | --------------------------------- | -- |
| :::       | UART1 | 115200-8-N-1 / Flow Control: None | \- |

| 사용자 I/O 설정 | UserIO A | Analog / Input   | Read only    |
| ---------- | -------- | ---------------- | ------------ |
| :::        | UserIO B | Digital / Input  | Read only    |
| :::        | UserIO C | Digital / Output | Read / Write |
| :::        | UserIO D | Digital / Output | Read / Write |

  - 제품 동작 모드: **TCP 서버 모드**
  - Debug 메시지: **Enabled**
  - 시리얼 커맨드 모드 전환: **Enabled**
  - 시리얼 커맨드 모드 전환 코드: **+++** (3바이트 hex code, \[2B\]\[2B\]\[2B\])

<!-- end list -->

  - 데이터 패킹 옵션 - Time: **Disabled**
  - 데이터 패킹 옵션 - Size: **Disabled**
  - 데이터 패킹 옵션 - Char: **Disabled**

<!-- end list -->

  - 비활성 타이머: **Disabled**
  - 재연결 주기: **3초**
  - Keep-Alive 패킷 전송: **Enabled, 초기 지연 7초, 전송 주기 5초**

### PC Settings

\<WRAP center round important 80%\> WIZ752SR-120의 설정을 위한 PC 혹은
노트북(laptop)은 **동일한 이더넷 네트워크 대역에 위치하여야 서로 통신이 가능합니다.** \</WRAP\>

#### Example: PC Network Settings

\* WIZ752SR-120의 설정이 공장 초기화 값일 때, PC의 설정 예

<table>
<thead>
<tr class="header">
<th>네트워크 설정</th>
<th>PC or laptop<br />
(= 목적지)</th>
<th>IP 주소</th>
<th>192.168.11.3</th>
<th>-</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>:::</td>
<td>:::</td>
<td>Gateway 주소</td>
<td>192.168.11.1</td>
<td>-</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>Subnet mask</td>
<td>255.255.255.0</td>
<td>-</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>:::</td>
<td>Port0 번호</td>
<td>5000</td>
<td>-</td>
</tr>
</tbody>
</table>

  - TCP 클라이언트 및 TCP 서버/클라이언트 혼용 모드의 테스트를 위해 WIZ752SR-120의 Remote host
    설정은 PC(혹은 laptop)와 일치하는 것이 좋습니다.

<!-- end list -->

  - 만약 DHCP(자동 IP 할당) 기능을 사용 할 경우, WIZ750SR-120 제품과 테스트용 PC는 **동일한
    공유기**로부터 IP 주소를 할당 받도록 설정하여야 합니다.

### Connecting Steps

\<WRAP center round important 80%\> **WIZ752SR-120-EVB**는 **DB9 커넥터**를
이용하여 사용자 시리얼 장치와 연결되도록 구성되어 있습니다. 따라서 PC를 이용한 초기 제품 테스트의 경우, **이더넷 및
시리얼 포트를 모두 PC와 연결**하여 테스트 하도록 가이드 하고 있습니다. 만약 PC에 시리얼 포트가 없는 경우는 시중에 판매
중인 **RS-232 to USB 컨버터(\*별매)**를 활용하시기 바랍니다.

\</WRAP\>

#### Step 1: Plug in

WIZ752SR-120 모듈과 개발보드를 아래 그림과 같이 결합한 후, 박스에 동봉된 케이블을 다음과 같이 연결합니다.

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
| Figure: **WIZ752SR-120 모듈과 개발보드 결합** |

#### Step 2: Power on

박스에 동봉된 5V 전원 어댑터를 개발보드에 연결하고 파워 스위치를 On 합니다..

  - 정상적으로 전원이 공급된 경우, 모듈과 개발 보드의 전원 LED(red)가 점등됩니다.

#### Step 3: Search

PC의 Configuration tool을 실행하여 상단 Search 버튼을 클릭합니다. 보드에 전원이 인가되고 동일한 네트워크에
연결되어 동작 중인 경우 WIZ752SR-120 모듈의 MAC 주소와 설정 값을 tool에서 확인 할 수 있습니다.

|                                                                     |
| ------------------------------------------------------------------- |
| ![](/products/s2e_module/wiz752sr-120/gettingstarted/01_search.png) |
| Figure: **WIZnet Configuration Tool**                               |

#### Step 4: Set up your WIZ752SR-120

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

아래와 같은 데이터 통신 과정이 올바르게 수행되면, WIZ752SR-120 제품의 기본적인 데이터 전송 기능 검증이 완료됩니다.

  - **시리얼 to 이더넷: 데이터 전송 검증**
      - 시리얼 터미널 측에 문자열을 입력하고, 동일한 문자열이 TCP 클라이언트 터미널 측에 표시되는지 확인해 봅시다. 

<!-- end list -->

  - **이더넷 to 시리얼: 데이터 전송 검증**
      - TCP 클라이언트 터미널 측에 문자열을 입력하고, 동일한 문자열이 시리얼 터미널 측에 표시되는지 확인해 봅시다. 

#### Step 7: Done

이제 WIZ752SR-120 제품을 활용할 준비가 완료되었습니다\!

  - 본 내용은 PC를 **시리얼 장치** 및 **원격 네트워크 장비**로 가정하고 WIZ752SR-120 제품의 동작을
    테스트하는 과정입니다. 

<!-- end list -->

  - 이후 사용자는 **네트워킹 기능을 추가 할 시리얼 장비**에 WIZ752SR-120 모듈을 연결하고, 이 장비를
    **원격지의 PC 혹은 서버 측(원격 네트워크 장비)**에서 데이터 송/수신을 통해 **제어 및 모니터링이
    가능**합니다.

-----

\<WRAP center round tip 80% centeralign\> **동작에 문제가 있나요?**  
**[Troubleshooting 가이드](/products/wiz750sr/troubleshooting/ko)** 문서를 참고해
보세요\! \</WRAP\>

-----
