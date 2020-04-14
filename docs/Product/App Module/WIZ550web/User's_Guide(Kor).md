---
id: users_guide_kor
title: User's Guide(Kor)
date: 2020-04-13
---


## Content
## WIZ550WEB Users' Guide
### Overview
WIZ-Embedded WebServer는 소형의 마이컴으로 동작하는 Web Server로써 Web Browser상 에서 디지털 출력포트를 제어하거나 디지털 입력 및 아날로그 입력 값을 모니터링 할 수 있는 Embedded Web Server Application Board입니다. Web Browser에서 보드로 접속하였을 때 출력되는 웹페이지는 보드에 장착된 micro SD slot의 메모리 카드에 저장되어 있으며 네트웍을 통해 디바이스를 컨트롤 할 수 있습니다.

주요기능

 * HTTP Server로 동작
 * W5500 하드웨어 칩에 의한 안정성 및 신뢰성 확보
 * Configuration Tool Program 제공
 * 10/100 Mbps Ethernet 인터페이스
 * RoHS Compliant

### TFTP Guide Document
[TFTP 사용 가이드 문서]()


### Configuration Tool
#### Description

WIZnet Configuration tool은 java 기반으로 구현된 응용프로그램으로 대부분의 OS Platform에서 사용이 가능하다. .jar 파일을 다운로드해서 Java Virtual machine상에서 실행되도록 하면 된다.
🌎[설치방법](http://xeon011.tistory.com/146)


WIZnet Configuration tool은 다음과 같이 크게 네개 부분으로 구성되어져 있다.

1) Common Configuration 부분
2) Network Configuration 부분
3) Serial Configuration 부분
4) Option Configuration 부분
WIZ550WEB은 1), 2) 두가지 항목과 4) 항목의 “Module Name”, “Setting Password” 기능을 설정 할 수 있다.
다른 설정 항목들은 WIZ550WEB의 웹페이지를 통해 설정 할 수 있다.

**Notice) WIZnet Configuration Tool 1.02 버전 부터 WIZ550WEB의 설정을 지원한다.**

#### Common Configurations

#### Search
Search 기능은 같은 LAN 상에 존재하는 모든 모듈을 검색하는 데 사용된다. UDP 브로드캐스트를 사용하여, 동일한 Subnet 상의 모든 모듈이 검색되면, 해당 모듈의 MAC Address가 표시 된다.

#### Setting
본 기능은 모듈의 각종 옵션 또는 설정 값을 변경할 때 사용하는 기능이다. 모든 설정값 변경 또는 선택 후에 “Setting” 버튼을 눌러야 그 값이 모듈에 반영이 되고, 변경된 값은 모듈내의 EEPROM에 저장되어 모듈의 전원이 차단되는 경우에도 그 설정 값이 유지되게 된다.
설정 값을 변경하는 과정은 다음과 같다.

>

    1. "Search Windows”에서 설정 값을 변경할 모듈의 MAC Address를 선택(클릭)하면, 
       해당 모듈에 저장되어 있는 설정 값이 각 필드에 표시 된다.
    2. 원하는 필드의 설정 값을 변경하고
    3. "Setting" 버튼을 누르면, 패스워드 입력창이 뜬다.
      - 기본 패스워드는 "WIZnet" 이다.
    4. "Setting Password"를 입력하고 OK 버튼을 누르면, configuration 작업이 완료되며,
    5. 변경된 configuration으로 초기화 된다. (모듈이 자동으로 re-booting 됨)
    6. 변경된 configuration을 확인하기 위해서는 Search 버튼을 눌러서 모듈을 다시 검색한다.
    
#### F/W Uploading
TFTP를 통하여 펌웨어를 업로드 한다. “F/W Uploading” 버튼을 누르면 아래의 창이 뜨며, 설정 정보들을 입력한 뒤 “OK” 버튼을 누르면 업데이트가 진행된다.

