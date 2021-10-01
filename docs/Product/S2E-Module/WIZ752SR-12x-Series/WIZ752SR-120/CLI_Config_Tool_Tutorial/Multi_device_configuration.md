---
id: multi_device_configuration
title: Multi Device Configuration
date: 2020-04-09
---

CLI Configuration Tool Tutorial #4

You can use the multi-device configuration when you need to set up and configure multiple devices.  
You can **set multiple devices** with **one command input**.

In this tutorial will use three WIZ750SR + EVB boards for testing.

-----

## 1. Usage

The basic command format for multi devices configuration is as follows.

'-a' is all device config option.

``` python
python wizconfig.py -a [Options ...]
```

Multi-device configuration is based
on **mac\_list.txt**, so the **search command must be preceded**.

``` python
python wizconfig.py -s
```

**Mac address list clearing**  

If you want to clear mac\_list, you can use -c/--clear option.

```
python wizconfig.py -c
```

or delete the mac\_list.txt file, It's optional.

You can see the available options with the -h/--help option.

  - Refer to previous tutorial: [How to use CLI Config](How_to_use_CLI_Config_Tool) 

## 2. Set device

These are some examples of setting multi devices.

### Example #1: baud rate

First, search devices on the network. If there is old mac\_list.txt, use -c option or delete the file.

<a target="_blank" href={require("/img/products/wiz750sr/clitool/multi/01.clear.png").default}><img src={require("/img/products/wiz750sr/clitool/multi/01.clear.png").default} alt=""/></a>

<a target="_blank" href={require("/img/products/wiz750sr/clitool/multi/02.search.png").default}><img src={require("/img/products/wiz750sr/clitool/multi/02.search.png").default} alt=""/></a>

Next, use the --baud0 option to set the channel 0 serial baud rate.  
Since WIZ750SR is a 1 port device, use '--baud0' option of Channel \#0
Options.

``` python
//--baud0 BAUD0         baud rate (300|600|1200|1800|2400|4800|9600|14400|19200|28800|38400|57600|115200|230400)//
```

To set the baud rate to 9600 of searched devices, set like this.

``` python
python wizconfig.py -a --baud0 230400
```

<a target="_blank" href={require("/img/products/wiz750sr/clitool/multi/multi_setbaud.png").default}><img src={require("/img/products/wiz750sr/clitool/multi/multi_setbaud.png").default} alt=""/></a>

You can check the configuration complete message.

-----

## 3. Firmware update: Multi devices

### Step 1: Download Firmware

You can get firmware file from below links.  

  - [Official release version](https://github.com/Wiznet/WIZ750SR/releases)
  - [Development version](https://github.com/Wiznet/WIZ750SR/tree/master/Projects/S2E_App/bin)

You must use **App Boot firmware** file when doing this.

-----

### Step 2: Set IP address

When do firmware upload, need TCP connection with the device to send Firmware file.  
So first, use **-m/--multiset** option for set IP address to the **same network-band as host**.

If your host IP address is '192.168.50.80', you can set like this.

``` python
python wizconfig.py -m 192.168.50.100
```

The parameter can be set to the random IP that not used.

<a target="_blank" href={require("/img/products/wiz750sr/clitool/multi/multi_fw_m.png").default}><img src={require("/img/products/wiz750sr/clitool/multi/multi_fw_m.png").default} alt=""/></a>

-----

### Step 3: Firmware update

``` python
python wizconfig.py -a -u W7500x_S2E_App.bin
```

If the firmware file is in the project directory, set the parameter to file name like this.  
Otherwise, enter the full path.

<a target="_blank" href={require("/img/products/wiz750sr/clitool/multi/multi_fw_1.png").default}><img src={require("/img/products/wiz750sr/clitool/multi/multi_fw_1.png").default} alt=""/></a> Start to update.  
<a target="_blank" href={require("/img/products/wiz750sr/clitool/multi/multi_fw_2.png").default}><img src={require("/img/products/wiz750sr/clitool/multi/multi_fw_2.png").default} alt=""/></a> TCP connection for
each device.  
<a target="_blank" href={require("/img/products/wiz750sr/clitool/multi/multi_fw_3.png").default}><img src={require("/img/products/wiz750sr/clitool/multi/multi_fw_3.png").default} alt=""/></a> Firmware upload
success about multiple devices.
