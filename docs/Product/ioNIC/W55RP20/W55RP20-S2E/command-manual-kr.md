---
id: command-manual-kr
title: Command Manual-[KR]
date: 2022-06-09
---



-----



## W232N 커맨드 모드 개요

W232N은 제품 설정과 제어를 위한 다양한 명령어를 제공합니다. 각 명령어는 **2바이트 알파벳 문자열로 구성되며 모두 대문자**입니다. 사용자는 이러한 명령어를 사용하여 직렬 장치나 주 MCU에 스크립트를 추가하거나 네트워크를 통해 W232N 모듈을 제어하기 위한 프로그램을 만들 수 있습니다.

각 명령어는 매개변수에 따라 읽기/쓰기 작업을 수행할 수 있으며 읽기 전용 명령어도 있습니다.

명령어 입력 및 직렬 포트 장치의 명령 모드 전환은 **데이터 UART 포트**를 사용하여 수행됩니다. **디버그 UART** 포트는 명령어 입력이나 작동을 지원하지 않습니다.

직렬 및 이더넷 네트워크를 통해 제품 설정을 위한 명령어로 동일한 2바이트 문자열을 사용하지만, 송신 프레임 형식에는 차이가 있습니다. 따라서 이 문서에서는 모든 명령어와 각 송신 방법 및 프레임 형식에 대한 설명 및 가이드를 다룹니다.

다른 명령 모드는 다음과 같습니다.

  - [**시리얼 커맨드 모드로 디바이스 제어**](#시리얼-커맨드를-사용한-디바이스-제어)
  - [**이더넷 네트워크를 통한 디바이스 제어**](#이더넷-네트워크를-통한-디바이스-제어)

1. **Configuration tool**또한 디바이스를 검색 및 세팅시 동일한 커맨드를 사용합니다.

2. 예를 들어, MAC 주소를 확인하기 위한 **MC** 명령과 펌웨어를 확인하기 위한 **VR** 명령이 동일합니다.



### 용어

| 용어 | 설명                                                                        |
| :----------: | ---------------------------------------------------------------------------------- |
| CR           | 캐리지 리턴, 커서를 맨 왼쪽(시작) 위치로 이동합니다. ('\\r', 0x0D) |
| LF           | 라인 피드, 커서를 아래의 새 줄로 이동합니다. ('\\n', 0x0A)                    |
| N            | 명령어 개수                                                                 |
| RW           | Read / Write                                                                       |
| RO           | Read only                                                                          |
| WO           | Write only                                                                         |



-----



## 명령 집합 사용



### 시리얼 커맨드를 사용한 디바이스 제어

아래 두 가지 방법 중 하나를 사용하여 시리얼 명령 모드로 들어갈 수 있습니다.

**1. 모드 스위치를 사용하여 시리얼 커맨드 모드로 진입**

  - 모드 선택 슬라이드 스위치를 AT MODE 쪽으로 위치시킵니다.

  - 디바이스를 리셋 시키거나 디바이스를 재가동합니다.
    · 디바이스의 Serial debug가 활성화 되어있다면 시리얼 커맨드 모드 진입시 아래와 같은 메시지가 디버그 포트로 출력됩니다.
    · <code>> SEG:AT Mode </code>

  - 시리얼 커맨드 모드를 종료하려먼 EX[CR][LF] 명령어를 사용합니다.
    · 디바이스의 Serial debug가 활성화 되어있다면 시리얼 커맨드 모드 진입시 아래와 같은 메시지가 디버그 포트로 출력됩니다.
    · <code>> SEG:GW Mode </code>


**2. command mode switch code를 사용한 커맨드 모드 진입**

  - 출고 세팅은 command mode switch code가 활성화 되어있고 코드는 HEX로 [2B][2B][2B]가 기본으로 설정되어있습니다.유저가 Config-tool에서 다른 코드로 변경 가능합니다.
  - HEX [2B][2B][2B]는 ascii +++ 이므로 문자열로 +++ 입력하셔도 진입 가능합니다.

  - 시리얼 포트로 command mode switch code를 입력합니다.
    · 디바이스의 Serial debug가 활성화 되어있다면 시리얼 커맨드 모드 진입시 아래와 같은 메시지가 디버그 포트로 출력됩니다.
    · <code>> SEG:AT Mode </code>

  - Enter the Command and Parameter that needs setting via serial port.

  - 시리얼 커맨드 모드를 종료하려먼 EX[CR][LF] 명령어를 사용합니다.
    · 디바이스의 Serial debug가 활성화 되어있다면 시리얼 커맨드 모드 진입시 아래와 같은 메시지가 디버그 포트로 출력됩니다.
    · <code>> SEG:GW Mode </code>


**command mode switch code를 사용하여 커맨드 모드 진입시 주의사항**

  - 'command mode switch code'의 시작과 끝에 **최소 500ms**의 시간 간격이 있어야 전환 코드로 인식할 수 있습니다.

  - ‘3-byte command mode switch code’의 각 바이트 사이 입력 시간은 **500ms 미만**이어야 합니다.<br />예시) command mode switch code가 [2B][2B][2B] 일 때, [2B]와 [2B]의 사이는 **500ms 미만**

  - 'command mode switch code' 끝에 CR 또는 LF를 추가하지 않습니다.(반대로 모드 전환 후 커맨드 명령은 CR 또는 LF로 끝나야 합니다).

  - 'command mode switch code' 시작과 끝 시간 간격과 ‘3-byte command mode switch code’ 사이 입력 시간은 데이터 패킹 옵션의 타이머 값이 설정되어 있다면 해당 값으로 변경됩니다.




#### 시리얼 커맨드 프레임 형식

각 명령의 끝에 CR과 LF를 포함해야 합니다. 여러 명령을 동시에 입력하는 경우 각 명령의 끝에 CR과 LF를 포함해야 합니다.



##### 시리얼 커맨드를 입력하여 디바이스의 응답을 받는 경우

    [2-bytes Command Code] [CR] [LF]

  - 매개 변수 없이 명령을 입력합니다.
  - 명령과 관련된 응답이 반환됩니다.



##### 시리얼 커맨드를 입력하여 디바이스의 세팅을 변경할 경우

    [2-bytes Command Code] [Parameters] [CR] [LF]

  - 설정하려는 명령과 매개변수를 입력합니다.
  - 특별한 응답은 없으며 명령과 관련된 필드 값이 즉시 변경됩니다.
  - 정을 저장하려면 **[SV](#sv)** 명령을 사용해야 하며, IP 할당 방법이나 기타 초기 작업 변경을 변경하려면 **[RT](#rt)** 명령을 사용해야 합니다.

\* 참고: **[EC](#ec)** 명령을 통해 UART 명령의 에코백을 확인할 수 있습니다.



-----



### 이더넷 네트워크를 통한 디바이스 제어

**명령 전송을 위한 네트워크 정보:** **UDP/TCP 서버 : 50001** (사용자는 UDP/TCP 클라이언트를 통해 장치로 명령을 전송해야 합니다.)

#### 이더넷 커맨드 프레임 형식

이더넷을 통해 W232N을 제어할 때는 명령 코드를 보내기 전에 두 가지 추가 명령이 필요합니다. 다른 모든 설정과 조작은 데이터 포트를 통해 시리얼 명령 코드를 전송할 때와 동일합니다.

두 가지 추가 명령은 **MA**와 **PW**입니다.

  - **\[MA\] command**
    - 이 필드에는 **제품의 MAC 주소**가 표시됩니다.
    - TCP와 UDP의 경우 모두 2바이트 MA 명령 뒤에 6바이트 MAC 주소를 포함해야 합니다.
        - 사용자가 UDP를 통해 Get Request만 브로드캐스트하려는 경우, 관련 필드 값을 브로드캐스트 MAC 주소로 설정할 수 있습니다. 사용자는 여러 피어로부터 응답을 받을 수 있습니다. 설정 도구의 검색 기능은 다음과 같이 구현됩니다.

  - **\[PW\] command**

1. 이더넷 커맨드를 사용하기 위해서는 사용자가 UDP 또는 TCP 클라이언트를 사용해야 합니다.

2. 데이터는 브로드캐스트 IP 주소 255.255.255.255로 전송되며, 동일한 네트워크에 있는 모든 피어에게 데이터를 전송할 수 있습니다.

3. FF:FF:FF:FF:FF:FF

4. Hex 0x20은 공백을 의미하는 ASCII 코드입니다.



##### Get Request

**When sending a single command**

    MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] [Command] [CR] [LF]

**When sending multiple commands**

    MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] ([Command] [CR] [LF]) * Number of commands

  - The response for ‘get request’ will have the identical format as ‘request’ but include the parameter.



##### Set Request

 **When sending a single command**

    MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] [Command] [Parameters] [CR] [LF]

