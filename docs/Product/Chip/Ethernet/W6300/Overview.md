---
id: overview
title: Overview
slug: /Product/Chip/Ethernet/W6300/
date: 2025-07-30
keywords: [w6300,ethernet chip,wiznet,hardwired tcp/ip,arduino ethernet,pico ethernet]
description: W6300 chip is a Hardwired Internet controller designed as a full hardwired TCP/IP stack with WIZnet technology
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# W6300
<div className="main_intro"> 
  <div className="main_intro_image">
    <img src="/img/products/w6300/overview/w6300_chip.png" width="550" />
  </div>
  <div className="w6300-text">
    <p>
W6300 is a hardwired TCP/IP stack internet controller chip with WIZnet technology, designed for high-speed Ethernet communication. It integrates Dual IPv4/IPv6 hardware stack, 10/100 Ethernet MAC, and PHY in a single chip. To achieve performance over 90Mbps, W6300 supports a 150MHz system clock and QSPI interface with 4 data lines. It provides 8 independent SOCKETs and 64KB of internal SRAM, enabling reliable Ethernet application development through socket programming.
    </p>
  </div>
</div>

<details>
<summary><b>Block Diagram</b></summary> 
<img src="/img/products/w6300/overview/W6300_block_diagram_250228.png" alt="W6300_Block_Diagram" width="500"/>

</details>

<details>
<summary><b>Pin Map</b></summary> 
TBD
</details>
---
## Features

  - Supports following Hardwired TCP/IP Protocols : TCP, UDP, ICMP, IPv4, IPv6, ARP, IGMP, PPPoE
  - Supports 8 independent sockets simultaneously
  - Supports Power down mode
  - Supports Wake on LAN over UDP
  - Supports High Speed Serial Peripheral Interface(SPI MODE 0, 3)
  - Internal 32Kbytes Memory for Tx/Rx Buffers
  - 10BaseT/100BaseTX Ethernet PHY embedded
  - Support Auto Negotiation (Full and half duplex, 10 and 100-based)
  - Not support IP Fragmentation
  - 3.3V operation with 5V I/O signal tolerance
  - LED outputs (Full/Half duplex, Link, Speed, Active)
  - 48 Pin LQFP Lead-Free Package (7x7mm, 0.5mm pitch)

-----

## Documentation


### datasheet 

| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [![link](/img/products/w5500/w5500_evb/icons/download.png) W6300 Datasheet (EN)](/img/products/w6300/W6300%20DS_V100E.pdf) <br />  | Technical specifications and features of the W6300 chip | - |


---
## Software Resources

<Tabs groupId="software"  queryString>
  <TabItem value="driver" label="Driver" default >
  
### Driver

    | **Resource** | **Description** |
    |--------------|-----------------|
    | [![link](\img\link.png) ioLibrary_Driver][link-ioLibrary-Driver] | Official WIZnet driver library for W6300 and other chips |

      :::info

The ioLibrary_Driver is an MCU-independent library for WIZnet W5x00, W6x00 chips .
It provides implementations of essential TCP/IP services, enabling developers to build network applications with minimal MCU dependencies.
      ### Supported services
DHCP, DNS, MQTT, SNTP, TFTP, HTTP Server

      :::
  
  
  </TabItem>


</Tabs>

---
## Hardware Resources

### Technical Resources

| **Resource**           | **Description**                | **Notes**                           |
|------------------------|--------------------------------|-------------------------------------|
| [![link](/img/link.png) W6300-EVB-Pico SCH & PCB Library](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W6300/W6300-EVB-Pico_V100)      | Schematic & Part list & Gerber File | - |
| [![link](/img/link.png) W6300-EVB-Pico2 SCH & PCB Library](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W6300/W6300-EVB-Pico2_V100)      | Schematic & Part list & Gerber File | - |
| ![link](/img/link.png) Design Guide        | TBD | - |
| [![link](/img/link.png) Reference Schematic (Ext.)](./Ref.-Schematic.md)  | External Transformer schematic        | Includes recommended circuit design |
| ![link](/img/link.png) Reference Schematic (RRJ45) | TBD        | - |

### Test & Certification

| **Resource**                | **Description**                        | **Notes**                      |
|-----------------------------|----------------------------------------|-------------------------------|
| ![link](/img/link.png) ESD Test                 | TBD | - |
| ![link](/img/link.png) Ethernet Compliance Test | TBD | - |
| ![link](/img/link.png) Distance Test            | TBD | - |
| ![link](/img/link.png) EMC Test                 | TBD | - |
| ![link](/img/link.png) Reliability Test         | TBD | - |
| ![link](/img/link.png) Certificate              | TBD | - | 
---
## Related modules

<Tabs groupId="module" queryString>

  <TabItem value="evb" label="Evaluation Boards" default >

### Evaluation Boards
  <div className="link-card">
  <a
    href="https://docs.wiznet.io/Product/Chip/Ethernet/W6300/w6300-evb-pico"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
    <img src="/img/products/w6300-evb-pico/w6300-evb-pico-docs.png" alt="W6300-EVB-Pico" />
    <div>
      <h3>W6300-EVB-Pico</h3>
      <p>
        W6300-EVB-Pico is a microcontroller evaluation board based on the Raspberry Pi RP2040 and fully hardwired TCP/IP controller W6300 – and basically works the same as Raspberry Pi Pico board but with additional Ethernet via W6300.
      </p>
    </div>
  </a>
  </div>  

  <div className="link-card">
  <a
    href="https://docs.wiznet.io/Product/Chip/Ethernet/W6300/W6300-EVB-Pico2"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
    <img src="/img/products/w6300-evb-pico2/w6300-evb-pico2-docs.png" alt="w6300-evb-pico2" />
    <div>
      <h3>W6300-EVB-Pico2</h3>
      <p>
        W6300-EVB-Pico2 is a microcontroller evaluation board based on the Raspberry Pi RP2350 and the fully hardwired TCP/IP controller W6300 enhancing the capabilities of the traditional Raspberry Pi Pico2 board with additional Ethernet functionality via W6300.
      </p>
    </div>
  </a>
  </div>

  </TabItem>

 <TabItem value="hat" label="Ethernet Module" >

### Ethernet Module

  <div className="link-card">
  <a
    href="/Product/ioModule/wiz630io"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
    <img src="/img/products/wiz630io/WIZ630io_Front_side_view.png" alt="WIZ630io" />
    <div>
      <h3>WIZ630io</h3>
      <p>
       WIZ630io is a compact size network module that includes a W6300 (TCP/IP hardwired chip and PHY embedded), a transformer and RJ45. It can be used as a component and no effort is required to interface W6300 and Transformer. 
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