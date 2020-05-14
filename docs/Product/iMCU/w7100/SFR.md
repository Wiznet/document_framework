### SFR Memory Map

All of the SFR in the left hand side column ending with 0 or 8 are bit
addressable.  

| from | 0 / 8                     | 1 / 9 | 2 / A     | 3 / B                            | 4 / C     | 5 / D   | 6 / E   | 7 / F    | to       |
| ---- | ------------------------- | ----- | --------- | -------------------------------- | --------- | ------- | ------- | -------- | -------- |
| 0xF8 | EIP                       | DPSBK | RAMBA16   |                                  | RAMEA16   |         | PHYCONF | WCONF    | **0xFF** |
| 0xF0 | B                         | ISPID | ISPADDR16 |                                  | ISPDATA   | CKCBK   | DPX0BK  | DPX1BK   | **0xF7** |
| 0xE8 | EIE                       |       | MXAX      | [P0\_PU](/products/w7100a/P0_PU) | P1\_PU    | P2\_PU  | P3\_PU  | PHY\_IND | **0xEF** |
| 0xE0 | ACC                       |       |           | [P0\_PD](/products/w7100a/P0_PD) | P1\_PD    | P2\_PD  | P3\_PD  |          | **0xE7** |
| 0xD8 | WDCON                     |       |           |                                  | CLK\_CNTx |         |         |          | **0xDF** |
| 0xD0 | PSW                       |       |           |                                  |           |         |         |          | **0xD7** |
| 0xC8 | T2CON                     |       | RLDL      | RLDH                             | TL2       | TH2     |         |          | **0xCF** |
| 0xC0 |                           |       |           |                                  |           | Res.    |         | TA       | **0xC7** |
| 0xB8 | IP                        |       |           |                                  |           |         |         |          | **0xBF** |
| 0xB0 | P3                        |       |           |                                  |           |         |         |          | **0xB7** |
| 0xA8 | IE                        |       |           |                                  |           |         |         |          | **0xAF** |
| 0xA0 | P2                        |       |           |                                  |           |         |         |          | **0xA7** |
| 0x98 | SCON0                     | SBUF  |           |                                  | INTWTST   | EXTWTST |         | ALECON   | **0x9F** |
| 0x90 | [P1](/products/w7100a/P1) | EIF   | WTST      | DPX0                             |           | DPX1    |         |          | **0x97** |
| 0x88 | TCON                      | TMOD  | TL0       | TL1                              | TH0       | TH1     | CKCON   |          | **0x8F** |
| 0x80 | [P0](/products/w7100a/P0) | SP    | DPL0      | DPH0                             | DPL1      | DPH1    | DPS     | PCON     | **0x87** |

  
New SFR – New additional SFR, described in this section  

[Peripheral SFR](/products/w7100a/Peripheral_SFR), described in this
section  
Extended SFR – Extended from standard 8051, described in this section  

Standard – standard 8051 SFR, described in this section
