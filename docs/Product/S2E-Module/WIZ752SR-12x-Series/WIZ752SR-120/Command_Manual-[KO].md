---
id: command_manual-[KO]
title: Command Manual-[KO]
date: 2020-04-13
---

## Content

# WIZ752SR Command Manual

**Supported Languages**  
* [English](Command_Manual-[EN].md)  
* [Korean](Command_Manual-[KO].md) (current page)

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

### Extended Commands

<table>
<thead>
<tr class="header">
<th>CMD</th>
<th>Category</th>
<th>Description</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="#ca_-_cd">CA</a></td>
<td>사용자 I/O 설정<br />
User I/O Settings</td>
<td>사용자 I/O A pin Type과 Direction</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#ca_-_cd">CB</a></td>
<td>:::</td>
<td>사용자 I/O B pin Type과 Direction</td>
<td>:::</td>
</tr>
<tr class="odd">
<td><a href="#ca_-_cd">CC</a></td>
<td>:::</td>
<td>사용자 I/O C pin Type과 Direction</td>
<td>:::</td>
</tr>
<tr class="even">
<td><a href="#ca_-_cd">CD</a></td>
<td>:::</td>
<td>사용자 I/O D pin Type과 Direction</td>
<td>:::</td>
</tr>
<tr class="odd">
<td><a href="#ga_-_gd">GA</a></td>
<td>사용자 I/O 값<br />
User I/O<br />
Status / Value</td>
<td>사용자 I/O A pin의 status 혹은 value</td>
<td>Digital out: RW<br />
Digital in: RO<br />
Analog in: RO</td>
</tr>
<tr class="even">
<td><a href="#ga_-_gd">GB</a></td>
<td>:::</td>
<td>사용자 I/O B pin의 status 혹은 value</td>
<td>:::</td>
</tr>
<tr class="odd">
<td><a href="#ga_-_gd">GC</a></td>
<td>:::</td>
<td>사용자 I/O C pin의 status 혹은 value</td>
<td>:::</td>
</tr>
<tr class="even">
<td><a href="#ga_-_gd">GD</a></td>
<td>:::</td>
<td>사용자 I/O D pin의 status 혹은 value</td>
<td>:::</td>
</tr>
<tr class="odd">
<td><a href="#sc">SC</a></td>
<td>상태 I/O<br />
Status I/O</td>
<td>상태 S0 pin과 S1 핀의 동작 모드 설정</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#s0">S0</a></td>
<td>:::</td>
<td>상태 S0 pin의 status (PHY link or DTR)</td>
<td>RO</td>
</tr>
<tr class="odd">
<td><a href="#s1">S1</a></td>
<td>:::</td>
<td>상태 S1 pin의 status (TCP connect or DSR)</td>
<td>:::</td>
</tr>
</tbody>
</table>

-----

## Command Descriptions

### Device Information

-----

#### MC

-----

  - **Format:** `MC[CR][LF]`
  - **Meaning:** 제품의 MAC 주소 확인
  - **Command Type:** Read only
  - **Return Type:** String
  - **Return Value:**

\<WRAP indent\>\<WRAP indent\>

    MAC address with colons(:)

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `MC00:08:DC:00:00:01\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### VR

-----

  - **Format:** `VR[CR][LF]`
  - **Meaning:** 제품에 탑재된 펌웨어의 버전 정보 확인
  - **Command Type:** Read only
  - **Return Type:** String
  - **Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Firmware version with dots(.)

  - \=\> Major version number . Minor version number . Maintenance
    version number

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `VR1.0.0\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### MN

-----

  - **Format:** `MN[CR][LF]`
  - **Meaning:** 제품의 모델명 확인
  - **Command Type:** Read only
  - **Return Type:** String
  - **Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Device model name

  - \=\> Default: WIZ750SR

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `MNWIZ750SR\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### ST

-----

  - **ST** : 0번 채널용 명령어
  - **QS** : 1번 채널용 명령어
  - **Format:** `ST[CR][LF]`
  - **Meaning:** 제품의 동작 상태(Status) 확인
  - **Command Type:** Read only
  - **Return Type:** String
  - **Return Value:**

\<WRAP indent\>\<WRAP indent\>

| Status  | Description                           |
| ------- | ------------------------------------- |
| BOOT    | Boot 모드 입니다. 제품의 설정과 펌웨어 업데이트가 가능합니다. |
| OPEN    | TCP 연결 성립 이전의 상태입니다.                  |
| CONNECT | TCP 연결이 성립된 상태입니다.                    |
| UPGRADE | 펌웨어 업데이트나 DHCP IP 할당 중인 상태입니다.        |
| ATMODE  | 시리얼 AT 커맨드 모드 상태입니다.                  |
| UDP     | UDP 모드 상태입니다.                         |

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `STATMODE\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### UN

