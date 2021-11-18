---
id: overview-test
title: Product Overview
date: 2020-04-16
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

<Tabs
  groupId="language_settings"
  defaultValue="English"
  values={[
    {label: 'English', value: 'English'},
    {label: '한국어', value: 'Korean'},
  ]}>
<TabItem value="English">


<a target="_blank" href={require("/img/products/wiz550sr/wiz550sr_overview.png").default}><img src={require("/img/products/wiz550sr/wiz550sr_overview.png").default} alt="WIZ550SR Overview"/></a>

WIZ550SR is Serial to Ethernet module, It's mounted TCP/IP chip W5500 of
WIZnet and Cortex-M3-based STM32F103RCT6 of STmicro. WIZ550SR does not
contain RJ45 because very small size type. WIZ550SR provides the user
Interface 2.00mm Pitch Pin header.

WIZ550SR is the protocol converter that transmits the data sent by
serial equipment as TCP/IP data type, and converts back the TCP/IP data
received through the network into serial data to transmit back to a
serial equipment. It complies with industrial temperature standard and
supports the serial interfaces of UART.

WIZ550SR is is compatible with the Configuration Tool of WIZ550S2E and
WIZ550WEB, and will use the same AT Command.

However, Configuration Tool must use the latest version.
</TabItem>
<TabItem value="Korean">

<a target="_blank" href={require("/img/products/wiz550sr/wiz550sr_overview.png").default}><img src={require("/img/products/wiz550sr/wiz550sr_overview.png").default} alt="WIZ550SR Overview"/></a>

WIZ550SR은 WIZnet의 TCP/IP Chip인 **W5500**과 Cortex-M3 기반으로 STmicro의
**STM32F103RCT6** MCU가 탑재된 Serial to Ethernet 모듈 제품입니다. 이 제품은 RJ45를 포함하고
있지 않아 매우 작은 사이즈의 형태를 하고 있고, 사용자의 Interface 는 2.00mm Pitch Pin header 를
제공합니다.

WIZ550SR은 시리얼 장비가 보낸 데이터를 TCP/IP 패킷으로 변환하여 이더넷 네트워크로 전송시키며, 반대로 네트워크로부터
받은 TCP/IP 패킷을 시리얼 데이터로 변환하여 고객의 시리얼 장비로 전달하는 역할을 수행합니다. 이 제품을 활용하면 시리얼
인터페이스를 지원하는 장치에 손쉽게 네트워크 연결 기능을 추가 할 수 있어, 이더넷 네트워크를 통해 시리얼 장비를 제어하는 것이
가능해집니다.

WIZ550SR은 WIZ550S2E, WIZ550WEB의 Configuration Tool과 호환이 가능하며, 동일한 AT
Command로 사용이 됩니다.

단, Configuration Tool은 최신 버전을 사용해야합니다.
</TabItem>

</Tabs>

## Features

<Tabs
  groupId="language_settings"
  defaultValue="English"
  values={[
    {label: 'English', value: 'English'},
    {label: '한국어', value: 'Korean'},
  ]}>
<TabItem value="English">

- Very small size Serial to Ethernet Module. 22mm x 24mm x 13mm.
  - WIZnet, TCP/IP Chip **W5500**.
  - STmicro, Cortex-M3 based STM32F103RCT6.
  - Not include a transformer and RJ45.
  - 2.00mm Pitch Pin Header Type, 1x11.
  - Support the **MDI**(Medium Dependent Interface).
      - TXN, TXP, RXN, RXP
  - Support the **UART** Interface.
      - RXD, TXD, RTS, CTS, DSR(Option), DTR(Option)
      - Buad Rate : 600bps to 230.4kbps
      - Length : 8bit
      - Parity bit : None, Odd, Even
      - Stop bit : 1bit, 2bit
      - Support the RS-232C Interface.
      - Will be supported the RS-422/485 Interface.
      - **Default : 115200, 8, n, 1**
  - Support the Debug UART.
      - DEBUG RXD, DEBUG TXD
      - **Default : 115200, 8, n, 1**
  - Support the PHY Status Output.
      - Active LED, Link LED
  - Support the STATUS Output.
      - LOW : TCP Connect.
      - HIGH : TCP Diconnect.
  - System Pin.
      - RESET : System Reset, Active Low.
      - BOOT0 : MCU BOOT mode operation, Active High.
      - H/W TRIG : App BOOT mode operation, Active Low.
  - Support the Indicator LED.
      - Power LED(LD3).
      - LED 0(LD1) : 
      - LED 1(LD2) : 
  - Support the Pin Header Hole for firmware upload.
      - 2.54mm Pitch, Not Mount.
  - Support the Pin Header Hole for SWD.
      - 1.27mm Pitch, Not Mount.
  - Include eeprom for data storage.
  - Support the AT Command for the set of WIZ550SR.
  - Support the WIZ VSP (Virtual Serial Port).
  - Operation Temperature : -40℃ \~ 85℃
  - Size : 22mm x 24mm x 13mm

</TabItem>
<TabItem value="Korean">

- WIZnet의 TCP/IP Chip인 **W5500** 기반의 Serial to Ethernet Module.
  - STmicro의 **STM32F103RCT6** 기반의 Serial to Ethernet Module.
  - 매우 작은 사이즈, 22mm x 24mm x 13mm.
  - 2.00mm Pitch Pin Header 1x11 2ea 지원.
  - **MDI**(Medium Dependent Interface) 지원.
      - TXN, TXP, RXN, RXP
  - **UART** Interface 지원.
      - RXD, TXD, RTS, CTS, DSR(Option), DTR(Option)
      - Buad Rate : 600bps to 230.4kbps
      - Length : 8bit
      - Parity bit : None, Odd, Even
      - Stop bit : 1bit, 2bit
      - RS-232C Interface 지원 가능.
      - RS-422/485 Interface 지원 예정.
      - **Default : 115200, 8, n, 1**
  - Debug UART 지원.
      - DEBUG RXD, DEBUG TXD
      - **Default : 115200, 8, n, 1**
  - PHY Status Output 지원.
      - Active LED, Link LED
  - STATUS Output 지원.
      - LOW : TCP Connect 상태.
      - HIGH : TCP Diconnect 상태.
  - 시스템 핀.
      - RESET : 시스템 리셋, Active Low.
      - BOOT0 : MCU BOOT 모드 진입, Active High.
      - H/W TRIG : App BOOT 모드 진입, Active Low.
  - Indicator LED 지원.
      - Power LED(LD3).
      - LED 0(LD1) : 
      - LED 1(LD2) : 
  - Firmware 업로드용 Pin Header Hole 지원.
      - 2.54mm Pitch, Not Mount.
  - SWD 용 Pin Header Hole 지원.
      - 1.27mm Pitch, Not Mount.
  - Data 저장용 EEPROM 내장.
  - 제품의 설정을 위한 Conriguration Tool 지원.
  - 제품의 설정을 위한 AT Command 지원.
  - WIZ VSP (Virtual Serial Port) 프로그램 지원
  - Operation Temperature : -40℃ \~ 85℃
  - Size : 22mm x 24mm x 13mm

</TabItem>

</Tabs>