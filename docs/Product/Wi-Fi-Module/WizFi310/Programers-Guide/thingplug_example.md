---
id: thingplug_example
title: WizFi310 ThingPlug Example
date: 2020-07-03
---

## ThingPlug

ThingPlug는 SK Telecom의 IoT 플랫폼으로, oneM2M 표준 기반의 IoT 서비스를 제공합니다.  
  

## How to connect to ThingPlug in WizFi310

You can find the detailed description about the AT Commands for
connecting to ThingPlug at the link below.  
[AT Commands list for Connecting to
ThingPlug](at_commands#connecting-thingplug-commands)  
  
### WizFi310 ThingPlug 연동

WizFi310을 ThingPlug의 디바이스로 등록하기  
  
**ThingPlug 사이트 안내**

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/1.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/1.png").default} alt=""/></a>

`https://thingplug.net`

### ThingPlug 사이트에 디바이스 등록

개발자 계정으로 로그인 후, Develop - 디바이스 연동 - 디바이스
관리 탭으로 이동하면 다음과 같은 화면에서 디바이스를 등록할 수 있다.  
  
<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/2.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/2.png").default} alt=""/></a>  
<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/3.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/3.png").default} alt=""/></a>

* 디바이스 이름, 디바이스 아이디, 위치값을 필수 입력 값으로 등록하게 되면,

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/4.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/4.png").default} alt=""/></a>


* 디바이스 선 등록을 완료하게 된다.

### WizFi310으로 선 등록된 디바이스와 연동

1. AP에 접속한 WizFi310을
[AT+SKTPCON](at_commands#atsktpcon)
커맨드로 ThingPlug에 접속한다.  
2. ThingPlug에 성공적으로 접속이 되면,
[AT+SKTPDEVICE](at_commands#atsktpdevice)
커맨드로 디바이스 등록을 한다.  
  
<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/5.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/5.png").default} alt=""/></a>

### WizFi310으로 ThingPlug에 Data 전송

1. [AT+SKTPCONTAINER](at_commands#atsktpcontainer)커맨드로
Container를 생성한다.  
2. 해당 디바이스의 생성된 Container에
[AT+SKPSEND](at_commands#atsktpsend)
커맨드로 데이터를 전송한다.  
3. 전송된 데이터는 ThingPlug에서 데이터 조회와 대시보드를 통해 확인이 가능하다.  
\* 전송된 데이터의 조회는 Develop - 디바이스 데이터 조회 탭에서 확인이 가능하다.  
<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/6.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/6.png").default} alt=""/></a>

\* 대시보드에서의 데이터 확인은 Service - 대시보드 탭으로 이동하여, 대시보드를 구성하면 설정된 주기(기본 60초)로
대시보드에서 데이터 확인이 가능하다.
<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/7.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/7.png").default} alt=""/></a>  

### Data 전송 포맷(TTV)
 
* TTV - T(Type), T(Data Type), V(Value)는 Device Platform과 ThingPlug Service Platform 간의 정보전달 규격이다.

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/9.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/9.png").default} alt=""/></a>

* Type : 각 설정 값을 의미한다.  Ex) 0x01 : 온도, 0x02 : 습도,,, \\
* Data Type : 데이터 자료형을 의미한다. Ex) int, char,,,, \\
* Value : Data Type에 따라 길이가 달라진다. \\

### ThingPlug에 등록된 디바이스 제어

1. 대시보드에 제어 위젯을 추가한다.  
  
<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/10.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/10.png").default} alt=""/></a>  
<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/11.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/11.png").default} alt=""/></a>  
  
2. 대시보드에 생성된 제어 위젯의 버튼을 누르면, 다음과 같이 디바이스의 응답을 기다린다.  
  
<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/12.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/12.png").default} alt=""/></a>  
  
3. 설정된 디바이스의 동작에 따라, 제어 위젯에서 결과를 나타낸다.  
  
<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/13.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/13.png").default} alt=""/></a>