---
id: configuration_tool_manual-[KO]
title: Configuration Tool Manual-[KO]
date: 2020-04-08
---

## Content

# WIZ750SR Configuration Tool Manual

**Supported Languages**  
  * [English](Configuration_Tool_Manual-[EN].md)  
  * [Korean](Configuration_Tool_Manual-[KO].md) (current page)

![](/document_framework/img/products/wiz750sr/docs_icon.png)

-----

위즈네트 Configuration tool은 네트워크 상에서 제품의 **검색, 설정 변경, 펌웨어 업로드** 등을 지원하는 설정
프로그램\[1\]입니다. WIZ750SR 제품은 기존의 WIZ107/108SR 제품과 호환되도록 제작 되었으며, 동일한 설정
프로그램을 사용합니다\[2\].

프로그램을 설치하여 실행하면 다음과 같은 실행 화면을 확인 할 수 있습니다.

|                                                                     |
| ------------------------------------------------------------------- |
| ![](/document_framework/img/products/wiz750sr/usermanual/configtool_overview.png)          |
| Figure: **Configuration Tool for WIZ750SR & WIZ107/108SR Products** |

-----

## Configuration Tool Layout

|                                                          |
| -------------------------------------------------------- |
| ![](/document_framework/img/products/wiz750sr/usermanual/configtool_layout.png) |
| Figure: **Configuration Tool Layout**                    |

설정 프로그램은 크게 네 부분으로 구성되어 있습니다. 각 부분 상세 설명은 제목 링크를 통해 확인 할 수 있습니다.

### 1\. 상단 Icon Menu

  - 제품의 검색, 설정 저장, 리셋 등을 담당

### 2\. 검색된 Device List

  - 네트워크 상에서 검색된 제품들과 동작 정보를 표시

### 3\. Configuration Tab

  - 제품 상세 설정의 확인 및 변경
  - Network / Serial / Options의 세 개 탭으로 구성

### 4\. 하단 Progress Bar

  - 검색된 장치의 개수, 펌웨어 업로드 진행 등을 표시

-----

## Configuration Tool Details

### 1\. Icon Menu

Configuration tool 상단에 위치하며, 제품의 검색 / 펌웨어 업로드 / 재시작 / 초기화 등을 수행 할 수
있습니다.

|                                                             |
| ----------------------------------------------------------- |
| ![](/document_framework/img/products/wiz750sr/usermanual/configtool_icon_menu.png) |
| Figure: **Menu Icons**                                      |

1.  Windows용 프로그램을 제공합니다.

