---
id: gmmp_example
title: WizFi310 GMMP (Global M2M Protocol) 연동 가이드
date: 2020-04-15
---

![](/img/products/wizfi250/thingplug_logo.png)

## 1. GMMP(Global M2M Protocol)

![](/img/products/wizfi250/flow.png)  
GMMP는 M2M 단말과 개방형 M2M 플랫폼(OMP) 사이의 TCP 기반 연동 규격으로서, 단말 등록/해지, 주기보고, 단말
제어 등의 기능을 수행하는 SK Telecom 내부 규격이다.  
WizFi310은 WiFi로 SKT의 개방형 IoT 플랫폼인 ThingPlug와 연동하고, 수집한 데이터를 ThingPlug로
전송하는 M2M GW 역할을 수행한다. ThingPlug에 저장된 데이터는 TCP 기반의 OpenAPI를 통해
Application 등을 통해 데이터를 실시간 모니터링 할 수 있으며, WizFi310을 제어, 관리할 수 있다.  

![](/img/products/wizfi250/flow1.png)  

## 2. WizFi310 ThingPlug 연동

### WizFi310을 ThingPlug의 디바이스로 등록하기

WizFi310이 ThingPlug와 연동을 확인하기 위해서는 우선 ThingPlug 테스트 사이트에 디바이스(WizFi310)을
등록해야 한다.  

##### ThingPlug 테스트 사이트

https://sandbox.sktiot.com  
위 링크의 '가이드 다운로드'에서 '디바이스(TCP) 등록 가이드' 참고 
  
로그인 후 '디바이스' -\> '디바이스 정보' -\> '디바이스 등록' -\> '개별 등록'에서 디바이스를 등록할 수 있다.  
![](/img/products/wizfi250/add_device.png)

* **서비스명** : ThingPlug
* **서비스 프로토콜**: GMMP
* **이동전화번호/MAC Address**: WizFi310의 MAC Address를 입력한다. 모듈 상단에 프린트 되어 있으며, 'AT+MMAC=?' 명령으로 확인할 수 있다.
* **디바이스 이름**: 사용자 임의대로 입력한다.
* **디바이스 시리얼 번호**: 체크박스를 선택해 MAC Address를 사용한다.
* **제조사 아이디**: 제조사가 부여한 아이디를 입력한다.(개인일 경우 임의로 입력한다.)
* **Always On 여부**: 사용

![](/img/products/wizfi250/add_device2.png)

* **플랫폼 제어메시지 수신망**: 'IP_WIRE'를 선택한다.
* **수신 Address**: 임의의 IPv4 주소를 입력한다.(ex> 192.168.1.1)


  
** 입력정보에 대한 정보는 'ThingPlug 디바이스(TCP) 등록 가이드'에서 확인할 수 있다. **  
  
### WizFi310 GMMP 등록

ThingPlug 사이트에서 디바이스(TCP)등록을 하며 입력했던 정보를
바탕으로 WizFi310에서 GMMP로 GW와 Device를 등록할 수 있다.

* 디바이스(TCP) 등록을 한 상태라면 '디바이스 조회'에서 '승인완료-단말 Regi. 필요' 상태를 확인할 수 있다.
* MAC Address: 0008dc1e3222, 디바이스 아이디: WizFi310_1E3222 제조사 아이디: WIZnet 으로 디바이스(TCP) 등록시 아래와 같은 정보를 확인할 수 있다.

![](/img/products/wizfi250/device_1_need_regi.png)  
![](/img/products/wizfi250/device_2_need_regi.png)


* 이후 'AT+GMMPSET' 명령어를 이용해 WizFi310을 ThingPlug의 GMMP 단말로 등록할 수 있다.
* 위 정보로 등록했을 때 아래 명령을 사용한다. 명령의 파라메터는 '3. GMMP 프로토콜을 사용하기 위한 WizFi310 AT Commands'에서 확인할 수 있다.

