---
id: getting_started-KO
title: Getting Started [KO]
date: 2020-04-24
---

**본 문서는 WIZ550SR-EVB를 이용한 사용법 기준으로 작성이 되었다.**

-----

## Unpacking the WIZ550SR EVB

![WIZ550SR-EVB Package](/img/products/wiz550sr/gettingstarted/wiz550sr_evb.jpg)  
WIZ550SR-EVB 패키지는 아래와 같은 구성품으로 이루어져 있다.

  - WIZ550SR - 1EA
  - WIZ550SR-EVB - 1EA
  - Cat5, Ethernet Cable - 1EA
  - Micro USB B Type Cable - 1EA

![WIZ550SR-EVB](/img/products/wiz550sr/gettingstarted/wiz550sr_evb_1.png)  
WIZ550SR이 위 사진과 같이 조립이 되어 있는지 육안으로 확인을 한다.

-----

## Prerequisites for Setup

### Software

  - Virtual COM Port USB Driver.([Download page](download#download-wiz550sr-evb-usb-driver))
  - WIZnet Configuration Tool 프로그램.([Download page](download#download-configuration-tool))
  - TCP server / TCP client / UDP 터미널 프로그램.
  - Serial 터미널 프로그램.

### Hardware

  - WIZ550SR 모듈과 WIZ550-EVB.
  - 이더넷 케이블.
  - Micro USB B 타입 케이블
  - 제품의 전원, USB 5V 입력 - PC or 노트푹에 연결해야함.

-----

## Connect Your WIZ550SR

### WIZ550SR Factory Settings

| Category       | Item                   | Value             |
| -------------- | ---------------------- | ----------------- |
| **Network**    | Local IP               | 192.168.77.100    |
| :::            | Local Gateway          | 192.168.77.1      |
| :::            | Local Subnet           | 255.255.255.0     |
| :::            | Local Port             | 5000              |
| :::            | Remote Port            | 5000              |
| :::            | Working Mode           | TCP Server        |
| :::            | Inactivity             | 0                 |
| :::            | Reconnection           | 1000              |
| **Data UART**  | Baud Rate              | 115200            |
| :::            | Data Bits              | 8                 |
| :::            | Parity                 | NONE              |
| :::            | Stop Bits              | 1                 |
| :::            | Flow                   | NONE              |
| :::            | AT Command USE         | Enable            |
| :::            | Trigger Code           | 2B/ 2B / 2B       |
| :::            | Packing Condition Time | 0                 |
| :::            | Packing Condition Size | 0                 |
| :::            | Delimeter Length       | 0                 |
| :::            | Delimeter              | 2D / 2D / 2D / 2D |
| :::            | Delimeter Appendix     | 0                 |
| **Debug UART** | Baud Rate              | 115200            |
| :::            | Data Bits              | 8                 |
| :::            | Parity                 | NONE              |
| :::            | Stop Bits              | 1                 |
| :::            | Flow                   | NONE              |
| **Options**    | Module Name            | WIZ550SR          |
| :::            | Setting Password       | WIZnet            |
| :::            | Connection Password    | WIZnet            |
| :::            | DHCP USE               | Disable           |
| :::            | DNS USE                | Disable           |
| :::            | DNS Server IP          | 8.8.8.8           |

  - 초기 동작 모드 : **TCP 서버 모드**
  - Debug UART : **Enabled**
  - Serial command mode switch : **Enabled**
  - Serial command mode switch code : **+++** (hex code, [2B][2B][2B])

### PC Settings

WIZ550SR과 WIZ550SR의 설정을 위한 PC 혹은 노트북(laptop)은 동일한 이더넷 네트워크 대역에 위치하여야 서로 통신이 가능합니다.

#### Example: PC Network Settings

\* WIZ750SR의 설정이 공장 초기화 값일 때, PC의 설정 예,

<table>
<thead>
<tr class="header">
<th>Network Settings</th>
<th>PC or laptop<br />
(= Remote)</th>
<th>IP address</th>
<th>192.168.77.101</th>
<th>-</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>:::</td>
<td>:::</td>
<td>Gateway address</td>
<td>192.168.77.1</td>
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
<td>Port number</td>
<td>5000</td>
<td>-</td>
</tr>
</tbody>
</table>

  - TCP 클라이언트 및 TCP 서버/클라이언트 혼용 모드의 테스트를 위해 WIZ550SR의 Remote host 설정은 PC(혹은 laptop)와 일치하는 것이 좋습니다.

  - 만약 DHCP(자동 IP 할당) 기능을 사용 할 경우, WIZ550SR 제품과 테스트용 PC는 **동일한 공유기**로부터 IP 주소를 할당 받도록 설정하여야 합니다.

### Connecting Steps

#### Step 1 : USB Driver 설치

처음 WIZ550SR-EVB를 사용하기 해서 사용자의 PC에 USB Driver 설치 한다.

  - WIZ550SR-EVB를 USB B Type 케이블을 이용해서 PC와 연결 한다.
  - WIZ550SR-EVB의 RJ-45 커넥터와 PC의 RJ-45 커넥터를 Ethernet 케이블을 이용해 연결 한다.
  - 연결이 되면 USB Driver가 설치를 해야 한다.([Download page](download#download-wiz550sr-evb-usb-driver))
  - 장치관리자를 실행해서 아래 사진과 같이 **USB Serial Port**가 2개 생성되는 것을 확인 한다.

![Device Manager](/img/products/wiz550sr/gettingstarted/device_manager2.png)

  - Control Panel \> System \> Device Manager
  - 2개의 USB Serial Port중에, 숫자가 낮은 Port가 Main UART, 숫자가 높은 Port가 Debug
    UART 이다.
      - **ex) USB Serial Port(COM8) : Data UART** - Data 전송이 이루어지는 포트.
      - **ex) USB Serial Port(COM9) : Debug UART** - Debug 메시지가 출력되는 포트.

#### Step 2 : 전원 입력

WIZ550SR-EVB의 초기 상태를 확인을 한다.

- WIZ550SR-EVB의 전원 SW를 On 한다.
- **Power LED 확인(Red LED)** - 전원 입력 상태 확인
  - WIZ550SR의 LD3 : On
  - WIZ550SR-EVB의 LD4 : On
- **Work LED 확인(Green LED)** - WIZ550SR의 동작 확인
  - WIZ550SR의 LD1 : Blink
- **Ethernet LED 확인(Green LED)** - 네트워크 상태 확인
  - WIZ550SR-EVB의 LD2 : Blink
  - WIZ550SR-EVB의 LD3 : On
      
#### Step 3 : Search & Debug Message

PC의 Configuration tool을 실행하여 상단 Search 버튼을 클릭 한다. 보드에 전원이 인가되고 동일한 네트워크에 연결되어 동작 중인 경우 WIZ550SR 모듈의 MAC 주소와 설정 값을 tool에서 확인 할 수 있다.

{{ :products:wiz550sr:gettingstarted:search.png ? direct | Configuration tool }}

PC의 시리얼 터미널 프로그램을 실행하여, WIZ550SR의 Debug UART의 시리얼 포트에 연결은 한다. 보드에 전원인 인가하면, 아래 사진과 같은 Debug Message를 확인 할수 있다.

{{ :products:wiz550sr:gettingstarted:debug_message.png ? direct | Debug Message}}

#### Step 4: Set up your WIZ550SR
사용자 환경에 맞춰 제품의 설정 값을 변경한다. 본 Step에서는 제품의 공장 초기화 설정을 기반으로 초기 테스트를 수행한다.
  * Configuration tool에서 설정 변경 후, 변경된 값을 적용하려면 Setting 버튼을 클릭해야하고 **Setting Password**를 입력해야 한다.
  * Setting Password 의 초기 값은 **WIZnet** 이다.
  * 설정이 완료되면 **Success Set**이라는 메시지가 나오고 WIZ550SR은 Reset이 된다.

#### Step 5: Connect
PC를 사용자 시리얼 장치 및 TCP 클라이언트로 삼아 데이터 통신을 테스트하기 위한 연결을 수행한다. 이를 위해 PC에서 시리얼 터미널 프로그램 및 TCP 클라이언트 터미널 프로그램이 실행 되어야 한다. 공장 초기값 기준으로 PC와 장치를 연결하기 위해 각각 프로그램은 다음과 같이 설정 후 연결하면 된다. 

  * 시리얼 터미널 프로그램
    * Data UART : 115200-8-N-1, Flow control: None
    * Debug UART : 115200-8-N-1, Flow control: None
  * TCP 클라이언트 프로그램: 192.168.77.100:5000 (WIZ550SR의 IP 주소 및 포트 번호)
    * WIZ550SR에 연결을 하고, 5초 이내에 **Connection Password**를 입력해야 한다.
    * Connection Password의 초기 값은 **WIZnet** 이다.
    * 5초 이내에 Connection Password를 입력하지 않은 연결이 중단 된다.

#### Step 6: Verify
아래와 같은 데이터 통신 과정이 올바르게 수행되면, WIZ550SR 제품의 기본적인 데이터 전송 기능 검증이 완료된다.

  * 시리얼 to 이더넷: 데이터 전송 검증
    * 시리얼 터미널 측에 문자열을 입력하고, 동일한 문자열이 TCP 클라이언트 터미널 측에 표시되는지 확인해 봅시다.
  * 이더넷 to 시리얼: 데이터 전송 검증
    * TCP 클라이언트 터미널 측에 문자열을 입력하고, 동일한 문자열이 시리얼 터미널 측에 표시되는지 확인해 봅시다.

#### Step 7: Done
이제 WIZ550SR 제품을 활용할 준비가 완료되었습니다! 

  * 본 내용은 PC를 시리얼 장치 및 원격 네트워크 장비로 가정하고 WIZ550SR 제품의 동작을 테스트하는 과정입니다.
  * 이후 사용자는 네트워킹 기능을 추가 할 시리얼 장비에 WIZ550SR 모듈을 연결하고, 이 장비를 원격지의 PC 혹은 서버 측(원격 네트워크 장비)에서 데이터 송/수신을 통해 제어 및 모니터링이 가능합니다

----
