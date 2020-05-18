---
id: network_exercise_2_led_with_tcp_eng
title: Network Exercise 2. LED with TCP(Eng)
date: 2020-04-08
---


# Network Exercise 2. Controlling LED with TCP communication

## Outline

This is an exercise to turn LED on and off from remote site using TCP
protocol. The PC runs as a TCP Client and the WIZwiki board runs as a
TCP Server. User can learn how to control the component (LED) connected
to WIZwiki board using the TOE (TCP/IP Offload Engine) of W7500.

## What you need

  - WIZwiki-W7500
  - USB cable
  - LAN cable
  - Hub switch (Router with DHCP function)

## Hardware

### The Circuit

No special circuit.

### Connections

Connect the PC and the router (with DHCP function) with LAN cable.
Connect the router and the WIZwiki board with LAN cable. Connect the PC
and the WIZwiki board with USB cable.

![](/img/products/wizwiki_mbed_kit/kit_en/tcp_loopback_system_config_en.png)


## Software

### Test Software

  - Terminal program
      - EX) Teraterm, Hercules, Hyperterminal, etc.
      - It is for serial port message checking
      - Refer to the next link for the serial port example

<!-- end list -->


  * [Exercise 2. Data output using serial port](Exercise_2._Serial_port(Eng).md)


  - TCP/IP Client Server terminal program
      - EX) Hercules, etc.
      - It is for transmitting message using the TCP/IP Client Server
        terminal

### Example Code

Use the example code in the page below.
🌎https://developer.mbed.org/teams/WIZnet/code/TCP_LED_Control-WIZwiki-W7500/

### How to run and test result

Execute serial terminal in PC. First press the Reset button of WIZwiki
board and check messages. User can see that Server IP Address (ex:
192.168.0.8) is assigned by DHCP function.

![](/img/products/wizwiki_mbed_kit/kit_en/tcp_led_dhcp_1.jpg)

Execute Hercules program in PC. Select TCP Client menu and configure the
IP and Port. If user types the target Server IP Address (ex:
192.168.0.8) and clicks the Ping button, this image will be shown.
![](/img/products/wizwiki_mbed_kit/kit_en/tcp_led_client_1.jpg)

The output message made by TCP server is shown in Terterm. User can know
the Client (PC) is connected to Server (WIZwiki board). (ex: Connection
from: 192.168.0.6)

![](/img/products/wizwiki_mbed_kit/kit_en/tcp_led_server_1.jpg)

Now let's control the LED on the WIZwiki board. When the TCP Client of
the PC sends **"LED\_ON"** message to the WIZwiki board (TCP Server),
then the LED turns on. Click the "Send" button on the red part in the
figure below.
![](/img/products/wizwiki_mbed_kit/kit_en/tcp_led_on_client.jpg)

If the LED\_ON message is parsed (translated) at the TCP Server side,
then LED turns on. Check the LED light on the blue circle turns on.

![](/img/products/wizwiki_mbed_kit/kit_en/tcp_led_on_off.png)

Besides the LED turn on, the other message is shown The TCP Client sends
message to WIZwiki board (TCP Server), then WIZwiki board sends reversed
message to TCP Client. Check the message returned back from Server on
Teraterm in the figure below.

![](/img/products/wizwiki_mbed_kit/kit_en/tcp_led_on_server.jpg)

If **"Any messsage"**(ex: TEST) except the "LED\_ON" message to the
WIZwiki board (TCP Server), then the LED turns off.

![](https://github.com/Wiznet/document_framework/blob/master/static/img/products/wizwiki_mbed_kit/kit_en/tcp_led_off_client.jpg)

Besides the LED turn off, the other message is shown The TCP Client
sends message to WIZwiki board (TCP Server), then WIZwiki board sends
reversed message to TCP Client. Check the message returned back from
Server on Teraterm in the figure below.

![](/img/products/wizwiki_mbed_kit/kit_en/tcp_led_off_server.jpg)

Check the LED light on the blue circle turns off.

![](/img/products/wizwiki_mbed_kit/kit_en/tcp_led_on_off.png)


## Learning Resources

The WIZnet team page in the ARM mbed provides mbed libraries and
examples for WIZnet products.

  - 🌎[WIZnet Team page](https://developer.mbed.org/teams/WIZnet/)

There are mbed libraries below which are used for Hardware TCP/IP chip
(W5500) and WIZnet TCP/IP Offload Engine (W7500).

  - 🌎[WIZnetInterface page](https://developer.mbed.org/teams/WIZnet/code/WIZnetInterface/)
    

## Related Links

  * [Starter Kit Tutorial](Tutorial(Eng).md)
