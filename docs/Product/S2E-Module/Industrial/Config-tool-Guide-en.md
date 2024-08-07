---
id: Config-tool-Guide-en
title: Config tool Guide-[EN]
date: 2024-08-06
keywords: [wiznet, w55rp20,w232n datasheet, hardwired tcp/ip,serial-to-ethernet, w5500, rp2040]
description: W232N is a industrial serial to Ethernet module using the W55RP20
---

## 개요

본 문서는 Config-tool의 자세한 사용법에 대한 내용입니다.

## Config tool 사용

위즈네트 Configuration tool은 네트워크 상에서 제품의 **검색, 설정 변경, 펌웨어 업로드** 등을 지원하는 설정 툴 입니다.
* [**WIZnet-S2E-Tool-GUI 지원 장치 목록**](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI#support-devices)

Configuration Tool은 WIZnet-S2E-Tool-GUI라는 이름으로 Github의
WIZnet 페이지 내에 공개되어 있으며, 최신 버전의 실행 파일은 해당 repository의 release 페이지에서 다운로드
할 수 있습니다.
Python 기반으로 제작되어 OS 종류에 관계 없이 실행 가능합니다.

  - **Github repository: [WIZnet-S2E-Tool-GUI Github repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)**
  - **최신 버전 다운로드: [WIZnet-S2E-Tool-GUI Github repository: Release](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)**


### Configuration Tool Layout

프로그램을 설치하여 실행하면 다음과 같은 실행 화면을 확인 할 수 있습니다.

|                                                                           |
| ------------------------------------------------------------------------- |
| ![](/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/configuration_tool_layout.png) |
| Figure: **Configuration Tool Layout**                                     |

설정 프로그램은 위 그림과 같이 기능 별로 나눌 수 있습니다.

#### ① 상단 Icon Menu


- Configuration tool 상단에 위치하며, 제품의 검색 / 펌웨어 업로드 / 재시작 / 초기화 등을 수행 할 수
있습니다.

  |                                                                              |
  | ---------------------------------------------------------------------------- |
  | ![](/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/menu_icons.png) |
  | Figure: **Icon Menu**                                                       |

- #### 1) Device Search

  - 동일 네트워크 상에 연결된 장치를 검색합니다.
  -  UDP Broadcast(망 내 모듈 검색, 다수의 모듈 제품 검색 가능) 및 TCP Unicast(단일 모듈 검색)로 검색이 가능합니다.
  - **네트워크를 이용한 W232N 장치 검색 기능은 TCP/UDP 포트 50001번을 이용**합니다. 만약 방화벽이나 백신 프로그램에서 해당 포트를 차단하고 있을 경우, 장치 검색에 실패할 수 있습니다.
      - 이러한 경우, 방화벽이나 백신 프로그램의 동작을 해제 하신 후 테스트 해 보시기를 권장합니다.
      - 여러 개의 네트워크 어댑터를 사용하는 경우, 네트워크 인터페이스 메트릭(Metric) 우선 순위에 따라 패킷 전달에 오류가 발생 할 수 있습니다.<br /> OS 설정에서 사용 중인 하나의 네트워크 어댑터를 제외한 나머지를 비 활성화 후 다시 테스트 바랍니다.<br /> 이러한 상황은 VMware 혹은 Virtual Box 등의 가상머신(VM) 사용 시, VM의 네트워킹을 위해 생성된 '가상 이더넷 어댑터'에 의해 발생 할 수 있습니다.<br /> VMware 혹은 Virtual Box 등의 가상머신(VM)을 비활성화 하거나 TCP Unicast로 검색하시기 바랍니다.

- #### 2) Apply Settings

  - 변경된 설정을 저장하고 디바이스에 적용합니다. 
  - 성공적으로 설정 변경이 이루어진 경우 Configuration tool에 반영됩니다.
  - 제품은 동작이 완료된 이후 자동으로 재시작(Reboot) 됩니다. 

- #### 3) Firmware Upload

  **펌웨어 업로드 중에는 절대 전원을 끄지 마십시오**  
  **제품 오동작의 원인이 될 수 있습니다.**

  - 위즈네트에서 제공하는 펌웨어 바이너리 파일을 선택하여 제품 펌웨어를 업데이트 합니다. 
  - 제품은 동작이 완료된 이후 자동으로 재시작(Reboot) 됩니다. 
  - 성공적으로 펌웨어 업로드 완료 시, 다음과 같은 메시지 팝업을 확인 할 수 있습니다.

  |                                                                                           |
  | ----------------------------------------------------------------------------------------- |
  | ![](/img/products/wiz750sr/guiconfigtoolmanual/gui_configtool_firmwareupload_success.png) |
  | Figure: **Popup Message - Firmware Upload Successfully**                                  |

  - **네트워크를 이용한 W232N 장치 펌웨어 업로드 기능은 TCP 포트 50002번을 이용**합니다. 만약 방화벽이나 백신 프로그램에서 해당 포트를 차단하고 있을 경우, 장치 펌웨어 업로드에 실패할 수 있습니다.<br />
  이러한 경우, 방화벽이나 백신 프로그램의 동작을 해제 하신 후 테스트 해 보시기를 권장합니다.
  - 펌웨어 업데이트 시, Config-tool이 동작 중인 PC와 디바이스의 IP 대역이 일치해야 합니다.<br />
DHCP 모드 (자동 IP 할당) 사용 시, PC와 제품이 동일한 공유기로부터 IP를 할당 받도록 구성 바랍니다.<br />
Static 모드 (직접 IP 할당) 사용 시, 다음 예와 같이 설정 바랍니다.<br />
예) 제품의 IP 주소: 192.168.11.2<br />
예) PC의 IP 주소: 192.168.11.3 (동일한 Class C 사설 IP 대역의 다른 IP 주소)<br />
  - 올바르지 않은 펌웨어로 업로드를 수행 한 경우, 제품의 정상 동작을 보장 할 수 없습니다.


