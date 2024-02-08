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
   Install [Python](https://www.python.org/downloads/) 3.7 or later

# 2. Install pyocd
    In a CMD command window, write the __python -m pip install -U pyocd__ command to install pyocd.   
    (Depending on your PC environment, you may need to write the command __python3 -m pip install -U pyocd__).

# 3. Check Debugger connection.
    <a target="_blank" href={require('/img/osh/surf5/pyocd_list.png').default}><img src={require('/img/osh/surf5/pyocd_list.png').default} alt="pyOCD_list"/></a>
    You can check PC and Debugger connection using __pyocd list__ command

# 4. Add W7500 in pyocd CMSIS-PACK
    <a target="_blank" href={require('/img/osh/surf5/Add_DFP1.png').default}><img src={require('/img/osh/surf5/Add_DFP1.png').default} alt="pyOCD_mkdir"/></a>
    Make Directory named __WIZnet.W7500_DFP.1.0.0__ in __W7500X-SURF5/tools__
    
    <a target="_blank" href={require('/img/osh/surf5/Add_DFP2.png').default}><img src={require('/img/osh/surf5/Add_DFP2.png').default} alt="pyOCD_mkdir2"/></a>
    Make Directory named __Flash__ in __W7500X-SURF5/tools/WIZnet.W7500_DFP.1.0.0__

    <a target="_blank" href={require('/img/osh/surf5/Add_DFP3.png').default}><img src={require('/img/osh/surf5/Add_DFP3.png').default} alt="pyOCD_Add_DFP3"/></a>
    Download the W7500 Flash <a href="/img/products/w7500/overview/w7500_128_flm.zip" target="_blank">file</a> and copy in __W7500X-SURF5/tools/WIZnet.W7500_DFP.1.0.0/Flash__

    <a target="_blank" href={require('/img/osh/surf5/Add_DFP4.png').default}><img src={require('/img/osh/surf5/Add_DFP4.png').default} alt="pyOCD_Add_DFP4"/></a>
    Download the WIZnet.W7500_DFP.pdsc <a href="/img/osh/surf5/WIZnet.W7500_DFP.zip" target="_blank">file</a> and copy in __W7500X-SURF5/tools/WIZnet.W7500_DFP.1.0.0__ 

    <a target="_blank" href={require('/img/osh/surf5/Add_DFP5.png').default}><img src={require('/img/osh/surf5/Add_DFP5png').default} alt="pyOCD_Add_DFP5"/></a>
    The WIZnet.W7500_DFP.pdsc file is an XML file that sets the device name and Core, Clock, and Memory areas.

    <a target="_blank" href={require('/img/osh/surf5/Add_DFP6.png').default}><img src={require('/img/osh/surf5/Add_DFP6.png').default} alt="pyOCD_Add_DFP6"/></a>
    Now you can see the W7500 added with the __pyocd list --targets__ command.

# 5. Set GDB path and Excutable(.elf) path
    <a href="/img/osh/surf5/launch.zip" target="_blank">Download</a> launch.jason and edit executable path and gdbpath
    <a target="_blank" href={require('/img/osh/surf5/Set_GDB_Path.png').default}><img src={require('/img/osh/surf5/Set_GDB_Path.png').default} alt="pyOCD_Set_GDB_Path"/></a>
    Set the executable path to the path of the .elf file you want to debug and the GDB path to the path of the ARM TOOL CHAIN you installed.

# 6. Install Cortex-Debug Extension
    <a target="_blank" href={require('/img/osh/surf5/Debug.png').default}><img src={require('/img/osh/surf5/Debug.png').default} alt="pyOCD_Debug.png"/></a>
    Install Cortex-Debug Extension in VSCODE

# 7. Run Debug
    <a target="_blank" href={require('/img/osh/surf5/Debug1.png').default}><img src={require('/img/osh/surf5/Debug1.png').default} alt="pyOCD_Debug1.png"/></a>
    You can click __Run and Debug__ to enter debug mode.

    <a target="_blank" href={require('/img/osh/surf5/Debug2.png').default}><img src={require('/img/osh/surf5/Debug2.png').default} alt="pyOCD_Debug2.png"/></a>
    By clicking the play icon you can run the debug in debug mode.

    <a target="_blank" href={require('/img/osh/surf5/Debu3.png').default}><img src={require('/img/osh/surf5/Debug3.png').default} alt="pyOCD_Debug3.png"/></a>
    

