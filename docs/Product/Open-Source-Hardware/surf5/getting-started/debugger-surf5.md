---
id: debugger-surf5
title: Surf 5 Debugger
date: 2023-11-14
keywords: [iMCU, ethernet, w7500]
description: How to debug Surf 5
---

## How to debug Surf5 in VSCODE
This guide is based on Surf5's default example, Loopback

# 1. Install Python
   Install [Python](https://www.python.org/downloads/) 3.10 or later

# 2. Install pyocd
    In a CMD command window, write the __python -m pip install -U pyocd__ command to install pyocd.   
    (Depending on your PC environment, you may need to write the command __python3 -m pip install -U pyocd__). 
    <img src="/img/osh/surf5/pyocd_install.png" width="400" /><br />

# 3. Check Debugger connection.
    <img src="/img/osh/surf5/pyocd_list.png" width="400" /><br />
    You can check PC and Debugger connection using __pyocd list__ command

# 4. Add W7500 in pyocd CMSIS-PACK
    <img src="/img/osh/surf5/Add_DFP1.png" width="400" /><br />
    Make Directory named __WIZnet.W7500_DFP.1.0.0__ in __W7500X-SURF5/tools__
    
    <img src="/img/osh/surf5/Add_DFP2.png" width="400" /><br />
    Make Directory named __Flash__ in __W7500X-SURF5/tools/WIZnet.W7500_DFP.1.0.0__

    <img src="/img/osh/surf5/Add_DFP3.png" width="400" /><br />Download the W7500 Flash <a href="/img/products/w7500/overview/w7500_128_flm.zip" target="_blank">file</a> and copy in __W7500X-SURF5/tools/WIZnet.W7500_DFP.1.0.0/Flash__

    <img src="/img/osh/surf5/Add_DFP4.png" width="400" /><br />Download the WIZnet.W7500_DFP.pdsc<a href="/img/osh/surf5/WIZnet.W7500_DFP.zip" target="_blank">file</a>and copy in __W7500X-SURF5/tools/WIZnet.W7500_DFP.1.0.0__ 

    <img src="/img/osh/surf5/Add_DFP5.png" width="600" /><br />The WIZnet.W7500_DFP.pdsc file is an XML file that sets the device name and Core, Clock, and Memory areas.

    <img src="/img/osh/surf5/Add_DFP6.png" width="500" /><br />Now you can see the W7500 added with the __pyocd list --targets__ command.

# 5. Set GDB path and Excutable(.elf) path
    <a href="/img/osh/surf5/launch.zip" target="_blank">Download</a> launch.jason and edit executable path and gdbpath
    <img src="/img/osh/surf5/Set_GDB_Path.png" width="600" /><br />
    Set the executable path to the path of the .elf file you want to debug and the GDB path to the path of the ARM TOOL CHAIN you installed.

# 6. Install Cortex-Debug Extension
    <img src="/img/osh/surf5/Debug.png" width="500" /><br />
    Install Cortex-Debug Extension in VSCODE

# 7. Run Debug
    <img src="/img/osh/surf5/Debug1.png" width="400" /><br />
    You can click __Run and Debug__ to enter debug mode.
    <img src="/img/osh/surf5/Debug2.png" width="400" /><br />
    By clicking the play icon you can run the debug in debug mode.
    <img src="/img/osh/surf5/Debug3.png" width="400" /><br />
