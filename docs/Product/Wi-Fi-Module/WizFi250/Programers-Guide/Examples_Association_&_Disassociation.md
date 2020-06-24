---
id: examples_association_disassociation
title: Examples - Association & Disassociation
date: 2020-05-12
---

## Station Mode using WPA2 Static IP

This section explains how to connect to AP using WizFi250 with static IP address. In this example, target AP information is as below. ( SSID : WizFiDemoAP, Security : WPA2, Key : 12345678 )

```python
AT   				(Sent AT command with 0x0d (Hex of Enter button))
[OK] 		 	 	(Response meaning successful execution)

AT+WSET=0,WizFiDemoAP	(AT command for setting WiFi association)
[OK]

AT+WSEC=0,WPA2,12345678	(AT command for setting WiFi security)
[OK]

AT+WNET=0,192.168.12.101,255.255.255.0,192.168.12.1	(AT command for setting Static IP address)
[OK]

AT+WJOIN			(AT command executing AP association)
Joining : WizFiDemoAP
Successfully joined : WizFiDemoAP

[Link-Up Event]
  IP Addr   : 192.168.12.101
  Gateway   : 192.168.12.1
[OK]

AT+WLEAVE			(AT command making disassociation from AP association)

[Link-Down Event]
[OK]
```

## Station Mode using WPA2 DHCP

This section explains how to connect WizFi250 to target AP with DCHP Client Mode

```python
AT   				(Sent AT command with 0x0d (Hex of Enter button))
[OK] 				(Response meaning successful execution)

AT+WSET=0,WizFiDemoAP	(AT command for setting WiFi association)
[OK]

AT+WSEC=0,WPA2,12345678	(AT command for setting WiFi security)
[OK]

AT+WNET=1	(AT command for setting DHCP)
[OK]

AT+WJOIN			(AT command executing AP association)
Joining : WizFiDemoAP
Successfully joined : WizFiDemoAP

[Link-Up Event]
  IP Addr   : 192.168.12.13
  Gateway   : 192.168.12.1
[OK]

AT+WLEAVE			(AT command making disassociation from AP association) 

[Link-Down Event]
[OK]
```

## AP Mode using WPA2 Static IP

This section explains how to set AP mode using WizFi250. In AP mode, WizFi250 have to set static IP address. (AT+WNET=0,xxx,xxx,xxx) After setting AP mode, WizFi250 will operate DHCP Server. Thus, when smart phone or other devices connect to WizFi250, WizFi250 will give IP address to connected device.

```python
AT   				(Sent AT command with 0x0d (Hex of Enter button))
[OK] 				(Response meaning successful execution)

AT+WSET=1,WizFi250_AP	(AT command for setting WiFi association information)
[OK]

AT+WSEC=1,WPA2,12345678	(AT command for setting WiFi security)
[OK]

AT+WNET=0,192.168.12.105,255.255.255.0,192.168.12.1	(AT command for setting Static IP address)
[OK]

AT+WJOIN			(AT command executing run AP mode)
Joining : WizFi250_AP

[Link-Up Event]
  IP Addr   : 192.168.12.105
  Gateway   : 192.168.12.1
[OK]

AT+WLEAVE			(AT Command disassociating from AP association) 

[Link-Down Event]
[OK]
```