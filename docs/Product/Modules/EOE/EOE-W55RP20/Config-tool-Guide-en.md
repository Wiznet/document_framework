---
id: eoe-w55rp20-configuration-tool-guide-en
title: Configuration Tool Guide
---

## Overview

The WIZnet Configuration Tool can search for supported devices, change settings, upload firmware, restart a device, and restore factory settings.

- [Supported Devices List](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI#support-devices)
- [WIZnet-S2E-Tool-GUI repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)
- [Latest releases](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)

## Network Requirements

| Function | Transport | Port |
| --- | --- | --- |
| Device search | TCP or UDP | 50001 |
| Firmware upload | TCP | 50002 |

The computer running the tool must be able to reach the device. When using a static IP configuration, use an address in the same subnet as the device.

## Main Functions

| Function | Description |
| --- | --- |
| Device Search | Finds supported devices by UDP broadcast or TCP unicast. |
| Apply Settings | Saves changed settings to the selected device; the device reboots after the operation. |
| Firmware Upload | Uploads a firmware binary supplied for the device; the device reboots after the operation. |
| Reset Device | Restarts the selected device. |
| Factory Reset | Restores the device settings to factory defaults and restarts the device. |
| Save Config | Saves the selected device configuration to a file. |
| Load Config | Loads a previously saved configuration; use Apply Settings to send it to the device. |

## Firmware Upload

:::caution
Do not power off the device during a firmware upload. Interrupting the upload can prevent normal operation.
:::

If a firewall or endpoint security product blocks TCP port 50002, firmware upload can fail. Confirm that the host computer and device are reachable on the same network before starting an upload.
