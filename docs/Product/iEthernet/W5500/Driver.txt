---
id: driver
title: Driver
date: 2020-04-03
---


## Content

# Driver

The ioLibrary means **"Internet Offload Library"** for WIZnet chip. It
includes **drivers** and **application protocols**. There are three
kinds of libraries explained on this page The first two drivers
(ioLibrary\_BSD, ioLibrary) can be used for
[W5500](/products/w5500/start) application designs. These will be
updated continuously. The former BSD-Type driver will not be updated, as
it is only meant to be a migration help from W5200 to
[W5500](/products/w5500/start).

-----

1. ioLibrary_BSD

2. ioLibrary

3. BSD Type driver for W5200 User

-----

to 
## 1. ioLibrary_BSD

#### Overview

This driver provides the Berkeley Socket type APIs. The function names
of this ioLibrary\_BSD are the same as the function names of the
ioLibrary.

  - Directory Structure ![](/products/w5500/iolibrary_bsd.jpg)
      - Ethernet : SOCKET APIs like BSD & WIZCHIP(W5500,W5200 and etc)
        Driver
      - Internet : 
          - DHCP client 
          - DNS client 
          - Others will be added.

#### Download

**\< ioLibrary\_BSD : latest version \>**

\<WRAP center download 60% centeralign\> **ioLibrary\_BSD GitHub
Repository**

<https://github.com/Wiznet/ioLibrary_Driver> \</WRAP\>

\< ioLibrary\_BSD : old version \>

<table>
<tbody>
<tr class="odd">
<td></td>
<td>Type</td>
<td>Version</td>
<td>Note</td>
<td>Download Link</td>
</tr>
<tr class="even">
<td>Source code</td>
<td>Ethernet<br />
(Berkeley Socket type APIs)</td>
<td>1.0.3</td>
<td>-</td>
<td><embed src="/products/w5500/iolibrary_bsd_ethernet_v103.zip" /></td>
</tr>
<tr class="odd">
<td>:::</td>
<td>:::</td>
<td>1.0.2</td>
<td>-</td>
<td><embed src="/products/w5500/iolibrary_bsd_ethernet_v102.zip" /></td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>1.0.1</td>
<td>-</td>
<td><embed src="/products/w5500/iolibrary_bsd_ethernet_v101.zip" /></td>
</tr>
<tr class="odd">
<td>:::</td>
<td>:::</td>
<td>1.0.0</td>
<td>-</td>
<td><embed src="/products/w5500/iolibrary_bsd_ethernet_v100.zip" /></td>
</tr>
<tr class="even">
<td>:::</td>
<td>Internet<br />
(Application protocols)</td>
<td>1.1.1</td>
<td>-</td>
<td><embed src="/products/w5500/iolibrary_bsd_internet_v111.zip" /></td>
</tr>
<tr class="odd">
<td>:::</td>
<td>:::</td>
<td>1.1.0</td>
<td>-</td>
<td><embed src="/products/w5500/iolibrary_bsd_internet_v110.zip" /></td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>1.0.0</td>
<td>-</td>
<td><embed src="/products/w5500/iolibrary_bsd_internet_v100.zip" /></td>
</tr>
<tr class="odd">
<td>Documents</td>
<td>Socket APIs Help<br />
(chm, html)</td>
<td>1.0.3</td>
<td>-</td>
<td><embed src="/products/w5500/w5500_socket_apis_v103.zip" /></td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>1.0.2</td>
<td>-</td>
<td><embed src="/products/w5500/w5500_socket_apis_v102.zip" /></td>
</tr>
<tr class="odd">
<td>:::</td>
<td>:::</td>
<td>1.0.1</td>
<td>-</td>
<td><embed src="/products/w5500/w5500_socket_apis_v101.zip" /></td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>1.0.0</td>
<td>-</td>
<td><embed src="/products/w5500/w5500_socket_apis.zip" /></td>
</tr>
</tbody>
</table>

