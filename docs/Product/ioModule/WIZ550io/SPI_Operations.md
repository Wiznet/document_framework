---
id: spi_operations
title: SPI Operations
date: 2020-04-15
---


## Content
## SPI Operations

There is a W5500 inside WIZ550io. Therefore SPI operation of WIZ550io
follows one of W5500. For more information about SPI operation of
WIZ550io, please refer to W5500 Datasheet.
![datasheet](/page\>products/w5500/datasheet)

### Datasheet

[W5500 Datasheet v1.0.9 - English]()
[W5500 Datasheet v1.0.9 - Korean]()

### Datasheet History

|Version|	Date|	Description|
|-------|-----|------------|
|1.0.0|	2013-08-01|	Initial Release|
|1.0.1|	2013-09-13|	Corrected duplicated statements and typing errors (P.14, 23, 24, 28, 39, 51) Corrected descriptions (P.35)|
|1.0.2|	2013-11-14|	Changed “descriptions of pin at 1.1 Pin Descriptions” (P.10) starting ”It must be tied to GND to NC (PIN38..42)” / 2. corrected typing error: starting “0x02 to 0x42 value of SOCK_MACRAW at 4.2 Socket Registers(P.50)”|
|1.0.3|	2014-05-29	|Corrected “Sn_MSSR at 4.2 Socket Register” (P.53): wrong descriptions of Sn_MSSR about FMTU/MTU|
|1.0.4|	2014-06-13|	1. Added Note about reading size register value (P.56, 58) / 2. Added IR Reflow Temperature Profile (P.66)|
|1.0.5	|2014-11-11	|1. Added description for MISO pin (P.11):The SCSn signal defines MISO pin output value / 2. Modified the register notation (P.33), Modified the register notation “Sn_IR at 4.2 Socket Register” (P.49) :from [R] to [RCW1] / 3. Corrected typing error: from DICON to DISCON of Sn_SR at 4.2 Socket Register (P.50)|
|1.0.6|	2014-12-30|	Corrected typing error : from 0x02 to 0x42 value of SOCK_MACRAW “Sn_CR at 4.2 Socket Registers”(P.46)|
|1.0.7|	2016-02-24|	1. Corrected Interrupt Assert Wait Time function (P.34) / 2. Notice PLLclk is 150MHz (P.34)|
|1.0.8|	2017-05-19|	1. Corrected Driver Level Range Unit uW/MHz to uW (P.60)|
|1.0.9|	2019-05-22|	1. Corrected Sn_IMR Description (P.55) 2. Corrected Junction temperature Min value TJ (P.57) 3. Added Maximum junction temperature TJMAX (P.58)|

### WIZ550io History

|Version	|Date|	Description|
|---------|----|-------------|
|1.0	|2013-08-01|	Initial Release|
|1.1|	2014-01-17	|Changed “External Transformer + RJ-45 to MAGJACK(inside transformer)”|
|1.2|	2015-04-20|	Added “Resistor 33R in MDI line. because EMI issue.”Changed “PCB artwork. because changed develop tool(PADS → Altium)”|
|1.3|	2018-08-10|	Modified “inner 2 layer copper foil (3V3D). This copper foil plated below of CHAND area. It may affect ESD.”|
