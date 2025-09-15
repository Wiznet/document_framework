---
id: exercise-2-serial-port-eng
title: Exercise 2. Serial port(Eng)
date: 2020-04-08
---

# Data Output using Serial Port

## Outline

Users can use the WIZwiki board’s serial port to send data to PC or
enter data in the PC and send it to the WIZwiki board. This exercise
will show users how to check messages on the PC while the implemented
code is operating on the WIZwiki-W7500 board.

## What you need

  - PC
  - WIZwiki-W7500
  - USB cable
  - Test S/W : In order to check serial data, terminal program is
    required on the PC. Tera Term is used in this exercise.

![](/img/products/wizwiki_mbed_kit/kit_en/2_teraterm.png)

## Hardware

Connect the PC with WIZwiki-W7500 using the USB cable.

![](/img/products/wizwiki_mbed_kit/kit_en/bd_usb_connected.jpg)

## Software

### Example Code

Below are the example codes. Delete the default code and copy/paste the
codes below and compile.

``` c
#include "mbed.h"

DigitalOut myled(LED1);
Serial pc(SERIAL_TX, SERIAL_RX);

int count_blink = 0;

int main(/) {
    while(1) {
        myled = 1;
        //pc.printf("myled = 1\n");
        wait(0.2);
        myled = 0;
        //pc.printf("myled = 0\n");
        wait(0.2);
        count_blink++;
        pc.printf("The number of blink = %d\n", count_blink);
    }
}
```
### How to run and test result

First, change the program name from ‘mbed-blinky’ to any name (ex:
serial).

![](/img/products/wizwiki_mbed_kit/kit_en/2a.png)

![](/img/products/wizwiki_mbed_kit/kit_en/2b.png)

Go to Program Workspace and select main.cpp and edit. Delete the default
code and copy/paste the example codes and compile. Set the Tera Term as
shown below. ![](/img/products/wizwiki_mbed_kit/kit_en/2c.png)

If the user connects the WIZwiki board with the PC, the port will be
added. Select COM11 (COM \# could vary depending on the user’s PC).
![](/img/products/wizwiki_mbed_kit/kit_en/2d.png)

The program results are as below.
![](/img/products/wizwiki_mbed_kit/kit_en/2e.png)

## Another example

  - Serial\_HelloWorld\_WIZwiki-W7500

This example can do both data output and input and is created by the
WIZnet team. Click the link below and open main.cpp to copy/import/test
the code.

🌎https://os.mbed.com/teams/WIZnet/code/Serial_HelloWorld_WIZwiki-W7500/

## Related Links

   * [Starter Kit Tutorial](./Tutorial-Eng.md)