**\< Update History \>**

  - ioLibrary\_BSD
      - Ethernet : Berkeley Socket type APIs
          - Document (chm, html): Socket APIs Help
          - Revision History
              - ioLibrary\_BSD will be update in github continuously.
              - V1.03 (Refer to 20140501)
                  - wizchip\_conf.c
                    1.  ***Explicit type casting in
                        wizchip\_bus\_readbyte() &
                        wizchip\_bus\_writebyte()***
                    2.  uint32\_t type converts into ptrdiff\_t first.
                        And then reconverting it into uint8\_t\*. For
                        remove the warning when pointer type size is not
                        32bit. ***If ptrdiff\_t doesn't support in your
                        complier, You should must replace ptrdiff\_t
                        into your suitable pointer type.***
                  - w5500.c : ***Implicit type casting -\> Explicit type
                    casting*** 
                    1.  wizchip\_read\_data() & wizchip\_write\_data() :
                        Fixed the problem on porting into under 32bit
                        MCU
                  - socket.h
                    1.  Modify the comment : SO\_REMAINED -\>
                        PACK\_REMAINED
                    2.  Add the comment as zero byte udp data reception
                        in getsockopt(). 
                  - socket.c
                    1.  ***Implicit type casting -\> Explicit type
                        casting.***
                    2.  replace 0x01 with PACK\_REMAINED in recvfrom()
                    3.  Validation a destination ip in connect() &
                        sendto(): It occurs a fatal error on converting
                        unint32 address if uint8\* addr parameter is not
                        aligned by 4byte address. Copy 4 byte addr value
                        into temporary uint32 variable and then compares
                        it.
                        
                        - V1.02

<!-- end list -->

``` 
        * socket.c (Refer to 20131220)
          - setsockopt() : Remove warning message (delete tmp variable)
        * w5500.c (Refer to 20131220)
          - WIZCHIP_READ_BUF() & WIZCHIP_WRITE_BUF() in _WIZCHIP_IO_MODE_SPI_FDM_ case
            - Remove warning message
            - Remove unnecessary 'for' loop
      * V1.01 
        * socket.c (Refer to 20131104)
          - sendto() : Add to clear the timeout interrupt status of socket(Sn_IR_TIMEOUT).
      * V1.00
        * First released.
  * Internet  :  Application protocols
    * Revision History
      * V1.11 (2013-12-26)
        * DHCP Client
          - Modify variable declaration(dhcp_tick_1s) for code optimization in dhcp.c
      * V1.10
        * DHCP Client
          - Optimize code
          - Add reg_dhcp_cbfunc()
          - Add DHCP_stop() 
          - Integrate check_DHCP_state() & DHCP_run() into DHCP_run()
          - Don't care system endian
          - Move unreferenced DEFINE to dns.c
          - Remove the unused DEFINE
          - Add comments
        * DNS Client
          - Remove secondary DNS server in DNS_run
            - If 1st DNS_run failed, call DNS_run with 2nd DNS again
          - DNS_timerHandler -> DNS_time_handler
          - Move unreferenced DEFINE to dns.c
          - Remove the unused define
          - Integrated dns.h dns.c & dns_parse.h dns_parse.c into dns.h & dns.c
      * V1.00
        * First released. 
          * DHCP Client (Dynamic Host Configuration Protocol Client)
          * DNS Client (Domain Name System Client)
```

**\< Application code examples : latest version \>**

<table>
<tbody>
<tr class="odd">
<td></td>
<td>Application</td>
<td>Update</td>
<td>Note</td>
<td>Download Link</td>
</tr>
<tr class="even">
<td>STM32F103X<br />
CooCox CoIDE Project</td>
<td>Loopback Test</td>
<td>2013-11-04</td>
<td>-</td>
<td><embed src="/products/w5500/w5500_example_loopback_stm32f103x_coide_20131104.zip" /></td>
</tr>
<tr class="odd">
<td>:::</td>
<td>DHCP Client</td>
<td>2013-12-26</td>
<td>-</td>
<td><embed src="/products/w5500/w5500_example_DHCP_stm32f103x_coide_20131226.zip" /></td>
</tr>
<tr class="even">
<td>:::</td>
<td>DNS Client</td>
<td>2013-12-26</td>
<td>-</td>
<td><embed src="/products/w5500/w5500_example_DNS_stm32f103x_coide_20131226.zip" /></td>
</tr>
<tr class="odd">
<td>EnergyMicro<br />
Tiny GECKO(EFM32TG840F32)<br />
IAR Project</td>
<td>Loopback Test<br />
DHCP Client<br />
DNS Client</td>
<td>2013-12-20</td>
<td>-</td>
<td><a href="/osh/energymicro/tinygecko">Click</a></td>
</tr>
</tbody>
</table>

