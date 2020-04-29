---
id: programmer_guide_kor
title: Programmer Guide(Kor)
date: 2020-04-29
---


## Content
# 개요

본 페이지는 사용자가 WIZ550S2E를 사용하기 위한 정보를 제공합니다.  
  *  Configuration tool을 이용한 WIZ550S2E 모듈의 설정값을 확인하거나 변경하는 방법

  - 사용자의 Main 컨트롤러에서 Serial 통신을 이용해 WIZ550S2E 모듈로 AT command를 전송하는 방법 및
    AT commands set에 대한 상세 정보

위 두 가지를 통해서 WIZ550S2E를 사용자의 장치와 원격지의 상대방 장치와 데이터를 교환 할 수 있는 중간 연결로로 사용 할
수 있습니다.

`사용자 Device or App <---- serial ----> WIZ550S2E <---- ethernet ----> 상대방
Device or App`  
**or**  
`사용자 Device or App <---- ethernet ----> WIZ550S2E <---- serial ----> 상대방
Device or App`

# WIZ550S2E 동작 개요

WIZ550S2E(이하 모듈)에 전원이 공급됨과 동시에 동작하는 상태를 Data Mode라고 합니다. Data Mode에서는
Configuration Tool에서 설정된 네트워크 환경 및 동작 방법을 따릅니다.  
이후 Serial로 모듈에게 AT Command Trigger Code(기본값 : +++)를 전송하여 AT Command
Mode로 진입 할 수 있습니다. Data Mode \<-\> AT Command Mode는 서로 독립적인 동작이라 AT
Command Mode 진입시 Data Mode에서 연결된 소켓은 해제가 됩니다. AT Command Mode 진입 후 사용자는
AT Command Set를 하여 환경설정(네트워크, 시리얼등) 및 소켓 생성을 통해 데이터를 교환 할 수 있습니다. AT
Command Mode에서 사용 중 "AT+MDATA\\r\\n"을 전송 하면 Data Mode로 전환 할 수 있습니다.
![](/document_framework/img/products/wiz550s2e/wiz550s2e_workigmode.png)

# Configuration Tool

## Description