**When sending multiple commands**

    MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] ([Command] [Parameters] [CR] [LF]) * Number of commands

  - For ‘Set Request’, there is no additional response needed for changing the product setting.
  - If users want to check the modified setting, send the command without parameter at the end of the ‘Set Request frame’; in form of Set + Get Request.



#### Ethernet Command Examples



##### Example \#1: UDP Get Command Frame

  - When requesting MAC and local IP from multiple devices via UDP
    - Search ID is not used

| Request from User |
| ----------------- |

**Command Frame**

    MA [FF FF FF FF FF FF] [CR] [LF] PW [ ] [CR] [LF] MC [CR] [LF] LI [CR] [LF]

**Hex code version of Command Frame**

    4D 41 FF FF FF FF FF FF 0D 0A 50 57 20 0D 0A 4D 43 0D 0A 4C 49 0D 0A

| Response by W232N |
| ----------------------- |

1. The response for ‘Get Request’ has the same form as ‘Set Request’.

**Command Frame**

    MA [00 08 DC 00 00 11] [CR] [LF] PW [ ] [CR] [LF] MC [00 08 DC 00 00 11] [CR] [LF] LI [192.168.11.2] [CR] [LF]

**Hex code version of Command Frame**

    4D 41 00 08 DC 00 00 11 0D 0A 50 57 20 0D 0A 4D 43 00 08 DC 00 00 11 0D 0A 4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 32 0D 0A



##### Example \#2: TCP Get Command Frame

  - When requesting the local IP of the device, which MAC address is 00:08:DC:00:00:11, via TCP
    - Search ID is not used

| Request from User |
| ----------------- |

**Command Frame**

    MA [00 08 DC 00 00 11] [CR] [LF] PW [ ] [CR] [LF] LI [CR] [LF]

**Hex code version of Command Frame**

    4D 41 00 08 DC 00 00 11 0D 0A 50 57 20 0D 0A 4C 49 0D 0A

| Response by W232N |
| ----------------------- |

**Command Frame**

    MA [00 08 DC 00 00 11] [CR] [LF] PW [ ] [CR] [LF] LI [192.168.11.2] [CR] [LF]

**Hex code version of Command Frame**

    4D 41 00 08 DC 00 00 11 0D 0A 50 57 20 0D 0A 4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 32 0D 0A



##### Example \#3: TCP Set Command Frame

  - When requesting the local IP of the device, which MAC address is 00:08:DC:00:00:11, via TCP
    - If the Search ID is set to HELLO
    - Or if user wishes to change the local IP to 192.168.11.5

| Request from User |
| ----------------- |

**Command Frame**

    MA [00 08 DC 00 00 11] [CR] [LF] PW [HELLO] [CR] [LF] LI [192.168.11.5] [CR] [LF]

**Hex code version of Command Frame**

    4D 41 00 08 DC 00 00 11 0D 0A 50 57 48 45 4C 4C 4F 0D 0A 4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 35 0D 0A

| Response by W232N |
| --------------------- |

    None

**When modifying the IP address format, '.'(dot, 0x2E) must be included such as the '192.168.11.5'.**



-----