\< Application code examples : old version \>

<table>
<tbody>
<tr class="odd">
<td></td>
<td>Application</td>
<td>Update</td>
<td>Note</td>
<td>Download Link</td>
</tr>
<tr class="even">
<td>STM32F103X<br />
CooCox CoIDE Project</td>
<td>Loopback Test</td>
<td>2013-10-23</td>
<td>-</td>
<td><embed src="/products/w5500/w5500_example_loopback_stm32f103x_coide.zip" /></td>
</tr>
<tr class="odd">
<td>:::</td>
<td>DHCP Client</td>
<td>2013-11-08</td>
<td>-</td>
<td><embed src="/products/w5500/w5500_example_DHCP_stm32f103x_coide_20131108.zip" /></td>
</tr>
<tr class="even">
<td>:::</td>
<td>DNS Client</td>
<td>2013-11-08</td>
<td>-</td>
<td><embed src="/products/w5500/w5500_example_DNS_stm32f103x_coide_20131108.zip" /></td>
</tr>
</tbody>
</table>

\<WRAP center round important 60%\> **These projects do not contain
\[Ethernet\] and \[Internet\] codes. (Empty directory)**

Please download ioLibrary\_BSD APIs and Application protocols,  
and then insert to each of same named directory in provided project.
\</WRAP\>

**\< History \>**

  - Application code example
      - Example project was made by CooCox CoIDE with the STM32F103X
        Cortex-M3 platform.
          - Loopback Test 
              - 2013-11-04 Changes
                1.  main.c : refine and rearrange source code.
                2.  Separated Project code / APIs and Applications 
          - DHCP Client 
              - 2013-12-26 Changes
                1.  main.c : refine and rearrange source code for
                    improved DHCP code.
          - DNS Client
              - 2013-12-26 Changes
                1.  main.c : refine and rearrange source code for
                    improved DNS code
                    
                    #### Description

This driver provides BSD-type Socket APIs for
[W5500](/products/w5500/start). Because the function names of this
driver are more user-friendly than those of the older drivers, …,
current WIZnet chip users can easily migrate from their WIZnet chip
application to the W5500 application. All drivers for W5100, W5200 and
W5300 will be merged into the ioLibrary in the near future. All
application protocols will also be merged into ioLibrary based on this
BSD-type Socket APIs.

This table shows the differences between other BSD drivers and new W5500
driver.

