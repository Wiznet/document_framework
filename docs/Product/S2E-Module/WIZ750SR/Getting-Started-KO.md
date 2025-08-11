---
id: getting-started-KO
title: Getting Started-[KO]
date: 2020-04-08
---

**Supported Languages**
   * [English](./Getting-Started-EN)  
   * [Korean](./Getting-Started-KO) (current page)

![](/img/products/wiz750sr/docs_icon.png)

-----

**이 문서는 WIZ750SR-RS232 개발 보드(EVB, Evaluation Board)의 활용을 기준으로 작성되었습니다.**

-----

## Unpacking the WIZ750SR

### What's in the Box?

|                                                                              |
| ---------------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/wiz750sr-ttl-evb_package_1024x858.jpg) |
| Figure: ***WIZ750SR Rev. 1.1 개발 보드 패키지***                                    |

WIZ750SR-RS232 개발 보드 패키지는 다음과 같이 구성되어 있습니다.

  - WIZ750SR-RS232 모듈
  - WIZ750SR-RS232/TTL-EVB 개발 보드
  - 케이블 (이더넷 / 시리얼 / 마이크로 USB 타입 B)

개발보드 별 패키지 구성품의 전체 항목은 [WIZ750SR Overview: Product Contents](./Overview-KO.md#product-contents) 페이지에서 확인 하실 수
있습니다.

### Device Layout

|                                                                          |
| ------------------------------------------------------------------------ |
| ![](/img/products/wiz750sr/gettingstarted/wiz750sr_top_parts_rev1.2.png) |
| Figure: ***WIZ750SR Revision 1.1 전면부***                                  |

|                                                                             |
| --------------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/wiz750sr_bottom_parts_rev1.2.png) |
| Figure: ***WIZ750SR Revision 1.1 후면부***                                     |

### Parts

  - ARM Cortex-M0 기반에 Hardwired TCP/IP core 및 PHY를 더한 Ethernet MCU
    **W7500P** \[1\] \[1\]
  - **전원 표시 LED** (red) \[3\]
  - **2개의 상태 표시 LED** (blue: PHY link status / green: TCP connection
    status) \[4\]
  - **4-Channel ESD Protection IC** \[5\]
  - **RS-422/485 Transceiver** (Optional, WIZ750SR-RS422/485 제품만 mount)
    \[6\]
  - **RS-232 Transceiver** (Optional, WIZ750SR-RS232 제품만 mount) \[7\]

### Interfaces and Ports

  - **이더넷 커넥터**: RJ-45 with transformer \[2\]
  - **Data UART 포트**: 6x2 2.54mm Pin header
  - **Debug UART 포트**: 6x1 2.54mm Pin header (Debug UART 핀과 MCU 부트 핀 /
    GND)
  - **사용자 I/O 포트**: 6x1 2.54mm Pin header (사용자 I/O 4개 핀과 응용 프로그램 부트 핀 /
    GND)

-----

## Prerequisites for Setup

### Software

  - Configuration tool 프로그램 ([Download page](./Download))
  - TCP 서버 / TCP 클라이언트 / UDP 터미널 프로그램
  - 시리얼 터미널 프로그램

### Hardware

  - WIZ750SR 모듈과 개발 보드(EVB)
  - 이더넷 케이블
  - USB type B 케이블 (Debug UART 포트와 PC 연결)
  - DB9 시리얼 RS-232 케이블 (Data UART, RS-232/TTL Ver. only)
  - 제품 동작을 위한 전원
      - PC의 USB 포트, 5V DC 어댑터, 혹은 그 외 다른 3.3V 전원

-----

## Connect Your WIZ750SR

### WIZ750SR Factory Settings

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

| 사용자 I/O 설정 | UserIO A | Analog / Input   | Read only    |
| ---------- | -------- | ---------------- | ------------ |
| :::        | UserIO B | Digital / Input  | Read only    |
| :::        | UserIO C | Digital / Output | Read / Write |
| :::        | UserIO D | Digital / Output | Read / Write |

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

WIZ750SR과 WIZ750SR의 설정을 위한 PC 혹은
노트북(laptop)은 **동일한 이더넷 네트워크 대역에 위치하여야 서로 통신이 가능합니다.**

#### Example: PC Network Settings

\* WIZ750SR의 설정이 공장 초기화 값일 때(출고 시), PC의 네트워크 정보 설정 예

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
<td>Port 번호</td>
<td>5000</td>
<td>-</td>
</tr>
</tbody>
</table>

  - TCP 클라이언트 및 TCP 서버/클라이언트 혼용 모드의 테스트를 위해 WIZ750SR의 Remote host 설정은 PC(혹은 laptop)와 일치하는 것이 좋습니다.



  - 만약 DHCP(자동 IP 할당) 기능을 사용 할 경우, WIZ750SR 제품과 테스트용 PC는 **동일한 공유기**로부터 IP 주소를 할당 받도록 설정하여야 합니다.

### Connecting Steps

**WIZ750SR-EVB의 RS-232/TTL 버전**은
**DB9 커넥터**를 이용하여 사용자 시리얼 장치와 연결되도록 구성되어 있습니다. 따라서 PC를 이용한 초기 제품 테스트의 경우, **이더넷 및 시리얼 포트를 모두 PC와 연결**하여 테스트 하도록 가이드 하고 있습니다. 만약 PC에 시리얼 포트가 없는 경우는 시중에 판매 중인 **RS-232 to USB 컨버터(\*별매)**를 활용하시기 바랍니다.

  - **WIZ750SR-EVB의 RS-422/485 버전 제품의 경우, 시리얼 커넥터 부분이 터미널 블록으로 구성되어 있습니다.**



