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



