---



id: w5100s-evb-pico-PoE



title: W5100S-EVB-Pico-PoE



date: 2024-03-21



keywords: [raspberry pi pico, rp2040 ethernet, pico ethernet, w5100s, PoE]



description: W5100S-EVB-Pico-PoE made for prototyping and testing Ethernet capabilities on Pico



---







## Overview


W5100S-EVB-Pico-PoE is a microcontroller evaluation board based on the Raspberry Pi RP2040 and fully hardwired TCP/IP controller W5100S – and basically works the same as Raspberry Pi Pico board but with additional Ethernet via W5100S. It can also use the WIZPoE-P1 (Isolation) module.


- Raspberry Pi Pico Clone
- Ethernet (W5100S Hardwired TCP/IP CHIP)


![w5100s-evb-pico-PoE](https://github.com/Wiznet/document_framework/blob/master//img/osh/PoE/WIZPoE-S1/w5100s-evb-pico-poe_img3(add%20poe).png)

<a target="_blank" href={require('/img/osh/surf5/surf5_R100_img.png').default}><img src={require('/img/osh/surf5/surf5_R100_img.png').default} alt="Surf5"/></a>


<a target="_blank" href={require('/img/osh/PoE/WIZPoE-S1/w5100s-evb-pico-poe_img3(add%20poe).png').default}><img src={require('/img/osh/PoE/WIZPoE-S1/w5100s-evb-pico-poe_img3(add%20poe).png').default} alt="w5100s-evb-pico-PoE"/></a>

You can get a detail infomation of our PoE [here](../PoE/PoE-Main.md).

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

