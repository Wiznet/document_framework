---
id: users_manual-[EN]
title: User's Manual-[EN]
date: 2020-03-
---

## Content

# WIZ750SR User's Manual

\*\* Supported Languages \*\*  
\* [English](/products/wiz750sr/usermanual/en) (current page)  
\* [Korean](/products/wiz750sr/usermanual/ko)

![](/products/wiz750sr/docs_icon.png)

-----

WIZ750SR is WIZnet’s latest Serial to Ethernet module that users can
connect with any device that provides serial interface and use the
Ethernet network to control and monitor.

WIZ750SR can be used in three different modes, **WIZ750SR-TTL,
WIZ750SR-232, or WIZ750SR-485(RS-422/485 supported)** depending on the
user’s serial interface. WIZ750SR supports **two kinds of IP address
allocation method\[1\]** and **four kinds of Ethernet operation
mode\[2\]**. The **data packing option** allows WIZ750SR to
differentiate and send the serial data stream into blocks of \[special
character\], \[length\], and \[time\].

**This document explains the key features of WIZ750SR module product.**

-----

## Network Settings

### IP Address Settings

WIZ750SR provides two ways of assigning the IP address. The allocation
of IP address includes the IP address, Gateway address, Subnet mask, and
DNS server address.

  - **Static(Manual) IP allocation**
      - Also known as the static allocation; the product will operate
        according to the network information entered by the user. Both
        the public IP address and private IP address can be assigned.
      - In cases of using TCP client or TCP mixed mode, the DNS address
        must be set if the remote host\[3\] is a domain name\[4\] and
        not an IP address.
      - Please refer to the example at [Getting Started Guide: WIZ750SR
        Factory
        Settings](/products/wiz750sr/gettingstarted/en#wiz750sr_factory_settings)
        for assigning a private IP address.

<!-- end list -->

  - **Automatic IP allocation (DHCP)**
      - This method will automatically assign the IP address integrated
        in the NAT Router via the DHCP server. Users do not need to do
        any settings and devices using the assigned IP from the same
        router can communicate with each other. Usually a private IP
        address\[5\] from the dynamic IP allocation range\[6\] is
        assigned, but there are cases when a public IP is
        assigned((Example) When an IP address is assigned by an ISP
        (Internet Service Provider) )).
      - The DHCP server assigns the IP address, Gateway address, Subnet
        mask, and DNS address.
          - In cases of using a router, WIZ750SR can be used in TCP
            client mode to sync with the external server.
          - In cases of using TCP server mode, users need to set the
            router’s [port
            forwarding](https://en.wikipedia.org/wiki/Port_forwarding)
            for access of external network.

<!-- end list -->

1.  Static / DHCP

2.  Network operation modes: TCP server / TCP client / TCP mixed / UDP

3.  Remote host means the destination where the serial device is sending
    data via the network

4.  Example) www.google.com

5.  Typically will look like 192.168.xxx.xxx in the IPv4 class C range

6.  Typical router will separate the external IP address for
    communication with external network and the internal IP address for
    internal network via router