<table>
<tbody>
<tr class="odd">
<td><strong>Driver</strong></td>
<td>Other BSD Drivers</td>
<td>W5500 Driver</td>
</tr>
<tr class="even">
<td>Variables Type</td>
<td>type.h (made by wiznet)<br />
ex) uint16</td>
<td>stdint.h (standard)<br />
ex) uint16_t</td>
</tr>
<tr class="odd">
<td>Register Naming</td>
<td>REGName + Index<br />
<br />
ex) SIPR0 , SIPR1, SIPR2, SIPR3</td>
<td>REGName &amp; WIZCHIP_OFFSET_INC<br />
<br />
ex&gt; SIP,<br />
WIZCHIP_OFFSET_INC(SIP,1),<br />
WIZCHIP_OFFSET_INC(SIP,2),<br />
WIZCHIP_OFFSET_INC(SIP,3)</td>
</tr>
<tr class="even">
<td>Basic IO function</td>
<td>IINCHIP_READ<br />
IINCHIP_WRITE<br />
IINCHIP_READ_BUF<br />
IINCHIP_WRITE_BUF<br />
<br />
16bit Address Space<br />
User should implement Functions<br />
MCU Dependent</td>
<td>WIZCHIP_READ<br />
WIZCHIP_WRITE<br />
WIZCHIP_READ_BUF<br />
WIZCHIP_WRITE_BUF<br />
<br />
32bit Address Space<br />
Since users implement MCU-dependent parts and then register them as Callback function, users don't need to implement the Function itself.<br />
<br />
Supports IINCHIP_XXX function for backward compatiblity.</td>
</tr>
<tr class="odd">
<td>Register Function</td>
<td>IINCHIP_XXX can be used. Supports some getREG() &amp; setREG() functions.</td>
<td><br />
It is not recommended to use WIZCHIP_XXXX. Supports getREG() &amp; setREG() functions or macros for all registers.</td>
</tr>
<tr class="even">
<td>Extra Functions</td>
<td>None</td>
<td>Optional and omissible Supports User-friendly named functions. All extra functions can be implemented by using setREG() &amp; getREG().</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr class="odd">
<td><strong>Socket APIs</strong></td>
<td>Other BSD Drivers</td>
<td>W5500 Driver</td>
</tr>
<tr class="even">
<td>Return Value</td>
<td>void<br />
Success or Fail<br />
Transmit/Receive Size</td>
<td>Success or Fail<br />
Transmit/Receive Size<br />
All functions return.</td>
</tr>
<tr class="odd">
<td>Error Code</td>
<td>None</td>
<td>SOCK_BUSY : 0<br />
SOCKERR_SOCKNUM<br />
SOCKERR_SOCKOPT<br />
SOCKERR_SOCKINIT<br />
SOCKERR_SOCKCLOSED<br />
SOCKERR_SOCKMODE<br />
SOCKERR_SOCKFLAG<br />
SOCKERR_SOCKSTATUS<br />
SOCKERR_ARG<br />
SOCKERR_PORTZERO<br />
SOCKERR_IPINVALID<br />
SOCKERR_TIMEOUT<br />
SOCKERR_DATALEN<br />
SOCKERR_BUFFER<br />
SOCKFATAL_PACKLEN</td>
</tr>
<tr class="even">
<td>IO Mode</td>
<td>Block &amp; Non-Block Fixed</td>
<td>Block or Non-Block configurable</td>
</tr>
<tr class="odd">
<td>Block Function</td>
<td>send<br />
recv<br />
sendto<br />
recvfrom</td>
<td><br />
send<br />
recv<br />
sendto<br />
recvfrom<br />
connect</td>
</tr>
<tr class="even">
<td>Non-Block Function</td>
<td>connect</td>
<td>:::</td>
</tr>
<tr class="odd">
<td>recvfrom</td>
<td>Should read data in received packet unit.</td>
<td>Can read data received packet separately.</td>
</tr>
</tbody>
</table>

\* Socket APIs

``` 
  * Function Name
    * Same as the function name of previous drivers
  * Function Return value
    * Previous Drivers:  Void or Success/Fail and Transmit/Receive Size
    * W5500 Driver: All functions return Success and Fail. In Fail case, operations are subdivided.
      * Success: SOCK_OK, Socket Number, Transmit and Receive Size
      * Fail: SOCK_BUSY, SOCKERR_XXX, SOCKFATAL_XXX ( 0 or Negative value)
          - ** SOCK_BUSY ** : 0
          - SOCKERR_SOCKNUM
          - SOCKERR_SOCKOPT   
          - SOCKERR_SOCKINIT  
          - SOCKERR_SOCKCLOSED
          - SOCKERR_SOCKMODE  
          - SOCKERR_SOCKFLAG  
          - SOCKERR_SOCKSTATUS
          - SOCKERR_ARG       
          - SOCKERR_PORTZERO  
          - SOCKERR_IPINVALID 
          - SOCKERR_TIMEOUT   
          - SOCKERR_DATALEN   
          - SOCKERR_BUFFER    
          - ** SOCKFATAL_PACKLEN **
  * Block / Non-Block IO mode
    * Previous Drivers : Block function and Non-Block function were mixed.
      * Block Function : send(), recv(), sento(), recvfrom()
      * Non-block Function : connect()
      * Blocking can be avoided by using getSn_SR(), getSn_TX_FSR(), and getSn_RX_RSR() properly.
    * W5500 Driver
      * Block / Non-Block IO mode can be selected by user. (Default: Block mode)
      * socket() with new flag SF_IO_NONBLOCK or setsockopt() with SO_SET_IOMODE Can be configured.
      * Block and Non-block Configurable Function
      * connect(), send(), recv(), sendto(), recvfrom()
      * ** getSn_SR(), getSn_TX_FSR() and getSn_RX_RSR() functions can be used like … like previous drivers. They are not related to IO mode **
```

