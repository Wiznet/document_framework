---
id: eoe-w63-evb
title: EOE-W63-EVB
---

## Overview

| Item | Specification |
| --- | --- |
| Supported module | EOE-W63 |
| Ethernet connector | RJ45 jack with integrated magnetics |
| USB | USB Type-C connected to the ESP32-S3 native USB interface |
| Power input | USB Type-C or DC jack; the board generates the 3.3 V module rail |
| Expansion | Two 1 × 17 headers for GPIO, ADC, I2C, SPI, UART0, 3.3 V, and GND |
| Controls | RST and BOOT tact switches |
| Indicators | PWR, LINK, ACT, SPD, and DUP LEDs |

:::caution
Supply the board with 5 V only. The board generates the 3.3 V module rail with a linear regulator.
:::

## Expansion Headers

| Header | Primary signals |
| --- | --- |
| J5 | ESP32-S3 GPIO signals, 3.3 V, and GND |
| J6 | GPIO, ADC, I2C, SPI, UART0, 3.3 V, and GND |