>

        Server IP : 
            TFTP 서버 IP
        Server Port : 
            TFTP 서버 Port (TFTP default Port : 69)
        File Name : 
            펌웨어 파일 이름
        Password : 
            설정 패스워드
☞ 현재 Configuration tool은 TFTP를 지원하지 않는다. 그러므로 별도의 TFTP 서버 프로그램을 사용하여 펌웨어를 업로드 해야 한다.

#### Reset
이 기능은 모듈을 Reset(재부팅) 하는 기능으로 설정 시 “Setting Password”를 요구한다.

#### Factory Reset
이 기능은 모든 설정을 factory default 설정으로 초기화 하는 기능으로 설정 시 “Setting Password”를 요구한다. Factory default 값은 아래 표와 같다.

|**Category	|Item|	Value**|
|---------|-----|------|
|**Network**	|Local IP	|192.168.11.100|
||Local Gateway	|192.168.11.1|
||Local Subnet	|255.255.255.0|

#### Exit
Configuration tool 프로그램을 종료한다.

#### Search Window
“Search” 버튼을 선택하면, 동일 Subnet 상의 모든 모듈의 MAC Address가 표시 된다.

#### Search Method
Reserved

#### Firmware Version
펌웨어 버전을 표시한다.

### Network Configurations


#### IP
모듈의 IP 정보를 설정하는 섹션이다.
>

    IP: 
        모듈의 IP Address
    Gateway: 
        모듈의 Gateway Address
    Subnet mask: 
        모듈의 Subnet Mask

☞ If you are unclear about your Local IP, Subnet Mask, Gateway information, you have to get this information from your network administrator. If the IP address is not correct, IP collision or network problems may occur.

#### Options Configurations


#### Module Name
각 모듈에 설정된 이름이 표시 된다.
#### Password
이 기능은 인증을 위한 패스워드를 설정하는 섹션이다.
>

    Setting Password : 
        "Setting", "F/W Uploading", "Reset", "Factory Reset" 시 인증을 위한 패스워드
        

## AT Commands Set

이 장에서는 WIZ550WEB의 AT commands 목록과 개별 command에 대한 상세 정보를 제공한다. AT command와 해당 인자들은 UART 라인을 통해서 입력된다. 모든 명령어들은 문자열 “AT”로 시작하고 그외 다른 문자열로 시작하는 경우에는 에러가 리턴된다. 명령과 인자들은 모두가 ASCII 문자셋이다. 즉, 사용자가 “AT+NSTAT”를 입력하고자 한다면 ASCII 문자 'A', 'T', '+', 'N', 'S', 'T', 'A', 'T'와 CR(0x0D), LF(0x0A)를 순차적으로 입력해야한다.

모든 명령어는 항상 **CR(0x0D), LF(0x0A)** 로 끝나야한다.

어떤 인자들은 필수항목이고 또 다른 항목들은 옵션이다. 인자들은 명령어 표에 제시된 것과 같은 순서로 입력해야한다. 옵션 항목들이 사용하지 않는 경우라 할지라도 콤마 구분자는 반드시 명령어에 포함해야한다. 대부분의 경우에, 명령어가 유효한 경우에 WIZ550WEB는 [S]를 응답하고, 잘못된 명령에는 [F]를 응답한다. WIZ550WEB가 내 보낼 수 있는 응답은 [Responses]()에 표시되어져있다.

아래는 사용자가 입력할 수 있는 예제들이다. 예제에서 볼 수 있는 것처럼, WIZ550WEB의 응답에도 항상 “\r\n”가 존재한다.

|사용자의 입력	|AT\r\n (0x61 0x74 0x0d 0x0a)|
|---------------|---------------------------|
|WIZ550WEB의 응답|	[S]\r\n (0x5b 0x53 0x5d 0x0d 0x0a)|

