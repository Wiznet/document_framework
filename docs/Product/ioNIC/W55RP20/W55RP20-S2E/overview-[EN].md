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

  - Easy to add Ethernet networking function through UART interface
        of any device / MCU
    - Support **RS-232C** and **RS-422/485** if an external circuit is configured.
    - Configurable via Ethernet(Web config, WIZnet Configuration tool) and AT command.
  - Support multiple protocols
    - SSL TCP client
    - MQTT client
    - MQTTS client    
  - Support protocol conversion between modbus RTU/ASCII and modbus tcp 
  - Support serial data packing
  - Support TCP connection password
  - Unique **MAC Address** (WIZnet OUI)

## Hardware Design Guide & References

### Pin Assignment
<!-- 
| Pin Number |    Signal  | Description                                                  |
| ---------- | ---------  | ------------------------------------------------------------ |
| 1          |     TXN    |   10/100M MDI Transceiver Differential Signal (N signal)     |
| 2          |     TXP    |   10/100M MDI Transceiver Differential Signal (P signal)     |
| 3          |     AVDD   |  Analog 3.3V power                                           |
| 4          |     RXN    |   10/100M MDI Receiver Differential Signal (N signal)        |
| 5          |     RXP    |   10/100M MDI Receiver Differential Signal (P signal)        |
| 6          |     AVDD   |  Analog 3.3V power                                           |
| 7          |    EXRES1  | External Resistor pin Connect a resistor of 12.4KΩ to the AGND.           |
| 8          |     AVDD   | UART1 RX                                                     |
| 9          |  UART1_TX  | UART1 CTS                                                    |
| 10         |  UART1_RX  | UART1 DSR                                                    |
| 11         |  UART1_CTS | System Ground                                                |
| 12         |  UART1_RTS | Working LED Signal <br />When Module working well Switch Togg|
| 13         |   IOVDD    | System Ground                                                |
| 14         |    DTR     | UART1 TX                                                     |
| 15         |    DSR     | UART1 RTS                                                    |
| 16         | LINK_STATUS| UART1 DTR                                                    |
| 17         | TCP_STATUS | System Ground                                                |
| 18         |  RESERVED  | UART1 RX                                                     |
| 19         |  RESERVED  | UART1 CTS                                                    |
| 20         |   AT_MODE  | UART1 DSR                                                    |
| 21         |  BOOT_MODE | System Ground                                                |
| 22         |  TESTEN    | Working LED Signal <br />When Module working well Switch Togg|
| 23         |    XIN     | System Ground                                                |
| 24         |    XOUT    | UART1 TX                                                     |
| 25         |   IOVDD    | UART1 RTS                                                    |
| 26         |    DVDD    | UART1 DTR                                                    |
| 27         |    SWCLK   | System Ground                                                |
| 28         |    SWD     | UART1 RX                                                     |
| 29         |    RUN     | UART1 CTS                                                    |
| 30         |  RESERVED  | UART1 DSR                                                    |
| 31         |    AVDD    | System Ground                                                |
| 32         |    VBG     | Working LED Signal <br />When Module working well Switch Togg|
| 33         |    TOCAP   | System Ground                                                |
| 34         |    AVDD    | UART1 TX                                                     |
| 35         |    1V2O    | UART1 RTS                                                    |
| 36         |   SPDLED   | UART1 DTR                                                    |
| 37         |   LINKLED  | System Ground                                                |
| 38         |   DUPLED   | UART1 RX                                                     |
| 39         |   ACTLED   | UART1 CTS                                                    |
| 40         | FACT_RESET | UART1 DSR                                                    |
| 41         | RUN_STATUS | System Ground                                                |
| 42         |    VDD     | Working LED Signal <br />When Module working well Switch Togg|
| 43         |    IOVDD   | System Ground                                                |
| 44         |    XI      | UART1 TX                                                     |
| 45         |    XO      | UART1 RTS                                                    |
| 46         |  RESERVED  | UART1 DTR                                                    |
| 47         |  RESERVED  | System Ground                                                |
| 48         |  RESERVED  | UART1 RX                                                     |
| 49         |  RESERVED  | UART1 CTS                                                    |
| 50         |   PMODE2   | UART1 DSR                                                    |
| 51         |   PMODE1   | System Ground                                                |
| 52         |   PMODE0   | Working LED Signal <br />When Module working well Switch Togg|
| 53         |   IOVDD    | System Ground                                                |
| 54         | ADC_VOUT   | UART1 TX                                                     |
| 55         | VREG_VIN   | UART1 RTS                                                    |
| 56         | VREG_VOUT  | UART1 DTR                                                    |
| 57         |   USB_DM   | System Ground                                                |
| 58         |   USB_DP   | UART1 RX                                                     |
| 59         | USB_VDDIO  | UART1 CTS                                                    |
| 60         |    IOVDD   | UART1 DSR                                                    |
| 61         |    DVDD    | System Ground                                                |
| 62         |     VDD    | Working LED Signal <br />When Module working well Switch Togg|
| 63         |     BOOT   | System Ground                                                |
| 64         |   IOVDD    | UART1 TX                                                     |
| 65         |  UART0_TX  | UART1 RTS                                                    |
| 66         |  UART0_RX  | UART1 DTR                                                    |
| 67         |  RESERVED  | System Ground                                                |
| 68         |  RESERVED  | UART1 RX                                                     |
-->

