---
id: factory-rst-guide-en
title: Factory Reset Guide
date: 2024-08-08
---



-----



## Factory reset overview

A factory reset will return the settings on the **W55RP20-S2E** to their factory state.



-----



## Required Hardware and Software



### Hardware

  - W55RP20-S2E
  - Cables (Ethernet / Serial)


### Software

  - WIZnet S2E Configuration Tool
	- [Download the Latest Version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.5.0)
    - [Download the Older Versions](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)


-----
## How to factory reset the W55RP20-S2E

There are two ways to perform a W55RP20-S2E factory reset.

- [Using Config-Tool](#using-config-tool)
- [Using Factory reset switch](#using-factory-reset-pin)

## Using Config Tool


### Step 1: Run Config-tool

Run installed **'Config-tool'**


### Step 2: Select ⑦Factory Rest from the top icon menu

<img src="/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/menu_icons.png" width="450" /> 


### step 3: Do factory reset

<img src="/img/products/w232n/config-fact.png" width="550" /> 

- select **Yes** 


### Step 4: Done

<img src="/img/products/w232n/config-fact-ok.png" width="550" /> 

- If the factory reset completed successfully, you'll see a completion notification.


## Using factory reset pin

### Step 1: Pull low Factory Reset pin

<img src="/img/products/w55rp20-s2e/w55rp20-s2e-frst.png" width="400" />

- Press and hold the factory reset switch for 5 seconds with the W55RP20-S2E booting normally.
- The RUN STATUS PIN, LINK_STATUS PIN, and TCP_STATUS PIN will toggle twice rapidly.

### Step 2: Done

- Use Config-tool to verify that it initialized properly.

-----
