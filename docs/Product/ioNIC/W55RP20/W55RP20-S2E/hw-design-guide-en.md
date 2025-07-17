---
id: hw-design-guide-en
title: HW design guide
date: 2024-10-04
keywords: [wiznet, w55rp20,w232n datasheet, hardwired tcp/ip,serial-to-ethernet, w5500, rp2040]

---

# W55RP20 Serial to Ethernet Official Design Guide

## Introduction
The W55RP20 combines WIZnet’s W5500 Ethernet controller and Raspberry Pi’s RP2040 MCU, designed specifically for Serial-to-Ethernet applications supporting UART TTL, RS-232, RS-422, and RS-485 communication.

## Pinout Description

### Setting Pin

| Pin      |Pinout|Name| Description                                  |
|--------------|------|-|----------------------------------------------|
| RST          |29|RUN| MCU Reset (Active Low)                        |
| BOOT Mode    |21|GP15| Firmware boot mode control                    |
| AT Mode      |20|GP14| Enter AT command mode (Active Low)            |
| RP BOOT      |63|BOOT| Flash reset & RP2040 boot (Active Low)        |
| 232/485 Select|18|GP12| Low: TTL/RS-232, High: RS-422/485            |
| Factory RST  | 40|GP18|Reset IP settings (Firmware retained)         |

- RST Pin : This pin is used for MCU reset and operates in an Active Low state.

- BOOT Mode : PinDesigned to control the boot mode of the Serial to Ethernet internal firmware.

- AT Mode Pin : Operates as Active Low; controlling this pin allows entry into AT command mode via serial for chip control.

- RP BOOT Pin : The reset pin for internal flash memory, operating as Active Low, following the RP2040 boot sequence.

- 232/485 Select Pin : Determines the communication method based on its state at initial chip operation.
	- Low: Sets UART or RS-232 mode
	- High: Sets RS-422 or RS-485 mode

- Factory RST Pin : Resets the IP settings to factory defaults while keeping the firmware unchanged.

### Data Pin

| Pin      |Pinout|Name| Description                                  |
|--------------|--|-|----------------------------------------------|
| UART_TX       |9|GP4| UART data transmission.                  |
| UART_RX       |10|GP5| UART data reception.                    |
| UART_RTS      |12|GP7| UART request to send (flow control)     |
| UART_CTS      |11|GP6| UART clear to send (flow control)       |
| UART_DTR      |14|GP8| UART data terminal ready (flow control) |
| UART_DSR      |15|GP9| UART data set ready (flow control)      |

- **UART_RTS Pin: UART request to send (flow control); determines communication mode (floating for RS-485, Low for RS-422)**

### LED Indicators - Status

| Pin      |Pinout|Name| Description                                  |
|--------------|------|-|-------------------------------------------|
| RUN            |41|GP19| MCU status LED, blinks when the MCU is operating normally.   |
| PHY LINK       |16|GP10| Indicates PHY link status                    |
| TCP Conectoin  |17|GP11| Indicates active TCP connection     |



## Firmware Upload
Three firmware upload methods:

- **USB (UF2)**
  - Set RP-BOOT pin Low and reset; drag `Boot.uf2` and then `app.uf2` into ‘RPI-RP2’ drive.

- **SWD (J-Link)**
  - Upload HEX/BIN files using J-Link, same as standard RP2040.

- **Ethernet (BIN)**
  - Use WIZnet Configuration Tool for application updates only (not initial upload).

## MAC Address Setup
Initial firmware upload via USB/SWD required. MAC setup essential via WIZnet MAC Tool (115200 baud). MAC address must be purchased separately.
  - [download  - WIZMacTool](https://docs.wiznet.io/img/products/wiz750sr/developers/restore-mac/wizmactool_v20151127.zip)
  - [How to use WIZMacTool](../W55RP20-S2E/mac_address-write-guide-en.md#using-wizmactool)
  - [Using Serial Command](../W55RP20-S2E/mac_address-write-guide-en.md#using-serial-command)

## Configuration
Advanced settings and further configurations available using the latest WIZnet Configuration Tool.

  - [Configuration Guide](./Config-tool-Guide-en.md)