---
id: eoe-ionic-evb
title: EOE-ioNIC-EVB
---

## Overview

| Item | Specification |
| --- | --- |
| Supported module | EOE-ioNIC |
| Ethernet connector | RJ45 jack with integrated magnetics |
| USB | USB Type-C connected to the W55RP20 native USB interface |
| Power input | USB Type-C or DC jack; the board generates the 3.3 V module rail |
| Debug | SWD header |
| Expansion | Two 1 × 12 signal headers |
| Controls | FW_BOOT, RSTn, and RP_BOOT tact switches |
| Indicators | PWR, LINK, ACT, SPD, and DUP LEDs |

:::caution
Supply the board with 5 V only. The board generates the 3.3 V module rail with a linear regulator.
:::

## Signal Headers

The evaluation board exposes the module signals through two 1 × 12 headers. The headers provide UART signals, modem-control signals, status signals, and selected control signals.

| Header | Primary signals |
| --- | --- |
| J1 | UART0 DTR/DSR, status outputs, interface-select signals, `HW_TRIG`, `SPI_INT`, `DEBUG`, and GND |
| J2 | UART0 and UART1 data and modem-control signals, `FACT_RSTn`, and GND |