- #### 4) Reset Device

  - 선택된 디바이스를 재시작(Reboot) 합니다.

- #### 5) Factory Reset

  - 디바이스의 설정을 공장 초기 설정 값(Factory default)로 되돌립니다.
  - 제품의 초기 설정 값은 아래와 같습니다.
  - 제품은 동작이 완료된 이후 자동으로 재시작(Reboot) 됩니다. 

- #### 6) Save Config

  - 현재 선택된 디바이스의 모든 설정값을 파일로 저장합니다.
  - 환경이 바뀌거나 현재 장치의 설정값을 다른 장치에 적용하고자 할 때 사용할 수 있습니다.

- #### 7) Load Config

  - Save Config을 통해 저장한 파일의 설정값을 불러옵니다.
  - 설정값을 불러온 뒤 Apply Settings 버튼을 눌러 설정해야 장치에 적용됩니다.

- #### 8) Exit

  - Configuration tool을 종료합니다.

#### ② Network Interface configuration

  - 여러 종류의 네트워크 어댑터를 사용하는 경우, 어댑터 리스트와 사용 중인 대역이 표시되며, 환경에 따라 사용할 네트워크 대역을 선택할 수 있습니다.<br />
  
  |                                                                                |
  | ------------------------------------------------------------------------------ |
  | ![](/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/network_adapters.png) |
  | Figure: **Network adapters**                                                   |



#### ③ 검색된 Device List

  |                                                                                |
  | ------------------------------------------------------------------------------ |
  | ![](/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/device_list.png) |
  | Figure: **Device List**                                                        |

  - Search 기능을 통해 검색된 장치의 리스트가 표시됩니다. 
  - Searched results에는 검색된 장치 수가 표시됩니다.
  - 각각의 디바이스는 MAC 주소와 장치명으로 구분되어 표시됩니다.
  - 검색된 디바이스를 클릭하여 선택합니다.

#### ④ Search ID code & Search method
- Search ID code
  - 검색 ID 코드(Search identification code)가 설정된 경우 code를 입력하기 위한 부분입니다.
  - 제품 검색 시 설정된 동일 코드가 입력 되어야만 제품 리스트에 표시됩니다.
- Search method
  - 제품 검색 방법을 선택합니다.
  - 초기 값은 UDP broadcast입니다.
  - UDP broadcast는 망 내 모듈 검색, 다수의 모듈 제품 검색 가능합니다.
  - TCP unicast는 특정 디바이스의 IP와 50001포트를 사용해 해당 디바이스 1대만 검색합니다. <br />공유기의 포트 포워딩 기능과 같이 사용하면 외부 망에서 디바이스 검색 및 세팅 변경이 가능합니다.

#### ⑤ Status bar

  - 검색 동작의 과정 및 결과를 표시합니다.<br />이 때, 장치가 다수 일 경우 사용자가 선택한 장치의 MAC 주소를 함께 표시합니다.
  - 펌웨어 업데이트 수행 시, 진행 현황 표시(Progress bar)를 함께 나타냅니다.

