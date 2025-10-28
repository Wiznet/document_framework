---
id: overview
title: Overview
date: 2025-08-13
slug: /Product/Chip/Ethernet/W6100/
keywords: [w6100,ethernet chip,wiznet,hardwired tcp/ip,arduino ethernet,pico ethernet]
description: W6100 chip is a Hardwired Internet controller designed as a full hardwired TCP/IP stack with WIZnet technology
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# W6100
<div className="main_intro"> 
  <div className="main_intro_image">
        <img src="/img/products/w6100/w6100_7.jpg" width="550" />
  </div>
  <div className="w6100-text">
  <p>
W6100 is a hardwired TCP/IP stack internet controller chip with WIZnet technology, supporting both IPv4 and IPv6. It integrates 10/100 Ethernet MAC and PHY and supports TCP, UDP, ICMPv4/v6, IGMP, ARP, and PPPoE protocols. W6100 provides 8 independent hardware SOCKETs and 32KB internal memory, making it easy to develop Ethernet applications using socket programming. It also supports WOL (Wake on LAN) and Power Down Mode for reduced power consumption, and offers SPI and Parallel System BUS interfaces.
    </p>
  </div>
</div>



<details>
<summary><b>Block Diagram</b></summary> 

<img src="/img/products/w6100/w6100_block_diagram.png" alt="W6100_Block_Diagram" width="500"/>

</details>

<details>
<summary><b>Pinout</b></summary> 
Please refer to the datasheet.
</details>



## Features

  - Support Hardwired TCP/IP Protocols : TCP, UDP, IPv6, IPv4, ICMPv6,
    ICMPv4, IGMP, MLDv1, ARP, PPPoE
  - Support IPv4/IPv6 Dual Stack
  - Support 8 independent SOCKETs simultaneously with 32KB Memory
  - Support SOCKET-less Command: ARP, PING, ICMPv6(PING, ARP,DAD,NA,RS) Command for IPv6 Auto-configuration& Network Monitoring
  - Support Ethernet Power Down Mode & System Clock Switching for power save
  - Support Wake on LAN over UDP
  - Support Serial & Parallel Host Interface: High Speed SPI(MODE 0/3),
    System Bus with 2 Address signal & 8bit Data
  - Internal 16Kbytes Memory for TX/ RX Buffers
  - 10BaseT / 10BaseTe / 100BaseTX Ethernet PHY Integrated
  - Support Auto Negotiation (Full and half duplex, 10 and 100-based )
  - Support Auto-MDIX only on Auto-Negotiation Mode
  - Not support IP Fragmentation
  - 3V operation with 5V I/O signal tolerance
  - Network Indicator LEDs (Full/Half Duplex, Link, 10/100 Speed,
    Active)
  - 48 Pin LQFP & QFN Lead-Free Package (7x7mm, 0.5mm pitch)
  - W5100S PIN-2-PIN Compatible

-----

## Documentation

### datasheet 

| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [📄 W6100 Datasheet (EN)](/img/products/w6100/w6100_ds_v105e.pdf) | Technical specifications and features of the W6100 chip | - |
| [📄 W6100 Datasheet (KR)](/img/products/w6100/w6100_ds_v105k.pdf) | Technical specifications and features of the W6100 chip | - |


## Software Resources




<Tabs groupId="software"  queryString>
<TabItem value="driver" label="Driver" default >

### Driver
The ioLibrary means "Internet Offload Library" for WIZnet chip. It includes drivers and application protocols. The ioLibrary can be used for W5100S and other chips's application designs. These will be updated continuously.

| **Resource** | **Description** |
|--------------|-----------------|
| [![link](\img\link.png) ioLibrary_Driver][link-ioLibrary-Driver] | Official WIZnet driver library for W5100S and other chips |


      :::info

The ioLibrary_Driver is an MCU-independent library for WIZnet W5x00, W6x00 chips .
It provides implementations of essential TCP/IP services, enabling developers to build network applications with minimal MCU dependencies.
      ### Supported services
DHCP, DNS, MQTT, SNTP, TFTP, HTTP Server

      :::
  

</TabItem>


</Tabs>