#### Step 1: Plug in

WIZ750SR 모듈과 개발보드를 아래 그림과 같이 결합한 후, 박스에 동봉된 케이블을 다음과 같이 연결합니다.

  - 이더넷 케이블
      - 개발보드의 RJ-45 커넥터와 PC의 이더넷 네트워크 인터페이스 카드(RJ-45 커넥터)를 연결합니다.



  - 시리얼 케이블
      - 개발보드의 DB9 커넥터와 PC의 시리얼 인터페이스 카드(DB9 커넥터)를 연결합니다. 만약 PC가 시리얼 인터페이스를 지원하지 않을 경우 'RS-232 to USB 컨버터'를 활용하여 USB에 연결합니다.



  - 선택사항: USB 타입B 케이블 (디버그 메시지)
      - 개발보드의 USB 커넥터와 PC의 USB 커넥터를 연결합니다.

|                                                                        |
| ---------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/wiz750sr-ttl-evb_1_1024x816.png) |
| Figure: **WIZ750SR 모듈과 개발보드 결합**                                       |

|                                                                        |
| ---------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/wiz750sr-ttl-evb_2_1024x816.png) |
| Figure: **WIZ750SR-EVB 측면부**                                           |

#### Step 2: Power on

박스에 동봉된 5V 전원 어댑터나 USB 케이블을 개발보드에 연결한 후 전원 스위치를 ON으로 변경합니다.

  - 정상적으로 전원이 공급된 경우, 모듈과 개발 보드의 전원 LED(red)가 점등됩니다.

#### Step 3: Search

PC의 Configuration tool을 실행하여 상단 Search 버튼을 클릭합니다. 보드에 전원이 인가되고 동일한 네트워크에 연결되어 동작 중인 경우 WIZ750SR 모듈의 MAC 주소와 설정 값을 tool에서 확인 할 수 있습니다.

**새 Configuration tool은 아래 Github 링크를 통해 다운로드 가능합니다.**

  - https://github.com/Wiznet/WIZnet-S2E-Tool-GUI
  - https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases



|                                                       |
| ----------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/configtool.png) |
| Figure: **WIZnet Configuration Tool**                 |

#### Step 4: Set up your WIZ750SR

사용자 환경에 맞춰 제품의 설정 값을 변경합니다. 본 Step에서는 제품의 공장 초기화 설정을 기반으로 초기 테스트를 수행합니다.


  * Configuration tool에서 설정 변경 후, 변경된 값을 적용하려면 **Setting 버튼**을 클릭해야 합니다.


#### Step 5: Connect

PC를 사용자 시리얼 장치 및 TCP 클라이언트로 삼아 데이터 통신을 테스트하기 위한 연결을 수행합니다. 이를 위해 PC에서 시리얼 터미널 프로그램 및 TCP 클라이언트 터미널 프로그램이 실행 되어야 합니다. 공장 초기값 기준으로 PC와 장치를 연결하기 위해 각각 프로그램은 다음과 같이 설정 후 연결하면 됩니다.

  - 시리얼 터미널 프로그램: **115200-8-N-1, Flow control: None**
  - TCP 클라이언트 프로그램: **192.168.11.2:5000** (WIZ750SR의 IP 주소 및 포트 번호)

시리얼 터미널 프로그램을 연결하기 위한 COM 포트는 Windows 제어판 \> 장치 관리자에서 확인 할 수 있습니다.

  - Control Panel \> System \> Device Manager

|                                                                  |
| ---------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/windows_devicemanager.png) |
| Figure: Device Manager                                           |

#### Step 6: Verify

아래와 같은 데이터 통신 과정이 올바르게 수행되면, WIZ750SR 제품의 기본적인 데이터 전송 기능 검증이 완료됩니다.

  - **시리얼 to 이더넷: 데이터 전송 검증**
      - 시리얼 터미널 측에 문자열을 입력하고, 동일한 문자열이 TCP 클라이언트 터미널 측에 표시되는지 확인해 봅시다. 



  - **이더넷 to 시리얼: 데이터 전송 검증**
      - TCP 클라이언트 터미널 측에 문자열을 입력하고, 동일한 문자열이 시리얼 터미널 측에 표시되는지 확인해 봅시다. 

#### Step 7: Done

이제 WIZ750SR 제품을 활용할 준비가 완료되었습니다\!

  - 본 내용은 PC를 **시리얼 장치** 및 **원격 네트워크 장비**로 가정하고 WIZ750SR 제품의 동작을 테스트하는 과정입니다. 



  - 이후 사용자는 **네트워킹 기능을 추가 할 시리얼 장비**에 WIZ750SR 모듈을 연결하고, 이 장비를 **원격지의 PC 혹은 서버 측(원격 네트워크 장비)**에서 데이터 송/수신을 통해 **제어 및 모니터링이 가능**합니다.

-----

**동작에 문제가 있나요?**  
**[Troubleshooting 가이드](./Trouble-Shooting-KO)** 문서를 참고해 보세요\! 

-----

## Navigation

-----

 **WIZ750SR** 

  - **User's Manual [(English)](./Users-Manual-EN)/[(Korean)](./Users-Manual-KO)** 
  
  - **Device Command Manual [(English)](./Command-Manual-EN)/[(Korean)](./Command-Manual-KO)**
  
  - **Troubleshooting Guide [(English)](./Trouble-Shooting-EN)/[(Korean)](./Trouble-Shooting-KO)**
  
  - **Update History [(English)](./Series-Update-History-EN)/[(Korean)](./Series-Update-History-KO)**
  
-----

**WIZ750SR series Downloads** 

  - **[Software Download](./Download)**

  - **[Technical References](./Technical-References)**

-----
