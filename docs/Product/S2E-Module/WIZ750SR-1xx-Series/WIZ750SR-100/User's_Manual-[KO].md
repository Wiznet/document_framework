---
id: users_manual-[KO]
title: User's Manual-[KO]
date: 2020-04-09
---

## Content

# WIZ750SR User's Manual

**Supported Languages**  
* [English](User's_Manual-[EN].md)   
* [Korean](User's_Manual-[KO].md) (current page)

![](/products/wiz750sr/docs_icon.png)

-----

WIZ750SR은 시리얼 to 이더넷 모듈 제품으로, 사용자는 WIZ750SR을 시리얼 인터페이스를 제공하는 장치와 연결하여
이더넷 네트워크를 통해 제어하고 모니터링 할 수 있습니다.

본 제품의 경우, 사용자 시리얼 장치의 인터페이스 종류에 따라 **WIZ750SR-TTL, WIZ750SR-RS232,
WIZ750SR-RS485(RS-422/485 지원)**의 세 가지 형태로 제공 됩니다. 사용자의 네트워크 환경 및 망 구성에
따라 **두 가지 IP 주소 할당 방법\[1\]**과 \*\* 네 가지 이더넷 동작 모드\[2\]\*\*를 지원하며,
시리얼 데이터 스트림을 \[특정 문자\], \[길이\], \[시간\] 등에 따라 블록으로 구분하여 전송 할 수 있도록
**Data packing 옵션**도 제공하고 있습니다.

** 본 문서에서는 WIZ750SR 제품이 제공하는 주요 기능에 대해 설명합니다. **

-----

1.  Static / DHCP

2.  TCP server / TCP client / TCP mixed / UDP

## 네트워크 설정

### IP 주소 설정

WIZ750SR은 다음과 같은 두 가지 IP 주소 할당 방법을 제공합니다. IP 주소의 할당은 IP 주소 및 Gateway 주소,
Subnet mask, DNS 서버 주소를 포함합니다.

  - **직접 IP 할당**
      - 고정 IP 주소(Static IP address) 할당 방법이라고도 하며, 제품이 **사용자가 직접 입력한 네트워크
        정보에 따라 동작**합니다. 공인 IP 주소(Public IP address) 및 사설 IP 주소(Private
        IP address)를 모두 설정 가능 합니다.
      - 만약 TCP 클라이언트나 TCP 혼합 모드를 사용하는 경우, 데이터를 전달 할 원격지 호스트\[1\]가 IP 주소가
        아닌 도메인 네임\[2\]이라면 DNS 주소가 꼭 설정되어야 합니다.
      - 사설 IP 주소를 직접 할당하는 경우의 예제는 [Getting Started Guide: WIZ750SR
        Factory
        Settings](/products/wiz750sr/gettingstarted/ko#wiz750sr_factory_settings)
        를 참고하여 주십시오.

<!-- end list -->

  - **자동 IP 할당 (DHCP)**
      - 공유기(NAT Router) 등에 내장된 **DHCP 서버를 통해 자동으로 IP주소를 할당 받는 방법**입니다.
        사용자가 별도의 설정을 할 필요가 없으며 동일한 공유기를 통해 IP를 할당 받은 장치들은 서로 통신이
        가능합니다. 공유기의 동적 IP 할당 범위\[3\]에서 사설 IP 주소\[4\]를 할당하는 경우가
        일반적이나, 공인 IP 주소를 할당하는 경우\[5\]도 있습니다.
      - DHCP 서버 측에서 IP 주소 및 Gateway 주소, Subnet mask, DNS 주소를 모두 할당해 주기
        때문에 사용자가 별도의 설정을 수행할 필요는 없습니다.
      - 공유기를 사용하는 경우, 공유기 측에서 외부 망과의 통신을 중계하는 경우가 대부분이므로 WIZ750SR 제품을
        **TCP 클라이언트 모드로** 외부 서버와 연동하는 응용에 유용할 수 있습니다.
          - TCP 서버 모드로 동작하는 경우, 외부 망에서의 접근을 위해 공유기의 [포트
            포워딩](https://en.wikipedia.org/wiki/Port_forwarding)
            설정이 필요할 수 있습니다.

\<WRAP round info center centeralign 60%\>

WIZ750SR 제품 IP 주소의 초기 설정 값  
**직접 IP 할당 / 192.168.11.2**

\</WRAP\>

1.  시리얼 장치가 네트워크를 통해 데이터를 전달할 Remote host, 즉 Destination을 의미합니다.

2.  예를 들어 www.google.com과 같은 경우

3.  일반적인 공유기는 외부 망과의 통신을 위한 외부 IP 주소와, 공유기를 통해 통신하는 네트워크 장비들에 할당되는 내부 IP
    주소 영역을 구분하여 설정하도록 되어 있습니다.

4.  보통은 IPv4 class C 대역의 192.168.xxx.xxx 형태

5.  예) KT 등의 인터넷 서비스 제공자(Internet Service Provider; ISP)로 부터 IP를 할당 받는
    경우
    
    ### 포트 번호 설정

포트 번호는 전송 계층 프로토콜 중 TCP와 UDP에서 사용되는 논리적 통신 연결단으로, 각 포트는 번호로 구분 되기에 포트
번호로 불립니다. IANA\[1\]에서 관리되며 IP 주소와 함께 쓰여 프로토콜(Protocol)과
응용(Application)을 구분하는데 사용됩니다.

0 \~ 65535의 범위를 가지며, 다음과 같이 구분되어 사용하고 있습니다.

  - **0번 \~ 1023번**: 잘 알려진 포트 (Well-known port) 
      - 프로토콜에 할당되어 사용, 예) \[HTTP (웹 서버)\] TCP 80, \[DNS\] TCP/UDP 53,
        \[DHCP\] UDP 67 등

<!-- end list -->

  - **1024번 \~ 49151번**: 등록된 포트 (Registered port)
      - Vendor의 응용들에 할당된 포트 번호

<!-- end list -->

  - **49152번 \~ 65535번**: 동적 포트 (Dynamic port)

포트 번호는 IANA의 권고안이며, 강제적인 것은 아닙니다. 하지만 원활한 네트워크 통신을 위해 목적에 맞는 포트 번호를 활용하는
것이 좋습니다. 따라서 **사용자 목적을 위해 응용 제품 활용 시, 어플리케이션 서비스를 위해 할당되거나 (Registered
port), 혹은 그때 그때 임시로 할당되어 쓰이는(Dynamic port) 포트 번호 영역 사용을 권장**합니다.

\<WRAP round info center centeralign 60%\> WIZ750SR 제품 포트 번호의 초기 설정 값  
**5000** \</WRAP\>

1.  Internet Assigned Numbers Authority, <http://www.iana.org>

### 원격지 호스트 설정

제품의 네트워크 동작 모드가 TCP 클라이언트\[1\] 일 경우, 정해진 주기\[2\]에 따라 미리 설정된 원격지 호스트로 TCP
연결을 수행합니다. 또는 UDP 동작 모드 일 때 통신하기 위한 상대(Peer)의 주소\[3\]를 의미합니다. 이 때, 원격지
호스트는 IP 주소 및 도메인 네임 둘 중 하나로 설정 가능합니다.

원격지 호스트가 도메인 네임으로 설정된 경우, 내장된 DNS 클라이언트가 자동으로 도메인 네임을 IP 주소로 변경하여 목적지와
TCP connection을 수행하게 됩니다.

제품의 포트 번호 설정과 마찬가지로, 목적지 응용의 포트 번호도 함께 설정되어야 합니다.

\<WRAP round info center centeralign 60%\>

WIZ750SR 제품 원격지 호스트의 초기 설정 값  
**192.168.11.3 : 5000**

\</WRAP\>

-----

## 네트워크 동작 모드

WIZ750SR은 네트워크 동작을 기준으로 **TCP 서버 모드(TCP server), TCP 클라이언트 모드(TCP
client), TCP 서버/클라이언트 혼용 모드(TCP mixed), UDP 모드**의 4가지 동작 모드를 지원합니다. 사용자는
네트워크 기능을 더하고자 하는 시리얼 장치의 특성 및 목적에 따라 제품의 네트워크 동작 모드를 선택 할 수 있습니다. 각각의
모드는 활용 시 차이점을 가지며, 각 항목에 자세히 설명합니다.

-----

### TCP 서버 모드

제품이 TCP 서버 모드로 설정된 경우, 다음과 같이 동작합니다.

\<WRAP round box center 100%\>

1.  **먼저 실행되어 TCP 클라이언트의 연결 요청을 대기 (listen)**
2.  **TCP 클라이언트의 연결 요청이 수신되면 TCP 연결 수립 (TCP connection established)**
3.  **데이터 송/수신**

\</WRAP\>

TCP 서버 모드에서만 사용되는 제품 옵션은 다음과 같습니다.

  - **연결 비밀번호**(Connection password)
      - 설정 시, TCP client 측에서 데이터 전송 이전에 password를 전송하여야 데이터 교환이 가능합니다.
      - 만약 password가 일치하지 않으면 TCP 연결이 종료됩니다. (disconnect)

-----

1.  TCP 클라이언트 모드 및 TCP 서버/클라이언트 혼용 모드

2.  Reconnection interval 값

3.  UDP 1:1 동작 모드 일 경우, 원격지 호스트 설정과 일치하지 않는 주소에서 보내온 데이터는 모두
    파기(discarded)됩니다.
    
    ### TCP 클라이언트 모드

제품이 TCP 클라이언트 모드로 설정된 경우, 다음과 같이 동작합니다.

\<WRAP round box center 100%\>

1.  **지정된 목적지 호스트(TCP 서버)로 TCP 연결을 수행 (connect)** 
2.  **TCP 연결이 수립(TCP connection established)되면 데이터 송/수신**

\</WRAP\>

  - 연결 할 목적지 호스트 정보가 필요하며, 목적지는 TCP 서버로 동작하고 있어야 함

TCP 클라이언트 모드에서만 사용되는 제품 옵션은 다음과 같습니다.

  - **재연결 간격**(Re-connection interval)
      - 원격지 호스트로 TCP 연결을 수행할 주기를 결정합니다.
      - TCP 연결이 수립되지 않으면, 지정된 시간 만큼 대기 후 다시 연결을 시도합니다.

-----

### TCP 서버/클라이언트 혼용 모드

TCP 서버/클라이언트 혼용 모드는 TCP 서버와 클라이언트의 특징을 모두 가진 네트워크 동작 모드입니다. 해당 모드는 다음과
같이 동작합니다.

\<WRAP round box center 100%\>

1.  **전원 인가 시 TCP 서버로 동작 (listen)**
2.  **TCP 클라이언트의 연결이 없을 때, 시리얼 데이터가 발생하면 TCP 클라이언트 모드로 전환되어 목적지로 데이터 전송
    (connect & send)**
3.  **목적지와의 연결이 끝나면 (disconnect) 다시 TCP 서버로 동작 (listen)**

\</WRAP\>

TCP 서버/클라이언트 혼용 모드에서는 다음 옵션의 활용을 권장합니다.

  - **비활성 타이머**(Inactivity timer)
      - TCP 연결 수립 이후에 지정된 시간동안 데이터 송/수신이 발생하지 않으면 TCP 연결을 종료합니다.
      - 해당 옵션이 활성화 되어 있는 경우, (시리얼 데이터가 발생하면) TCP 클라이언트 모드가 되어 목적지로 데이터를
        전송 한 후 자동으로 TCP 클라이언트의 연결을 종료하고 TCP 서버 모드로 복귀 할 수 있습니다.

-----

### UDP 모드

UDP 프로토콜로 데이터를 송/수신하는 모드입니다. UDP 모드는 TCP 모드와는 다르게 연결 수립 과정이 없으므로, 목적지로
데이터를 전송하기 위해 원격지 호스트 주소의 설정이 필요합니다.

WIZ750SR 제품은 1:1 통신만 가능했던 기존 제품의 UDP 모드에 다수의 목적지와 통신 할 수 있는 1:N UDP 동작
모드가 추가되었습니다. 단 1:N 동작의 경우 상대방 목적지에서 먼저 데이터를 송신하고, 사용자의 시리얼 장치가 응답하는
형태의 응용에서만 활용 가능합니다.

  - **1:1 UDP 통신 모드**
      - 설정된 원격지 호스트 주소(도메인 네임) 및 포트 번호로 통신합니다.

<!-- end list -->

  - **1:N UDP 통신 모드**
      - WIZ750SR은 방금 전 데이터를 보내온 목적지로 데이터를 전송 할 수 있습니다. 목적지 주소는 또 다른
        목적지에서 데이터가 수신 될 때 새로운 목적지 주소로 변경됩니다.
      - 먼저 데이터를 전송 할 수는 없습니다.
      - 다수의 UDP 목적지에서 데이터를 보내오고, 이에 시리얼 장치가 응답하는 형태의 응용에서 활용 가능합니다.
      
      \<WRAP round info center centeralign 60%\>

**1:N UDP 통신 모드 설정**  
*원격지 호스트 IP 주소를 0.0.0.0으로 설정*  
(원격지 호스트의 포트 번호 설정은 동일)

\</WRAP\>

-----

## 시리얼 포트 설정

### Baud Rate

  - Data UART의 지원 Baud rate는 다음과 같습니다.

| Baud rate(bps) | Remarks |
| -------------- | ------- |
| 300            | \-      |
| 600            | \-      |
| 1200           | \-      |
| 1800           | \-      |
| 2400           | \-      |
| 4800           | \-      |
| 9600           | \-      |
| 14400          | \-      |
| 19200          | \-      |
| 28800          | \-      |
| 38400          | \-      |
| 57600          | \-      |
| **115200**     | Default |
| 230400         | \-      |

### Data Bit

  - 지원 Data bit는 다음과 같습니다.

| Data Bit | Remarks |
| -------- | ------- |
| 7        | \-      |
| **8**    | Default |

### Parity Bit

  - 지원 Parity bit는 다음과 같습니다.

| Parity Bit | Remarks |
| ---------- | ------- |
| **NONE**   | Default |
| ODD        | \-      |
| EVEN       | \-      |

### Stop Bit

  - 지원 Stop bit는 다음과 같습니다.

| Stop Bit | Remarks |
| -------- | ------- |
| **1**    | Default |
| 2        | \-      |

### Flow Control

  - RS-232/TTL 제품은 다음과 같은 시리얼 데이터 흐름제어(flow control)를 지원합니다.

| Flow Control | Description                        | Remarks |
| ------------ | ---------------------------------- | ------- |
| NONE         | 흐름제어를 사용하지 않습니다.                   | Default |
| XON/XOFF     | 소프트웨어 흐름제어 (Software flow control) | \-      |
| CTS/RTS      | 하드웨어 흐름제어 (Hardware flow control)  | \-      |

  - RS-422/485 제품의 경우, 위 흐름제어 옵션 중 하나를 선택하더라도 'NONE'을 선택한 것과 동일하게 동작합니다.

### Etc.

  - Debug UART의 지원 Baud rate는 다음과 같습니다.

<table>
<thead>
<tr class="header">
<th>Serial Settings</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>115200-8-N-1:NONE</td>
<td>Default, fixed<br />
Flow control disabled</td>
</tr>
</tbody>
</table>

-----

## 지원 옵션

### 디버그 메시지

  - 해당 옵션이 체크되면 Debug UART를 통해 제품의 정보와 오류 상황 등이 출력됩니다.
  - Debug UART의 시리얼 설정은 **115200-8-N-1:None**으로 고정되어 있습니다.

### 시리얼 커맨드 모드 전환

``` 
  * 시리얼 데이터 중 **3-byte 커맨드 모드 전환 코드** 수신 시 데이터 전송 모드(GW mode)에서 시리얼 커맨드 모드(AT mode)로 전환됩니다.
    * Enable Default: Enabled (사용)
    * Trigger Code Default: [2B][2B][2B] (+++)
  * 시리얼 커맨드 모드에서는 2-byte로 구성된 시리얼 커맨드를 이용하여 제품의 각종 설정 변경 및 모니터가 가능합니다.
  * 시리얼 커맨드 모드로 변경되면 기존에 연결되어 있던 TCP 연결(TCP connection)이 모두 종료(disconnect)됩니다.
  * 커맨드 모드 전환 코드 각 byte의 값은 hex 코드만 인식합니다.
```

``` 
  * 시리얼 커맨드에 관한 상세 설명은 [[products:wiz750sr:commandmanual:ko|WIZ750SR Command Manual]]에서 다룹니다.
```

\<WRAP round tip center 90%\>

**Trigger code를 이용한 모드 전환 시 주의점**은 다음과 같습니다.

``` 
  - 3-byte 커맨드 모드 전환 코드 입력의 전/후로 **500ms 이상**의 데이터 전송 없는 시간 간격(Time gap)이 있어야 전환 코드로 인식합니다.
  - 3-byte 커맨드 모드 전환 코드의 각 byte 간 사이의 입력 시간 간격이 **500ms 이하**여야 합니다.
  - 커맨드 모드 전환 코드의 말미에는 CR((CR: Carriage return, 커서를 맨 왼쪽 시작 위치로 이동 ('\r', 0x0D) ))과 LF((LF: Line feed, 커서를 한 칸 아래로 이동하여 새 줄 추가 ('\n', 0x0A) ))를 붙이지 않습니다.((이와 반대로, 모드 전환 후 입력 될 시리얼 커맨드의 경우에는 각 커맨드의 마지막에 CR과 LF를 붙여야 합니다.))
  - 커맨드 모드 전환 코드 전, 후 간격과 사이 간격의 **초기 값은 500ms**이며, 시리얼 데이터 패킹 옵션의 **Timer** 값이 설정된 경우 간격 값은 설정된 Timer 값으로 변경됩니다.
```

\</WRAP\>

### 시리얼 데이터 패킹

  - WIZ750SR은 사용자의 조건에 따라 시리얼 데이터를 모아서 전송 할 수 있도록 **다양한 시리얼 데이터 패킹 옵션을
    제공**\[1\]합니다. 해당 옵션을 활용하면 한 번에 전송 하는 것이 유리한 유저 커맨드 프레임이나 주기 데이터를
    손쉽게 모아 전송 할 수 있습니다.

\<WRAP round tip center centeralign 90%\> **해당 옵션은 중복 설정 가능하며, 적용 우선 순위는
다음과 같습니다.**  
**Character =\> Size =\> Timer** \</WRAP\>

  - **Timer**
      - **범위: 0 \~ 65535, 단위: 밀리 초(ms)**
          - Default: 0 (사용하지 않음)
      - 지정된 **시간**이 경과 할 때까지 데이터를 저장한 후 한 번에 전송합니다.
      - '0'으로 설정하면 동작하지 않습니다.

<!-- end list -->

  - **Size**
      - **범위: 0 \~ 255, 단위: 데이터 길이(byte 수)**
          - Default: 0 (사용하지 않음)
      - 지정된 **데이터 길이**에 도달할 때 까지 데이터를 저장한 후 한 번에 전송합니다.
      - '0'으로 설정하면 동작하지 않습니다.

<!-- end list -->

  - **Character**
      - **범위 및 단위: 1-byte 문자(Hex code)**
          - Default: 00 (Null, 사용하지 않음)
      - 지정된 문자가 입력 될 때 까지 데이터를 저장한 후 한 번에 전송합니다. 데이터의 크기가 버퍼 크기를 초과하지
        않으면 지정 문자를 포함하여 전송하며, 버퍼 크기 초과 시 지정 문자를 제외한 데이터 만을 전송합니다.
      - '00'으로 설정하면 동작하지 않습니다. (Null)

<!-- end list -->

1.  시리얼 데이터의 수신 시 **'지정 시간', '지정 크기', '특정 문자'**를 기준으로 데이터를 모아 전송 할 수
    있습니다.
    
    ### 비활성 타이머

  - **범위: 0 \~ 65535, 단위: 초(second)**
      - Default: 0 (사용하지 않음)
  - 비활성 타이머(Inactivity timer)가 설정되면, 마지막 데이터 전송 이후 부터 데이터 전송 없이 지정된 시간
    경과 후 연결을 종료합니다.
  - 연결 과정이 수행되는 **TCP 서버 및 TCP 클라이언트 모드(혼합 모드 포함)**에 적용 됩니다.

### 재연결 간격 설정

  - **범위: 1 \~ 65535, 단위: 밀리 초(ms)**
      - Default: 3000 (사용, 3초)
  - 재연결 간격(Re-connection interval)은 **TCP 클라이언트 동작(혼합 모드의 TCP 클라이언트 포함)
    시**, TCP 연결 재시도의 간격을 결정합니다.
  - TCP 연결 시도가 실패한 경우, 재연결 시도를 위해 필요한 옵션입니다.
  - 최소 1ms 이상 설정되어야 합니다.

### 검색 ID 코드 설정

  - **범위 및 구분: 최대 8-byte의 문자열**
      - Default: Null (사용하지 않음)
  - 검색 ID 코드(Search identification code)는 제품 검색 시 식별\[1\]을 위한 옵션입니다.
  - 해당 옵션이 설정되면, 제품 검색 시 설정된 동일 코드가 입력 되어야만 검색된 장치 리스트에 표시됩니다.

<table>
<tbody>
<tr class="odd">
<td><img src="/products/wiz750sr/usermanual/configtool_udp_search.png" class="align-center" width="300" /></td>
</tr>
<tr class="even">
<td>Figure: <strong>Search ID code</strong><br />
(UDP broadcast search popup)</td>
</tr>
</tbody>
</table>

### 연결 비밀번호 설정

  - **범위 및 구분: 최대 8-byte의 문자열**
      - Default: Null (사용하지 않음)
  - 연결 비밀번호(Connection password)는 **TCP 서버 모드 동작(혼합 모드의 TCP 서버 포함) 시
    사용**할 수 있는 옵션입니다.
  - 연결 비밀번호가 설정되면, WIZ750SR 제품에 접속한 TCP 클라이언트는 미리 약속된 비밀번호 문자열을 전송한 이후에
    데이터 전송이 가능합니다.
      - 만약 비밀번호가 일치하지 않을 경우 TCP 연결은 종료됩니다.

<!-- end list -->

1.  예를 들어 목적에 따른 제품 그룹 여러 개가 동일한 네트워크 상에 위치한 경우.

### TCP 연결 유지 설정

  - **Send Keep-Alive: Enable**
      - 해당 옵션이 체크되면, 제품이 **TCP 모드(TCP 서버, TCP 클라이언트 및 TCP 혼합모드 포함)로 동작
        시** **연결 상태 유지를 위한 연결 유지(Keep-Alive) 패킷**이 전송됩니다.
          - Default: Enabled (사용)
      - 연결 유지 패킷에 대한 응답이 없을 경우, 해당 TCP 연결은 종료됩니다. (Socket close /
        disconnect)
      - WIZ750SR에서 한 번 이상 이더넷 패킷이 송신된 이후부터 연결 유지 패킷 전송이 시작됩니다.

<!-- end list -->

  - **Send Keep-Alive 간격**
      - **범위: 0 \~ 65535, 단위: 밀리 초(ms)**
          - Default: 7000, 5000 (사용, 7초 / 5초)
      - 연결 유지 패킷을 전송하기 위한 간격은 순서대로 다음과 같습니다.
          - 최초 연결 유지 패킷을 전송하기까지의 간격
          - 매 연결 유지 패킷 전송 시 사이의 간격

<!-- end list -->

  - 이더넷 네트워크 장비는 원격지 장비의 물리적 단선을 감지 할 수 없으므로, 해당 옵션을 활성화하여 문제 상황에서 TCP
    연결을 종료 할 수 있도록 설정하는 것이 좋습니다.
      - 특히 TCP 서버 모드로 동작 할 경우, 연결 유지 패킷 전송 설정이 없다면 원격지 장비가 어떠한 이유로 물리적
        단선 중에 종료/재연결을 수행했을 경우 기존 연결을 종료 할 수 없는 상황에 빠질 수 있습니다.

-----

## 제품 설정 및 제어 방법

WIZ750SR 제품은 시리얼 to 이더넷 동작 시 필요한 다양한 옵션들의 설정 변경을 위해 다음과 같은 방법들을 제공합니다.
\[1\]

  - **[제품 설정 툴(Configuration tool)을 이용한
    설정](/products/wiz750sr/configtoolmanual/ko) (네트워크)**
  - **[Command set을 이용한 설정](/products/wiz750sr/commandmanual/ko) (시리얼 /
    네트워크)**

자세한 내용은 해당 문서를 참조 바랍니다.

-----

1.  Configuration tool 및 Command set을 이용한 설정 방법은 사용하지 않거나 목적에 따라 변경된 최소
    부분 변경을 제외하고 WIZ107/108SR 제품과 호환됩니다. 시리얼 및 네트워크 상에서 제품의 제어를 위해 활용되는
    Command의 상세 / 확장 정보는 [WIZ750SR Command
    Manual](/products/wiz750sr/commandmanual/ko)에서 자세히 다룹니다.
    
    \<WRAP center round tip 80% centeralign\> **동작에 문제가 있나요?**  
**[Troubleshooting 가이드](/products/wiz750sr/troubleshooting/ko)** 문서를 참고해
보세요\! \</WRAP\>

-----

## Navigation

-----

WIZ750SR series Common Documents 

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