`AT+GMMPSET=1,61.250.21.211,31002,ThingPlug,0008dc1e3222,WIZnet,0008dc1e3222`

* 정상적으로 등록이 완료 되었다면 GW의 디바이스 아이디(GW ID) "SC10010254"와 Device 의 디바이스 아이디(Device ID) "AD10014858"가 등록된 것을 확인할 수 있다.

![](/img/products/wizfi250/device_3_end_regi.png)  
![](/img/products/wizfi250/device_4_end_regi.png)  
![](/img/products/wizfi250/device_5_end_regi.png)  
  

## 3. GMMP 프로토콜로 데이터 전송

![](/img/products/wizfi250/gmmp_message.png) GMMP 프로토콜을 사용하여 M2M 단말과 M2M
플랫폼(ThingPlug) 사이의 단말 등록/해지, 주기 보고, 단말 제어의 기능을 수행할 수 있다. 단말 등록은 2.
WizFi310 GMMP 연동에서 설명한 내용이다.  
3. GMMP 프로토콜로 데이터 전송 에서 다룰 내용은 "주기 보고"와 TCP 세션 유지를 위한 "Heartbeat" 이다.  
  
### HEARTBEAT Message

WizFi310은 Always On 방식을 사용한다. Always On은
TCP 세션을 지속적으로 연결하고 있어야 하기 때문에 주기적으로 Heartbeat 메세지를 전송하고 그에 대한 결과를 수신하면서
TCP 세션을 유지할 수 있다.  
  
* 먼저 WizFi310(M2M GW)는 아래의 정보가 포함된 GMMP 메세지를 M2M 플랫폼(ThingPlug)으로 전송한다.  
* WizFi310에서 Heartbeat Period를 설정하기 위해서는 "AT+GMMPOPT=11" 명령을 사용한다.
* AT+GMMPOPT=11,5 명령을 사용하면 Heartbeat Period를 5분으로 설정할 수 있다.

```cpp
   <OMP><Marker:OPS> [GW->OMP]GMMP_SetHB Start 
   <OMP><Marker:REQ> 
   GMMP Trace :  AuthID =0008dc1e3222
   GMMP Trace :  Auth Key =SP10033827key
   GMMP Trace :  T-ID =55
   GMMP Trace :  Domain Code =ThingPlug
   GMMP Trace :  GW ID=SC10010254
   GMMP Trace :  [GW->OMP]GMMP_SetHB End 
   GMMP Trace :  Recv Header Type = 10, Read Body Size = 26
```

- M2M 플랫폼(ThingPlug)은 Heartbeat 메세지를 수신했다면, 아래의 Response 메세지를 WizFi310으로 다시 보내준다.

```cpp
   <OMP><Marker:RSP> [OMP->GW]OPERATION_HEARTBEAT_RSP Start 
   GMMP Trace :  AuthID =0008dc1e3222
   GMMP Trace :  Auth Key =SP10033827key
   GMMP Trace :  T-ID =55
   GMMP Trace :  Domain Code =ThingPlug
   GMMP Trace :  GW ID=SC10010254
   <OMP><Marker:OPE> 
```

### DELIVERY Message

WizFi310(M2M GW)에서 수집한 데이터를 GMMP\_Packet\_Delivery\_Request 메세지를 이용해서
M2M 플랫폼(ThingPlug)으로 전송하고, 그에 대한 처리 결과를 GMMP\_Packet\_Delivery\_Response
메세지로 수신한다.  
  
WizFi310에서 M2M 플랫폼(ThingPlug)로 데이터를 보내기 위해서는 AT+GMMPDATA와 AT+GMMPOPT=12
두 가지 명령어를 사용한다. "AT+GMMPDATA=0,보낼 데이터" 명령을 사용하면 WizFi310이 "보낼 데이터"를
기억하고, 주기적으로 ThingPlug로 보내게 된다.  
만약 AT+GMMPDATA 명령 사용 즉시 데이터를 전송하기 위해서는 "AT+GMMPDATA=1,보낼 데이터" 명령을
사용한다.  
주기 설정은 "AT+GMMPOPT=12,\<min\>" 명령을 사용하면 \<min\>분 마다 주기 데이터를 보낸다.