-----

  - **Format:** `UN[CR][LF]`
  - **Meaning:** 제품의 UART Interface 종류 확인
  - **Command Type:** Read only
  - **Return Type:** String
  - **Return Value:**

\<WRAP indent\>\<WRAP indent\>

| UART Interface | Description                          |
| -------------- | ------------------------------------ |
| RS-232/TTL     | RS-232C 혹은 TTL 신호의 UART 입/출력을 지원합니다. |
| RS-422/485     | RS-422과 RS-485 신호의 UART 입/출력을 지원합니다. |

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `UNRS-232/TTL\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### UI

-----

  - **Format:** `UI[CR][LF]`
  - **Meaning:** 제품의 UART Interface 종류 확인
  - **Command Type:** Read only
  - **Return Type:** Number (0 / 1)
  - **Return Value:**

\<WRAP indent\>\<WRAP indent\>

| Return value | Description                        | Remarks    |
| ------------ | ---------------------------------- | ---------- |
| 0            | RS-232C 혹은 TTL 신호의 UART 입/출력 지원 모델 | RS-232/TTL |
| 1            | RS-422과 RS-485 신호의 UART 입/출력 지원 모델 | RS-422/485 |

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `UI0\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

  
  
  
  

### Network Settings

-----

#### OP

-----

  - **OP** : 0번 채널용 명령어
  - **QO** : 1번 채널용 명령어
  - **Format:** `OP<Parameter>[CR][LF]`
  - **Meaning:** 제품의 네트워크 동작 모드
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 3)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Meaning</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>TCP Client mode</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>TCP Server mode</td>
<td>-</td>
</tr>
<tr class="odd">
<td>2</td>
<td>TCP Mixed mode</td>
<td>TCP Server / Client mixed mode</td>
</tr>
<tr class="even">
<td>3</td>
<td>UDP mode</td>
<td>-</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

 - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `OP0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 제품의 네트워크 동작 모드 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### IM

-----

  - **Format:** `IM<Parameter>[CR][LF]`
  - **Meaning:** 제품의 IP 주소 할당 방법
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Meaning</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>Static IP</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>DHCP</td>
<td>Obtain an IP address automatically</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `IM0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 제품의 IP 주소 할당 방법 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### LI

-----

  - **Format:** `LI<Parameter>[CR][LF]`
  - **Meaning:** 제품에 설정된 IP 주소
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** IPv4 주소 형식의 String (dot 포함)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 192.168.11.2

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `LI192.168.11.2\r\n`
      - In HEX: `4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 32 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 제품의 IP 주소 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### SM

-----

  - **Format:** `SM<Parameter>[CR][LF]`
  - **Meaning:** 제품에 설정된 서브넷 마스크
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** IPv4 주소 형식의 String (dot 포함)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 255.255.255.0

\</WRAP\> \</WRAP\>

 - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `SM255.255.255.0\r\n`
      - In HEX: `53 4D 32 35 35 2E 32 35 35 2E 32 35 35 2E 30 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 제품의 서브넷 마스크 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### GW

-----

  - **Format:** `GW<Parameter>[CR][LF]`
  - **Meaning:** 제품에 설정된 게이트웨이 주소
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** IPv4 주소 형식의 String (dot 포함)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 192.168.11.1

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `GW192.168.11.1\r\n`
      - In HEX: `47 57 31 39 32 2E 31 36 38 2E 31 31 2E 31 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 제품의 게이트웨이 주소 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### DS

-----

  - **Format:** `DS<Parameter>[CR][LF]`
  - **Meaning:** 제품에 설정된 DNS 주소
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** IPv4 주소 형식의 String (dot 포함)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 8.8.8.8

  - Google Public DNS (IPv4)
      - 8.8.8.8
      - 8.8.4.4

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `DS8.8.8.8\r\n`
      - In HEX: `44 53 38 2E 38 2E 38 2E 38 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 제품의 DNS 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### LP