#### ⑥ General options

  - 제품 상세 설정 확인 및 변경
  - Basic settings / Options / MQTT option / Certificate manager 탭으로 구성 (W232N 기준)
    |                                                                                      |
    | ------------------------------------------------------------------------------------ |
    | ![](/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/basic_settings_tab.png) |
    | Figure: **Basic settings Tab**                                                       |

      #### 1) Device information

      - Type은 선택된 디바이스의 이름, Version은 디바이스의 **펌웨어의 버전**을 표시합니다. 

      #### 2) Search identification code

      - **범위 및 구분: 최대 8-byte의 문자열**
      - Default: Null (사용하지 않음)
      - 검색 ID 코드(Search identification code)는 제품 검색 시 식별을 위한 옵션입니다.
      - 해당 옵션이 설정되면, 제품 검색 시 설정된 동일 코드가 입력 되어야만 검색된 장치 리스트에 표시됩니다.

      #### 3) Network configuration

      - **Static** (default)
        - 고정 IP 주소 할당 모드를 선택합니다. 이 옵션을 선택하면 Local IP, Subnet mask, Gateway, DNS server 필드가 입력 가능한 상태로 활성화 됩니다. <br />공인 IP 주소(Public IP address) 및 사설 IP 주소(Private IP address)를 모두 설정 가능 합니다.
        - 만약 TCP 클라이언트나 TCP 혼합 모드를 사용하는 경우, 데이터를 전달 할 원격지 호스트가 IP 주소가 아닌 도메인 네임이라면 DNS 주소가 꼭 설정되어야 합니다.
      - **DHCP**
        - 공유기(NAT Router) 등에 내장된 DHCP 서버를 통해 자동으로 IP주소를 할당 받는 방법입니다. <br />사용자가 별도의 설정을 할 필요가 없으며 동일한 공유기를 통해 IP를 할당 받은 장치들은 서로 통신이 가능합니다. <br />공유기의 동적 IP 할당 범위에서 사설 IP 주소를 할당하는 경우가 일반적이나, 공인 IP 주소를 할당하는 경우도 있습니다.
        - DHCP 서버 측에서 IP 주소 및 Gateway 주소, Subnet mask, DNS 주소를 모두 할당해 주기 때문에 사용자가 별도의 설정을 수행할 필요는 없습니다.
     
    |                                                                                      |
    | ------------------------------------------------------------------------------------ |
    | ![](/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/options_tab.png) |
    | Figure: **Options Tab**                                                              |

      #### 1) TCP Timeout
      - TCP retransmission retry count 설정을 할 수 있습니다.
      - Value: 1~255
 
      #### 2) Status pin
      - flow control 기능인 DTR, DSR 기능을 활성화 합니다.

      #### 3) Serial debug
      - 해당 옵션이 설정되면 Debug UART를 통해 제품의 정보와 오류 상황 등이 출력됩니다.
      - Debug UART의 시리얼 설정은 **921600-8-N-1:None**으로 고정되어 있습니다.
      - **Enable with Data** 옵션 설정 시 S2E(Serial to Ethernet) 또는 E2S(Ethernet to Serial) 데이터를 모니터링 할 수 있습니다. 
      #### 4) Serial command mode
      - 해당 옵션이 체크되면, 시리얼 데이터 중 커맨드 모드 전환 코드 수신 시 데이터 전송 모드(GW mode)에서 시리얼 커맨드 모드(AT mode)로 전환됨, Default: Enabled (사용)
      - 시리얼 커맨드 모드에서는 2-byte로 구성된 시리얼 커맨드(AT CMD)를 이용하여 제품의 각종 설정 변경 및 모니터가 가능합니다.
      - 시리얼 커맨드 모드로 변경되면 기존에 연결되어 있던 TCP 연결(TCP connection)이 모두 종료(disconnect)됩니다.
      - Trigger code
        - 설정한 Trigger code를 시리얼 데이터로 입력하면 AT mode로 진입함
        - Default: [2B][2B][2B] (+++)
        - 각 byte의 값은 hex 코드만 인식합니다.

      #### 5) Connection password(TCP server mode only)
      - 최대 8-byte string
        - Default: Null(미사용)
      - Connection password는 TCP server mode에서만 활성화 할 수 있습니다. (TCP mixed mode에서 TCP Server로 연결할 때도 가능).
      - TCP client는 디바이스에 연결후 5s 이내로 설정한 Connection password를 보내지 않으면 TCP 연결이 자동으로 끊깁니다.

    |                                                                                      |
    | ------------------------------------------------------------------------------------ |
    | ![](/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/mqtt_options_tab.png) |
    | Figure: **MQTT Options Tab**                                                         |

      #### 1) MQTT Credentials
      - User name, Passworkd
        - 최대 128
        - 빈칸으로 설정 가능합니다

      #### 2) MQTT Option
      - Clinet ID
        - 최대 128
        - 빈칸으로 설정 가능하나 권장하지 않습니다.
      - Keep Alive
        - 0~65535 설정 가능
        - 미사용시 0으로 설정
      - QoS
        - 0,1,2 중 선택 가능

      #### 3) MQTT Topics
      - Publish Topic
        - 최대 128
      - Subscribe Topic
        - 최대 128
        - subscribe topics 최대 3개

    |                                                                                      |
    | ------------------------------------------------------------------------------------ |
    | ![](/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/certificate_manager_tab.png) |
    | Figure: **Certificate Tab**                                                          |

      #### 1) Root CA
      - Option : None, Optional, Verify 세 옵션중 선택 가능
      - Load File : 미리 저장한 Root CA file을 불러옴
      - Save to device : 불러온 파일을 디바이스에 저장

      #### 2) Client Certificate
      - Enable check box : 체크시 활성화
      - Load File : 미리 저장한 Root CA file을 불러옴
      - Save to device : 불러온 파일을 디바이스에 저장

      #### 3) Private Key
      - Load File : 미리 저장한 Root CA file을 불러옴
      - Save to device : 불러온 파일을 디바이스에 저장

