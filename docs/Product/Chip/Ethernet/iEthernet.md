---
id: iethernet
title: Ethernet
date: 2020-04-07
keywords: [w5500, w5100s, w6100,ethernet chip,wiznet,hardwired tcp/ip,arduino ethernet,pico ethernet]
description: Ethernet is the Ethernet controller chip that includes hardwired TCP/IP Core & MAC (\&PHY).
---


**Ethernet is the Ethernet controller chip that includes hardwired TCP/IP Core & MAC (\&PHY).**

-----


## Product Family


| Chip | Image | Embedded Core | Host I/F | TX/RX Buffer | HW Socket # | Network Performance | Operation Temp (℃) | Package | Size |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [W6300](W6300/Overview.md) | ![W6300](/img/products/w6300/overview/w6300_chip.png) | TCP/IPv4/IPv6, MAC & PHY | 8bit BUS, QSPI | 64KB | 8 | Max.91Mbps | -40 .. +85 | 48LQFP | 7x7 |
| [W6100](W6100/Overview.md) | ![W6100](/img/products/w6100/w6100_4.jpg) | TCP/IPv4/IPv6, MAC & PHY | 8bit BUS, Fast SPI | 32KB | 8 | Max.50Mbps | -40 .. +85 | 48LQFP / QFN | 7x7 |
| [W5100S](W5100S/Overview.md) | ![W5100S](/img/products/w5100s/w5100s_pm.png) | TCP/IP, MAC & PHY | 8bit BUS, SPI | 16KB | 4 | Max.25Mbps | -40 .. +85 | 48LQFP / QFN | 7x7 |
| [W5500](W5500/Overview.md) | ![W5500](/img/products/w5500/img_w5500h.jpg) | TCP/IP, MAC & PHY | Fast SPI | 32KB | 8 | Max.50Mbps | -40 .. +85 | 48LQFP | 7x7 |
| [W5300](W5300/W5300.md) | ![W5300](/img/products/w5300/w5300_280.jpg) | TCP/IP, MAC & PHY | 8/16bit BUS | 128KB | 8 | Max.80Mbps | -40 .. +85 | 100LQFP | 14x14 |
| [W5100](W5100/W5100.md) | ![W5100](/img/products/w5100/W5100-7.jpg) | TCP/IP, MAC & PHY | 8bit BUS, SPI | 16KB | 4 | Max.25Mbps | -40 .. +85 | 80LQFP | 10x10 |
<!-- | [W3150A+](W3150/W3150.md)<br />not recommended for new design | ![W3150A](/img/products/w3150/photo_w3150A-1.jpg) | TCP/IP & MAC | 8bit BUS, SPI | 16KB | 4 | Max.25Mbps | -40 .. +85 | 64LQFP | 10x10 |
| [W5200](W5200/w5200.md)<br />not recommended for new design |  | TCP/IP, MAC & PHY | Fast SPI | 32KB | 8 | Max.10Mbps | -40 .. +85 | 48QFN | 7x7 | -->


**We used iPerf tool for measure Network Performance.**

:::caution
<!-- 수정예정  -->
**W5200 , W3150A is not recommended for new design. This chip is not supported by ioLibrary.**

If there are any questions, please use our [`Forum`](https://maker.wiznet.io/forum) or [`contact us`](https://www.wiznet.io/inqueries/).
:::