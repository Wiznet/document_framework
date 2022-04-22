---
id: iethernet
title: iEthernet
date: 2020-04-07
---

## Overview

iEthernet is the Ethernet controller chip that includes hardwired TCP/IP
Core & MAC (\&PHY).

-----


## Product Family

:::caution

**W5200 is not recommended for new design. This chip is not supported by ioLibrary.**

If there are any questions, please use our [`Forum`](https://forum.wiznet.io) or [`contact us`](https://www.wiznet.io/inqueries/).
:::

|                     | [W6100](W6100/W6100.md) | [W5100S](W5100S/Overview.md) | [W5500](W5500/Overview.md) | [W5300](W5300/W5300.md) | [W5100](W5100/W5100.md) | [W3150A+](W3150/W3150.md) | [W5200](W5200/w5200.md) |
| ------------------- | ----------------------- | --- | --- | --- | --- | --- | --- |
| Image               | ![W6100](/img/products/w6100/w6100_4.jpg) | ![W5100S](/img/products/w5100s/w5100s_pm.png) | ![W5500](/img/products/w5500/img_w5500h.jpg) | ![W5300](/img/products/w5300/w5300_280.jpg) | ![W5100](/img/products/w5100/W5100-7.jpg) | ![W3150A](/img/products/w3150/photo_w3150A-1.jpg) |  |
| Embedded Core       | TCP/IPv4/IPv6, MAC & PHY | TCP/IP, MAC & PHY | TCP/IP, MAC & PHY | TCP/IP, MAC & PHY | TCP/IP, MAC & PHY | TCP/IP & MAC | TCP/IP, MAC & PHY |
| Host I/F            | 8bit BUS, Fast SPI  | 8bit BUS, SPI | Fast SPI | 8/16bit BUS | 8bit BUS, SPI | 8bit BUS, SPI | Fast SPI |
| TX/RX Buffer        | 32KB                   | 16KB | 32KB | 128KB | 16KB | 16KB | 32KB |
| HW Socket #         | 8                       | 4 | 8 | 8 | 4 | 4 | 8 |
| Network Performance | Max.25Mbps         | Max.25Mbps | Max.15Mbps | Max.80Mbps | Max.25Mbps | Max.25Mbps | Max.10Mbps |
| Operation Temp (℃) | -40 .. +85              | -40 .. +85 | -40 .. +85 | -40 .. +85 | -40 .. +85 | -40 .. +85 | -40 .. +85 |
| Package             | 48LQFP / QFN            | 48LQFP / QFN | 48LQFP | 100LQFP | 80LQFP | 64LQFP | 48QFN |
| Size                | 7x7                     | 7x7 | 7x7 | 14x14 | 10x10 | 10x10 | 7x7 |
| Evaluation Board    | [W6100-EVB](W6100/W6100-EVB.md) | [W5100S-EVB](W5100S/W5100S-EVB.md) <br /><br /> [W5100S-EVB-Pico](W5100S/w5100s-evb-pico.md) | [W5500-EVB](W5500/W5500-EVB/W5500-EVB.md) | [W5300-E01-ARM](W5300/W5300-EVB.md) | [W5100E01-AVR](W5100/W5100-EVB.md) | [EVB-B1+](W3150/W3150-EVB.md) | W5200E01-M3 |

## Product Application Project

We put together the projects about W5x00, W6100 and W7500. Currently, We are adding as integration version projects called W5x00. Also the projects of W5100,W5200 and W5300 were implemented as AVRs and It is not specified here.

For more detailed information, please visit the [Github](https://wiznet-iolibrary.github.io/)

-----

## WIZnet ioLibrary Examples

We put together the projects about W5x00, W6100 and W7500. Currently, We are adding as integration version projects called W5x00.
Also the projects of W5100,W5200 and W5300 were implemented as AVRs and It is not specified here.

### Example Table 

|             |                            W6100                             |                            W5x00                             |                   W5100S-EVB                   |                          W5500-EVB                           |
| ----------- | :----------------------------------------------------------: | :----------------------------------------------------------: | :--------------------------------------------: | :----------------------------------------------------------: |
| Loopback    | [[LINK](https://github.com/WIZnet-ioLibrary/W6100EVB-Loopback)] | [[LINK](https://github.com/WIZnet-ioLibrary/W5x00_Loopback_with_W5100S_EVB)] | [[LINK](https://github.com/Wiznet/W5100S-EVB)] | [[LINK](https://github.com/Wiznet/Loopback_FRDM-KL25Z_Eclipse)] |    
| SPI DMA     |                                                              | [[LINK](https://github.com/WIZnet-ioLibrary/W5x00_Loopback_with_W5100S_EVB)] | [[LINK](https://github.com/Wiznet/W5100S-EVB)] |                                                              |
| DHCP        |                                                              |   [[LINK](https://github.com/WIZnet-ioLibrary/W5x00_DHCP)]   | [[LINK](https://github.com/Wiznet/W5100S-EVB)] |                                                              |
| DNS         |  [[LINK](https://github.com/WIZnet-ioLibrary/W6100EVB-DNS)]  |   [[LINK](https://github.com/WIZnet-ioLibrary/W5x00_DNS)]    |                                                |                                                              |
| DDNS        |                                                              |                                                              |                                                | [[LINK](https://github.com/Wiznet/DDNS_LPC11E36_LPCXpresso)] |
| FTP Client  | [[LINK](https://github.com/WIZnet-ioLibrary/W6100EVB-FTPC)]  |                                                              |                                                |                                                              |
| FTP Server  | [[LINK](https://github.com/WIZnet-ioLibrary/W6100EVB-FTPServer)] |                                                              |                                                | [[LINK](https://github.com/Wiznet/FTPC_LPC11E36_LPCXpresso)] |
| MQTT        | [[LINK](https://github.com/WIZnet-ioLibrary/W6100EVB-MQTT)]  |   [[LINK](https://github.com/WIZnet-ioLibrary/W5x00_MQTT)]   |                                                |                                                              |
| SNMPv1      |                                                              |  [[LINK](https://github.com/WIZnet-ioLibrary/W5x00-SNMPv1)]  |                                                | [[LINK](https://github.com/Wiznet/SNMP_LPC11E36_LPCXpresso)] |
| SMTP        |                                                              |                                                              |                                                | [[LINK](https://github.com/Wiznet/SNTP_LPC11E36_LPCXpresso)] |
| SNTP        |                                                              |   [[LINK](https://github.com/WIZnet-ioLibrary/W5x00_SNTP)]   |                                                | [[LINK](https://github.com/Wiznet/SNTP_LPC11E36_LPCXpresso)] |
| TFTP        |                                                              |                                                              |                                                | [[LINK](https://github.com/Wiznet/TFTP_LPC11E36_LPCXpresso)] |
| HTTP Server | [[LINK](https://github.com/WIZnet-ioLibrary/W6100EVB-HTTP_Server)] | [[LINK](https://github.com/WIZnet-ioLibrary/W5x00-HTTPServer)] |                                                | [[LINK](https://github.com/Wiznet/HTTPServer_LPC11E36_LPCXpresso)] |
| HTTP Client |        [[LINK](https://github.com/WIZnet-ioLibrary/)]        | [[LINK](https://github.com/WIZnet-ioLibrary/W5x00-HTTPClient)] |                                                |                                                              |
| PPPoE       |                                                              |                                                              |                                                |                                                              |
| IPRAW       |                                                              |                                                              |                                                |                                                              |
| NTP         |  [[LINK](https://github.com/WIZnet-ioLibrary/W6100EVB-NTP)]  |                                                              |                                                |                                                              |
| TLS         |  [[LINK](https://github.com/WIZnet-ioLibrary/W6100EVB-TLS)]  |   [[LINK](https://github.com/WIZnet-ioLibrary/W5x00-TLS)]    |                       -                        |                              -                               
| Multicast   |                                                              | [[LINK](https://github.com/WIZnet-ioLibrary/W5x00-Multicast)] |                                                |                                                              |
| UpnP        |                                                              |                                                              |                                                |                                                              |
| Twitter     |                                                              |                                                              |                                                |                                                              |
| ModBUS      |                                                              |                                                              |                                                |                                                              |
| Telnet      |                                                              |                                                              |                                                |                                                              |
| S2E         |                                                              |                                                              |                                                |                                                              |
| Addr Auto   | [[LINK](https://github.com/WIZnet-ioLibrary/W6100EVB-AddressAutoConfiguration)] |                              -                               |                       -                        |                              -                               |



### Example List

- W5x00
  - [W5x00-Multicast ](https://github.com/WIZnet-ioLibrary/W5x00-Multicast)
  - [W5x00-TLS](https://github.com/WIZnet-ioLibrary/W5x00-TLS)
  - [W5x00-DMA(SPI)-Loopback](https://github.com/WIZnet-ioLibrary/W5x00_DMA_with_W5100S_EVB)
  - [W5x00-Loopback](https://github.com/WIZnet-ioLibrary/W5x00_Loopback_with_W5100S_EVB)
  - [W5x00-DHCP](https://github.com/WIZnet-ioLibrary/W5x00_DHCP)
  - [W5x00-DNS](https://github.com/WIZnet-ioLibrary/W5x00_DNS)
  - [W5x00-SNTP](https://github.com/WIZnet-ioLibrary/W5x00_SNTP)
- W5100S
  - [W5100S-EVB](https://github.com/Wiznet/W5100S-EVB)
    - DMA, Loopback, DHCP client example project 

- W5500
  - [Loopback_FRDM-KL25Z_Eclipse](https://github.com/Wiznet/Loopback_FRDM-KL25Z_Eclipse)
  - [W5500_EVB](https://github.com/Wiznet/W5500_EVB)
    - Loopback Test: Loopback test example project (TCP server / TCP client / UDP)
      - HTTP Server: Web server example project
      - FTP Server: FTP server example project
      - SNTP Client: NTP client example project
      - TFTP Client: TFTP client example project
      - Individual projects of W5500-EVB
        - [SNMPv1_LPC11E36_LPCXpresso](https://github.com/Wiznet/SNMP_LPC11E36_LPCXpresso)
        - [HTTPServer_LPC11E36_LPCXpresso](https://github.com/Wiznet/HTTPServer_LPC11E36_LPCXpresso)
        - [Loopback_LPC11E36_LPCXpresso](https://github.com/Wiznet/Loopback_LPC11E36_LPCXpresso)
        - [DDNS_LPC11E36_LPCXpresso](https://github.com/Wiznet/DDNS_LPC11E36_LPCXpresso)
        - [FTPC_LPC11E36_LPCXpresso](https://github.com/Wiznet/FTPC_LPC11E36_LPCXpresso)
        - [TFTP_LPC11E36_LPCXpresso](https://github.com/Wiznet/TFTP_LPC11E36_LPCXpresso)
        - [FTP_LPC11E36_LPCXpresso](https://github.com/Wiznet/FTP_LPC11E36_LPCXpresso)
        - [BLYNK_LPC11E36_LPCXpresso](https://github.com/Wiznet/BLYNK_LPC11E36_LPCXpresso)
        - [SNTP_LPC11E36_LPCXpresso](https://github.com/Wiznet/SNTP_LPC11E36_LPCXpresso)
        - [SNMP_LPC11E36_LPCXpresso](https://github.com/Wiznet/SNMP_LPC11E36_LPCXpresso)
        - [nRF52DK_to_W5500Shield](https://github.com/Wiznet/nRF52DK_to_W5500Shield)

- W6100
  - [W6100EVB_CUBEIDE](https://github.com/WIZnet-ioLibrary/W6100EVB_CUBEIDE)
    - [W6100EVB-DNS](https://github.com/WIZnet-ioLibrary/W6100EVB-DNS)
    - [W6100EVB-Loopback](https://github.com/WIZnet-ioLibrary/W6100EVB-Loopback)
    - [W6100EVB-MQTT](https://github.com/WIZnet-ioLibrary/W6100EVB-MQTT)
    - [W6100EVB-AddressAutoConfiguration](https://github.com/WIZnet-ioLibrary/W6100EVB-AddressAutoConfiguration)
    - [Nucleo-L053-W6100-Loopback](https://github.com/WIZnet-ioLibrary/Nucleo-L053-W6100-Loopback)
    - [W6100EVB-TLS](https://github.com/WIZnet-ioLibrary/W6100EVB-TLS)
    - [W6100EVB-HTTP_Server](https://github.com/WIZnet-ioLibrary/W6100EVB-HTTP_Server)
    - [W6100EVB-FTPServer](https://github.com/WIZnet-ioLibrary/W6100EVB-FTPServer)
    - [W6100EVB-FTPC](https://github.com/WIZnet-ioLibrary/W6100EVB-FTPC)
    - [W6100EVB-NTP](https://github.com/WIZnet-ioLibrary/W6100EVB-NTP)
    - [w6100-evb-gcc-eclipse-tftps-simple](https://github.com/WIZnet-ioLibrary/w6100-evb-gcc-eclipse-tftps-simple)
    - [w6100-evb-gcc-eclipse-tftpc-simple](https://github.com/WIZnet-ioLibrary/w6100-evb-gcc-eclipse-tftpc-simple)
    - [W6100EVB-HTTP_Client](https://github.com/WIZnet-ioLibrary/)
    - [w6100-evb-gcc-eclipse](https://github.com/WIZnet-ioLibrary/w6100-evb-gcc-eclipse)
    - [w6100-evb-gcc-eclipse-loopback](https://github.com/WIZnet-ioLibrary/w6100-evb-gcc-eclipse-loopback)
    - [W6100-EVB-Hal-TrueSTUDIO](https://github.com/Wiznet/W6100-EVB-Hal-TrueSTUDIO)

 - WIZ550WEB
  - [WIZ550Web_STM32F103RB_CoIDE](https://github.com/Wiznet/WIZ550Web_STM32F103RB_CoIDE)
  - [W6100-EVB-gcc-eclipse](https://github.com/Wiznet/W6100-EVB-gcc-eclipse)

 - W7100A/W7100
  - [Application notes](http://old.wiznet.co.kr/sub_modules/kr/resources/Download_View.asp?PK_Num=668&page=1&SF_Part=&SF_KeyWord=)
    - DDNS, Serial to Ethernet, Telnet

 - W7200
  - [Application notes](https://github.com/Wiznet/W7200)
    - SMTP, SNMP, Twitter, UPnP	