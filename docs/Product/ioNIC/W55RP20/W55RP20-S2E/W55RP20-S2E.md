
# W55RP20-S2E README

> The W55RP20 is a System-in-Package (SiP) developed by WIZnet, integrating Raspberry Pi's RP2040 microcontroller, WIZnet's W5500 Ethernet controller, and 2MB of Flash memory into a single chip. 
 This repository contains firmware that implements Serial to Ethernet using the W55RP20.

These sections will provide how to configure development environment to develop and modify W55RP20-S2E.

- [W55RP20-S2E README](#w55rp20-s2e-readme)
  - [Development environment configuration](#development-environment-configuration)
- [Hardware requirements](#hardware-requirements)
- [W232N](#w232n)



<a name="development_environment_configuration"></a>
## Development environment configuration

To develop and modify W55RP20-S2E, the development environment must be configured so that RP2040 can be used.

W55RP20-S2E was developed by configuring the development environment for **Windows**, When configuring the development environment, refer to the '**9.2. Building on MS Windows**' section of '**Getting started with Raspberry Pi Pico**' document below to configure the development environment.

- [**Getting started with Raspberry Pi Pico**][link-getting_started_with_raspberry_pi_pico]

If you want development environments other than the development environment for Windows, note that you can find other ways to configure development environment in **'Chapter 9. Building on other platforms'**  section of the document above.



<a name="hardware_requirements"></a>

# Hardware requirements

| Image                                                        | Name                                                      | Etc                                                          |
| ------------------------------------------------------------ | --------------------------------------------------------- | ------------------------------------------------------------ |
| <image src= "https://docs.wiznet.io/assets/images/w55rp20-evb-pico-docs-8e041fe8924bed1c8d567c1c8b87628d.png" width="200px" height="150px"> | [**W55RP20-EVB-PICO**](https://docs.wiznet.io/Product/ioNIC/W55RP20/w55rp20-evb-pico)           | [W55RP20 Document](https://docs.wiznet.io/Product/ioNIC/W55RP20/documents_md) |

> ### Pin Diagram

The W55RP20 has internal connections between the RP2040 and W5500 via GPIO pins. The connection table is as follows:

| I/O  | Pin Name | Description                                    |
| :--- | -------- | ---------------------------------------------- |
| O    | GPIO20   | Connected to **CSn** on W5500                  |
| O    | GPIO21   | Connected to **SCLK** on W5500                 |
| I    | GPIO22   | Connected to **MISO** on W5500                 |
| O    | GPIO23   | Connected to **MOSI** on W5500                 |
| I    | GPIO24   | Connected to **INTn** on W5500                 |
| O    | GPIO25   | Connected to **RSTn** on W5500                 |
<BR>

The function pins are as follows :
| Function               | Type | Pin Num | GPIO Num | Description                                           |
|------------------------|------|---------|----------|-------------------------------------------------------|
| Debug_UART_Tx           | O    | 65      | 0        | Output Debug Messages                                  |
| Debug_UART_Rx           | I    | 66      | 1        |                                                       |
| DATA_UART_TX_PIN        | O    | 9       | 4        | TX pin for Data UART transmission                      |
| DATA_UART_RX_PIN        | I    | 10      | 5        | RX pin for Data UART reception                         |
| DATA_UART_CTS_PIN       | I    | 11      | 6        | CTS pin for Data UART flow control                     |
| DATA_UART_RTS_PIN       | O    | 12      | 7        | RTS pin for Data UART flow control                     |
| DATA_DTR_PIN            | O    | 14      | 8        | DTR pin for Data UART control                          |
| DATA_DSR_PIN            | I    | 15      | 9        | DSR pin for Data UART control                          |
| STATUS_PHYLINK_PIN      | O    | 16      | 10       | Output High when the PHY link is established           |
| STATUS_TCPCONNECT_PIN   | O    | 17      | 11       | Output High when TCP connection is active              |
| UART_IF_SEL_PIN         | I    | 18      | 12       | UART Interface select Input High : RS485/422, Low or Floating : RS232 |
| HW_TRIG_PIN             | I    | 20      | 14       | When this pin is Low during a device reset, it enters AT Command Mode |
| BOOT_MODE_PIN           | I    | 21      | 15       | When this pin is Low during a device reset, it enters Boot Mode        |
| FAC_RSTn_PIN            | I    | 40      | 18       | Holding Low for more than 5 seconds triggers a factory reset           |  

<BR>
<a name="W232N"></a>

# W232N  

The **W232N** is an industrial module from WIZnet that applies the W55RP20-S2E firmware. For more detailed information, please refer to the documentation for this product.

| Image                                                        | Name                                                      | Etc                                                          |
| ------------------------------------------------------------ | --------------------------------------------------------- | ------------------------------------------------------------ |
| <image src= "https://docs.wiznet.io/img/products/w232n/W232_Rail_mount.png" width="200px" height="150px"> | [**W232N**](https://docs.wiznet.io/Product/S2E-Module/Industrial/W232N-datasheet-kr)           | [W232N Document](https://docs.wiznet.io/Product/S2E-Module/Industrial/Config-tool-Guide-kr) |


<BR>

> ※ If the board pauses when rebooting using W55RP20-EVB-Pico, patch it as follows.
> ```sh
> git apply ./patches/0001_pico_sdk_clocks.patch
> ```


<!--
Link
-->

[link-getting_started_with_raspberry_pi_pico]: https://datasheets.raspberrypi.org/pico/getting-started-with-pico.pdf
[link-rp2040]: https://www.raspberrypi.org/products/rp2040/
[link-w5100s]: https://docs.wiznet.io/Product/iEthernet/W5100S/overview
[link-wiz500sr-rp]: https://docs.wiznet.io/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/overview
[link-wiz505sr-rp]: https://docs.wiznet.io/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/overview
[link-wiz510sr-rp]: https://docs.wiznet.io/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/overview
[link-wiz500sr-rp_main]: https://github.com/Wiznet/W5XXSR-RP-C/blob/main/static/images/getting_started/wiz500sr-rp_main.png
[link-wiz505sr-rp_main]: https://github.com/Wiznet/W5XXSR-RP-C/blob/main/static/images/getting_started/wiz505sr-rp_main.png
[link-wiz510sr-rp_main]: https://github.com/Wiznet/W5XXSR-RP-C/blob/main/static/images/getting_started/wiz510sr-rp_main.png
