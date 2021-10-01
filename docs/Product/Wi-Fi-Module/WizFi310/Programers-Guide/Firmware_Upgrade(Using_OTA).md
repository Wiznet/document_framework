---
id: firmware_upgrade_using_ota
title: Firmware Upgrade(Using OTA)
date: 2020-03-
---

WIZnet supports &#60;WizFi310_OTA_Tool&#62; for uploading firmware. This
tool used TCP protocol with WizFi310 and it can be downloaded at
[WizFi310 Firmware(Using OTA)](../wizfi310_firmware_using_ota).

#### Step 1

Execute "WizFi310_Ota_Tool.exe" and select serial port and baud rate
of WizFi310. For your information, WizFi310 is set to 115200 for default
baudrate.

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/ota_1.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/ota_1.png").default} alt=""/></a>

#### Step 2

If it is done successfully after push &#60;Open&#62; button in Step 1, You can
choice SSID which WizFi310 will connect. Choice SSID and input key value
of AP and then push &#60;connect&#62; button, &#60;WizFi310 OTA Tool&#62; will enter
commands to WizFi310 in order to connect to AP.

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/ota_2.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/ota_2.png").default} alt=""/></a>

#### Step 3

If you push &#60;browse&#62; button, you can select binary file for uploading
via OTA.

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/ota_3.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/ota_3.png").default} alt=""/></a>

#### Step 4

Select IP Address of PC which &#60;WizFi310 OTA Tool&#62; is run and then
click &#60;Start OTA&#62; button.

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/ota_4.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/ota_4.png").default} alt=""/></a>

If it is done successfully, you can see message as below.

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/ota_5.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/ota_5.png").default} alt=""/></a>

If this tool is displayed error message as below, you have to check
WizFi310 or your binary whether it is right.
<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/ota_6.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/ota_6.png").default} alt=""/></a>