---
### Responses
#### Response Format
>

    [(Type),(Id),(Param1),(Param2),(Param3),(Param4),(Param5),(Param6)]↓(Data)↓
    
  * (Type): 응답의 종류. 'S', 'D', 'F', 'W', 'R', 'V' 중의 하나.
  * (Id): 소켓 구분자. 이 인자는 비동기 모드일 때 필수항목이다.
  * (Param1) ~ (Param6): 모듈의 각종 설정값을 확인할 때 모듈에 의해서 필수적으로 포함된다.
  * ↓: 이것은 엔터키를 의미하며, 그 실제값은 CR(0x0D), LF(0x0A)이다.
  * (Data): 가변길이의 많은 데이터가 필요할 때, 응답 종류 'D'와 'R'에 뒤따라서 'Data'가 출력된다.

응답 종류별 세부적인 내용은 다음과 같다.

|**Response|	Description**|
|--------|-------------|
|Success Response	|[S,(Id),(Param1),(Param2),(Param3),(Param4),(Param5),(Param6)]↓ 명령 수행 성공. 필요한 경우, 인자를 포함한 응답|
|Success Dump Response	|[D,(Id),(Size)]↓(Data)↓ 명령 수행 성공. 대용량 데이터를 포함한 응답.|
|Fail Response|	[F,(Id),(ErrorCode),(ErrorParam)]↓ 명령 수행 실패, 필요한 경우 에러코드 포함한 응답|
|Wait Response	|[W,(Id)]↓ 비동기 모드로 명령이 수행중임. 완료시 ID를 이용해서 표시함.|
|Data Receive Response	|[R,(SockId),(ReceivedSize),(SrcIP),(SrcPort)]↓(Data)↓데이터 수신을 알림. 소켓 ID로 수신 대상 구분.|
|Event Response|	[V,(Id),(EventCode)]↓이벤트 발생 알림.|

  * (Id): 0 - 시스템 ID or 0~n - 소켓 지정자
  * (Size): 출력한 데이터의 길이
  * (ErrorCode): 에러 코드
  * (ErrorParam): 에러 코드를 위한 Description 값
  * (SockId): 데이터를 수신한 소켓의 소켓 구분자
  * (ReceivedSize): 수신 데이터의 사이즈
  * (SrcIP): 송신자의 IP 주소. 이 인자는 UDP 소켓의 경우에는 필수 항목이지만, TCP 소켓의 경우에는 생략될 수 있다.
  * (SrcPort): 송신자 소켓의 포트 넘버. UDP 소켓의 경우에는 필수 항목이다.
  * (EventCode): 어떤 이벤트가 발생했는지에 대한 표시자.

#### Error Code

**General Error Code**

|Code	|Error Name|	Description|
|--------|---------|----------------|
|0	|ERR_Undefined|	정의되지 않은 오류|
|1|	ERR_WrongOperator|	잘못된 명령어|
|2	|ERR_WrongCommandSign|	잘못된 명령 부호|
|3|	ERR_WrongArguments|	잘못된 인자들|
|4|	ERR_OurofRange	|지정범위를 벗어난 인자들|
|5|	ERR_FuncDisabled|	지정된 함수 사용불가|
|6	|ERR_NotAllowed	|허용되지 않음음|
|7|	ERR_CommandBusy|	명령 수행중|
|8	|ERR_CommandTimeout|	명령 타임아웃|

#### Socket Error Code

|Code|	Error Name|	Description|
|----|------------|-------------|
|10|	ERR_SockNotAvail|	소켓이 가용하지 않음|
|11	|ERR_SockClosed|	소켓이 닫힘|
|12|	ERR_SockPortNumNotAvail|	지정된 포트 넘버가 사용할 수 없음|
|13	|ERR_SockNotConnected	|연결되지 않음|
|14|	ERR_SockWrongAddr|	잘못된 주소|
|15	|ERR_SockDataNotAvailable	|사용가능한 데이터가 없음|

#### Other Error Code

|Code	|Error Name	|Description|
|-------|----------|-------------|
|20|	ERR_NoFreeMem	|No Free Memory|

#### Event Code

**Socket Event Code**

