---
id: download
title: Download
date: 2020-04-13
---

## Download Firmware

### Binary Images

**WIZ550web Firmware Binary (Direct download)**  
**H/W Rev 1.1/1.2 & bin 2.0.0**  

<a href="/img/products/wiz550web/wiz550web_firmware_bin_v2.0.0.zip" target="_blank">WIZ550web H/W Rev1.1/1.2 & F/W bin v2.0.0 (zip)</a> (Apr. 2016)  


### Source code (with web pages)

**WIZ550web GitHub Repository

Rev1.1/1.2 (Link)** 🌎https://github.com/Wiznet/WIZ550web

**WIZ550web Latest Firmware Source code (Direct download)**  
  
(Sep. 2016) 

-----

## Download Configuration Tool

### Program (Java based)

**WIZnet Configuration Tool (Direct download)**

<a href="/img/products/wiz550web/wiznet_configuration_tool_ver1.02.zip" target="_blank">WIZnet Configuration tool v1.02 (zip)</a>

-----

## Download EEPROM ERASE CODE

 **WIZ550web H/W Rev1.1/1.2 EEPROM Memory ERASE CODE**

<a href="/img/products/wiz550web/wiz550web_eeprom_erase_hex_file.zip" target="_blank">WIZ550web H/W Rev1.1/1.2 EEPROM ERASE FILE(HEX)</a>

-----

## How to program WIZ550web code flash memory


#### 1\. WIZ550web enter the ISP mode

Press the 'Boot' push button switch on baseboard (or BOOT pin) until
turn on the board after reset or power supply

#### 2\. Run the 'Flash Loader Demonstrator' Program

Refer to 🌎[Flash Loader Demonstrator](http://www.st.com/web/en/catalog/tools/FM147/CL1794/SC961/SS1533/PF257525?s_searchtype=keyword)

#### 3\. Flash program and Run the new application firmware

**Please make sure a start address
setting when you download a firmware into target.**

1.  You must download a bootloader from **0x8000000** at least once.
2.  You must use **0x8007000** for an application firmware.


#### 4\. How to WIZ550web Firmware

  - Check to below Picture

![](/img/products/wiz550web/wiz550web_des.png)

  - Access Boot mode(ISP)

![](/img/products/wiz550web/wiz550web_ispmode.png)

  - Operation Normal mode

![](/img/products/wiz550web/wiz550web_normalmode.png) 

#### Flash Loader Demo Picture

 
  * Main page


![](/img/products/wiz550web/wiz550web_fw_main.png)


  * Boot Upload


![](/img/products/wiz550web/wiz550web_fw_boot.png)


  * App Upload


![](/img/products/wiz550web/wiz550web_fw_app.png)


  * All (boot + app) Upload


![](/img/products/wiz550web/wiz550web_fw_all.png)