## Command list

  - The Set command setting the applicable value will operate if the parameter is included when entering the command.
  - The Get command reading the applicable value will operate if only the command is entered.
  - If the ‘Read only’ sign does not appear, it means the command supports both Get / Set.
  - Write only command is for controlling the product without the parameter.
  - There is a basic command list and an expanded command list.
  - Settings like IP allocation settings or DNS operation settings via command mode require ‘module reboot’ via **[RT](#rt)** command after the settings are saved via **[SV](#sv)** command.

1. IPv4 address forms like IP address, Gateway address, subnet mask, DNS server address, or Remote IP address.

2. Save setting, reboot, switch mode, factory reset and Etc.

3. WIZ107SR / WIZ108SR sync command list, excluding \[UN\], \[UI\] command

4. WIZ750SR / WIZ750SR-1xx / WIZ750SR-12x  sync command list, including \[UN\], \[UI\] command

5. WIZ510SSL sync command list, including \[UN\], \[UI\] command

6. W232N exclusive command list

7. When the remote peer address is changed from IP address to domain



### Basic Commands

<table>
<thead>
<tr class="header">
<th>Command</th>
<th>Category</th>
<th>Description</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center"><a href="#mc">MC</a></td>
<td align="center">Device Information</td>
<td>MAC address</td>
<td align="center">RO</td>
</tr>
<tr class="even">
<td align="center"><a href="#vr">VR</a></td>
<td align="center">:::</td>
<td>Firmware version</td>
<td align="center">RO</td>
</tr>
<tr class="odd">
<td align="center"><a href="#mn">MN</a></td>
<td align="center">:::</td>
<td>Product name</td>
<td align="center">RO</td>
</tr>
<tr class="even">
<td align="center"v><a href="#st">ST</a></td>
<td align="center">:::</td>
<td>Operation status</td>
<td align="center">RO</td>
</tr>
<tr class="odd">
<td align="center"><a href="#un">UN</a></td>
<td align="center">:::</td>
<td>UART interface(str)</td>
<td align="center">RO</td>
</tr>
<tr class="even">
<td align="center"><a href="#ui">UI</a></td>
<td align="center">:::</td>
<td>UART interface(code)</td>
<td align="center">RO</td>
</tr>
<tr class="odd">
<td align="center"><a href="#op">OP</a></td>
<td align="center">Network Settings</td>
<td>Network operation mode</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#im">IM</a></td>
<td align="center">:::</td>
<td>IP address allocation method (static/DHCP)</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#li">LI</a></td>
<td align="center">:::</td>
<td>Local IP address</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#sm">SM</a></td>
<td align="center">:::</td>
<td>Subnet mask</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#gw">GW</a></td>
<td align="center">:::</td>
<td>Gateway address</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#ds">DS</a></td>
<td align="center">:::</td>
<td>DNS server address</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#lp">LP</a></td>
<td align="center">:::</td>
<td>Local port number</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#rh">RH</a></td>
<td align="center">:::</td>
<td>Remote host IP address / Domain</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#rp">RP</a></td>
<td align="center">:::</td>
<td>Remote host port number</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#br">BR</a></td>
<td align="center">Data UART Settings</td>
<td>UART Baud rate</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#db">DB</a></td>
<td align="center">:::</td>
<td>UART Data bit</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#pr">PR</a></td>
<td align="center">:::</td>
<td>UART Parity bit</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#sb">SB</a></td>
<td align="center">:::</td>
<td>UART Stop bit</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#fl">FL</a></td>
<td align="center">:::</td>
<td>UART Flow control</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#ec">EC</a></td>
<td align="center">:::</td>
<td>UART Echoback enable</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#pt">PT</a></td>
<td align="center">Serial Data Packing Options</td>
<td>Time delimiter</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#ps">PS</a></td>
<td align="center">:::</td>
<td>Size delimiter</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#pd">PD</a></td>
<td align="center">:::</td>
<td>Char delimiter</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#it">IT</a></td>
<td align="center">Options</td>
<td>Inactivity timer value</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#ri">RI</a></td>
<td align="center">:::</td>
<td>TCP Reconnection interval<br/>
(TCP client only)</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#cp">CP</a></td>
<td align="center">:::</td>
<td>Connection password enable (TCP server only)</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#np">NP</a></td>
<td align="center">:::</td>
<td>Connection password (TCP server only)</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#sp">SP</a></td>
<td align="center">:::</td>
<td>Search ID code</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#dg">DG</a></td>
<td align="center">:::</td>
<td>Serial debug message enable</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#ka">KA</a></td>
<td align="center">:::</td>
<td>TCP Keep-alive enable</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#ki">KI</a></td>
<td align="center">:::</td>
<td>TCP Keep-alive initial interval</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#ke">KE</a></td>
<td align="center">:::</td>
<td>TCP Keep-alive retry interval</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#so">SO</a></td>
<td align="center">:::</td>
<td>SSL receive timeout</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
  <td align="center"><a href="#po">PO</a></td>
  <td align="center">Modbus Settings</td>
  <td>Select Modbus protocol type (None / RTU / ASCII)</td>
  <td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#qu">QU</a></td>
<td align="center">MQTT Settings</td>
<td>MQTT user name</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
  <td align="center"><a href="#qp">QP</a></td>
  <td align="center">:::</td>
  <td>MQTT password</td>
  <td align="center">RW</td>
</tr>
<tr class="even">
  <td align="center"><a href="#qc">QC</a></td>
  <td align="center">:::</td>
  <td>MQTT client ID</td>
  <td align="center">RW</td>
</tr>
<tr class="odd">
  <td align="center"><a href="#qk">QK</a></td>
  <td align="center">:::</td>
  <td>MQTT Keep-alive</td>
  <td align="center">RW</td>
</tr>
<tr class="even">
  <td align="center"><a href="#pu">PU</a></td>
  <td align="center">:::</td>
  <td>MQTT publish topic</td>
  <td align="center">RW</td>
</tr>
<tr class="odd">
  <td align="center"><a href="#u0">U0</a></td>
  <td align="center">:::</td>
  <td>MQTT subscribe topic 1</td>
  <td align="center">RW</td>
</tr>
<tr class="even">
  <td align="center"><a href="#u1">U1</a></td>
  <td align="center">:::</td>
  <td>MQTT subscribe topic 2</td>
  <td align="center">RW</td>
</tr>
<tr class="odd">
  <td align="center"><a href="#u2">U2</a></td>
  <td align="center">:::</td>
  <td>MQTT subscribe topic 3</td>
  <td align="center">RW</td>
</tr>
<tr class="even">
  <td align="center"><a href="#qo">QO</a></td>
  <td align="center">:::</td>
  <td>MQTT QoS level</td>
  <td align="center">RW</td>
</tr>
<tr class="odd">
  <td align="center"><a href="#rc">RC</a></td>
  <td align="center">Certificate Settings</td>
  <td>Root CA verify option</td>
  <td align="center">RW</td>
</tr>
<tr class="even">
  <td align="center"><a href="#ce">CE</a></td>
  <td align="center">:::</td>
  <td>Client certificate enable</td>
  <td align="center">RW</td>
</tr>
<tr class="odd">
  <td align="center"><a href="#oc">OC</a></td>
  <td align="center">:::</td>
  <td>Root CA</td>
  <td align="center">WO</td>
</tr>
<tr class="even">
  <td align="center"><a href="#lc">LC</a></td>
  <td align="center">:::</td>
  <td>Client certificate</td>
  <td align="center">WO</td>
</tr>
<tr class="odd">
  <td align="center"><a href="#pk">PK</a></td>
  <td align="center">:::</td>
  <td>Private key</td>
  <td align="center">WO</td>
</tr>
<tr class="even">
  <td align="center"><a href="#te">TE</a></td>
  <td align="center">Command Mode Switch Settings</td>
  <td>Command mode switch code enable</td>
  <td align="center">RW</td>
</tr>
<tr class="odd">
  <td align="center"><a href="#ss">SS</a></td>
  <td align="center">:::</td>
  <td>Command mode switch code (3-bytes Hex)</td>
  <td align="center">RW</td>
</tr>
<tr class="even">
  <td align="center"><a href="#ex">EX</a></td>
  <td align="center">Device Control</td>
  <td>Command mode exit (switch to data transfer mode)</td>
  <td align="center">WO</td>
</tr>
<tr class="odd">
  <td align="center"><a href="#sv">SV</a></td>
  <td align="center">:::</td>
  <td>Save device setting</td>
  <td align="center">WO</td>
</tr>
<tr class="even">
  <td align="center"><a href="#uf">UF</a></td>
  <td align="center">:::</td>
  <td>Copy firmware from firmware binary bank to application bank</td>
  <td align="center">RW</td>
</tr>
<tr class="odd">
  <td align="center"><a href="#rt">RT</a></td>
  <td align="center">:::</td>
  <td>Device reboot</td>
  <td align="center">WO</td>
</tr>
<tr class="even">
  <td align="center"><a href="#fr">FR</a></td>
  <td align="center">:::</td>
  <td>Device factory reset</td>
  <td align="center">WO</td>
</tr>
</tbody>
</table>



### Extended Commands

<table>
<thead>
<tr class="header">
<th>Command</th>
<th>Category</th>
<th>Description</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center"><a href="#sc">SC</a></td>
<td align="center">Status I/O</td>
<td>Status pin S0 &amp; S1 operation mode setting</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#s0">S0</a></td>
<td align="center">:::</td>
<td>Status of pin S0 (PHY link or DTR)</td>
<td align="center">RO</td>
</tr>
<tr class="odd">
<td align="center"><a href="#s1">S1</a></td>
<td align="center">:::</td>
<td>Status of pin S1 (TCP connect or DSR)</td>
<td align="center">RO</td>
</tr>
</tbody>
</table>



-----



## Command Descriptions



### Device Information



---

#### MC

---


  - **Format:** `MC[CR][LF]`

  - **Meaning:** Check product’s MAC address

  - **Command Type:** Read only

  - **Return Type:** String

  - **Return Value:**

    MAC address with colons(:)

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `MC00:08:DC:00:00:01\r\n`



---

#### VR

---

  - **Format:** `VR[CR][LF]`

  - **Meaning:** Check the product’s firmware version

  - **Command Type:** Read only

  - **Return Type:** String

  - **Return Value:**

    Firmware version with dots(.)

    ⇒ Major version number . Minor version number . Maintenance version number

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `VR1.0.0\r\n`



---

#### MN

---

  - **Format:** `MN[CR][LF]`

  - **Meaning:** Check the product name

  - **Command Type:** Read only

  - **Return Type:** String

  - **Return Value:**

    Device model name

    ⇒ Default: WIZ5XXRSR-RP

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `MNWIZ5XXRSR-RP\r\n`



---

#### ST

---

  - **Format:** `ST[CR][LF]`

  - **Meaning:** Check the product operation status

  - **Command Type:** Read only

  - **Return Type:** String

  - **Return Value:**

| Status  | Description                                                   |
| :-----: | ------------------------------------------------------------- |
| BOOT    | Boot mode; Users can update the product setting and firmware. |
| OPEN    | Status before TCP connection is successful.                   |
| CONNECT | Status after TCP connection is successful.                    |
| UPGRADE | Status during firmware update or DHCP IP allocation.          |
| ATMODE  | Serial AT command mode status.                                |

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `STATMODE\r\n`



---

#### UN

---

  - **Format:** `UN[CR][LF]`

  - **Meaning:** Check product’s UART Interface

  - **Command Type:** Read only

  - **Return Type:** String

  - **Return Value:**

| UART interface | Description                                                     |
| :------------: | --------------------------------------------------------------- |
| RS-232/TTL     | Device supports UART input/output of RS-232C or TTL signals.    |
| RS-422/485     | Device supports UART input/output of RS-422 and RS-485 signals. |

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `UNRS-232/TTL\r\n`



---

#### UI

---

  - **Format:** `UI[CR][LF]`

  - **Meaning:** Check product’s UART Interface

  - **Command Type:** Read only

  - **Return Type:** String

  - **Return Value:**

| Return value | Description                                                     | Remarks    |
| :----------: | --------------------------------------------------------------- | :--------: |
| 0            | Device supports UART input/output of RS-232 or TTL signals.     | RS-232/TTL |
| 1            | Device supports UART input/output of RS-422 and RS-485 signals. | RS-422/485 |

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `UI0\r\n`



### Network Settings



---

#### OP

---

  - **Format:** `OP<Parameter>[CR][LF]`

  - **Meaning:** Product’s network operation mode

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 6)

  - **Parameter / Return Value:**

