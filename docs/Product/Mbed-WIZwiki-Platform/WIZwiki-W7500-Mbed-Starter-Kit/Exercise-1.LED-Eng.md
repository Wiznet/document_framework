---
id: exercise-1-led-eng
title: Exercise 1. LED(Eng)
date: 2020-04-08
---

# Blinking LED

## Outline

Users can connect the mbed platform board with the PC and compile
online. Users can also blink the LED using the example program provided
for the platform board.

## What you need

  - WIZwiki-W7500 board
  - USB cable

## Log on to mbed website

Please log on to 🌎[mbed website](https://os.mbed.com)mbed website
for further testing. If you haven’t signed up yet, please sign up.
[Sign-up at ARM mbed Developer Site](./Sign-up-at-ARM-mbed-Eng.md)

#### Connect the PC with mbed platform board

Connect the PC with WIZwiki-W7500 using the USB cable.
![](/img/products/wizwiki_mbed_kit/kit_en/bd_usb_connected.jpg) The PC will
read the driver like a USB driver.

#### Open the mbed compiler

Click “Open mbed Compiler” as shown below.

![](/img/products/wizwiki_mbed_kit/kit_en/105_wizwiki.png)

A pop-up will appear and “Blinky LED Hello World” will be set as the
template and “mbed\_blinky” will be set as the Default program name.

![](/img/products/wizwiki_mbed_kit/kit_en/106_program_name.png)

Click OK and the mbed\_blinky program will be copied to my Program
Workspace.

![](/img/products/wizwiki_mbed_kit/kit_en/107_mbed_blinky_main.png)

Clik the Compile icon from the menu to compile the example code. Success
message will appear below if an error is not occurred during compiling.

![](/img/products/wizwiki_mbed_kit/kit_en/108_compile_end.png)

Once compiling is successful, download the
mbed\_blinky\_WIZWIKI-W7500.bin file to the PC.

![](/img/products/wizwiki_mbed_kit/kit_en/109_bin.png)
### Example Code

``` c
#include "mbed.h"

DigitalOut myled(LED1);

int main(/) {
    while(1) {
        myled = 1;
        wait(0.2);
        myled = 0;
        wait(0.2);
    }
}
```

### Run exercise and Check test result

Copy and paste the mbed\_blinky\_WIZWIKI\_W7500.bin file to the mbed
driver (E: or F:) ![](/img/products/wizwiki_mbed_kit/kit_en/110_copy.png)

Then press the reset pin. The LED (blue circle) shown in the below image
will blink every 0.2 second. ![WIZwiki-W7500 LED1](/img/products/wizwiki_mbed_kit/kit_en/wizwiki_led1.png)

If the LED blinks successfully, it means that the example code is
operating on the WIZwiki-W7500 board. This exercise making the LED blink
is called “Hello World.”

Users can test with different time value of the wait function.

## Related Links

   * [Starter Kit Tutorial](./Tutorial-Eng.md)