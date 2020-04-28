---
id: single_device_configuration
title: Single Device Configuration
date: 2020-04-09
---

CLI Configuration Tool Tutorial # 3

# Single device configuration

-----

## 1. Usage

The basic command format for single device configuration is as follows.

'-d' is a device selection option and the parameter is the MAC address
of the device to be set.

    python wizconfig.py -d 00:08:DC:XX:XX:XX [Options ...]

You can see the available options with the -h/--help option.

  - Refer to previous tutorial: [How to use CLI
    Config](/products/wiz750sr/clitool/option/en) 

-----

## 2. Set device

These are some examples about setting single device.

### Example \#1: baud rate

Use the --baud0 option to set the serial baud rate.  
Since WIZ750SR is a 1 port device, use '--baud0' option of Channel \#0
Options.

    //--baud0 BAUD0         baud rate (300|600|1200|1800|2400|4800|9600|14400|19200|28800|38400|57600|115200|230400)//

To set the baud rate to 9600, set the following:

``` 
python wizconfig.py -d 00:08:DC:53:AE:B7 --baud0 9600

```

![](/products/configtool/single/set_baud.png)

When the setting is completed, you can check the configuration result
with the message.

-----

### Example # 2: static IP

To set static IP, you need the following information may be:

  - IP address
  - Subnet mask
  - gateway
  - DNS (optional)

And the options for these settings are:

    --ip IP               Local IP address
    --subnet SUBNET       Subnet mask
    --gw GW               Gateway address
    --dns DNS             DNS server address

You can set like this.

``` 
python wizconfig.py -d 00:08:DC:53:AE:B7 --ip 192.168.50.100 --subnet 255.255.255.0 --gw 192.168.50.1 --dns 8.8.8.8

```

![](/products/configtool/single/set_static.png)

-----

### Example #3: Client mode & remote IP/Port

You can change the operation mode to client mode and test by changing
the remote IP and port according to your host PC environment.

A description of the operating mode of WIZ750SR can be found here:  
[WIZ750SR operation mode](../User's_Manual-[EN].md).

When operating in the Client mode, you could set up the remote IP and
port information as well, because it requires the server information to
be connected.

The required option setting information is as follows.

    --nmode0 {0,1,2,3}    Network operation mode (0: tcpclient, 1: tcpserver, 2: mixed, 3: udp)
    --rip0 IP             Remote host IP address / Domain
    --rport0 PORT         Remote host port number

And you can use the above option to set it as follows.

``` 
python wizconfig.py -d 00:08:DC:53:AE:93 --nmode0 0 --rip0 192.168.50.80 --rport0 6000

```

Remote IP & port should be set according to the environment.

![](/products/wiz750sr/clitool/single/single_client.png)

-----

## 3. Firmware update

### Step 1: Download Firmware

You can get firmware file from below links.  

  - [Official release
    version](https://github.com/Wiznet/WIZ750SR/releases)
  - [Development
    version](https://github.com/Wiznet/WIZ750SR/tree/master/Projects/S2E_App/bin)

You must use **App Boot firmware** file when doing this.

-----

### Step 2: Set IP address

When do firmware upload, need TCP connection with the device to send
Firmware file.  
So first, use **-m/--multiset** option for set IP address to the **same
network-band as host**.

If your host IP address is '192.168.50.80', you can set like this.

``` 
python wizconfig.py -m 192.168.50.100

```

The parameter can be set to the random IP that not used.

![](/products/wiz750sr/clitool/single/fw_ipset.png)

-----

-----

### Step 3: Firmware update

If the firmware file is in the project directory, just enter the file
name.  
Otherwise, enter the full path.

``` 
python wizconfig.py -d 00:08:DC:53:AE:B7 -u W7500x_S2E_App.bin


```

![](/products/wiz750sr/clitool/single/fw_up_1.png) (skip)
![](/products/wiz750sr/clitool/single/fw_up_2.png)
