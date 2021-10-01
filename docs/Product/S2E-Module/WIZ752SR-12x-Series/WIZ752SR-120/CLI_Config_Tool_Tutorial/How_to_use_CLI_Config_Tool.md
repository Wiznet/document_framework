---
id: how_to_use_cli_config_tool
title: How to use CLI Config Tool
date: 2020-04-09
---

CLI Configuration Tool Tutorial \#2

-----

## How to Start

### Download Config Tool

The latest version tool can be downloaded at [WIZnet-S2E-Tool github page](https://github.com/Wiznet/WIZnet-S2E-Tool).

### Use terminal program

For the CLI, you can use the terminal program built in the windows.  
Command prompt(cmd.exe) or windows powershell or ETC.

In this tutorial, will use command prompt.

 **Using cmd.exe**

You can go to the path where config tool is located after running cmd.exe, but if you go into the tool directory and run cmd, you can start from that path.

![](/img/products/configtool/option/cmd_direct.png)

-----

## Available Options

You can see available options and detail description as following command.

``` python
python wizconfig.py -h
```

![](/img/products/configtool/option/option_help.png)

**optional arguments:**

``` 
  -h, --help            show this help message and exit
  -d MACADDR, --device MACADDR
                        Device mac address to configuration
  -a, --all             Configuration about all devices (in mac_list.txt)
  -c, --clear           Mac list clear
```

**Configuration:**

``` 
  -s, --search          Search devices (in same network)
  -r, --reset           Reboot device
  -f, --factory         Factory reset
  -m ipaddr, --multiset ipaddr
                        Set IP address for all devices in 'mac_list.txt'. Parameter is first address.
  -u FWFILE, --upload FWFILE
                        Firmware upload from file
```

**General Options:**

``` 
  --alloc {0,1}         IP address allocation method (0: Static, 1: DHCP)
  --ip IP               Local ip address
  --subnet SUBNET       Subnet mask
  --gw GW               Gateway address
  --dns DNS             DNS server address
```

**Channel \#0 Options:**

``` 
  --port0 PORT0         Local port number
  --nmode0 {0,1,2,3}    Network operation mode (0: tcpclient, 1: tcpserver, 2: mixed, 3: udp)
  --rip0 IP             Remote host IP address / Domain
  --rport0 PORT         Remote host port number
  --baud0 BAUD0         baud rate (300|600|1200|1800|2400|4800|9600|14400|19200|28800|38400|57600|115200|230400)
  --data0 {0,1}         data bit (0: 7-bit, 1: 8-bit)
  --parity0 {0,1,2}     parity bit (0: NONE, 1: ODD, 2: EVEN)
  --stop0 {0,1}         stop bit (0: 1-bit, 1: 2-bit)
  --flow0 {0,1,2}       flow control (0: NONE, 1: XON/XOFF, 2: RTS/CTS)
  --time0 TIME0         Time delimiter (0: Not use / 1~65535: Data packing time (Unit: millisecond))
  --size0 SIZE0         Data size delimiter (0: Not use / 1~255: Data packing size (Unit: byte))
  --char0 CHAR0         Designated character delimiter (00: Not use / Other: Designated character)
  --it timer            Inactivity timer value for TCP connection close
                        when there is no data exchange (0: Not use / 1~65535: timer value)
  --ka {0,1}            Keep-alive packet transmit enable for checking TCP connection established
  --ki number           Initial TCP keep-alive packet transmission interval value
                        (0: Not use / 1~65535: Initial Keep-alive packet transmission interval (Unit: millisecond))
  --ke number           TCP Keep-alive packet transmission retry interval value
                        (0: Not use / 1~65535: Keep-alive packet transmission retry interval (Unit: millisecond))
  --ri number           TCP client reconnection interval value [TCP client only]
                        (0: Not use / 1~65535: TCP client reconnection interval (Unit: millisecond))
```

**Channel \#1 Options:**

``` 
  --port1 PORT1         Local port number
  --nmode1 {0,1,2,3}    Network operation mode (0: tcpclient, 1: tcpserver, 2: mixed, 3: udp)
  --rip1 IP             Remote host IP address / Domain
  --rport1 PORT         Remote host port number
  --baud1 BAUD1         baud rate (300|600|1200|1800|2400|4800|9600|14400|19200|28800|38400|57600|115200|230400)
  --data1 {0,1}         data bit (0: 7-bit, 1: 8-bit)
  --parity1 {0,1,2}     parity bit (0: NONE, 1: ODD, 2: EVEN)
  --stop1 {0,1}         stop bit (0: 1-bit, 1: 2-bit)
  --flow1 {0,1,2}       flow control (0: NONE, 1: XON/XOFF, 2: RTS/CTS)
  --time1 TIME1         Time delimiter (0: Not use / 1~65535: Data packing time (Unit: millisecond))
  --size1 SIZE1         Data size delimiter (0: Not use / 1~255: Data packing size (Unit: byte))
  --char1 CHAR1         Designated character delimiter (00: Not use / Other: Designated character)
  --rv timer            Inactivity timer value for TCP connection close
                        when there is no data exchange (0: Not use / 1~65535: timer value)
  --ra {0,1}            Keep-alive packet transmit enable for checking TCP connection established
  --rs number           Initial TCP keep-alive packet transmission interval value
                        (0: Not use / 1~65535: Initial Keep-alive packet transmission interval (Unit: millisecond))
  --re number           TCP Keep-alive packet transmission retry interval value
                        (0: Not use / 1~65535: Keep-alive packet transmission retry interval (Unit: millisecond))
  --rr number           TCP client reconnection interval value [TCP client only]
                        (0: Not use / 1~65535: TCP client reconnection interval (Unit: millisecond))
```

**UART Command mode switch settings:**

``` 
  --te {0,1}            Serial command mode switch code enable
  --ss 3-byte hex       Serial command mode switch code (default: 2B2B2B)
```

**ETC options:**

``` 
  --cp {0,1}            TCP connection password enable [TCP server mode only]
  --np pw               TCP connection password (string, up to 8 bytes / default: None) [TCP server mode only]
  --sp value            Search identification code (string, up to 8 bytes / default: None)
  --dg {0,1}            Serial debug message enable (Debug UART port)
```

**Configuration from File:**

``` 
  --setfile SETFILE     File name to Set
  --getfile GETFILE     File name to Get info. Refer default command(cmd_oneport.txt or cmd_twoport.txt).
```

**<About Channel \#N Options\>**  
**1 Port S2E devices**  
Use Channel \#0 Options only.  
**2 Port S2E devices**  
Use both Channel \#0 Options & Channel \#1 Options.

-----

## Search devices

You can search for devices using the -s / --search option.

``` 
python wizconfig.py -s
```

Search result printed as standard out, and the mac address of the
searched devices is recorded in **mac\_list.txt** file.

If new device is found, it is displayed as 'New Device', and this is
determined by whether it is recorded in mac\_list.txt.

![](/img/products/configtool/option/option_search_new.png)

If you search for the same device again, you can see that 'New device'
is not displayed.

![](/img/products/configtool/option/option_search_old.png)