## Hardware Resources

### Technical Resources

| **Resource**           | **Description**                | **Notes**                           |
|------------------------|--------------------------------|-------------------------------------|
| [![link](\img\link.png) Reference Schematic][link-w6100-ref-sch]    | Typical application schematic        | Includes recommended circuit design |
| ![link](\img\link.png) SCH & PCB Library      | TDB | |
| ![link](\img\link.png) Design Guide           | TBD | |

### Test & Certification

| **Resource**                | **Description**                        | **Notes**                      |
|-----------------------------|----------------------------------------|-------------------------------|
| ![link](\img\link.png) Ethernet Compliance Test | TBD |  |
| ![link](\img\link.png) Distance Test            | TBD |  |
| ![link](\img\link.png) EMC Test                 | TBD |  | 
| ![link](\img\link.png) Reliability Test         | TBD |  |
| ![link](\img\link.png) Certificate              | TBD |  |
## Related modules

<Tabs groupId="module" queryString>

<TabItem value="evb" label="Evaluation Boards" default >

### Evaluation Boards

<div className="link-card">
  <a
    href="/Product/Chip/Ethernet/W6100/w6100-evb-pico"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
  <img src="/img/products/w6100/w6100-EVB-PICO.png" alt="6100-EVB-Pico" />
    <div>
      <h3>6100-EVB-Pico</h3>
      <p>
W6100-EVB-Pico is a microcontroller evaluation board based on the Raspberry Pi RP2040 and fully hardwired TCP/IP controller W6100 – and basically works the same as Raspberry Pi Pico board but with additional Ethernet via W6100.
      </p>
    </div>
  </a>
</div>



<div className="link-card">
  <a
    href="/Product/Chip/Ethernet/W6100/w6100-evb-pico2"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
  <img src="/img/products/w6100/w6100-EVB-PICO2.png" alt="6100-EVB-Pico2" />
    <div>
      <h3>6100-EVB-Pico2</h3>
      <p>
W6100-EVB-Pico2 is a microcontroller evaluation board based on the Raspberry Pi RP2350 and fully hardwired TCP/IP controller W6100 – and basically works the same as Raspberry Pi Pico board but with additional Ethernet via W6100.
      </p>
    </div>
  </a>
</div>



</TabItem>

<TabItem value="hat" label="Ethernet Module" >

### Ethernet Module

<div className="link-card">
  <a
    href="/Product/ioModule/wiz610io"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
  <img src="/img/products/w6100/WIZ610io.png" alt="WIZ610io" />
    <div>
      <h3>WIZ610io</h3>
      <p>
WIZ610io is the network module that includes W6100 (TCP/IP hardwired chip, include PHY), MAG-JACK (RJ45 with X’FMR) with other glue logics. It can be used as a component and no effort is required to interface W6100 and Transformer. The best advantage of the WIZ610io is that it supports IPv6. The WIZ610io is an ideal option for users who want to develop their Internet enabling systems rapidly.
      </p>
    </div>
  </a>
</div>

<div className="link-card">
  <a
    href="/Product/ioModule/wiz610mj"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
  <img src="/img/products/w6100/WIZ610mj.png" alt="WIZ610MJ" />
    <div>
      <h3>WIZ610MJ</h3>
      <p>
WIZ610MJ is the network module that includes W6100 (TCP/IP hardwired chip, include PHY), MAG-JACK (RJ45 with X’FMR) with other glue logics. It can be used as a component and no effort is required to interface W6100 and Transformer. The best advantage of the WIZ610MJ is that it supports IPv6. The WIZ610MJ is an option for users who want to develop their Internet enabling systems rapidly.
      </p>
    </div>
  </a>
</div>

</TabItem>

</Tabs>





<!-- Chip current overview -->
[link-rp2040]: https://www.raspberrypi.org/products/rp2040/
[link-rp2350]: https://www.raspberrypi.com/products/rp2350/
[link-w5100s]: https://docs.wiznet.io/Product/Chip/Ethernet/W5100S/overview
[link-w5500]: https://docs.wiznet.io/Product/Chip/Ethernet/W5500/overview
[link-w6100]: https://docs.wiznet.io/Product/Chip/Ethernet/W6100/overview
[link-w6300]: https://docs.wiznet.io/Product/Chip/Ethernet/W6300/overview
[link-wiznet_ethernet_chips]: https://docs.wiznet.io/Product/iEthernet#product-family