* 먼저 WizFi310(M2M GW)는 아래의 정보가 포함된 GMMP 메세지를 M2M 플랫폼(ThingPlug)으로 전송한다.
* usMessageBody가 보낼 데이터이다.

```cpp
   <OMP><Marker:OPS> [GW->OMP]GMMP_SetDelivery Start 
   <OMP><Marker:REQ> 
   GMMP Trace :  AuthID =0008dc1e3222
   GMMP Trace :  Auth Key =SP10033827key
   GMMP Trace :  T-ID =129
   GMMP Trace :  Domain Code =ThingPlug
   GMMP Trace :  GW ID=SC10010254
   GMMP Trace :  Device ID =
   GMMP Trace :  ucReportType[0x1]
   GMMP Trace :  ucMediaType[0x1]
   GMMP Trace :  usMessageBody =WizFi310 test data !@#$%^&*(/)
```

* 위의 데이터를 ThingPlug에 제대로 전송했는지 여부는 Result Code[0x0], STATUS_OK을 통해 확인할 수 있다.

```cpp
   GMMP Trace :  [GW->OMP]GMMP_SetDelivery End 
   GMMP Trace :  Recv Header Type = c, Read Body Size = 43
   <OMP><Marker:RSP> [OMP->GW]OPERATION_DELIVERY_RSP Start 
   GMMP Trace :  AuthID =0008dc1e3222
   GMMP Trace :  Auth Key =SP10033827key
   GMMP Trace :  T-ID =129
   GMMP Trace :  Domain Code =ThingPlug
   GMMP Trace :  GW ID=SC10010254
   GMMP Trace :  Device ID =
   GMMP Trace :  Result Code[0x0], STATUS_OK
   GMMP Trace :  unBackOffTime = 0
   <OMP><Marker:OPE>
```

## 4. Application에서 데이터 조회 및 장치 제어

![](/img/products/wizfi250/application_message.png)

WizFi310이 GMMP를 이용해 ThingPlug에 보낸 데이터를 조회하거나 WizFi310을 제어하기 위해서 OpenAPI를
사용한다.

### ThingPlug OpenAPI 사용 방법

ThingPlug 사이트의 "개발자 지원" -\> "Open API 테스트" 메뉴에서 테스트를 진행할 수 있다. 이 테스트를 실제
Application에서 적용하기 위해서는 "서비스 App 등록"에서 등록 후 승인을 통해 App의 인증 아이디와 인증 키를 발급
받아야 한다.

### 데이터 조회

* "Open API 선택"을 눌러 테스트 진행할 Open API를 선택한다. WizFi310(M2M GW)에서 보낸 최신 데이터를 조회하려면 "GW 주기보고 최신 데이터 조회"를 선택한다.

![](/img/products/wizfi250/app_1_view_list.png)  

* 테스트에 사용할 App을 선택한다. App 등록 후 승인을 받게 되면 이 앱 리스트에 등록한 App이 나타나게 된다.
* 테스트를 위해 "Service Default App"을 선택한다.

![](/img/products/wizfi250/app_2_app.png)  

* 테스트를 진행할 디바이스(GW)를 선택한다.

![](/img/products/wizfi250/app_3_device.png)  

* 테스트 실행을 클릭하면 선택한 Open API의 실행결과를 확인할 수 있다.
* < content>와 < content> 사이의 데이터가 WizFi310(M2M GW)에서 ThingPlug로 보낸 데이터 이다.
* V2l6RmkyNTAgdGVzdCBkYXRhICFAIyQlXiYqKCk=
* 이 데이터는 Base64로 Encoding 되어 있기 때문에 Base64 Decoding이 필요하다.

