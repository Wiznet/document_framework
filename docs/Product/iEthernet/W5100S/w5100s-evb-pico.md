---



id: w5100s-evb-pico



title: W5100S-EVB-Pico



date: 2022-12-09



keywords: [raspberry pi pico, rp2040 ethernet, pico ethernet, w5100s]



description: W5100S-EVB-Pico made for prototyping and testing Ethernet capabilities on Pico



---







## Overview


W5100S-EVB-Pico is a microcontroller evaluation board based on the Raspberry Pi RP2040 and fully hardwired TCP/IP controller W5100S – and basically works the same as Raspberry Pi Pico board but with additional Ethernet via W5100S.


- Raspberry Pi Pico Clone
- Ethernet (W5100S Hardwired TCP/IP CHIP)
- [AWS IoT Core Qualified](https://devices.amazonaws.com/detail/a3G8a00000E2TSBEA3/W5100S-EVB-Pico)
- [Microsoft Azure Device Certified](https://devicecatalog.azure.com/devices/9171d1ae-eb6d-4636-b512-611dc96bc2c7)

<a target="_blank" href={require('/img/osh/w5100s_evb_pico/w5100s-evb-pico-1.1-side.png').default}><img src={require('/img/osh/w5100s_evb_pico/w5100s-evb-pico-1.1-side.png').default} alt="W5100S-EVB-RP2040"/></a>

![Powered By Raspberry Pi logo](/img/pbp-logo-small.jpg)

## Revision history

| Date | Version | Description |
| ---- | ------- | ----------- |
| Oct 2021 | 1.0 | Initial board release |
| Apr 2022 | 1.1 | Added SW RUN |

## Features

- RP2040 microcontroller with 2MByte Flash
  - Dual-core cortex M0+ at up to 133MHz
  - 264kByte multi-bank high performance SRAM
  - External Quad-SPI Flash with eXecute In Place (XIP)
  - High performance full-crossbar bus fabric  
  - 30 multi-function General Purpose IO (4 can be used for ADC)
    - 1.8-3.3V IO Voltage (NOTE. Pico IO voltage is fixed at 3.3V)
  - 12-bit 500ksps Analogue to Digital Converter (ADC)
  - Various digital peripherals
    - 2 × UART, 2 × I2C, 2 × SPI, 16 × PWM channels
    - 1 × Timer with 4 alarms, 1 × Real Time Counter
  - 2 × Programmable IO (PIO) blocks, 8 state machines total
  - Flexible, user-programmable high-speed IO
  - Can emulate interfaces such as SD Card and VGA  
- Includes W5100S
  - Supports Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE
  - Supports 4 Independent Hardware SOCKETs simultaneously
  - Internal 16 Kbytes Memory for TX/ RX Buffers
  - SPI Interface
- Micro-USB B port for power and data (and for reprogramming the Flash)
- 40 pin 21x51 'DIP' style 1mm thick PCB with 0.1" through-hole pins also with edge castellations
- 3-pin ARM Serial Wire Debug (SWD) port
- 10 / 100 Ethernet PHY embedded
- Supports Auto Negotiation
  - Full / Half Duplex
  - 10 / 100 Based
- Built-in RJ45(RB1-125BAG1A)
- Built-in LDO (LM8805SF5-33V)

## Hardware Specification
### Pin-out v1.1

<a target="_blank" href={require('/img/osh/w5100s_evb_pico/w5100s-evb-pico-1.1-pinout.png').default}><img src={require('/img/osh/w5100s_evb_pico/w5100s-evb-pico-1.1-pinout.png').default} alt="W5100S-EVB-Pico_PINOUT"/></a>

<details>

<summary>Above image presents pinout for v1.1. If you are looking for pinout of version 1.0, click here.</summary>

<a target="_blank" href={require('/img/osh/w5100s_evb_pico/w5100s-evb-pic-pinout_v1.png').default}><img src={require('/img/osh/w5100s_evb_pico/w5100s-evb-pic-pinout_v1.png').default} alt="W5100S-EVB-Pico_PINOUT"/></a>

</details>

W5100S-EVB-Pico pinout is directly connected to the GPIO of RP2040 as shown in the picture above. It has the same pinout as the Raspberry Pi Pico board. However, GPIO16, GPIO17, GPIO18, GPIO19, GPIO20, GPIO21 are connected to W5100S inside the board. These pins enable SPI communication with W5100S to use Ethernet function. If you are using the Ethernet function, these pins cannot be used for any other purpose.

The RP2040 GPIO used inside W5100S-EVB-Pico is as follows.

| I/O  | Pin Name | Description                                    |
| :--: | -------- | ---------------------------------------------- |
|  I   | GPIO16   | Connected to MISO on W5100S                    |
|  O   | GPIO17   | Connected to CSn on W5100S                     |
|  O   | GPIO18   | Connected to SCLK on W5100S                    |
|  O   | GPIO19   | Connected to MOSI on W5100S                    |
|  O   | GPIO20   | Connected to RSTn on W5100S                    |
|  I   | GPIO21   | Connected to INTn on W5100S                    |
|  I   | GPIO24   | VBUS sense - high if VBUS is present, else low |
|  O   | GPIO25   | Connected to user LED                          |
|  I   | GPIO29   | Used in ADC mode (ADC3) to measure VSYS/3      |


Apart from GPIO and ground pins, there are 7 other pins on the main 40-pin interface:

| Pin No. | Pin Name | Description                                                  |
| ------- | -------- | ------------------------------------------------------------ |
| PIN40   | VBUS     | Micro-USB input voltage, connected to micro-USB port pin 1. Nominally 5V. |
| PIN39   | VSYS     | Main system input voltage, which can vary in the allowed range 4.3V to 5.5V, and is used by the on-board LDO to generate the 3.3V . |
| PIN37   | 3V3_EN   | Connects to the on-board LDO enable pin. To disable the 3.3V (which also de-powers the RP2040 and W5100S), short this pin low. |
| PIN36   | 3V3      | Main 3.3V supply to RP2040  and W5100S, generated by the on-board LDO. |
| PIN35   | ADC_VREF | ADC power supply (and reference) voltage, and is generated on W5100S-EVB-Pico by filtering the 3.3V supply. |
| PIN33   | AGND     | Ground reference for GPIO26-29.                              |
| PIN30   | RUN      | RP2040 enable pin, To reset RP2040, short this pin low.      |


### Operation Condition

| Item                      | Description                  |
| ------------------------- | ---------------------------- |
| Operation Temperature MAX | 85C (including self-heating) |
| Operation Temperature MIN | -20C                         |
| VBUS                      | DC 5V (+/- 10%)              |
| VSYS Min                  | DC 4.3V                      |
| VSYS Max                  | DC 5.5V                      |

Recommended maximum ambient temperature of operation is 70C.


<!--



## Electrical Specification







### Power Consumption



TBA



-->


## Technical Reference

### RP2040 Datasheet

- [Download](https://datasheets.raspberrypi.org/rp2040/rp2040-datasheet.pdf)


### W5100S Datasheet







- [Download](Overview.md)







### Schematic v1.1







<a target="_blank" href={require('/img/osh/w5100s_evb_pico/w5100s-evb-pico_sch_v110.jpg').default}><img src={require('/img/osh/w5100s_evb_pico/w5100s-evb-pico_sch_v110.jpg').default} alt="W5100S-EVB_Pico_schematic"/></a>







<details>



<summary>Above image presents schematic for v1.1. If you are looking for schematic of version 1.0, click here.</summary>



<a target="_blank" href={require('/img/osh/w5100s_evb_pico/w5100S-evb_pico_schematic.png').default}><img src={require('/img/osh/w5100s_evb_pico/w5100S-evb_pico_schematic.png').default} alt="W5100S-EVB_Pico_schematic"/></a>



</details>







### Schematic & Part list & Gerber File







- [Go to Github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S/W5100S-EVB-Pico)







### Dimension v1.1 (Unit : mm)







<a target="_blank" href={require('/img/osh/w5100s_evb_pico/w5100s-evb-pico-1.1-dimension.png').default}><img src={require('/img/osh/w5100s_evb_pico/w5100s-evb-pico-1.1-dimension.png').default} alt="W5100S-EVB-RP2040_Dimension"/></a>







<details>



<summary>Above image presents dimension for v1.1. If you are looking for dimension of version 1.0, click here.</summary>



<a target="_blank" href={require('/img/osh/w5100s_evb_pico/w5100s-evb-pico_dimension.png').default}><img src={require('/img/osh/w5100s_evb_pico/w5100s-evb-pico_dimension.png').default} alt="W5100S-EVB-RP2040_Dimension"/></a>



</details>







### Firmware Example







Please refer to below links to find firmware example.


- C/C++
  - [Ethernet Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-C)
  - [AWS Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-AWS-C)
  - [Azure Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-AZURE-C)
  - [LwIP Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-LWIP-C)
  - [FreeRTOS Examples](https://github.com/Wiznet/RP2040-HAT-FREERTOS-C)
  - [CircuitPython Examples](https://github.com/Wiznet/RP2040-HAT-CircuitPython)
  - [MicroPython Examples](https://github.com/Wiznet/RP2040-HAT-MicroPython)

### Application Notes

- C/C++
  - <a href = "/img/application_notes/PICO-C/DHCP_DNS_EXAMPLE_AN_V100.pdf" target ="_blank">DHCP_DNS_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/FTP_Client_EXAMPLE_AN_V100.pdf" target ="_blank">FTP_Client_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/FTP_Server_EXAMPLE_AN_V100.pdf" target ="_blank">FTP_Server_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/HTTP_Server_EXAMPLE_AN_V100.pdf" target ="_blank">HTTP_Server_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/LOOPBACK_EXAMPLE_AN_V100.pdf" target ="_blank">LOOPBACK_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/MQTT_Publish_EXAMPLE_AN_V100.pdf" target ="_blank">MQTT_Publish_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/MQTT_Publish_Subscribe_EXAMPLE_AN_V100.pdf" target ="_blank">MQTT_Publish_Subscribe_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/MQTT_Subscribe_EXAMPLE_AN_V100.pdf" target ="_blank">MQTT_Subscribe_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/NETBIOS_EXAMPLE_AN_V100.pdf" target ="_blank">NETBIOS_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/SNTP_EXAMPLE_AN_V100.pdf" target ="_blank">SNTP_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/TCP_Client_over_SSL_EXAMPLE_AN_V100.pdf" target ="_blank">TCP_Client_over_SSL_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/TFTP_Client_EXAMPLE_AN_V100.pdf" target ="_blank">TFTP_Client_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-AWS-C/AWS_IoT_HTTP_EXAMPLE_AN_V100.pdf" target ="_blank">AWS_IoT_HTTP_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-AWS-C/AWS_IoT_MQTT_EXAMPLE_AN_V100.pdf" target ="_blank">AWS_IoT_MQTT_EXAMPLE_AN_V100 - English</a>
  

### Certification

#### CE

- <a href="/img/osh/w5100s_evb_pico/Certificate-CE-W5100S-EVB-Pico.pdf" target="_blank">CE Certificate</a>
- <a href="/img/osh/w5100s_evb_pico/Report-CE-W5100S-EVB-Pico.pdf" target="_blank">CE Test Report</a>

| Date    | Decription |
| ------- | ---------- |
| OCT2023 | \-         |


#### FCC

- <a href="/img/osh/w5100s_evb_pico/Certificate-FCC-W5100S-EVB-Pico.pdf" target="_blank">FCC Certificate</a>
- <a href="/img/osh/w5100s_evb_pico/Report-FCC-W5100S-EVB-Pico.pdf" target="_blank">FCC Test Report</a>


| Date    | Decription |
| ------- | ---------- |
| OCT2023 | \-         |


### AWS Qualification

W5100S-EVB-Pico is first RP2040-based device that got AWS IoT Core Qualification.


![](/img/osh/w5100s_evb_pico/AWS_DQP_iot_500px.png)


- [AWS Partner Device Catalog](https://devices.amazonaws.com/detail/a3G8a00000E2TSBEA3/W5100S-EVB-Pico)
- <a href="/img/products/w5100s-evb-pico/w5100s-evb-pico-getting-started-guide-for-aws-iot-core-v1-1-0.pdf" target="_blank">Getting Started with AWS IoT Core</a>

### Microsoft Azure Certification

W5100S-EVB-Pico is first RP2040-based device certified to run with Microsoft Azure.


![](/img/osh/w5100s_evb_pico/Azure-Certified-Device-Badge_RGB.png)


- [Azure Certified Device Catalog](https://devicecatalog.azure.com/devices/9171d1ae-eb6d-4636-b512-611dc96bc2c7)
- <a href="/img/products/w5100s-evb-pico/w5100s-evb-pico-getting-started-guide-for-azure-iot-v1-0-1.pdf" target="_blank">Getting Started for Azure IoT</a>


## How to buy

[![WIZnetUS Online Shop, USA](/img/products/w5100s-evb-pico/icons/dollar.png)](https://eshop.wiznet.io/shop/module/w5100s-evb-pico/)
[![WIZnetKorea Online Shop, Korea](/img/products/w5100s-evb-pico/icons/won.png)](http://wiznetshop.io/product/detail.html?product_no=1049&cate_no=54&display_group=1)



