---
id: WIZPoE-P1
title: WIZPoE-P1
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

By using WIZPoE-P1, which supports both Mode A and Mode B, you can efficiently power external applications within the 7W range without the need for a power cable, not only for Ethernet but also for various external applications

<a target="_blank" href={require('/img/osh/PoE/WIZPoE-S1/WIZPoE-P1.png').default}><img src={require('/img/osh/PoE/WIZPoE-S1/WIZPoE-P1.png').default} alt="WIZPoE-P1"/></a>

## Features

- IEEE802.3af compliant
- Mode A(Endspan), Mode B(Midspan)
- Wide input voltage range 40Vdc ~ 60Vdc
- High DC/DC convertion efficiency
- Isolation
- Internal build in 2 channel bridge rectifiers

## Compatible WIZnet Modules

|           | Standalone |  Combined  |  MCU       | Features           |     Dimension (mm) |
|  :-----:  | :-----:  |   :----:  | ------------- | ------------------ |  -------------- |
| [Surf 5](./../surf5/surf5.md) | ![WIZPoE-S1](/img/osh/surf5/only_surf5_R100_img.png) | ![WIZPoE-S1](/img/osh/PoE/WIZPoE-S1/Surf5-WIZPOE-P1.png) |W7500|Compatible with the Raspberry Pi Pico Pinmap , Serial to Ethernet firmware provided, Offers various peripherals such as GPIO/SPI/PWM/ADC/DMA and more| 75mm x 21mm x 15mm |


## Electrical Parameter technical standards

|  No   | Value                 | Symbol    | Min   |  Typical  | Max  |  Units |
| :---: | --------------------- | :-------: | :---: | :-------: | :--: | :----: |
|   1   | Input Voltage         | VCC       | 41    |           | 61   |    V   |
|   2   | Output Voltage        | VCC       | 4.75  |     5     | 5.25 |    V   |
|   3   | Output Power          | PWR       |       |     8     |      |    W   |
|   4   | Switching Frequency   | Freq      | 280   |    300    | 320  |  kHz   |

## Electrical Characteristics

|  No   | Value                   | Symbol    | Min   |  Typical  | Max  |  Units |
| :---: | ----------------------- | :-------: | :---: | :-------: | :--: | :----: |
|   1   | Line Regulation         | VLINE     | 2.5   |           | 7.5  |    %   |
|   2   | Load Regulation         | VLOAD     | 2.5   |           | 7.5  |    V   |
|   3   | Output Ripple and Noise | VRN       | 20    |    100    | 200  | mVp-p  |
|   4   | Load Regulation         | RLOAD     | 150   |    200    | 250  |   mA   |
|   5   | Efficiency @80% Load    | EFF       | 70    |    80     | 90   |    %   |

## Hardware Specification

### Pin definition
<a target="_blank" href={require('/img/osh/PoE/WIZPoE-S1/WIZPoE-S1-3D.png').default}><img src={require('/img/osh/PoE/WIZPoE-S1/WIZPoE-S1-3D.png').default} alt="WIZPoE-S1-3D"/></a>

#### PoE Input - P1
|  No   | Value                   | Description |
| :---: | ----------------------- | :--------- |
|   1   | VC 1(+)|RX Input (1). This input pin is used in conjunction with VC1 (-) and connects to the center tap of the transformer connected to pins 1&2 of the RJ45 connector (RX) - it is not polarity sensitive. WIZPoE this pin is direct Input +. This pin connects to the positive (+) output of the input bridge rectifier.|
|   2   | VC 1(-)| TX Input (2). This input pin is used in conjunction with VC1 (+) and connects to the center tap of the transformer connected to pins 3&6 of the RJ45 connector (TX) - it is not polarity sensitive. WIZPoE this pin is direct Input -. This pin connects to the negative (-) output of the input bridge rectifier.|
|   3   | VC 2(+)| Direct Input (1). This input pin is used in conjunction with VC2 (-) and connects to pin 4 & 5 of the RJ45 connector - it is not polarity sensitive. WIZPoE this pin is direct Input +. This pin connects to the positive (+) output of the input bridge rectifier.|
|   4   | VC 2(-)| Direct Input (2). This input pin is used in conjunction with VC2 (-) and connects to pin 7 & 8 of the RJ45 connector - it is not polarity sensitive. WIZPoE this pin is direct Input -. This pin connects to the negative (-) output of the input bridge rectifier   |

#### PoE Output - P2
|  No   | Value                   | Description |
| :---: | ----------------------- | :--------- |
|   1   | OUT|+5V Voltage Output|
|   2   | OUT|+5V Voltage Output|
|   3   | GND| Ground|
|   4   | GND| Ground|
## Technical Reference

### WIZPoE-S1 Datasheet

- <a href="/img/osh/PoE/WIZPoE-S1/wizpoe-s1-datasheet.pdf" target="_blank">Datasheet</a>

### Dimension (Unit : mm)
<a target="_blank" href={require('/img/osh/PoE/WIZPoE-S1/wizpoe-s1-demension.png').default}><img src={require('/img/osh/PoE/WIZPoE-S1/wizpoe-s1-demension.png').default} alt="wizpoe-s1-demension"/></a>

<a target="_blank" href={require('/img/osh/PoE/WIZPoE-S1/wizpoe-s1-demension-height.png').default}><img src={require('/img/osh/PoE/WIZPoE-S1/wizpoe-s1-demension-height.png').default} alt="wizpoe-s1-demension-height"/></a>


## Certification

### EMI

- #### RE (Radiated Emission)
 <a href="/img/osh/PoE/WIZPoE-S1/re-surf5-s1-3.5w.pdf" target="_blank">RE Test Report</a>
| Date    | Decription |
| ------- | ---------- |
| NOV2023 | Only Test Report |

- #### CE (Conducted Emission)
 <a href="/img/osh/PoE/WIZPoE-S1/ce-picopoe-s1.pdf" target="_blank">CE Test Report</a>
| Date    | Decription |
| ------- | ---------- |
| NOV2023 | Only Test Report |

## Buy

[![WIZnetUS Online Shop, USA](/img/products/w5100s-evb-pico/icons/dollar.png)](https://wiznetshop.io/product/detail.html?product_no=1088&cate_no=1&display_group=3)
[![WIZnetKorea Online Shop, Korea](/img/products/w5100s-evb-pico/icons/won.png)](https://wiznetshop.io/product/detail.html?product_no=1088&cate_no=1&display_group=3)