![](/img/products/wizfi250/app_4_result.png)  

* "V2l6RmkyNTAgdGVzdCBkYXRhICFAIyQlXiYqKCk=" 을 Base64로 Decoding을 하게 되면
WizFi310에서 보냈던 "WizFi310 test data \!@\#$%^&\*(/)"을 확인할 수 있다.

![](/img/products/wizfi250/app_5_decode.png)  

### 장치 제어

![](/img/products/wizfi250/control_1_flow.png)  
Application을 이용해서 WizFi310을 제어하는 과정은 위와 같은 절차에 따라서 진행된다.  
* Application이 ThingPlug로 제어 요청 메세지를 보내면, TingPlug는 WizFi310에 GMMP 제어요청을 하게 된다.
* WizFi310은 GMMP 제어 요청을 받고, 동작을 수행 한다.
* 이후, WizFi310은 동작 수행 결과 ThingPlug로 보낸다.
* Application에서 제어요청 결과조회 메세지를 ThingPlug로 보내게 되면, 응답 메세지로 제어 수행 결과를 확인할 수 있다.
  
Open API로 테스트 하는 방법은 데이터 조회와 동일하다. 대부분의 제어 명령은 "제어 요청"과 "결과 조회" 두가지로 되어있다. 아래 예제는 WizFi310(GW)의 상태를 확인하는 "GW Status Check" 이다.

![](/img/products/wizfi250/control_2_openAPI.png)  

*  Open API 중 "GW Status Check"를 사용해서 Application이 ThingPlug로 제어 요청 메세지를 보내면 아래와 같은 응답을 받게 된다.
* stateActionStatus의 내용은 PROGRESS로 ThingPlug가 제어 명령을 수신했다는 의미이다.

![](/img/products/wizfi250/control_3_req_result.png)  

*  Open API 중 "GW Status Check 결과조회"를 사용해서 ThingPlug가 수집한 WizFi310의 Status를 응답으로 받는다.
* stateActionStatus의 내용은 SUCCESS로 제어 성공을 나타낸다.
* operationState은 단말의 운용 상태를 나타낸다. PAUSE는 일시 중지 상태이다.
* reportState의 데이터 보고 기능 상태를 나타낸다. ON은 데이터 보고기능 ON을 나타낸다.

![](/img/products/wizfi250/control_4_res_result.png)  

## 5. GMMP 프로토콜을 사용하기 위한 WizFi310 AT Commands

### 사용하는 AT command List

* AT+MMSG
* AT+GMMPSET
* AT+GMMPDATA
* AT+GMMPOPT

#### AT+MMSG

* Format: AT+MMSG=< level >
* GMMP 관련 이벤트 로그, 디버그 프린트를 위해서 메시지 출력 레벨을 3으로 설정한다. 이벤트 로그, 디버그 프린트 각각의 설정은 AT+GMMPOPT로 설정 가능하다. \\ \\
* ex) AT+MMSG=3

| Element | Parameter | Description                |
| ------- | --------- | -------------------------- |
| level   | 1         | 응답을 출력하지 않는다.              |
| :::     | 2         | 응답과 이벤트 로그를 출력한다.(Default) |
| :::     | 3         | 응답, 이벤트, 디버그를 출력한다.        |

#### AT+GMMPSET

* Format: AT+GMMPSET=< Start >,< ThingPlug IP >,< Thingplug Port >,< Domain Code >,< Auth ID >,< Manufacture ID >,< Device ID >
* GMMP_GW_Registration 절차를 수행하기 위한 설정. 사전에 https://sandbox.sktiot.com에서 디바이스(TCP) 등록이 되어 있어야 G/W, Device 등로 한다.
* ThingPlug의 IP, Port, Domain Code, WizFi310의 Auth ID, Manufacture ID, Device ID를 설정한다. \\ \\
* ex) AT+GMMPSET=1,61.250.21.211,31002,ThingPlug,0008dc000000,WIZnet_GWMFID,deviceID
* ex) AT+GMMPSET=0

