---
id: trouble_shooting-[EN]
title: Trouble Shooting-[EN]
date: 2020-04-08
---

## Content

# WIZ750SR Troubleshooting Guide

\*\* Supported Languages \*\*  
\* [English](/products/wiz750sr/troubleshooting/en) (current page)  
\* [Korean](/products/wiz750sr/troubleshooting/ko)

-----

  - Latest Update: ***Jan. 2018***

-----

## Common Cases

| Problems with the Configuration Tool |
| ------------------------------------ |

\++++ Where can I find the Configuration tool for WIZ750SR? |

  - WIZ750SR is a product designed to be compatible with WIZ107/108SR.
    Thus there is not a separate Configuration tool exclusively for
    WIZ750SR and users should use the WIZ107/107SR Configuration tool.

<!-- end list -->

  - The latest version Configuration tool can be downloaded at this
    [download page](/products/wiz750sr/download/start).

\++++

\++++ The product cannot be searched. |

  - Check the power and Ethernet cable’s connection first.

<!-- end list -->

  - Check if the ping request from PC to module is successful.
      - When using Windows
        1.  Run \> Enter 'cmd' (windows command line)
        2.  ping 192.168.xxx.xxx (enter the allocated IP address)
        3.  Check response

|                                                         |
| ------------------------------------------------------- |
| ![](/products/wiz750sr/troubleshooting/windows_cmd.png) |
| Entering 'cmd' command on Windows Run                   |

|                                                            |
| ---------------------------------------------------------- |
| ![](/products/wiz750sr/troubleshooting/ping_success_0.png) |
| Ping request / reply success                               |

|                                                           |
| --------------------------------------------------------- |
| ![](/products/wiz750sr/troubleshooting/ping_failed_0.png) |
| Ping request / reply failed                               |

  - Use \*\* UDP broadcast, port 50001\*\* in order to use the UDP
    Search from the configuration tool of WIZ750SR. Please test after
    closing the **OS firewall and virus programs**. 

<!-- end list -->

  - If there is a problem with the UDP port, users can change the OS
    inbound / outbound port settings to open the Search & firmware
    update port (UDP/TCP 50001, TCP 50002).

<!-- end list -->

  - If multiple network adaptors are used, an error can occur in sending
    the packet in the correct order of the network interface Metric.
    Deactivate all other adaptors except the one that is used for OS
    setting in order to test again.
      - This problem can occur because of the virtual Ethernet adaptor,
        which is used for the networking of Virtual Machines like VMware
        or Virtual Box is used.

\++++

\++++ The product setting changes are not applied. |

  - Click the ‘Setting’ icon from the Configuration tool after changing
    the product setting; then the product will restart and the changes
    will be applied.

|                                                       |
| ----------------------------------------------------- |
| ![](/products/wiz750sr/gettingstarted/configtool.png) |
| WIZ107/108SR & **WIZ750SR** Configuration Tool        |

\++++

\++++ How do I check the firmware version? |

1.  Click 'Search' and click the \[+\] MAC address to check the product
    information
2.  Check the ‘Firmware version' 

<!-- end list -->

  - User can check the latest firmware version at the [product update
    history page](/products/wiz750sr/history/en) and [download
    page](/products/wiz750sr/download/start).

\++++

\++++ The firmware update is unsuccessful. |

  - WIZ750SR has an internal TCP server for firmware updates.
      - TCP port number: 50002

<!-- end list -->

  - Check if the ping request from PC to module is successful.
      - When using Windows
        1.  Run \> Enter 'cmd' (windows command line)
        2.  ping 192.168.xxx.xxx (enter the allocated IP address)
        3.  Check response

|                                                         |
| ------------------------------------------------------- |
| ![](/products/wiz750sr/troubleshooting/windows_cmd.png) |
| Entering 'cmd' command on Windows Run                   |

|                                                            |
| ---------------------------------------------------------- |
| ![](/products/wiz750sr/troubleshooting/ping_success_0.png) |
| Ping request / reply success                               |

