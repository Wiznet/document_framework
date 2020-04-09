---
id: how_to_upgrade_firmware
title: How to Upgrade Firmware
date: 2020-03-
---


## Content
## How to Upgrade Firmware


### Serial Line-APP+DCT

1. Download WIZSmartScript from WIZnet homepage and install it
2. Run WizFi250 in Boot Mode. (refer to boot pin in the PIN Description)
3. Run WIZSmartScript and fill in options(RED) as below. (COM Port should match yours)
And Click the 'Start Script' buton (Yellow).


4. Check the log that shows up as below. After 4 seconds, download will be started. First, write the DCT, then write the WizFi250 application firmware. If it is a success step1 message and step2 message. ( execute “02-A. Flash Write(app) if step2 fails )
☞ If you want to change firmware binary file, just copy it to 'AppFWFile' folder.
2013/09/04 13:16 · jeonggw

### Wi-Fi OTA(Over the Air) - APP

#### Start OTA mode using AT+FOTA Command
   1. Turn on OTA mode by entering the command as below.
> 

     AT+FOTA
     [OK]
   
>

#### Start OTA mode using WEB Server
   1. Run WizFi250 in command mode, and operate the WizFi250 as below.
   >
   
      AT+WLEAVE
      [OK]

     AT+FWEBS=1,A
     [OK]

     AT+WSET=1,(SSID)
     [OK]

     AT+WSEC=1,(EncryptionType),(PreSharedKey)
    [OK]

     AT+WNET=0,192.168.0.2,255.255.255.0,192.168.0.2
     [OK]

     AT+WJOIN
     [OK]

    [Link-Up Event]
      IP Addr    : 192.168.0.1
      Gateway    : 192.168.0.1
    [OK]
    
  >
2. Connect your PC Wi-Fi to the Wizfi250, open the web browser and enter the IP address of WizFi250 which you can find by using 'AT+WSTAT'
.

3. Click the 'Over the Air' icon


4. Click the 'Change to OTA mode' button, then WizFi250 will enter OTA mode.

#### Start OTA mode using FUNCTION pin
1. If entered the OTA Mode using FUNCTION pin, you will see messages as below.(Refer to FUNCTION Pin Usage)

#### Upload newest firmware in OTA mode
1. Now you can connect to the WizFi250 OTA Access Point from your PC. Connect your PC WLAN to the AP which the name WIZFI_OTA_(MAC-Address).


2. Open the WEB browser and go to 'wizfi250.wiznet.com'. (If the browser failed to find the page, disconnect the other network connections and try again). When successful, it should look like below.
3. Click the 'Delete App' button, and wait until internal flash memory is erased.
(Before writing firmware, internal flash must be erased. Otherwise it does not work properly.).


4. After erase, click the second button, ‘Choose File’, and select the firmware file you want to upload.
5. Click the second button, 'Select file', and choose the FW file you want to upgrade. And finally, click the 'Upgrade' button to start upgrading. **( You have to use APP.bin file. This file is in WIZSmartScript\AppFWFile\Version\APP.bin )**


6. Wait for a second until upgrade is finished and check if it shows a complete message as below.


7. Check if WizFi250 is upgraded and works well.



### Firmware Recovery

This section explains how to recover firmware when a critical problem occurred in WizFi250 application firmware.

1. Input low signal to BOOT pin and FUNCTION pin.
2. Reboot WizFi250
3. If WizFi250 starts the firmware procedure you will see a serial message as below. If this procedure succeeds, WizFi250 will be reset to factory default firmware.


4. If you want to upload newest firmware to WizFi250, you have to use OTA mode.
For detailed information for starting OTA mode, refer to Wi-Fi OTA.
5. Afterwards, you can upload newest firmware using web browser. For detailed information for uploading newest firmware in web page, refer to Wi-Fi OTA - Upload newest firmware in OTA mode.