<table>
<thead>
<tr class="header">
<th>Element</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Start</td>
<td>1 or 0</td>
<td>1: GMMP_GW_Registration과 GMMP_Delivery를 수행한다. GMMP_Delivery는 AT+GMMPDATA가 설정되어있어야 한다.<br />
0: GMMP_Delivery를 중지한다.</td>
</tr>
<tr class="even">
<td>ThingPlug IP</td>
<td>61.250.21.211</td>
<td>ThingPlug의 IP를 입력한다.</td>
</tr>
<tr class="odd">
<td>ThingPlug Port</td>
<td>31002</td>
<td>ThingPlug의 TCP Listen Port를 입력한다.<br />
ThingPlug-&gt;마이페이지-&gt;서비스 정보수정에서 확인 가능</td>
</tr>
<tr class="even">
<td>Domain Code</td>
<td>ThingPlug</td>
<td>ThingPlug의 서비스명을 입력한다.<br />
ThingPlug-&gt;마이페이지-&gt;서비스 정보수정에서 확인 가능</td>
</tr>
<tr class="odd">
<td>Auth ID</td>
<td>0008dc1e000000</td>
<td>디바이스 등록시 입력한 MAC Address를 입력한다.<br />
ThingPlug-&gt;디바이스 정보-&gt;디바이스 조회에서 확인 가능</td>
</tr>
<tr class="even">
<td>Manufacture ID</td>
<td>WIZnet_GWMFID</td>
<td>제조사 ID를 입력한다.<br />
ThingPlug-&gt;디바이스 정보-&gt;디바이스 조회에서 확인 가능</td>
</tr>
<tr class="odd">
<td>Device ID</td>
<td>deviceID</td>
<td>디바이스 ID를 입력한다.<br />
디바이스 고유의 ID를 사용한다.</td>
</tr>
</tbody>
</table>

#### AT+GMMPDATA

* Format: AT+GMMPDATA=< Option >,< Data >
* OMP로 보내고 싶은 데이터를 해당 AT command를 이용해서 설정할 수 있다.
* 옵션에 따라 AT Command 이후 즉시 보내거나, 설정된 주기마다(AT+GMMPOPT로 설정) 데이터(Report type: Collect Data)를 보낼 수 있다.
* ex) AT+GMMPDATA=0,test data
* ex) AT+GMMPDATA=1,test data

<table>
<thead>
<tr class="header">
<th>Element</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Option</td>
<td>0 or 1</td>
<td>0: 설정된 주기마다 보낼 데이터를 설정한다.<br />
1: AT명령 즉시 데이터를 보낸다.</td>
</tr>
<tr class="even">
<td>Data</td>
<td>DATA</td>
<td>데이터</td>
</tr>
</tbody>
</table>

#### AT+GMMPOPT

* Format: AT+GMMPOPT=< Option >,< values >
* AT+GMMPOPT의 옵션에는 3가지가 있다.

1. 이벤트 로그. 디버그 프린트를 설정
2. Heartbeat 주기 설정
3. Reporting 주기 설정

  
**< Option > = 10**

* < Option > = 10은 이벤트 로그, 디버그 프린트를 설정하는 옵션이다. \\ \\
* ex) AT+GMMPOPT=10,< set >,< val1 >,< val2 >