|                                                           |
| --------------------------------------------------------- |
| ![](/products/wiz750sr/troubleshooting/ping_failed_0.png) |
| Ping request / reply failed                               |

  - The IP WIZ750SR and IP of the PC running the configuration tool must
    be identical in order to update the firmware.
      - In **DHCP mode** (automatic IP allocation), the PC and WIZ750Sr
        must have the same router allocate IP.
      - In **Static mode** (manual IP allocation), set as shown below.
          - 예) Product IP address: 192.168.11.2
          - 예) PC IP address: 192.168.11.3 (Same Class C private IPv4
            address range, Different IP address)

\++++

| Problems with the WIZ750SR Evaluation Board (EVB) |
| ------------------------------------------------- |

\++++ How do I connect the serial interface of WIZ750SR to PC for
testing? |

  - There are two versions of the WIZ750SR evaluation board, RS-232/TTL
    & RS-422/485, and each is composed of a different serial interface
    connector.

<!-- end list -->

  - The **DB9 connector** is provided with the **RS-232/TTL version**;
    users can connect it to the serial port of the PC or use it with a
    RS-232 to USB convertor (available at Amazon).

<!-- end list -->

  - The **terminal block interface** is provided with the **RS-422/485
    version**; this is used to connect to the user’s serial device. If
    the user wishes to connect with the PC, an RS-422/485 to USB
    connector (available at Amazon) is needed.

\++++

-----

## Problems cannot be solved\!

\++++ What is the next step if my problem is still not solved? |

  - Users can ask questions at the [WIZnet
    Forum](https://forum.wiznet.io/).
      - <https://forum.wiznet.io/>

<!-- end list -->

  - All WIZnet products have a **warranty of 1 year from the purchase
    date**.
  - Contact the person you purchased the product from and request a
    **RMA**.

\++++

-----

\<WRAP round box group\> \<WRAP half column\> \<WRAP centeralign\> \*\*
WIZ750SR series Common Documents \*\* \</WRAP\>

  - **[User's Manual](/products/wiz750sr/usermanual/en)** 

<!-- end list -->

  - **[Device Command Manual](/products/wiz750sr/commandmanual/en)**

<!-- end list -->

  - **[Troubleshooting Guide](/products/wiz750sr/troubleshooting/en)**

<!-- end list -->

  - **[Update History](/products/wiz750sr/history/en)**

-----

\<WRAP centeralign\> \*\* WIZ750SR series Downloads \*\* \</WRAP\>

  - **[Software Downloads](/products/wiz750sr/download/start)**

<!-- end list -->

  - **[Technical Reference](/products/wiz750sr/reference/start)**

\</WRAP\>

\<WRAP half column\> \<WRAP centeralign\> \*\* WIZ750SR Individual
documents \*\* \</WRAP\>

  - **[WIZ750SR Product Overview](/products/wiz750sr/overview/en)**
  - **[WIZ750SR Getting Started
    Guide](/products/wiz750sr/gettingstarted/en)**
  - **[WIZ750SR Datasheet](/products/wiz750sr/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-100 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-100 Product
    Overview](/products/wiz750sr-100/overview/en)**
  - **[WIZ750SR-100 Getting Started
    Guide](/products/wiz750sr-100/gettingstarted/en)**
  - **[WIZ750SR-100 Datasheet](/products/wiz750sr-100/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-105 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-105 Product
    Overview](/products/wiz750sr-105/overview/en)**
  - **[WIZ750SR-105 Getting Started
    Guide](/products/wiz750sr-105/gettingstarted/en)**
  - **[WIZ750SR-105 Datasheet](/products/wiz750sr-105/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-110 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-110 Product
    Overview](/products/wiz750sr-110/overview/en)**
  - **[WIZ750SR-110 Getting Started
    Guide](/products/wiz750sr-110/gettingstarted/en)**
  - **[WIZ750SR-110 Datasheet](/products/wiz750sr-110/datasheet/start)**

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>
