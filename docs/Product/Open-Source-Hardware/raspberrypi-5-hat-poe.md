---
id: raspberrypi-5-hat-poe
title: raspberrypi-5-hat-poe
date: 2024-03-21
keywords:
  - Raspberry Pi 5
  - Ethernet
  - W5500
  - PoE
description: WIZnet Pico PoE made for prototyping and testing Ethernet capabilities on Pico
---


## Overview

By using w5500_rp5_poe, which supports both Mode A and Mode B, you can efficiently power external applications within the 7W range without the need for a power cable, not only for Ethernet but also for various external applications

<a target="_blank" href={require('/img/osh/PoE/WIZPoE-S1/w5500_rp5_poe.png').default}><img src={require('/img/osh/PoE/WIZPoE-S1/w5500_rp5_poe.png').default} alt="w5500_rp5_poe"/></a>


## Features

- IEEE802.3at compliant
- Mode A(Endspan), Mode B(Midspan)
- Wide input voltage range 37Vdc ~ 60Vdc
- High DC/DC convertion efficiency
- Isolation
- Internal build in 2 channel bridge rectifiers
- Use PoE with connectors on existing RPI 5 boards
- 2 Port Ethernet

## Electrical Parameter technical standards

|  No   | Value                 | Symbol    | Min   |  Typical  | Max  |  Units |
| :---: | --------------------- | :-------: | :---: | :-------: | :--: | :----: |
|   1   | Input Voltage         | VCC       | 37    |           | 61   |    V   |
|   2   | Output Voltage        | VCC       | 4.75  |     5     | 5.25 |    V   |
|   3   | Output Power          | PWR       |       |    25     |      |    W   |
|   4   | Switching Frequency   | Freq      | 380   |    400    | 420  |  kHz   |

