---
id: udp
title: UDP
date: 2020-03-
---


## Content

# W5100S UDP Function

By setting some register and memory operation, W5100S provides internet
connectivity. This chapter describes how it can be operated.

## Initialization

### Basic Setting

For the W5100S operation, select and utilize appropriate registers shown
below.

1.  Mode Register (MR)
2.  Interrupt Mask Register (IMR)
3.  Retry Time-value Register (RTR)
4.  Retry Count Register (RCR)

For more information of above registers, refer to the “Register
Descriptions.”

### Setting network information

Basic network information setting for communication: It must be set the
basic network information.

1.  SHAR(Source Hardware Address Register)
      - It is prescribed that the source hardware addresses, which is
        set by SHAR, use unique hardware addresses (Ethernet MAC
        address) in the Ethernet MAC layer. The IEEE manages the MAC
        address allocation. The manufacturer which produces the network
        device allocates the MAC address to product.
      - Details on MAC address allocation refer to the website as below.
      - <http://www.ieee.org/>
      - <http://standards.ieee.org/regauth/oui/index.shtml>
2.  GAR(Gateway Address Register)
3.  SUBR(Subnet Mask Register)
4.  SIPR(Source IP Address Register)

### Set SOCKET memory information

This stage sets the socket TX/RX memory information. The base address
and mask address of each SOCKET are fixed and saved in this stage.

<B>*In case of, assign 2Kbytes TX/RX memory per SOCKET*</B>

``` c
In case of, assign 2Kbytes TX/RX memory per SOCKET
{
Sn_RXMEM_SIZE(ch) = (uint8 *) 2; // Assign 2K rx memory per SOCKET
Sn_TXMEM_SIZE(ch) = (uint8 *) 2; // Assign 2K rx memory per SOCKET

/* Same method, set gS1_TX_BASE, gS1_TX_MASK, gS2_TX_BASE, gS2_TX_MASK,
gS3_TX_BASE, gS3_TX_MASK, gS4_TX_BASE, gS4_TX_MASK*/
}
```

## Data Communications

After the initialization process, W5100S can transmit and receive the
data with others by ‘open’ the SOCKET of TCP, UDP, IPRAW, and MACRAW
mode. The W5100S supports the independently and simultaneously usable 4
SOCKETs. In this section, the communication method for each mode will be
introduced.

### UDP

The UDP is a Connection-less protocol. It communicates without
“connection SOCKET”. The TCP protocol guarantees reliable data
communication, but the UDP protocol uses datagram communication which
has no guarantees of data communication. Because the UDP does not use
“connection SOCKET”, it can communicate with many other devices with
the known host IP address and port number. This is a great advantage,
communication with many others by using just one SOCKET. But also it has
many problems such as loss of transmitted data, unwanted data received
from others, etc. To avoid these problems and guarantee reliability, the
host retransmits damaged data or ignores the unwanted data which is
received from others. The UDP protocol supports unicast, broadcast, and
multicast communication. It follows the below communication flow.

![UDP Operation Flow](/products/w5500/application/udp_flow.jpg)

### Unicast and Broadcast

The unicast is one method of UDP communication. It transmits data to one
destination at one time. On the other hand, the broadcast communication
transmits data to all receivable destinations by using ‘broadcast IP
address (255.255.255.255)’. For example, suppose that the user transmits
data to destination A, B, and C. The unicast communication transmits
each destination A, B, and C at each time. At this time, the
ARP<sub>TO</sub> can also occur when the user gets the destination
hardware address of destinations A, B and C. User cannot transmit data
to destinations which have ARP<sub>TO</sub>. The broadcast communication
can simultaneously transmit data to destination A, B and C at one time
by using “255.255.255.255” or “local address | (\~subnet address)” IP
address. At this time, there is no need to get the destination hardware
address about destination A, B and C, and also ARP<sub>TO</sub>is not
occurred.