|Code	|Socket Event Name|	Description|
|-------|-----------------|-------------|
|0|	EVENT_SockConnected|	연결됨. 소켓 상태가 Listen 상태에서 연결상태로 변경됨|
|1|	EVENT_SockDisconnected	|연결해제됨. 소켓 상태가 연결상태에서 연결해제상태로 변경됨|
|2	|EVENT_SockClosed	|소켓 닫힘. 소켓 상태가 닫힘으로 바뀜|
|3|	EVENT_SockDataRcvd	|데이터를 수신함. 연관됨 소켓이 상대방으로부터 데이터를 수신함|

#### Network Commands

|Command	|Prop.|	Input Parameter|	Response|
|AT+NSET	|None or ?	|	|[S,,S,(IP),(SN),(GW),(DNS)][S,,D]|
||=|	S,(IP),(SN),(GW),(DNS)|	[S]|
|||D|	[S]|
||-	|num,Param	|[S]|
|AT+NSTAT|	None or ?||		[S,,S/D,(IP),(SN),(GW),(DNS)]|
|AT+NMAC|	None or ?||		[S,,(MAC)]|
||=	|(MAC)|	[S]|
>

    ====AT+NSET====




   * **Format:**
   >
   
        AT+NSET=<DHCP>,<IP>,<SN>,<GW>
        
 * **Meaning:** 네트워크 정보를 확인하거나 설정한다
 
<DHCP>: 정적 IP / 유동 IP 사용 지정

|Parameter|	Meaning|
|---------|---------|
|S|	DHCP Off, Static|
|D	|DHCP On, DHCP Client|

<IP>: IP 주소 (Optional)
<SN>: 서브넷 마스크 (Optional)
<GW>: 게이트웨이 주소 (Optional)

 * **Response:**
>

    [S]
    
 * **Example 1:**
>

    AT+NSET\r\n
 >
 
    AT+NSET?\r\n

 * **Meaning**: 현재 설정된 네트워크 정보를 읽어온다

응답에 담겨진 주소(IP 주소, 서브넷, 게이트웨이 주소)는 실제 주소와 다르고 메모리에 저장된 주소입니다. 특히, DHCP 모드가 켜져 있을 때는 대개 실제 주소와 다릅니다.


 * **Response:**
>

    [S,,S,192.168.11.100,255.255.255.0,192.168.11.1,8.8.8.8]
 >
 
    [S,,D]

 * **Example 2:**
>

    AT+NSET-2,192.168.11.110\r\n

 * **Meaning:** 현재 설정된 네트워크 정보중 두번째 인자인 IP 주소만 지정된 값으로 변경한다


 * **Response:**
>

    [S]

---
>

    ====AT+NSTAT====




 * **Format:**
 >
 
    AT+NSTAT
 >
 
    AT+NSTAT?
    
 * **Meaning:** 현재 네트워크 상태값을 표시한다

 * **Response:**
 >
 
    [S,,<DHCP>,<IP>,<SN>,<GW>,<DNS>]
    
 * **Example 1:**
>

    AT+NSTAT\r\n
 >
 
    AT+NSTAT?\r\n

 * **Meaning:** 현재 네트워크 상태값을 표시한다
 * **Response:**
>

    [S,,S,192.168.11.100,255.255.255.0,192.168.11.1,8.8.8.8]
 >
 
    [S,,D]
>

    ====AT+NMAC====




  * **Format:**
  >
  
     AT+NMAC?
  >
  
    AT+NMAC=<MAC>
    
  * **Meaning:** Get MAC Address
  * **Response:**
  >
  
    [S,,<MAC>]
    [S]
    
  * **Example 1:**
>

    AT+NMAC=00:08:dc:1d:bb:8b\r\n

  * **Meaning**: 모듈의 맥주소를 지정된 값으로 변경한다
  * **Response:**
>

    [S]

  * **Example 2:**
>

    AT+NMAC\r\n
  >
  
    AT+NMAC?\r\n

  * **Meaning**: 현재 모듈의 맥주소를 표시한다
  * **Response:**
