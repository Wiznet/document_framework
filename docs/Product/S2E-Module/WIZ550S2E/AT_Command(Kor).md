---
id: at_command_kor
title: AT Command(Kor)
date: 2020-03-24
---



## WIZ550S2E AT Command Set

이 장에서는 WIZ550S2E의 AT commands 목록과 개별 command에 대한 상세 정보를 제공한다. AT
command와 해당 인자들은 UART 라인을 통해서 입력된다. 모든 명령어들은 문자열 "AT"로 시작하고 그외 다른 문자열로
시작하는 경우에는 에러가 리턴된다. 명령과 인자들은 모두가 ASCII 문자셋이다. 즉, 사용자가 "AT+NSTAT"를 입력하고자
한다면 ASCII 문자 'A', 'T', '+', 'N', 'S', 'T', 'A', 'T'와 CR(0x0D),
LF(0x0A)를 순차적으로 입력해야한다. **모든 명령어는 항상
CR(0x0D), LF(0x0A)로 끝나야한다.** 어떤 인자들은 필수항목이고 또 다른 항목들은 옵션이다.
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
\<GW\>: 게이트웨이 주소 (Optional)

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
  
  
 * **Format:** 

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



  - ***Response:***

>

    [S,,S,192.168.11.100,255.255.255.0,192.168.11.1,8.8.8.8]
    [S,,D]


-----

### AT+NMAC 
  
- **Format:** 

`AT+NMAC`

`AT+NMAC?`

 - **Meaning:** 모듈의 맥주소를 확인하거나 설정한다.

  - **Response:**

`[S,,<MAC>]`

 - ***Response:***

`[S]`

