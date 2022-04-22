---
id: wi_fi_module
title: Wi-Fi Module
date: 2020-05-13
---

## Overview

WIZnet’s WizFi modules offer a quick, easy, and cost-effective way for
device and appliance manufacturers to add WiFi capabilities to their
products. They provide UART or SPI interfaces which enable connections
to any 8/16/32-bit microcontroller via simple AT commands.

-----

## Product Family

<!--
  - [WizFi360](WizFi360/wizfi360): Single band 2.4GHz
    802.11b/g/n, low cost solution 
  - [WizFi250](WizFi250/wizfi250): Single band 2.4GHz 802.11b/g/n
    Wi-Fi module
  - [WizFi310](WizFi310/wizfi310): Single band 2.4GHz
    802.11b/g/n, Support MQTT, GMMP, TLS applications protocols 
  - [WizFi630S](WizFi630S/wizfi630s): Single band 2.4GHz
    802.11b/g/n Gateway module
  - [WizFi630A](WizFi630A/wizfi630a): Discontinued
-->


|   | [WizFi360](./WizFi360/WizFi360.md) | [WizFi310](./WizFi310/WizFi310.md) | [WizFi250](./WizFi250/WizFi250.md) |
| -- | --------------------------------- | ---------------------------------- | ---------------------------------- |
| Image | ![WizFi360-PA(PCB Antena)](/img/products/wizfi360/size_WizFi360_11.png) | ![](/img/products/wizfi310/wizfi_310_70.png) | ![](/img/products/wizfi250/wizfi250.png) |
| Operation Mode | Station(Client), Soft AP | Station(Client), Soft AP | Station(Client), Soft AP |
| Wireless Standard | 802.11b/g/n, 2.4G | 802.11b/g/n, 2.4G | 802.11b/g/n, 2.4G |
| Interface | UART, SPI, GPIO, ADC | UART, GPIO, ADC | UART, SPI, GPIO, ADC |
| Package | SMD Type/ Pin Header | SMD Type | SMD Type/ Pin Header |
| Power Consumption | Receive=100-110mA (11b/g/n)<br />Transmit = 230mA(11b)<br />210mA(11g & 11b)<br />Peak=TBD(230mA) | Receive=62mA (11n)<br />Transmit = 162mA(11n)<br />Peak=240mA | Receive=120mA<br />Transmit = 265-385mA |
| Configuration | AT Command | AT Command | AT Command, Web |
| Output Power | 802.11b: 19dBm<br />802.11g: 13.5dBm<br />802.11n: 12dBm | 802.11b: 17dBm<br />802.11g: 14dBm<br />802.11n: 14dBm | 802.11b: 16.5dBm<br />802.11g: 13-15dBm<br /> 802.11n: 12-14.5dBm |
| Booting Time | under 100ms | under 100ms | under 100ms |
| Operation Temp (℃) | -40 .. 85 | -20 .. 85 | -20 .. 85 |
| Dimension (mm) | PA : 24x16x3, CON : 17x16x3 | 24.5x18.6x.15 | 28x20x1.9 |
| Certification | KC, CE, FCC | KC, CE, FCC | KC, CE, FCC |
| Evaluation Board | [WizFi360-EVB](./WizFi360/WizFi360-EVB-Shield.md) | [WizFi310-EVB](./WizFi310/Quick_Start_Guide.md#wizfi310-evaluation-board) | [WizFi250-EVB](./WizFi250/Quickstart_guide.md#wizfi250-evaluation-board) |


|     | [WizFi210](./WizFi210/WizFi210.md) | [WizFi630S](./WizFi630S/WizFi630S.md) | [WizFi630A](./WizFi630A/WizFi630A.md) |
| --- | ---------------------------------- | ------------------------------------- | ------------------------------------- |
| Image | ![WizFi210](/img/products/wizfi210/wizfi210.png) | ![WizFi630S](/img/products/wizfi630s/wizfi630s_top.png) | ![WizFi630A](/img/products/wizfi630a/wizfi630a-top.png) |
| Operation Mode | Station(Client), Soft AP, Ad hoc | Station(Client), AP, Gateway, AP-STA | Station(Client), AP, Gateway, Ad hoc |
| Wireless Standard | 802.11b, 2.4G | 802.11b/g/n, 2.4G | 802.11b/g/n, 2.4G |
| Interface | UART, SPI, GPIO, ADC | UART, PHY, GPIO, I2C, I2S, PWM | 2x UART, 3x PHY, GPIO, I2C, u.FL |
| Package | SMD Type | Mini PCIe (electrical) | Mini PCIe (electrical) |
| Power Consumption | Standby = 35 μA<br />Receive = 125 mA<br />Transmit = 135 mA | tbd | 240 ~ 600 mA |
| Configuration | AT Command | Web, SSH, serial console | Web, SSH, serial console |
| Output Power | 8 dBm | 802.11b: 11dBm@1Mbps<br />802.11g: 10dBm@6Mbps<br />802.11n HT20: 9.5dBm@MCS0<br />802.11n HT40: 7dBm@MCS0 | 802.11b:17dBm@11Mbps<br />802.11g:13dBm@54Mbps<br /> 802.11n:13dBm@150Mbps/72Mbps |
| Booting Time | under 100ms | 30 - 50 sec | 30 - 50 sec |
| Operation Temp (℃) | -40 .. 85 | -25°C .. +80°C | 0°C .. +50°C |
| Dimension (mm) | 32x23.3x2.9 | 33 x 43 x 3 | 33 x 43 x 6.3 |
| Certification | KC, CE, FCC, TELEC | KC, CE, FCC, TELEC | CE, FCC |
| Evaluation Board | [WizFi210](./WizFi210/WizFI210-EVB.md) | [WizFi630S-EVB](./WizFi630S/Datasheet.md#wizfi630s-evb) | WizFi630A-EVB |
