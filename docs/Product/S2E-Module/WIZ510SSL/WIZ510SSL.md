---
id: wiz510ssl
title: WIZ510SSL
date: 2021-03-15
---

## Overview

WIZnet’s WIZ510SSL module will enable users to send serial data to the Cloud via Ethernet.
Users can save certifications using the Arm TrustZone and F/W
updates are done via Dual Bank. WIZ510SSL can connect to SSL server and
transmit data to various cloud services via MQTT over SSL.

|                                                                |
| -------------------------------------------------------------- |
| <a target="_blank" href={require("/img/products/wiz510ssl/datasheet/S2C_1.png").default}><img src={require("/img/products/wiz510ssl/datasheet/S2C_1.png").default} alt=""/></a> |
| Figure: W510SSL Product Overview                              |

WIZ510SSL is WIZnet’s first serial to cloud module, composed of W5100S and STM Cortex M33, can connect to all 3 major IoT cloud services –
AWS, Azure, and GCP. WIZnet also provides its own WIZnet IoT Cloud service that can save authentications and update F/W via Dual bank.
WIZ510SSL is projected to be both price competitive (30% cheaper in average) and safer than the current comparison products in the market.

-----

## Features

- MCU : STM32L552CET6 Cortex-M33​
- Connectivity : W5100S iEthernet IC​
- Serial Signals : UART TTL - TXD, RXD, RTS, CTS​
- Optional DTR/DSR signals supported
- Protocol : TCP Server / Client, UDP, SSL TCP Client, MQTT
- MQTT over SSL
- SSL Version : TLS 1.2​
- MQTT Version : MQTT 3.1.2
- Certificate on ARM Trust zone
- Secure Safety FOTA (Encryption, DualBank)

### Cloud connectivity

<a target="_blank" href={require("/img/products/wiz510ssl/datasheet/S2C_2.png").default}><img src={require("/img/products/wiz510ssl/datasheet/S2C_2.png").default} alt=""/></a>

- Supports 3 main IoT Service: AWS, AZURE, GCP
- AWS FreeRTOS + CLI (AWS FreeRTOS Qualified)​
- AWS Embedded SDK C (AWS IoT Core Qualified)
- WIZnet Cloud Certificate Service
- HTTPS Auto Provisioning​

-----

## Product Contents

<a target="_blank" href={require("/img/products/wiz510ssl/getting_started/wiz510ssl-evb_package.png").default}><img src={require("/img/products/wiz510ssl/getting_started/wiz510ssl-evb_package.png").default} alt=""/></a>  

**WIZ510SSL-EVB Package** 

<a target="_blank" href={require("/img/products/wiz510ssl/datasheet/W510SSL_angle.png").default}><img src={require("/img/products/wiz510ssl/datasheet/W510SSL_angle.png").default} alt=""/></a>

**WIZ510SSL**

<a target="_blank" href={require("/img/products/wiz510ssl/wiz510ssl-evb/wiz510sslevb_sideview.png").default}><img src={require("/img/products/wiz510ssl/wiz510ssl-evb/wiz510sslevb_sideview.png").default} alt=""/></a>

**WIZ510SSL-EVB**

### W510SSL Module Series

| Ordering Information | Item                  | Q'ty | Remarks    |
| -------------------- | --------------------- | ---- | ---------- |
| WIZ510SSL            | WIZ510SSL module   | 1    | \-         |

### W510SSL Evaluation Board Series

| Ordering Information | Category | Item                          | Q'ty | Remarks    |
| -------------------- | -------- | ----------------------------- | ---- | ---------- |
| WIZ510SSL-EVB    | Device   | WIZ510SSL module           | 1    | \-         |
| :::                  | :::      | WIZ510SSL-EVB board    | 1    | \-         |
| :::                  | Cable    | D-SUB9-FEMALE serial cable    | 1    | Data port  |
| :::                  | :::      | USB 2.0 Micro B type cable 1M | 1    | Debug port |
| :::                  | :::      | 24AWG CAT5e UTP cable         | 1    | LAN cable  |

Contents can be replaced with better components to improve the performance of the product.

-----