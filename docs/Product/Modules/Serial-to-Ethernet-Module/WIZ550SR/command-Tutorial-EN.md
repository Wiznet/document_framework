---
id: command_tutorial-EN
title: Command Tutorial [EN]
date: 2020-04-16
---

## Example 1. Data communication in Static IP and TCP Server mode
  
**1. Set WIZ550SR with Static IP**  
  
Set Network IP(192.168.3.101), Subnet Mask(255.255.255.0) and
Gateway(192.168.3.1) of WIZ550SR

```
<TX> AT+NSET=S,192.168.3.101,255.255.255.0,192.168.3.1\r\n
<RX> [S]\r\n
```

If you check with AT+NSTAT command after above command, you can get
response like below.

```
<TX> AT+NSTAT\r\n
<RX> [S,,S,192.168.3.101,255.255.255.0,192.168.3.1,168.126.63.1]\r\n
```
  
**2. Set operating mode of WIZ550SR with TCP Server mode whose port
number is 5000**  
  
Create a socket in WIZ550SR with local port number 5000

```
<TX> AT+NOPEN=S,5000\r\n
<RX> [S]\r\n
```

You can check the current status of the socket which you made with
AT+NSOCK. Below is an example of it.

```
<TX> AT+NSOCK=0\r\n
<RX> [S,,S,5000]\r\n
```
  
**3. a TCP Client connects to WIZ550SR**  
  
When A TCP Client of PC(or any Device) PC connected to WIZ550SR , you
will get a message from WIZ550SR like below

```
<RX> [V,0,0]\r\n
```
  
**4. Send data to TCP Client**  
  
If you send 5 bytes data "Hello" to TCP Client with AT+NSEND like below,
you will get two step response, Wait Response and Success Response.  
\[W, 0\] means that WIZ550SR recognized and is processing the command
but it is not completed yet. And '0' means socket ID.

```
<TX> AT+NSEND=0,5\r\nHello
<RX> [W,0]\r\n[S,0]\r\n
```
  
**5. Receive data "Hi" from TCP Client**  
  
If TCP Client sends 2 bytes data "Hi", then you will get response from
WIZ550SR like below

```
<RX> [R,0,2]\r\nHi\r\n
```
  
**6. Disconnect current TCP connection**  
  
Do send command like below to disconnect current connection.

```
<TX> AT+NCLOSE=0\r\n
<RX> [W,0]\r\n[S,0]\r\n
```

After above command, if you check the status of socket with AT+NSOCK
command then you will get response like below.

```
<TX> AT+NSOCK=0\r\n
<RX> [S,,I]\r\n
```
  
**Appendix**  
Changing mode from Data mode to Coomand mode

```
<TX> +++
<RX> \r\n\r\n\r\n[W,0]\r\n[S,0]\r\n (20 Byte)
```
  
Changing mode from Command mode to Data mode

```
<TX> AT+MDATA\r\n
<RX> [S]\r\n (5 Byte)
```    
    
## Example 2. Retrieving web page of www.google.com in Dynamic IP and TCP Client mode

**1. Set WIZ550SR with Dynamic IP**  
  
Set WIZ550SR with Dynamic IP.

```
<TX> AT+NSET=D\r\n
<RX> [S]\r\n
```

If you check with AT+NSTAT command after above command, you can get
response like below.

```
<TX> AT+NSTAT\r\n
<RX> [S,,D,192.168.3.101,255.255.255.0,192.168.3.1,168.126.63.1]\r\n
```
  
**2. Get IP address of www.google.com**  
  
Obtain IP address of www.google.com by DNS function like below command.

```
<TX> AT+FDNS=www.google.com\r\n
<RX> [S,,173.194.126.168]\r\n
```
  
**3. Connect to google web server**  
  
Make TCP Client socket to connect to google.com.  
AT+NOPEN needs Server's IP address not Domain name, so you should put IP
address which you got by above command AT\_FDNS  
You can see that local port number was not written.  
If you don't write local port number, local port number will be
allocated dynamically by WIZ550SR.

```
<TX> AT+NOPEN=C,,173.194.126.168,80\r\n
<RX> [W,0]\r\n[S,0]\r\n
```

You can check the current status of the socket which you made with
AT+NSOCK. Below is an example of it.

```
<TX> AT+NSOCK=0\r\n
<RX> [S,,C,2014,173.194.126.168,80]\r\n
```
  
**4. Send data to google web server**  
  
Let WIZ550SR send 18 bytes data to google.com with below command

```
<TX> AT+NSEND=0,18\r\nGET / HTTP/1.1\r\n\r\n
<RX> [W,0]\r\n[S,0]\r\n
```
  
**5. receive data from google.com**  
  
If WIZ550SR receives data from google.com, you can know its data size
and data like below.

```
<RX> [R,0,523]\r\nHTTP/1.1 302 Found\r\nCache-Control: private\r\nContent-Type: text/html; charset=UTF-8\r\n..............
```
  
**6. Disconnect current TCP connection**  
  
Do send command like below to disconnect current connection.

```
<TX> AT+NCLOSE=0\r\n
<RX> [W,0]\r\n[S,0]\r\n
```

## Example 3. Data communication with more than two servers in Dynamic IP

  
**1. Set WIZ550SR with Dynamic IP**  
  
Set WIZ550SR with Dynamic IP.

```
<TX> AT+NSET=D\r\n
<RX> [S]\r\n
```

