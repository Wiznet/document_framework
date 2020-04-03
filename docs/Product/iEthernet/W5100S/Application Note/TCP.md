---
id: tcp
title: TCP
date: 2020-03-
---


## Content

# W5100S TCP Function

By setting some Registers and Memory Operation, W5100S provides Internet
Connectivity. This Chapter describes How to operate W5100S TCP Function.

## Initialization

### Basic Setting

For W5100S Operation, select and utilize appropriate Registers shown
below.

1.  Mode Register (MR)
2.  Interrupt Mask Register (IMR)
3.  Retry Time-value Register (RTR)
4.  Retry Count Register (RCR)

For more Information of above Registers, refer to the “Register
Descriptions” in [W5100S Datasheet](/products/w5100s/datasheet).

### Setting Network Information

Basic Network Information setting for Communication: It must be set the
basic Network Information.

1.  SHAR(Source Hardware Address Register)
      - It is prescribed that the Source Hardware Addresses, which is
        set by SHAR, use unique Hardware Addresses (Ethernet MAC
        address) in the Ethernet MAC Layer. The IEEE manages the MAC
        address allocation. The manufacturer which produces the Network
        device allocates the MAC Address to product.
      - Details on MAC address allocation refer to the website as below.
      - <http://www.ieee.org/>
      - <http://standards.ieee.org/regauth/oui/index.shtml>
2.  GAR(Gateway Address Register)
3.  SUBR(Subnet Mask Register)
4.  SIPR(Source IP Address Register)

### Set SOCKET n Buffer Information

This stage shows SOCKET n TX/RX Buffer Information. The base Address and
Mask Address of each SOCKET are set in this stage.

<B>*In case of, assign 2KB TX/RX Buffer per SOCKET*</B>

<code c>
In case of, assign 2KB TX/RX Buffer per SOCKET
{
   // set Base Address of TX/RX Buffer for SOCKET n
   gS0_RX_BASE = 0x8000; // TX Buffer Block Base Address
   gS0_RX_BASE = 0xC000; // RX Buffer Block Base Address
   TxTotalSize = 0; // For check the total size of SOCKET n TX Buffer
   RxTotalSize = 0; // For check the total size of SOCKET n RX Buffer
   
   for (n=0; n<3; n++) {
      Sn_TXBUF_SIZE = 2; // assign 2KB TX Buffer per SOCKET
      Sn_RXBUF_SIZE = 2; // assign 2KB RX Buffer per SOCKET
      // 0x07FF, for getting offset address within assigned SOCKET n TX/RX Buffer
      gSn_TX_MASK = (1024 * Sn_TXBUF_SIZE) – 1;
      gSn_RX_MASK = (1024 * Sn_RXBUF_SIZE) - 1;
      
      if( n != 0) {
         gSn_TX_BASE = gSn-1_TX_BASE + (1024 * Sn-1_TXBUF_SIZE);
         gSn_RX_BASE = gSn-1_RX_BASE + (1024 * Sn-1_RXBUF_SIZE);
      } // end if
      
   TxTotalSize = TxTotalSize + Sn_TXBUF_SIZE;
   RxTotalSize = RxTotalSize + Sn_RXBUF_SIZE;
   If( TxTotalSize > 8 or RxTotalSize > 8 ) goto ERROR; // invalid Total Size
   } // end for
}
</code>
