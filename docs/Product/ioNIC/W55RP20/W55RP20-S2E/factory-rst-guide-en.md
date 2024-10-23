---
id: factory-rst-guide-en
title: Factory Reset Guide
date: 2024-08-08
---



-----



## Factory reset overview

A factory reset will return the settings on the **W232N** to their factory state.



-----



## Required Hardware and Software



### Hardware

  - W232N
  - 5~36V Power adapter
  - Cables (Ethernet / Serial)


### Software

  - WIZnet S2E Configuration Tool
	- [Download the Latest Version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.5.0)
    - [Download the Older Versions](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)


-----
## How to factory reset the W232N

There are two ways to perform a W232N factory reset.

- [Using Config-Tool](#Using-Config-Tool)
- [Using Factory reset switch](#Using-Factory-reset-switch)

## Using Config Tool


### Step 1: Run Config-tool

Run installed **'Config-tool'**


### Step 2: Select ⑦Factory Rest from the top icon menu

<img src="/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/menu_icons.png" width="400" /> 


### step 3: Do factory reset

<img src="/img/products/w232n/config-fact.png" width="500" /> 

- select **Yes** 


### Step 4: Done

<img src="/img/products/w232n/config-fact-ok.png" width="500" /> 

- If the factory reset completed successfully, you'll see a completion notification.


## Using factory reset switch

### Step 1: Remove the top case

<img src="/img/products/w232n/Screw.png" width="200" />

- Remove the bolts on either side of the device to remove the top case

### Step 2: Click the Factory Reset switch

<img src="/img/products/w232n/fact_rst.png" width="400" />

- Press and hold the factory reset switch for 5 seconds with the W232N booting normally.
- The RUN, LINK, and TCP LEDs blink twice rapidly.

### Step 3: Done

- Use Config-tool to verify that it initialized properly.

-----
