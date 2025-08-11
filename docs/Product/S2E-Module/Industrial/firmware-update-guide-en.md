---
id: firmware-update-guide-en
title: Download
date: 2022-06-28
---



-----



## W232N Firmware Update Overview



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



### Firmware Update Sequence

|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/firmware_update_sequence.png) |
| Figure: **Firmware Update Sequence**                                                         |



-----



## How to upload or update the W232N firmware

The W232N provides three ways to upload or update the firmware.

- [Using Config-Tool](#using-the-configuration-tool)
- [Using Web-Config](#using-web-config)
- [Using USB](#using-usb)
- [Using SWD](#using-swd)


-----



## Using the Configuration Tool



### Required Hardware and Software



#### Hardware

  - W232N
  - 5~36V Power adapter
  - Cables (Ethernet / Serial)


#### Software

  - WIZnet S2E Configuration Tool
	- [Download the Latest Version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.5.0)
    - [Download the Older Versions](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)




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

W232N is searched after about 5 seconds in the Configuration Tool after firmware upload or update completed.

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