If you check with AT+NSTAT command after above command, you can get
response like below.

```
<TX> AT+NSTAT\r\n
<RX> [S,,D,192.168.3.101,255.255.255.0,192.168.3.1,168.126.63.1]\r\n
```
  
**2. Connect to the first TCP Server**  
  
If the first TCP Server's IP address is 192.168.3.201, its port number
is 5000 and local port number is 2010, then You can send a command like
below.

```
<TX> AT+NOPEN=C,2010,192.168.3.201,5000\r\n
<RX> [W,0]\r\n[S,0]\r\n
```

You can check the current status of the socket which you made with
AT+NSOCK. Below is an example of it.

```
<TX> AT+NSOCK=0\r\n
<RX> [S,,C,2010,192.168.3.201,5000]\r\n
```
  
**3. Send data to the first TCP Server**  
  
Send 10 bytes data to the first TCP Server like below.

```
<TX> AT+NSEND=0,10\r\n1111111111
<RX> [W,0]\r\n[S,0]\r\n
```
  
**4. Disconnect the connection with the first TCP Server**  
  
Do below command in order to disconnect current connection.

```
<TX> AT+NCLOSE=0\r\n
<RX> [W,0]\r\n[S,0]\r\n
```
  
**5. Connect to the second TCP Server**  
  
If the second TCP Server's IP address is 192.168.3.202, its port number
is 5000 and local port number is 2011, then You can send a command like
below.

```
<TX> AT+NOPEN=C,2011,192.168.3.202,5000\r\n
<RX> [W,0]\r\n[S,0]\r\n
```
  
**6. Send data to the second TCP Server**  
  
Send 10 bytes data to the second TCP Server like below.

```
<TX> AT+NSEND=0,10\r\n2222222222
<RX> [W,0]\r\n[S,0]\r\n
```
  
**7. Disconnect the connection with the second TCP Server**  
  
Do below command in order to disconnect current connection.

```
<TX> AT+NCLOSE=0\r\n
<RX> [W,0]\r\n[S,0]\r\n
```
  
**8. Connect to the third TCP Server**  
  
If the third TCP Server's IP address is 192.168.3.203, its port number
is 5000 and local port number is 2012, then You can send a command like
below.

```
<TX> AT+NOPEN=C,2012,192.168.3.203,5000\r\n
<RX> [W,0]\r\n[S,0]\r\n
```
  
**9. Send data to the third TCP Server**  
  
Send 10 bytes data to the third TCP Server like below.

```
<TX> AT+NSEND=0,10\r\n3333333333
<RX> [W,0]\r\n[S,0]\r\n
```
  
**10. Disconnect the connection with the third TCP Server**  
  
Do below command in order to disconnect current connection.

```
<TX> AT+NCLOSE=0\r\n
<RX> [W,0]\r\n[S,0]\r\n
```    
    
## Example 4. Data communication with more than two devices in Static IP

  
**1. Set WIZ550SR with Static IP**  
  
Set Network IP(192.168.3.101), Subnet Mask(255.255.255.0) and
Gateway(192.168.3.1) in WIZ550SR.

```
<TX> AT+NSET=S,192.168.3.101,255.255.255.0,192.168.3.1\r\n
<RX> [S]\r\n
```
  
**2. Open a UDP socket**  
Open a UDP socket with its local port 5000.

```
<TX> AT+NOPEN=U,5000\r\n
<RX> [S,0]\r\n
```
  
**3. Get data from the first UDP device**  
  
If the first UDP device, which its IP address is 192.168.3.201 and port
number is 4001, sent "AAAAAAAAAA"  
then WIZ550SR notify to you like below.

```
<RX> [R,0,10,192.168.3.201,4001]\r\nAAAAAAAAAA\r\n
```
  
**4. Send data to the first UDP device**  
  
Send 10 bytes data "aaaaaaaaaa" to the first UDP device.

```
<TX> AT+NSEND=0,10,192.168.3.201,4001\r\naaaaaaaaaa
<RX> [W,0]\r\n[S,0]\r\n
```
  
**5. Get data from the second UDP device**  
  
If the second UDP device, which its IP address is 192.168.3.202 and port
number is 4002, sent "BBBBBBBBBB"  
then WIZ550SR notify to you like below.

```
<RX> [R,0,10,192.168.3.202,4002]\r\nBBBBBBBBBB\r\n
```
  
**6. Send data to the second UDP device**  
  
Send 10 bytes data "bbbbbbbbbb" to the second UDP device.

```
<TX> AT+NSEND=0,10,192.168.3.202,4002\r\nbbbbbbbbbb
<RX> [W,0]\r\n[S,0]\r\n
```
  
**7. Get data from the third UDP device**  
  
If the third UDP device, which its IP address is 192.168.3.203 and port
number is 4003, sent "CCCCCCCCCC"  
then WIZ550SR notify to you like below.

```
<RX> [R,0,10,192.168.3.203,4003]\r\nCCCCCCCCCC\r\n
```
  
**8. Send data to the third UDP device**  
  
Send 10 bytes data "cccccccccc" to the second UDP device.

```
<TX> AT+NSEND=0,10,192.168.3.203,4003\r\ncccccccccc
<RX> [W,0]\r\n[S,0]\r\n
```
  
**9. Close UDP socket**  
   
```
<TX> AT+NCLOSE=0\r\n
<RX> [W,0]\r\n[S,0]\r\n
```
