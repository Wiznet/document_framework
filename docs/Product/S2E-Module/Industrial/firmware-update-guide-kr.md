---
id: firmware-update-guide-kr
title: Firmware update guide-[KR]
date: 2024-08-08
---



-----



## W232N Firmware Update Overview



### Memory Map

  - Internal Flash
    - Main flash size: 2 Mbytes

```cpp
 Top Flash Memory Address /-------------------------------------------\  0x10200000
                          |                                           |
                          ~                                           ~
                          |             Reserved (832KB)              |
                          |-------------------------------------------|  0x10130000
                          |                                           |
                          |             Parameters (64KB)             |
                          |                                           |
                          |-------------------------------------------|  0x10120000
                          |                                           |
                          |                                           |
                          |                                           |
                          |                                           |
                          |        Firmware Binary Bank (512KB)       |
                          |                                           |
                          |                                           |
                          |                                           |
                          |-------------------------------------------|  00x100A0000
                          |                                           |
                          |                                           |
                          |                                           |
                          |                                           |
                          |        Application Bank (512KB)           |
                          |                                           |
                          |                                           |
                          |                                           |
                          |-------------------------------------------|  0x10020000
                          |                                           |
      Page 1 (256KB)      |                                           |
                          |             Bootloader (128KB)            |
      Page 0 (256KB)      |                                           |
                          |                                           |
                          \-------------------------------------------/  0x10000000
```



### 펌웨어 업데이트 순서도

|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/firmware_update_sequence.png) |
| Figure: **펌웨어 업데이트 순서도**                                                         |



-----



## W232N 펌웨어 업로드 또는 업데이트 방법

W232N은 펌웨어를 업로드하거나 업데이트하는 세 가지 방법을 제공합니다.

- [Config-Tool을 사용하는 방법](#Config-Tool을-사용해-FW-업로드-및-업데이트)
- [USB를 사용하는 방법](#USB를-사용하는-방법)
- [SWD를 사용하는 방법](#SWD를-사용하는-방법)





-----




## 필요한 하드웨어 및 소프트웨어



### 하드웨어

- W232N
- 5V~36V의 전원 어댑터
- 데이터 케이블 (이더넷)

### 소프트웨어

  - WIZnet S2E Configuration Tool 
    - [최신 버전 다운로드](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)



## Config-Tool을 사용한 FW 업로드-및-업데이트 방법


### 1단계: Config-tool 실행

설치된 **'Config-tool'** 실행


### 1단계: 펌웨어 업로드

1. **Firmware Upload** 클릭

|                                                                                                  |
| :----------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/click_firmware_upload_button.png) |
| Figure: **Click Firmware Upload button**                                                         |

2. 업로드할 FW 선택

업로드할 FW는 **.bin**(*_linker.bin)형식만 지원합니다.

.bin 이외의 파일 형식의 펌웨어는 제대로 업로드하거나 업데이트할 수 없습니다.

|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/select_uploaded_firmware.png) |
| Figure: **Select uploaded firmware**                                                         |

3. FW 업로드

|                                                                                        |
| :------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/uploading_firmware.png) |
| Figure: **Uploading firmware**                                                         |



### 3단계: 완료

펌웨어 업로드 또는 업데이트 완료!

펌웨어 업로드 또는 업데이트가 완료된 후 구성 도구에서 약 5초 후에 W232N이 검색됩니다.

|                                                                                                        |
| :----------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/firmware_upload_or_update_complete.png) |
| Figure: **Firmware upload or update complete**                                                         |



-----