<table>
<thead>
<tr class="header">
<th>Parameter /<br/>
Return value</th>
<th>Meaning</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>TCP client mode</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>TCP server mode</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">2</td>
<td>TCP mixed mode</td>
<td align="center">TCP server / client mixed mode</td>
</tr>
<tr class="even">
<td align="center">3</td>
<td>UDP mode</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">4</td>
<td>SSL TCP client mode</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">5</td>
<td>MQTT client mode</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">6</td>
<td>MQTTS client mode</td>
<td align="center">-</td>
</tr>
</tbody>
</table>

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `OP0\r\n`

	**With Parameter (Set)**
    - No response
    - Change the network operation mode



---

#### IM

---

  - **Format:** `IM<Parameter>[CR][LF]`

  - **Meaning:** Product’s IP address allocation method

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 / 1)

  - **Parameter / Return Value:**

<table>
<thead>
<tr class="header">
<th>Parameter /<br/>
Return value</th>
<th>Meaning</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>Static</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>DHCP</td>
<td align="center">Obtain an IP address automatically</td>
</tr>
</tbody>
</table>

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `IM0\r\n`

	**With Parameter (Set)**
    - No response
    - Change product’s IP address allocation method



---

#### LI

---

  - **Format:** `LI<Parameter>[CR][LF]`

  - **Meaning:** Product's IP address

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String of IPv4 address form (including dot)

  - **Parameter / Return Value:**

    Ex> 192.168.11.2

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `LI192.168.11.2\r\n`

	**With Parameter (Set)**
    - No response
    - Change product’s IP address



