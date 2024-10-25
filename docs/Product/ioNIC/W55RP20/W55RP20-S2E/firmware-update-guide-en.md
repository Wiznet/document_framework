---
id: firmware-update-guide-en
title: Firmware Upload & Update guide
date: 2022-06-28
---



-----



## W55RP20-S2E Firmware Upload & Update Overview



### Memory Map

  - Internal Flash
    - Main flash size: 2 Mbytes

```cpp
 Top Flash Memory Address /-------------------------------------------\  0x10200000
                          |                                           |
                          ~                                           ~
                          |             Reserved (832KB)              |
                          |-------------------------------------------|  0x10130000
                          |                                           |
                          |             Parameters (64KB)             |
                          |                                           |
                          |-------------------------------------------|  0x10120000
                          |                                           |
                          |                                           |
                          |                                           |
                          |                                           |
                          |        Firmware Binary Bank (512KB)       |
                          |                                           |
                          |                                           |
                          |                                           |
                          |-------------------------------------------|  0x100A0000
                          |                                           |
                          |                                           |
                          |                                           |
                          |                                           |
                          |        Application Bank (512KB)           |
                          |                                           |
                          |                                           |
                          |                                           |
                          |-------------------------------------------|  0x10020000
                          |                                           |
      Page 1 (256KB)      |                                           |
                          |             Bootloader (128KB)            |
      Page 0 (256KB)      |                                           |
                          |                                           |
                          \-------------------------------------------/  0x10000000
```



## How to upload or update the W55RP20-S2E firmware

The W232N provides three ways to upload or update the firmware.

- [Using Config-Tool](#using-the-configuration-tool) **Application Bank Only**
- [Using Web-Config](#using-web-config) **Application Bank Only**
- [Using USB](#using-usb)
- [Using SWD](#using-swd)


-----



## Using the Configuration Tool


### Update Sequence using Configuration Tool

|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/firmware_update_sequence.png) |
| Figure: **Application Bank Update Sequence**                                                 |

**Firmware updates using the Configuration Tool can only update the Application area.**

### Required Hardware and Software


#### Hardware

  - W55RP20-S2E
  - Cables (Ethernet / Serial)


#### Software

  - [W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)
  - [WIZnet S2E Configuration Tool](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)


### Step 1: Run Config-tool

Run installed **'Config-tool'**



#### Step 2: Upload Firmware

1. Click the **Firmware Upload** button

|                                                                                                  |
| :----------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/click_firmware_upload_button.png) |
| Figure: **Click Firmware Upload button**                                                         |

2. Select the uploaded firmware

When selecting firmware, you must select **.bin**(*_linker.bin).
Config-tool can only update Application bank so **do not upload Boot.bin**
Firmware in a file format other than .bin cannot be uploaded or updated properly.

|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/select_uploaded_firmware.png) |
| Figure: **Select uploaded firmware**                                                         |

3. Uploading the firmware

|                                                                                        |
| :------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/uploading_firmware.png) |
| Figure: **Uploading firmware**                                                         |



#### Step 3: Done

Firmware upload or update completed!

W55RP20-S2E is searched after about 5 seconds in the Configuration Tool after firmware upload or update completed.

|                                                                                                        |
| :----------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/firmware_upload_or_update_complete.png) |
| Figure: **Firmware upload or update complete**                                                         |

## Using Web config

### Update Sequence using Web config

|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/firmware_update_sequence.png) |
| Figure: **Application Bank Update Sequence**                                                 |

**Firmware updates using the Web config can only update the Application area.**

### Required Hardware and Software


#### Hardware

  - W55RP20-S2E
  - Cables (Ethernet / Serial)


#### Software

  - [W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)
  - [WIZnet S2E Configuration Tool](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)


### Step 1: Check IP address of W55RP20-S2E

You can Check your IP address **Config-tool** or **using AT command**

### Step 2: Access the web server 

Using a web browser (e.g., Chrome), connect to the web server at port 50003 of the S2E module address you have configured.<br />
You can see your device infomation after click **GET Settings**
|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/w55rp20-s2e/w55rp20-s2e-web-fw.png)                                        |
| Figure: **Web server config**                                                                |

### Step 3: Upload Firmware

Select bin file(App_linker.bin).<br />
Web server can only update Application bank so **do not upload Boot.bin**
|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/w55rp20-s2e/w55rp20-s2e-web-up.png)                                        |
| Figure: **Select Bin file**                                                                  |

After select .bin file, click the **Module Update** and select **Confirm** 
|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/w55rp20-s2e/w55rp20-s2e-web-update.png)                                    |
| Figure: **Module Update**                                                                    |

#### Step 4: Done

when FW update success you can see **'F/W Update Complete. Device Reboot Please wait a few seconds.'** message .<br />
The web-config page does not refresh automatically, so reconnect to 'your IP address:50003'

## Using USB

### Required Hardware and Software


#### Hardware

  - W55RP20-S2E
  - Cables (Ethernet / USB)


#### Software

  - [W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)

### Step 1: Connect W55RP20-S2E and PC with USB cable

|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/w55rp20-s2e/w55rp20-s2e-usb.png)                                           |
| Figure: **USB connection**                                                                   |

### Step 2: Enter Boot mode

Hold the BOOT pin(pin num 63) low and pull-low the RUN pin shortly.<br />
You can see Mass Storage Device named RPI-RP2.

|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/w55rp20-s2e/w55rp20-s2e-rpi-rp2.png)                                       |
| Figure: **RPI-RP2**                                                                   |

### Step 3: Flash W55RP20-S2E Firmware

[W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)<br />
Drag and drop App_linker.uf2 and Boot.uf2, one by one, from the Bin_Files_VXXX folder.<br />
<img src="/img/products/w55rp20-s2e/drag-drop.png" width="400" />

### Step 4: Done

Firmware upload or update completed!

W55RP20-S2E is searched after about 5 seconds in the Configuration Tool after firmware upload or update completed.

If the MAC address is not stored in the MAC address memory, an additional MAC address entry is required.<br />
[How to write MAC Address](./mac_address-write-guide-en.md)


## Using SWD
- update soon

-----