>

    [S,,00:08:dc:1d:bb:8a]

### Management Commands

|Command|	Prop.|	Input Parameter|	Response|
|--------|-------|-----------------|-------------|
|AT	|None|		|[S]|
||?|	|[D,,(Size)]↓(Data)|
|AT+MSTAT	|None or ?	|	|[S,,(Version)]|
|AT+MUSART1|	None or ?	|	[S,,(BR),(W),(P),(S),(F)]|
||=	|(BR),(W),(P),(S),(F)|	[S]|
||-|	num,Param|	[S]|
|AT+MUSART2	|None or ?|		|[S,,(BR),(W),(P),(S),(F)]|
||=|	(BR),(W),(P),(S),(F)|	[S]|
||-|	num,Param	|[S]|
|AT+MSAVE|	None|	|	[S]|
|AT+MRST|	None|		|[S]|
||=	|F|	[S]|
>

     ====AT====




  * **Format:**
  >
  
        AT
        
  * **Meaning:** AT 커맨드 모드인지 체크한다
  
  * **Response:**
  >
  
    [S]
    
---

====AT+MSTAT====




  * **Format:**
  >
  
    AT+MSTAT
  >
  
    AT+MSTAT?
    
  * **Meaning:** 현재 펌웨어 버전 정보를 읽어온다
  
  * **Response**:
  >
  
    [S,,<Version>]
    
---

    ====AT+MUSART1====




  * **Format:**
>

    AT+MUSART1=<BR>,<W>,<P>,<S>,<F>
    
  * **Meaning:** 시리얼 설정값을 읽어오거나 새로운 설정값을 지정한다
  
&#60;BR&#62;: Baud rate
    
|Parameter|	Meaning|
|---------|--------|
|300	|300bps|
|600	|600bps|
|1200	|1200bps|
|2400	|2400bps|
|4800	|4800bps|
|9600	|9600bps|
|19200|	19200bps|
|38400|	38400bps|
|57600|	57600bps|
|115200|	115200bps|
|230400	|230400bps|

<W>: Word length
    
|Parameter|	Meaning|
|---------|---------|
|8|	8 bits|
|9|	9 bits|

<P>: Parity bit
    
|Parameter	|Meaning|
|-----------|-------|
|N	|NONE|
|O	|ODD|
|E	|EVEN|


: Stop bit
    
|Parameter|	Meaning|
|---------|--------|
|1|	1 bits|
|2|	2 bits|

<F>: Flow Control
    
|Parameter|	Meaning|
|----------|--------|
|0	|NONE|
|1	|RTS/CTS|

  * **Response:**
>

    [S,,<BR>,<W>,<P>,<S>,<F>]
    
  * **Example1:**
>

    AT+MUSART1\r\n
 >
 
    AT+MUSART1?\r\n
    
  *  **Meaning:** 현재 시리얼 설정값을 표시한다
  
  *  **Response:**
 >
 
    [S,,115200,8,N,1,0]
    
  * **Example2:**
 >
 
    AT+MUSART1=,,E,,0\r\n
    
  * **Meaning:** 새로운 시리얼 설정값을 지정한다. 공백 필드는 변경하지 않고 Parity, Flow control만 변경한다
  
  * **Response:**
>
   
     [S]

---
>

    ====AT+MUSART2====


   * **Format:**
>

    AT+MUSART2=<BR>,<W>,<P>,<S>,<F>
    
   * **Meaning:** 시리얼 설정값을 읽어오거나 새로운 설정값을 지정한다
<BR>: Baud rate
    
|Parameter	|Meaning|
|------------|-------|
|300	|300bps|
|600|	600bps|
|1200|	1200bps|
|2400|	2400bps|
|4800	|4800bps|
|9600|	9600bps|
|19200|	19200bps|
|38400	|38400bps|
|57600|	57600bps|
|115200|	115200bps|
|230400|	230400bps|

<W>: Word length
    
|Parameter|	Meaning|
|----------|-------|
|8	|8 bits|
|9|	9 bits|