---

#### SM

---

  - **Format:** `SM<Parameter>[CR][LF]`

  - **Meaning:** Product’s subnet mask

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String of IPv4 address form (including dot)

  - **Parameter / Return Value:**

    Ex> 255.255.255.0

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `SM255.255.255.0\r\n`

	**With Parameter (Set)**
    - No response
    - Change product’s subnet mask



---

#### GW

---

  - **Format:** `GW<Parameter>[CR][LF]`

  - **Meaning:** Product’s gateway address

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String of IPv4 address form (including dot)

  - **Parameter / Return Value:**

    Ex> 192.168.11.1

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `GW192.168.11.1\r\n`

	**With Parameter (Set)**
    - No response
    - Change product’s gateway address



---

#### DS

---

  - **Format:** `DS<Parameter>[CR][LF]`

  - **Meaning:** Product’s DNS address

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String of IPv4 address form (including dot)

  - **Parameter / Return Value:**

    Ex> 8.8.8.8

	Google Public DNS (IPv4)
    - 8.8.8.8
    - 8.8.4.4

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `DS8.8.8.8\r\n`

	**With Parameter (Set)**
    - No response
    - Change Product’s DNS



---

#### LP

---

  - **Format:** `LP<Parameter>[CR][LF]`

  - **Meaning:** Product’s port number

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 65535)

  - **Parameter / Return Value:**

    Ex> 5000

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `LP5000\r\n`

	**With Parameter (Set)**
    - No response
    - Change product’s port number



---

#### RH

---

  - **Format:** `RH<Parameter>[CR][LF]`

  - **Meaning:** Product’s remote host IP address / Domain name

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String of IPv4 address form (including dot) or Domain string

  - **Parameter / Return Value:**

    Ex> 192.168.11.3

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `RH192.168.11.3\r\n`

	**With Parameter (Set)**
    - No response
    - Change product’s remote host IP address



---

#### RP

---

  - **Format:** `RP<Parameter>[CR][LF]`

  - **Meaning:** Product’s remote host port number

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 65535)

  - **Parameter / Return Value:**

    Ex> 5000

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `RP5000\r\n`

	**With Parameter (Set)**
    - No response
    - Change product’s remote host port number



### Data UART Settings



---

#### BR

---

  - **Format:** `BR<Parameter>[CR][LF]`

  - **Meaning:** Baud rate of serial interface (data UART)

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 13)

  - **Parameter / Return Value:**

<table>
<thead>
<tr class="header">
<th>Parameter /<br/>
Return value</th>
<th>Baud rate</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>300</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>600</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">2</td>
<td>1200</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">3</td>
<td>1800</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">4</td>
<td>2400</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">5</td>
<td>4800</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">6</td>
<td>9600</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">7</td>
<td>14400</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">8</td>
<td>19200</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">9</td>
<td>28800</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">10</td>
<td>38400</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">11</td>
<td>57600</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">12</td>
<td>115200</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">13</td>
<td>230400</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">14</td>
<td>460800</td>
<td align="center">-</td>
</tr>
</tbody>
</table>

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `BR12\r\n`

	**With Parameter (Set)**
    - No response
    - Change baud rate of serial interface



---

#### DB

---

  - **Format:** `DB<Parameter>[CR][LF]`

  - **Meaning:** Data bit of serial interface (data UART)

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 / 1)

  - **Parameter / Return Value:**

<table>
<thead>
<tr class="header">
<th>Parameter /<br/>
Return value</th>
<th>Data bit</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>7-bit</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>8-bit</td>
<td align="center">-</td>
</tr>
</tbody>
</table>

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `DB1\r\n`

	**With Parameter (Set)**
    - No response
    - Change data bit of serial interface



---

#### PR

---

  - **Format:** `PR<Parameter>[CR][LF]`

  - **Meaning:** Parity bit of serial interface (data UART)

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 2)

  - **Parameter / Return Value:**

<table>
<thead>
<tr class="header">
<th>Parameter /<br/>
Return value</th>
<th>Parity bit</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>NONE</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>ODD</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">2</td>
<td>EVEN</td>
<td align="center">-</td>
</tr>
</tbody>
</table>

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `PR0\r\n`

	**With Parameter (Set)**
    - No response
    - Change parity bit of serial interface



---

#### SB

---

  - **Format:** `SB<Parameter>[CR][LF]`

  - **Meaning:** Stop bit of serial interface (data UART)

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 / 1)

  - **Parameter / Return Value:**

<table>
<thead>
<tr class="header">
<th>Parameter /<br/>
Return value</th>
<th>Stop bit</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>1-bit</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>2-bit</td>
<td align="center">-</td>
</tr>
</tbody>
</table>

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `SB0\r\n`

	**With Parameter (Set)**
    - No response
    - Change stop bit of serial interface



---

#### FL

---

  - **Format:** `FL<Parameter>[CR][LF]`

  - **Meaning:** Flow control of serial interface (data UART) / (RS-232/TTL interface only)

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 4)

  - **Parameter / Return Value:**

<table>
<thead>
<tr class="header">
<th>Parameter /<br/>
Return value</th>
<th>Flow control</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>NONE</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>XON/XOFF</td>
<td align="center">Software flow control</td>
</tr>
<tr class="odd">
<td align="center">2</td>
<td>RTS/CTS</td>
<td align="center">Hardware flow control</td>
</tr>
<tr class="even">
<td align="center">3</td>
<td>RTS on TX</td>
<td align="center">Hardware flow control</td>
</tr>
<tr class="odd">
<td align="center">4</td>
<td>RTS on TX(invert)</td>
<td align="center">Hardware flow control</td>
</tr>
</tbody>
</table>

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `FL0\r\n`

	**With Parameter (Set)**
    - No response
    - Change flow control of serial interface



---

#### EC

