---
id: getting_started
title: Getting Started
date: 2020-04-07
---

## Content

# Getting Started

## Hello World

If you've just purchased W5500 EVB, let the following points for the
checking board operation at the first time.

Connect your board to a PC using USB and connect LAN cable. \<WRAP
center round important 80%\> **Don't forget : LAN cable should be
connected to the board**  
The W5500 EVB Need to be LAN cable connected because default demo
firmware check the PHY link status periodically. If the LAN cable is not
connected, the board does not operate and RGB LED is not blinking.
\</WRAP\>

#### 1. RGB LED blinky

If the board operate normal at the first time, On board RGB LED is
blinking forever. The red, green and blue LEDs are blink alternated.

#### 2. On/Off the RGB LED blinky

The RGB LED status will be changed if the button1 (SW1) pressed (LED
Blinky On/Off). In this case, the board outputs 'On' or 'Off' message
via serial debug port.

#### 3. Serial Debug message print out

The board outputs serial "debug" message via USB port (virtual COM
Port). This will give you info about network configuration and loopback
socket.  
Check the the virtual COM port number in your systems properties.  
Please connect with any terminal to that serial port with
**115200.8.N.1**.

![](/products/w5500/w5500_evb/figures/downloading_serial_printout_on_terminal.jpg)

#### 4. Loopback test

\<WRAP center round tip 80%\> The following is the
![](/products/w5500/w5500_evb/icons/link.png) [loopback test procedure
of the 'Tinygecko' board + W5500
chip](/osh/energymicro/tinygecko#loopback). (Network configuration
information can vary among different firmware.)  
Please progress the test in accordance with the following procedure.  
If you need detailed figures, please refer to the next link.  
![](/products/w5500/w5500_evb/icons/link.png) [loopback\_test\#TCP and
UDP loopback
test](/osh/cookie/loopback_test#TCP%20and%20UDP%20loopback%20test)
\</WRAP\>

The loopback example runs with a TCP session and a UDP session.

First, Board and your PC should have the network config with the same
network range.  
If you want to modify board-side, edit the following code in
\[src\>\>LB\_main.c\] with the same range which your PC has. If you want
to modify your PC-side, refer to [IP
configuration](/osh/cookie/ip_conf_b).

``` cpp
wiz_NetInfo gWIZNETINFO = { .mac = {0x00, 0x08, 0xdc,0x00, 0xab, 0xcd}, //<-mac should be unique.
                            .ip = {192, 168, 1, 123},
                            .sn = {255,255,255,0},
                            .gw = {192, 168, 1, 1},
                            .dns = {0,0,0,0},
                            .dhcp = NETINFO_STATIC };
```

##### TCP

1.  Connect to Board 
      - Using [Hercules test program](/osh/cookie/loopback_test) or
        others, try to connect to board with xxx.xxx.xxx.xxx listen port
        5000.
2.  When connected
      - send data to board 
      - check whether the loopback data is same to what it sent before.
3.  When failed to connect
      - Check link status.
      - Check ping test
      - Check network config.
      - Check the security program as virus vaccines and fire-wall on
        your PC. 

##### UDP

1.  Send data
      - Using [Hercules test program](/osh/cookie/loopback_test) or
        others, send to board's xxx.xxx.xxx.xxx port 3000.
2.  When success
      - check to the loopback data
3.  When fail 
      - Check link status.
      - Check ping test
      - Check network config.
      - Check the security program as virus vaccines and fire-wall on
        your PC. 

-----

## Firmware

![firmware](/page\>products/w5500/w5500_evb/firmware)

-----

## Downloading a new program

### Flash programming via UART

#### 1. W5500 EVB enter the ISP mode

Press the 'ISP' push button switch on board until turn on the board
after reset or power supply.

#### 2. Run the Flash Magic tool

Flash Magic is a program to perform in-system programming (ISP) of the
LPC flash via its UART.  
![](/products/w5500/w5500_evb/icons/link.png)['Flash Magic' download
page](http://www.flashmagictool.com/)

#### 3. Tool settings

Set the settings on main window of Flash Magic program. It is easy to
set along with each step.  
The figure below shows the default configuration for W5500 EVB.

![](/products/w5500/w5500_evb/figures/downloading_nxp_flashmagic_3_tempsensor_box.jpg)

#### 4. Flash programming start

Press the 'Start' button on main window of Flash Magic program.

#### 5. Run the new program

After flash programming and board reset, The MCU is now running the
program;  
![](/products/w5500/w5500_evb/figures/downloading_serial_printout_on_terminal_tempsensor.jpg)

-----
