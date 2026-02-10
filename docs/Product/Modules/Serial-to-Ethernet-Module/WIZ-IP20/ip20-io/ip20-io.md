---
id: ip20-io
title: WIZ-IP20-IO
date: 2026-02-04

---

# WIZ-IP20-io
<div className="main-card">
<img src="/img/products/wiz-ip20/ip20-io/wizip20_io_cross.png" alt="Wiz-ip20-io" /> 
  <div>
    <h3>WIZ-IP20-io</h3>
    <br />
    <p>
      wizip20-io is an interface board for the WIZ-IP20 ioPort Serial-to-Ethernet Mag Jack module, providing easy access to UART, power, and control signals for rapid prototyping and evaluation.
    </p>
  </div>
</div>

### WIZnet S2E Solution

  - WIZnet 'Serial to Ethernet' product is a protocol converter that
    transmits data sent by serial equipment as TCP/IP data and converts
    the TCP/IP data received through the network back into serial data
    to the serial equipment.



  - With this product, it is possible to **easily add an Ethernet networking function to a device supporting UART/SPI interface**, the
    devices can be controlled via an Ethernet network - Internet.

 
  - We also provide **[Customization Services](#customization-services)** such as change / add functions by customer request.

## Features

**The following key features are included with the wizip20-io board.**
  - 10/100Mbps Ethernet & Up to 921,600bps serial speed
  - Easy to add Ethernet networking function through UART or SPI interface
        of any device / MCU
  - Support **RS-232C** and **RS-422/485** if an external circuit is configured.
  - Status pins: PHY link status / TCP connection status / Run status
  - Support multiple protocols
    - TCP Server
    - TCP Client
    - SSL TCP Client
    - TCP Mixed
    - Modbus RTU/ASCII (available only in TCP Server mode)
    - UDP (multicast supported)
    - MQTT Client
    - MQTTS Client
  - Support custom protocols (Please submit custom protocol requests via [**this link**](https://direct.wiznet.io/custom-firmware-request).)
    - HTTP
    - HTTPS
    - CoAP
    - External device OTA
  - Support serial data packing
  - Support TCP connection password
  - Configuration is possible via serial AT commands or via Configuration tool
  - Separate Data UART and Debug UART port
  - Unique **MAC Address** (WIZnet OUI)

---

### Pin-out
<img src="/img/products/wiz-ip20/ip20-io/wizip20_io_pinout.png" width="400" />


WIZ-IP20-IO pinout is directly connected to the GPIO of the W55RP20, which is compatible with RP2040 GPIO numbering. However, GPIO16, GPIO17, GPIO18, GPIO19, GPIO20, and GPIO21 are internally used for SPI communication with the embedded Ethernet controller to provide Ethernet functionality. Therefore, when the Ethernet function is enabled, these pins cannot be used for other purposes.

### I/O Signals

| I/O | Pin Name     | Description                                                                 |
|:---:|--------------|-----------------------------------------------------------------------------|
|  O  | TXD          | Data UART TX from WIZ-IP20 (connect to RX of external MCU/device)          |
|  I  | RXD          | Data UART RX to WIZ-IP20 (connect to TX of external MCU/device)            |
|  I  | RESETn       | Active-low reset input for WIZ-IP20                                        |
|  O  | LINK_STATUS  | High when Ethernet link is up, low when link is down                       |
|  O  | TCP_STATUS   | High when a TCP connection is established, low when disconnected           |
|  O  | RUN_STATUS   | System run/status indication (e.g., blinking while the module is running)  |
|  -  | VBUS         | 5V power input to wizip20-io board                                         |
|  -  | 3V3          | 3.3V power rail generated on-board and used to power WIZ-IP20              |
|  -  | GND          | Ground reference                                                           |

### UART/USB & Power Connector (J3)

| Pin No. | Signal  | I/O | Description                                                     |
|:-------:|---------|:---:|-----------------------------------------------------------------|
| J3-1    | GND     |  -  | Ground                                                          |
| J3-2    | CTS     |  I  | UART CTS input to wizip20-io (Clear To Send)                   |
| J3-3    | RTS     |  O  | UART RTS output from wizip20-io (Request To Send)              |
| J3-4    | TXD     |  O  | UART TX output from wizip20-io (connect to RX of external MCU/device) |
| J3-5    | RXD     |  I  | UART RX input to wizip20-io (connect to TX of external MCU/device)     |
| J3-6    | USB_P   |  I/O| USB D+ signal (to on-board USB-UART or USB connector, depending on design) |
| J3-7    | USB_N   |  I/O| USB D− signal                                                   |
| J3-8    | GND     |  -  | Ground                                                          |
 

On-board 3.3V Power Supply

- wizip20-io uses an on-board 3.3V buck-boost converter (SGM62112-3.3) to generate the 3.3V rail from the 5V input.  
The 5V line is filtered and fed into U1, and the regulated 3.3V output (3V3) powers the WIZ-IP20 module and related logic.

## Operation Condition

| Item                     | Description                                   |
|--------------------------|-----------------------------------------------|
| Operation Temperature MAX| 85°C (including self-heating)                 |
| Operation Temperature MIN| -40°C                                         |
| VBUS                     | DC 5V (±10%) input                            |
| VCC_3V3 Min              | DC 3.0V                                       |
| VCC_3V3 Typ              | DC 3.3V                                       |
| VCC_3V3 Max              | DC 3.6V                                       |

## Hardware Design Guide & References

## Documentation

This section provides key documentation, including user manuals and datasheets, to help you understand product features, specifications, and usage.

- <a href="/img/products/wiz-ip20/WIZ-IP20 User Manual_V1.0_20250925.pdf" target="_blank">WIZ-IP20 User Manual_V1.0</a>

---

## Manuals
- [How to use Config-tool](./command-manual-en.md)
- [How to use Web config](./Web_Config_Guide_EN.md)
- [How to use AT CMD](./command-manual-en.md)
- [How to connect MQTT](./mqtt-connection-guide-en.md)
- [How to connet SSL](./ssl-connection-guide-en.md)
- [How to connet Modbus](./modbus-connection-guide-en.md)
- [How to upload/update FW](./firmware-update-guide-en.md)
- [How to do factory reset](./factory-rst-guide-en.md)
- [How to write MAC Address](./mac_address-write-guide-en.md)
- [How to design hardware](./hw-design-guide-en.md)
- [How to use SPI Mode](./w55rp20-s2e-an-spi-mode-en.md)

---

## Hardware Resources

This section provides essential hardware resources, including schematics, 3D models, and part lists for your reference.

| Title | Description | Download | Notes |
|-------|-------------|----------|-------|
| Schematic | Circuit diagram for hardware design reference | ![download](/img/products/w5500/w5500_evb/icons/download.png)[download](/img/products/wiz-ip51s/WIZ_IP32_series_reference_schematic_v1.0.pdf) | - |

---

## Dimensions
![WIZip20-io Dimensions](/img/products/wiz-ip20/wizip20_io_demension.png)
## Test & Certification

- <a href="/img/products/wiz-ip20/KC적합등록필증_㈜위즈네트_WIZ-IP20.pdf" target="_blank">KC 인증</a>
- <a href="/img/products/wiz-ip20/FCC_SDoC_WIZ-IP20.pdf" target="_blank">FCC 인증</a>
- <a href="/img/products/wiz-ip20/CE_DoC_WIZ-IP20.pdf" target="_blank">CE 인증</a>


  <img src="/img/products/wiz-ip20/ip20-io/wizip20_io_front.png" alt="Wiz-ip20-io" /> 
  <img src="/img/products/wiz-ip20/ip20-io/wizip20_io_back.png"  alt="Wiz-ip20 Pin Description" />