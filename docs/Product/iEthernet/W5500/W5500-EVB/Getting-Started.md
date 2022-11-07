---
id: getting-started
title: Getting Started
date: 2020-04-07
---

## Connect your board

If you've just purchased W5500 EVB, follow below steps to start working with your board for the first time.

Connect your board to a PC using USB and connect LAN cable. **Don't forget : LAN cable should be
connected to the board**  
The W5500 EVB Need to be LAN cable connected because default demo
firmware checks the PHY link status periodically. If the LAN cable is not
connected, the board will not operate and RGB LED will not be not blinking.

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

![](/img/products/w5500/w5500_evb/figures/downloading_serial_printout_on_terminal.jpg)


#### 4. Loopback test

The loopback example runs with a TCP session and a UDP session.

First, Board and your PC should have the network config with the same
network range.  
If you want to modify board-side, edit the following code in
\[src\>\>LB\_main.c\] with the same range which your PC has.
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
      - Using [Hercules test program](https://www.hw-group.com/software/hercules-setup-utility) or
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
      - Using [Hercules test program](https://www.hw-group.com/software/hercules-setup-utility) or
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

W5500 EVB firmware project based on LPCXpresso IDE. For more details about LPCXpresso IDE, please refer to ![](/img/link.png) [NXP LPCXpresso platform page](http://www.lpcware.com/lpcxpresso).

**LPCXpresso IDE Install & Activation Guide**
![](/img/link.png) [How to Install and Activate LPCXpresso IDE](./How-to-Install-and-Activate-LPCXpresso-IDE.md)

**Download the Libraries and Application example source code for W5500-EVB** ![](/img/github.png) https://github.com/Wiznet/W5500_EVB


-----

## Download a new program

### Flash programming via UART

#### 1. W5500 EVB enter the ISP mode

Press the 'ISP' push button switch on board until turn on the board
after reset or power supply.

#### 2. Run the Flash Magic tool

Flash Magic is a program to perform in-system programming (ISP) of the
LPC flash via its UART.  
![](/img/products/w5500/w5500_evb/icons/link.png)['Flash Magic' download page](http://www.flashmagictool.com/)


#### 3. Tool settings

Set the settings on main window of Flash Magic program. It is easy to
set along with each step.  
The figure below shows the default configuration for W5500 EVB.

![](/img/products/w5500/w5500_evb/figures/downloading_nxp_flashmagic_3_tempsensor_box.jpg)

#### 4. Flash programming start

Press the 'Start' button on main window of Flash Magic program.

#### 5. Run the new program

After flash programming and board reset, The MCU is now running the
program;  
![](/img/products/w5500/w5500_evb/figures/downloading_serial_printout_on_terminal_tempsensor.jpg)

-----
