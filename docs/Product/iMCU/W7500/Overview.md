---
id: overview
title: Overview
date: 2020-04-03
---



# W7500
![Figure 1 W7500 Chip](/img/products/w7500/w7500_chip.png)

----

The IOP4IoT W7500 chip is the one-chip solution which integrates an ARM Cortex-M0, 128KB Flash and hardwired TCP/IP core for various embedded application platform, especially internet of things.
The TCP/IP core is a market-proven hardwired TCP/IP stack with an integrated Ethernet MAC. The Hardwired TCP/IP stack supports the TCP, UDP, IPv4, ICMP, ARP, IGMP and PPPoE which has been used in various applications for more than 15 years. W7500 suits users who need Internet connectivity best.

## Features
* ARM Cortex-M0
  * 48MHz maximum frequency
* Hardwired TCP/IP Core
    * 8 Sockets
    * SRAM for socket: 32 KB
    * MII (Medium-Independent Interface)
* Memories
  * Flash: 128 KB
  * SRAM: 16 KB
  * ROM for boot code: 6 KB
* Clock, reset and supply management
	* POR (Power-On Reset)
	* Internal Voltage Regulator : 3.3V to 1.5V
	* 8-to-24MHz external crystal oscillator
	* Internal 8MHz RC Oscillator
	* PLL for CPU clock
* ADC : 12bit, 8ch, 1Mbps
* DMA
    * 6-channel DMA controller
    * Peripheral supported: UARTs, SPIs
* GPIO
    * 53 I/Os (16 IO x 3ea, 5 IO x 1ea)
* Debug mode
    * Serial Wire Debug (SWD)
* Timer/PWM
	* 1 Watchdog (32-bit down-counter)
	* 4 Timers (32-bit or 16-bit down-counter)
	* 8 PWMs (32-bit counter/timers with programmable 6-bit prescaler)
* Communication Interfaces
    * 3 UART (2 UARTs with FIFO and Flow Control, 1 simple UART)
    * 2 SPI
    * 2 I2C (Master/Slave, Fast-mode (400 kbps))
* Crypto
    * 1 RNG (Random Number Generator): 32-bit random number
* Package
    * 64 TQFP (7x7 mm)


## Details
- [Pin Assignment](./Pin-Assignment.md)
- [System and Memory](./System-and-Memory.md)
- [Interrupt and Events](./Interrupt-and-Event.md)
- [Power supply](./Power-Supply.md)
- [Booting Sequence](./Booting-Sequence.md)
- [Electrical Characteristics](./Electrical-Characteristics.md)
- [W7500 Ref. Schematic](./W7500-Ref.Schematic.md)
