---
id: iomodule
title: ioModule
date: 2020-04-15
---

## Overview

WIZnet Network IO module includes an iEthernet chip & MAG-JACK (RJ45 with X’FMR). As no effort is required to interface iEthernet chip and Transformer, Network module is the ideal option for users who want to
develop their Internet enabling system rapidly.

-----

## Product Family

<!--
  - [W5100S-io](W5100S-io) : W5100S No MagJack, Compact size(Hardware compatible with W5500-io, W6100-io)
  - [W5500-io](W5500-io) : W5500 No MagJack, Compact size(Hardware compatible with W5100S-io, W6100-io)
  - [W6100-io](W6100-io) : W6100 No MagJack, Compact size(Hardware compatible with W5100S-io, W5500-io)
  - [WIZ850io](wiz850io): W5500 w/ MagJack, Compact size(Hardware compatible with WIZ820io)
  - [WIZ550io](wiz550io): W5500 w/ MagJack, Unique MAC Address, Auto-configurable
  - [WIZ820io](wiz820io): W5200 w/ MagJack, Compact Size
  - [WIZ810MJ](wiz810mj): W5100 w/ MagJack, 2mm pitch, No PCB Through-hole
  - [WIZ811MJ](wiz811mj): W5100 w/ MagJack, 2.54mm pitch, Two PCB Through-hole
  - [WIZ812MJ](wiz812mj): W5100 w/ MagJack, 2.54mm pitch, Four PCB Through-hole
  - [WIZ830MJ](wiz830mj): W5300 w/ MagJack High-throughput
  - [NM7010B+](nm7010b): W3150A+ w/ External PHY and MagJack
-->

|    | [W5100S-io](./W5100S-io.md) | [W5500-io](./W5500-io.md) | [W6100-io](./W6100-io.md) |
| --- | -------------------------| -------------------------| --------------------|
| Image | ![W5100S-io](/img/products/w5100s-io/w5100s-io-top.png) | ![W5500-io](/img/products/w5500-io/w5500-io-top.png) | ![W6100-io](/img/products/w6100-io/w6100-io-top.png) |
| Embedded Block | W5100S, No MAG Jack | W5500, No MAG Jack | W6100, No MAG Jack |
| Host Interface | SPI | SPI | SPI |
| HW Socket | 4 | 8 | 8 |
| Auto MDIX | Yes | No | Yes |
| Pin Header | Two 1x7(2.54mm) <br /> One 1x6(2.54mm) <br />(Just soldering point.<br /> Not include pin header) | Two 1x7(2.54mm) <br /> One 1x6(2.54mm) <br />(Just soldering point. <br />Not include pin header) | Two 1x7(2.54mm) <br /> One 1x6(2.54mm) <br />(Just soldering point. <br />Not include pin header) |
| Dimension (mm) | 24 x 20 x 2.6 | 24 x 20 x 2.6 | 24 x 20 x 2.6 |
| Operation Temp (℃) | -40..85 | -40..85 | -40..85 |
| MAC Address | No |No |No |

|    | [WIZ610io](./WIZ610io.md) | [WIZ610mj](./WIZ610MJ.md) | [WIZ810Sio](./WIZ810Sio.md) | [WIZ810SMJ](./WIZ810SMJ.md) | [WIZ850io](./WIZ850io.md) | [WIZ550io](./wiz550io.md) | [WIZ830MJ](./WIZ830MJ.md) |
| --- | -------------------------| -------------------------| --------------------| -------------------| ------------------ | --------------- | ------------ |
| Image | ![WIZ610io](/img/products/wiz610io/wiz610io_1.png) | ![WIZ610MJ](/img/products/wiz610mj/wiz610mj1.png) | ![WIZ810Sio](/img/products/wiz810sio/wiz810io_2.png) | ![WIZ810Sio](/img/products/wiz810smj/wiz810smj_2.png) | ![WIZ850io](/img/products/wiz850io/wiz850io.png)   | ![](/img/products/wiz550io/wiz550io_small_005.png) | ![](/img/products/wiz830mj/wiz830_web_1.jpg) |
| Embedded Block | W6100, MAG Jack | W6100, MAG Jack | W5100S, MAG Jack | W5100S, MAG Jack | W5500, MAG Jack | W5500, MAG Jack | W5300, MAG Jack |
| Host Interface | SPI | SPI, 8bit bus | SPI | SPI | SPI | SPI | 8/16bit Bus |
| HW Socket | 8 | 8 | 4 | 4 | 8 | 8 | 8 |
| Auto MDIX | Yes | Yes | Yes | Yes | No | No | Yes |
| Pin Header | 	Two 1x6 | Two 1x6 | Two 1x6 | Two	1x10 | Two 1x6 | 1x8, 1x6 | Two 2x14 |
| Dimension (mm) | 23 x 25 x 23.5 | 25 x 52 x 23 | 23 x 25 x 23.5 | 25 x 52 x 23 | 23 x 25 x 18 | 54 x 26 x 24 | 53.3x34x19.5 |
| Operation Temp (℃) | -40..85 | -40..85 | -40..85 | -40..85 | -40..85 | -40..85 | -40..85 |
| MAC Address | No |No |No |No |No | Yes | No |

|    | [WIZ810MJ](./WIZ810MJ.md) | [WIZ811MJ](./WIZ811MJ.md) | [WIZ812MJ](./WIZ812MJ.md) | [NM7010B+](./NM7010B%2B.md) | [WIZ820io](./WIZ820io.md) |
| -- | ------------------------- | ------------------------- | ------------------------- | --------------------------- | ------------------------- |
| Image | ![WIZ810MJ](/img/products/wiz810mj/wiz810mj.png) | ![WIZ811MJ](/img/products/wiz811mj/wiz811mj.png) | ![WIZ812MJ](/img/products/wiz812mj/wiz812mj.png) | ![NM71B+](/img/products/nm7010/nm7010b.png) | ![WIZ820io](/img/products/wiz820io/wiz820io_web_1.jpg)<br />Not recommended for new design |
| Embedded block | W5100, MAG Jack | W5100, MAG Jack | 	W5100, MAG Jack | W3150A+, PHY, MAG Jack | W5200, MAG Jack |
| Host Interface | 8bit Bus, SPI | 8bit Bus, SPI | 8bit Bus, SPI | 8bit Bus, SPI | SPI |
| HW Socket | 4 | 4 | 4 | 4 | 8 |
| Auto MDIX | Yes | Yes | Yes | Yes | Yes |
| Pin Header | Two 2x14 | Two 2x10 | Two 2x10 | Two 2x14 | Two 1x6 |
| Pin Pitch | 2mm | 2.54mm | 2.5mm | 2mm | 2mm |
| Dimension (mm) | 52x25x21 | 55.5x25x23.5 | 55.5x25x23.5 | 52x25x21 | 23 x 25 x 18 |
| Operation Temp (℃) | -40 .. 85 | -40 .. 85 | -40 .. 85 | -40 .. 85 | -40 .. 85 |
| MAC Address | No | No | No | No | No |

### WIZ81xMJ Comparision Table

![](/img/products/io_module/comparison-table.jpg)

-----
