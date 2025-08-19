---
id: flash
title: Embedded Flash memory
date: 2020-06-10
--- 

## Flash main features

* Up to 128Kbytes of Flash memory
* Memory organization:
  * Main Flash memory block:  
    Up to 128Kbytes
  * Information block:  
    Up to 512bytes  
    Information block is read only
  * Data block:  
    Up to 512bytes
* Flash memory interface features:
  * Read interface with prefetch buffer( 1 x 32-bit words )
  * Flash Program / Erase operation
  * Read / Write protection

## Flash memory functional description

### Flash memory organization

The Flash memory is organized of 32-bit wide memory cells that can be used for storing both code and data constants.
The memory organization is based on a main Flash memory block containing 512 sectors of 256byte or 32 blocks of 4Kbyte. The block and sector provides read/write protection.

<table class="tg">
  <tr>
    <th class="tg-huh2">Flash area<br />  </th>
    <th class="tg-s6z2">Flash memory address<br />  </th>
    <th class="tg-s6z2">Size (bytes)<br />  </th>
    <th class="tg-huh2">Name</th>
    <th class="tg-s6z2">Description<br />  </th>
  </tr>
  <tr>
    <td class="tg-s6z2" rowspan="18">M<br />a<br />i<br />n<br /> <br />F<br />l<br />a<br />s<br />h<br /><br /><br />  m<br />e<br />m<br />o<br />r<br />y<br />  </td>
    <td class="tg-s6z2">0x0000 0000 ~ 0x0000 00FF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector 0<br />  </td>
    <td class="tg-s6z2" rowspan="6">Block 0<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0000 0100 ~ 0x0000 01FF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector 1<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0000 0200 ~ 0x0000 02FF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector 2<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">. . .<br />  </td>
    <td class="tg-s6z2">. . .<br />  </td>
    <td class="tg-s6z2">. . .<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0000 0E00 ~ 0x0000 0EFF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector 14<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0000 0F00 ~ 0x0000 0FFF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector 15<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">. . .<br />  </td>
    <td class="tg-s6z2">. . .<br />  </td>
    <td class="tg-s6z2">. . .<br />  </td>
	<td class="tg-s6z2">. . .<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0000 7000 ~ 0x0000 70FF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector128<br />  </td>
    <td class="tg-s6z2" rowspan="5">Block 7<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0000 7100 ~ 0x0000 71FF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector129<br />  </td>
  </tr>
  <tr>
	<td class="tg-s6z2">. . .<br />  </td>
	<td class="tg-s6z2">. . .<br />  </td>
	<td class="tg-s6z2">. . .<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0000 7E00 ~ 0x0000 7EFF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector142<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0000 7F00 ~ 0x0000 7FFF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector143<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">. . .<br />  </td>
    <td class="tg-s6z2">. . .<br />  </td>
    <td class="tg-s6z2">. . .<br />  </td>
    <td class="tg-s6z2">. . .<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0001 F000 ~ 0x0001 F0FF <br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector496<br />  </td>
    <td class="tg-s6z2" rowspan="5">Block 31<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0001 F100 ~ 0x0001 F1FF<br /></td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector497<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">. . .<br />  </td>
    <td class="tg-s6z2">. . .<br />  </td>
    <td class="tg-s6z2">. . .<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0001 FE00 ~ 0x0001 FEFF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector510<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0001 FF00 ~ 0x0001 FFFF <br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2">Sector511<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2" rowspan="2"><br />  Information<br />  block<br />  </td>
    <td class="tg-s6z2">0x0003 FC00 ~ 0x0003 FCFF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2"> <br />  </td>
    <td class="tg-s6z2">Lock info<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0003 FD00 ~ 0x0003 FDFF<br />  </td>
    <td class="tg-s6z2" colspan="3">Reserved<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2" rowspan="2"><br />  Data block<br />  </td>
    <td class="tg-s6z2">0x0003 FE00 ~ 0x0003 FEFF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">Data0<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">0x0003 FF00 ~ 0x0003 FFFF<br />  </td>
    <td class="tg-s6z2">256<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">Data1<br />  </td>
  </tr>
  </table>

The W7500 embedded Flash memory can be programmed using in-application programming.
IAP allows the user to re-program 
the Flash memory while the application is running.
The program and erase operations can be performed over the whole product voltage range.

In W7500x_Library_Examples, there is the IAP Example Project and the below function is supported to use IAP.
  
void DO_IAP( uint32_t id, uint32_t dst_addr, uint8_t* src_addr, uint32_t size);

This function requests those parameters, id, dst_addr, src_addr and size.
'id' is already defined in 'main.c'. 'dst_addr' is the flash memory address in the upper table. 
'src_addr' is the buffer pointer user want to program. 'size' is the flash size user chooses.
Please refer flash address and size mentioned in the upper table.

```cpp
// IAP 'id' paremeter define
#define IAP_ENTRY           0x1FFF1001     // Because Thum code
#define IAP_ERAS            0x010
#define IAP_ERAS_DAT0       (IAP_ERAS + 0) // Erase Data 0 block
#define IAP_ERAS_DAT1       (IAP_ERAS + 1) // Erase Data 1 block
#define IAP_ERAS_SECT       (IAP_ERAS + 2) // Erase a Sector in Main Flash Memory 
#define IAP_ERAS_BLCK       (IAP_ERAS + 3) // Erase a Block in Main Flash Memory 
#define IAP_ERAS_CHIP       (IAP_ERAS + 4) // Erase all code
#define IAP_ERAS_MASS       (IAP_ERAS + 5) // Erase all code & data
#define IAP_PROG            0x022
```

This is how to Erase and Program flash memory. Especially, with IAP_ERAS_DAT0 and IAP_ERAS_DAT1, 
there is no need to put other parameters (there are default values).

```cpp
// Step 1 DATA0 Erase, Read, Write Test
DO_IAP(IAP_ERAS_DAT0,0,0,0);
DO_IAP(IAP_PROG,DAT0_START_ADDR,buffer,SECT_SIZE);
```

Operating program can be deleted when user use 'IAP_ERAS_CHIP' or 'IAP_ERAS_MASS'.

```cpp
// Using IAP_ERAS_CHIP or IAP_ERAS_MASS
DO_IAP(IAP_ERAS_CHIP,0,0,0);
DO_IAP(IAP_ERAS_MASS,0,0,0);
``` 