2.  기존 제품 사용자의 경우, 하나의 설정 프로그램으로 WIZ750SR 제품과 WIZ107/108SR 제품을 함께 제어 할 수
    있습니다.
    
    #### 1\) Device Search

  - 동일 네트워크 상에 연결된 WIZ750SR 장치를 검색합니다.
  -  [UDP
    Broadcast](https://en.wikipedia.org/wiki/Broadcasting_\(networking\))\[1\]
    및 [TCP Unicast](https://en.wikipedia.org/wiki/Unicast)\[2\]로 검색이
    가능합니다.
  - UDP와 TCP를 이용한 제품 검색 시 팝업 창(Pop-up windows)은 다음과 같습니다.

<table>
<tbody>
<tr class="odd">
<td><img src="/products/wiz750sr/usermanual/configtool_udp_search.png" class="align-center" width="300" /></td>
<td><img src="/products/wiz750sr/usermanual/configtool_tcp_search.png" class="align-center" width="300" /></td>
</tr>
<tr class="even">
<td>Figure: <strong>UDP Search</strong><br />
(broadcast)</td>
<td>Figure: <strong>TCP Search</strong><br />
(unicast)</td>
</tr>
</tbody>
</table>

  - **네트워크를 이용한 WIZ750SR 장치 검색 기능은 TCP/UDP 포트 50001번을 이용**합니다. 만약 방화벽이나
    백신 프로그램에서 해당 포트를 차단하고 있을 경우, 장치 검색에 실패할 수 있습니다.
      - 이러한 경우, 방화벽이나 백신 프로그램의 동작을 해제 하신 후 테스트 해 보시기를 권장합니다.
      - 문제가 지속될 경우, 다음 내용을 확인 해 보시기 바랍니다.
          - **[문제 해결 가이드: 제품의 Search가 되지
            않습니다](/products/wiz750sr/troubleshooting/ko)**

#### 2\) Save Settings

  - 변경된 설정을 저장하고 WIZ750SR 제품에 적용합니다. 
  - 성공적으로 설정 변경이 이루어진 경우 Configuration tool에 반영됩니다.
  - 제품은 동작이 완료된 이후 자동으로 재시작(Reboot) 됩니다. 

#### 3\) Firmware Upload

  - 위즈네트에서 제공하는 펌웨어 바이너리 파일을 선택하여 WIZ750SR 제품 펌웨어를 업데이트 합니다. 
  - 제품은 동작이 완료된 이후 자동으로 재시작(Reboot) 됩니다. 
  - 성공적으로 펌웨어 업로드 완료 시, 다음과 같은 메시지 팝업을 확인 할 수 있습니다.

|                                                                          |
| ------------------------------------------------------------------------ |
| ![](/document_framework/img/products/wiz750sr/usermanual/configtool_firmwareupload_success.png) |
| Figure: **Popup Message - Firmware Upload Successfully**                 |

  - **네트워크를 이용한 WIZ750SR 장치 펌웨어 업로드 기능은 TCP 포트 50002번을 이용**합니다. 만약 방화벽이나
    백신 프로그램에서 해당 포트를 차단하고 있을 경우, 장치 펌웨어 업로드에 실패할 수 있습니다.
      - 이러한 경우, 방화벽이나 백신 프로그램의 동작을 해제 하신 후 테스트 해 보시기를 권장합니다.
      - 문제가 지속될 경우, 다음 내용을 확인 해 보시기 바랍니다.
          - **[문제 해결 가이드: 펌웨어 업데이트에
            실패합니다.](/products/wiz750sr/troubleshooting/ko)**
  - 올바르지 않은 펌웨어로 업로드를 수행 한 경우, 제품의 정상 동작을 보장 할 수 없습니다.

\<WRAP round alert center centeralign 60%\> **펌웨어 업로드 중에는 절대 전원을 끄지
마십시오**  
**제품 오동작의 원인이 될 수 있습니다.** \</WRAP\>

#### 4\) Device Reset

  - WIZ750SR 제품을 재시작(Reboot) 합니다.

#### 5\) Factory Reset

  - WIZ750SR 제품의 설정을 공장 초기 설정 값(Factory default)로 되돌립니다.
  - 제품의 초기 설정 값은 [WIZ750SR Factory
    Settings](/products/wiz750sr/gettingstarted/ko#wiz750sr_factory_settings)에서
    확인 할 수 있습니다.
  - 제품은 동작이 완료된 이후 자동으로 재시작(Reboot) 됩니다. 

<!-- end list -->

1.  UDP Broadcast Search: 망 내 모듈 검색, 다수의 모듈 제품 검색 가능

2.  TCP Unicast Search: 단일 모듈 검색

#### 6\) Ping Test

  - Ping Test를 이용하면 제품과 PC가 서로 통신이 가능한지의 여부를 손쉽게 확인 할 수 있습니다.
  - 제품이 PC와 동일 망에 위치하여 **통신이 가능한 경우**, 다음과 같이 Ping 응답(Ping reply)을 확인 할
    수 있습니다.

|                                                                |
| -------------------------------------------------------------- |
| ![](/document_framework/img/products/wiz750sr/usermanual/configtool_ping_success.png) |
| Figure: **Ping Request and Reply**                             |

#### 7\) Firewall

  - Windows 제어판의 방화벽(firewall) 관련 설정으로 안내합니다.
  - 장치의 검색 및 펌웨어 업데이트 실패 시 방화벽의 해제를 위해 해당 아이콘을 선택 후 Windows 설정을 변경하여 하여
    주십시오.

#### 8\) Exit

  - Configuration tool을 종료합니다.

-----

### 2\. Device List

|                                                               |
| ------------------------------------------------------------- |
| ![](/document_framework/img/products/wiz750sr/usermanual/configtool_device_list.png) |
| Figure: **Device List**                                       |

  - Search 기능을 통해 검색된 장치의 리스트가 표시됩니다.
      - 각각의 WIZ750SR 제품은 MAC 주소로 구분되어 표시됩니다.

<!-- end list -->

  - 검색된 제품 MAC 주소를 확장하면 다음과 같은 항목들의 정보를 확인 할 수 있습니다.

<table>
<thead>
<tr class="header">
<th>Model name</th>
<th>제품의 모델명입니다. 본 제품군은 <strong>WIZ750SR</strong>로 표시됩니다.</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>UART[1]</td>
<td>UART 인터페이스의 종류를 표시합니다. 다음과 같이 표시됩니다.<br />
<br />
- <strong>RS-232/TTL</strong>: WIZ750SR 하드웨어 TTL 버전이나 RS-232C 버전입니다.<br />
- <strong>RS-422/485</strong>: WIZ750SR 하드웨어 RS-422/485 버전입니다.</td>
</tr>
<tr class="even">
<td>Firmware version</td>
<td>현재 <strong>펌웨어의 버전</strong>[2]을 표시합니다.<br />
<br />
WIZ750SR의 버전은 <strong>Major</strong> version number . <strong>Minor</strong> version number . <strong>Maintenance</strong> version number의 세 부분으로 구성됩니다. 예) v1.0.0</td>
</tr>
<tr class="odd">
<td>Status[3]</td>
<td>제품의 동작 상태를 표시합니다. 동작 상태 리스트는 다음과 같습니다.<br />
<br />
- <strong>BOOT</strong>: Boot 모드 입니다. 제품의 설정과 펌웨어 업데이트가 가능합니다.<br />
- <strong>OPEN</strong>: TCP 연결 성립 이전의 상태입니다.<br />
- <strong>CONNECT</strong>: TCP 연결이 성립된 상태입니다.<br />
- <strong>UPGRADE</strong>: 펌웨어 업데이트나 DHCP IP 할당 중인 상태입니다.<br />
- <strong>ATMODE</strong>: 시리얼 AT 커맨드 모드 상태입니다.<br />
- <strong>UDP</strong>: UDP 모드 상태입니다.</td>
</tr>
<tr class="even">
<td>Debug message</td>
<td><strong>시리얼 디버그 메시지의 출력 허용 상태</strong>를 표시합니다.<br />
<br />
시리얼 디버그 메시지는 Data UART와 별도로 분리된 Debug UART를 통해 출력되며, 인터페이스의 연결 설정이 <strong>115200-8-N-1:None</strong>으로 고정되어 있습니다.</td>
</tr>
</tbody>
</table>

-----

1.  기존 대비 변경된 항목입니다. WIZ107/108SR 제품은 UART 인터페이스의 개수(1)를 표시합니다.

2.  개발 버전의 경우, dev가 추가됩니다. 안정화 완료 버전(stable version) 펌웨어의 경우 별도의 표기 없이
    버전만 표시되며, 제품의 동작 안정성을 위해 안정화 버전의 사용을 권장합니다. 예) 개발 버전: v1.0.0dev,
    안정화 버전: v1.0.0

3.  기존 대비 확장된 항목입니다. WIZ107/108SR 제품의 상태 표시 대비 BOOT와 UDP 모드가 추가 되었습니다.

### 3\. Network Configuration Tab

|                                                               |
| ------------------------------------------------------------- |
| ![](/document_framework/img/products/wiz750sr/usermanual/configtool_tab_network.png) |
| Figure: **Network Configuration Tab**                         |

#### 1\) IP 주소 할당 방법

  - **Using the follow IP Address** (default)
      - 직접 IP 주소 할당 모드를 선택합니다. 이 옵션을 선택하면 **하단 2)**의 IP 주소 및 포트, 서브넷
        마스트, 게이트웨이 주소, DNS 서버 필드가 입력 가능한 상태로 활성화 됩니다.

