---
id: datasheet-dtu
title: Datasheet
date: 2020-04-08
---

## Hardware Specification

### Product Spec Table

| Category |                | Description |
|----------|----------------|------------------------|
| MCU      | ARM Cortex-M3 Core   | **W55MH32**<br /> &nbsp; &nbsp; 1. 32-bit Arm® Cortex®-M3 Core <br /> &nbsp; &nbsp; 2. 216MHz maximum frequency<br /> &nbsp; &nbsp; 3. Flash: 1024KB<br /> &nbsp; &nbsp; 4. 96K bytes of SRAM<br />
|  		   | Hardwired TCP/IP Core      | 1. 8 independent Sockets<br /> 2. SRAM for socket: 32KB<br /> 3. TCP/IP Protocols: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE |
| Serial   | Interface      | **WIZ-DTU**: RS232 & RS485|
|          | Signal         | RS322: TXD, RXD <br /> RS485: RS485(A), RS485 (B)|
|          | Parameters     | 1. Parity: None, Odd, Even <br></br> 2. Data bits: 7, 8 bit <br></br> 3. Flow control: None |
|          | Baud Rate Speed| 1200 bps to 1,152,000 bps |
| Dimension| L x W x H      | **WIZ-DTU**: 82.2 mm x 56.6mm x 23.40mm|
| Connector type |          | **WIZ-DTU**: Terminal blocks|
| Input Voltage |           | **WIZ-DTU**: DC 9 - 24 V |
| Temperature |             | -40℃ ~ 85℃ (Operation), <br></br> -50℃ ~ 95℃, 5 ~ 95% (Storage range) |

<!-- -----

## Product Comparison Table


| Specification       | W5500S2E-S1    | W5500S2E-Z1    |
| ------------------- | -------------- | -------------- | 
| Operation Mode      | TTL            | TTL            |
| Communication Method| TTL to Ethernet| TTL to Ethernet|
| Pin Layouts         | 7x2 , 7x1      | 12x1 , 11x1    |
| Input Voltage       | 3.3V           | 5V             | -->

---


## WIZ-DTU Dimension
|                                                                                  |                                                                     
| -------------------------------------------------------------------------------- | 
| ![](/img/products/wizdtu/Dimension.png)                               | 
|                                                                                  | 



## WIZ-DTU Pin Description
|                                                                                  |                                                                     
| -------------------------------------------------------------------------------- | 
| ![](/img/products/wizdtu/WIZ-DTU_pin.png)                               | 
|                                                                                  | 


**Interface Pin Assignments** 

| Port   | Type 		          | Description 																					  |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------------- |
| 9 - 24 V DC	 | Power supply 		  	  | The main power support for WIZ-DTU 	  |     
| Reset | Reet Button     | Reset button to reset or factory reset the module.<br /> Factory reset required to hold the button for 3 seconds	 														  |     
| RJ45    | Ethernet 		  | Ethernet Port for WIZ-DTU	   														  |
| 9 - 24V   | Power Supply   	 		  	  | Alternative Power supply for WIZ-DTU|  
| GND   | Power GND 		  	  | Common ground for WIZ-DTU														  |
| RXD    | Serial Port 1			  | 3.3V TTL serial port 1 receive pin.	 															  |
| TXD    | Serial port 2	      	  | 3.3V TTL serial port 2 transmit pin. 															  |
| RS485(A)    | RS485                        | RS485 A line 																								  |
| RS485(B)    | RS485             | RS485 B line 																			  |

-----

## Electrical Characteristics

### Operating Conditions

The following tables show the voltage and current under 25 &deg;C environment 

|Symbol|Parameter   |Module     |type           |Min |Typ |Max  |Unit|
| ---  | --------   | ----      | ----          | ---| ---| --- | --- |
|Vin|Module Voltage |WIZ-DTU   | Voltage Input | 9 | 12 | 24 |V   |
|Iin|Module Current |WIZ-DTU   | Current Input | 40.0 | 80.0| 107.0 |mA |
| - |Module Current |WIZ-DTU   | Standby Current| - | 78| - |mA |
| - |Module Current |WIZ-DTU   | Normal communication| - | 80| - |mA |


