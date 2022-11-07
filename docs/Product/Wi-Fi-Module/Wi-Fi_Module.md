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


|   | [WizFi630S](./WizFi630S/WizFi630S.md) |  [WizFi360](./WizFi360/WizFi360.md) | [WizFi250](./WizFi250/WizFi250.md) |
| -- | --------------------------------- | ---------------------------------- | ---------------------------------- |
| Image | ![WizFi630S](/img/products/wizfi630s/wizfi630s_top.png) | ![WizFi360-PA(PCB Antena)](/img/products/wizfi360/size_WizFi360_11.png) | ![](/img/products/wizfi250/wizfi250.png) |
| Operation Mode | Station(Client), AP, Gateway, AP-STA |  Station(Client), Soft AP | Station(Client), Soft AP |
| Wireless Standard | 802.11b/g/n, 2.4G | 802.11b/g/n, 2.4G | 802.11b/g/n, 2.4G |
| Interface | UART, PHY, GPIO, I2C, I2S, PWM | UART, SPI, GPIO, ADC | UART, SPI, GPIO, ADC |
| Package | Mini PCIe (electrical) | SMD Type/ Pin Header | SMD Type/ Pin Header |
| Power Consumption | tbd |  Receive=100-110mA (11b/g/n)<br />Transmit = 230mA(11b)<br />210mA(11g & 11b)<br />Peak=TBD(230mA) | Receive=120mA<br />Transmit = 265-385mA |
| Configuration | Web, SSH, serial console |  AT Command | AT Command, Web |
| Output Power | 802.11b: 11dBm@1Mbps<br />802.11g: 10dBm@6Mbps<br />802.11n HT20: 9.5dBm@MCS0<br />802.11n HT40: 7dBm@MCS0 | 802.11b: 19dBm<br />802.11g: 13.5dBm<br />802.11n: 12dBm | 802.11b: 16.5dBm<br />802.11g: 13-15dBm<br /> 802.11n: 12-14.5dBm |
| Booting Time | 30 - 50 sec | nder 100ms | under 100ms |
| Operation Temp (℃) | -25°C .. +80°C |  -40 .. 85 | -20 .. 85 |
| Dimension (mm) | 33 x 43 x 3 | PA : 24x16x3, CON : 17x16x3 | 28x20x1.9 |
| Certification | KC, CE, FCC, TELEC |  KC, CE, FCC, TELEC | KC, CE, FCC |
| Evaluation Board | [WizFi630S-EVB](./WizFi630S/Datasheet.md#wizfi630s-evb) | [WizFi360-EVB-Pico](./../Open-Source-Hardware/WizFi360-EVB-Pico.md) <br /> [WizFi360-EVB-Shield](./WizFi360/WizFi360-EVB-Shield.md) <br /> [WizFi360-EVB-Mini](./WizFi360/WizFi360-EVB-Mini.md) |  [WizFi250-EVB](./WizFi250/Quickstart_guide.md#wizfi250-evaluation-board) |

:::caution
Please note that **WizFi630A, WizFi310, WizFi210** Wi-Fi modules are discontinued.

We do not recommend using them in new design.
:::

|   | [WizFi630A](./WizFi630A/WizFi630A.md) | [WizFi310](./WizFi310/WizFi310.md) | [WizFi210](./WizFi210/WizFi210.md) |
| -- | --------------------------------- | ---------------------------------- | ---------------------------------- |
| Image | ![WizFi630A](/img/products/wizfi630a/wizfi630a-top.png) |  ![](/img/products/wizfi310/wizfi_310_70.png) | ![WizFi210](/img/products/wizfi210/wizfi210.png) |
| Operation Mode | Station(Client), AP, Gateway, Ad hoc | Station(Client), Soft AP | Station(Client), Soft AP, Ad hoc |
| Wireless Standard | 802.11b/g/n, 2.4G | 802.11b/g/n, 2.4G | 802.11b, 2.4G |
| Interface | 2x UART, 3x PHY, GPIO, I2C, u.FL | UART, GPIO, ADC | UART, SPI, GPIO, ADC |
| Package | Mini PCIe (electrical) | SMD Type | SMD Type |
| Power Consumption | 240 ~ 600 mA | Receive=62mA (11n)<br />Transmit = 162mA(11n)<br />Peak=240mA | Standby = 35 μA<br />Receive = 125 mA<br />Transmit = 135 mA |
| Configuration | Web, SSH, serial console | AT Command | AT Command |
| Output Power |  802.11b:17dBm@11Mbps<br />802.11g:13dBm@54Mbps<br /> 802.11n:13dBm@150Mbps/72Mbps | 802.11b: 17dBm<br />802.11g: 14dBm<br />802.11n: 14dBm | 8 dBm |
| Booting Time | 30 - 50 sec | under 100ms | under 100ms |
| Operation Temp (℃) | 0°C .. +50°C | -20 .. 85 | -40 .. 85 |
| Dimension (mm) | 33 x 43 x 6.3 | 24.5x18.6x.15 | 32x23.3x2.9 |
| Certification |  CE, FCC | KC, CE, FCC | KC, CE, FCC, TELEC |
| Evaluation Board | WizFi630A-EVB | [WizFi310-EVB](./WizFi310/Quick_Start_Guide.md#wizfi310-evaluation-board) | [WizFi210](./WizFi210/WizFI210-EVB.md) |
