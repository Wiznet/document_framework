---
id: PoE-Main
title: PoE-Main
date: 2023-11-22
keywords:
  - Raspberry Pi Pico
  - RP2040
  - Ethernet
  - W5100S
  - W5500
  - W6100
  - PoE
description: WIZnet Pico PoE made for prototyping and testing Ethernet capabilities on Pico
---

## Overview

By using WIZPoE-S1, which supports both Mode A and Mode B, you can efficiently power external applications within the 7W range without the need for a power cable, not only for Ethernet but also for various external applications

<!-- <a target="_blank" href={require('/img/osh/PoE/WIZPoE-S1/WIZPoE-S1.png').default}><img src={require('/img/osh/PoE/WIZPoE-S1/WIZPoE-S1.png').default} alt="WIZPoE-S1"/></a> -->

### Product Family
|   | Image | UART | LAN Interface | Pin Header & Pitch | Operation Temp (℃) | Dimension (mm) | Evaluation Board |
| --- | ----- | ---- | ------------- | ------------------ | ------------------- | -------------- | ---------------- |
| [WIZPoE-S1](././Open-Source-Hardware/PoE/WIZPoE-S1.md) | ![WIZPoE-S1](/img/osh/PoE/WIZPoE-S1/WIZPoE-S1.png) | 1xTTL(3.3V) |Transformer|1x12<br />2.0mm<br />Pin Header  x 3ea|-20 ~ 85| 50mm x 30mm x 5.7mm | [WIZ500SR-RP-EVB](WIZ5xxSR-RP-Series/WIZ500SR-RP/datasheet-en.md#wiz500sr-rp-evb-set) |
| [WIZPoE-P1](././Open-Source-Hardware/PoE/WIZPoE-S1.md) | ![WIZPoE-P1](/img/osh/PoE/WIZPoE-S1/WIZPoE-P1.png) | 1xTTL(3.3V) |RJ-45|2x7<br />2.54mm<br />Pin Header<br />x 1ea|-20 ~ 85| 40mm x 66.5mm x 15mm | [WIZ505SR-RP-EVB](WIZ5xxSR-RP-Series/wiz505sr-rp-evb-en.md) |

### PoE

- IEEE802.3af compliant
- Mode A(Endspan), Mode B(Midspan)
- Wide input voltage range 40Vdc ~ 60Vdc
- High DC/DC convertion efficiency
- Non-Isolation
- Internal build in 2 channel bridge rectifiers

#### PoE Electrical Specifications

|  No   | Value                 | Specification  |
| :---: | --------------------- | -------------- |
|   1   | Input Voltage         | 40 ~ 60V       |
|   2   | Output Voltage        | 5V (1.5A)      |
|   3   | Power                 | 7.5W           |
|   4   | Switching Frequency   | 300kHz         |
|   6   | Operating Temperature | Up to 85℃     |
|   7   | Minimum Operating Current | 150mA      |


## Technical Reference

### Schematic V100

<!-- <a target="_blank" href={require('/img/osh/WIZnet_Pico_PoE/Sch_WIZnet_Pico_PoE_FIN_1.png').default}><img src={require('/img/osh/WIZnet_Pico_PoE/Sch_WIZnet_Pico_PoE_FIN_1.png').default} alt="Sch_WIZnet_Pico_PoE_FIN_1"/></a>
- <a href="/img/osh/WIZnet_Pico_PoE/Sch_WIZnet_Pico_PoE_FIN.pdf" target="_blank">Sch_WIZnet_Pico_PoE_FIN</a> -->

### Schematic & Partlist & Gerber File

- [Go to Github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/08_OSHW/WIZnet%20Pico%20PoE)

### Dimension (Unit : mm)

<!-- <a target="_blank" href={require('/img/osh/WIZnet_Pico_PoE/Dimension.png').default}><img src={require('/img/osh/WIZnet_Pico_PoE/Dimension.png').default} alt="Dimension"/></a> -->



