---
id: firmware-update-guide
title: Firmware Update Guide
date: 2022-06-09
---



-----



## WIZ5xxSR-RP Firmware Update Overview



### Memory Map

  - Internal Flash
    - Main flash size: 2 Mbytes

```cpp
 Top Flash Memory Address /-------------------------------------------\  0x10200000
                          |                                           |
                          |             Parameters (64KB)             |
                          |-------------------------------------------|  0x101F0000
                          |                                           |
                          |              Reserved (448KB)             |
                          |                                           |
                          |-------------------------------------------|  0x10180000
                          |                                           |
                          |                                           |
                          |        Firmware Binary Bank (512KB)       |
                          |                                           |
                          |                                           |
                          |-------------------------------------------|  0x10100000
                          |                                           |
                          |                                           |
                          |          Application Bank (512KB)         |
                          |                                           |
                          |                                           |
                          |-------------------------------------------|  0x10080000
                          |                                           |
      Page 1 (256KB)      |                                           |
                          |             Bootloader (512KB)            |
      Page 0 (256KB)      |                                           |
                          |                                           |
                          \-------------------------------------------/  0x100000000
```



### Firmware Update Sequence

|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/firmware_update_sequence.png) |
| Figure: **Firmware Update Sequence**                                                         |



-----



## How to Upload or Update the Firmware of WIZ5xxSR-RP

The WIZ5xxSR-RP provides one method of uploading or updating firmware.

That's the way over ethernet using the Configuration Tool.

  - [Using the Configuration Tool](#using-the-configuration-tool)



-----



## Using the Configuration Tool



### Required Hardware and Software



#### Hardware

  - WIZ5xxSR-RP
    - [WIZ500SR-RP](./WIZ500SR-RP/overview-en.md)
    - [WIZ505SR-RP](./WIZ505SR-RP/overview-en.md)
    - [WIZ510SR-RP](./WIZ510SR-RP/overview-en.md)
  - WIZ5xxSR-RP Evaluation Board (WIZ510SR-RP can be used without WIZ5xxSR-RP Evaluation Board.)
  - 5V Power adapter
  - Cables (Ethernet / Serial)



#### Software

  - WIZnet S2E Configuration Tool
	- [Download the Latest Version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.4.2)
    - [Download the Older Versions](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)



### How to Upload or Update the Firmware



#### Step 1: Setup Environment to Use WIZ5xxSR-RP

The process of setup environment to use the WIZ5xxSR-RP each product is available at the **'Getting Started'** document below.

  - [Getting Started: WIZ500SR-RP](./WIZ500SR-RP/getting-started-en.md)
  - [Getting Started: WIZ505SR-RP](./WIZ505SR-RP/getting-started-en.md)
  - [Getting Started: WIZ510SR-RP](./WIZ510SR-RP/getting-started-en.md)



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

WIZ5xxSR-RP is searched after about 5 seconds in the Configuration Tool after firmware upload or update completed.

|                                                                                                        |
| :----------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/firmware_upload_or_update_complete.png) |
| Figure: **Firmware upload or update complete**                                                         |



-----
