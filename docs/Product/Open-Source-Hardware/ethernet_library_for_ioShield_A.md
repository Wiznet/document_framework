---
id: ethernet_library_for_ioShield_A
title: Using WIZnet Ethernet Library for ioShield-A
date: 2020-04-03
---

Connecting to the Internet using the W5500 powered Ethernet Shield

  * [Arduino Ethernet Library](#arduino-ethernet-library)
  * [Update Ethernet Library](#update-ethernet-library)
  * [Change code](#change-code-depending-wiznet-chip-w5100-w5200-or-w5500)
  * [Examples](#examples)

## Arduino Ethernet Library

from : [http://arduino.cc/en/Reference/Ethernet](http://arduino.cc/en/Reference/Ethernet)

Arduino Ethernet Shield allows an Arduino board to connect to the internet. It can serve as either a server accepting incoming connections or a client making outgoing ones. The library supports up to four concurrent connection (incoming or outgoing or a combination).

For more details, please visit : [Arduino Ethernet Library
Page](http://arduino.cc/en/Reference/Ethernet).

Before COMPILING THE SOFTWARE, **Download and install Arduino 1.0.5** from the Arduino software page.

  - **Note: Certain functions may not work in earlier versions.** Before
    using this library, please update [the latest verison of Arduino
    Software](http://arduino.cc/en/Main/Software).
  - See the [Getting Started with
    Arduino](http://arduino.cc/en/Guide/HomePage).
  - See the [foundations page from
    Arduino](http://arduino.cc/en/Tutorial/Foundations) for in-depth
    description of core concepts of the Arduino hardware and software
  - See the [hacking page from
    Arduino](http://arduino.cc/en/Hacking/HomePage) for information on
    extending and modifying the Arduino hardware and software
  - See the [Links page from
    Arduino](http://arduino.cc/en/Tutorial/Links), [Playground page from
    Arduino](http://playground.arduino.cc/) for other documentation.

## Update Ethernet Library

To use ioShiled-A(WIZ550io), you need to update new WIZnet Ethernet
Library. Because ioShield-A use W5500 new chipset instead of W5100 which
is used original Ethernet Shield.

The first step is to download the latest version of the [Wiznet Ethernet
Library from
GitHub](https://github.com/Wiznet/WIZ_Ethernet_Library.git).

-----

How to update the Ethernet library.

1.  **Open the archive and extract the file "WIZ_Ether_Library.zip"**
    to a convenient spot (I use the Desktop). 
2.  **Put(Overwrite) the "Ethernet" folder in this library to the
    libraries folder in the Arduino Installation Folder** (for example,
    normaly you can find Arduino libraries folder as "C:\\Program
    Files\\Arduino\\libraries\\".), \<del\> or select "Sketch -> Import
    Library... -> Add Library..." in Aruino IDE, and select the folder
    loacation. and then, you can see the new directory in your "My
    Document/Arduino/libraries/".\</del\>
    ![](/img/osh/ioshield-a/cap_2013-08-27_11-10-53-747.png) 

## Change code depending WIZnet chip, W5100, W5200 or W5500

1.  Select the define variable in "Ethernet/utility/W5100.h". When you
    use WIZ550io, ioShield-Series, you uncomment "\#define
    W5500\_ETHERNET\_SHIELD".

```cpp title="w5100.h"

/* 
* Copyright (c) 2013 by WIZnet <support@wiznet.co.kr> 
* This file is free software; you can redistribute it and/or modify 
* it under the terms of either the GNU General Public License version 2 
* or the GNU Lesser General Public License version 2.1, both as 
* published by the Free Software Foundation. 
*/

#ifndef W5100_H_INCLUDED 
#define W5100_H_INCLUDED

#include <avr/pgmspace.h> 
#include <SPI.h>

typedef uint8_t SOCKET;

//#define W5100_ETHERNET_SHIELD // original ethernet shield from Arduino 
//#define W5200_ETHERNET_SHIELD // Ethernet Shield version 2 from Seeed. 
#define W5500_ETHERNET_SHIELD // ioShield Series
```

## Examples

Now you are ready to go to "File -\> Example -\> Ethernet", and select
examples what you want. There are many simple examples in Ethernet
Library Folder as like
![](/img/osh/ioshield-a/cap_2013-08-26_15-51-17-988.png)

-----

  - [Test Twitter](twitter_test): A Twitter Simple
    Posting or refer [http://playground.arduino.cc/Code/TwitterLibrary](http://playground.arduino.cc/Code/TwitterLibrary)
  - [Test HTTP Client(WebClient)](http_client): A Simple HTTP Client test

Basically, you can refer the usage for each examples in Arduino site.

  - [http://arduino.cc/en/Tutorial/ChatServer](http://arduino.cc/en/Tutorial/ChatServer): set up a simple chat server.
  - [http://arduino.cc/en/Tutorial/WebClient(http://arduino.cc/en/Tutorial/WebClient): make a HTTP request.
  - [http://arduino.cc/en/Tutorial/WebClientRepeating](http://arduino.cc/en/Tutorial/WebClientRepeating): Make repeated HTTP requests.
  - [http://arduino.cc/en/Tutorial/WebServer](http://arduino.cc/en/Tutorial/WebServer): host a simple HTML page that displays analog sensor values.
  - [XivelyClient](http://arduino.cc/en/Tutorial/PachubeClient): connect to ~~pachube.com~~ **xively.com**, a free datalogging site. **not a
    big change except service name.**
  - [XivelyClientString](http://arduino.cc/en/Tutorial/PachubeClientString):
    send strings to ~~pachube.com~~ **xively.com**. **not a big change except service name.**
  - [http://arduino.cc/en/Tutorial/BarometricPressureWebServer](http://arduino.cc/en/Tutorial/BarometricPressureWebServer): outputs the values from a barometric pressure sensor as a web page.
  - [http://arduino.cc/en/Tutorial/UDPSendReceiveString](http://arduino.cc/en/Tutorial/UDPSendReceiveString): Send and receive text strings via UDP.
  - [http://arduino.cc/en/Tutorial/UdpNtpClient](http://arduino.cc/en/Tutorial/UdpNtpClient): Query a Network Time  Protocol (NTP) server using UDP.
  - [http://arduino.cc/en/Tutorial/DnsWebClient](http://arduino.cc/en/Tutorial/DnsWebClient): DNS and DHCP-based Web client.
  - [http://arduino.cc/en/Tutorial/DhcpChatServer](http://arduino.cc/en/Tutorial/DhcpChatServer): A simple DHCP Chat Server
  - [http://arduino.cc/en/Tutorial/DhcpAddressPrinter](http://arduino.cc/en/Tutorial/DhcpAddressPrinter): Get an IP address via DHCP and print it out
  - [http://arduino.cc/en/Tutorial/TelnetClient](http://arduino.cc/en/Tutorial/TelnetClient): A simple Telnet client