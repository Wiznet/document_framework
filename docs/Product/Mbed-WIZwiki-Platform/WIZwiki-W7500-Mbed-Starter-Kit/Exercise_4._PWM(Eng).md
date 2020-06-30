---
id: exercise_4_pwm_eng
title: Exercise 4. PWM(Eng)
date: 2020-04-08
---

# Ringing a buzzer with PWM

## Outline

This is an exercise to ringing a buzzer with PWM. The PWM stands for
Pulse Width Modulation. The PWM is used for making digital waveform
which has specific pulse width. The PWM module of W7500 chip embdded in
WIZwiki board can makes various digital waveform. Using this PWM, user
can make high or low tone sound, control LED brightness and control
motor speeds.


## What you need

  - WIZwiki-W7500
  - USB cable
  - Breadboard
  - Jumper wire
  - Magnetic Buzzer


## Hardware

### The Circuit

This is the circuit for this example.
![](/img/products/wizwiki_mbed_kit/kit_en/4_pwm_buzzer_schem.png)


### Connections

![](/img/products/wizwiki_mbed_kit/kit_en/4_board_all.jpg)


## Software

### Example Code

Below are the example codes. Delete the default code and copy/paste the
codes below and compile.

``` c
#include "mbed.h"

#define VOLUME 0.02
#define BPM 100.0

PwmOut pwm_pin(D3);

// Plays a sound with the defined frequency, duration, and volume
void playNote(float frequency, float duration, float volume) {
    pwm_pin.period(1.0/frequency);
    pwm_pin = volume/2.0;
    wait(duration);
    pwm_pin = 0.0;
}

int main()
{
    float beat_duration;

    // Calculate duration of a quarter note from bpm
    beat_duration = 60.0 / BPM;

    // Loop forever
    while(1) {

playNote(261.626, (0.75 * beat_duration), VOLUME);
playNote(329.628, (0.75 * beat_duration), VOLUME);
playNote(391.995, (0.75 * beat_duration), VOLUME);

playNote(261.626, (0.75 * beat_duration), VOLUME);
playNote(329.628, (0.75 * beat_duration), VOLUME);
playNote(391.995, (0.75 * beat_duration), VOLUME);
                        
playNote(440.000, (0.75 * beat_duration), VOLUME);
playNote(440.000, (0.75 * beat_duration), VOLUME);
playNote(440.000, (0.75 * beat_duration), VOLUME);
playNote(391.995, ((2 * beat_duration) - 0.1), VOLUME);
wait(0.1);

playNote(349.228, (0.75 * beat_duration), VOLUME);
playNote(349.228, (0.75 * beat_duration), VOLUME);
playNote(349.228, (0.75 * beat_duration), VOLUME);

playNote(329.628, (0.75 * beat_duration), VOLUME);
playNote(329.628, (0.75 * beat_duration), VOLUME);
playNote(329.628, (0.75 * beat_duration), VOLUME);

playNote(293.665, (0.75 * beat_duration), VOLUME);
playNote(293.665, (0.75 * beat_duration), VOLUME);
playNote(293.665, (0.75 * beat_duration), VOLUME);

//playNote(261.626, ((2 * beat_duration) - 0.1), VOLUME);
playNote(261.626, ((3 * beat_duration) - 0.1), VOLUME);
wait(0.1);

    }
}
```
### How to run and test result

When you download the compiled binary to the WIZwiki board and push the
reset button, then the PWM digital signal drives a buzzer and plays a
simple music.

## Learning Resources

  - PWM

🌎https://en.wikipedia.org/wiki/Pulse-width_modulation

  - Piano key frequencies

🌎https://en.wikipedia.org/wiki/Piano_key_frequencies


## Related Links

   * [Starter Kit Tutorial](tutorial_eng)
