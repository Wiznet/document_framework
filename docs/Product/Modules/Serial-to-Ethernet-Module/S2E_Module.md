---
id: s2e_module
title: Serial to Ethernet Module
date: 2022-05-31
---

## Overview

The ‘Serial to Ethernet’ (S2E) Products are the gateway that converts
UART (TTL, RS-232 or RS-422/485) protocol into TCP/IP. It enables remote
gauging, managing and control of TCP/IP devices through a UART serial
interface.

WIZnet S2E module supports a wide range of pin header types and hardware
interfaces.

-----

## Product Family

|   | Image | UART | LAN Interface | Pin Header & Pitch | Operation Temp (℃) | Dimension (mm) | Evaluation Board |
| --- | ----- | ---- | ------------- | ------------------ | ------------------- | -------------- | ---------------- |
| [WIZ750SR](WIZ750SR/WIZ750SR.mdx) | ![WIZ750SR](/img/products/wiz750sr/wiz750sr_rev1.0_main_1024x693.png) | 1xTTL or 1xRS232 or 1xRS485 | RJ45 | 2x6 | 0~70 | 48x30x18 | [WIZ750SR-EVB (RS422/485)](WIZ750SR/Datasheet.md#rs422--rs485-version) <br /><br /> [WIZ750SR-EVB (TTL/RS232)](WIZ750SR/Datasheet.md#ttl--rs232-version) |
| [WIZ750SR-100](WIZ750SR-100/WIZ750SR-100.mdx) | ![WIZ750SR-100](/img/products/s2e_module/wiz750sr-1xx/wiz750sr-100.png) | 1xTTL(3.3V) | Transformer | Two 1x12 2mm | -40 ~ 85 | 50x30x12 | [WIZ750SR-100-EVB](WIZ750SR-100/Datasheet.md#wiz750sr-100-evb) |
| [WIZ750SR-105](WIZ750SR-105/WIZ750SR-105.mdx) | ![WIZ750SR-105](/img/products/wiz750sr-105/wiz750sr-105_main.png) | 1xTTL(3.3V) | RJ-45 | 2x6 2mm pitch | -40 ~ 85 | 62x40x18 | [WIZ750SR-105-EVB](WIZ750SR-105/Datasheet.md#wiz105sr-evb) |
| [WIZ750SR-110](WIZ750SR-110/WIZ750SR-110.mdx) | ![WIZ750SR-110](/img/products/wiz750sr-110/wiz750sr-110_main.png) | 1xRS232 | RJ-45 | N/A | -40 ~ 85 | 75x45x18 | N/A |
| [WIZ752SR-120](WIZ752SR-120/WIZ752SR-120.mdx) | ![WIZ752SR-120](/img/products/s2e_module/wiz752sr-120/3.png) | 1xTTL(3.3V) | Transformer | 2.00mm Pin Header 1x14 2ea | -40 ~ 85 | 50x30x9 | [WIZ120SR-EVB](WIZ120SR/wiz120sr-evb.md) |
| [WIZ752SR-125](WIZ752SR-125/WIZ752SR-125.mdx) | ![WIZ752SR-125](/img/products/s2e_module/wiz752sr-125/2.png) | 2xRS232 | RJ-45 | N/A | -40 ~ 85 | 60x89x18 | N/A |
| [WIZ550SR](WIZ550SR/WIZ550SR.mdx) | ![WIZ550SR](/img/products/wiz550sr/wiz550sr_ds/wiz550sr.png) | 1xTTL(3.3V) | RJ45 | Two 1x11 | -40 ~ 85 | 22x24x13 | [WIZ550SR-EVB](WIZ550SR/Datasheet-EN.md#wiz550sr-evb) |
| [WIZ500SR-RP](WIZ500SR-RP/WIZ500SR-RP.mdx) | ![WIZ500SR-RP](/img/products/s2e_module/wiz500sr-rp/wiz500sr-rp-top.png) | 1xTTL(3.3V) |Transformer|1x12<br />2.0mm<br />Pin Header  x 3ea|-20 ~ 85| 50mm x 30mm x 5.7mm | [WIZ500SR-RP-EVB](WIZ500SR-RP/Datasheet.md#wiz500sr-rp-evb-set) |
| [WIZ505SR-RP](WIZ505SR-RP/WIZ505SR-RP.mdx) | ![WIZ505SR-RP](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-side.png) | 1xTTL(3.3V) |RJ-45|2x7<br />2.54mm<br />Pin Header<br />x 1ea|-20 ~ 85| 40mm x 66.5mm x 15mm | [WIZ505SR-RP-EVB](WIZ505SR-RP/wiz505sr-rp-evb-en.mdx) |
| [WIZ510SR-RP](WIZ510SR-RP/WIZ510SR-RP.mdx) | ![WIZ510SR-RP](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-top.png) | 1xTTL(3.3V) |RJ-45|1x4<br />2.54mm<br />Pin Header<br />x 1ea|-20 ~ 85| 76mm x 45mm x 15mm | N/A |
| [WIZ100SR](WIZ1xx-series/WIZ100SR/WIZ100SR.mdx)<br />not recommended for new design | ![WIZ100SR](/img/products/wiz100sr/wiz100sr_web_280.jpg) | 1xTTL(3.3V) | Transformer | Two 1x12 2mm | 0 ~ 80 | 50x30x12 | [WIZ100SR-EVB](WIZ1xx-series/WIZ100SR/wiz100sr-evb.md) |
| [WIZ105SR](WIZ1xx-series/WIZ105SR/WIZ105SR.mdx)<br />not recommended for new design | ![WIZ105SR](/img/products/wiz105sr/wiz105sr-web-1.jpg) | 1xTTL(3.3V) | 	RJ-45 | 2x6 2mm | 0 ~ 80 | 40x62x17 | [WIZ105SR-EVB](WIZ1xx-series/WIZ105SR/wiz105sr-evb.md) |
| [WIZ110SR](WIZ1xx-series/WIZ110SR/WIZ110SR.mdx)<br />not recommended for new design | ![WIZ110SR](/img/products/wiz110sr/wiz110sr-web-1.jpg) | 1xRS232 (DB-9) | RJ-45 | N/A | 0 ~ 80 | 75x50x17 | N/A |
| [WIZ107SR](WIZ107SR/wiz107sr.md)<br />not recommended for new design | ![WIZ107SR](/img/products/wiz107sr/WIZ108SR-1-e1429085175138.jpg) | 1xTTL(3.3V) or 1xRS232 (Optional) | RJ-45 | 2x6 2.5mm | -40 ~ 85 | 48x30x18 | [WIZ107SR-EVB](WIZ107SR/wiz107sr-evb.md) |
| [WIZ108SR](WIZ108SR/wiz108sr.md)<br />not recommended for new design | ![WIZ108SR](/img/products/wiz108sr/WIZ108SR-1-e1429085175138.jpg) | 1x RS422/485 | RJ-45 | 2x6 2.5mm | -40 ~ 85 | 48x30x18 | [WIZ108SR-EVB](WIZ108SR/wiz108sr-evb.md) |
| [W5500S2E-S1](W5500S2E-S1/W5500S2E-S1.mdx) | ![W5500S2E-S1](/img/products/w5500s2e-z1/500k_w5500s2e_s1.jpg) | 1xTTL(3.3V) | Transformer | 2x7, 1x7 2.54mm | -40~85 | 34×24×12.40 (mm) | [Breakout board](http://wiznetshop.co.kr/product/detail.html?product_no=814&cate_no=56&display_group=1) |
| [W5500S2E-Z1](W5500S2E-Z1/W5500S2E-Z1.mdx) | ![W5500S2E-Z1](/img/products/w5500s2e-z1/500k_w5500s2e_z1.jpg) |  1xTTL(3.3V) | Transformer | 1x11, 1x12 2.54mm | -40~85 | 44.45×31.75×15.75 (mm) | [Breakout board](http://wiznetshop.co.kr/product/detail.html?product_no=814&cate_no=56&display_group=1) |
| [W7500S2E-R1](W7500S2E-R1/W7500S2E-R1.mdx) | ![W7500S2E-R1](/img/products/w5500s2e-z1/500k_w7500s2e_r1.jpg) | 1xTTL(3.3V) | Transformer | 1x11, 1x12 2.54mm | -40~85 | 44.45×31.75×23.00 (mm) | [Breakout board](http://wiznetshop.co.kr/product/detail.html?product_no=814&cate_no=56&display_group=1) |
| [W7100A-S2E](./../Pre-programmed-MCU/W7500P-S2E/W7500-P-S2E.mdx)<br />not recommended for new design | | Serial to Ethernet Chip (WIZ107SR or WIZ108SR firmware programmed) ||||||

:::caution
Please note that below modules are discontinued.

We do not recommend using them in new design.
:::

|   | Image | UART | LAN Interface | Pin Header & Pitch | Operation Temp (℃) | Dimension (mm) | Evaluation Board |
| --- | ----- | ---- | ------------- | ------------------ | ------------------- | -------------- | ---------------- |
| [WIZ550S2E](WIZ550S2E/WIZ550S2E.md) | ![](/img/products/wiz550s2e/wiz550-s2e.png) | 1xTTL(3.3V) | RJ-45 | 1x8, 1x9 2.54mm | -40 ~ 85 | 55x30x23.49 | [WIZ550S2E-EVB](WIZ550S2E/Datasheet-Eng.md#wiz550s2e-232-interface-board) |
| [WIZ120SR](WIZ120SR/wiz120sr.md)<br />not recommended for new design | ![WIZ120SR](/img/products/wiz120sr/wiz12sr-1.jpg) | 2xTTL(3.3V) | Transformer | Two 1x14 2mm | 0 ~ 70 | 50x30x9 | [WI120SR-EVB](WIZ120SR/wiz120sr-evb.md) |
| [WIZ125SR](WIZ125SR/wiz125sr.md)<br />not recommended for new design | ![WIZ125SR](/img/products/wiz125sr/125.jpg) | 2xRS32 DB-9 | RJ-45 | N/A | 0 ~ 70 | 60x89x18 | N/A |
| [WIZ140SR](WIZ140SR/wiz140sr.md)<br />not recommended for new design | ![WIZ140SR](/img/products/wiz140sr/wiz140sr-web-2.jpg) | 4xTTL(3.3V) | Transformer | 1x14 2.5mm | 0 ~ 70 | 48x36x16 | [	WIZ140SR-EVB](WIZ140SR/wiz140sr-evb.md) |
| [WIZ145SR](WIZ145SR/wiz145sr.md)<br />not recommended for new design | ![WIZ145SR](/img/products/wiz145sr/wiz145sr-2-300.jpg) | 4xTTL(3.3V) | RJ-45 | 1x14, 2x14 | 0 ~ 70 | 48x61x25 | [WIZ145SR-EVB](WIZ145SR/wiz145sr-evb.md) |
-----