---

  - **Format:** `EC<Parameter>[CR][LF]`

  - **Meaning:** UART Echoback function enable (data UART)

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 / 1)

  - **Parameter / Return Value:**

    0: Not used(Disabled)  
    1: Used(Enabled)

	If this option is enabled, the received serial data becomes Echoback via serial port (data UART).
 	This function can be used to check what the user enters via serial command mode.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `EC0\r\n`

	**With Parameter (Set)**
    - No response
    - Change whether UART echoback function enabled or not.



### Serial Data Packing Options



---

#### PT

---

  - **Format:** `PT<Parameter>[CR][LF]`

  - **Meaning:** Data packing of serial interface (data UART) – Time delimiter

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 65535)

  - **Parameter / Return Value:**

    0: Not used  
    1 ~ 65535: Data packing time (unit: millisecond)

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `PT0\r\n`

	**With Parameter (Set)**
    - None
    - Change the time delimiter value of serial data packing



---

#### PS

---

  - **Format:** `PS<Parameter>[CR][LF]`

  - **Meaning:** Data packing of serial interface (data UART) – Data size delimiter

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 255)

  - **Parameter / Return Value:**

    0: Not used  
    1 ~ 255: Data packing size (unit: byte)

    1. The received serial data is collected until the designated time is lapsed and will be sent all together via Ethernet. This time starts counting when receiving the serial data stop, and if additional serial data is received before the designated time is lapsed, the count restarts.
	2. The received serial data is collected until the designated data length is reached and will be sent all together via Ethernet.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `PS0\r\n`

	**With Parameter (Set)**
    - None
    - Change the data size of serial data packing



---

#### PD

---

  - **Format:** `PD<Parameter>[CR][LF]`

  - **Meaning:** Data packing of serial interface (data UART) - designated character delimiter

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** 1-byte Character (Hex only)

  - **Parameter / Return Value:**

    00: Not used  
    Other: Designated character

	The designated character is not included in data.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `PD00\r\n`

	**With Parameter (Set)**
    - None
    - Change designated character delimiter of serial data packing

	The received serial data is collected until the designated character is received and will be sent all together via Ethernet.



### Options



---

#### IT

---

  - **Format:** `IT<Parameter>[CR][LF]`

  - **Meaning:** Inactivity timer value for TCP connection close when there is no data exchange

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 65535)

  - **Parameter / Return Value:**

    0: Not used  
    1 ~ 65535: Inactivity timer value (unit: second)

	If the timer is active, the TCP connection closes when there is no data exchange.
	The timer restarts when there is an Ethernet data exchange before reaching entered inactivity timer value.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `IT0\r\n`

	**With Parameter (Set)**
    - No response
    - Change inactivity timer value



---

#### CP

---

  - **Format:** `CP<Parameter>[CR][LF]`

  - **Meaning:** TCP connection password enable (TCP server mode only)

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 / 1)

  - **Parameter / Return Value:**

    0: Not used(Disabled)  
    1: Used(Enabled)

	This option is only when the product is operating as **TCP server**.
	If this option is active, the TCP client wishing to connect to the device must send first the TCP connection password and confirmation for actual data to be transmitted.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `CP0\r\n`

	**With Parameter (Set)**
    - No response
    - Change whether TCP connection password enabled or not.




---

#### NP

---

  - **Format:** `NP<Parameter>[CR][LF]`

  - **Meaning:** TCP connection password (TCP server mode only)

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String (up to 8-bytes)

  - **Parameter / Return Value:** Default: None(null)

	This option is applicable only when product is operating as **TCP server**.
    The password can be maximum of 8 characters.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `NP\r\n`

	**With Parameter (Set)**
    - No response
    - Change TCP connection password



---

#### SP

---

  - **Format:** `SP<Parameter>[CR][LF]`

  - **Meaning:** Search identification code

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String (up to 8-bytes)

  - **Parameter / Return Value:** Default: None(null)

	If this option is active, only the products with matching ID are found via product search by configuration tool.
	Search ID code can be maximum of 8 characters.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `SP\r\n`

	**With Parameter (Set)**
    - No response
    - Change search ID code



---

#### DG

---

  - **Format:** `DG<Parameter>[CR][LF]`

  - **Meaning:** Serial debug message enable (debug UART)

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 / 1)

  - **Parameter / Return Value:**

    0: Not used(Disabled)  
    1: Used(Enabled)

	If this option is active, the product setting or error message will output via Debug UART port.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `DG1\r\n`

	**With Parameter (Set)**
    - No response
    - Change whether serial debug message enabled or not.



---

#### KA

---

  - **Format:** `KA<Parameter>[CR][LF]`

  - **Meaning:** Keep-alive packet transmit enable for checking TCP connection established

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 / 1)

  - **Parameter / Return Value:**

    0: Not used(Disabled)  
    1: Used(Enabled)

	If this option is active, the keep-alive packet is sent to the TCP connection peer according to the designated interval([KI](#ki) / [KE](#ke)).
	If there is no response from the peer, the TCP connection will close and the socket will initialize (socket open).

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `KA1\r\n`

	**With Parameter (Set)**
    - No response
    - Change whether keep-alive packet transmit enabled or not.



---

#### KI

---

  - **Format:** `KI<Parameter>[CR][LF]`

  - **Meaning:** Initial TCP keep-alive packet transmission interval value

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 65535)

  - **Parameter / Return Value:**

    0: Not used  
    1 ~ 65535: Initial Keep-alive packet transmission interval (unit: millisecond)

	The keep-alive packet is sent to the TCP connection peer according to the designated packet transmission interval.
	Keep-alive packet transmission becomes active only when at least one Ethernet data transmission has been made.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `KI7000\r\n`

	**With Parameter (Set)**
    - No response
    - Change initial keep-alive packet transmission interval value



---

#### KE

---

  - **Format:** `KE<Parameter>[CR][LF]`

  - **Meaning:** TCP Keep-alive packet transmission retry interval value

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 65535)

  - **Parameter / Return Value:**

    0: Not used  
    1 ~ 65535: Keep-alive packet transmission retry interval (unit: millisecond)

	After the first keep-alive packet transmission is done, the next keep-alive packet is sent to the TCP connection peer according to the designated packet transmission interval.
	Keep-alive packet transmission becomes active only when at least one Ethernet data transmission has been made.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `KE5000\r\n`

	**With Parameter (Set)**
    - No response
    - Change keep-alive packet transmission retry interval value



---

#### SO

