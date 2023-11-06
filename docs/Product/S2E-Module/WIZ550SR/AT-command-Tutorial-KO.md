---
id: atcommand_tutorial-KO
title: AT Command Tutorial [KO]
date: 2020-04-24
---

## 예제1. 고정 IP 환경에서 TCP 서버로 데이터 통신

**1. WIZ550SR를 고정 IP로 설정**  
  
WIZ550S2E의 Network IP(192.168.3.101), Subnet Mask(255.255.255.0),
Gateway(192.168.3.1)를 설정한다.

```
<TX> AT+NSET=S,192.168.3.101,255.255.255.0,192.168.3.1\r\n
<RX> [S]\r\n
```

참고로, AT+NSTAT 명령으로 현재 설정된 Network 정보를 확인하면 아래와
같다.

```
<TX> AT+NSTAT\r\n
<RX> [S,,S,192.168.3.101,255.255.255.0,192.168.3.1,168.126.63.1]\r\n
```
  
**2. WIZ550SR를 TCP 서버(포트 5000)로 설정**  
  
WIZ550S2E를 포트 5000번의 TCP 서버로 설정하는 소켓을 생성한다.

```
<TX> AT+NOPEN=S,5000\r\n
<RX> [S]\r\n
```

참고로, AT+NSOCK 명령으로 현재의 소켓 정보를 확인해보면, 아래와 같다.

```
<TX> AT+NSOCK=0\r\n
<RX> [S,,S,5000]\r\n
```
  
**3. TCP Client가 WIZ550SR에 접속**  
  
PC의 TCP 클라이언트가 WIZ550SR에 접속하는 순간 다음의 메시지를 확인할 수있다.

```
<RX> [V,0,0]\r\n
```
  
**4. TCP Client에게 Data 보내기**  
  
TCP Client에게 아래와 같은 방법으로 "Hello"라고 하는 5 Byte의 데이터를
보내면, Wait Response와 Success Response를 확인 할 수 있다.

```
<TX> AT+NSEND=0,5\r\nHello
<RX> [W,0]\r\n[S,0]\r\n
```
  
**5. TCP Client로부터 Data("Hi") 받기**  
  
TCP Client가 "Hi"라고 하는 2 Byte의 데이터를 보내면, 아래와 같은 메시지를 확인할 수 있다.

```
<RX> [R,0,2]\r\nHi\r\n
```
  
**6. 접속된 TCP Connetion 끊기**  
  
현재 접속된 소켓의 TCP Connection을 끊기 위해서는 아래의 명령을 수행하면 된다.

```
<TX> AT+NCLOSE=0\r\n
<RX> [W,0]\r\n[S,0]\r\n
```

참고로, 이 때 AT+NSOCK 명령으로 현재의 소켓 정보를 확인해보면, 아래와 같다.

```
<TX> AT+NSOCK=0\r\n
<RX> [S,,I]\r\n
```
  
**Appendix**  

Data mode에서 Coomand mode로 전환하기

```
<TX> +++
<RX> \r\n\r\n\r\n[W,0]\r\n[S,0]\r\n (20 Byte)
```
  
Command mode에서 Data mode로 전환하기

```
<TX> AT+MDATA\r\n
<RX> [S]\r\n (5 Byte)
```

## 예제2. 유동 IP 환경에서 www.google.com의 웹 페이지를 받기

**1. WIZ550SR를 유동 IP로 설정**  
  
WIZ550SR를 유동 IP로 설정한다.

```
<TX> AT+NSET=D\r\n
<RX> [S]\r\n
```

참고로, AT+NSTAT 명령으로 현재 설정된 Network 정보를 확인하면 아래와 같다.

```
<TX> AT+NSTAT\r\n
<RX> [S,,D,192.168.3.101,255.255.255.0,192.168.3.1,168.126.63.1]\r\n
```
  
**2. www.google.com의 IP 주소 확인**  
  
아래와 같이 DNS를 통해 www.google.com의 IP 주소를 확인한다.

```
<TX> AT+FDNS=www.google.com\r\n
<RX> [S,,173.194.126.168]\r\n
```
  
**3. WIZ550SR를 구글 웹서버에 접속**  
  
WIZ550S2E를 구글 웹서버에 접속한다. DNS를 통해 확인한 구글 웹서버의 IP는
173.194.126.168이다. 아래 예제에서는 로컬 포트를 입력하지 않았지만, 로컬
포트는 사용자에 의해 지정될 수도 있다.

