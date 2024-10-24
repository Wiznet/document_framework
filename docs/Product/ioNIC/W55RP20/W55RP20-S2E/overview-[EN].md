---
id: overview-[EN]
title: Overview
date: 2024-10-23
---

## Overview

The **W55RP20-S2E** is a pre-programmed product with an Serial to Ethernet FW and a valid MAC address into the [W55RP20](./../overview.md).


### WIZnet S2E Solution

  - WIZnet 'Serial to Ethernet' product is a protocol converter that
    transmits data sent by serial equipment as TCP/IP data and converts
    the TCP/IP data received through the network back into serial data
    to the serial equipment.



  - With this product, it is possible to **easily add an Ethernet networking function to a device supporting UART interface**, the
    devices can be controlled via an Ethernet network - Internet.

 
  - We also provide **[Customization Services](#customization-services)** such as change / add functions by customer request.

-----

## Features

**The following key features are included with the W55RP20-S2E product.**
  - 10/100Mbps Ethernet & Up to 921,600bps serial speed
  - Easy to add Ethernet networking function through UART interface
        of any device / MCU
  - Support **RS-232C** and **RS-422/485** if an external circuit is configured.
  - Status pins: PHY link status / TCP connection status / Run status
  - Support multiple protocols
    - SSL TCP client
    - MQTT client
    - MQTTS client    
  - Support protocol conversion between modbus RTU/ASCII and modbus tcp 
  - Support serial data packing
  - Support TCP connection password
  - Configuration is possible via serial AT commands or via Configuration tool
  - Separate Data UART and Debug UART port
  - Unique **MAC Address** (WIZnet OUI)

## Hardware Design Guide & References

### Pin Assignment

<img src="/img/products/w55rp20-s2e/w55rp20-s2e-pinmap.png" width="600" />

| Pin Number |    Signal   | Description                                                  |
|------------|-------------|------------------------------------------------------------|
| 1          | TXN         | TXP/TXN differential signal pair<br />The differential data is transmitted to the media on the TXP/TXN signal pair.       |
| 2          | TXP         | TXP/TXN differential signal pair               |
| 3          | AVDD        | TOE Analog 3.3V power                         |
| 4          | RXN         | RXP/RXN differential signal pair<br />The differential data from the media is received on the RXP/RXN signal pair.        |
| 5          | RXP         | RXP/RXN differential signal pair               |
| 6          | AVDD        | TOE Analog 3.3V power                    |
| 7          | EXRES1      | External Resistor pin<br />Connect a resistor of 12.4KΩ to the AGND.<br />(Refer to the “Reference schematic”)      |
| 8          | AVDD        | TOE Analog 3.3V power                   |
| 9          | UART1_TX    | Serial data TX           |
| 10         | UART1_RX    | Serial data RX         |
| 11         | UART1_CTS   | Clear To Send (RX)<br />Associated with the RTS of the connected device and is used to transmit data when the RTS sent from that pin is low.                                                                                                                                            |
| 12         | UART1_RTS   | Request To Send<br />Connects with the CTS of the connected equipment and sends a low signal when the W55RP20-S2E is in a state where it can receive data.                                                                                                                              |
| 13         | IOVDD       | Digital IO Supply<br />Power supply for digital GPIOs, nominal voltage 3.3V                                                                                                                                                                                                             |
| 14         | DTR         | Data Terminal Ready (TX)<br />Connected to the device's DSR pin to show that it is ready to communicate.                                                                                                                                                                                |
| 15         | DSR         | Data Set Ready (RX)<br />Connected to the device's DTR pin to indicate that it is ready for communication.                                                                                                                                                                              |
| 16         | LINK_STATUS | Link Status signal<br />High : Link<br />Low : UnLink       |
| 17         | TCP_STATUS  | TCP Connection<br />High : Connect<br />Low : Disconnect        |
| 18         | RESERVED    | RESERVED PIN                                               |
| 19         | RESERVED    | RESERVED PIN                    |
| 20         | AT_MODE     | AT Command mode pin<br />High : Gateway Mode (default)<br />Low : AT Command Mode<br />Changes will be reflected after reset                                                                                                                                                                |
| 21         | BOOT_MODE   | Boot Mode pin<br />Low : Enter W55RP20-S2E BOOT mode<br />Changes will be reflected after reset                                                                                                                                                                                           |
| 22         | TESTEN      | Factory test mode pin<br />Tie to GND.                      |
| 23         | XIN         | Crystal input/output<br />Connect a crystal to RP2040’s crystal oscillator. XIN can also be used as a single-ended CMOS clock input, with XOUT disconnected. The USB bootloader requires a 12MHz crystal or 12MHz clock input.                                                          |
| 24         | XOUT        | Crystal input/output                                     |
| 25         | IOVDD       | Digital IO Supply<br />Power supply for digital GPIOs, nominal voltage 3.3V                 |
| 26         | DVDD        | Digital core power supply<br />Nominal voltage 1.1V. Can be connected to VREG_VOUT, or to some other board-level power supply.                        |
| 27         | SWCLK       | Debug clock/data<br />Access to the internal Serial Wire Debug multi-drop bus. Provides debug access to both processors, and can be used to download code.         |
| 28         | SWD         | Debug clock/data                                        |
| 29         | RUN         | Global asynchronous reset pin<br />Reset when driven low, run when driven high. If no external reset is required, this pin can be tied directly to IOVDD.                              |
| 30         | RESERVED    | RESERVED PIN                                        |
| 31         | AVDD        | TOE Analog 3.3V power            |
| 32         | VBG         | Output of band gap                               |
| 33         | TOCAP       | External Reference Capacitor<br />This pin must be connected to a 4.7uF capacitor. The trace length to capacitor should be short to stabilize the internal signals.                     |
| 34         | AVDD        | TOE Analog 3.3V power                                    |
| 35         | 1V2O        | 1.2V regulator output voltage<br />Connect 10nF capacitor.     |
| 36         | SPDLED      | Speed LED<br />This shows the Speed status of the connected link.<br />Low: 100Mbps<br />High: 10Mbps       |
| 37         | LINKLED     | Link LED<br />This shows the Link status.<br />Low: Link is established<br />High: Link is not established                                                                                 |
| 38         | DUPLED      | Duplex LED<br />This shows the Duplex status for the connected link.<br />Low: Full-duplex mode<br />High: Half-duplex mode                    |
| 39         | ACTLED      | Active LED<br />This shows that there is Carrier sense (CRS) from the active Physical Medium Sub-layer (PMD) during TX or RX activity.<br />Low: Carrier sense from the active PMD<br />High: No carrier sense    |
| 40         | FACT_RESET  | Factory Reset Pin<br />Drive this pin to Low for at least 5.0s then W55RP20-S2E will be reset to factory settings         |
| 41         | RUN_STATUS  | Switch Toggle every 1.0s when W55RP20-S2E application is working.  |
| 42         | VDD         | TOE Digital 3.3V Power                                  |
| 43         | IOVDD       | Digital IO Supply<br />Power supply for digital GPIOs, nominal voltage 3.3V    |
| 44         | XI          | 25MHz crystal input/output<br />A 25MHz crystal and oscillator is used to connect these pins.   |
| 45         | XO          | 25MHz crystal input/output<br />A 25MHz crystal and oscillator is used to connect these pins.   |
| 46         | RESERVED    | RESERVED PIN       |
| 47         | RESERVED    | RESERVED PIN        |
| 48         | RESERVED    | RESERVED PIN          |
| 49         | RESERVED    | RESERVED PIN          |
| 50         | PMODE2      | PHY Operation mode select pins.<br />Default: Pull-up (77kΩ)<br /> |
| 51         | PMODE1      | PHY Operation mode select pins.<br />Default: Pull-up (77kΩ)<br /> |
| 52         | PMODE0      | PHY Operation mode select pins.<br />Default: Pull-up (77kΩ)<br /> |
| 53         | IOVDD       | Digital IO Supply<br />Power supply for digital GPIOs, nominal voltage 3.3V. |
| 54         | ADC_AVDD    | ADC supply<br />Power supply for analogue-to-digital converter, nominal voltage 3.3V.    |
| 55         | VREG_VIN    | Voltage regulator input supply<br />Power input for the internal core voltage regulator, nominal voltage 1.8V to 3.3V.              |
| 56         | VREG_VOUT   | Voltage regulator output<br />Power output for the internal core voltage regulator, nominal voltage 1.1V, 100mA max current.       |
| 57         | USB_DM      | USB controller, supporting Full Speed device and Full/Low Speed host. A 27Ω series termination resistor is required on each pin, but bus pull-ups and pull-downs are provided internally.  |
| 58         | USB_DP      | USB controller            |
| 59         | USB_VDD     | USB supply<br />Power supply for internal USB Full Speed PHY, nominal voltage 3.3V |
| 60         | IOVDD       | Digital IO Supply<br />Power supply for digital GPIOs, nominal voltage 3.3V |
| 61         | DVDD        | Digital core power supply, nominal voltage 1.1V. Can be connected to VREG_VOUT, or to some other board-level power supply    |
| 62         | VDD         | Power supply of the Flash Memory   |
| 63         | BOOT        | BOOT Pin<br />When power is applied and during reset, if the BOOT pin is low, the device enters BOOTSEL mode.     |
| 64         | IOVDD       | Digital IO Supply<br />Power supply for digital GPIOs, nominal voltage 3.3V    |
| 65         | UART0_RX    | Debug RX       |
| 66         | UART0_TX    | Debug TX        |
| 67         | RESERVED    | RESERVED PIN       |
| 68         | RESERVED    | RESERVED PIN       |
| 69         | GND    | Ground       |





## Manuals
- [How to use Config-tool](./Web_Config_Guide_EN.md)
- [How to use Web config](./Web_Config_Guide_EN.md)
- [How to use AT CMD](./command-manual-en.md)
- [How to connect MQTT](./mqtt-connection-guide-en.md)
- [How to connet SSL](./ssl-connection-guide-en.md)
- [How to connet Modbus](./modbus-connection-guide-en.md)
- [How to upload/update FW](./firmware-update-guide-en.md)
- [How to do factory reset](./factory-rst-guide-en.md)
- [How to write MAC Address](./mac_address-write-guide-en.md)

## Customization Services


WIZnet offers **Customization services** for your specific needs.

We can provide customization services based on W55RP20-S2E chip
products: Depending on the customer application, it is possible to
change the initial settings of the product, change the MAC address, add
various protocols, and add functions. The developed firmware is
programmed into the W55RP20 MCU and delivered to the requesting
customer.

We also provide technical support including various hardware guide and
references for customer's **quick product design-win**.