-----

## 2\. ioLibrary

#### Download

**\< ioLibrary with example project : latest version \>**

|              |               |         |      |                                                         |
| ------------ | ------------- | ------- | ---- | ------------------------------------------------------- |
|              | Application   | Version | Note | Download Link                                           |
| Cookie board | Loopback test | 1.0.2   | \-   | ![Click](/products/w5500/w5500_coocox_project_v102.zip) |

\<Revision History\>

\* v102

``` 
  * socket.c(Refer to 2014-03-18)
    - TCPReSend() : Remove this function and related codes because TCP send mechanism was changed.
    - TCPReSendNB() : Remove this function and related codes because TCP send mechanism was changed.
    - TCPSendCHK() : Modify return value.
    - TCPSend() : Change return value to len.
  * loopback.c(Refer to 2014-03-18)
    - Existing mechanism resend packet if don't send all received packet, but change not to resend.
* v100
  * First release
```

**\< ioLibrary : latest version \>**

|                    |                       |         |      |                                              |
| ------------------ | --------------------- | ------- | ---- | -------------------------------------------- |
|                    | Description           | Version | Note | Download Link                                |
| Driver Source code | ioLibrary source code | 1.0.2   | \-   | ![Click](/products/w5500/iolibrary_v102.zip) |

**\< ioLibrary : old version \>**

<table>
<tbody>
<tr class="odd">
<td></td>
<td>Description</td>
<td>Version</td>
<td>Note</td>
<td>Download Link</td>
</tr>
<tr class="even">
<td>Driver Source code</td>
<td>ioLibrary source code</td>
<td>1.0.0</td>
<td>-</td>
<td><embed src="/products/w5500/iolibrary_v100.zip" /></td>
</tr>
<tr class="odd">
<td>Driver documents</td>
<td>Socket APIs Help(chm, html)<br />
(To use html, open the index.html)</td>
<td>1.0.0</td>
<td>-</td>
<td><embed src="/products/w5500/w5500_driver_doc_v100.zip" /></td>
</tr>
</tbody>
</table>

This ioLibrary has basic I/O functions, socket register access functions, common register access functions, utilities and functions for setting up a platform and network
This code has been evaluated on the CooCox Cookie Board with ARM Cortex-M0 MCU.

Please refer to this link for more details.

- [How to use on cookie board](http://wizwiki.net/wiki/doku.php?id=osh:cookie:singlepage).

The figure below shows the folder structure of this ioLibrary.

   ![](lib/exe/fetch.php?media=:products:w5500:folder.jpg)
   
   -----
   
   ## 3. BSD Type driver for W5200 User
   
- Driver Source code [: w5500_cortexm3_firmware_for_legacy.zip](lib/exe/fetch.php?media=:products:w5500:w5500_cortexm3_firmware_for_legacy.zip)  

This driver has the same BSD as the API for W5200 users. 
We have been evaluating this code on the __**ARM-CortexM3(STM32F103 series)**__ chipset

\<WRAP left round important 80%\> <span class="underline">This type of
driver is the final version. We will not update it later.</span>
<span class="underline">Please use the new (well coded :-)) driver code
for new projects.</span> \</WRAP\>


