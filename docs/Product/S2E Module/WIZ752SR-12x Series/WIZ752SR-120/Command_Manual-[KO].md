---
id: command_manual-[KO]
title: Command Manual-[KO]
date: 2020-03-13
---

## Content

# WIZ752SR Command Manual

\*\* Supported Languages \*\*  
\* [English](/products/s2e_module/wiz752sr-120/commandmanual/en)  
\* [Korean](/products/s2e_module/wiz752sr-120/commandmanual/ko) (current
page)

![](/products/wiz750sr/docs_icon.png)

-----

## WIZ752SR Command Overview

WIZ752SR은 제품의 설정 및 제어를 위해 다양한 커맨드 셋을 제공합니다. 각 커맨드는 **2-byte의 알파벳 문자열**로
구성되어 있으며, **대문자만 허용**합니다. 이러한 커맨드를 활용하면 사용자의 시리얼 장치(혹은 메인 MCU)에 스크립트를
추가하여 상황에 따라 제품의 설정을 변경 할 수 있으며, 네트워크를 통해 WIZ752SR 모듈을 제어하는 전용
프로그램\[1\]을 제작 할 수도 있습니다.

각각의 커맨드는 parameter의 유무에 따라 읽기/쓰기 동작을 수행하도록 제작되어 있으며, 읽기 전용 커맨드\[2\]도
존재합니다.

시리얼 포트를 통한 제품의 **커맨드 모드 전환과 커맨드 입력은 Data UART port를 통해 수행**되며, **Debug
UART port는 커맨드의 입력과 수행을 지원하지 않습니다.**

커맨드를 활용하여 시리얼과 이더넷 네트워크으로 제품을 설정 할 때, 동일한 2-byte 문자열 커맨드를 활용하지만 전송 프레임
형태에는 약간의 차이가 있습니다. 때문에 본 문서에는 커맨드 전체에 대한 설명과 함께 각각의 전송 방법에 대한 프레임 형태
및 가이드가 포함되어 있습니다.

