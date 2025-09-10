---
id: download
title: Download
date: 2020-04-16
---

## Download Firmware

### Binary Images

#### WIZ550SR H/W V1.0 / F/W V1.0

  - **Full Binary (Boot + App), Uesing the Flash Loader Demonstrator**

  - **Full Binary (App Boot + App)**

<a href="/img/products/wiz550sr/wiz550sr_download/wiz550sr_160531.zip" target="_blank">Download (Boot + App)</a>  

  - **App Binary (App), Uesing the WIZnet Configuration Tool**

**App Binary (App)**  

<a href="/img/products/wiz550sr/wiz550sr_download/wiz550sr_app_160531.zip" target="_blank">Download (App)</a>  


### Source code (with web pages)

#### WIZ550SR H/W V1.0 / F/W V1.0

**WIZ550SR GitHub Repository V1.0 (Link)**

https://github.com/Wiznet/WIZ550SR

-----

## Download Configuration Tool

WIZnet Configuration Tool made Java base. so runs on any OS that JRE be installed.
Install JAVA Runtime Environment

- http://www.java.com/
- Click on the **Free Java Download** button.
- Install the downloaded installation file.


![WIZnet Configuration Tool Version 1.0.3](/img/products/wiz550sr/wiz550sr_download/configuration.png)

**WIZnet Configuration Tool Version 1.0.3**  

<a href="/img/products/wiz550sr/wiz550sr_download/wiznet_configuration_tool_ver1.03.zip" target="_blank">Download (zip)</a>


-----

**Configuration Tool Firmware Upload Guide(TFTP)**  

<a href="/img/products/wiz550sr/wiz550s2e_fw_uploading_tftp_new.pdf" target="_blank">Configuration Tool Fw upload guide(TFTP)</a>

-----

## Download WIZ550SR EVB USB Driver

In order to use WIZ550SR is required for USB driver(Provided by the FTDI).  

**Virtual COM Port Drivers.**  
  
http://www.ftdichip.com/Drivers/VCP.htm

-----

## Download WIZ550SR Firmware Writing Tool

WIZ550SR used a MCU for STmicro.
Therefore, Write firmware must use the program provided by STmicro.


**STM32 Flash loader demonstrator**  
  
[Flash Loader Demonstrator](http://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/flasher-stm32.html)

-----

## WIZ VSP

![](/img/products/wiz750sr/usermanual/wiz_vsp.jpg) 


  - WIZ VSP (WIZnet Virtual Serial COM port) is the software for those users who want to use the existing application programs based on serial communication.
  - WIZnet Virtual Serial Port: It can be used to change the device that is connected to the PC through the existing serial interface to control by the remote Ethernet network.
  - **If you agree with the End User License Agreement for WIZVSP, you will be able to download the program and get a registration key.** When registering the product with license agreement, **the MAC address of the product in use and the Email address** of the contact person are required.

### Requirement

* The latest version supports up to Windows 10, and we recommend using **Windows 7 or higher**.

:::info

* Environments under Windows 7 support only the old version, if necessary, contact the technical support team.
  * [Developer Forum](https://maker.wiznet.io/forum)
  * Channel Talk: https://www.wiznet.io --> Click the button on bottom right
* **The current WIZVSP driver does not officially support the Windows 11 environment**, so operation cannot be guaranteed and technical support is difficult.
  * To use in the Windows 11 environment, you must manually enable the port using the 'Scan for hardware changes' menu in Device Manager.

:::

**Go to WIZVSP end user license agreement page:**  
**http://wizvsp.wiznet.io**

-----

## How to program WIZ550SR code flash memory

1. WIZ550SR enter the ISP mode

Press the 'Boot' push button switch on WIZ550SR EVB(or BOOT pin) until turn on the board after reset or power supply

2. Run the 'Flash Loader Demonstrator' Program

Refer to [Flash Loader Demonstrator](http://www.st.com/web/en/catalog/tools/FM147/CL1794/SC961/SS1533/PF257525?s_searchtype=keyword)

3. Flash program and Run the new application firmware

4. How to WIZ550web Firmware

-----