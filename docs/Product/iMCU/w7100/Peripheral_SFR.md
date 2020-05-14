## Peripheral Registers

**P0, P1, P2, P3** : Port register. Set direction and read or write pin
logic. Go down to section 'I/O Ports' for the detailed functionality of
the [I/O Ports](/products/w7100a/io_ports).  
**Px\_PD** : Port Pull-Down register. Activate 85k Pull-Down resistor at
specific Port Pin. Go down to section 'I/O Ports' for the detailed
functionality of the [I/O Ports](/products/w7100a/io_ports).  
**Px\_PU** : Port Pull-Up register. Activate 4k7 Pull-Up resistor at
specific Port Pin. Go down to section 'I/O Ports' for the detailed
functionality of the [I/O Ports](/products/w7100a/io_ports).  
**TCON(0x88)** : Timer 0, 1 configuration register. Go to section
'Timer' for the Functionality of Timer 0 and Timer 1.  

**TMOD(0x89)** : Timer 0, 1 control mode register. Go to section 'Timer'
for the Functionality of Timer 0 and Timer 1.  
**TH0(0x8C), TL0(0x8A)** : Counter register of timer 0. Go to section
'Timer' for the Functionality of Timer 0 and Timer 1.  

**TH1(0x8D), TL1(0x8B)** : Counter register of timer 1. Go to section
'Timer' for the Functionality of Timer 0 and Timer 1.  
**SCON(0x98)** : UART Configuration Register. Go to section 'UART' for
the Functionality of UART.  
**SBUF(0x99)** : UART Buffer Register. Go to section 'UART' for the
Functionality of UART.\`  
**IE(0xA8)** : UART Bits in Interrupt Enable Register. Go to section
'UART‘ for the Functionality of UART.  
**IP(0xB8)** : UART Bits in Interrupt Priority Register. Go to section
'UART‘ for the Functionality of UART.  
**TA(0xC7)** : Timed Access Register. Go to section 'Watchdog Timer' for
Timed Access Registers of Watchdog Timer.  
**T2CON(0xC8)** : Timer 2 Configuration Register. Go to section 'Timer'
for the Functionality of Timer 2  
**RLDH(0xCB), RLDL(0xCA)** : Capture Registers of Timer 2. Go to section
'Timer' for the Functionality of Timer 2  
**TH2(0xCD), TL2(0xCC)** : Counter Register of Timer 2. Go to section
'Timer' for the Functionality of Timer 2  
**PSW(0xD0)** : Program Status Word Register. For detail information,
please refer to the section 'ALU'.

**WDCON(0xD8)** : Watchdog Control Register. Go to section 'Watchdog
Timer' for Timed Access Registers of Watchdog Timer.  

-----
## I/O Ports , P0, P1, P2, P3

![io\_ports](/document_framework/img/products/w7100a/w7100a_port-pin_003.jpg)
The GPIO of the **W7100A** MCU has fife operating modes, 'active low',
'high Z', 'Pull-up', 'Pull-down' and 'Keep' according to the SFR values.
The output driver is a simple open drain stage and not a Push-Pull
output. Therefore a low-impedant 'high' to the output must be performed
with the internal 4k7 pull-up resistor.  
With the port registers Px the direction (in or out) of the port pins is
selected.  
With the registers Px\_PD and Px\_PU the internal Pull-Down and Pull-Up
resistors are activated.  
The 'Keep' mode can be made by setting up both pull-up and pull-down
register simultaneously.  
The GPIO port register keeps its previous value in the 'Keep' operating
mode until leaving Keep-Mode.  
The I/O port pin functionalities are described in the following table:  

#### I/O Ports Pin Description

| Pin       | Active | Type | Pu/Pd | Description          |
| --------- | ------ | ---- | ----- | -------------------- |
| P0\[7:0\] | \-     | IO   | \-    | Port0 input / output |
| P1\[7:0\] | \-     | IO   | \-    | Port1 input / output |
| P2\[7:0\] | \-     | IO   | \-    | Port2 input / output |
| P3\[7:0\] | \-     | IO   | \-    | Port3 input / output |

Some port-reading instructions read from the data registers while others
read from the port pin.  
The "Read-Modify-Write" instructions are directed to the data registers
as shown below.
=== Read-Modify-Write Instructions (register access) ===

^ Instruction  ^ Function Description ^
| ANL  | Logic AND |
| ORL  | Logic OR |
| XRL  | Logic exclusive OR |
| JBC  | Jump if bit is set and cleared |
| CPL  | Complement bit 
| INC, DEC  | Increment, decrement byte |
|DJNZ  | Decrement and jump if not zero |
| MOV Px.y, C  | Move carry bit to bit y of port x |
| CLR Px.y  | Clear bit y of port x |
| SETB Px.y  | Set bit y of port x|

All other instructions read from a port exclusively through the port pins. All port pins can be used as GPIO  (General Purpose Input Output). The output driving voltage of the GPIO is 0V or 3.3V according to the Px_PD and Px_PU SFR value or the GPIO keeps its previous value in current operation mode. \\

Read and write accesses are performed in the I/O ports via their corresponding SFR: P0 (0x80), P1 (0x90), P2 (0xA0), and P3 (0xB0). \\
^  Px  ^ Status  ^
|  0  | output  |
|  1  | input (tri-state)  |

Internal pull-down (85k) and pull-up (4k7) resistors are activated by Px_PD (0xE3..0xE6) and Px_PU (0xEB..0xEE) register. \\
^  Px_PU  ^  Px_PD  ^ Status  ^
|  0  |  0  | -  |
|  0  |  1  | Pull-down  |
|  1  |  0  | Pull-up  |
|  1  |  1  | Keep mode  |

===Use case: Output===
For best output performance activate Px_PU (4k7 pull-up) and use direction register Px to set the port pin to 0 or 1. \\
^ direct.  ^ Px  ^ Px_PD  ^ Px_PU  ^  out  ^ annotation  ^
|  out   |  0    |  0    |  0  |  0  | low imp. (no internal current)   |
|  :::   |  :::  |  0    |  1  |  0  | low imp. (0.7mA current in 4k7)  |
|  'in'  |  1    |  0    |  1  |  1  | 4k7 pull-up  |

#### Use case: Input

For best input performance write '1' into the Px register. This will
make the port pin high impedant and set input direction. Additionally
and if needed activate the internal resistors with the Px\_PD or Px\_PU
registers corresponding to your external circuit.  
A read operation on the Px register is done directly to the Port Pin
status.  
^ direct. ^ Px ^ Px\_PD ^ Px\_PU ^ in ^ annotation ^

|     |     |   |   |    |                              |
| --- | --- | - | - | -- | ---------------------------- |
| in  | 1   | 0 | 0 | \- | high imp. - tri-state (2.5V) |
| ::: | ::: | 0 | 1 | 1  | 4k7 pull-up                  |
| ::: | ::: | 1 | 0 | 0  | 85k pull-down                |
| ::: | ::: | 1 | 1 | \- | Keep mode                    |

-----

#### All peripheral registers:
**P0 (0*80)**
|7|6|5|4|3|2|1|0|Reset value|
|--|--|--|-|-|-|-|-|
|P0.7|P0.6|P0.5|P0.4|P0.3|P0.2|P0.1|P0.0|0xFF|

**### P1 (0x90)

| 7    | 6    | 5    | 4    | 3    | 2    | 1    | 0    | Reset value |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----------- |
| P1.7 | P1.6 | P1.5 | P1.4 | P1.3 | P1.2 | P1.1 | P1.0 | 0xFF        |

### P2 (0xA0)

| 7    | 6    | 5    | 4    | 3    | 2    | 1    | 0    | Reset value |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----------- |
| P2.7 | P2.6 | P2.5 | P2.4 | P2.3 | P2.2 | P2.1 | P2.0 | 0xFF        |

### P3 (0xB0)

| 7    | 6    | 5    | 4    | 3    | 2    | 1    | 0    | Reset value |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----------- |
| P3.7 | P3.6 | P3.5 | P3.4 | P3.3 | P3.2 | P3.1 | P3.0 | 0xFF        |

