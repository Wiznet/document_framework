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

- [Using Config-Tool](#using-the-configuration-tool)
- [Using Web-Config](#using-web-config)
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
- update soon

## Using USB
- update soon

## Using SWD
- update soon

-----