-----

  - **LP** : 0번 채널용 명령어
  - **QL** : 1번 채널용 명령어
  - **Format:** `LP<Parameter>[CR][LF]`
  - **Meaning:** 제품의 포트 번호
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 5000

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `LP5000\r\n`
      - In HEX: `4C 50 35 30 30 30 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 제품의 포트번호 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### RH

-----

  - **RH** : 0번 채널용 명령어
  - **QH** : 1번 채널용 명령어
  - **Format:** `RH<Parameter>[CR][LF]`
  - **Meaning:** 제품에 설정된 원격지(remote host) IP 주소 / 도메인 네임
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** IPv4 주소 형식의 String (dot 포함) 혹은 도메인 네임
    String
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 192.168.11.3

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `RH192.168.11.3\r\n`
      - In HEX: `52 48 31 39 32 2E 31 36 38 2E 31 31 2E 33 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 제품에 설정된 원격지 IP 주소 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### RP

-----

  - **RP** : 0번 채널용 명령어
  - **QP** : 1번 채널용 명령어
  - **Format:** `RP<Parameter>[CR][LF]`
  - **Meaning:** 제품에 설정된 원격지(remote host) 포트번호
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 5000

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `RP5000\r\n`
      - In HEX: `52 50 35 30 30 30 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 제품에 설정된 원격지 포트번호 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

### Data UART Settings

-----

#### BR

-----

  - **BR** : 0번 채널용 명령어
  - **EB** : 1번 채널용 명령어
  - **Format:** `BR<Parameter>[CR][LF]`
  - **Meaning:** 시리얼 인터페이스(Data UART)의 Baud rate
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 13)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Baud rate</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>300</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>600</td>
<td>-</td>
</tr>
<tr class="odd">
<td>2</td>
<td>1200</td>
<td>-</td>
</tr>
<tr class="even">
<td>3</td>
<td>1800</td>
<td>-</td>
</tr>
<tr class="odd">
<td>4</td>
<td>2400</td>
<td>-</td>
</tr>
<tr class="even">
<td>5</td>
<td>4800</td>
<td>-</td>
</tr>
<tr class="odd">
<td>6</td>
<td>9600</td>
<td>-</td>
</tr>
<tr class="even">
<td>7</td>
<td>14400</td>
<td>-</td>
</tr>
<tr class="odd">
<td>8</td>
<td>19200</td>
<td>-</td>
</tr>
<tr class="even">
<td>9</td>
<td>28800</td>
<td>-</td>
</tr>
<tr class="odd">
<td>10</td>
<td>38400</td>
<td>-</td>
</tr>
<tr class="even">
<td>11</td>
<td>57600</td>
<td>-</td>
</tr>
<tr class="odd">
<td>12</td>
<td>115200</td>
<td>-</td>
</tr>
<tr class="even">
<td>13</td>
<td>230400</td>
<td>-</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `BR12\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 시리얼 인터페이스의 Baud rate 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### DB

-----

  - **DB** : 0번 채널용 명령어
  - **ED** : 1번 채널용 명령어
  - **Format:** `DB<Parameter>[CR][LF]`
  - **Meaning:** 시리얼 인터페이스(Data UART)의 Data bit
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Data bit</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>7-bit</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>8-bit</td>
<td>-</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `DB1\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 시리얼 인터페이스의 Data bit 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### PR

-----

  - **PR** : 0번 채널용 명령어
  - **EP** : 1번 채널용 명령어
  - **Format:** `PR<Parameter>[CR][LF]`
  - **Meaning:** 시리얼 인터페이스(Data UART)의 Parity bit
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 2)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Parity bit</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>NONE</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>ODD</td>
<td>-</td>
</tr>
<tr class="odd">
<td>2</td>
<td>EVEN</td>
<td>-</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `PR0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 시리얼 인터페이스의 Parity bit 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### SB

