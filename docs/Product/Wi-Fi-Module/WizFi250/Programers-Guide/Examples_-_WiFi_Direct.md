---
id: examples_wifi_direct
title: Examples - WiFi Direct
date: 2020-04-24
---

This section explains how to connect to smartphone using WizFi250 with
< WiFi Direct>. In this example, target smartphone information is as
below.  
( smartphone model : Samsung Galaxy Note 2, Android Version : 4.3, Model
Number : SHV-E250S )  

## Basic Information

< WiFi Direct> is supported after WizFi250 F/W v1.0.1.1.  

```python
WizFi250 Version 1.0.1.1 (WIZnet Co.Ltd)
at+minfo
FW version/HW version
1.0.1.1/WizFi250 Rev 1.0
[OK]
```

## WiFi Direct Start

First, you need to enable < WiFi Direct> in your smartphone.  
And, you can start < WiFi Direct> in WizFi250 using < AT+WP2P_START>
command.

```python
AT+WP2P_START
STA MAC: CE:52:AF:C6:CF:B5
[OK]
```

## WiFi Direct Connect

To connect your smartphone to WizFi250 via < WiFi Direct>, select
< WizFi250-P2P> in the list as below.  

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/screenshot_2014-05-12-09-31-05.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/screenshot_2014-05-12-09-31-05.png").default} alt=""/></a>

After dozens of seconds, your smartphone will connect to WizFi250 via
< WiFi Direct >

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/screenshot_2014-05-12-09-33-00.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/screenshot_2014-05-12-09-33-00.png").default} alt=""/></a>

And you can see the result of < WiFi Direct> in WizFi250.

    AT+WP2P_START
    STA MAC: CE:52:AF:C6:CF:B5
    [OK]
    Found P2P device: SHV-E250S
    Sending Identity
    Sending Identity
    Sending nonce
    Sending hashes
    Sending WSC Done
    
    [Link-Up Event]
      IP Addr    : 192.168.49.219
      Gateway    : 192.168.49.1

As above, ip address of WizFi250 is <192.168.49.219> and that of
smartphone is <192.168.49.1>  

## Data Communication 

After the connection, you can issue
< AT+SCON > command for for data communication.  
```
at+scon=o,tsn,,,4000,0
[OK]
```

And, I just used a general TCP client App in the smartphone for the
test.  

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/screenshot_2014-05-12-09-34-14.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/screenshot_2014-05-12-09-34-14.png").default} alt=""/></a>

Now, WizFi250 and smartphone can communicate each other via < WiFi Direct>.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/screenshot_2014-05-12-09-35-12.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/screenshot_2014-05-12-09-35-12.png").default} alt=""/></a>  

```
at+scon=o,tsn,,,4000,0
[OK]

[CONNECT 0]

{0,192.168.49.1,47160,19}Hello WizFi250.....
{0,192.168.49.1,47160,19}Hello WizFi250.....`
```
