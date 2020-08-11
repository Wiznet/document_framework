---
id: wizfi250_firmware
title: WizFi250 Firmware
date: 2020-05-06
---

## Official Latest firmware release

| FW Version | Hardware | Date       | Download                                                                         | Description    |
| ---------- | -------- | ---------- | -------------------------------------------------------------------------------- | -------------- |
| 1.0.3.3    | Rev 1.0  | 2015-02-16 | [1.0.3.3](/img/products/wizfi250/wizfi250firmware/wizfi250_1.0.3.3.zip)/Application | latest release |

-----

## Firmware history/Beta firmware

| FW Version | Hardware | Date       | Download                                                                         | Description    |
| ---------- | -------- | ---------- | -------------------------------------------------------------------------------- | -------------- |
| 1.0.0.0    | Rev 1.0  | 2014-01-16 | [1.0.0.0](/img/products/wizfi250/wizfi250firmware/wizfi250_1.0.0.0.zip)/Application |                |
| 1.0.1.1    | Rev 1.0  | 2014-05-12 | [1.0.1.1](/img/products/wizfi250/wizfi250firmware/wizfi250_1.0.1.1.zip)/Application |                |
| 1.0.1.8    | Rev 1.0  | 2014-08-06 | [1.0.1.8](/img/products/wizfi250/wizfi250firmware/wizfi250_1.0.1.8.zip)/Application |                |
| 1.0.3.1    | Rev 1.0  | 2015-01-16 | [1.0.3.1](t/img/products/wizfi250/wizfi250firmware/wizfi250_1.0.3.1.zip)/Application |                |
| 1.0.3.3    | Rev 1.0  | 2015-02-16 | [1.0.3.3](/img/products/wizfi250/wizfi250firmware/wizfi250_1.0.3.3.zip)/Application |                |
| 1.0.4.2    | Rev 1.0  | 2015-07-01 | [1.0.4.2](/img/products/wizfi250/wizfi250firmware/wizfi250_1.0.4.2.zip)/Application |                |
| 1.0.4.9    | Rev 1.0  | 2015-12-04 | [1.0.4.9](/img/products/wizfi250/wizfi250firmware/wizfi250_1.0.4.9.zip)/Application | latest release |
| 1.0.5.2    | Rev 1.0  | 2016-06-30 | [1.0.5.2](/img/products/wizfi250/wizfi250firmware/wizfi250_1.0.5.2.zip)/Application | Beta version   |

## Update History

#### 1.0.0.0

  - Official release

#### v1.0.1.1

  - Added WiFi Direct(P2P) feature (limitations : WizFi250 can not
    operate as group owner.)
  - Added manual antenna settings and bgn mode setting
  - Fixed non-printable SSID problem
  - Fixed SSL TCP Server problem
  - Fixed < blank username/password> problem in Web
  - Fixed < adding Root CA problem> in AT+MCERT
  - Changed < Web server option> to < manual> by default (for
    potential memory leaks)
  - Improved Linkup/Linkdown event callback mechanism
  - Enabled user to stop the association retry with < ESC>
  - Added the following AT Commands :  
    `AT+WANT`  
    `AT+WBGN`  
    `AT+WP2P_START`  
    `AT+WP2P_STOP`  
    `AT+WP2P_PEERLIST`  
    `AT+WP2P_INVITE`  
    `AT+MCSTGPIO`  
    `AT+MCUSTOM`  
    `AT+FWEBSOPT`  
    `AT+SOPT1`