<table>
<thead>
<tr class="header">
<th>Element</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>set</td>
<td>0 or 1</td>
<td>0: 현재 설정된 값을 읽는다.<br />
1: val1, val2의 값으로 설정한다.</td>
</tr>
<tr class="even">
<td>val1</td>
<td>0 or 1</td>
<td>0: 이벤트 로그를 프린트 하지 않는다.<br />
1: 이벤트 로그를 프린트 한다.</td>
</tr>
<tr class="odd">
<td>val2</td>
<td>0 or 1</td>
<td>0: 디버그 메세지를 프린트하지 않는다.<br />
1: 디버그 메세지를 프린트 한다.</td>
</tr>
</tbody>
</table>

  
**< Option > = 11**

* < Option > = 11은 Heartbeat 패킷의 전송 주기(Heartbeat Period)이다. \\ \\ 
* ex) AT+GMMPOPT=11,< period >

| Element | Example | Description               |
| ------- | ------- | ------------------------- |
| period  | 10      | Heartbeat 패킷 전송 주기(단위: 분) |

**< Option > = 12**

* < Option > = 12은 Delivery 패킷의 전송 주기(Report Period)이다. \\ \\
* ex) AT+GMMPOPT=12,< period >

| Element | Example | Description              |
| ------- | ------- | ------------------------ |
| period  | 10      | Delivery 패킷 전송 주기(단위: 분) |

## 6. EXAMPLE

### GMMP Delivery 데이터 설정

* AP ssid: SSID
* AP passphrase: 12345678

```cpp
AT
[OK]
AT+WSET=0,SSID
[OK]
AT+WSEC=0,,12345678
[OK]
AT+WNET=1
[OK]
AT+WJOIN
Joining : SSID
Successfully joined : SSID

[Link-Up Event]

    IP Addr    : 192.168.1.4
    Gateway    : 192.168.1.1

[OK]                    <<< WiFi Association

AT+MMSG=3               <<< GMMP 디버그 프린트
[OK]
AT+GMMPOPT=10,1,1,1
[OK]
AT+GMMPSET=1,61.250.21.211,31002,ThingPlug,0008dc000000,WIZnet,deviceID
GMMPStartService : 61.250.21.211, 31002, ThingPlug, 0008dc000000,
WIZnet, deviceID, 1 GMMPStartService : GMMP Thread is running 
[OK]
GmmpRecvThread : connect try 61.250.21.211:31002, 34208

[GMMP Connect]
<OMP><Marker:OPS> [GW->OMP]GW GMMP_SetReg Start
  .
  .
  .
GMMP Trace : Result Code\[0x0\], STATUS\_OK \</code\>
```

### GMMP Delivery 데이터 설정

```cpp
<<< GMMP로 ThingPlug 서버로 접속 된 이후 >>>

AT+GMMPDATA=0,test data
[OK]

<<< 전송 주기가 되면 아래 패킷 전송 >>>
<OMP><Marker:OPS> [GW->OMP]GMMP_SetDelivery Start 
<OMP><Marker:REQ> 
GMMP Trace :  AuthID =0008dc000000
GMMP Trace :  Auth Key =SP10000000key
GMMP Trace :  T-ID =89
GMMP Trace :  Domain Code =ThingPlug
GMMP Trace :  GW ID=SC10000000
GMMP Trace :  Device ID =
GMMP Trace :  ucReportType[0x1]
GMMP Trace :  ucMediaType[0x1]
GMMP Trace :  usMessageBody = test data <<< 설정한 데이터
GMMP Trace :  [GW->OMP]GMMP_SetDelivery End 
GMMP Trace :  Recv Header Type = c, Read Body Size = 43
<OMP><Marker:RSP> [OMP->GW]OPERATION_DELIVERY_RSP Start 
GMMP Trace :  AuthID =0008dc000000
GMMP Trace :  Auth Key =SP10000000key
GMMP Trace :  T-ID =89
GMMP Trace :  Domain Code =ThingPlug
GMMP Trace :  GW ID=SC10000000
GMMP Trace :  Device ID =
GMMP Trace :  Result Code[0x0], STATUS_OK
GMMP Trace :  unBackOffTime = 0
<OMP><Marker:OPE>
```