-----



  - ***Example 1:***
 >
 
    AT+NMAC=00:08:dc:1d:bb:8b\r\n`


  - ***Meaning:*** *모듈의 맥주소를 지정된 값으로 변경한다*



  - ***Response:***
>

     `[S]`


  - ***Example 2:***
>
   
     `AT+NMAC\r\n` `AT+NMAC?\r\n`


  - ***Meaning:*** *현재 모듈의 맥주소를 표시한다*



  - ***Response:***
>

     `[S,,00:08:dc:1d:bb:8a]`


-----
>

    `AT+NOPEN ====`
  
  
  
  * **Format:** 

    `AT+NOPEN=<SockType>,<SrcPort>,<DstIP>,<DstPort>`



  - **Meaning:** 소켓 초기화. 지정된 인자를 이용해서 소켓을 생성한다

\<SockType\>: Socket Type

| Parameter | Meaning           |
| --------- | ----------------- |
| S         | TCP Server Socket |
| C         | TCP Client Socket |
| U         | UDP Socket        |

\<SrcPort\>: Local Port Number  
\<DstIP\>: Destination IP Address  
\<DstPort\>: Destination Port Number

  - **Response:**

>

    `[W,(SockId)]`

    `[S,(SockId)]`

-----


  - ***Example 1:***

>

    AT+NOPEN=C,3000,192.168.11.100,3000\r\n

  - ***Meaning:*** *지정된 값을 이용해서 Client 소켓을 생성한다*



  - ***Response:***
>

     `[W,0]`
     `[S,0]`
     `[W,0]`
     `[F,,1]`


  - ***Example 2:***
>

    `AT+NOPEN=S,5000,,`


  - ***Meaning:*** *지정된 포트 넘버로 Server 소켓을 생성한다*



  - ***Response:***
>

    `[S,,0]`


-----
>

    `AT+NCLOSE`  
  
  
  * **Format:** 

    `AT+NCLOSE=(SockId)`



  - **Meaning:** 지정된 ID의 소켓을 종료한다

 \<SockId\>: Socket ID  
현재 AT+Command Mode에서 운용 될 수 있는 소켓은 기본적으로 한개 이다. 그래서 Sock ID는 0이다.


  - **Response:**

>

    `[W,(SockId)]`

    `[S,(SockId)]`

-----


  - ***Example 1:***
>

    `AT+NCLOSE=0\r\n` *

  - ***Meaning:*** // 데이터 통신용 소켓을 종료한다//



  - ***Response:***
>

    `[W,0]`
    `[S,0]`
    `[F,,11]`


-----
>

     `AT+NSEND`
  
  * **Format:** 

    `AT+NSEND=<SockId>,<size>,<DstIP>,<DstPort>`



  - **Meaning:** 연결된 소켓을 통해서 데이터를 전송한다

\<SockId\>: Socket ID  
\<size\>: 보낼 데이터 크기  
\<DstIP\>: 목적지 IP 주소  

  - **Response:**
>

    `[W,(SockId)]`

    `[S,(SockId)]`

-----



  - ***Example 1:***
>

     `AT+NSEND=0,4`

  - ***Meaning:*** *TCP 모드인 경우, 목적지의 IP 주소와 포트 넘버를 지정하지 않는다*



  - ***Response:***
>

     `[W,0]`
     `[S,0]`


  - ***Example 2: 데이터를 받는 형태***

![](/img/products/wiz550s2e/recieve.png)  
위 그림은 "AT+NOPEN=S,5000,,"로 소켓을 생성하고, Client가 모듈에 접속한 상태에서 모듈에게 "Hello
World"를 전송한 그림이다. 모듈은 받은 데이터를 아래와 같이 표시함을 알 수 있다. [R,0,11]
Hello World


-----
>

    `AT+NSOCK` 
 
  
  
  * **Format:** 

    `AT+NSOCK`

    `AT+NSOCK?`

    `AT+NSOCK=<SockId>`



  - **Meaning:** AT Command Mode에서 생성된 소켓의 정보를 읽어 온다.

\<SockId\>: Socket ID  
현재 AT+Command Mode에서 운용 될 수 있는 소켓은 기본적으로 한개 이다. 그래서 Sock ID는 0이다.



  - **Response:**

>

    `[D,,<Size>]`
    `[<Data>]`

-----

  - ***Example 1: "AT+NOPEN=C,5000,192.168.0.3,5000"으로 소켓을 생성한 경우***

`AT+NSOCK\r\n` 

  - ***Meaning:*** *AT Command Mode에서 생성된 소켓의 정보를 읽어 온다.*



  - ***Response:***
>

    `[D,,25]`
    `0,C,5000,192.168.0.3,5000`


  - ***Example 2: 소켓을 생성하지 않을 경우***

 `AT+NSOCK\r\n` 

  - ***Meaning:*** *AT Command Mode에서 생성된 소켓의 정보를 읽어 온다.*



  - ***Response:***
>

     `[D,,0]`


-----
>

    `AT+NMODE`   
  
  
\* **Notice:** **이 기능은 v1.0.3에서 추가 되었으며,
v1.1.5 부터는 AT+MMODE로 이름이 변경 되었습니다.**

  - **Format:**
>

    `AT+NSOCK=S/C/U/M,<SrcPort>,<DstIP><DstPort>`



  - **Meaning:** Module의 네트워크 정보를 변경(자동으로 EEPROM에 저장)

 S/C/U/M: Working Mode  
`S = Server, C = Client, U = UDP, M = Mixed TCP(Server/Client)`



  - **Response:**

>

    `[S]`

-----



  - ***Example 1: 모듈의 네트워크 정보를 Client, 로컬 포트 5000, 서버(Remote)IP
    192.168.0.3, 서버(Remote)포트 5000으로 변경하고 싶은 경우***

 `AT+NMODE=C,5000,192.168.0.3,5000\r\n`


  - ***Meaning:*** *모듈의 네트워크 정보를 Client, 로컬 포트 5000, 서버(Remote)IP
    192.168.0.3, 서버(Remote)포트 5000으로 변경/저장*



  - ***Response:***
>

     `[S]`


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
  
  
 * **Format:** 

>

    `AT`




  - **Meaning:** AT 커맨드 모드인지 체크한다



  - **Response:**

>

    `[S]`



-----

>
   
    `AT+MSTAT ====`

  
  * **Format:** 

    `AT+MSTAT`

    `AT+MSTAT?`


  - **Meaning:** 현재 펌웨어 버전 정보를 읽어온다



  - **Response:**

>

    `[S,,<Version>]`



-----

>

     `AT+MUSART` 

  
  
 * **Format:** 

    `AT+MUSART=<BR>,<W>,<P>,<S>,<F>`



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

    `AT+MUSART\r\n

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
  
  
 * **Format:** 

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
  
  
  * **Format:** 

    AT+MRST



  - **Meaning:** 모듈을 Reset한다.



  - **Response:**

>

    [S]


-----
>
 
    AT+MDATA  
  
  
 * **Format:** 

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
  
  
 * **Format:** 

    AT+FDNS

    AT+FDNS=Domain Name



  - **Meaning:** DNS Query를 수행하고 그 결과를 알려준다. 

 AT+FDNS만 수행 했을 경우 Configuration Tool을 통해
설정한 Domain을 DNS Server IP로 Query한다.

  - **Response:**

>

    [D,,13]
    DNS Timeout

    [D,,17]
    173.194.126.180

-----
>

       AT+MQTTSET 
  
  
 * **Notice:**  **이 기능은 v1.3.0부터 추가
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
  
  
 * **Notice:**  **이 기능은 v1.3.0부터 추가
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
  
  
  * **Notice:**  **이 기능은 v1.3.0부터 추가
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
  
  * **Notice:**  **이 기능은 v1.3.0부터 추가
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

