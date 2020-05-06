# TCP/IP core Offload Engine(TOE)


## Introduction

The TCP/IPCore Offlead Engine (TOE) is a Hardwired TCP/IP embedded Ethernet controller that provides easier Internet connection to embedded systems. TOE enables users to have Internet connectivity in their applications by using the TCP/IP stack. 
WIZnet‘s Hardwired TCP/IP is the market-proven technology that supports TCP, UDP, IPv4, ICMP, ARP, IGMP, and PPPoE protocols. TOE embeds the 32Kbyte internal memory buffer for the Ethernet packet processing. Using TOE allows users to implement the Ethernet application by adding the simple socket program. It’s faster and easier than using any other Embedded Ethernet solutions. 8 independent hardware sockets can be used simultaneously.
TOE also provides WOL (Wake on LAN) to reduce power consumption of the system.

## Features 

*	Supports Hardwired TCP/IP Protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
*	Supports 8 independent sockets simultaneously
*	Supports Power down mode
*	Supports Wake on LAN over UDP
*	Internal 32Kbytes Memory for TX/RX Buffers
*	Not supports IP Fragmentation

## Functional description

The below Figure shows the TOE block diagram.

![](/document_framework/img/products/w7500p/peripheral/wztoe_diagram.gif "Figure 1 TOE block diagram")

## TOE Memory map

