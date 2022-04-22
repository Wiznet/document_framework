---
id: troubleshooting-guide
title: Troubleshooting Guide
date: 2021-04-21
---

## Common Cases

### Where to find Configuration tool for WIZ510SSL?

- The latest version Configuration tool can be downloaded at this download page.

### Module cannot be searched

  - Check the power and Ethernet cable’s connection first.

  - Check if the ping request from PC to module is successful.
      - When using Windows
        1.  Run \> Enter 'cmd' (windows command line)
        2.  ping 192.168.xxx.xxx (enter the allocated IP address)
        3.  Check response

  - Use **UDP broadcast, port 50001** in order to use the UDP
    Search from the configuration tool of WIZ750SR. Please test after
    closing the **OS firewall and virus programs**. 

  - If there is a problem with the UDP port, users can change the OS
    inbound / outbound port settings to open the Search & firmware
    update port (UDP/TCP 50001, TCP 50002).

  - If multiple network adaptors are used, an error can occur in sending
    the packet in the correct order of the network interface Metric.
    Deactivate all other adaptors except the one that is used for OS
    setting in order to test again.
      - This problem can occur because of the virtual Ethernet adaptor,
        which is used for the networking of Virtual Machines like VMware
        or Virtual Box is used.


### Module setting changes are not applied

  - Click the ‘Setting’ icon from the Configuration tool after changing
    the product setting; then the product will restart and the changes
    will be applied.

### The firmware update is unsuccessful

WIZ510SSL operates two firmware banks. In case if wrong firmware bank version was selected during firmware upgrade, it is possible that board may become unresponsive.

Follow below steps to recover your board:

1. Connect to debug UART (UART2) either by USB-cable or using J6 pins. Open any Terminal and connect by following settings: Speed-115200, Data-8bit, Parity-N, Stopbit-1, Flow Control-N
2. Confirm firmware bank by board reset. You should be able to see following messages in terminal.

![](/img/products/wiz510ssl/troubleshooting_guide/debug_uart.PNG) |

3. Set BOOT0 to HIGH (insert jumper to J3) and reset board.

![](/img/products/wiz510ssl/troubleshooting_guide/J3_pin.png) |

4. Connect to your board using CubeProgrammer by UART using following settings: Speed-115200, Data-8bit, Parity-EVEN

![](/img/products/wiz510ssl/troubleshooting_guide/cubeprogrammer_uart.PNG) |

5. Open necessary file, select appropriate memory address and download firmware. Please refer to below table to find bank version and address.

| Bank      | Address   |
|-----------|-----------|
| Bank 0    | 0x08010000 |
| Bank 1    | 0x08040000 |

![](/img/products/wiz510ssl/troubleshooting_guide/cube_open.png) |

![](/img/products/wiz510ssl/troubleshooting_guide/cube_memory.png) |

![](/img/products/wiz510ssl/troubleshooting_guide/cube_done.PNG) |

It is recommended to upload firmware for both banks to prevent board becoming unresponsive again.

-----

## Still having troubles?


  - Check related category in our [WIZnet Forum](https://forum.wiznet.io/).

  - All WIZnet products have a **warranty of 1 year from the purchase date**.

  - Contact the person you purchased the product from and request a **RMA**.

  - Contact our support team

-----
