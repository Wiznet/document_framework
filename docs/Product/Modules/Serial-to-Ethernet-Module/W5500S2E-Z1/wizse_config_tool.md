---
id: wizse_config_tool_55_75
title: WIZse Config tool
date: 2025-09-05
---

# WIZS2E Config Tool software configuration

WIZS2E Config Tool is an upper computer configuration software that runs on the Windows operating system and is compatible with WIZ-DTU, WIZ-IP32, W5500S2E and W7500S2E series serial to Ethernet modules. Users can easily search, view, and configure various functions and information of W5500S2E / W7500S2E serial to Ethernet module through WIZS2E Config Tool.

<span style={{ color: 'red' }}>**Note**: Before configuring, it is recommended to turn off the firewall and ensure that all module IP addresses within the local area network do not conflict.</span>

## Obtain module configuration information

Click the ![](/img/products/w5500s2e-z1/search.png)button in the toolbar, and the left search window will categorize by module MAC address, listing all searched modules. Click on the "![](/img/products/w5500s2e-z1/plus.png)"  button in front of the list to expand and view detailed information about the module.



Basic Configuration Interface of WIZS2E Config Tool

 ![](/img/products/w5500s2e-z1/config1.png) 

W5500S2E / W7500S2E series channel 1 serial interface setup

  ![](/img/products/w5500s2e-z1/config2.png) 

---

## Modify module configuration information

After searching for the module, users can directly modify the module information in the basic and advanced configuration interfaces, and click the button ![](/img/products/w5500s2e-z1/applysetting.png)to save the configuration information.

---

## Reset module

Clicking ![](/img/products/w5500s2e-z1/reset.png) button will bring up a dropdown menu, and clicking ![](/img/products/w5500s2e-z1/resetnow.png) button will immediately restart the module (without saving the configuration).

---

## Practical functions

### Switching network card

In order to solve the problem of not being able to determine whether the current module is a wired or wireless network card when configuring a laptop, this tool has added a function to switch network cards as shown in the image below.

![](/img/products/w5500s2e-z1/networkcard.png)

Users can first click "Update IP list!" to update the network card list, and then select the corresponding network card for configuring the module.

### Right Click

Right Click result of WIZSE config tool

![](/img/products/w5500s2e-z1/config3.png) 

Right click on the module list on the left, as shown in the figure below, and a list of three functions will appear:

1. Expand/collapse all module details;
2. Sorted by MAC address, module type, or module name;
3. **Search again!** This function let users to maintain the original module list unchanged when configuring modules in bulk, it listed newly searched module information after the original module list.

---

## Factory Reset

For users need to factory Reset when using W5500S2E / W7500S2E series modules, there are three methods: Configuration tools, AT command mode, and hardware mode.

### WIZSE config tools factory settings

For WIZSE config tools, click the left mouse button in the module list of WIZS2E Config Tool software to select the module that needs to be restored, and then click the![](/img/products/w5500s2e-z1/reset.png) →![](/img/products/w5500s2e-z1/factoryreset.png) button in the toolbar to factory Reset.

---

## Firmware Upgrade

W5500S2E / W7500S2E series supports two types of firmware upgrades: Configuration tool firmware upgrade and webpage firmware upgrade. 

<span style={{ color: 'red' }}>**Note**: The firmware referred to below must be the bin firmware of W5500S2E / W7500S2E series provided by WIZnet officially.</span>

### Upgrade firmware through WIZS2E Config Tool

Before upgrading the firmware, it is require to set both module and computer IP address in the network segment IP address. After selecting the module, click the ![](/img/products/w5500s2e-z1/uploadfirmware.png)button and select the firmware.

After the firmware upgrade is complete, the config tools will show the following popup window. 

![](/img/products/w5500s2e-z1/popup.png)