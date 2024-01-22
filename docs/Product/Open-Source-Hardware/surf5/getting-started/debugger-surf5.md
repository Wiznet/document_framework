---
id: debugger-surf5
title: Surf 5 Debugger
date: 2023-11-14
keywords: [iMCU, ethernet, w7500]
description: How to debug Surf 5
---

<!-- **This document serves as a guide for users to reference before using Surf 5.** -->

-----

## How to Debug Surf5 on VSCODE using pyOCD

This guide is based on Surf5's default example, Loopback


1. Install Python
    
    
    Install [Python](https://www.python.org/downloads/) 3.7 or later
2. Install pyocd

    In a CMD command window, write the __python -m pip install -U pyocd__ command to install pyocd.   
    (Depending on your PC environment, you may need to write the command __python3 -m pip install -U pyocd__).
3. Check Debugger connection.
    
    <img src="/img/osh/surf5/pyocd_list.png" width="400" /><br /><br /><br />
    You can check PC and Debugger connection using __pyocd list__ command
4. Add W7500 in pyocd CMSIS-PACK

    <img src="/img/osh/surf5/Add_DFP1.png" width="400" /><br /><br /><br />
    Make Directory named __WIZnet.W7500_DFP.1.0.0__ in __W7500X-SURF5/tools__
    
    <img src="/img/osh/surf5/Add_DFP2.png" width="400" /><br /><br /><br />
    Make Directory named __Flash__ in __W7500X-SURF5/tools/WIZnet.W7500_DFP.1.0.0__

    <img src="/img/osh/surf5/Add_DFP3.png" width="400" /><br /><br /><br />
    Download the W7500 Flash <a href="/img/products/w7500/overview/w7500_128_flm.zip" target="_blank">file</a> and copy in __W7500X-SURF5/tools/WIZnet.W7500_DFP.1.0.0/Flash__

    <img src="/img/osh/surf5/Add_DFP4.png" width="400" /><br /><br /><br />
    Download the WIZnet.W7500_DFP.pdsc <a href="/img/osh/surf5/WIZnet.W7500_DFP.zip" target="_blank">file</a> and copy in __W7500X-SURF5/tools/WIZnet.W7500_DFP.1.0.0__ 

    <img src="/img/osh/surf5/Add_DFP5.png" width="400" /><br /><br /><br />
    The WIZnet.W7500_DFP.pdsc file is an XML file that sets the device name and Core, Clock, and Memory areas.

    <img src="/img/osh/surf5/Add_DFP6.png" width="400" /><br /><br /><br />
    Now you can see the W7500 added with the __pyocd list --targets__ command.