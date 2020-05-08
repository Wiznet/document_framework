---
id: exercise_7_photoresistor_eng
title: Exercise 7. Photoresistor(Eng)
date: 2020-04-08
---

# Tutorial Example 7. Reading light sensor value

## summary

This is an example of reading the light sensor value using ADC. Convert the analog value to a formula and serial it with a value between 0 \ ~ 3.3V
It shows on the screen through the port. Turns the LED on or off compared to the specified analog value.

## materials

  - WIZwiki-W7500 board
  - USB cable
  - Breadboard
  - Jumper wire
  - PGM5537D (CDS Photo Resistor)

## hardware

### Schematic

The overall circuit diagram is as follows.

![](/products/wizwiki_mbed_kit/kit_kr/cds_sensor_schem.png)

### Connection diagram

![](/products/wizwiki_mbed_kit/kit_kr/exam_cds_sensor.png)

## software

### Example Code

Here is an example code.

Open the page below and compile by importing the program with "Import this program".

🌎https://developer.mbed.org/teams/IOP/code/CDS_HelloWorld_WIZwiki-W7500/

Or, compile after copying and pasting the following code to main.c in the mbed environment.

``` c
#include "mbed.h"
 
DigitalOut redled(LED1); // RED
DigitalOut blueled(LED3); // BLUE
AnalogIn CDS(A0);
 
int main() {
    printf("Hello WizWIki-W7500!\n\r");
    printf("===========================================\n\r");
    
    int CDS_data = 0;
    double CDS_vol = 0;
    
    while(1) {
        CDS_data = CDS.read()*1000;
        CDS_vol = CDS.read()*3.3;
        
        //CDS Seneor ADC Low Data
        printf("CDS Data : %3d\r\n",CDS_data);      
        //CDS Sensor Voltage data
        printf("CDS Voltage : %3.3lfV\r\n",CDS_vol);
        printf("===========================================\n\r");
        
        wait(1);     
        //Status is bright.
        if(CDS_data < 500){
            redled = 1;
            blueled = 0;
        }
        //Status is dark.
        else  {
            redled = 0;
            blueled = 1;
        }
    }
}
```

### Methods and results

The following is an example execution screen. The CDS value and the CDS voltage value measured based on 3.3V are shown alternately.
! [] (/ products / wizwiki_mbed_kit / kit_kr / cds_sensor_result.jpg)

## Learning materials

Refer to the link below for the specifications of the illuminance sensor.


 * [Kit data sheet]()


## Related Links

 * [Starter Kit Tutorial]()