-----

  - **SB** : 0번 채널용 명령어
  - **ES** : 1번 채널용 명령어
  - **Format:** `SB<Parameter>[CR][LF]`
  - **Meaning:** 시리얼 인터페이스(Data UART)의 Stop bit
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Stop bit</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>1-bit</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>2-bit</td>
<td>-</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `SB0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 시리얼 인터페이스의 Stop bit 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### FL

-----

  - **FL** : 0번 채널용 명령어
  - **EF** : 1번 채널용 명령어
  - **Format:** `FL<Parameter>[CR][LF]`
  - **Meaning:** 시리얼 인터페이스(Data UART)의 Flow control (RS-232/TTL only)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 2)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Flow control</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>NONE</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>XON/XOFF</td>
<td>Software flow control</td>
</tr>
<tr class="odd">
<td>2</td>
<td>RTS/CTS</td>
<td>Hardware flow control</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `FL0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 시리얼 인터페이스의 Flow control 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

### Serial Data Packing Options

-----

#### PT

-----

  - **PT** : 0번 채널용 명령어
  - **NT** : 1번 채널용 명령어
  - **Format:** `PT<Parameter>[CR][LF]`
  - **Meaning:** 시리얼 인터페이스(Data UART)의 데이터 패킹 - 시간 옵션\[1\]
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: 사용하지 않음 / 1 ~ 65535: 데이터 패킹 시간 (Unit: millisecond)

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `PT0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - None
      - 시리얼 데이터 패킹 시간 값 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### PS

-----

  - **PS** : 0번 채널용 명령어
  - **NS** : 1번 채널용 명령어
  - **Format:** `PS<Parameter>[CR][LF]`
  - **Meaning:** 시리얼 인터페이스(Data UART)의 데이터 패킹 - 데이터 길이(size) 옵션\[2\]
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 255)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: 사용하지 않음 / 1 ~ 255: 데이터 길이 (Unit: byte)

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `PS0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - None
      - 시리얼 데이터 패킹 길이 값 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

1.  지정된 시간에 도달 할 때까지 수신된 시리얼 데이터를 모아 한 번에 이더넷으로 전송합니다. 이 시간은 시리얼 데이터 수신이
    멈추는 순간부터 카운트 되며, 지정된 시간에 도달하기 이전에 추가 시리얼 데이터가 수신되면 초기화되어 다시 카운트를
    시작합니다.

2.  지정된 데이터 길이에 도달 할 때까지 수신된 시리얼 데이터를 모아 한 번에 이더넷으로 전송합니다.

-----

#### PD

-----

  - **PD** : 0번 채널용 명령어
  - **ND** : 1번 채널용 명령어
  - **Format:** `PD<Parameter>[CR][LF]`
  - **Meaning:** 시리얼 인터페이스(Data UART)의 데이터 패킹 - 지정 문자(char) 옵션\[1\]
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** 1-byte Character (Hex only)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    00: 사용하지 않음 / 그 외: 지정 문자

  - 지정 문자는 데이터에 포함되지 않습니다.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `PD00\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - None
      - 시리얼 데이터 패킹 지정 문자 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

  
  
  
  

### Options

-----

#### IT

-----

  - **IT** : 0번 채널용 명령어
  - **RV** : 1번 채널용 명령어
  - **Format:** `IT<Parameter>[CR][LF]`
  - **Meaning:** 데이터 교환이 없을 때, TCP 연결 종료를 위한 비활성 타이머(Inactivity timer) 값
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: 사용하지 않음 / 1 ~ 65535: 비활성 타이머 값 (Unit: second)

  - 활성화 되어 있을 경우, 지정된 시간 동안 데이터 교환이 없다면 TCP 연결을 종료합니다.
  - 비활성 타이머 값에 도달하기 이전에 이더넷 데이터 교환이 발생하는 경우, 해당 값은 초기화되어 다시 카운트를 시작합니다.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `IT0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 비활성 타이머 값 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### CP

-----

  - **Format:** `CP<Parameter>[CR][LF]`
  - **Meaning:** TCP 연결 비밀번호 사용 여부 (TCP server mode only)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 / 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: 사용하지 않음(Disabled) / 1: 사용(Enabled)

  - 제품이 **TCP 서버로 동작** 할 때에만 해당 옵션이 적용 됩니다.
  - 해당 옵션이 활성화 되어 있을 경우, 제품에 접속하고자 하는 TCP 클라이언트는 TCP 연결 후 연결 비밀번호를 먼저
    전송하고 인증이 완료된 이후에 데이터를 교환해야 합니다. 

\</WRAP\> \</WRAP\>