#### ⑦ channel options

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| ![](/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/channel_tab.png) |
| Figure: **Channel Tab**                                                              |

  #### 1) Status & Serial Interface
  - Status
    - BOOT : Boot 진입 상태로 제품의 설정과 펌웨어 업데이트가 가능
    - OPEN : TCP 연결 성립 이전의 상태
    - CONNECT : TCP 연결이 성립된 상태
    - UPGRATE : 펌웨어 업데이트나 DHCP IP 할당 중인 상태
    - ATMODE : 시리얼 AT 커맨드 모드 상태
    - UDP : UDP 모드 상태
  - Serial Interface
    - W232N은 RS232 고정.

  #### 2) Operation mode
  - 디바이스의 네트워크 동작 모드를 설정
  - TCP 클라이언트 모드, TCP 서버 모드(default), TCP 클라이언트/서버 혼용 모드, UDP 모드의 네 가지 모드 중 사용자의 응용과 목적에 맞게 선택 가능
    - TCP Client
      - 지정한 목적지(TCP 서버)로 TCP 연결을 시도하고 연결 성공시 연결된 TCP 서버와 통신 가능
    - TCP Server
      - TCP 클라이언트의 연결 요청을 대기(listen)하고 클라이언트의 연결 요청이 수신되면 TCP 연결을 수립하여 연결 성공시 데이터 송/수신 가능
    - TCP MIX
      - 설정후 구동시 TCP 서버로 동작하고 TCP 클라이언트의 연결을 대기하고 있을 때, 시리얼 데이터가 입력되면 <br />TCP 서버모드를 종료하고 TCP 클라이언트 모드로 전환되어 입력한 Remote host IP와 Port로 연결을 시도하여 TCP 연결 수립<br />TCP 연결 이후에 데이터 송수신이 설정한 시간(Inactivity timer)동안 이뤄지지 않을 경우 TCP 서버와의 연결을 끊고 디바이스는 TCP MIX 모드의 초기 구동 상태인 TCP 서버 모드로 동작함<br />
      ![](/img/products/w232n/TCP_MIX.png)
    - UDP
      - 1:1 UDP 통신 모드
        - 설정된 원격지 호스트 주소(도메인 네임) 및 포트 번호로 통신합니다.
      - 1:N UDP Boradcast
        - Remote host IP를 192.168.x.255로 설정하면, 디바이스에 설정된 Remote port가 열려있는 192.168.x 대역의 장비들에게 데이터를 Boardcast 할 수 있음 
      -  1:N UDP 응답 모드
         -  Remote host IP를 0.0.0.0으로 설정시 사용 가능
        - 데이터를 보내온 목적지로 데이터를 전송 할 수 있음<br /> 목적지 주소는 또 다른 목적지에서 데이터가 수신 될 때 새로운 목적지 주소로 변경됨
        - 다수의 UDP 목적지에서 데이터를 보내오고, 이에 시리얼 장치가 응답하는 형태의 응용에서 활용 가능합니다.
  #### 3) Local port, Remote host / Port
  - Local port
    - 디바이스가 오픈하는 포트
  - Remote host
    - 디바이스가 클라이언트일 때 연결되는 목적지(destination)의 IP 즉, 서버의 IP
  - Remote port
    - 다바이스가 클라이언트일 때 연결되는 목적지(destination)의 포트 즉, 서버에서 오픈한 Port
  #### 4) Serial Options
  - Baud Rate
    - 300, 600, 1200, 1800, 2400, 4800, 9600, 14400, 19200, 28800, 38400, 57600, 115200(default), 230400 지원
  - Data bit
    - 7, 8(default) 지원
  - Parity
    - NONE(default), ODD, EVEN 지원
  - Stop Bit
    - 1(default), 2 지원
  - Flow Control
    - NONE(default): 흐름제어를 사용하지 않습니다.
    - XON/XOFF: 소프트웨어 흐름제어 (Software flow control)
    - CTS/RTS: 하드웨어 흐름제어 (Hardware flow control)
  #### 5) Serial data packing condition
  - 사용자의 조건에 따라 시리얼 데이터를 모아서 전송 할 수 있도록 다양한 시리얼 데이터 패킹 옵션 <br />활용시 한번에 전송해야 할 유저 커맨드 프레임이나 주기 데이터를 모아서 전송 가능
  - 적용 우선 순위는 Character => Size => Timer 이고 중복으로 설정 가능
  - Timer
    - 0~65535(ms), Default는 0(미사용)
    - 지정된 시간동안 데이터를 버퍼에 저장하다가 한번에 전송
  - Size
    - 0~255(byte), Default는 0(미사용)
    - 지정된 데이터 크기에 도달할 때 까지 데이터를 버퍼에 저장하다가 한번에 전송
  - Character
    - 1-byte 문자(Hex code), Default는 00(미사용)
    - 지정된 문자가 입력 될 때 까지 데이터를 버퍼에 저장하다가 지정한 문자가 데이터로 들어오면 지정 문자를 포함하여 한번에 전송<br />버퍼 크기 초과 시 지정 문자를 제외한 데이터 만을 전송합니다.
  #### 6) Timer interval
  - Inactivity timer(비활성 타이머)
    - 0 ~ 65535(s), Default는 0(미사용)
    - 비활성 타이머(Inactivity timer)가 설정되면, 마지막 데이터 전송 이후 부터 데이터 전송 없이 지정된 시간 경과 후 연결을 종료합니다.
    - UDP는 적용되지 않음
  - Reconnection interval(재연결 간격)
    - 0 ~ 65535(ms), Default는 3000(3초 적용)
    - 재연결 간격(Re-connection interval)은 TCP 클라이언트 동작(TCP MIX의 TCP 클라이언트 포함) 시, TCP 연결 재시도의 간격을 결정합니다.
    - TCP 연결 시도가 실패한 경우, 재연결 시도를 위해 필요한 옵션입니다.
    - 최소 1ms 이상 설정되어야 합니다.

  #### 7) TCP Keep-alive interval