TOE has one Common Register Block, eight Socket Register Blocks, and TX/RX Buffer Blocks allocated to each Socket. The below Figure shows the selected block by the base address and the available offset address range of Socket TX/RX Buffer Blocks. Each Socket’s TX Buffer Block physically exists in one 16KB TX memory and is initially allocated with 2KB. Also, Each Socket’s RX Buffer Block physically exists in one 16KB RX Memory and is initially allocated with 2KB.
Regardless of the allocated size of each Socket TX/RX Buffer, it can be accessible within the 16 bits offset address range (From 0x0000 to 0xFFFF).
Refer to [Memory](http://wizwiki.net/wiki/doku.php?id=products:w7500:peripherals:toe#memory) for more information about 16KB TX/RX Memory organization and access method.

![](/document_framework/img/products/w7500p/peripheral/wztoe_memory_map.jpg "Figure 2 TOE memory map ")

### Common register map

Common Register Block configures the general information of TOE such as IP and MAC address. The below Table defines the offset address of registers in this block. Refer to [Memory](http://wizwiki.net/wiki/doku.php?id=products:w7500:peripherals:toe&do=edit#memory) for more details about each register.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-s6z2{text-align:center}
</style>
<table class="tg">
  <tr>
    <th class="tg-s6z2">Offset<br>  </th>
    <th class="tg-s6z2">Register<br>  </th>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0000<br>  </td>
    <td class="tg-s6z2">TOE Version (VERSIONR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x2000<br></td>
    <td class="tg-s6z2">TICKCLOK (TCLKR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x2100<br>  </td>
    <td class="tg-s6z2">Interrupt (IR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x2104<br>  </td>
    <td class="tg-s6z2">Interrupt Mask (IMR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x2108<br>  </td>
    <td class="tg-s6z2">Interrupt Clear (IRCR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x2110<br>  </td>
    <td class="tg-s6z2">Socket Interrupt (SIR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x2114<br>  </td>
    <td class="tg-s6z2">Socket Mask (SIMR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x2300<br>  </td>
    <td class="tg-s6z2">Mode (MR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x2400<br>  </td>
    <td class="tg-s6z2">PPP Timer (PTIMER)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x2404<br>  </td>
    <td class="tg-s6z2">PPP Magic (PMAGIC)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x2408<br>  </td>
    <td class="tg-s6z2">PPP Destination MAC Address (PHAR1)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x240C<br>  </td>
    <td class="tg-s6z2">PPP Destination MAC address (PHAR0)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x2410<br>  </td>
    <td class="tg-s6z2">PPP Session Identification (PSID)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x2414<br>  </td>
    <td class="tg-s6z2">PPP Maximum Segment Size (PMSS)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x6000<br>  </td>
    <td class="tg-s6z2">Source Hardware Address (SHAR1)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x6004<br>  </td>
    <td class="tg-s6z2">Source Hardware Address (SHAR0)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x6008<br>  </td>
    <td class="tg-s6z2">Gateway Address (GA)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x600C<br>  </td>
    <td class="tg-s6z2">Subnet Mask (SUB)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x6010<br>  </td>
    <td class="tg-s6z2">Source IP Address (SIP)</td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x6020<br>  </td>
    <td class="tg-s6z2">Network Configuration Lock (NCONFL)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x6040<br>  </td>
    <td class="tg-s6z2">Retry Time (RTR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x6044<br>  </td>
    <td class="tg-s6z2">Retry Counter (RCR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x6050<br>  </td>
    <td class="tg-s6z2">Unreachable IP Address (UIP)<br>  </td>
  </tr>
  <tr>
    <td class="tg-031e">0x6054<br>  </td>
    <td class="tg-031e">Unreachable Port Address (UPORT)</td>
  </tr>
</table>

### Socket register map

TOE supports 8 Sockets for communication channel. Each Socket is controlled by Socket n Register (n = 0,…,7  ,where n is socket number). <Table 2> defines the 16bits Offset Address of registers in Socket n Register Block.
Refer to [Memory](http://wizwiki.net/wiki/doku.php?id=products:w7500:peripherals:toe#memory) for more details about each register.


<table class="tg">
  <tr>
    <th class="tg-s6z2">Offset<br>  </th>
    <th class="tg-s6z2">Register<br>  </th>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0000<br>  </td>
    <td class="tg-s6z2">Socket Mode (Sn_MR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0010<br>  </td>
    <td class="tg-s6z2">Socket Command (Sn_CR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0020<br>  </td>
    <td class="tg-s6z2">Socket Interrupt (Sn_IR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0024<br>  </td>
    <td class="tg-s6z2">Socket Interrupt Mask (Sn_IMR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0028<br>  </td>
    <td class="tg-s6z2">Socket Interrupt Clear (Sn_ICR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0030<br>  </td>
    <td class="tg-s6z2">Socket Status (Sn_SR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0100<br>  </td>
    <td class="tg-s6z2">Socket Protocol Number (Sn_PNR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0104<br>  </td>
    <td class="tg-s6z2">Socket IP Type of Service (Sn_TOS)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0108<br>  </td>
    <td class="tg-s6z2">Socket TTL (Sn_TTLR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x010C<br>  </td>
    <td class="tg-s6z2">Socket Fragment Offset (Sn_FRAG)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0110<br>  </td>
    <td class="tg-s6z2">Socket Maximum Segment (Sn_MSSR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0114<br>  </td>
    <td class="tg-s6z2">Socket Port Number (Sn_PORT)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0118<br>  </td>
    <td class="tg-s6z2">Socket Destination Hardware address0 (Sn_DHAR0)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x011C<br>  </td>
    <td class="tg-s6z2">Socket Destination Hardware address1 (Sn_DHAR1)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0120<br>  </td>
    <td class="tg-s6z2">Socket Destination Port Number (Sn_DPORTR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0124<br>  </td>
    <td class="tg-s6z2">Socket Destination IP Address (Sn_DIPR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0180<br>  </td>
    <td class="tg-s6z2">Socket Keep Alive Timer (Sn_KATMR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0184<br>  </td>
    <td class="tg-s6z2">Socket Retry Time (Sn_RTR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0188<br>  </td>
    <td class="tg-s6z2">Socket Retry Counter (Sn_RCR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0200<br>  </td>
    <td class="tg-s6z2">Socket TX Memory Size (Sn_TMSR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0204<br>  </td>
    <td class="tg-s6z2">Socket TX Free Size (Sn_TXFSR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0208<br>  </td>
    <td class="tg-s6z2">Socket TX Read Pointer (Sn_TXRDR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x020C<br>  </td>
    <td class="tg-s6z2">Socket TX Write Pointer (Sn_TXWR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0220<br>  </td>
    <td class="tg-s6z2">Socket RX Memory Size (Sn_TMSR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0224<br>  </td>
    <td class="tg-s6z2">Socket RX Received Size (Sn_RSR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0228<br>  </td>
    <td class="tg-s6z2">Socket RX Read Pointer (Sn_RXRDR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x022C<br>  </td>
    <td class="tg-s6z2">Socket RX Write Pointer (Sn_RXWR)<br>  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0400<br>  </td>
    <td class="tg-s6z2">Socket TCP Status (Sn_TSR)<br>  </td>
  </tr>
</table>

### Memory

TOE has one 16KB TX memory for Socket n TX Buffer Blocks and one 16KB RX memory for Socket n RX buffer Blocks.

16KB TX memory is initially allocated in 2KB size for each Socket TX Buffer Block (2KB X 8 = 16KB). The initial allocated 2KB size of Socket n TX Buffer can be re-allocated by using ‘Socket n TX Buffer Size Register (Sn_TXBUF_SIZE)’.
Once all Sn_TXBUF_SIZE registers have been configured, Socket TX Buffer is allocated with the configured size of 16KB TX Memory and is assigned sequentially from Socket 0 to Socket 7. Its physical memory address is automatically determined in 16KB TX memory. Therefore, the total sum of Sn_TXBUF_SIZE should not exceed 16 in case of error in data transmission.

The 16KB RX memory allocation method is the same as the 16KB TX memory allocation method. 16KB RX memory is initially allocated into 2KB size for each Socket RX Buffer Block (2KB X 8 = 16KB). The initial allocated 2KB size of Socket n RX Buffer can be re-allocated by using ‘Socket n RX Buffer Size Register (Sn_RXBUF_SIZE)’.
	
When all Sn_RXBUF_SIZE registers have been configured, the Socket RX Buffer is allocated with the configured size in 16KB RX Memory and is assigned sequentially from Socket 0 to Socket 7. The physical memory address of the Socket RX Buffer is automatically determined in 16KB RX memory. Therefore, the total sum of Sn_RXBUF_SIZE should not exceed 16 or data reception error will occur. 

For 16KB TX/RX memory allocation, refer to Sn_TXBUF_SIZE & Sn_RXBUF_SIZE in [Socket register map](http://wizwiki.net/wiki/doku.php?id=products:w7500:peripherals:toe#socket_register_map) . The Socket n TX Buffer Block allocated in 16KB TX memory is buffer for saving data to be transmitted by host. The 16bits Offset Address of Socket n TX Buffer Block has 64KB address space ranged from 0x0000 to 0xFFFF, and is configured with reference to ‘Socket n TX Write Pointer Register (Sn_TX_WR)’ & ‘Socket n TX Read Pointer Register(Sn_RX_RD)’. However, the 16bits Offset Address automatically converts into the physical address to be accessible in 16KB TX memory such as [The upper Figure](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:peripherals:toe_memory_map.jpg). Refer to [Socket register map](http://wizwiki.net/wiki/doku.php?id=products:w7500:peripherals:toe#socket_register_map) for Sn_TX_WR & Sn_TX_RD.

The Socket n RX Buffer Block allocated in 16KB RX memory is buffer for saving the received data through the Ethernet. The 16bits Offset Address of Socket n RX Buffer Block has 64KB address space ranged from 0x0000 to 0xFFFF, and is configured with reference to ‘Socket n RX RD Pointer Register (Sn_RX_RD)’ & ‘Socket n RX Write Pointer Register (Sn_RX_WR)’. However, the 16bits Offset Address automatically converts into the physical address to be accessible in 16KB RX memory such as [The upper Figure](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:peripherals:toe_memory_map.jpg). Refer to [Socket register map](http://wizwiki.net/wiki/doku.php?id=products:w7500:peripherals:toe#socket_register_map) for Sn_RX_RD & Sn_RX_WR.

------------------------------

## Peripheral_Examples
- [TCP/UDP Loopback](loopback.md)
- [DHCP Client](dhcpclient.md)
- [DNS Client](dnsclient.md)