<!-- Datasheet -->
[link-W5500-Datasheet]: https://docs.wiznet.io/Product/Chip/Ethernet/W5500/datasheet
[link-W5300-Datasheet]: https://docs.wiznet.io/img/products/w5300/W5300_DS_V134E.pdf
[link-W6300-Datasheet]: https://docs.wiznet.io/img/products/w6300/W6300%20DS_V100E.pdf
[link-W55RP20-Datasheet]: https://docs.wiznet.io/img/products/w55rp20/W55RP20_ds_v100e.pdf
[link-RP2040-Datasheet]: https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#documentation
[link-W5100-Datasheet]: https://docs.wiznet.io/img/products/w5100/W5100_DS_V128E.pdf
[link-W5100S-Datasheet]: https://docs.wiznet.io/img/products/w5100s/w5100s-ds-v128e.pdf
[link-W7500x-Datasheet]: https://docs.wiznet.io/img/products/w7500/w7500x_ds_v110.pdf
[link-W7500x-Datasheet-Ref]: https://docs.wiznet.io/img/products/w7500/w7500x_rm_v112_20181017_.pdf
[link-W7500P-PHY-Datasheet]: http://www.bdtic.com/DataSheet/ICplus/IP101G_DS_R01_20121224.pdf

<!-- Technical Documents -->
[link-W5200-to-W5500-Migration-Sheet]: https://docs.wiznet.io/Product/Chip/Ethernet/W5500/migration-from-w5200
[link-W5300-W5100-Comparison-Sheet]: https://docs.wiznet.io/img/products/w5300/Comparison_Sheet_between_W5100_and_W5300_V1.1_kor.pdf
[link-W5100S-vs-W5100-Comparison-Sheet]: https://docs.wiznet.io/img/products/w5100s/application/w5100svsw5100_cs_v110e.pdf
[link-W5100-errata]: https://docs.wiznet.io/img/products/w5100/3150Aplus_5100_ES_V260E.pdf
[link-W5100S-errata]: https://docs.wiznet.io/img/products/w5100s/w5100s-errata-en-v100.pdf
[link-W7500P-errata]: https://docs.wiznet.io/img/products/w7500/w7500x_erratasheet_v120e.pdf
[link-W7500x-phy-access]: https://docs.wiznet.io/img/products/w7500p/ref_sch/how_to_access_phy_application_note_v100.pdf
[link-W7500x-NLB]: https://docs.wiznet.io/img/products/w7500/w7500_arp_problem_in_the_nlb.pdf

<!-- Library -->
[link-ioLibrary-Driver]: https://github.com/Wiznet/ioLibrary_Driver
[link-w55mh32-Driver]: https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/Libraries/W55MH32Lib
[link-w55rp20-Driver-c/c++]: https://github.com/WIZnet-ioNIC/WIZnet-PICO-C
[link-w55rp20-Driver-micropython]: https://github.com/WIZnet-ioNIC/WIZnet-ioNIC-micropython
[link-w55rp20-Driver-arduino]: https://github.com/WIZnet-ioNIC/WIZnet-ioNIC-arduino-library
[link-w55rp20-Driver-circuitpython]: https://github.com/WIZnet-ioNIC/WIZnet-ioNIC-Circuitpython

<!-- Library examples -->
[link-example-aac]: https://github.com/Wiznet/ioLibrary_Driver/tree/master/Internet/AAC
[link-example-dhcp]: https://github.com/Wiznet/ioLibrary_Driver/tree/master/Internet/DHCP
[link-example-dhcp6]: https://github.com/Wiznet/ioLibrary_Driver/tree/master/Internet/DHCP6
[link-example-dns]: https://github.com/Wiznet/ioLibrary_Driver/tree/master/Internet/DNS
[link-example-mqtt]: https://github.com/Wiznet/ioLibrary_Driver/tree/master/Internet/MQTT
[link-example-snmp]: https://github.com/Wiznet/ioLibrary_Driver/tree/master/Internet/SNMP
[link-example-sntp]: https://github.com/Wiznet/ioLibrary_Driver/tree/master/Internet/SNTP
[link-example-tftp]: https://github.com/Wiznet/ioLibrary_Driver/tree/master/Internet/TFTP
[link-example-httpserver]: https://github.com/Wiznet/ioLibrary_Driver/tree/master/Internet/httpServer
[link-w55mh32-keil]: https://docs.wiznet.io/Product/Chip/MCU/W55MH32/install_keil
[link-w55mh32-examples]: https://docs.wiznet.io/Product/Chip/MCU/W55MH32/W55MH32_examples

<!-- Application Notes  -->
[download-W5300-Application-Note]: https://docs.wiznet.io/img/products/w5300/W5300_app_note.zip
[download-W5100-Application-Note]: https://docs.wiznet.io/img/products/w5100/W5100_Application_Note.zip
[link-W5100S-AppNote-ipraw]: https://docs.wiznet.io/img/products/w5100s/w5100s_an_ipraw_v100e.pdf
[link-W5100S-AppNote-pppoe]: https://docs.wiznet.io/img/products/w5100s/application/w5100s_an_pppoe_v100e.pdf
[link-W5100S-AppNote-slc]: https://docs.wiznet.io/img/products/w5100s/application/w5100s_an_slc_v100e.pdf
[link-W5100S-AppNote-interrupt]: https://docs.wiznet.io/img/products/w5100s/application/w5100s_an_interrupt_v100e.pdf

<!-- Hardware Resources -->
[download-W5300-Ref-Schematic]: https://docs.wiznet.io/img/products/w5300/W5300_ref_schematics(2010_2_12).zip
[link-w6100-ref-sch]: https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W6100/Reference%20Schematic
[link-w6300-ref-sch]: https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W6300/W6300-EVB-Pico_V100
[link-w55rp20-ref-sch]: https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/09_ioNIC
[link-w55rp20-dimension]: https://docs.wiznet.io/img/products/w55rp20-evb-pico/w55rp20-evb-pico-dimension.png
[download-W5100-Ref-Sch]: https://docs.wiznet.io/img/products/w5100/w5100_hardware.zip
[link-W5100S-Ref-Sch]: https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/02_iEthernet/W5100S/Reference%20Schematic/W5100S_Ref_Schematic_V120_use_trans.pdf
[link-W5100S-Ref-Ext]: https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/02_iEthernet/W5100S/Reference%20Schematic/W5100S_ext_Ref_Schematic_V100.pdf
[link-W5100S-Ref-Int]: https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/02_iEthernet/W5100S/Reference%20Schematic/W5100S_int_Ref_Schematic_V100.pdf
[link-W5100S-crystal]: https://docs.wiznet.io/img/products/w5100s/w5100s_crystal_selection_guide_v100e.pdf
[link-W5100S-reflow]: https://docs.wiznet.io/img/design_guide/reflow_profile/ir_reflow_profile.pdf
[link-W7500P-Ref-Sch]: https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/01_iMCU/W7500P/Reference%20Schematic/W7500P_Ref_Schematic_V130.pdf

<!-- Test & Certification -->
[download-W5100-Qual]: https://docs.wiznet.io/img/products/w5100/W5100_qual_report.zip

<!-- Related Boards -->
[link-W55MH32L-EVB]: https://docs.wiznet.io/Product/Chip/MCU/W55MH32/W55MH32L-evb
[link-W55MH32Q-EVB]: https://docs.wiznet.io/Product/Chip/MCU/W55MH32/W55MH32Q-evb
[link-w5500-ethernet-shield]: https://docs.wiznet.io/Product/Open-Source-Hardware/w5500_ethernet_shield_kor
[link-W5100S-Ethernet_Shield]: https://wiznetshop.io/product/detail.html?product_no=818&cate_no=57&display_group=1
[link-w55rp20-evb-pico]: https://docs.wiznet.io/Product/Chip/MCU/W55RP20/w55rp20-evb-pico
[link-raspberry_pi_pico]: https://www.raspberrypi.com/products/raspberry-pi-pico/
[link-wiznet_ethernet_hat]: https://docs.wiznet.io/Product/Open-Source-Hardware/wiznet_ethernet_hat
[link-w5100s-evb-pico]: https://docs.wiznet.io/Product/Chip/Ethernet/W5100S/w5100s-evb-pico
[link-w5500-evb-pico]: https://docs.wiznet.io/Product/Chip/Ethernet/W5500/w5500-evb-pico
[link-w5500-evb-pico-poe]: https://docs.wiznet.io/Product/Chip/Ethernet/W5500/W5500-EVB-Pico-PoE
[link-w6100-evb-pico]: https://docs.wiznet.io/Product/Chip/Ethernet/W6100/w6100-evb-pico
[link-w6300-evb-pico]: https://docs.wiznet.io/Product/Chip/Ethernet/W6300/w6300-evb-pico
[link-w5500-evb-pico2]: https://docs.wiznet.io/Product/Chip/Ethernet/W5500/w5500-evb-pico2
[link-w5100s-evb-pico2]: https://docs.wiznet.io/Product/Chip/Ethernet/W5100S/w5100s-evb-pico2
[link-w5500-io]: https://docs.wiznet.io/Product/ioModule/W5500-io
[link-wiz550-io]: https://docs.wiznet.io/Product/ioModule/wiz550io
[link-wiz610-io]: https://docs.wiznet.io/Product/ioModule/wiz610io
[link-wiz610-mj]: https://docs.wiznet.io/Product/ioModule/wiz610mj
[link-wiz630-io]: https://docs.wiznet.io/Product/ioModule/wiz630io
[link-wiz810s-io]: https://docs.wiznet.io/Product/ioModule/wiz810sio
[link-wiz810s-mj]: https://docs.wiznet.io/Product/ioModule/wiz810smj
[link-wiz810-mj]: https://docs.wiznet.io/Product/ioModule/wiz810mj
[link-wiz811-mj]: https://docs.wiznet.io/Product/ioModule/wiz811mj
[link-wiz830-mj]: https://docs.wiznet.io/Product/ioModule/wiz830mj
[link-wiz850-io]: https://docs.wiznet.io/Product/ioModule/wiz850io
[link-wizarduino-m0-eth]: https://docs.wiznet.io/Product/Open-Source-Hardware/wizarduino_m0_eth_eng
[link-wiz750sr]: https://docs.wiznet.io/Product/S2E-Module/WIZ750SR
[link-wiz750sr-100]: https://docs.wiznet.io/Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100
[link-wiz750sr-105]: https://docs.wiznet.io/Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105
[link-wiz750sr-110]: https://docs.wiznet.io/Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110
[link-wiz750sr-120]: https://docs.wiznet.io/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120
[link-wiz750sr-125]: https://docs.wiznet.io/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125
[link-wiz500sr-rp]: https://docs.wiznet.io/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/overview
[link-wiz505sr-rp]: https://docs.wiznet.io/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/overview
[link-wiz510sr-rp]: https://docs.wiznet.io/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/overview
[link-wiz500sr-evb]: https://docs.wiznet.io/Product/S2E-Module/WIZ5xxSR-RP-Series/wiz500sr-rp-evb
[link-wiz505sr-rp-evb]: https://docs.wiznet.io/Product/S2E-Module/WIZ5xxSR-RP-Series/wiz505sr-rp-evb
[link-wiz550sr]: https://docs.wiznet.io/Product/S2E-Module/WIZ550SR
[link-w5500s2e-s1]: https://docs.wiznet.io/Product/S2E-Module/W5500S2E-S1
[link-w5500s2e-z1]: https://docs.wiznet.io/Product/S2E-Module/W5500S2E-Z1
[link-w7500s2e-r1]: https://docs.wiznet.io/Product/S2E-Module/W7500S2E-R1
[link-w232n]: https://docs.wiznet.io/Product/S2E-Module/Industrial/W232N-datasheet-en
[link-wizwiki-7500p]: https://docs.wiznet.io/Product/Mbed-WIZwiki-Platform/wizwiki-w7500p