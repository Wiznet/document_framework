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

<table>
<thead>
<tr>
<th></th>
<th><a href="W6100/w6100">W6100</a></th>
<th><a href="W5100S/overview">W5100S</a></th>
<th><a href="W5500/overview">W5500</a></th>
<th><a href="W5300/overview">W5300</a></th>
<th><a href="W5100/w5100">W5100</a></th>
<th><a href="W3150/overview">W3150A+</a></th>
<th><a href="W5200/w5200">W5200</a></th>
</tr>
</thead>
<tbody>
<tr class="even">
<td>Image</td>
<td><a href="/product-item/w6100/"><img src="https://www.wiznet.io/wp-content/uploads/2019/03/size_w6100_6.jpg"/><br /></a></td>
<td><a href="/product-item/w5100s/"><br /><img src="https://www.wiznet.io/wp-content/uploads/2018/03/제목-없음-1-1024x605.jpg"/><br /></a></td>
<td><a href="/product-item/w5500/"><img src="https://www.wiznet.io/wp-content/uploads/2015/04/w5500.png"/></a></td>
<td><a href="/product-item/w5300/"><img src="https://www.wiznet.io/wp-content/uploads/2015/04/W5300.png"/></a></td>
<td><a href="/product-item/w5100"><img src="https://www.wiznet.io/wp-content/uploads/2015/04/W5100.png" /></a></td>
<td><a href="/product-item/w3150a+/"><img src="https://www.wiznet.io/wp-content/uploads/2015/04/W3150A_plus.png"/></a></td>
<td><a href="/product-item/w5200"><img src="https://www.wiznet.io/wp-content/uploads/2015/04/W5200.png" /></a></td>
</tr>
<tr class="odd">
<td>Embedded Core</td>
<td>TCP/IPv4/IPv6, MAC &amp; PHY</td>
<td>TCP/IP, MAC &amp; PHY</td>
<td>TCP/IP, MAC &amp; PHY</td>
<td>TCP/IP, MAC &amp; PHY</td>
<td>TCP/IP, MAC &amp; PHY</td>
<td>TCP/IP &amp; MAC</td>
<td>TCP/IP, MAC &amp; PHY</td>
</tr>
<tr class="even">
<td >Host I/F</td>
<td>8bit BUS, Fast SPI</td>
<td>8bit BUS, SPI</td>
<td>Fast SPI</td>
<td>8/16bit BUS</td>
<td>8bit BUS, SPI</td>
<td>8bit BUS, SPI</td>
<td>Fast SPI</td>
</tr>
<tr class="odd">
<td >TX/RX Buffer</td><td>32KB</td><td>16KB</td><td>32KB</td><td>128KB</td><td>16KB</td><td>16KB</td><td>32KB</td>
</tr>
<tr class="even">
<td >HW Socket #</td><td>8</td><td>4</td><td>8</td><td>8</td><td>4</td><td>4</td><td>8</td>
</tr>
<tr class="odd">
<td >Network Performance</td><td>Max.25Mbps</td><td>Max.25Mbps</td><td>Max 15Mbps</td><td>Max 80Mbps</td><td>Max.25Mbps</td><td>Max.25Mbps</td><td>Max. 10Mbps</td>
</tr>
<tr class="even">
	<td >Operation Temp (℃)</td><td>-40 ~ 85</td><td>-40 ~ 85</td><td>-40 ~ 85</td><td>-40 ~ 85</td><td>-40 ~ 85</td><td>-40 ~ 85</td><td>-40 ~ 85</td>
</tr>
<tr class="odd">
<td >Package</td><td>48LQFP / QFN></td>
<td>48LQFP / QFN</td>
<td>48LQFP</td>
<td>100LQFP</td>
<td>80LQFP</td>
<td>64LQFP</td>
<td>48QFN</td>
</tr>
<tr class="even">
<td >Size</td><td>7x7</td>
<td>7x7<br /></td>
<td>7x7</td>
<td>14x14</td>
<td>10x10</td>
<td>10x10</td>
<td>7x7</td>
</tr>
<tr class="odd">
<td>Evaluation Board</td>
<td><a href="/Product/iEthernet/W6100/w6100_evb">W6100-EVB</a></td>
<td><a href="/Product/iEthernet/W5100s/w5100s_evb">W5100S-EVB</a><br /><br /><a href="/Product/iEthernet/W5100S/w5100s-evb-pico">W5100S-EVB-Pico</a></td>
<td><a href="/Product/iEthernet/W5500/W5500-EVB/w5500_evb">W5500-EVB</a></td>
<td><a href="/Product/iEthernet/W5300/w5300-evb">W5300E01-ARM</a></td>
<td><a href="/Product/iEthernet/W5100/w5100-evb">W5100E01-AVR</a></td>
<td><a href="/Product/iEthernet/W3150/w3150-evb">EVB-B1+</a></td>
<td>W5200E01-M3</td>
</tr>
</tbody>
</table>

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