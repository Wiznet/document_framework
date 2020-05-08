---
id: exercise_3_switch_eng
title: Exercise 3. Switch(Eng)
date: 2020-04-08
---

# Exercise 3. Blinking LED with a switch

## Outline

This is an exercise to blink an LED with a switch. Users can learn how
to put digital input into the WIZwiki board with a switch. Users can
learn how to get digital output from a specified pin in the WIZwiki
board.

## What you need

  - WIZwiki-W7500
  - USB cable
  - Breadboard
  - Jumper wire
  - Switch
  - LED
  - Resistor (330 Ohm)
  - Test S/W : In order to check serial data, terminal program is
    required on the PC. Tera Term is used in this exercise.

![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/2_teraterm.png)

## Hardware

### The Circuit

This is the circuit for this example. ![Button and
LED](/document_framework/img/products/wizwiki_mbed_kit/kit_en/button_led_scheme.png)

The LED for this example is placed on the WIZwiki board and it is shown
in the red box in the cicuit below. ![RGB
LED](/document_framework/img/products/wizwiki_mbed_kit/kit_en/3_board_all.png)

### Connections

![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/3_board_all.png)

## Software

### Example Code

Below are the example codes. Delete the default code and copy/paste the
codes below and compile.

``` c
#include "mbed.h"

DigitalOut myled(LED1);
DigitalIn mybutton(D6);

int main() {
    while(1) {
        if (mybutton == 1)
          myled = 0;
        else
          myled = 1;
    }
}
```


### How to run and test result

DigitalOut myled(LED1) part configures LED1 as an output mode. DigitalIn
mybutton(D6) part configures D6 pin as an input mode.

When pushing a button, the LED turns on. When 3.3V drives to D6 pin,
mybutton will be recognized as “1”, myled becomes “0”. When myled
becomes “0”, then the LED1 on the WIZwiki board turns on.

When you release the button, the LED turns off.

To learn Class and API like the DigitalOut and DigitalIn parts of the
above example code, refer to the mbed Handbook page.
🌎https://developer.mbed.org/handbook/Homepage


## Related Links

   * [Starter Kit Tutorial](Tutorial(Eng).md)


## Next Exercise

   * [Exercise 4. Ringing a buzzer with PWM](Exercise_4._PWM(Eng).md)