![](/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/global_config.png)  
[WIZnet Configuration tool](/products/wiz550s2e/wiz550s2e_download)은
WIZ550S2E사용자를 위한 프로그램으로 손쉽게 모듈을 설정하여 serial to ethernet 통신을 가능 하도록 합니다.
그리고 java 기반으로 구현되어 대부분의 OS Platform에서 사용이 가능합니다. .jar 파일을 다운로드해서 Java
Virtual machine상에서 실행되도록 하면 됩니다.
[설치방법](https://github.com/Wiznet/WIZ550S2E)  
  
다음과 같은 두 가지 방법으로 실행할 수 있습니다.  
  - GUI환경에서 jar파일을 더블클릭하여 실행
     - ALZip과 같은 일부 압축 프로그램에서 jar파일을 압축파일로 인식한 경우, jar파일이 실행되지 않는 경우가 발생할 수 있습니다. 이런 경우에는 해당 프로그램의 환경설정을 통해 파일연결 설정을 변경(jar파일을 열지 않도록)합니다.
     - Linux 또는 Mac의 경우 jar파일에 다음과 같이 실행 퍼미션을 주어야 실행 됩니다.
        - chmod 0755 WIZ550S2E_Configuration_Tool.jar
  - 터미널에서 “java -jar WIZ550S2E_Configuration_Tool.jar” 명령을 입력하여 실행


WIZnet Configuration tool은 다음과 같이 크게 네개 부분으로 구성되어져 있습니다.

①Common Configuration 부분  
②Network Configuration 부분  
③Serial Configuration 부분  
④Option Configuration 부분  

-----

## Common Configurations

![](/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/common_config.png)  
### ①Search
Search 기능은 같은 LAN 상에 존재하는 모든 모듈을 검색하는 데 사용됩니다. UDP
브로드캐스트를 사용하여, 동일한 Subnet 상의 모든 모듈이 검색되면, 해당 모듈의 MAC Address가 표시
됩니다.

### ②Setting

본 기능은 모듈의 각종 옵션 또는 설정 값을 변경할 때 사용하는 기능 입니다. 모든 설정값 변경 또는 선택 후에 "Setting"
버튼을 눌러야 그 값이 모듈에 반영이 되고, 변경된 값은 모듈내의 EEPROM에 저장되어 모듈의 전원이 차단되는 경우에도 그 설정
값이 유지되게 됩니다. 설정 값을 변경하는 과정은 다음과 같습니다.  

    1. "Search Windows”에서 설정 값을 변경할 모듈의 MAC Address를 선택(클릭)하면, 
       해당 모듈에 저장되어 있는 설정 값이 각 필드에 표시 됩니다.
    2. 원하는 필드의 설정 값을 변경하고
    3. "Setting" 버튼을 누르면, 패스워드 입력창이 뜹니다.
      - 기본 패스워드는 "WIZnet" 입니다.

![](/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/password.png)

    4. "Setting Password"를 입력하고 OK 버튼을 누르면, configuration 작업이 완료되며,
    5. 변경된 configuration으로 초기화 됩니다. (모듈이 자동으로 re-booting 됨)
    6. 변경된 configuration을 확인하기 위해서는 Search 버튼을 눌러서 모듈을 다시 검색합니다.
 ### ③F/W Uploading

TFTP를 통하여 펌웨어를 업로드 합니다. "F/W Uploading" 버튼을 누르면 아래의 창이 뜨며, 설정 정보들을 입력한 뒤
"OK" 버튼을 누르면 업데이트가 진행됩니다.  
![](/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/tftp_server_info.png)

    Server IP : 
        TFTP 서버 IP
    Server Port : 
        TFTP 서버 Port (TFTP default Port : 69)
    File Name : 
        펌웨어 파일 이름
    Password : 
        설정 패스워드

☞ 현재 Configuration tool은 TFTP를 지원하지 않습니다. 그러므로 별도의 TFTP 서버 프로그램을 사용하여
펌웨어를 업로드 해야 합니다. 상세 업로드 가이드는 [다운로드
페이지](/products/wiz550s2e/wiz550s2e_download)에 있으니 참고 바랍니다.

### ④Reset

이 기능은 모듈을 Reset(재부팅) 하는 기능으로 설정 시 "Setting Password"를 요구합니다.

### ⑤Factory Reset

이 기능은 모든 설정을 factory default 설정으로 초기화 하는 기능으로 설정 시 "Setting Password"를
요구합니다. Factory default 값은 아래 표와 같습니다.  
^ Category ^ Item ^ Value ^

|             |                        |                   |
| ----------- | ---------------------- | ----------------- |
| **Network** | Local IP               | 192.168.11.100    |
| :::         | Local Gateway          | 192.168.11.1      |
| :::         | Local Subnet           | 255.255.255.0     |
| :::         | Local Port             | 5000              |
| :::         | Remote Port            | 5000              |
| :::         | Working Mode           | TCP Server        |
| :::         | Inactivity             | 0                 |
| :::         | Reconnection           | 1000              |
| **Serial**  | Baud Rate              | 115200            |
| :::         | Data Bits              | 8                 |
| :::         | Parity                 | NONE              |
| :::         | Stop Bits              | 1                 |
| :::         | Flow                   | NONE              |
| :::         | AT Command USE         | Enable            |
| :::         | Trigger Code           | 2B/ 2B / 2B       |
| :::         | Packing Condition Time | 0                 |
| :::         | Packing Condition Size | 0                 |
| :::         | Delimeter Length       | 0                 |
| :::         | Delimeter              | 2D / 2D / 2D / 2D |
| :::         | Delimeter Appendix     | 0                 |
| **Options** | Module Name            | WIZ550S2E         |
| :::         | Setting Password       | WIZnet            |
| :::         | Connection Password    | WIZnet            |
| :::         | DHCP USE               | Disable           |
| :::         | DNS USE                | Disable           |
| :::         | DNS Server IP          | 8.8.8.8           |

### ⑥Exit

Configuration tool 프로그램을 종료합니다.

### ⑦Search Window

"Search" 버튼을 선택하면, 동일 Subnet 상의 모든 모듈의 MAC Address가
### ⑨Firmware Version

펌웨어 버전을 표시합니다.

### ⑩Network Status

모듈의 네트워크 연결 상태를 표시합니다.

    Connected : 
        TCP 소켓이 연결된 상태
    Disconnected : 
        아무런 연결이 없는 상태
    UDP : 
        UDP 소켓이 생성된 상태

-----

## Network Configurations

![](/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/network_config.png)

### ①IP

모듈의 IP 정보를 설정하는 섹션이다.  

    IP: 
        모듈의 IP Address
    Gateway: 
        모듈의 Gateway Address
    Subnet mask: 
        모듈의 Subnet Mask
    Host IP: 
        모듈이 "Client mode","Mixed mode","UDP mode" 일 경우, 
        접속을 시도할 원격 서버 IP address

  
☞ If you are unclear about your Local IP, Subnet Mask, Gateway
information, you have to get this information from your network
administrator. If the IP address is not correct, IP collision or network
problems may occur.  
  
### ②Port

모듈의 Port 정보를 설정하는 섹션이다.

    Local port : 
        모듈의 port number
    Remote port : 
        모듈이 "Client mode","Mixed mode","UDP mode" 일 경우, 
        접속을 시도할 원격 서버 Port number

  
*Local Port의 경우 설정 된 port로 Working Mode의 소켓이 생성된다. TCP Server, Client,
Mixed 모두 해당 Port를 사용한다. Server의 경우 문제가 없지만, Clinet나 Mixed 로 모듈이 동작 할 경우
동일 Port를 사용하여 상대방에게 접속하기 때문에 최초 접속은 잘 이루어 지더라도 재접속 시도시 상대방의 환경에 따라 접근을
거부하는 경우도 있으니 주의 바란다. 만약 이럴경우 Local Port를 0으로 설정하면 모듈이 랜덤한 Port를 사용하여 접속을
시도 함으로 해결이 가능하다.*  
### ③Working Mode Client / server / mixed : 다음의 Network mode는 TCP
연결설정에 대한 분류를 의미한다. TCP Server 모드는 모듈이 연결 설정 과정에서 서버로 동작하는 것을 의미하고, 지정한
Port로 접속 시도가 오기를 기다린다. TCP Client 모드는 연결 설정 과정에서 Client로 동작한다는 것을 의미하며,
지정된(연결할) 서버 IP와 Port로 접속을 시도한다. Mixed 모드는 Server 모드와 Client 모드 모두 지원하는
것을 의미한다. 각각의 세부적인 통신 과정은 다음과 같다.
#### TCP server mode 통신

TCP 서버 모드는 모듈이 연결 설정을 기다리는 모드이다.  
모듈이 장착된 시리얼 장비의 현재 상태 확인이나 시리얼 장비에 특정 명령을 줄 필요가 있을 때, 관제센터의 시스템에서 연결을
시도하는 경우에 유용한 통신 모드이다. 즉, 모듈이 연결 대기 상태(Listen)로 유지되는 상태에서, 관제 센터의
시스템에 의해 관리가 필요할 때, 관제 센터의 시스템이 연결 요청(SYN)을 해서 연결을 설정(Establish)한 후,
데이터를 교환(Data Transaction)하고 그 후 연결을 끊는(FIN) 경우가 예가 될 것이다.

TCP 서버 모드 동작을 위해서는, Local IP, 서브넷, 게이트웨이 주소, Local 포트 번호 등 Network
configuration이 정상적으로 설정되어 있어야 한다.

데이터 전송은 다음의 절차에 따라 진행된다 :

    1. 호스트가 TCP Server 모드로 설정되어 있는 모듈로 연결을 시도한다.
    2. 일단 연결이 되면 데이터는 양방향으로 전송이 가능하다.
       (호스트 -> 모듈 / 모듈 -> 호스트)

#### TCP client mode 통신

TCP Client 모드는 모듈이 연결 설정을 시도하는 모드이다. TCP Client 모드 작동을 위해서는, Local IP,
서브넷, 게이트웨이 주소, 서버 IP, 서버 Port Number가 설정되어 있어야 한다. 이때, 서버 주소가 도메인
이름일 경우에는 DNS 기능을 활용한다. TCP Client 모드에서는 모듈에 전원이 인가되면 자동적으로 미리 설정된
서버 주소로 TCP 연결을 시도한다.

데이터 전송은 다음의 절차에 따라 진행된다 :

    1. TCP Client 모드로 동작하는 모듈은 전원이 인가되면 서버 IP로 연결을 시도한다.
    2. 서버와 연결된 후에는 양방향 데이터 전송이 가능하다.
       (호스트 -> 모듈 / 모듈 -> 호스트)

#### Mixed mode Communication

이 모드는 기본적으로 TCP Server 모드와 동일하다. 단, 상대방으로부터의 연결이 이루어지기 전에 시리얼 장비로부터 데이터가
수신되는 경우, 그 데이터를 특정 호스트에 전달할 필요가 있을 때 Mixed 모드를 사용한다. 따라서 Mixed 모드에서
Server 모드가 Client 모드보다 우선순위가 높다. Mixed 모드는 TCP Server 모드처럼 관제 센터에서 필요시에
장비에 접속해서 상태 확인이나 명령 수행을 하는 운용 환경을 기반으로 하되 접속하지 않은 경우라도 시리얼 장비에 긴급 상황이
발생하면 해당 내용을 별도의 서버에 전달할 필요가 있는 환경에서 유용한 모드이다.  
모듈이 TCP Server로서 동작하면서 상대방으로부터 연결 요청을 기다린다. 평상시에는 서버 모드로 작동하지만, 아무런 연결이
없는 상태에서 시리얼 데이터가 들어오면 클라이언트 모드로 변경되고, 해당 데이터가 서버 IP에 보내진다.
#### UDP mode Communication

UDP 모드에서는 TCP와 같은 연결 과정이 없으므로, 상대방의 IP주소와 포트 번호만 설정한 후 데이터 전송이 가능하다.  

### ④Timer

#### Inactivity

연결 후 설정된 Inactivity time 동안 아무런 데이터 전송이 없으면, 연결이 자동 종료 된다. 초기값은 '0'이며,
'0'으로 설정하면 이 기능은 비활성화 된다. 즉 데이터 전송이 없더라도 연결은 유지하며, 별도로 연결 종료 명령(Close)을
내려야 연결이 종료되는 것이 Defatult 설정이다.  
이 기능은 둘 이상의 시스템(또는 관리자)이 모듈이 장착된 시리얼 장비에 접속해서 상태를 확인할 필요가 있을 때인데, 한
시스템에서 연결을 계속 유지하고 있으면 다른 시스템에서 접속할 수 없기 때문에 일정 시간동안 데이터 교환이
없으면 그 연결을 해제해서 다른 시스템에 접속할 수 있도록 하는 것이다.  
또 다른 경우는 서버 시스템이 비정상 종료된 경우이다. 이때 모듈은 이전 연결을 계속 유지하고 있기 때문에 서버 시스템에서
재접속을 시도해도 연결이 되지 않는다. 이런 경우 Inactivity Time을 설정해두면, 모듈이 자체적으로
연결을 끊고 연결 대기 상태로 들어가기 때문에 유용하게 사용될 수 있다.  

#### Reconnection

모듈이 "Client mode" 혹은 "Mixed mode" 일 때, 연결을 시도하는 Interval 시간이다.  

-----

## Serial Configurations

![](/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/serial_config.png)

### ①USART

선택된 모듈의 시리얼 정보가 표시된다.  
시리얼 장비의 시리얼 환경에 맞추어서 모듈의 시리얼 설정을 변경하기 위해 이 기능을 사용한다.

    Baud Rate : 
        모듈의 Baud Rate
    Data Bits : 
        모듈의 Data Bits
    Parity : 
        모듈의 Parity Bits
    Stop Bits : 
        모듈의 stop Bits
    Flow : 
        모듈의 Flow Control & RS422/RS485

### ②AT Command

이 기능은 모듈을 시리얼 통신을 통하여 설정하는 기능을 활성화/비활성화 하는 기능이며, 시리얼 설정 모드로 들어가기 위한
Trigger Code를 Hex 값으로 지정한다.
### ③Packing Conditions

시리얼에서 수신한 데이터를 어떤 단위로 모아서 Ethernet 패킷화 할지를 설정하는 기능이다.  
모듈은 임의로 Serial Buffer를 체크해서 그 동안 수신한 데이터를 하나의 Ethernet 패킷에 실어서 보낸 것을
default로 하고 있기 때문에, 시리얼 장비로부터의 데이터 길이가 일정하지 않게 전송될 수 있고, 이러한 상황이 고객의
어플리케이션에 따라 잘못된 데이터로 오류 처리하는 경우가 생길 수 있다. 이러한 문제를 해결하기 위해서 시리얼
장비로부터 수신한 데이터를 사용자가 원하는 조건에 따라 하나의 Ethernet 패킷으로 만들어 줄 수 있다.  
WIZ550S2E는 Time, Size, Character의 3가지의 조건을 제공한다.

    Time (0 ~ 65535 ms, 값이 '0'이면 옵션 비 활성화) :
        지정된 시간 동안 데이터 수신이 없으면, 시리얼 버퍼에 입력된 데이터를 한꺼번에 
        Ethernet 패킷으로 만들어서 전송한다. 만약 지정된 시간 내에 시리얼 장비에서 새로운 데이터가 
        수신되면 시간은 다시 계산되며, 수신 데이터는 시리얼 버퍼에 저장한다. 시리얼 장비에서 
        수신되는 데이터가 가변 길이이고, 특정한 종단문자가 없을 경우에 프레임 단위로 서버 장비에 
        데이터를 일괄 전달할 때 유용하게 사용할 수 있다.       
    Size (0 ~ 255 byte, 값이 '0'이면 옵션 비 활성화) :
        시리얼 버퍼에 일정한 길이의 데이터가 저장될 때까지 기다렸다가 해당 길이의 데이터가 모이면 
        한번에 Ethernet 패킷으로 만들어서 전송한다.       
    Character
        지정된 특정 Character가 들어올 때까지 시리얼 버퍼에 데이터를 모았다가 한번에 Ethernet 
        패킷을 만들어서 전송한다. 특정 Character는 Hex 값으로 4개까지 지정가능하며, Length에 
        설정된 값에 따라 유효 Character 수가 결졍된다. Length가 0 일 경우는 기능이 비활성활 된다. 
        Appendix는 특정 Character 뒤에 Appendix에 설정된 값의 데이터까지 포함하여 Ethernet 
        패킷으로 만들어 전송하며, 데이터 수신이 없을 경우 데이터 수신을 기다린다.

-----

## Options Configurations

![](/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/option_config.png)

### ①Module Name

각 모듈에 설정된 이름이 표시 된다.  

### ②Password

이 기능은 인증을 위한 패스워드를 설정하는 섹션이다.  
Setting Password :

``` 
    "Setting", "F/W Uploading", "Reset", "Factory Reset" 시 인증을 위한 패스워드
Connection Password: 
    TCP 서버일 때, Client 접속 인증을 위한 패스워드.
    (client는 모듈에 접속한 후 설정된 password를 전송해야 접속이 완료 된다.)
```

### ③DHCP

IP 설정 모드를 선택한다. "Use DHCP"를 선택하면 DHCP모드로 동작하며, 선택 해제하면 Static 모드로 동작한다.

    Static : 
        모듈의 IP를 고정 IP로 설정하기 위한 옵션으로, 
        먼저 "Search Windows"에서 'Static mode'를 사용할 보드의 MAC Address를 선택하면 
        IP 설정 섹션이 활성화 되며, 
        설정하고자 하는 IP 주소를 입력한 후 
        "Setting" 버튼을 누르면 해당 보드의 IP 정보가 설정된다.
    DHCP : 
        모듈의 IP를 DHCP를 통해서 할당 받아 설정하기 위한 옵션이다.

### ④DNS

DNS 기능이 필요할 경우, 이 옵션을 체크하고 DNS 서버 IP Address와 연결할 서버의 도메인 네임을 입력한다.
DNS(Domain Name System)는 도메인 네임과 이에 대응하는 IP Address에 대한 데이터베이스를 지닌
시스템으로, 접속 대상이 IP가 아닌 도메인 네임으로 요구될 때 모듈의 DNS 기능을 활용할 수 있다. DNS
Server IP에는 이미 알고 있는 Address나 각 ISP(Internet Service Provider)에서 제공하는
DNS 서버 Address를 입력하고, Domain란에는 연결할 상대방 시스템의 도메인 네임을 입력해야 한다.
(예:www.wiznet.co.kr)  
서버의 IP가 유동적이거나, 서버가 도메인 이름을 보유하고 있는 경우에 DNS 기능을 사용하면 서버의 IP 변화에 일일이 대응하지
않아도 되므로 유용하게 사용될 수 있는 기능이다. 만약 위와 같은 환경이 아니라면 반드시 DNS 기능을 사용할 필요는 없다.

-----
# WIZ550S2E AT Command Set

이 장에서는 WIZ550S2E의 AT commands 목록과 개별 command에 대한 상세 정보를 제공한다. AT
command와 해당 인자들은 UART 라인을 통해서 입력된다. 모든 명령어들은 문자열 "AT"로 시작하고 그외 다른 문자열로
시작하는 경우에는 에러가 리턴된다. 명령과 인자들은 모두가 ASCII 문자셋이다. 즉, 사용자가 "AT+NSTAT"를 입력하고자
한다면 ASCII 문자 'A', 'T', '+', 'N', 'S', 'T', 'A', 'T'와 CR(0x0D),
LF(0x0A)를 순차적으로 입력해야한다. \<WRAP round important 40%\> **모든 명령어는 항상
CR(0x0D), LF(0x0A)로 끝나야한다.** \</WRAP\> 어떤 인자들은 필수항목이고 또 다른 항목들은 옵션이다.
인자들은 명령어 표에 제시된 것과 같은 순서로 입력해야한다. 옵션 항목들이 사용하지 않는 경우라 할지라도 콤마 구분자는
반드시 명령어에 포함해야한다. 대부분의 경우에, 명령어가 유효한 경우에 WIZ550S2E는 \[S\]를 응답하고, 잘못된 명령에는
\[F\]를 응답한다. WIZ550S2E가 내 보낼 수 있는 응답은
[Responses](/products/wiz550s2e/wiz550s2epg_kr&#responses)에 표시되어져있다.

아래는 사용자가 입력할 수 있는 예제들이다. 예제에서 볼 수 있는 것처럼, WIZ550S2E의 응답에도 항상 "\\r\\n"가
존재한다.

| 사용자의 입력       | AT\\r\\n (0x61 0x74 0x0d 0x0a)         |
| ------------- | -------------------------------------- |
| WIZ550S2E의 응답 | \[S\]\\r\\n (0x5b 0x53 0x5d 0x0d 0x0a) |

-----

## Responses

### Response Format

    [(Type),(Id),(Param1),(Param2),(Param3),(Param4),(Param5),(Param6)]↓(Data)↓

  - (Type): 응답의 종류. 'S', 'D', 'F', 'W', 'R', 'V' 중의 하나.
  - (Id): 소켓 구분자. 이 인자는 비동기 모드일 때 필수항목이다.
  - (Param1) \~ (Param6): 모듈의 각종 설정값을 확인할 때 모듈에 의해서 필수적으로 포함된다.
  - ↓: 이것은 엔터키를 의미하며, 그 실제값은 CR(0x0D), LF(0x0A)이다.
  - (Data): 가변길이의 많은 데이터가 필요할 때, 응답 종류 'D'와 'R'에 뒤따라서 'Data'가 출력된다.
  응답 종류별 세부적인 내용은 다음과 같다.

<table>
<thead>
<tr class="header">
<th>Response</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Success Response</td>
<td>[S,(Id),(Param1),(Param2),(Param3),(Param4),(Param5),(Param6)]↓<br />
명령 수행 성공. 필요한 경우, 인자를 포함한 응답</td>
</tr>
<tr class="even">
<td>Success Dump Response</td>
<td>[D,(Id),(Size)]↓(Data)↓<br />
명령 수행 성공. 대용량 데이터를 포함한 응답.</td>
</tr>
<tr class="odd">
<td>Fail Response</td>
<td>[F,(Id),(ErrorCode),(ErrorParam)]↓<br />
명령 수행 실패, 필요한 경우 에러코드 포함한 응답</td>
</tr>
<tr class="even">
<td>Wait Response</td>
<td>[W,(Id)]↓<br />
비동기 모드로 명령이 수행중임. 완료시 ID를 이용해서 표시함.</td>
</tr>
<tr class="odd">
<td>Data Receive Response</td>
<td>[R,(SockId),(ReceivedSize),(SrcIP),(SrcPort)]↓(Data)↓<br />
데이터 수신을 알림. 소켓 ID로 수신 대상 구분.</td>
</tr>
<tr class="even">
<td>Event Response</td>
<td>[V,(Id),(EventCode)]↓<br />
이벤트 발생 알림.</td>
</tr>
</tbody>
</table>

  - (Id): 0 - 시스템 ID or 0\~n - 소켓 지정자
  - (Size): 출력한 데이터의 길이
  - (ErrorCode): 에러 코드
  - (ErrorParam): 에러 코드를 위한 Description 값
  - (SockId): 데이터를 수신한 소켓의 소켓 구분자
  - (ReceivedSize): 수신 데이터의 사이즈
  - (SrcIP): 송신자의 IP 주소. 이 인자는 UDP 소켓의 경우에는 필수 항목이지만, TCP 소켓의 경우에는 생략될 수
    있다.
  - (SrcPort): 송신자 소켓의 포트 넘버. UDP 소켓의 경우에는 필수 항목이다. 
  - (EventCode): 어떤 이벤트가 발생했는지에 대한 표시자.

  

### Error Code

#### General Error Code

| Code | Error Name            | Description   |
| ---- | --------------------- | ------------- |
| 0    | ERR\_Undefined        | 정의되지 않은 오류    |
| 1    | ERR\_WrongOperator    | 잘못된 명령어       |
| 2    | ERR\_WrongCommandSign | 잘못된 명령 부호     |
| 3    | ERR\_WrongArguments   | 잘못된 인자들       |
| 4    | ERR\_OurofRange       | 지정범위를 벗어난 인자들 |
| 5    | ERR\_FuncDisabled     | 지정된 함수 사용불가   |
| 6    | ERR\_NotAllowed       | 허용되지 않음       |
| 7    | ERR\_CommandBusy      | 명령 수행중        |
| 8    | ERR\_CommandTimeout   | 명령 타임아웃       |
#### Socket Error Code

| Code | Error Name                | Description         |
| ---- | ------------------------- | ------------------- |
| 10   | ERR\_SockNotAvail         | 소켓이 가용하지 않음         |
| 11   | ERR\_SockClosed           | 소켓이 닫힘              |
| 12   | ERR\_SockPortNumNotAvail  | 지정된 포트 넘버가 사용할 수 없음 |
| 13   | ERR\_SockNotConnected     | 연결되지 않음             |
| 14   | ERR\_SockWrongAddr        | 잘못된 주소              |
| 15   | ERR\_SockDataNotAvailable | 사용가능한 데이터가 없음       |

#### Other Error Code

| Code | Error Name     | Description    |
| ---- | -------------- | -------------- |
| 20   | ERR\_NoFreeMem | No Free Memory |

  
### Event Code 

#### Socket Event Code

| Code | Socket Event Name       | Description                        |
| ---- | ----------------------- | ---------------------------------- |
| 0    | EVENT\_SockConnected    | 연결됨. 소켓 상태가 Listen 상태에서 연결상태로 변경됨  |
| 1    | EVENT\_SockDisconnected | 연결해제됨. 소켓 상태가 연결상태에서 연결해제상태로 변경됨   |
| 2    | EVENT\_SockClosed       | 소켓 닫힘. 소켓 상태가 닫힘으로 바뀜              |
| 3    | EVENT\_SockDataRcvd     | 데이터를 수신함. 연결된 소켓이 상대방으로부터 데이터를 수신함 |

-----

## Network Commands

<table>
<thead>
<tr class="header">
<th>Command</th>
<th>Prop.</th>
<th>Input Parameter</th>
<th>Response</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="/products/wiz550s2e/wiz550s2epg_kr/atcomm&amp;#at+nset">AT+NSET</a></td>
<td>None or ?</td>
<td></td>
<td>[S,,S,(IP),(SN),(GW),(DNS)]</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>:::</td>
<td>[S,,D]</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>=</td>
<td>S,(IP),(SN),(GW),(DNS)</td>
<td>[S]</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>D</td>
<td>[S]</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>-</td>
<td><em>num</em>,Param</td>
<td>[S]</td>
</tr>
<tr class="even">
<td><a href="/products/wiz550s2e/wiz550s2epg_kr/atcomm&amp;#at+nstat">AT+NSTAT</a></td>
<td>None or ?</td>
<td></td>
<td>[S,,S/D,(IP),(SN),(GW),(DNS)]</td>
</tr>
<tr class="odd">
<td><a href="/products/wiz550s2e/wiz550s2epg_kr/atcomm&amp;#at+nmac">AT+NMAC</a></td>
<td>None or ?</td>
<td></td>
<td>[S,,(MAC)]</td>
</tr>
<tr class="even">
<td>:::</td>
<td>=</td>
<td>(MAC)</td>
<td>[S]</td>
</tr>
<tr class="odd">
<td><a href="/products/wiz550s2e/wiz550s2epg_kr/atcomm&amp;#at+nopen">AT+NOPEN</a></td>
<td>=</td>
<td>S/C/U,(SrcPort),(DstIP),(DstPort)</td>
<td>[W,(SockId)]<br />
[S,(SockId)]</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>A</td>
<td>:::</td>
</tr>
<tr class="odd">
<td><a href="/products/wiz550s2e/wiz550s2epg_kr/atcomm&amp;#at+nclose">AT+NCLOSE</a></td>
<td>=</td>
<td>(SockId)</td>
<td>[W,(SockId)]<br />
[S,(SockId)]</td>
</tr>
<tr class="even">
<td><a href="/products/wiz550s2e/wiz550s2epg_kr/atcomm&amp;#at+nsend">AT+NSEND</a></td>
<td>=</td>
<td>(SockId),(size),(DstIP),(DstPort)</td>
<td>[W,(SockId)]<br />
[S,(SockId)]</td>
</tr>
<tr class="odd">
<td><a href="/products/wiz550s2e/wiz550s2epg_kr/atcomm&amp;#at+nsock">AT+NSOCK</a></td>
<td>None or ?</td>
<td></td>
<td>[D,,(Size)]↓(Data)</td>
</tr>
<tr class="even">
<td>:::</td>
<td>=</td>
<td>(SockId)</td>
<td>[S,,S/C/U,(SrcPort),(DstIP),(DstPort)]</td>
</tr>
<tr class="odd">
<td><a href="/products/wiz550s2e/wiz550s2epg_kr/atcomm&amp;#at+nmode">AT+NMODE</a></td>
<td>=</td>
<td>S/C/U/M,(SrcPort),(DstIP),(DstPort)</td>
<td>[S]</td>
</tr>
</tbody>
</table>

-----
>

    AT+NSET 
  
  

  - **Format:**
>

    AT+NSET=<DHCP>,<IP>,<SN>,<GW>



  - **Meaning:** 네트워크 정보를 확인하거나 설정한다

 \<DHCP\>: 정적 IP / 유동 IP 사용 지정

| Parameter | Meaning              |
| --------- | -------------------- |
| S         | DHCP Off, Static     |
| D         | DHCP On, DHCP Client |

\<IP\>: IP 주소 (Optional)  
\<SN\>: 서브넷 마스크 (Optional)  
\<GW\>: 게이트웨이 주소 (Optional) \</WRAP\>\</WRAP\>

  - **Response:**

>

    [S]

-----



  - ***Example 1:***

*  `AT+NSET\r\n` `AT+NSET?\r\n`


  - ***Meaning:*** *현재 설정된 네트워크 정보를 읽어온다*

* 응답에 담겨진 주소(IP 주소, 서브넷, 게이트웨이 주소)는 실제
주소와 다르고 메모리에 저장된 주소입니다. 특히, DHCP 모드가 켜져 있을 때는 대개 실제 주소와 다릅니다.

  - ***Response:***


`[S,,S,192.168.11.100,255.255.255.0,192.168.11.1,8.8.8.8]
` `[S,,D]
`

  - ***Example 2:***

 `AT+NSET-2,192.168.11.110\r\n`


  - ***Meaning:*** *현재 설정된 네트워크 정보중 두번째 인자인 IP 주소만 지정된 값으로 변경한다*



  - ***Response:***
>

    [S]

-----
>

    AT+NSTAT  
  
  
\* **Format:** 

    AT+NSTAT

    AT+NSTAT?



  - **Meaning:** 현재 네트워크 상태값을 표시한다



  - **Response:**

>

    [S,,<DHCP>,<IP>,<SN>,<GW>,<DNS>]

-----


  - ***Example 1:***

 `AT+NSTAT\r\n` `AT+NSTAT?\r\n`


  - ***Meaning:*** *현재 네트워크 상태값을 표시한다*

<!-- end list -->

  - ***Response:***

>

    [S,,S,192.168.11.100,255.255.255.0,192.168.11.1,8.8.8.8]
    [S,,D]


-----
>

    AT+NMAC  
  
  
\* **Format:** 

    AT+NMAC

    AT+NMAC?

    AT+NMAC=<MAC>



  - **Meaning:** 모듈의 맥주소를 확인하거나 설정한다.



  - **Response:**

>

    [S,,<MAC>]

    [S]

-----



  - ***Example 1:***
 >
 
    AT+NMAC=00:08:dc:1d:bb:8b\r\n`


  - ***Meaning:*** *모듈의 맥주소를 지정된 값으로 변경한다*

<!-- end list -->

  - ***Response:***
>

     [S]


  - ***Example 2:***
>
   
     AT+NMAC\r\n` `AT+NMAC?\r\n`


  - ***Meaning:*** *현재 모듈의 맥주소를 표시한다*

<!-- end list -->

  - ***Response:***
>

     [S,,00:08:dc:1d:bb:8a]


-----
>

    AT+NOPEN ====
  
  
  
\* **Format:** 

    AT+NOPEN=<SockType>,<SrcPort>,<DstIP>,<DstPort>



  - **Meaning:** 소켓 초기화. 지정된 인자를 이용해서 소켓을 생성한다

\<SockType\>: Socket Type

| Parameter | Meaning           |
| --------- | ----------------- |
| S         | TCP Server Socket |
| C         | TCP Client Socket |
| U         | UDP Socket        |

\<SrcPort\>: Local Port Number  
\<DstIP\>: Destination IP Address  
\<DstPort\>: Destination Port Number \</WRAP\>\</WRAP\>

  - **Response:**

>

    [W,(SockId)]

    [S,(SockId)]

-----


  - ***Example 1:***

>

    AT+NOPEN=C,3000,192.168.11.100,3000\r\n

  - ***Meaning:*** *지정된 값을 이용해서 Client 소켓을 생성한다*

<!-- end list -->

  - ***Response:***
>

     [W,0]
     [S,0]
     [W,0]
     [F,,1]


  - ***Example 2:***
>

    AT+NOPEN=S,5000,,


  - ***Meaning:*** *지정된 포트 넘버로 Server 소켓을 생성한다*

<!-- end list -->

  - ***Response:***
>

    [S,,0]


-----
>

    AT+NCLOSE  
  
  
\* **Format:** 

    AT+NCLOSE=(SockId)



  - **Meaning:** 지정된 ID의 소켓을 종료한다

 \<SockId\>: Socket ID  
현재 AT+Command Mode에서 운용 될 수 있는 소켓은 기본적으로 한개 이다. 그래서 Sock ID는 0이다.


  - **Response:**

>

    [W,(SockId)]

    [S,(SockId)]

-----


  - ***Example 1:***
>

    AT+NCLOSE=0\r\n` \</WRAP\>\</WRAP\> *

  - ***Meaning:*** // 데이터 통신용 소켓을 종료한다//

<!-- end list -->

  - ***Response:***
>

    [W,0]
    [S,0]
    [F,,11]


-----
>

     AT+NSEND 
  
\* **Format:** 

    AT+NSEND=<SockId>,<size>,<DstIP>,<DstPort>



  - **Meaning:** 연결된 소켓을 통해서 데이터를 전송한다

\<SockId\>: Socket ID  
\<size\>: 보낼 데이터 크기  
\<DstIP\>: 목적지 IP 주소  

  - **Response:**
>

    [W,(SockId)]

    [S,(SockId)]

-----



  - ***Example 1:***
>

     AT+NSEND=0,4

  - ***Meaning:*** *TCP 모드인 경우, 목적지의 IP 주소와 포트 넘버를 지정하지 않는다*

<!-- end list -->

  - ***Response:***
>

     [W,0]
     [S,0]


  - ***Example 2: 데이터를 받는 형태***

![](/products/wiz550s2e/recieve.png)  
위 그림은 "AT+NOPEN=S,5000,,"로 소켓을 생성하고, Client가 모듈에 접속한 상태에서 모듈에게 "Hello
World"를 전송한 그림이다. 모듈은 받은 데이터를 아래와 같이 표시함을 알 수 있다. [R,0,11]
Hello World


-----
>

    AT+NSOCK 
 
  
  
\* **Format:** 

    AT+NSOCK

    AT+NSOCK?

    AT+NSOCK=<SockId>



  - **Meaning:** AT Command Mode에서 생성된 소켓의 정보를 읽어 온다.

\<SockId\>: Socket ID  
현재 AT+Command Mode에서 운용 될 수 있는 소켓은 기본적으로 한개 이다. 그래서 Sock ID는 0이다.



  - **Response:**

>

    [D,,<Size>]
    [<Data>]

-----

  - ***Example 1: "AT+NOPEN=C,5000,192.168.0.3,5000"으로 소켓을 생성한 경우***

`AT+NSOCK\r\n` 

  - ***Meaning:*** *AT Command Mode에서 생성된 소켓의 정보를 읽어 온다.*

<!-- end list -->

  - ***Response:***
>

    [D,,25]
    0,C,5000,192.168.0.3,5000


  - ***Example 2: 소켓을 생성하지 않을 경우***

 `AT+NSOCK\r\n` 

  - ***Meaning:*** *AT Command Mode에서 생성된 소켓의 정보를 읽어 온다.*

<!-- end list -->

  - ***Response:***
>

     [D,,0]


-----
>

    AT+NMODE   
  
  
\* **Notice:** **이 기능은 v1.0.3에서 추가 되었으며,
v1.1.5 부터는 AT+MMODE로 이름이 변경 되었습니다.**

  - **Format:**
>

    AT+NSOCK=S/C/U/M,<SrcPort>,<DstIP><DstPort>



  - **Meaning:** Module의 네트워크 정보를 변경(자동으로 EEPROM에 저장)

 S/C/U/M: Working Mode  
S = Server, C = Client, U = UDP, M = Mixed TCP(Server/Client)



  - **Response:**

>

    [S]

-----



  - ***Example 1: 모듈의 네트워크 정보를 Client, 로컬 포트 5000, 서버(Remote)IP
    192.168.0.3, 서버(Remote)포트 5000으로 변경하고 싶은 경우***

 `AT+NMODE=C,5000,192.168.0.3,5000\r\n`


  - ***Meaning:*** *모듈의 네트워크 정보를 Client, 로컬 포트 5000, 서버(Remote)IP
    192.168.0.3, 서버(Remote)포트 5000으로 변경/저장*

<!-- end list -->

  - ***Response:***
>

     [S]


-----

## Management Commands

| Command                                                           | Prop.     | Input Parameter                          | Response                                        |
| ----------------------------------------------------------------- | --------- | ---------------------------------------- | ----------------------------------------------- |
| [AT](/products/wiz550s2e/wiz550s2epg_kr/atcomm&#at)               | None      |                                          | \[S\]                                           |
| :::                                                               | ?         | :::                                      | \[D,,(Size)\]↓(Data)                            |
| [AT+MSTAT](/products/wiz550s2e/wiz550s2epg_kr/atcomm&#at+mstat)   | None or ? |                                          | \[S,,(Version)\]                                |
| [AT+MUSART](/products/wiz550s2e/wiz550s2epg_kr/atcomm&#at+musart) | None or ? |                                          | \[S,,(BR),(W),(P),(S),(F)\]                     |
| :::                                                               | \=        | (BR),(W),(P),(S),(F)                     | \[S\]                                           |
| :::                                                               | \-        | *num*,Param                              | \[S\]                                           |
| [AT+MSAVE](/products/wiz550s2e/wiz550s2epg_kr/atcomm&#at+msave)   | None      |                                          | \[S\]                                           |
| [AT+MRST](/products/wiz550s2e/wiz550s2epg_kr/atcomm&#at+mrst)     | None      |                                          | \[S\]                                           |
| [AT+MDATA](/products/wiz550s2e/wiz550s2epg_kr/atcomm&#at+mdata)   | None      |                                          | \[S\]                                           |
| [AT+MMODE](/products/wiz550s2e/wiz550s2epg_kr/atcomm&#at+mmode)   | None or ? |                                          | \[S,,(S/C/U/M/Q)),(SrcPort),(DstIP),(DstPort)\] |
| :::                                                               | \=        | (S/C/U/M),(SrcPort),(DstIP),(DstPort)    | \[S\]                                           |
| [AT+MPASS](/products/wiz550s2e/wiz550s2epg_kr/atcomm&#at+mpass)   | None or ? |                                          | \[S,,(Setting Password),(Connection Password)\] |
| :::                                                               | \=        | (Setting Password),(Connection Password) | \[S\]                                           |
| [AT+MNAME](/products/wiz550s2e/wiz550s2epg_kr/atcomm&#at+mname)   | None or ? |                                          | \[S,,(Module Name)\]                            |
| :::                                                               | \=        | (Module Name)                            | \[S\]                                           |

-----
## AT  
  
  
\* **Format:** 

>

    AT




  - **Meaning:** AT 커맨드 모드인지 체크한다



  - **Response:**

>

    [S]



-----

>
   
     AT+MSTAT ====

  
\* **Format:** 

    AT+MSTAT

    AT+MSTAT?


  - **Meaning:** 현재 펌웨어 버전 정보를 읽어온다



  - **Response:**

>

    [S,,<Version>]



-----

>

     AT+MUSART 

  
  
\* **Format:** 

    AT+MUSART=<BR>,<W>,<P>,<S>,<F>



  - **Meaning:** 시리얼 설정값을 읽어오거나 새로운 설정값을 지정한다

 Baud rate  


|  Parameter      |     Meaning      |
| ------ | --------- |
| 300    | 300bps    |
| 600    | 600bps    |
| 1200   | 1200bps   |
| 2400   | 2400bps   |
| 4800   | 4800bps   |
| 9600   | 9600bps   |
| 19200  | 19200bps  |
| 38400  | 38400bps  |
| 57600  | 57600bps  |
| 115200 | 115200bps |
| 230400 | 230400bps |

Word length  
^ Parameter ^ Meaning ^

|   |        |
| - | ------ |
| 7 | 7 bits |
| 8 | 8 bits |

 Parity bit  
^ Parameter ^ Meaning ^

|   |      |
| - | ---- |
| N | NONE |
| O | ODD  |
| E | EVEN |

\<S\>: Stop bit  
^ Parameter ^ Meaning ^

|   |        |
| - | ------ |
| 1 | 1 bits |
| 2 | 2 bits |

\<F\>: Flow Control  
^ Parameter ^ Meaning ^

|   |         |
| - | ------- |
| 0 | NONE    |
| 1 | RTS/CTS |
| 2 | RS422   |
| 3 | RS485   |



  - **Response:**

>

    [S,,<BR>,( <W>, <P>, <S> ) <F>]

-----

  - **Example1:**

>

    AT+MUSART\r\n

    AT+MUSART?\r\n



  - **Meaning:** 현재 시리얼 설정값을 표시한다



  - **Response:**

>

    [S,,115200,8,N,1,0]



  - **Example2:**

>


    AT+MUSART=,,E,,0\r\n



  - **Meaning:** 새로운 시리얼 설정값을 지정한다. 공백 필드는 변경하지 않고 Parity, Flow control만
    변경한다



  - **Response:**

>

    [S]



-----

>

    AT+MSAVE 
  
  
\* **Format:** 

    AT+MSAVE


  - **Meaning:** 설정 값을 저장한다. 

AT+MUSART, AT+NSET을 통해서 설정 된 값들은(AT+NMAC
제외) 기본적으로 모듈이 리셋이 되기 전까지만 가지고 있다.(Data Mode에서도 해당 설정 값을 공유하고 있다.
Configuration Tool에서 Search를 통해서 확인)하지만, 모듈이 리셋이 되면 **설정 전의 값**으로 돌아간다.
하지만, 사용자가 해당 커맨드(AT+MSAVE)를 통해서 설정한 값을 저장하여 모듈이 리셋이 되더라도 변하지 않게 할 수
있다. 즉, Configuration Tool에서 Setting 기능과 같다.


  - **Response:**

>

    [S]



-----

>

    AT+MRST 
  
  
\* **Format:** 

    AT+MRST



  - **Meaning:** 모듈을 Reset한다.

<!-- end list -->

  - **Response:**

>

    [S]


-----
>
 
    AT+MDATA  
  
  
\* **Format:** 

    AT+MDATA



  - **Meaning:** AT 커맨드 모드에서 데이터 모드로 전환한다



  - **Response:**

>

    [S]



-----

>

    AT+MMODE
  
  
\* **Notice:** **이 기능은 v1.0.3에서 추가 되었으며,
v1.1.5 부터는 AT+MMODE로 이름이 변경 되었습니다.**  
**v1.2.0 부터 파라메타 Q(MQTT)가 추가 되었습니다.** 

  - **Format:**

>

    AT+MMODE

    AT+MMODE?

    AT+MMODE=S/C/U/M/Q,<SrcPort>,<DstIP>,<DstPort>



  - **Meaning:** 데이터 모드에서의 동작 환경을 확인 하거나 설정한다.



  - **Response:**

>

    [S,,S/C/U/M/Q,<SrcPort>,<DstIP>,<DstPort>]

    [S,,S/C/U/M/Q,<SrcPort>,<DstIP>,<DstPort>]

    [S]



-----

>

    AT+MPASS   
  
  
\* **Notice:**  **이 기능은 v1.1.5부터 추가
되었습니다.** 

  - **Format:**

>

    AT+MPASS

    AT+MPASS?

    AT+MPASS=<Setting Password>,<Connection Password>



  - **Meaning:** 모듈의 설정 비밀번호와 연결 비밀번호를 확인 하거나 설정 한다.


  - **Response:**

>

    [S,,<Setting Password>,<Connection Password>]

    [S,,<Setting Password>,<Connection Password>]

    [S]



-----

>

     AT+MNAME   
  
  
\* **Notice:** **이 기능은 v1.1.5부터 추가
되었습니다.** 

  - **Format:**

>

    AT+MNAME

    AT+MNAME?

    AT+MNAME=<Module Name>



  - **Meaning:** 모듈의 이름을 확인 하거나 설정 한다.



  - **Response:**


>

    [S,,<Module Name>]

    [S,,<Module Name>]

    [S]



-----

## Function Commands

| Command                                                       | Prop. | Input Parameter | Response             | Note                  |
| ------------------------------------------------------------- | ----- | --------------- | -------------------- | --------------------- |
| [AT+FDNS](/products/wiz550s2e/wiz550s2epg_kr/atcomm&#at+fdns) | None  |                 | \[D,,(Size)\]↓(Data) |                       |
| :::                                                           | \=    | Domain Name     | \[D,,(Size)\]↓(Data) | Firmware v1.0.1 Later |

-----

>

     AT+FDNS  
  
  
\* **Format:** 

    AT+FDNS

    AT+FDNS=Domain Name



  - **Meaning:** DNS Query를 수행하고 그 결과를 알려준다. 

 AT+FDNS만 수행 했을 경우 Configuration Tool을 통해
설정한 Domain을 DNS Server IP로 Query한다. \</WRAP\>\</WRAP\>

  - **Response:**

>

    [D,,13]
    DNS Timeout

    [D,,17]
    173.194.126.180

-----
>

       AT+MQTTSET 
  
  
\* **Notice:**  **이 기능은 v1.3.0부터 추가
되었습니다.**
  - **Format:**
>

    AT+MQTTSET

    AT+MQTTSET?

    AT+MQTTSET=<UserName>,<Password>,<ClientID>



  - **Meaning:** MQTT 연결에 필요한 설정

 \<UserName\>: The User Name used in the
broker authentication (Required, Max: 10 Character)  
\<Password\>: The Password used in the broker authentication (Required,
Max: 10 Character)  
\<ClientID\>: The Client ID connected to the broker (Required, Max: 25
Character)  


  - **Response:**

>

    [S,,<UserName>,<Password>,<ClientID>]

    [S,,<UserName>,<Password>,<ClientID>]

    [S]


-----

>

    AT+MQTTCON  
  
  
\* **Notice:**  **이 기능은 v1.3.0부터 추가
되었습니다.** 

  - **Format:**

>

    AT+MQTTCON=<Con/Discon>,<BrokerIP>,<BrokerPort>



  - **Meaning:** MQTT 연결 합니다.

\<Con/Discon\>: MQTT Connection
(Required)

| Parameter | Meaning                    |
| --------- | -------------------------- |
| 1         | Connect to the broker      |
| 0         | Disconnect from the broker |


  - **Response:**

>

    [W,(SockId)]

    [S,(SockId)]



-----

>

    AT+MQTTPUB 
  
  
\* **Notice:**  **이 기능은 v1.3.0부터 추가
되었습니다.** 

  - **Format:**

>

    AT+MQTTPUB=<SockId>,<Topic>,<Size>



  - **Meaning:** Publish the message to subscribed Client



  - **Response:**

>

    [W,(SockId)]

    [S,(SockId)]


-----

>

    AT+MQTTSUB 
  
\* **Notice:**  **이 기능은 v1.3.0부터 추가
되었습니다.** 

  - **Format:**

>

    AT+MQTTSUB =<Sub/Unsub>,<Topic>


  - **Meaning:** Such topics will be pushed to the WIZ550S2E when
    received by the Broker

 \<Sub/Unsub\>: Subscribe/Unsubscribe the
Topic (Required)

| Parameter | Meaning               |
| --------- | --------------------- |
| 1         | Subscribe the topic   |
| 0         | Unsubscribe the topic |


  - **Response:**

>

    [S,,<Sub/Unsub>,<Topic>]

