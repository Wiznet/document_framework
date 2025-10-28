---
id: kit-parts-datasheet
title: Kit parts datasheet
date: 2020-04-08
---

## Kit Includes

``` 
           Part Name                         Description                       Q.Ty
      WIZwiki-W7500        ARM Cortex-M0 Test Board                              1
      USB cable            USB Mini-B, 1meter                                    1
      LAN cable            CAT5, 1meter                                          1
      Breadboard           55 x 85 mm                                            2
      Resistor (330 Ohm)   1/4W J(5%) 330 Ohm                                    20
      Resistor (10K Ohm)   1/4W J(5%) 10K Ohm                                    20
      Pushbutton Switch    Momentary Pushbutton Switch                           4
      LED (Red)            5pi DIP type Red LED                                  5
      LED (Green)          5pi DIP type Green LED                                5
      LED (Yellow)         5pi DIP type Yellow LED                               5
      LED (RGB)            RED/GREEN/BLUE Triple Color LED                       3
      Rotary Potentiometer Rotary Potentiometer / 10K Ohm                        1
      Humidity & Temp Sensor DHT11 (Humidity & Temperature Sensor)               1
      Temperature Sensor   TMP36GT9 (Low Voltage Temperature Sensor)             1
      Photo Resistor       PGM5537D (CDS Photo Resistor)                         1
      Magnetic Buzzer      SM-1205C (Magnetic Buzzer)                            1
      Jumper Wire (M/M)    Various Colors, 26 AWG, 6" (15 cm) Jumper wires      40
      Jumper Wire (M/F)    Various Colors, 26 AWG, 8" (20 cm) Jumper wires      10
```

## Datasheet

#### LED (RGB)

![](/img/products/wizwiki_mbed_kit/kit_kr/rgb_led_common_anode.jpg)

  * Common Anode type
  * There are three LEDs (RED, GREEN, BLUE) in a part.
  * There are 4 leads. Each LED has one negative lead, three LEDs has common positive lead.
  * Common Anode lead is the longest one among 4 leads. This lead should be connected to 3.3V.


-----

#### DHT11 (Humidity & Temperature Sensor)

![](/img/products/wizwiki_mbed_kit/kit_kr/dht-11.png)


  * Measure Temperature and Humiditiy
  * Humidity Measurement Range: 20 - 90%, 0 - 50 ℃
  * Humidity Accuarcy : +/- 5% RH
  * Temperature Accuarcy : +/- 2 ℃
  * Datasheet: <a href="/img/products/wizwiki_mbed_kit/kit_kr/datasheet-dht11.pdf" target="_blank">Download</a>
  * Reference: https://learn.adafruit.com/downloads/pdf/dht.pdf


-----

#### Temperature Sensor TMP36GT9 (Low Voltage Temperature Sensor)

![](/img/products/wizwiki_mbed_kit/kit_kr/tmp36gt9.jpg)
![](/img/products/wizwiki_mbed_kit/kit_kr/tmp36gt9_pin.png)


* Vs : 3.3V Power Supply
* Vout : It should connected to ADC input
* GND : It should connected to Ground.
* Datasheet: <a href="/img/products/wizwiki_mbed_kit/kit_kr/tmp35_36_37.pdf" target="_blank">Download</a>
* Reference: http://www.analog.com/media/en/technical-documentation/data-sheets/TMP35_36_37.pdf


-----

#### Photo Resistor PGM5537D (CDS Photo Resistor)

![](/img/products/wizwiki_mbed_kit/kit_kr/light-detecting-resistor.jpg)

  * A photoresistor or light-dependent resistor (LDR) or photocell is a light-controlled variable resistor.
  * The resistance of a photoresistor decreases with increasing incident light intensity; in other words, it exhibits photoconductivity.
  * A photoresistor can be applied in light-sensitive detector circuits, and light- and dark-activated switching circuits.
  * Datasheet: <a href="/img/products/wizwiki_mbed_kit/kit_kr/cds-resistor-pgm.pdf" target="_blank">Download</a>

-----