---

  - **Format:** `SO<Parameter>[CR][LF]`

  - **Meaning:** SSL receive timeout value for SSL connection close

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 60000)

  - **Parameter / Return Value:**

    0: Not used  
    1 ~ 60000: SSL receive timeout (unit: millisecond)

    If the timeout is set, the SSL connection closes when SSL receive timeout over.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `SO2000\r\n`

	**With Parameter (Set)**
    - No response
    - Change SSL receive timeout value



---

#### RI

---

  - **Format:** `RI<Parameter>[CR][LF]`

  - **Meaning:** TCP client reconnection interval value (TCP client only)

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 65535)

  - **Parameter / Return Value:**

    0: Not used  
    1 ~ 65535: TCP client reconnection interval (unit: millisecond)

	If the TCP connection between the server is not successful during TCP client mode, the interval value between the next connection attempt is set.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `RI3000\r\n`

	**With Parameter (Set)**
    - No response
    - Change TCP client reconnection interval value



### Modbus Settings



---

#### PO

---

  - **Format:** `PO<Parameter>[CR][LF]`

  - **Meaning:** Sets the Modbus protocol type when operating in TCP Server mode.

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 2)

  - **Parameter / Return Value:**

| Value | Description    |
|:-----:|----------------|
| 0     | None           |
| 1     | Modbus RTU     |
| 2     | Modbus ASCII   |


  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `PO0\r\n`

	**With Parameter (Set)**
    - No response
    - Change Modbus option




### MQTT Settings



---

#### QU

---

  - **Format:** `QU<Parameter>[CR][LF]`

  - **Meaning:** MQTT user name used in the broker authentication

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String (up to 128-bytes)

  - **Parameter / Return Value:** Default: None(null)

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `QU\r\n`

	**With Parameter (Set)**
    - No response
    - Change MQTT user name



---

#### QP

---

  - **Format:** `QP<Parameter>[CR][LF]`

  - **Meaning:** MQTT password used in the broker authentication

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String (up to 128-bytes)

  - **Parameter / Return Value:** Default: None(null)

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `QU\r\n`

	**With Parameter (Set)**
    - No response
    - Change MQTT password



---

#### QC

---

  - **Format:** `QC<Parameter>[CR][LF]`

  - **Meaning:** MQTT client ID connected to the broker

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String (up to 128-bytes)

  - **Parameter / Return Value:** Default: None(null)

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `QC\r\n`

	**With Parameter (Set)**
    - No response
    - Change MQTT client ID



---

#### QK

---

  - **Format:** `QK<Parameter>[CR][LF]`

  - **Meaning:** MQTT Keep-alive time setting with the broker

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 65535)

  - **Parameter / Return Value:**

    Ex> 0

    The unit of input number is millisecond(ms)

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `QK0\r\n`

	**With Parameter (Set)**
    - No response
    - Change MQTT Keep-alive time



---

#### PU

---

  - **Format:** `PU<Parameter>[CR][LF]`

  - **Meaning:** MQTT publish topic

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String (up to 128-bytes)

  - **Parameter / Return Value:** Default: None(null)

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `PU\r\n`

	**With Parameter (Set)**
    - No response
    - Change MQTT publish topic



---

#### U0

---

  - **Format:** `U0<Parameter>[CR][LF]`

  - **Meaning:** MQTT subscribe topic 1

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String (up to 128-bytes)

  - **Parameter / Return Value:** Default: None(null)

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `U0\r\n`

	**With Parameter (Set)**
    - No response
    - Change MQTT subscribe topic



---

#### U1

---

  - **Format:** `U1<Parameter>[CR][LF]`

  - **Meaning:** MQTT subscribe topic 2

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String (up to 128-bytes)

  - **Parameter / Return Value:** Default: None(null)

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `U1\r\n`

	**With Parameter (Set)**
    - No response
    - Change MQTT subscribe topic



---

#### U2

---

  - **Format:** `U2<Parameter>[CR][LF]`

  - **Meaning:** MQTT subscribe topic 3

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String (up to 128-bytes)

  - **Parameter / Return Value:** Default: None(null)

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `U2\r\n`

	**With Parameter (Set)**
    - No response
    - Change MQTT subscribe topic



---

#### QO

---

  - **Format:** `QO<Parameter>[CR][LF]`

  - **Meaning:** MQTT QoS level

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 2)

  - **Parameter / Return Value:**

| Return value | Meaning | Remarks |
| :----------: | ------- | :-----: |
| 0            | QoS0    | -       |
| 1            | QoS1    | -       |
| 2            | QoS2    | -       |

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `QO0\r\n`

	**With Parameter (Set)**
    - No response
    - Change MQTT QoS level



### Certificate Settings



---

#### RC

---

  - **Format:** `RC<Parameter>[CR][LF]`

  - **Meaning:** SSL client Root CA verify option

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 ~ 2)

  - **Parameter / Return Value:**

| Return value | Meaning                        | Remarks |
| :----------: | ------------------------------ | :-----: |
| 0            | Client Root CA verify none     | -       |
| 1            | Client Root CA verify optional | -       |
| 2            | Client Root CA verify required | -       |

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `RC0\r\n`

	**With Parameter (Set)**
    - No response
    - Change SSL client Root CA verify option



---

#### CE

---

  - **Format:** `CE<Parameter>[CR][LF]`

  - **Meaning:** SSL client certificate enable option

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 / 1)

  - **Parameter / Return Value:**

| Return value | Meaning                    | Remarks |
| :----------: | -------------------------- | :-----: |
| 0            | Client certificate disable | -       |
| 1            | Client certificate enable  | -       |

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `CE0\r\n`

	**With Parameter (Set)**
    - No response
    - Change client certificate enable option



---

#### OC

---

  - **Format:** `OC[CR][LF]<Parameter>[CR][LF]`

  - **Meaning:** SSL client Root CA

  - **Command Type:** Write only

  - **Parameter / Return Type:** String (up to 2048-bytes)

  - **Parameter / Return Value:** Default: None(null)

    Possible to also input the client Root CA using the file transfer function of the terminal program.

  - **Response**

	**Without Parameter**
    - No response
    - Change SSL client Root CA



---

#### LC

---

  - **Format:** `LC[CR][LF]<Parameter>[CR][LF]`

  - **Meaning:** SSL client certificate

  - **Command Type:** Write only

  - **Parameter / Return Type:** String (up to 2048-bytes)

  - **Parameter / Return Value:** Default: None(null)

	Possible to also input the client certificate using the file transfer function of the terminal program.

  - **Response**

	**Without Parameter**
    - No response
    - Change SSL client certificate



