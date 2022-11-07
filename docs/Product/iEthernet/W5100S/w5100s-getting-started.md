---
id: w5100s-getting-started
title: Getting Started with W5100S-EVB
date: 2020-04-09
---

## Check the board

**If you've just purchased W5100S-EVB, follow the procedure below**  
Connect your board to a PC using USB and connect LAN cable. **USB is
Micro B USB type.** W5100S-EVB can use either Micro USB B type or
DC-JACK(DC-5V)
:::important
**Don't forget: It must be supplied DC-5V**  
The W5100S-EVB can use both Micro USB B type or DC-JACK for the power
supply. 
:::
:::tip
When users connect to LAN cable, users should check
RJ-45(ethernet connector) LEDs. There are two indicator LEDs in RJ-45.
Orange LED indicates 100M ACT. Green LED indicates LINK.
:::
-----

## Hello World

This section is descriptive to W5100S-EVB operation. Follow the
points for the board operation. W5100S-EVB supported to eclipse loopback
example code. Make new W5100S-EVB Project by clicking on this link. If
you want to know "How to download the program" click on this link.

#### 1. Serial Debug message print out

The board outputs serial "debug" message via Micro B USB port (virtual
COM Port). This will give you info about network configuration and
loopback socket.  
Check the virtual COM port number in your system's properties.  
Please connect with any terminal to that serial port with
**115200.8.N.1**.

![](/img/products/w5100s/w5100s_evb/serial_debug_v2.png)

#### 4\. Loopback test

If you need detailed figures, please refer to the below link.  
![](/img/products/w5500/w5500_evb/icons/link.png) [TCP and UDP loopback test](../../Open-Source-Hardware/cookie#tcp-server-loopback)

The loopback example runs with a TCP session and a UDP session.

First, Board and your PC should have the network config with the same
network range.  
If you want to modify board-side, edit the following code in
\[src\>\>LB\_main.c\] with the same range which your PC has. If you want
to modify your PC-side, refer to [IP configuration](../../Open-Source-Hardware/cookie#ip-configuration).

``` cpp
wiz_NetInfo gWIZNETINFO = { .mac = {0x00, 0x08, 0xdc,0x00, 0xab, 0xcd}, //<-mac should be unique.
                            .ip = {192, 168, 11, 15},
                            .sn = {255,255,255,0},
                            .gw = {192, 168, 11, 1},
                            .dns = {168,126,63,1},
                            .dhcp = NETINFO_STATIC };
```

##### TCP

1.  Connect to Board 
      - Using [Hercules test program](../../Open-Source-Hardware/cookie#tcp-server-loopback) or
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
      - Using [Hercules test program](../../Open-Source-Hardware/cookie#tcp-server-loopback) or
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

W5100S-EVB firmware project based on Eclipse IDE. For more details about
Eclipse IDE, please refer to below link.
:::note
** Download the Libraries and Application example source code for W5100S-EVB **  
![](/img/products/w5500/w5500_evb/icons/github.png)(https://github.com/Wiznet/W5100S-EVB)
:::
-----

## How to upload firmware

### Flash programming via UART

#### 1. How to use W5100S-EVB ISP mode

Press the 'Boot0' push button switch on board until turn on the board
after reset or power supply.

#### 2. Run the STMicroelectronics Flash loader demonstrator

STMicroelectronics Flash loader demonstrator is a program to perform
in-system programming (ISP) of the MCU flash via its UART.  
![](/img/products/w5500/w5500_evb/icons/link.png) ['ST Flash loader demonstrator' download page](http://www.st.com/en/development-tools/flasher-stm32.html)

#### 3. Tool settings

Set the settings on main window of Flash loader demonstrator program. It
is easy to set along with each step.  
The figure below shows the default configuration for W5100S-EVB.

![](/img/products/w5100s/w5100s_evb/flash_down.png)

#### 4. Click to 'Next' button

refer to below pictures If you do not go to the next page in flash
loader demonstrator, users try again this action. 'Press the 'Boot0'
push button switch on board until turn on the board after reset or power
supply.' ![](/img/products/w5100s/w5100s_evb/flash_down2.png)
![](/img/products/w5100s/w5100s_evb/flash_down3.png)
![](/img/products/w5100s/w5100s_evb/flash_down4.png)
![](/img/products/w5100s/w5100s_evb/flash_down5.png)

#### 5. Run the new program

After finish to flash programming and board reset, The MCU do running the program  
When the running to loopback program, as below picture serial debug message print out.

![](/img/products/w5100s/w5100s_evb/serial_debug_v2.png)

-----