각 방향의 커맨드 모드에 대한 진입 방법과 활용은 다음과 같습니다.

  - **[시리얼 커맨드 모드를 통한 제어](#entering_serial_command_mode)**

<!-- end list -->

  - **[이더넷 네트워크를 통한 제어](#command_via_ethernet)**

### Abbreviations

| CR | Carriage Return, 커서를 맨 왼쪽 시작 위치로 이동 ('\\r', 0x0D) |
| -- | ------------------------------------------------- |
| LF | Line Feed, 커서를 한 칸 아래로 이동하여 새 줄 추가 ('\\n', 0x0A)  |
| N  | 커맨드의 개수                                           |
| RW | 읽기와 쓰기 가능(Read / Write)                           |
| RO | 읽기 전용(Read only)                                  |
| WO | 쓰기 전용(Write only)                                 |

-----

1.  위즈네트에서 제공하는 **제품 설정 프로그램(Configuration tool)**도 동일한 커맨드 셋을 이용하여
    WIZ750SR 제품을 제어합니다.

2.  예를 들어, 제품의 MAC 주소를 확인하는 **MC** 커맨드와 펌웨어 버전을 확인하는 **VR** 커맨드와 같은 경우.

## Usage of Command Set

### Entering Serial Command Mode

다음 두 가지 방법을 통해 시리얼 커맨드 모드로 진입 할 수 있습니다.

  - **1. 하드웨어 트리거 핀을 이용한 커맨드 모드 진입**
      - WIZ752SR의 HW\_TRIG 핀(EVB의 경우, HW\_TRIG 스위치)을 이용하여 커맨드 모드로 진입 할 수
        있습니다.
      - 제품의 전원 인가 시, 해당 핀을 체크하여 커맨드 모드로 진입하며 이후 하드웨어 트리거 핀을 이용하여 다시 커맨드
        모드로 진입하고자 하는 경우 제품을 Reboot 하여야 합니다.
      - 해당 핀은 Pull-up 상태이며, Low Active로 동작합니다.
      - 제품 동작 시, 초기에 한 번의 설정 변경 등이 필요한 경우 활용 할 수 있습니다.

\<WRAP round box center 80%\>

``` 
  - **하드웨어 트리거 핀(HW_TRIG)을 Low로 인가합니다.** 
    * EVB의 경우, HW_TRIG 스위치를 Command로 위치 시킵니다.
  - **WIZ752SR을 Power on 시킵니다.**
    * 시리얼 커맨드 모드로 동작하는 경우, Debug UART port를 통해 다음 메시지를 확인 할 수 있습니다.
    * <code>> SEG:AT Mode</code> 
  - **설정이 필요한 항목의 Command와 Parameter를 시리얼((Data UART port))로 입력합니다.**
  - **[[#ex|EX]] 커맨드를 이용하여 데이터 전송 모드로 전환합니다.**
    * 성공적으로 데이터 모드로 전환 된 경우, Debug UART port를 통해 다음 메시지를 확인 할 수 있습니다.
    * <code>> SEG:GW Mode</code> 
```

\</WRAP\>

  - **2. 커맨드 모드 전환 코드\[1\]를 이용한 커맨드 모드 진입**
      - WIZ752SR 제품에서 지원하는 커맨드 모드 전환 코드를 이용하여 커맨드 모드로 진입 할 수 있습니다.
      - 커맨드 모드 전환 코드는 제품 설정 프로그램에서 커맨드 모드 전환 코드 사용 여부가 허용(Enabled) 되어
        있어야 활용 가능합니다. (**default: Enabled**)
      - 커맨드 모드 전환 코드는 3-byte Hex 코드로 구성되어 있으며, 사용자의 목적에 맞게 다른 값으로 변경
        가능합니다. 단 해당 코드는 Hex 값 만을 허용합니다. (**default: Hex
        \[2B\]\[2B\]\[2B\]**\[2\])

\<WRAP round box center 80%\>

``` 
  - **제품 설정 프로그램(Configuration Tool)의 'Serial command mode switch code' 항목 Enable 여부와 3-bytes '커맨드 모드 전환 코드'를 확인합니다.**
  - **Data UART port로 커맨드 모드 전환 코드를 입력하여 모드를 변경합니다.**
    * 아래 **'커맨드 모드 전환 시 주의점'**을 확인하여야 합니다.
    * 시리얼 커맨드 모드로 정상 변경된 경우, Debug UART port를 통해 다음 메시지를 확인 할 수 있습니다.
    * <code>> SEG:AT Mode</code>  
  - **설정이 필요한 항목의 Command와 Parameter를 시리얼로 입력합니다.**
  - **[[#ex|EX]] 커맨드를 이용하여 데이터 전송 모드로 전환합니다.**
    * 성공적으로 데이터 모드로 전환 된 경우, Debug UART port를 통해 다음 메시지를 확인 할 수 있습니다.
    * <code>> SEG:GW Mode</code> 
```

\</WRAP\>

\<WRAP round tip center 90%\>

**Trigger code를 이용한 커맨드 모드 전환 시 주의점**은 다음과 같습니다.

``` 
  - 3-byte 커맨드 모드 전환 코드의 전, 후로 **500ms 이상**의 데이터 전송 없는 시간 간격(Time gap)이 있어야 전환 코드로 인식합니다.
  - 3-byte 커맨드 모드 전환 코드의 각 byte 간 사이의 입력 시간 간격이 **500ms 이하**여야 합니다.
  - 커맨드 모드 전환 코드의 말미에는 CR과 LF를 붙이지 않습니다.((이와 반대로, 모드 전환 후 입력 될 시리얼 커맨드의 경우에는 각 커맨드의 마지막에 CR과 LF를 붙여야 합니다.))
  - 커맨드 모드 전환 코드 전, 후 간격과 사이 간격의 **초기 값은 500ms**이며, 시리얼 데이터 패킹 옵션의 **Timer** 값이 설정된 경우 간격 값은 설정된 Timer 값으로 변경됩니다.
```

\</WRAP\>

1.  Command mode switch trigger code via Data UART port

2.  Char '+++'

#### Serial Command Frame Format

각 커맨드의 끝에는 CR과 LF가 포함되어야 하며, 여러 개의 커맨드를 한 번에 입력 할 경우 각각 커맨드의 끝에 CR과 LF가
모두 포함되어야 합니다.

##### Get Request

    [2-bytes Command Code] [CR] [LF]

  - Parameter 없이 커맨드만 입력합니다.
  - 입력한 커맨드에 해당하는 Response가 Return 됩니다.

##### Set Request

    [2-bytes Command Code] [Parameters] [CR] [LF]

  - 커맨드와 설정하고자 하는 parameters를 함께 입력합니다.
  - 별도의 Response는 없으며, 커맨드에 해당하는 필드 값의 변경이 즉시 이루어집니다.
  - 변경된 사항의 저장을 위해서 **[SV](#sv)** 커맨드를 이용한 저장이 이루어져야 하며, IP 할당 방법 변경 등의
    초기 동작 변경 사항은 **[RT](#rt)** 커맨드를 이용한 Reboot 이후에 적용됩니다.

\* 참고: **[EC](#ec)** 커맨드를 이용하여 UART 입력의 Echoback을 확인 할 수 있습니다.

-----

### Command over Ethernet

다음과 같은 형태로 커맨드를 활용하면, Ethernet을 통해 제품을 제어하거나 모니터링 할 수 있습니다. 이 때 사용자는
**UDP 혹은 TCP 클라이언트**\[1\]를 활용하여 지정된 형태로 커맨드를 전송하여야 하며, 커맨드 처리를 위한 포트 번호는
**50001**번 입니다.

\<WRAP round info center centeralign 80%\> **커맨드 전송을 위한 제품 네트워크 정보:**  
**UDP / TCP Server : 50001**  
(사용자는 UDP / TCP Client로 제품에 커맨드 전송) \</WRAP\>

#### Ethernet Command Frame Format

Ethernet을 통해 제품을 제어 할 때는 커맨드 코드 전송 이전에 두 개의 커맨드가 추가로 필요합니다. 커맨드 전송 시, 필수
커맨드 두 개를 포함하여 하나의 프레임으로 전송되어야 합니다. 그 외 나머지 설정과 동작은 Data UART port를 이용한
시리얼 커맨드 전송 방법과 동일합니다.

1.  제품 내에 커맨드를 처리하기 위해 UDP와 TCP 서버가 동작하고 있으므로, 사용자는 꼭 UDP 혹은 TCP 클라이언트를
    활용하여야 합니다.
    
    추가로 필요한 커맨드는 **MA**, **PW**이며 다음과 같은 목적으로 사용됩니다.

  - **\[MA\] 커맨드**
      - 제품의 제어 및 모니터 시, **제품의 MAC 주소**를 나타내기 위한 필드입니다.
      - TCP와 UDP의 두 경우 모두 2-byte의 MA 커맨드 이후에 6-byte의 제품 MAC 주소를 포함시켜
        전송하여야 합니다.
          - UDP로 Get Request만 Broadcast하는 경우\[1\], 해당 필드의 값을 Broadcast
            MAC 주소\[2\]로 지정 할 수 있습니다. 이러한 경우 다수의 Peer에게 응답(response)를 수신
            할 수 있으며, 설정 프로그램의 Search 기능이 이러한 방법으로 구현 되어 있습니다.

<!-- end list -->

  - **\[PW\] 커맨드**
      - 제품의 설정 중 제품 그룹 식별을 위한 **'Search ID Code'**를 사용 할 경우, PW 커맨드 이후에
        해당 제품의 설정 값을 포함시켜 전송하여야 합니다.
      - 만약 **'Search ID Code'**를 사용하지 않는 경우, PW 커맨드와 CR/LF 사이의 필드(Search
        ID)를 비워서는 안되며, **0x20**\[3\] 값이 입력되어야 합니다.

\<WRAP round info center centeralign 85%\> **Ethernet을 통한 커맨드 전송 시의 커맨드
프레임은  
반드시 MA -\> PW -\> (Command x N)의 순서로 구성되어야 합니다.** \</WRAP\>

1.  Broadcast IP 주소 255.255.255.255로 데이터를 전송하여, 동일 망 내에 위치한 모든 Peer에게
    데이터를 전송하는 방법

2.  FF:FF:FF:FF:FF:FF

3.  Hex값 0x20은 ASCII 코드로 공백을 의미합니다.

##### Get Request

\<WRAP round box center 100%\> **단일 커맨드 전송 시**

    MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] [Command] [CR] [LF]

**N개의 복수 커맨드 전송 시**

    MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] ([Command] [CR] [LF]) * N

\</WRAP\>

  - Get Request에 대한 Response는 Request와 동일한 포맷의 프레임에 Parameter를 포함한 형태로
    응답합니다.\[1\]

##### Set Request

\<WRAP round box center 100%\> **단일 커맨드 전송 시**

    MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] [Command] [Parameters] [CR] [LF]

**N개의 복수 커맨드 전송 시**

    MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] ([Command] [Parameters] [CR] [LF]) * N

\</WRAP\>

  - Set Request의 경우, 별도의 응답 없이 제품의 설정을 즉시 변경하도록 구성되어 있습니다.
  - 만약 변경된 값을 확인하고 싶을 경우, Set Request 프레임 말미에 해당 커맨드를 parameter 없이 추가하여
    Set + Get Request 형태로 전송하시면 됩니다.

#### Ethernet Command Examples

##### Example \#1: UDP Get Command Frame

  - UDP를 통해 **다수 제품의 MAC과 Local IP 주소 요청** 시
      - Search ID는 사용하지 않음

| Request from User |
| ----------------- |

\<WRAP round box center 100%\>

**커맨드 프레임**

    MA [FF FF FF FF FF FF] [CR] [LF] PW [ ] [CR] [LF] MC [CR] [LF] LI [CR] [LF] 

**커맨드 프레임의 Hex 코드 표현**

    4D 41 FF FF FF FF FF FF 0D 0A 50 57 20 0D 0A 4D 43 0D 0A 4C 49 0D 0A

\</WRAP\>

| Response by WIZ752SR |
| -------------------- |

\<WRAP round box center 100%\>

**커맨드 프레임**

    MA [00 08 DC 00 00 11] [CR] [LF] PW [ ] [CR] [LF] MC [00 08 DC 00 00 11] [CR] [LF] LI [192.168.11.2] [CR] [LF] 

**커맨드 프레임의 Hex 코드 표현**

    4D 41 00 08 DC 00 00 11 0D 0A 50 57 20 0D 0A 4D 43 00 08 DC 00 00 11 0D 0A 4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 32 0D 0A

\</WRAP\>

1.  즉, Get Request에 대한 Response는 Set Request와 동일한 형태입니다.

##### Example \#2: TCP Get Command Frame

  - TCP를 통해 **MAC 주소가 00:08:DC:00:00:11인 제품의 Local IP 주소 요청 시**
      - Search ID는 사용하지 않음

| Request from User |
| ----------------- |

\<WRAP round box center 100%\>

**커맨드 프레임**

    MA [00 08 DC 00 00 11] [CR] [LF] PW [ ] [CR] [LF] LI [CR] [LF] 

**커맨드 프레임의 Hex 코드 표현**

    4D 41 00 08 DC 00 00 11 0D 0A 50 57 20 0D 0A 4C 49 0D 0A

\</WRAP\>

| Response by WIZ752SR |
| -------------------- |

\<WRAP round box center 100%\>

**커맨드 프레임**

    MA [00 08 DC 00 00 11] [CR] [LF] PW [ ] [CR] [LF] LI [192.168.11.2] [CR] [LF] 

**커맨드 프레임의 Hex 코드 표현**

    4D 41 00 08 DC 00 00 11 0D 0A 50 57 20 0D 0A 4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 32 0D 0A

\</WRAP\>

##### Example \#3: TCP Set Command Frame

  - TCP를 통해 **MAC 주소가 00:08:DC:00:00:11인 제품의 Local IP 주소 변경 요청** 시
      - Search ID가 **HELLO**로 설정된 경우
      - Local IP 주소를 **192.168.11.5로 변경**하고자 할 경우

| Request from User |
| ----------------- |

\<WRAP round box center 100%\>

**커맨드 프레임**

    MA [00 08 DC 00 00 11] [CR] [LF] PW [HELLO] [CR] [LF] LI [192.168.11.5] [CR] [LF] 

**커맨드 프레임의 Hex 코드 표현**

    4D 41 00 08 DC 00 00 11 0D 0A 50 57 48 45 4C 4C 4F 0D 0A 4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 35 0D 0A

\</WRAP\>

| Response by WIZ752SR |
| -------------------- |

\<WRAP round box center 100%\>

    None

\</WRAP\>

\<WRAP round info center centeralign 80%\> **IP 주소 형식\[1\] 설정의 변경 시,
'192.168.11.5'와 같이  
'.'(dot, 0x2E)도 함께 포함하여 전송하여야 합니다.** \</WRAP\>

-----

1.  IP 주소, 게이트웨이 주소, 서브넷 마스크, DNS 서버 주소, 원격지 IP 주소 등의 IPv4 주소 형식

## Command list

  - 커맨드 입력 시 Parameter가 포함되면 해당 값을 설정하는 Set 커맨드로 동작합니다.
  - 커맨드만 입력 시 해당 값을 읽어오는 Get 커맨드로 동작합니다.
  - 별도로 Read only 표기가 없다면 Get / Set을 모두 지원하는 커맨드 입니다.
  - Write only 커맨드는 Parameter 없이 제품의 동작을 제어하는 커맨드\[1\] 입니다.
  - 기본 커맨드 리스트\[2\]와 확장 커맨드 리스트\[3\]로 분리 구성 되어 있습니다.
  - 커맨드 모드를 통해 변경한 사항 중 IP 할당 방법 설정, DNS 동작 관련 설정\[4\] 등의 항목은
    **[SV](#sv)** 커맨드를 이용한 '설정 저장' 이후 **[RT](#rt)** 커맨드를 이용한 '모듈 재시작'을
    수행해야 정상적으로 적용됩니다.

### Basic Commands

1.  설정 저장, 리부트, 모드 변경, 공장 초기화 등

2.  WIZ107/108SR 호환 커맨드 리스트, \[UI\] 커맨드 제외

3.  WIZ750SR 전용 커맨드 리스트

4.  제품이 접속할 원격지의 주소를 IP 주소에서 Domain으로 변경한 경우 등

| CMD       | Category                    | Description                               | Type |
| --------- | --------------------------- | ----------------------------------------- | ---- |
| [MC](#mc) | Device Information          | MAC address                               | RO   |
| [VR](#vr) | :::                         | Firmware version                          | RO   |
| [MN](#mn) | :::                         | Product name                              | RO   |
| [ST](#st) | :::                         | 0번 채널용 Operation status                   | RO   |
| [QS](#st) | :::                         | 1번 채널용 Operation status                   | RO   |
| [UN](#un) | :::                         | UART interface(Str)                       | RO   |
| [UI](#un) | :::                         | UART interface(Code)                      | RO   |
| [OP](#op) | Network Settings            | 0번 채널용 Network operation mode             | RW   |
| [QO](#op) | :::                         | 1번 채널용 Network operation mode             | RW   |
| [IM](#im) | :::                         | IP address allocation method(Static/DHCP) | RW   |
| [LI](#li) | :::                         | Local IP 주소                               | RW   |
| [SM](#sm) | :::                         | 서브넷 마스크                                   | RW   |
| [GW](#gw) | :::                         | 게이트웨이 주소                                  | RW   |
| [DS](#ds) | :::                         | DNS 서버 주소                                 | RW   |
| [LP](#lp) | :::                         | 0번 채널용 Local 포트 번호                        | RW   |
| [QL](#lp) | :::                         | 1번 채널용 Local 포트 번호                        | RW   |
| [RH](#rh) | :::                         | 0번 채널용 원격지(remote) IP 주소 / 도메인            | RW   |
| [QH](#rh) | :::                         | 1번 채널용 원격지(remote) IP 주소 / 도메인            | RW   |
| [RP](#rp) | :::                         | 0번 채널용 원격지(remote) 포트 번호                  | RW   |
| [QP](#rp) | :::                         | 1번 채널용 원격지(remote) 포트 번호                  | RW   |
| [BR](#br) | Data UART Settings          | UART 0 Baud rate                          | RW   |
| [EB](#br) | :::                         | UART 1 Baud rate                          | RW   |
| [DB](#db) | :::                         | UART 0 Data bit                           | RW   |
| [ED](#db) | :::                         | UART 1 Data bit                           | RW   |
| [PR](#pr) | :::                         | UART 0 Parity bit                         | RW   |
| [EP](#pr) | :::                         | UART 1 Parity bit                         | RW   |
| [SB](#sb) | :::                         | UART 0 Stop bit                           | RW   |
| [ES](#sb) | :::                         | UART 1 Stop bit                           | RW   |
| [FL](#fl) | :::                         | UART 0 Flow control                       | RW   |
| [EF](#fl) | :::                         | UART 1 Flow control                       | RW   |
| [PT](#pt) | Serial Data Packing Options | 0번 채널용 Time 설정 값                          | RW   |
| [NT](#pt) | :::                         | 1번 채널용 Time 설정 값                          | RW   |
| [PS](#ps) | :::                         | 0번 채널용 Size 설정 값                          | RW   |
| [NS](#ps) | :::                         | 1번 채널용 Size 설정 값                          | RW   |
| [PD](#pd) | :::                         | 0번 채널용 Char 설정 값                          | RW   |
| [ND](#pd) | :::                         | 1번 채널용 Char 설정 값                          | RW   |
| [IT](#it) | Options                     | 0번 채널용 비활성 타이머 설정 값                       | RW   |
| [RV](#it) | :::                         | 1번 채널용 비활성 타이머 설정 값1                      | RW   |
| [CP](#cp) | :::                         | 연결 비밀번호 사용 설정(TCP server only)            | RW   |
| [NP](#np) | :::                         | 연결 비밀번호(TCP server only)                  | RW   |
| [SP](#sp) | :::                         | 검색 ID 코드                                  | RW   |
| [DG](#dg) | :::                         | 디버그 메시지 허용 설정                             | RW   |
| [KA](#ka) | :::                         | 0번 채널용 TCP Keep-alive 허용 설정               | RW   |
| [RA](#ka) | :::                         | 1번 채널용 TCP Keep-alive 허용 설정               | RW   |
| [KI](#ki) | :::                         | 0번 채널용 TCP Keep-alive 초기 간격               | RW   |
| [RS](#ki) | :::                         | 1번 채널용 TCP Keep-alive 초기 간격               | RW   |
| [KE](#ke) | :::                         | 0번 채널용 TCP Keep-alive 재시도 간격              | RW   |
| [RE](#ke) | :::                         | 1번 채널용 TCP Keep-alive 재시도 간격              | RW   |
| [RI](#ri) | :::                         | 0번 채널용 TCP 클라이언트 재연결 간격(TCP client only)  | RW   |
| [RR](#ri) | :::                         | 1번 채널용 TCP 클라이언트 재연결 간격(TCP client only)  | RW   |
| [EC](#ec) | :::                          | UART 입력 Echoback          | RW |
| [TE](#te) | Command Mode Switch Settings | 커맨드 모드 전환 코드 허용 설정        | RW |
| [SS](#ss) | :::                          | 커맨드 모드 전환 코드(3-bytes Hex) | RW |
| [EX](#ex) | Device Control               | 커맨드 모드 종료 (Data 모드로 전환)   | WO |
| [SV](#sv) | :::                          | 디바이스 설정 저장                | WO |
| [RT](#rt) | :::                          | 디바이스 Reboot               | WO |
| [FR](#fr) | :::                          | 디바이스 공장 초기화               | WO |