```
<TX> AT+NOPEN=C,,173.194.126.168,80\r\n
<RX> [W,0]\r\n[S,0]\r\n
```

참고로, AT+NSOCK 명령으로 현재의 소켓 정보를 확인해보면, 아래와 같다.

```
<TX> AT+NSOCK=0\r\n
<RX> [S,,C,2014,173.194.126.168,80]\r\n
```
  
**4. WIZ550SR를 구글 웹서버에 데이터 전송**  
  
WIZ550S2E에서 아래와 같은 방법으로 구글 웹서버에 18 Byte의 데이터를 전송한다.

```
<TX> AT+NSEND=0,18\r\nGET / HTTP/1.1\r\n\r\n
<RX> [W,0]\r\n[S,0]\r\n
```
  
**5. 구글 웹서버에서 데이터 받기**  
  
구글 웹서버에서 데이터를 보내면, 아래와 같이 데이터 크기와 내용을 확인 할 수 있다.

```
<RX> [R,0,523]\r\nHTTP/1.1 302 Found\r\nCache-Control: private\r\nContent-Type: text/html; charset=UTF-8\r\n..............
```
  
**6. 구글 웹서버에 접속된 TCP 연결 끊기**  
  
현재 구글 웹서버에 접속된 소켓의 TCP Connection을 끊기 위해서는 아래의 명령을 수행하면 된다.

```
<TX> AT+NCLOSE=0\r\n
<RX> [W,0]\r\n[S,0]\r\n
```

## 예제3. 유동 IP 환경에서 둘 이상의 TCP 서버와 데이터 통신

**1. WIZ550SR를 유동 IP로 설정**  
  
WIZ550S2E를 유동 IP로 설정한다.

```
<TX> AT+NSET=D\r\n
<RX> [S]\r\n
```

참고로, AT+NSTAT 명령으로 현재 설정된 Network 정보를 확인하면 아래와 같다.

```
<TX> AT+NSTAT\r\n
<RX> [S,,D,192.168.3.101,255.255.255.0,192.168.3.1,168.126.63.1]\r\n
```
  
**2. WIZ550SR를 첫번째 TCP 서버에 접속**  
  
첫번째 TCP 서버의 IP는 192.168.3.201이다. 아래 예제에서는 로컬 포트는 2010 지정하였다.

```
<TX> AT+NOPEN=C,2010,192.168.3.201,5000\r\n
<RX> [W,0]\r\n[S,0]\r\n
```

참고로, AT+NSOCK 명령으로 현재의 소켓 정보를 확인해보면, 아래와 같다.

```
<TX> AT+NSOCK=0\r\n
<RX> [S,,C,2010,192.168.3.201,5000]\r\n
```
  
**3. WIZ550SR를 첫번째 TCP 서버에 데이터 전송**  
  
WIZ550S2E에서 아래와 같은 방법으로 첫번째 TCP 서버에 10 Byte의 데이터를 전송한다.

```
<TX> AT+NSEND=0,10\r\n1111111111
<RX> [W,0]\r\n[S,0]\r\n
```
  
**4. 첫번째 TCP 서버에 접속된 TCP 연결 끊기**  
  
현재 첫번째 TCP 서버에 접속된 소켓의 TCP Connection을 끊기 위해서는 아래의 명령을 수행하면 된다.

```
<TX> AT+NCLOSE=0\r\n
<RX> [W,0]\r\n[S,0]\r\n
```
  
**5. WIZ550SR를 두번째 TCP 서버에 접속**  
  
두번째 TCP 서버의 IP는 192.168.3.202이다. 아래 예제에서는 로컬 포트는 2011 지정하였다.

```
<TX> AT+NOPEN=C,2011,192.168.3.202,5000\r\n
<RX> [W,0]\r\n[S,0]\r\n
```
  
**6. WIZ550SR를 두번째 TCP 서버에 데이터 전송**  
  
WIZ550S2E에서 아래와 같은 방법으로 두번째 TCP 서버에 10 Byte의 데이터를 전송한다.

```
<TX> AT+NSEND=0,10\r\n2222222222
<RX> [W,0]\r\n[S,0]\r\n
```
  
**7. 두번째 TCP 서버에 접속된 TCP 연결 끊기**  
  
현재 두번째 TCP 서버에 접속된 소켓의 TCP Connection을 끊기 위해서는 아래의 명령을 수행하면 된다.

```
<TX> AT+NCLOSE=0\r\n
<RX> [W,0]\r\n[S,0]\r\n
```
  
**8. WIZ550SR를 세번째 TCP 서버에 접속**  
  