1.  지정된 문자가 수신 될 때까지 시리얼 데이터를 모아 한 번에 이더넷으로 전송합니다.

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `CP0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - TCP 연결 비밀번호 사용 여부 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### NP

-----

  - **Format:** `NP<Parameter>[CR][LF]`
  - **Meaning:** TCP 연결 비밀번호 (TCP server mode only)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** String (up to 8-bytes)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    초기값: 없음(Null)

  - 제품이 **TCP 서버로 동작** 할 때에만 해당 옵션이 적용 됩니다.
  - 연결 비밀번호는 최대 8개의 문자로 구성 될 수 있습니다.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `NP\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - TCP 연결 비밀번호 값 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### SP

-----

  - **Format:** `SP<Parameter>[CR][LF]`
  - **Meaning:** 검색 ID 코드(Search identification code)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** String (up to 8-bytes)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    초기값: 없음(Null)

  - 해당 옵션이 활성화 된 경우, 설정 프로그램을 이용한 제품 검색 시 일치하는 ID의 제품만 검색됩니다.
  - 검색 ID 코드는 최대 8개의 문자로 구성 될 수 있습니다.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `SP\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 검색 ID 코드 값 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### DG

-----

  - **Format:** `DG<Parameter>[CR][LF]`
  - **Meaning:** 시리얼 디버그 메시지 사용 여부 (Debug UART port)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 / 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: 사용하지 않음(Disabled) / 1: 사용(Enabled)

  - 해당 옵션이 활성화 되어 있을 경우, Debug UART 포트를 통해 제품의 설정 및 Error 메시지가 출력됩니다. 

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `DG1\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 시리얼 디버그 메시지 사용 여부 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### KA

