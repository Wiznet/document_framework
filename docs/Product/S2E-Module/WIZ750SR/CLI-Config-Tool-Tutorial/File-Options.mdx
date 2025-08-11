---
id: file-options
title: File Options
date: 2020-04-09
---

CLI Configuration Tool Tutorial \#5

-----

## 1. Getfile option

You can check configuration information of the device use --getfile
option for CLI.

There are example files named **cmd\_oneport.txt** and
**cmd\_twoport.txt** for using getfile option.

These files contain command list of each
1 port and 2 port devices. This command list is used to get each
configuration info from the device.

Basic command format is as follows.

for single device,

``` 
python wizconfig.py -d 00:08:DC:XX:XX:XX --getfile [file_name]
```

for multi devices,
```
python wizconfig.py -a --getfile [file_name]
```

for detail description of command set, refer to [WIZ750SR Command List](./../Command-Manual-EN.md).

-----

### Example 1: Get all info

If you use the example file as it is, you can get all the information of
the device. Since the WIZ750SR is a 1 port device, use cmd\_oneport.txt.

Try to perform a device search first.

``` 
python wizconfig.py -s
```

![](/img/products/wiz750sr/clitool/fileoption/02.search.png)

You then use the getfile option to get information from a single device
or multiple devices as follows.

* Single device

``` 
python wizconfig.py -d 00:08:DC:53:AE:93 --getfile cmd_oneport.txt
```

* Multi devices

```
python wizconfig.py -a --getfile cmd_oneport.txt
```

![](/img/products/wiz750sr/clitool/fileoption/single_getfile.png)

-----

### Example 2: Getting part info

If you want to get only some necessary information, refer to
cmd\_oneport.txt and modify it or create a new file to include only
necessary commands.

For example, if you want to get only the network configuration
information, try as follows.

1) Make new command list

*cmd\_net.txt*

``` 
OP
IM
LI
SM
GW
DS
LP
RH
RP

```

2) Get information

Use getfile option with new command list file.

* Single device

``` 
python wizconfig.py -d 00:08:DC:53:AE:93 --getfile cmd_net.txt
```

![](/img/products/wiz750sr/clitool/fileoption/single_getfile_short.png)

* Multi devices

```
python wizconfig.py -a --getfile cmd_net.txt
```

![](/img/products/wiz750sr/clitool/fileoption/multi_getfile_short.png)

You can use this after customizing according to your purpose and
situation.

-----

## 2. Setfile option

You can save the settings you want to keep to a file and set them with
the --setfile option.  
It can be used as the macro.

To use this option, you have to make command set. (command + parameter)

  - for detail description of command set, refer to [WIZ750SR Command List](./../Command-Manual-EN.md).

List up and write the command set info you want to set a file.

The basic command format is as follows.

for single device,

``` 
python wizconfig.py -d 00:08:DC:XX:XX:XX --setfile [file_name]
```

for multi devices,

```
python wizconfig.py -a --setfile [file_name]
```

-----

### Example 1: Setfile

There is an example file in the project directory, 'set\_cmd.txt'.

*set\_cmd.txt*

    IM0
    LI192.168.0.25
    SM255.255.255.0
    GW192.168.0.1
    LP5000
    BR12

\* From top to bottom: local IP, Subnet mask, Gateway, Local port, Baudrate and set as follows.

\* **Single device**

``` 
python wizconfig.py -d 00:08:DC:53:AE:93 --setfile set_cmd.txt
```

![](/img/products/wiz750sr/clitool/fileoption/single_setfile.png)

\* **Check:**

```
python wizconfig.py -d 00:08:DC:53:AE:93 --getfile set_cmd.txt
```

![](/img/products/wiz750sr/clitool/fileoption/single_setfile_get.png)

\* **Multi devices**

``` 
python wizconfig.py -a --setfile set_cmd.txt
```

![](/img/products/wiz750sr/clitool/fileoption/multi_setfile.png)

\* **Check:**

```
python wizconfig.py -a --getfile set_cmd.txt
```

![](/img/products/wiz750sr/clitool/fileoption/multi_setfile_get.png)

The setfile option can be useful when you want to save and use multiple options as shown above.
