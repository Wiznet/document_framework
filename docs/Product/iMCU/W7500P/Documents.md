---
id: documents
title: Documents
date: 2020-04-03
---


The **DataSheet** provides the ordering information and mechanical device characteristics of the W7500/W7500P microcontrollers.  
The **Reference Manual** provides the register map of peripherals and brief description.  
The **PHY Reference** provides the How to Access W7500x PHY Register and description of W7500P Internal PHY.  
The **Errata Sheet** describes error Phenomenon and solution .  
The **Getting Started** user's guide describes the installation of MDK,How to make KEIL new project for W7500, How to use MDK for W7500 Peripherals Examples, How to use GCC for W7500 Peripherals Examples and How to use ISP tool from starting a project to using the ISP tool.

-------------------


### Data Sheet

[W7500x Datasheet v1.1.0 - English](/img/products/w7500/w7500x_ds_v110.pdf)

| Version | Date      | Decription                                           |
| ------- | --------- | ---------------------------------------------------- |
| V 1.1.0 | 20DEC2019 | Fixed 3.17 UART speed to 460.8 Kbit/s from 3 Mbit/s. |



**Old Datasheet History**

| Version | Date      | Decription     |                                                                                                 
| ------- | --------- | ----------------|
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


-------------------



### Reference Manual

  - [W7500x Reference Manual v1.1.2 - English](/img/products/w7500/w7500x_rm_v112_20181017_.pdf)



| Version | Date      | Decription                    |
| ------- | --------- | ----------------------------- |
| V 1.1.2 | 17OCT2018 | Edit Power supply description |



 ++++ Old Reference Manual History |

| Version | Date      | Decription                                                                   |
| ------- | --------- | ---------------------------------------------------------------------------- |
| V 1.0.0 | 18SEP2017 | Initial Release                                                              |
| V 1.0.1 | 12OCT2017 | Edit Flash Chapter.                                                          |
| V 1.0.2 | 26OCT2017 | Edit GPIO,PADCON Register and added Open Drain function                      |
| V 1.0.3 | 27OCT2017 | TCKCNTR, RTR, Sn\_RTR, Sn\_KATMR Additional description added.               |
| V 1.0.4 | 09NOV2017 | Edit PADCON register description CS,DS inverted value.                       |
| V 1.0.5 | 17NOV2017 | Edit UARTCR register description about UARTEN.                               |
| V 1.0.6 | 29NOV2017 | Edit WZTOE Sn\_KATMR description about timer trigger.                        |
| V 1.0.7 | 26JAN2018 | Edit typo about PWM preodic mode                                             |
| V 1.0.8 | 12FAB2018 | Edit Base Address about RTC (4000\_4000 -\> 4000\_E000)                      |
| V 1.0.9 | 05MAR2018 | Edit UART2 description & register map.                                       |
| V 1.1.0 | 11APR2018 | Edit Systick description & PADCON register table fix                         |
| :::     | :::       | Edit Register Table about SSP0, SSP1 (Add FRF)                               |
| :::     | :::       | Edit DSS about SSP0, SSP1                                                    |
| :::     | :::       | Edit Register map about SSP0, SSP1 (Add FRF)                                 |
| V 1.1.1 | 27JUL2018 | Fixed figure 4. CRG Diagram (Input Information of WDOGCLK, TIMCLK0,TIMCLK1). |
| :::     | :::       | Flash memory lock function Additional description added (11.1)               |


-------------------


### PHY Reference

  - [How to Access W7500x PHY Register - English](/img/products/w7500p/ref_sch/how_to_access_phy_application_note_v100.pdf)
  - [W7500P Internal PHY Datasheet - English](http://www.bdtic.com/DataSheet/ICplus/IP101G_DS_R01_20121224.pdf)


How to Access W7500x PHY Register

| Version | Date     | Decription      |
| ------- | -------- | --------------- |
| V1.0.0  | 7AUG2018 | Initial Release |

W7500P Internal PHY Datasheet

| Version | Date     | Decription      |
| ------- | -------- | --------------- |
| V1.0.0  | 7AUG2018 | Initial Release |



-----


### Errata Sheet
- [W7500x Erratasheet v1.2.0 - English](/img/products/w7500/w7500x_erratasheet_v120e.pdf)
- [W7500x Erratasheet v1.2.0 - Korean](/img/products/w7500/w7500x_erratasheet_v120k.pdf)



| Version | Date      | Decription                            |
| ------- | --------- | ------------------------------------- |
| V1.2.0  | 13MAR2019 | Erratum 3 – IAP Function Call Failure |
| :::     | :::       | Erratum 4 – Two Image Banks Failure   |
| :::     | :::       | Erratum 5 – Cold Booting Failure      |



| Version | Date      | Decription                                 |
| ------- | --------- | ------------------------------------------ |
| V1.0.0  | 11JUL2016 | erratum 1 – W7500x I2C                     |
| V1.0.2  | 8DEC2016  | Correct SCL speed                          |
| V1.0.3  | 18JUN2018 | erratum 2 – W7500P Transmission Delay Case |

++++


-----


### Limitation Note ARP problem in the NLB environment

![Limitation Note ARP problem in the NLB environment V1.0]()

ARP problem in the NLB environment V1.0
| Version | Date    | Decription       |
| ------- | ------- | ---------------- |
| V 1.0   | 12MAR18 | Initial Document |

-----


## Getting Started

  - [How to install KEIL](../W7500/documents/appnote/How_to_install_KEIL.md)

  - [How to make KEIL new project for W7500](../W7500/documents/appnote/How_to_make_KEIL_new_project_for_W7500.md)

  - [How to use MDK for W7500 Peripherals Examples](../W7500/documents/appnote/How_to_use_MDK_for_W7500_Peripherals_Examples.md)
    
  - [How to use GCC for W7500 Peripherals Examples](../W7500/documents/appnote/How_to_use_GCC_for_W7500_Peripherals_Examples.md)
  
  - [How to use ISP tool](../W7500/documents/appnote/How_to_use_ISP_tool.md)
  
-----
