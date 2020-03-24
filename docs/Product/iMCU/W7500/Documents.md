---
id: documents
title: Documents
date: 2020-03-
---


## Content
\<markdown\> \#Documents The **DataSheet** provides the ordering
information and mechanical device characteristics of the W7500/W7500P
microcontrollers. The **Reference Manual** provides the register map of
peripherals and brief description. The **PHY Reference** provides the
How to Access W7500x PHY Register and description of W7500P Internal
PHY. The **Errata Sheet** describes error Phenomenon and solution . The
**Getting Started** user's guide describes the installation of MDK,How
to make KEIL new project for W7500, How to use MDK for W7500 Peripherals
Examples, How to use GCC for W7500 Peripherals Examples and How to use
ISP tool from starting a project to using the ISP tool. \</markdown\>

-----

\<WRAP group\>

\<WRAP half column\>

### Data Sheet

``` 
  * [[https://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:w7500x_ds_v110.pdf|W7500x Datasheet v1.1.0 - English]]
```

\</WRAP\>

\<WRAP half column\>

| Version | Date      | Decription                                           |
| ------- | --------- | ---------------------------------------------------- |
| V 1.1.0 | 20DEC2019 | Fixed 3.17 UART speed to 460.8 Kbit/s from 3 Mbit/s. |

\</WRAP\> \</WRAP\> \<WRAP group\>

\<WRAP half column\> \<wrap classes \#id width :language\> \</wrap\>
\</WRAP\>

\++++ Old Datasheet History |

| Version | Date      | Decription                                                                                                               |
| ------- | --------- | ------------------------------------------------------------------------------------------------------------------------ |
| V 1.0.0 | 18SEP2017 | Initial Release                                                                                                          |
| V 1.0.1 | 26OCT2017 | Fixed value Driving Strength condition in PADCON.                                                                        |
| V 1.0.2 | 09NOV2017 | Fixed Typo I/O Pad Characteristics VOL description (high -\> low)                                                        |
| V 1.0.3 | 30NOV2017 | Fixed figure 8. (W7500P Pin out)                                                                                         |
| V 1.0.4 | 18DEC2017 | Add Reset & PLL characteristics.                                                                                         |
| V 1.0.5 | 30JAN2018 | 1\. Fixed figure 8 (W7500P Pin layout) / Added subhead (4.2.1 W7500, 4.2.2 W7500P) / Fixed table 8(modified Symbol name) |
| :::     | :::       | 2\. Modified SRAM description (2. Description)                                                                           |
| V 1.0.6 | 05FEB2018 | Add info about W7500P power consumption.(Current Characteristics)                                                        |
| V 1.0.7 | 27JUL2018 | Fixed figure 2. CRG Diagram (Input Information of WDOGCLK, TIMCLK0,TIMCLK1).                                             |
| V 1.0.8 | 17OCT2018 | Fixed Power Supply description                                                                                           |
| V 1.0.9 | 11NOV2019 | Fixed Power Supply description                                                                                           |

\++++ \</WRAP\>

-----

\<WRAP group\>

\<WRAP half column\>

### Reference Manual

  - [W7500x Reference Manual v1.1.2 -
    English](https://wizwiki.net/wiki/lib/exe/fetch.php?media=:products:w7500:w7500x_rm_v112_20181017_.pdf)

\</WRAP\>

\<WRAP half column\>

| Version | Date      | Decription                    |
| ------- | --------- | ----------------------------- |
| V 1.1.2 | 17OCT2018 | Edit Power supply description |

\</WRAP\>\</WRAP\>

\<WRAP group\>

\<WRAP half column\> \<wrap classes \#id width :language\> \</wrap\>
\</WRAP\> ++++ Old Reference Manual History | ^ Version ^Date ^
Decription| | V 1.0.0 | 18SEP2017| Initial Release | | V 1.0.1 |
12OCT2017| Edit Flash Chapter.| | V 1.0.2 | 26OCT2017| Edit GPIO,PADCON
Register and added Open Drain function| | V 1.0.3 | 27OCT2017| TCKCNTR,
RTR, Sn\_RTR, Sn\_KATMR Additional description added.| | V 1.0.4 |
09NOV2017| Edit PADCON register description CS,DS inverted value.| | V
1.0.5 | 17NOV2017| Edit UARTCR register description about UARTEN.| | V
1.0.6 | 29NOV2017| Edit WZT
