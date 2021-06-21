---
id: internal_memory_and_sfr
title: Internal Data Memory (256 Byte) and SFR
date: 2020-04-03
---


The Figure below shows the Internal Memory and Special Function
Registers (SFR) map.

| 0xFF .. 0x80 | Upper Internal RAM shared with Stack space (indirect addressing)          | [SFR Special Function Registers (direct addressing)](Peripheral_SFR.md) |
| ------------ | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 0x7F .. 0x30 | Lower Internal RAM shared with Stack space (direct & indirect addressing) |                                                                            |
| 0x2F .. 0x20 | bit addressable area                                                      |                                                                            |
| 0x1F .. 0x00 | 4 banks, R0-R7 each                                                       |                                                                            |

The lower internal RAM consists of four register banks with eight
registers each, a bit- addressable segment with 128 bits (16 bytes) that
begins at 0x20, and a scratchpad area with 208 bytes is embedded. With
indirect addressing mode ranging from 0x80 to 0xFF, the highest 128
bytes is accessed as an internal memory.  
But with direct addressing mode ranging from 0x80 to 0xFF, this area is
accessed as a **SFR** memory:

