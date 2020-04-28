---
id: ref_schematic
title: Ref. Schematic
date: 2020-04-03
---


## Content

# Reference Schematic

## External Transformer Type

![W5500 Ref.Schematic - External
Transformer](/wiznet_schematic/ethernet_chip/w5500_sch_v110_use_trans_.pdf)
![W5500 Ref.Schematic (External
Transformer)](/document_framework/img/products/w5500/w5500_sch_v110_use_trans_.png)

-----

## RJ45 with Transformer Type

![W5500 Ref.Schematic - RJ45 with
Transformer](/wiznet_schematic/ethernet_chip/w5500_sch_v110_use_mag_.pdf)
![W5500 Reference Schematic (RJ45 with
Transformer)](/document_framework/img/products/w5500/w5500_sch_v110_use_mag_.png)

-----

## RJ45 with integrated Transformer and connected CT

For using connected CT signals inside the Transformer or inside RJ45 the
matching network (2x 50R) of the RX+/- signals must be isolated from CT
(3.3V). For that isolation we need C23 and C24.  
Please refer to the following schematic:


  - *C23 and C24 must be added. Otherwise, W5500 won't operate well.*
  - *And by connected center tap, Power dissipation may be raised.*
  - *So, you'd better use a MAGJACK without connected center tap except
    the case that you have to use one with connected center tap.*


![w5500\_schematic-connected-cts\_003.jpg](/document_framework/img/products/w5500/w5500_schematic-connected-cts_003.jpg.jpg)  
The RJ45 from UDE (RB1-125BAG1A) is used in many of our **W5100** and
**W7100A** related Modules.

-----

## Recommended RJ45 using W5500

#### External Transformer

\- H1102NL from Pulse
[datasheet](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:01.h1102nl_h325.pdf)  
\- LCZ3A1CB from CETUS
[datasheet](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:02.lcz3a1cb.pdf)  

#### RJ45 with integrated Transformer

\- J1B121ZCCD from CETUS
[datasheet](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:1.j1b121zccd-v0-101115.pdf)  
\- J1B1211CCD from CETUS (used in \*1)
[datasheet](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:2.j1b1211ccd.pdf)  
\- RB1-1D5B8K1A from UDE
[datasheet](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:3.rb1-1d5b8k1a_287-00_.pdf)  
\- RB1-125BAG1A from UDE (used in \*2)
[datasheet](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:rb1-125bag1a_111-00_.pdf)  
\- J0011D21BNL from Pulse
[datasheet](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:4.j0011d21bnl.pdf)  
  
\*1) we use the J1B1211CCD from CETUS in our
**[W5500-EVB](/products/w5500/w5500_evb/start)**,
**[WIZ550io](/products/wiz550io/start)**,
**[WIZ550S2E](/products/wiz550s2e/start)** and
**[WIZ550web](/products/wiz550web/start)** Modules.  
\*2) we use the RB1-125BAG1A from UDE in most of our our **W5100** &
**W7100A** related Plug-In and Serial-to-Ethernet (S2E) Modules.  
\----