- 해당 옵션이 체크되면, 제품이 TCP 모드(TCP 서버, TCP 클라이언트 및 TCP MIX 포함)로 동작 시 연결 상태 유지를 위한 연결 유지(Keep-Alive) 패킷이 전송됩니다.
- 연결 유지 패킷에 대한 응답이 없을 경우, 해당 TCP 연결은 종료됩니다. (Socket close / disconnect)
- 디바이스에서 한 번 이상 이더넷 패킷이 송신된 이후부터 연결 유지 패킷 전송이 시작됩니다.
- 이더넷 네트워크 장비는 원격지 장비의 물리적 단선을 감지 할 수 없으므로, 해당 옵션을 활성화하여 문제 상황에서 TCP 연결을 종료 할 수 있도록 설정하는 것이 좋습니다.<br />특히 TCP 서버 모드로 동작 할 경우, 연결 유지 패킷 전송 설정이 없다면 원격지 장비가 어떠한 이유로 물리적 단선 중에 종료/재연결을 수행했을 경우 기존 연결을 종료 할 수 없는 상황에 빠질 수 있습니다.
  - Initial interval
    - 0 ~ 65535(ms), Default는 7000(7초 적용)
    - 최초 연결 유지 패킷을 전송하기까지의 간격
  - Retry intercal
    - 0 ~ 65535(ms), Default는 5000(7초 적용)
    - 매 연결 유지 패킷 전송 시 사이의 간격
  #### 8) Timeout
  - 0 ~ 60000(ms), Default는 2000(2초 적용)
  - 지정한 시간까지 SSL 응답이 없으면 timeout을 발생시킴
  - SSL TCP 클라이언트 모드에서만 동작함