<!-- end list -->

  - **DHCP**
      - 자동 IP 주소 할당 모드를 선택합니다. 이 옵션을 선택하면 **하단 2)**의 각 필드가 비활성화 되며, 모듈과
        동일 네트워크 상에 위치한 공유기(DHCP 서버)로부터 IP 설정을 할당받게 됩니다.

\* IP 주소 할당에 관한 상세 설명은 [WIZ750SR User's Manual: IP 주소
설정](/products/wiz750sr/usermanual/ko#IP_주소_설정)에서 다룹니다.  

#### 2\) IP 주소 설정 필드

  - 제품은 네트워크 상에서 해당 필드에 설정된 IP 주소 값을 기반으로 동작합니다. 
      - 직접 IP 주소 설정 모드인 경우, IP 주소 및 포트, 서브넷 마스트, 게이트웨이 주소, DNS 서버 필드가 입력
        가능한 상태로 활성화됩니다. 

#### 3\) 네트워크 동작 모드

  - 제품의 네트워크 동작 모드를 설정합니다.
      - **TCP 클라이언트 모드, TCP 서버 모드(default), TCP 클라이언트/서버 혼용 모드, UDP
        모드**의 네 가지 모드 중 사용자의 응용과 목적에 맞게 선택 할 수 있습니다.
      - 각 네트워크 동작 모드의 특징과 전용 옵션은 [WIZ750SR User's Manual: 네트워크 동작
        모드](/products/wiz750sr/usermanual/ko#네트워크_동작_모드)에서 다룹니다.

#### 4\) 원격지 호스트 설정

  - 제품이 TCP 클라이언트 모드\[1\] 및 UDP 모드 일 때 연결을 시도하거나 통신을 수행하기 위한
    목적지(destination)를 원격지 호스트(remote host)라 하며, **IP 주소 및 도메인
    네임**을 입력 할 수 있습니다.
  - **목적지의 포트 번호**가 꼭 필요합니다.
  - 원격지 호스트 설정에 관한 상세 설명은 [WIZ750SR User's Manual: 원격지 호스트
    설정](/products/wiz750sr/usermanual/ko#원격지_호스트_설정)에서 다룹니다.

\* WIZ750SR은 **PPPoE**와 **DDNS**를 지원하지 않습니다.

-----

### 4\. Serial Configuration Tab

|                                                              |
| ------------------------------------------------------------ |
| ![](/document_framework/img/products/wiz750sr/usermanual/configtool_tab_serial.png) |
| Figure: **Serial Configuration Tab**                         |

#### 1\) 디버그 메시지 허용 설정

  - **Enable debug message output**
      - 해당 옵션이 체크되면 Debug UART를 통해 제품의 정보와 오류 상황 등이 출력됩니다.
      - Debug UART의 시리얼 설정은 **115200-8-N-1:None**으로 고정되어 있습니다.

<!-- end list -->

1.  TCP 클라이언트 모드는 TCP 클라이언트 모드 및 TCP 클라이언트/서버 혼용 모드의 클라이언트 동작을 포함 합니다.

#### 2\) 시리얼 포트 설정

  - **Baud Rate**
      - 지원 Baud rate는 다음과 같습니다.
      - 300, 600, 1200, 1800, 2400, 4800, 9600, 14400, 19200, 28800,
        38400, 57600, 115200(default), 230400

<!-- end list -->

  - **Data Bit**
      - 지원 Data bit는 다음과 같습니다.
      - 7, 8(default)

<!-- end list -->

  - **Parity**
      - 지원 Parity bit는 다음과 같습니다.
      - NONE(default), ODD, EVEN

<!-- end list -->

  - **Stop Bit**
      - 지원 Stop bit는 다음과 같습니다.
      - 1(default), 2

<!-- end list -->

  - **Flow Control**
      - RS-232/TTL 제품은 다음과 같은 시리얼 데이터 흐름제어(flow control)를 지원합니다.
          - NONE(default): 흐름제어를 사용하지 않습니다.
          - XON/XOFF: 소프트웨어 흐름제어 (Software flow control)
          - CTS/RTS: 하드웨어 흐름제어 (Hardware flow control)
      - RS-422/485 제품의 경우, 위 흐름제어 옵션 중 하나를 선택하더라도 'NONE'을 선택한 것과 동일하게
        동작합니다.

#### 3\) 시리얼 데이터 옵션 설정

  - WIZ750SR은 사용자의 조건에 따라 시리얼 데이터를 모아서 전송 할 수 있도록 **다양한 시리얼 데이터 패킹 옵션을
    제공**\[1\]합니다. 해당 옵션을 활용하면 한 번에 전송 하는 것이 유리한 유저 커맨드 프레임이나 주기 데이터를
    손쉽게 모아 전송 할 수 있습니다.
**해당 옵션은 중복 설정 가능하며, 적용 우선 순위는
다음과 같습니다.**  
**Character =\> Size =\> Timer** 

1.  시리얼 데이터의 수신 시 **'지정 시간', '지정 크기', '특정 문자'**를 기준으로 데이터를 모아 전송 할 수
    있습니다.
    
    \* **Timer**


  * **범위: 0 ~ 65535, 단위: 밀리 초(ms)**
    * Default: 0 (사용하지 않음)
  * 지정된 **시간**이 경과 할 때까지 데이터를 저장한 후 한 번에 전송합니다.
  * '0'으로 설정하면 동작하지 않습니다.


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

#### 4\) 시리얼 커맨드 모드 전환 옵션 설정

  - **Serial command mode switch code: Enable**
      - 해당 옵션이 체크되면, 시리얼 데이터 중 **커맨드 모드 전환 코드** 수신 시 데이터 전송 모드(GW
        mode)에서 시리얼 커맨드 모드(AT mode)로 전환됩니다.
          - Default: Enabled (사용)
      - 시리얼 커맨드 모드에서는 2-byte로 구성된 시리얼 커맨드를 이용하여 제품의 각종 설정 변경 및 모니터가
        가능합니다.
      - 시리얼 커맨드 모드로 변경되면 기존에 연결되어 있던 TCP 연결(TCP connection)이 모두
        종료(disconnect)됩니다.

<!-- end list -->

  - **Serial command mode switch code: Trigger code**
      - 데이터 모드에서 시리얼 커맨드 모드로 전환하기 위한 3-byte 코드입니다.
          - Default: \[2B\]\[2B\]\[2B\] (+++)
      - 각 byte의 값은 hex 코드만 인식합니다.

\<WRAP round tip center 90%\>

**Trigger code를 이용한 모드 전환 시 주의점**은 다음과 같습니다.

 
  - 3-byte 커맨드 모드 전환 코드 입력의 전/후로 **500ms 이상**의 데이터 전송 없는 시간 간격(Time gap)이 있어야 전환 코드로 인식합니다.
  - 3-byte 커맨드 모드 전환 코드의 각 byte 간 사이의 입력 시간 간격이 **500ms 이하**여야 합니다.
  - 커맨드 모드 전환 코드의 말미에는 CR((CR: Carriage return, 커서를 맨 왼쪽 시작 위치로 이동 ('\r', 0x0D) ))과 LF((LF: Line feed, 커서를 한 칸 아래로 이동하여 새 줄 추가 ('\n', 0x0A) ))를 붙이지 않습니다.((이와 반대로, 모드 전환 후 입력 될 시리얼 커맨드의 경우에는 각 커맨드의 마지막에 CR과 LF를 붙여야 합니다.))
  - 커맨드 모드 전환 코드 전, 후 간격과 사이 간격의 **초기 값은 500ms**이며, 시리얼 데이터 패킹 옵션의 **Timer** 값이 설정된 경우 간격 값은 설정된 Timer 값으로 변경됩니다.


-----

### 5\. Options Configuration Tab

|                                                               |
| ------------------------------------------------------------- |
| ![](/document_framework/img/products/wiz750sr/usermanual/configtool_tab_options.png) |
| Figure: **Options Configuration Tab**                         |

#### 1\) 비활성 타이머 설정

  - **범위: 0 \~ 65535, 단위: 초(second)**
      - Default: 0 (사용하지 않음)
  - 비활성 타이머(Inactivity timer)가 설정되면, 마지막 데이터 전송 이후 부터 데이터 전송 없이 지정된 시간
    경과 후 연결을 종료합니다.
  - 연결 과정이 수행되는 **TCP 서버 및 TCP 클라이언트 모드(혼합 모드 포함)**에 적용 됩니다.

#### 2\) 재연결 간격 설정

  - **범위: 1 \~ 65535, 단위: 밀리 초(ms)**
      - Default: 3000 (사용, 3초)
  - 재연결 간격(Re-connection interval)은 **TCP 클라이언트 동작(혼합 모드의 TCP 클라이언트 포함)
    시**, TCP 연결 재시도의 간격을 결정합니다.
  - TCP 연결 시도가 실패한 경우, 재연결 시도를 위해 필요한 옵션입니다.
  - 최소 1ms 이상 설정되어야 합니다.

#### 3\) 검색 ID 코드 설정

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

#### 4\) 연결 비밀번호 설정

  - **범위 및 구분: 최대 8-byte의 문자열**
      - Default: Null (사용하지 않음)
  - 연결 비밀번호(Connection password)는 **TCP 서버 모드 동작(혼합 모드의 TCP 서버 포함) 시
    사용**할 수 있는 옵션입니다.
  - 연결 비밀번호가 설정되면, WIZ750SR 제품에 접속한 TCP 클라이언트는 미리 약속된 비밀번호 문자열을 전송한 이후에
    데이터 전송이 가능합니다.
      - 만약 비밀번호가 일치하지 않을 경우 TCP 연결은 종료됩니다.

<!-- end list -->

1.  예를 들어 목적에 따른 제품 그룹 여러 개가 동일한 네트워크 상에 위치한 경우.

#### 5\) 연결 유지 설정

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

### 6\. Progress Bar

| Device Search             | ![](/document_framework/img/products/wiz750sr/usermanual/configtool_operation_results.png) |
| ------------------------- | ------------------------------------------------------------------- |
| Firmware Upload           | ![](/document_framework/img/products/wiz750sr/usermanual/configtool_progress_bar.png)      |
| Figures: **Progress Bar** |                                                                     |

  - 검색 동작의 결과를 표시합니다.
      - 이 때, 장치가 다수 일 경우 사용자가 선택한 장치의 MAC 주소를 함께 표시합니다.
  - 펌웨어 업데이트 수행 시, 진행 현황 표시(Progress bar)를 함께 나타냅니다.

-----

\<WRAP center round tip 80% centeralign\> **동작에 문제가 있나요?**  
**[Troubleshooting 가이드](/products/wiz750sr/troubleshooting/ko)** 문서를 참고해
보세요\! \</WRAP\>

-----

## Navigation

-----

 **WIZ750SR** 

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

