---
id: firmware_update_guide
title: Firmware Update Guide
date: 2021-03-24
---

## Using the WIZnet S2E Configuration Tool

The '**Using the WIZnet S2E Configuration Tool**' section provides a firmware update guide through **WIZnet S2E Configuration Tool**.



### Required Hardware and Software



#### Hardware

  - WIZ510SSL

  - WIZ510SSL-RS232/TTL-EVB Evaluation Board

  - Cables (Ethernet / Serial / Micro USB Type B)



#### Software

  - WIZnet S2E Configuration Tool
	- [Download the latest version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/v1.4.0)
    - [Download the older versions](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)

  - WIZ510SSL Firmware:
	- [Download the latest version](https://github.com/Wiznet/WIZ510SSL/releases/tag/v1.0.0)
    - [Download the older versions](https://github.com/Wiznet/WIZ510SSL/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZ510SSL)



### How to Download the Firmware Using the WIZnet S2E Configuration Tool



#### Step 1: Set up environment to use the WIZ510SSL

The process of set up environment to use the WIZ510SS is available at the [WIZ510SSL Getting Started](getting_started) page.



#### Step 2: Firmware Upload

  - Click the firmware upload button

|                                                                      |
| ---------------------------------------------------------------------|
| <a target="_blank" href={require("/img/products/wiz510ssl/firmware_update_guide/click_the_firmware_upload_button.png").default}><img src={require("/img/products/wiz510ssl/firmware_update_guide/click_the_firmware_upload_button.png").default} alt=""/></a> |
| Figure: ***Click the firmware upload button***                       |

  - Select the downloaded firmware (\*.bin)
  	- When **current flash bank 0** in the WIZnet S2E Configuration Tool, **select firmware (.bin) for BANK 0**
  	- When **current flash bank 1** in the WIZnet S2E Configuration Tool, **select firmware (.bin) for BANK 1**

|                                                         |
| --------------------------------------------------------|
| <a target="_blank" href={require("/img/products/wiz510ssl/firmware_update_guide/select_the_firmware.png").default}><img src={require("/img/products/wiz510ssl/firmware_update_guide/select_the_firmware.png").default} alt=""/></a> |
| Figure: ***Select the firmware***                       |

|                                                                |
| ---------------------------------------------------------------|
| <a target="_blank" href={require("/img/products/wiz510ssl/firmware_update_guide/firmware_selection_warning.png").default}><img src={require("/img/products/wiz510ssl/firmware_update_guide/firmware_selection_warning.png").default} alt=""/></a> |
| Figure: ***Firmware selection warning***                       |

  - Uploading firmware

|                                                        |
| -------------------------------------------------------|
| <a target="_blank" href={require("/img/products/wiz510ssl/firmware_update_guide/uploading_firmware.png").default}><img src={require("/img/products/wiz510ssl/firmware_update_guide/uploading_firmware.png").default} alt=""/></a> |
| Figure: ***Uploading firmware***                       |



#### Step 3: Done

Firmware update is finished!

|                                                              |
| -------------------------------------------------------------|
| <a target="_blank" href={require("/img/products/wiz510ssl/firmware_update_guide/finished_firmware_update.png").default}><img src={require("/img/products/wiz510ssl/firmware_update_guide/finished_firmware_update.png").default} alt=""/></a> |
| Figure: ***Finished firmware update***                       |