<P>: Parity bit
    
|Parameter|	Meaning|
|---------|--------|
|N	|NONE|
|O|	ODD|
|E	|EVEN|

<S>: Stop bit
    
|Parameter|	Meaning|
|---------|--------|
|1	|1 bits|
|2|	2 bits|

<F>: Flow Control
    
|Parameter|	Meaning|
|----------|-------|
|0	|NONE|
|1	|RTS/CTS|

 * **Response:**
>

    [S,,<BR>,<W>,<P>,<S>,<F>]
 ---
 
  * **Example1:**
>

    AT+MUSART2\r\n
>

    AT+MUSART2?\r\n
    
  * **Meaning:** 현재 시리얼 설정값을 표시한다
  
  * **Response:**
>

     [S,,115200,8,N,1,0]
     
  * **Example2:**
>

    AT+MUSART2=,,E,,0\r\n
    
   * **Meaning:** 새로운 시리얼 설정값을 지정한다. 공백 필드는 변경하지 않고 Parity, Flow control만 변경한다
   
   *  **Response:**
>

    [S]
>

    ====AT+MSAVE====




  * **Format:**
  >
  
    AT+MSAVE
    
 * **Meaning**: 현재 설정된 정보들을 Flash 메모리에 저장한다

 * **Response:**
>

    [S]
    
 ---
 >
 
    ====AT+MRST====


  * **Format:**
 >
 
    AT+MRST
    
 * **Meaning:** 모듈을 리셋한다
 * **Response:**
 >
 
    [S]
    
#### Function Commands

|Command|	Prop.|	Input Parameter|	Response|
|AT+FIODIR|	=	|(PIN)|	[S,,(Direction)]|
||=	|(PIN),(Direction)|	[S]|
|AT+FIOVAL|	=|	(PIN)|	[S,,(VAL)]|
||=	|(PIN),(VAL)|	[S]|

---
>

    ====AT+FIODIR====




  * **Format:**
 >
 
        AT+FIODIR=<PIN>
        
   >     
   
    AT+FIODIR=<PIN>,<Direction>
    
 * **Meaning**: GPIO Pin Direction을 확인하거나 설정한다
 
<PIN> : GPIO Pin Number (1 ~ 16)
<Direction> : GPIO Pin Direction

|Parameter|	Meaning|
|----------|-------|
|0|	Not Used (Read Only)|
|1	|Input|
|2|	Output|

  * **Response:**
 >
 
    [S,,<Direction>]
 >
 
     [S]
     
---     

   * **Example1:**
 >
 
    AT+FIODIR=1\r\n
    
  * **Meaning**: GPIO Pin 1번 Direction을 표시한다.
  
  * **Response:**
>

    [S,,1]
    
  * **Example2:**
 >
 
    AT+FIODIR=1,2\r\n
    
   * **Meaning:** GPIO Pin 1번 Direction을 Output으로 설정한다.
   
   * **Response:**
 >
 
     [S]
>

    ====AT+FIOVAL====


  * **Format:**
>

    AT+FIOVAL=<PIN>
 >
 
    AT+FIOVAL=<PIN>,<VAL>
    
  * **Meaning**: GPIO Pin 입출력을 설정하거나 확인한다.
  
<PIN> : GPIO Pin Number (1 ~ 16)
<VAL> : GPIO Pin Output Value

|Parameter|	Meaning|
|---------|---------|
|0	|Low|
|1|	High|

   * **Response:**
>

    [S,,<VAL>]
 >
 
    [S]
 
 ---
 
  * **Example1:**
>

    AT+FIOVAL=1\r\n
    
   * **Meaning:** GPIO Pin 1번 입출력값을 확인한다.
   * **Response:**
>

    [S,,1]
    
   * **Example2:**
>   
        
     AT+FIOVAL=1,1\r\n
     
   * **Meaning:** GPIO Pin 1번 출력을 High로 설정한다.(Output Only)
   * **Response:**
>

    [S]