-----

  - **KA** : 0번 채널용 명령어
  - **RA** : 1번 채널용 명령어
  - **Format:** `KA<Parameter>[CR][LF]`
  - **Meaning:** TCP 연결 유지 확인을 위한 Keep-alive 패킷 전송 여부
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 / 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: 사용하지 않음(Disabled) / 1: 사용(Enabled)

  - 해당 옵션이 활성화 되어 있을 경우, TCP 연결 대상에게 지정된 주기([KI](#ki) / [KE](#ke))에 따라
    Keep-alive 패킷을 전송합니다.
  - 만약 상대방의 응답이 없을 경우, 해당 TCP 연결은 종료(TCP connection closed)되며 소켓이
    초기화(open) 됩니다.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `KA1\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Keep-alive 패킷 전송 여부 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### KI

-----

  - **KI** : 0번 채널용 명령어
  - **RS** : 1번 채널용 명령어
  - **Format:** `KI<Parameter>[CR][LF]`
  - **Meaning:** 첫 TCP Keep-alive 패킷 전송 간격 값
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: 사용하지 않음 / 1 ~ 65535: 초기 Keep-alive 패킷 전송 간격 (Unit: millisecond)

  - 지정된 패킷 전송 간격에 따라 TCP 연결 대상에게 Keep-alive 패킷을 전송합니다.
  - 데이터 전송을 마친 이후, 해당 값 만큼 시간이 경과하면 첫 Keep-alive 패킷이 전송됩니다.
  - Keep-alive 패킷 전송 기능은 제품에서 한 번 이상 이더넷 데이터가 송신되어야 활성화 됩니다.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `KI7000\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 첫 Keep-alive 패킷 전송 간격 값 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### KE

-----

  - **KE** : 0번 채널용 명령어
  - **RE** : 1번 채널용 명령어
  - **Format:** `KE<Parameter>[CR][LF]`
  - **Meaning:** TCP Keep-alive 패킷 전송 재시도 간격 값
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: 사용하지 않음 / 1 ~ 65535: Keep-alive 패킷 전송 재시도 간격 (Unit: millisecond)

  - 초기 Keep-alive 패킷 전송이 이루어진 이후, 지정된 패킷 전송 간격에 따라 TCP 연결 대상에게
    Keep-alive 패킷을 전송합니다.
  - 두 번째 이후의 Keep-alive 패킷 전송 간격은 이 값을 따릅니다.
  - Keep-alive 패킷 전송 기능은 제품에서 한 번 이상 이더넷 데이터가 송신되어야 활성화 됩니다.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `KE5000\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Keep-alive 패킷 전송 재시도 간격 값 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### RI

-----

  - **RI** : 0번 채널용 명령어
  - **RR** : 1번 채널용 명령어
  - **Format:** `RI<Parameter>[CR][LF]`
  - **Meaning:** TCP 클라이언트 재연결 간격 값 (TCP client only)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: 사용하지 않음 / 1 ~ 65535: TCP 클라이언트 재연결 간격 (Unit: millisecond)

  - TCP 클라이언트 모드 일 때 서버와 TCP 연결이 이루어지지 않은 경우, 다음 연결시도 까지의 간격 값을 설정합니다. 

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `RI3000\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - TCP 클라이언트 재연결 간격 값 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### EC

-----

  - **Format:** `EC<Parameter>[CR][LF]`
  - **Meaning:** UART 입력 Echoback 기능 활성화 (Data UART port)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 / 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: 사용하지 않음(Disabled) / 1: 사용(Enabled)

  - 해당 옵션이 활성화 되면, 시리얼(Data UART)을 통해 입력된 데이터가 Echoback 됩니다.
  - 시리얼 커맨드 모드 등에서 사용자의 입력을 확인 할 때 사용 할 수 있습니다.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `EC0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - UART 입력 Echoback 기능 사용 여부 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

  
  
  
  

### Command Mode Switch Settings

-----

#### TE

-----

  - **Format:** `TE<Parameter>[CR][LF]`
  - **Meaning:** 커맨드 모드 전환 코드 사용 설정
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 / 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: 사용하지 않음(Disabled) / 1: 사용(Enabled)

  - 해당 기능이 활성화 되어야 3-byte 커맨드 모드 전환 코드를 이용하여 시리얼 커맨드 모드로 진입 할 수 있습니다.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `TE1\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 커맨드 모드 전환 코드 사용 설정 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### SS

-----

  - **Format:** `SS<Parameter>[CR][LF]`
  - **Meaning:** 커맨드 모드 전환 코드
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** String (3-byte hex only)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    초기값: 2B 2B 2B 

  - 커맨드 모드 전환 코드는 3-byte(3개 문자)의 hex 코드로 구성되어야 합니다.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `SS2B2B2B\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 커맨드 모드 전환 코드 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

### Device Control

-----

#### EX

-----

  - **Format:** `EX[CR][LF]`
  - **Meaning:** 커맨드 모드 종료
  - **Command Type:** Write only (Control)
  - **Parameter / Return:** None
  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\>

  - **Without Parameter**
      - No response
      - 커맨드 모드 종료 및 데이터 전송 모드로 전환

\</WRAP\>

  - 만약 시리얼 디버그 메시지를 사용 중인 경우, 성공적으로 데이터 전송 모드로의 변경이 이루어지면 Data/Debug
    UART 양 쪽 포트를 통해 다음과 같은 모드 전환 메시지가 출력됩니다.
  - `> SEG:GW Mode`

\</WRAP\> \</WRAP\>

-----

#### SV

-----

  - **Format:** `SV[CR][LF]`
  - **Meaning:** 변경 사항 저장
  - **Command Type:** Write only (Control)
  - **Parameter / Return:** None
  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\>

  - **Without Parameter**
      - No response
      - 변경된 설정 항목의 저장 수행

\</WRAP\> \</WRAP\> \</WRAP\>

-----

#### RT

-----

  - **Format:** `RT[CR][LF]`
  - **Meaning:** 제품의 리부트 (Reboot)
  - **Command Type:** Write only (Control)
  - **Parameter / Return:** None
  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\>

  - **Without Parameter**
      - No response
      - 제품의 모든 동작 종료 후 재시작 됩니다.

\</WRAP\>

  - 만약 시리얼 디버그 메시지를 사용 중인 경우, Data UART 포트를 통해 다음과 같은 메시지를 출력합니다.
  - `> REBOOT`

\</WRAP\> \</WRAP\>

-----

#### FR

-----

  - **Format:** `FR[CR][LF]`
  - **Meaning:** 제품의 공장 초기화 (Factory reset)
  - **Command Type:** Write only (Control)
  - **Parameter / Return:** None
  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\>

  - **Without Parameter**
      - No response
      - 제품의 동작 설정을 공장 초기화 상태(출고 시 초기 상태)로 변경합니다.

\</WRAP\>

  - 제품의 초기 설정 값은 **[WIZ750SR Factory
    Settings](/products/wiz750sr/gettingstarted/ko#wiz750sr_factory_settings)**에서
    확인 할 수 있습니다.
  - 공장 초기화 수행 시, **[RT](#rt)** 커맨드를 수행 한 것과 동일하게 제품을 재시작 합니다.
      - 만약 시리얼 디버그 메시지를 사용 중인 경우, Data UART 포트를 통해 다음과 같은 메시지를 출력합니다.
      - `> REBOOT`

\</WRAP\> \</WRAP\>

  
  
  
  

### User I/O Settings

-----

#### CA - CD

-----

  - **Format:** `Cx<Parameter>[CR][LF] (CA ~ CD 동일)`
  - **Meaning:** 사용자 I/O 핀의 설정 (type / direction)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 2)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>I/O Setting</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>Digital input</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>Digital output</td>
<td>-</td>
</tr>
<tr class="odd">
<td>2</td>
<td>Analog input</td>
<td>-</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `CA2\r\n` `CB0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 사용자 I/O의 설정 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

### User I/O Status / Value

-----

#### GA - GD

-----

  - **Format:** `Gx<Parameter>[CR][LF] (GA ~ GD 동일)`
  - **Meaning:** 사용자 I/O 핀의 상태 / 값 정보
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (Digital in/out: 0/1, Analog in:
    0 \~ 4095)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>I/O Setting</th>
<th>Parameter /<br />
Return value</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Digital in/out</td>
<td>0</td>
<td>Low</td>
</tr>
<tr class="even">
<td>:::</td>
<td>1</td>
<td>High</td>
</tr>
<tr class="odd">
<td>Analog in</td>
<td>0 ~ 4095</td>
<td>12-bit ADC resolution</td>
</tr>
</tbody>
</table>

  - Digital out: R/W
  - Digital in: Read only 
  - Analog in: Read only

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `GA4095\r\n (Analog input)`
      - In ASCII: `GC0\r\n (Digital input)`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 사용자 I/O 상태 값 변경 (**Digital output only**)

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

  
  
  
  

### Status I/O

-----

#### SC

-----

  - **Format:** `SC<Parameter_0><Parameter_1>[CR][LF]`
  - **Meaning:** 상태 I/O **[S0](#s0)(PA\_10)**핀과 **[S1](#s1)(PA\_01)**핀의
    동작 모드 설정
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0/1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

  - **Parameter\_0** (upper byte)

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Meaning</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>PHY link status</td>
<td>Default</td>
</tr>
<tr class="even">
<td>1</td>
<td>DTR</td>
<td>Data Terminal Ready<br />
(RS-232/TTL only)</td>
</tr>
</tbody>
</table>

  - **Parameter\_1** (lower byte)

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Meaning</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>TCP connection status</td>
<td>Default</td>
</tr>
<tr class="even">
<td>1</td>
<td>DSR</td>
<td>Data Set Ready<br />
(RS-232/TTL only)</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: (Connection Status) `SC00\r\n`
      - In ASCII: (DTR / DSR) `SC11\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - 상태 I/O의 동작 모드 변경

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### S0

-----

  - **Format:** `S0<Parameter>[CR][LF]`
  - **Meaning:** 상태 I/O **S0(PA\_10)**핀의 상태 값
  - **Command Type:** Read only
  - **Parameter / Return Type:** Number (0/1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

  - **PHY link status 핀으로 동작하는 경우**

| Return value | Meaning       | Remarks |
| ------------ | ------------- | ------- |
| 0            | PHY link up   | \-      |
| 1            | PHY link down | \-      |

  - \*\* DTR(Data Terminal Ready) 핀으로 동작하는 경우\*\*
      - 해당 장비의 통신 준비가 완료 됨을 상대방 장치에 알리는 신호 (RS-232, Output)
      - 상대 장비의 DSR과 연결함

| Return value | Meaning            | Remarks |
| ------------ | ------------------ | ------- |
| 0            | 통신 불가              | \-      |
| 1            | 해당 장비의 통신 준비가 완료 됨 | \-      |

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `S00\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### S1

-----

  - **Format:** `S1<Parameter>[CR][LF]`
  - **Meaning:** 상태 I/O **S1(PA\_01)**핀의 상태 값
  - **Command Type:** Read only
  - **Parameter / Return Type:** Number (0/1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

  - **TCP connection status 핀으로 동작하는 경우**
      - TCP server / client / mixed mode only 

| Return value | Meaning            | Remarks |
| ------------ | ------------------ | ------- |
| 0            | TCP 연결 성립 상태       | \-      |
| 1            | TCP 통신이 연결되어 있지 않음 | \-      |

  - \*\* DSR(Data Set Ready) 핀으로 동작하는 경우\*\*
      - 상대 장비의 통신 준비가 완료 되었는지 확인하는 신호 (RS-232, Input)
      - 상대 장비의 DTR과 연결함

| Return value | Meaning            | Remarks |
| ------------ | ------------------ | ------- |
| 0            | 통신 불가              | \-      |
| 1            | 상대 장비의 통신 준비가 완료 됨 | \-      |

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `S10\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

## Navigation

-----

\<WRAP group\> \<WRAP centeralign third column\>
[![arrow\_back.png](/etc/arrow_back.png)](/products/wiz750sr/configtoolmanual/ko)  
**Prev Page**  
[Configuration Tool Manual](/products/wiz750sr/configtoolmanual/ko)
\</WRAP\>

\<WRAP centeralign third column\>
[![arrow\_upward.png](/etc/arrow_upward.png)](#wiz750sr_command_manual)  
**Scroll to Top** \</WRAP\>

\<WRAP centeralign third column\>
[![arrow\_forward.png](/etc/arrow_forward.png)](/products/wiz750sr/troubleshooting/ko)  
**Next Page**  
[Troubleshooting Guide](/products/wiz750sr/troubleshooting/ko) \</WRAP\>
\</WRAP\>

\<WRAP group\> \<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr/start)  
**Back to Product Main**  
[WIZ750SR](/products/wiz750sr/start) \</WRAP\>

\<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr-100/start)  
**Back to Product Main**  
[WIZ750SR-100](/products/wiz750sr-100/start) \</WRAP\>

\<WRAP group\> \<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr-105/start)  
**Back to Product Main**  
[WIZ750SR-105](/products/wiz750sr-105/start) \</WRAP\>

\<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr-110/start)  
**Back to Product Main**  
[WIZ750SR-110](/products/wiz750sr-110/start) \</WRAP\>

-----

\<WRAP round box group\> \<WRAP half column\> \<WRAP centeralign\> \*\*
WIZ750SR series Common Documents \*\* \</WRAP\>

  - **[User's Manual](/products/wiz750sr/usermanual/ko)** 

<!-- end list -->

  - **[Device Command Manual](/products/wiz750sr/commandmanual/ko)**

<!-- end list -->

  - **[Troubleshooting Guide](/products/wiz750sr/troubleshooting/ko)**

<!-- end list -->

  - **[Update History](/products/wiz750sr/history/ko)**

-----

\<WRAP centeralign\> \*\* WIZ750SR series Downloads \*\* \</WRAP\>

  - **[Software Downloads](/products/wiz750sr/download/start)**

<!-- end list -->

  - **[Technical Reference](/products/wiz750sr/reference/start)**

\</WRAP\>

\<WRAP half column\> \<WRAP centeralign\> \*\* WIZ750SR Individual
documents \*\* \</WRAP\>

  - **[WIZ750SR Product Overview](/products/wiz750sr/overview/ko)**
  - **[WIZ750SR Getting Started
    Guide](/products/wiz750sr/gettingstarted/ko)**
  - **[WIZ750SR Datasheet](/products/wiz750sr/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-100 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-100 Product
    Overview](/products/wiz750sr-100/overview/ko)**
  - **[WIZ750SR-100 Getting Started
    Guide](/products/wiz750sr-100/gettingstarted/ko)**
  - **[WIZ750SR-100 Datasheet](/products/wiz750sr-100/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-105 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-105 Product
    Overview](/products/wiz750sr-105/overview/ko)**
  - **[WIZ750SR-105 Getting Started
    Guide](/products/wiz750sr-105/gettingstarted/ko)**
  - **[WIZ750SR-105 Datasheet](/products/wiz750sr-105/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-110 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-110 Product
    Overview](/products/wiz750sr-110/overview/ko)**
  - **[WIZ750SR-110 Getting Started
    Guide](/products/wiz750sr-110/gettingstarted/ko)**
  - **[WIZ750SR-110 Datasheet](/products/wiz750sr-110/datasheet/start)**

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