세번째 TCP 서버의 IP는 192.168.3.202이다. 아래 예제에서는 로컬 포트는 2012 지정하였다.

```
<TX> AT+NOPEN=C,2012,192.168.3.202,5000\r\n
<RX> [W,0]\r\n[S,0]\r\n
```
  
**9. WIZ550SR를 세번째 TCP 서버에 데이터 전송**  
  
WIZ550S2E에서 아래와 같은 방법으로 세번째 TCP 서버에 10 Byte의 데이터를 전송한다.

```
<TX> AT+NSEND=0,10\r\n3333333333
<RX> [W,0]\r\n[S,0]\r\n
```
  
**10. 세번째 TCP 서버에 접속된 TCP 연결 끊기**  
  
현재 세번째 TCP 서버에 접속된 소켓의 TCP Connection을 끊기 위해서는 아래의 명령을 수행하면 된다.

```
<TX> AT+NCLOSE=0\r\n
<RX> [W,0]\r\n[S,0]\r\n
```

## 예제4. 고정 IP 환경에서 둘 이상의 장치와 UDP 데이터 통신

**1. WIZ550SR를 고정 IP로 설정**  
  
WIZ550SR의 Network IP(192.168.3.101), Subnet Mask(255.255.255.0), Gateway(192.168.3.1)를 설정한다.

```
<TX> AT+NSET=S,192.168.3.101,255.255.255.0,192.168.3.1\r\n
<RX> [S]\r\n
```
  
**2. WIZ550SR를 UDP 모드로 설정**  

```
<TX> AT+NOPEN=U,5000\r\n
<RX> [S,0]\r\n
```

**3. 첫번째 UDP 장치에서 데이터를 보내왔을 때**  
  
IP가 192.168.3.201이고 로컬 포트가 4001인 첫번째 UDP 장치에서
"AAAAAAAAAA"라고 하는 10 Byte의 데이터를 보내면, 아래와 같은 메시지를
확인할 수 있다.

```
<RX> [R,0,10,192.168.3.201,4001]\r\nAAAAAAAAAA\r\n
```
  
**4. 첫번째 UDP 장치에게 데이터를 보낼 때**  
  
IP가 192.168.3.201이고 로컬 포트가 4001인 첫번째 UDP 장치에게 아래와
같은 방법으로 "aaaaaaaaaa"의 10 Byte의 데이터를 전송한다.

```
<TX> AT+NSEND=0,10,192.168.3.201,4001\r\naaaaaaaaaa
<RX> [W,0]\r\n[S,0]\r\n
```
  
**5. 두번째 UDP 장치에서 데이터를 보내왔을 때**  
  
IP가 192.168.3.202이고 로컬 포트가 4001인 두번째 UDP 장치에서
"BBBBBBBBBB"라고 하는 10 Byte의 데이터를 보내면, 아래와 같은 메시지를
확인할 수 있다.

```
<RX> [R,0,10,192.168.3.202,4002]\r\nBBBBBBBBBB\r\n
```
  
**6. 두번째 UDP 장치에게 데이터를 보낼 때**  
  
IP가 192.168.3.202이고 로컬 포트가 4002인 두번째 UDP 장치에게 아래와
같은 방법으로 "bbbbbbbbbb"의 10 Byte의 데이터를 전송한다.

```
<TX> AT+NSEND=0,10,192.168.3.202,4002\r\nbbbbbbbbbb
<RX> [W,0]\r\n[S,0]\r\n
```
  
**7. 세번째 UDP 장치에서 데이터를 보내왔을 때**  
  
IP가 192.168.3.203이고 로컬 포트가 4003인 세번째 UDP 장치에서
"CCCCCCCCCC"라고 하는 10 Byte의 데이터를 보내면, 아래와 같은 메시지를
확인할 수 있다.

```
<RX> [R,0,10,192.168.3.203,4003]\r\nCCCCCCCCCC\r\n
```
  
**8. 세번째 UDP 장치에게 데이터를 보낼 때**  
  
IP가 192.168.3.203이고 로컬 포트가 4003인 세번째 UDP 장치에게 아래와
같은 방법으로 "cccccccccc"의 10 Byte의 데이터를 전송한다.

```
<TX> AT+NSEND=0,10,192.168.3.203,4003\r\ncccccccccc
<RX> [W,0]\r\n[S,0]\r\n
```
  
**9. UDP 소켓 닫기**  

```
<TX> AT+NCLOSE=0\r\n
<RX> [W,0]\r\n[S,0]\r\n
```