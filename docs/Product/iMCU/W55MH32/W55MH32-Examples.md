---
id: W55MH32_examples
title: W55MH32 Reference Code
date: 2025-07-16
---


# W55MH32 Reference Codes
The W55MH32 provides the networking, peripheral and security encryption Example.

The W55MH32 Standard Peripherals library provides a rich set of examples covering the main features of each peripheral. All the examples are based on [W55MH32L-EVB](./W55MH32L-evb) and [W55MH32Q-EVB](./W55MH32Q-evb). Only source files are provided for each example and the user can tailor the provided project template to run the selected example with the user's preferred tool chain. 

## Directory Structure (Peripherals & Security encryptions)

- ### Peripherals

  - [ADC](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/ADC) 
  - [CAN](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/CAN)
  - [DAC](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/DAC)
  - [FLASH](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/FLASH)
  - [GPIO](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/GPIO)
  - [IAP](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/IAP)
  - [I2C](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/IIC)
  - [I2S](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/IIS)
  - [PWR](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/PWR)
  - [SDIO](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/SDIO/SDIO_SDCardFatfs)
  - [SPI](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/SPI) 
  - [USART](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/USART)
  - [USB](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/USB)

- ### Timer

  - [IWDG - Independent Watchdog](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/IWDG/IWDG_Reset)
  - [MCO - Microcontroller Clock Output](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/MCO/MCO_PllDiv)
  - [RCC - Reset and Clock Control](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/RCC)
  - [RTC - Real-time Clock](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/RTC)
  - [TIM](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/TIM)
  - [WWDG - Window Watchdog](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WWDG)

- ### System

  - [RT-Thread](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/RTTHREAD/Nano)

- ### Security and Encryptions

  - [BKP - Backup domain](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/BKP) 
  - [CRTPT -  DES, AES and SM series encryptions method with SHA hash method](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/CRYPT)
  - [CRC - Cyclic Redundancy Check](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/CRC/CRC_DifferentCrcMode)
  - [MPU - Memory Protection Unit](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/MPU/MPU_Test)
  - [OTP - One-Time Programmable memory](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/OTP/OTP_WriteRead)
  - [TRNG - True Random Number Generator](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/TRNG)



## Directory Structure (WZTOE - WIZnet TOE examples)

  - ### General

      - [Network Install](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/1.Network%20Install)
      - [DHCP](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/2.DHCP)
      - [TCP Client](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/3.TCP_Client)
          - [TCP Client Multi-socket](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/24.TCP_Client_Multi_Socket)
      - [TCP Server](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/4.TCP_Server)
          - [TCP Server Multi-socket](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/25.TCP_Server_Multi_Socket)
      - [UDP](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/5.UDP)
          - [UDP Multicast](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/6.UDP_Multicast)
      - [Ping](http://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/16.PING)
      - [ARP](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/17.ARP)
      - [PHY mode Configuration](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/21.PHY_Mode_Config)

  - ### Other Network protocols

      - [DNS](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/7.DNS)
      - [HTTP Client](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/8.HTTP_Client)
      - [HTTP Server](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/9.HTTP_Server)
      - [SNTP](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/10.SNTP)
      - [SMTP](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/11.SMTP)
      - [NetBIOS](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/12.NetBIOS)
      - [UPnP](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/13.UPnP)
      - [TFTP](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/14.TFTP)
      - [SNMP](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/15.SNMP)
      - [FTP Server](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/18.FTP_Server)
      - [FTP Client](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/19.FTP_Client)

  - ### IOT platform / Cloud

      - [MQTT - Alicloud/ Aliyun](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/22.MQTT&Aliyun)
      - [MQTT - Onenet](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/23.MQTT&OneNET)

  - ### Others

      - [WOL](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/20.WOL)
      - [Configuration tools (Search and Configure)](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/26.Upper_Computer_Search_And_Config)
      - [Interrupt](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/27.interrupt)
      - [Ethernet Rate Test](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/28.Ethernet_Rate_Test)
      - [Modbus TCP Server](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/29.Modbus_TCP_Server)
      - [HTTP Server with NetBIOS](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/30.HTTP_Server&NetBIOS)
      - [All Function firmware](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/31.factory_firmware)

​    

## Download

**Library Gitee Repository**

Release Version

- [W55MH32 Gitee Latest Release Version](https://gitee.com/wiznet-hk/W55MH32_reference_code)


