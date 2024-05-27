---
id: surf5-s2e
title: How to use Surf 5 as S2E
date: 2024-05-27
keywords: [iMCU, ethernet, w7500]
description: How to use Surf 5 as S2E
---

## How to use Surf5 as S2E
This guide should be done after the user has read and worked through guides [How to install USB driver](./install-usb-driver.md) and [How to use ISP tool](./flashing-Surf5.md).

# 1. Download WIZ750SR-1xx FW
   Download [WIZ750SR-1xx FW](https://github.com/Wiznet/WIZ750SR/releases) last verson.
   You need WIZ750SR-1xxvxxx_incl_Boot.bin file that combined App and Boot.

# 2. Flashing Surf5
    Enter Boot mode for using ISP tool
    <img src="/img/osh/surf5/surf5_boot.png" width="300" /><br />
    Press and hold the Boot SW and apply power, or press and hold the BOOT SW while power is applied and press the RESET SW shortly.

    <img src="/img/osh/surf5/Driver_install.png" width="500" />
    Check The com port number of Surf5 in Device manager.<br />
    The com port number can be differnet depending on the PC you're connecting to.<br /><br />

    <img src="/img/osh/surf5/surf5_ISP.png" width="600" /><br />
    Select Serial port, set Baud Rate to 115200 and click __Open__.<br />
    If your Surf5 connect with ISP tool successfull, you can see __Serial Open Complete__ message on the left bottom of ISP tool.<br /><br />

    <img src="/img/osh/surf5/surf5_bin.png" width="600" /><br />
    After ISP tool is connected, press the Browse button to select the binary file(WIZ750SR-1xxvxxx_incl_Boot.bin).<br /><br />

    <img src="/img/osh/surf5/surf5_download.png" width="600" /><br />
    When you press the __Start all steps__ button, Surf5 will erase old data and download the binary file you selected.<br />
    When the download completes successfully, the Download complete popup appears.

# 3. Enter MAC Address
    <img src="/img/osh/surf5/mac.png" width="400" /><br />
    After flasing you can receive the message __INPUT FIRST MAC?__ through same port with ISP port,then you can type __MC00:08:DC:xx:xx:xx$0d$0a__ to enter your MAC.
    <img src="/img/osh/surf5/status.png" width="400" /><br />
    After Enter the MAC address, you can see the status message.


# 4. Set Surf5 PA00 pin to LOW
    <img src="/img/osh/surf5/check_link.png" width="400" /><br />
    In the WIZ750SR-1xx FW, the W7500 uses PA00 to read the linkup signal from the IP101GRI (PHY IC) to verify linkup.<br />
    So the WIZ750SR-1xx modules are connected to Surf5's PA00 with a link signal from the IP101GRI.<br />
    <img src="/img/osh/surf5/PA00.png" width="400" /><br />
    However, the Surf5 does not have a Link signal connected to the PA00, and the Link signal from the IP101GRI(PHY) is not connected to the connector. Therefore, You need to force the Surf5 into a linked-up state by connecting the PA00 to GND to drive the S2E FW.
    (This will be improved in next revision by connecting the link signal to a connector)
    

# 5. Search Surf5
    <img src="/img/osh/surf5/config.png" width="600" /><br />
    Search Surf5 using Wizconfig Tool.
    It is normal for Surf5 to be detected as WIZ750SR-1xx.

    <img src="/img/osh/surf5/dtr.png" width="600" /><br />
    If you don't use DTR,DSR and only use UART TX and RX, please set the Status pin as shown in the picture.
    