---

#### PK

---

  - **Format:** `PK[CR][LF]<Parameter>[CR][LF]`

  - **Meaning:** SSL private key

  - **Command Type:** Write only

  - **Parameter / Return Type:** String (up to 2048-bytes)

  - **Parameter / Return Value:** Default: None(null)

	Possible to also input the private key using the file transfer function of the terminal program.

  - **Response**

	**Without Parameter**
    - No response
    - Change SSL private key



### Command Mode Switch Settings



---

#### TE

---

  - **Format:** `TE<Parameter>[CR][LF]`

  - **Meaning:** Serial command mode switch code enable

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 / 1)

  - **Parameter / Return Value:**

    0: Not used(Disabled)  
    1: Used(Enabled)

	This function must be active in order to enter serial command mode via 3-byte command mode switch code.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `TE1\r\n`

	**With Parameter (Set)**
    - No response
    - Change weather command mode switch code enabled or not



---

#### SS

---

  - **Format:** `SS<Parameter>[CR][LF]`

  - **Meaning:** Serial command mode switch code

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** String (3-byte hex only)

  - **Parameter / Return Value:** Default: 0x2B 0x2B 0x2B

	The command mode switch code must be composed of 3-byte(3 characters) hex code.

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `SS2B2B2B\r\n`

	**With Parameter (Set)**
    - No response
    - Change command mode switch code



### Device Control



---

#### EX

---

  - **Format:** `EX[CR][LF]`

  - **Meaning:** Command mode exit

  - **Command Type:** Write only (control)

  - **Parameter / Return:** None

  - **Response**

	**Without Parameter**
    - No response
    - Command mode exit and switch to data transmission mode

	While the serial debug message is being used, the following mode switch message will output via Data/Debug UART ports once the switch to data transmission mode is successful.

    `> SEG:GW Mode`



---

#### SV

---

  - **Format:** `SV[CR][LF]`

  - **Meaning:** Save changed settings

  - **Command Type:** Write only (control)

  - **Parameter / Return:** None

  - **Response**

	**Without Parameter**
    - No response
    - Save changed settings



---

#### UF

---

  - **Format:** `UF[CR][LF]`

  - **Meaning:** Copy firmware from firmware binary bank to application bank

  - **Command Type:** Read / Write

  - **Parameter / Return:**

    Ex> 1

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `UF0\r\n`

	**With Parameter (Set)**
    - No response
    - Change current bank flag

	After reset, copy firmware from firmware binary bank to application bank.



---

#### RT

---

  - **Format:** `RT[CR][LF]`

  - **Meaning:** Device reboot

  - **Command Type:** Write only (control)

  - **Parameter / Return:** None

  - **Response**

	**Without Parameter**
    - No response
    - All operations are closed and device reboot

	While the serial debug message is being used, the following message will output via data UART

	`> REBOOT`



---

#### FR

---

  - **Format:** `FR[CR][LF]`

  - **Meaning:** Device factory reset

  - **Command Type:** Write only (control)

  - **Parameter / Return:** None

  - **Response**

	**Without Parameter**
    - No response
    - Reset to device factory default setting

	`> REBOOT`



### Status I/O



---

#### SC

---

  - **Format:** `SC<Parameter_0><Parameter_1>[CR][LF]`

  - **Meaning:** Set status I/O pin **[S0](#s0)(PA\_10) and [S1](#s1)(PA\_01)** operation mode

  - **Command Type:** Read / Write

  - **Parameter / Return Type:** Number (0 / 1)

  - **Parameter / Return Value:**

  - **Parameter\_0** (upper byte)

<table>
<thead>
<tr class="header">
<th>Parameter / Return value</th>
<th>Meaning</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>PHY link status</td>
<td align="center">Default</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>DTR</td>
<td align="center">Data Terminal Ready (RS-232/TTL only)</td>
</tr>
</tbody>
</table>

  - **Parameter\_1** (lower byte)

<table>
<thead>
<tr class="header">
<th>Parameter / Return value</th>
<th>Meaning</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>TCP connection status</td>
<td align="center">Default</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>DSR</td>
<td align="center">Data Set Ready (RS-232/TTL only)</td>
</tr>
</tbody>
</table>

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: (Connection Status) `SC00\r\n`
    - In ASCII: (DTR / DSR) `SC11\r\n`

	**With Parameter (Set)**
    - No response
    - Change status I/O pins operation mode



---

#### S0

---

  - **Format:** `S0<Parameter>[CR][LF]`

  - **Meaning:** Status I/O pin **S0(PA\_10)** value

  - **Command Type:** Read only

  - **Parameter / Return Type:** Number (0 / 1)

  - **Parameter / Return Value:**

  - **When operating via PHY link status pin**

| Return value | Meaning       | Remarks |
| :----------: | ------------- | :-----: |
| 0            | PHY link up   | -       |
| 1            | PHY link down | -       |

  - **When operating via DTR(Data Terminal Ready) pin**
    - Signal that the device communication is ready (RS-232, Output)
    - Connects with peer device's DSR pin

| Return value | Meaning                             | Remarks |
| :----------: | ----------------------------------- | :-----: |
| 0            | The device is not ready             | -       |
| 1            | The device ready for communications | -       |

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `S00\r\n`



---

#### S1

---

  - **Format:** `S1<Parameter>[CR][LF]`

  - **Meaning:** Status I/O pin **S1(PA\_01)** value

  - **Command Type:** Read only

  - **Parameter / Return Type:** Number (0 / 1)

  - **Parameter / Return Value:**

  - **When operating via TCP connection status pin**
    - TCP client / TCP server / TCP mixed mode only

| Return value | Meaning                    | Remarks |
| :----------: | -------------------------- | :-----: |
| 0            | TCP connection established | -       |
| 1            | TCP disconnected           | -       |

  -	**When operating via DSR(Data Set Ready) pin**
    - Signal detect that the peer device communication is ready (RS-232, Input)
    - Connect with peer device's DTR pin

| Return value | Meaning                                  | Remarks |
| :----------: | ---------------------------------------- | :-----: |
| 0            | The peer device is not ready             | -       |
| 1            | The peer device ready for communications | -       |

  - **Response**

	**Without Parameter (Get)**
    - In ASCII: `S10\r\n`



-----