<img src="/img/products/w55rp20-evb-pico/w55rp20-s2e-pinmap.png" width="600" />

<table>
  <thead>
    <tr>
      <th>Pin Number</th>
      <th>Signal</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <!-- Pin 1 -->
    <tr>
      <td>1</td>
      <td>TXN</td>
      <td>TXP/TXN differential signal pair<br>The differential data is transmitted to the media on the TXP/TXN signal pair.</td>
    </tr>
    <!-- Pin 2 -->
    <tr>
      <td>2</td>
      <td>TXP</td>
      <td>TXP/TXN differential signal pair</td>
    </tr>
    <!-- Pin 3 -->
    <tr>
      <td>3</td>
      <td>AVDD</td>
      <td>TOE Analog 3.3V power</td>
    </tr>
    <!-- Pin 4 -->
    <tr>
      <td>4</td>
      <td>RXN</td>
      <td>RXP/RXN differential signal pair<br>The differential data from the media is received on the RXP/RXN signal pair.</td>
    </tr>
    <!-- Pin 5 -->
    <tr>
      <td>5</td>
      <td>RXP</td>
      <td>RXP/RXN differential signal pair</td>
    </tr>
    <!-- Pin 6 -->
    <tr>
      <td>6</td>
      <td>AVDD</td>
      <td>TOE Analog 3.3V power</td>
    </tr>
    <!-- Pin 7 -->
    <tr>
      <td>7</td>
      <td>EXRES1</td>
      <td>External Resistor pin<br>Connect a resistor of 12.4KΩ to the AGND.<br>(Refer to the “Reference schematic”)</td>
    </tr>
    <!-- Pin 8 -->
    <tr>
      <td>8</td>
      <td>AVDD</td>
      <td>TOE Analog 3.3V power</td>
    </tr>
    <!-- Pin 9 -->
    <tr>
      <td>9</td>
      <td>UART1_TX</td>
      <td>Serial data TX</td>
    </tr>
    <!-- Pin 10 -->
    <tr>
      <td>10</td>
      <td>UART1_RX</td>
      <td>Serial data RX</td>
    </tr>
    <!-- Pin 11 -->
    <tr>
      <td>11</td>
      <td>UART1_CTS</td>
      <td>Clear To Send (RX)<br>Associated with the RTS of the connected device and is used to transmit data when the RTS sent from that pin is low.</td>
    </tr>
    <!-- Pin 12 -->
    <tr>
      <td>12</td>
      <td>UART1_RTS</td>
      <td>Request To Send<br>Connects with the CTS of the connected equipment and sends a low signal when the W55RP20-S2E is in a state where it can receive data.</td>
    </tr>
    <!-- Pin 13 -->
    <tr>
      <td>13</td>
      <td>IOVDD</td>
      <td>Digital IO Supply<br>Power supply for digital GPIOs, nominal voltage 3.3V</td>
    </tr>
    <!-- Pin 14 -->
    <tr>
      <td>14</td>
      <td>DTR</td>
      <td>Data Terminal Ready (TX)<br>Connected to the device's DSR pin to show that it is ready to communicate.</td>
    </tr>
    <!-- Pin 15 -->
    <tr>
      <td>15</td>
      <td>DSR</td>
      <td>Data Set Ready (RX)<br>Connected to the device's DTR pin to indicate that it is ready for communication.</td>
    </tr>
    <!-- Pin 16 -->
    <tr>
      <td>16</td>
      <td>LINK_STATUS</td>
      <td>Link Status signal<br>High : Link<br>Low : UnLink</td>
    </tr>
    <!-- Pin 17 -->
    <tr>
      <td>17</td>
      <td>TCP_STATUS</td>
      <td>TCP Connection<br>High : Connect<br>Low : Disconnect</td>
    </tr>
    <!-- Pin 18 -->
    <tr>
      <td>18</td>
      <td>RESERVED</td>
      <td>RESERVED PIN</td>
    </tr>
    <!-- Pin 19 -->
    <tr>
      <td>19</td>
      <td>RESERVED</td>
      <td>RESERVED PIN</td>
    </tr>
    <!-- Pin 20 -->
    <tr>
      <td>20</td>
      <td>AT_MODE</td>
      <td>AT Command mode pin<br>High : Gateway Mode (default)<br>Low : AT Command Mode<br>Changes will be reflected after reset</td>
    </tr>
    <!-- Pin 21 -->
    <tr>
      <td>21</td>
      <td>BOOT_MODE</td>
      <td>Boot Mode pin<br>Low : Enter W55RP20-S2E BOOT mode<br>Changes will be reflected after reset</td>
    </tr>
    <!-- Pin 22 -->
    <tr>
      <td>22</td>
      <td>TESTEN</td>
      <td>Factory test mode pin<br>Tie to GND.</td>
    </tr>
    <!-- Pin 23 -->
    <tr>
      <td>23</td>
      <td>XIN</td>
      <td>Crystal input/output<br>Connect a crystal to RP2040’s crystal oscillator. XIN can also be used as a single-ended CMOS clock input, with XOUT disconnected. The USB bootloader requires a 12MHz crystal or 12MHz clock input.</td>
    </tr>
    <!-- Pin 24 -->
    <tr>
      <td>24</td>
      <td>XOUT</td>
      <td>Crystal input/output</td>
    </tr>
    <!-- Pin 25 -->
    <tr>
      <td>25</td>
      <td>IOVDD</td>
      <td>Digital IO Supply<br>Power supply for digital GPIOs, nominal voltage 3.3V</td>
    </tr>
    <!-- Pin 26 -->
    <tr>
      <td>26</td>
      <td>DVDD</td>
      <td>Digital core power supply<br>Nominal voltage 1.1V. Can be connected to VREG_VOUT, or to some other board-level power supply.</td>
    </tr>
    <!-- Pin 27 -->
    <tr>
      <td>27</td>
      <td>SWCLK</td>
      <td>Debug clock/data<br>Access to the internal Serial Wire Debug multi-drop bus. Provides debug access to both processors, and can be used to download code.</td>
    </tr>
    <!-- Pin 28 -->
    <tr>
      <td>28</td>
      <td>SWD</td>
      <td>Debug clock/data</td>
    </tr>
    <!-- Pin 29 -->
    <tr>
      <td>29</td>
      <td>RUN</td>
      <td>Global asynchronous reset pin<br>Reset when driven low, run when driven high. If no external reset is required, this pin can be tied directly to IOVDD.</td>
    </tr>
    <!-- Pin 30 -->
    <tr>
      <td>30</td>
      <td>RESERVED</td>
      <td>RESERVED PIN</td>
    </tr>
    <!-- Pin 31 -->
    <tr>
      <td>31</td>
      <td>AVDD</td>
      <td>TOE Analog 3.3V power</td>
    </tr>
    <!-- Pin 32 -->
    <tr>
      <td>32</td>
      <td>VBG</td>
      <td>Output of band gap</td>
    </tr>
    <!-- Pin 33 -->
    <tr>
      <td>33</td>
      <td>TOCAP</td>
      <td>External Reference Capacitor<br>This pin must be connected to a 4.7uF capacitor. The trace length to capacitor should be short to stabilize the internal signals.</td>
    </tr>
    <!-- Pin 34 -->
    <tr>
      <td>34</td>
      <td>AVDD</td>
      <td>TOE Analog 3.3V power</td>
    </tr>
    <!-- Pin 35 -->
    <tr>
      <td>35</td>
      <td>1V2O</td>
      <td>1.2V regulator output voltage<br>Connect 10nF capacitor.</td>
    </tr>
    <!-- Pin 36 -->
    <tr>
      <td>36</td>
      <td>SPDLED</td>
      <td>Speed LED<br>This shows the Speed status of the connected link.<br>Low: 100Mbps<br>High: 10Mbps</td>
    </tr>
    <!-- Pin 37 -->
    <tr>
      <td>37</td>
      <td>LINKLED</td>
      <td>Link LED<br>This shows the Link status.<br>Low: Link is established<br>High: Link is not established</td>
    </tr>
    <!-- Pin 38 -->
    <tr>
      <td>38</td>
      <td>DUPLED</td>
      <td>Duplex LED<br>This shows the Duplex status for the connected link.<br>Low: Full-duplex mode<br>High: Half-duplex mode</td>
    </tr>
    <!-- Pin 39 -->
    <tr>
      <td>39</td>
      <td>ACTLED</td>
      <td>Active LED<br>This shows that there is Carrier sense (CRS) from the active Physical Medium Sub-layer (PMD) during TX or RX activity.<br>Low: Carrier sense from the active PMD<br>High: No carrier sense</td>
    </tr>
    <!-- Pin 40 -->
    <tr>
      <td>40</td>
      <td>FACT_RESET</td>
      <td>Factory Reset Pin<br>Drive this pin to Low for at least 5.0s then W55RP20-S2E will be reset to factory settings</td>
    </tr>
    <!-- Pin 41 -->
    <tr>
      <td>41</td>
      <td>RUN_STATUS</td>
      <td>Switch Toggle every 1.0s when W55RP20-S2E application is working.</td>
    </tr>
    <!-- Pin 42 -->
    <tr>
      <td>42</td>
      <td>VDD</td>
      <td>TOE Digital 3.3V Power</td>
    </tr>
    <!-- Pin 43 -->
    <tr>
      <td>43</td>
      <td>IOVDD</td>
      <td>Digital IO Supply<br>Power supply for digital GPIOs, nominal voltage 3.3V</td>
    </tr>
    <!-- Pin 44 -->
    <tr>
      <td>44</td>
      <td>XI</td>
      <td>25MHz crystal input/output<br>A 25MHz crystal and oscillator is used to connect these pins.</td>
    </tr>
    <!-- Pin 45 -->
    <tr>
      <td>45</td>
      <td>XO</td>
      <td>25MHz crystal input/output<br>A 25MHz crystal and oscillator is used to connect these pins.</td>
    </tr>
    <!-- Pin 46 -->
    <tr>
      <td>46</td>
      <td>RESERVED</td>
      <td>RESERVED PIN</td>
    </tr>
    <!-- Pin 47 -->
    <tr>
      <td>47</td>
      <td>RESERVED</td>
      <td>RESERVED PIN</td>
    </tr>
    <!-- Pin 48 -->
    <tr>
      <td>48</td>
      <td>RESERVED</td>
      <td>RESERVED PIN</td>
    </tr>
    <!-- Pin 49 -->
    <tr>
      <td>49</td>
      <td>RESERVED</td>
      <td>RESERVED PIN</td>
    </tr>
    <!-- Pin 50 -->
    <tr>
      <td>50</td>
      <td>PMODE2</td>
      <td>PHY Operation mode select pins<br>These pins determine the network mode. Refer to the below table for details.<br>Default: Pull-up (77kΩ)</td>
    </tr>
    <!-- Pin 51 -->
    <tr>
      <td>51</td>
      <td>PMODE1</td>
      <td>PHY Operation mode select pin</td>
    </tr>
    <!-- Pin 52 -->
    <tr>
      <td>52</td>
      <td>PMODE0</td>
      <td>PHY Operation mode select pin</td>
    </tr>
    <!-- Pin 53 -->
    <tr>
      <td>53</td>
      <td>IOVDD</td>
      <td>Digital IO Supply<br>Power supply for digital GPIOs, nominal voltage 3.3V.</td>
    </tr>
    <!-- Pin 54 -->
    <tr>
      <td>54</td>
      <td>ADC_AVDD</td>
      <td>ADC supply<br>Power supply for analogue-to-digital converter, nominal voltage 3.3V.</td>
    </tr>
    <!-- Pin 55 -->
    <tr>
      <td>55</td>
      <td>VREG_VIN</td>
      <td>Voltage regulator input supply<br>Power input for the internal core voltage regulator, nominal voltage 1.8V to 3.3V.</td>
    </tr>
    <!-- Pin 56 -->
    <tr>
      <td>56</td>
      <td>VREG_VOUT</td>
      <td>Voltage regulator output<br>Power output for the internal core voltage regulator, nominal voltage 1.1V, 100mA max current.</td>
    </tr>
    <!-- Pin 57 -->
    <tr>
      <td>57</td>
      <td>USB_DM</td>
      <td>USB controller, supporting Full Speed device and Full/Low Speed host. A 27Ω series termination resistor is required on each pin, but bus pull-ups and pull-downs are provided internally.</td>
    </tr>
    <!-- Pin 58 -->
    <tr>
      <td>58</td>
      <td>USB_DP</td>
      <td>USB controller</td>
    </tr>
    <!-- Pin 59 -->
    <tr>
      <td>59</td>
      <td>USB_VDD</td>
      <td>USB supply<br>Power supply for internal USB Full Speed PHY, nominal voltage 3.3V</td>
    </tr>
    <!-- Pin 60 -->
    <tr>
      <td>60</td>
      <td>IOVDD</td>
      <td>Digital IO Supply<br>Power supply for digital GPIOs, nominal voltage 3.3V</td>
    </tr>
    <!-- Pin 61 -->
    <tr>
      <td>61</td>
      <td>DVDD</td>
      <td>Digital core power supply, nominal voltage 1.1V. Can be connected to VREG_VOUT, or to some other board-level power supply</td>
    </tr>
    <!-- Pin 62 -->
    <tr>
      <td>62</td>
      <td>VDD</td>
      <td>Power supply of the Flash Memory</td>
    </tr>
    <!-- Pin 63 -->
    <tr>
      <td>63</td>
      <td>BOOT</td>
      <td>BOOT Pin<br>When power is applied and during reset, if the BOOT pin is low, the device enters BOOTSEL mode.</td>
    </tr>
    <!-- Pin 64 -->
    <tr>
      <td>64</td>
      <td>IOVDD</td>
      <td>Digital IO Supply<br>Power supply for digital GPIOs, nominal voltage 3.3V</td>
    </tr>
    <!-- Pin 65 -->
    <tr>
      <td>65</td>
      <td>UART0_RX</td>
      <td>Debug RX</td>
    </tr>
    <!-- Pin 66 -->
    <tr>
      <td>66</td>
      <td>UART0_TX</td>
      <td>Debug TX</td>
    </tr>
    <!-- Pin 67 -->
    <tr>
      <td>67</td>
      <td>RESERVED</td>
      <td>RESERVED PIN</td>
    </tr>
    <!-- Pin 68 -->
    <tr>
      <td>68</td>
      <td>RESERVED</td>
      <td>RESERVED PIN</td>
    </tr>
    <!-- Pin 69 -->
    <tr>
      <td>69</td>
      <td>GND</td>
      <td>Ground</td>
    </tr>
  </tbody>
</table>



## Manuals
- [How to use Config-tool](./../../../S2E-Module/Industrial/Config-tool-Guide-en.md)
- [How to use Web config](./../../../S2E-Module/Industrial/Web_Config_Guide_EN.md)
- [How to use AT CMD](./../../../S2E-Module/Industrial/command-manual-en.md)
- [How to connect MQTT](./../../../S2E-Module/Industrial/mqtt-connection-guide-en.md)
- [How to connet SSL](./../../../S2E-Module/Industrial/ssl-connection-guide-en.md)
- [How to connet Modbus](./../../../S2E-Module/Industrial/modbus-connection-guide-en.md)
- [How to update FW](./../../../S2E-Module/Industrial/firmware-update-guide-en.md)
- [How to do factory reset](./../../../S2E-Module/Industrial/factory-rst-guide-en.md)

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
