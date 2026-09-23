---
id: eoe-55rpl-datasheet-kr
title: EOE-55RPL Datasheet [KO]
date: 2026-08-25
keywords: [wiznet, w55rp20, EOE-55RPL datasheet, hardwired tcp/ip, ethernet, SPE, 10 base-T1L]
description: EOE-RPL은 10 Base-T1L 미디어 컨버터와 WIZnet W55RP20을 결합한 Single Pair Ethernet 모듈입니다.
---

<!-- Product image pending. -->

## 개요

본 문서는 **EOE-55RPL**의 하드웨어 사양서입니다. EOE-55RPL는 Analog Device의 ADIN1100+ADIN1200 으로 구성된 
10/100 to T1L 미디어컨버터 회로와 WIZnet **W55RP20** 하드와이어드 TCP/IP(Ethernet Offload Engine)를 내장한 M0+ Dual core MCU를
결합한 **Combo Module** 입니다.

EOE-55RPL는 고객 캐리어 보드에 실장하는 솔더다운 모듈로, 자세한 핀맵은 모듈의 데이터시트를 참고바랍니다.
<!--평가용 보드가 필요하시면 [EOE-W63-EVB](./EOE-W63-EVB.md) 문서를 참고하십시오. -->

:::note
EOE-55RPL는 완제품 보드가 아니라 모듈입니다. **RJ45 잭, USB 커넥터, DC 잭, 푸시 버튼,
3.3V 레귤레이터가 모듈에 포함되어 있지 않으며** 이는 모두 캐리어 보드의 몫입니다.
모듈은 3.3V 전원을 직접 공급받아 동작합니다.
:::

## 주요 특징

- W55RP20(RP2040 듀얼코어 Arm Cortex-M0+ MCU + W5500 하드와이어드 TCP/IP 코어 + 2 MB 플래시) + 10 Base-T1L 미디어컨버터(ADIN1100+ADIN1200)
  - 하드와이어드 TCP/IP 프로토콜: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
- S2E(Seiral to Ethernet)FW 다운로드시 풀 모뎀 컨트롤을 지원하는 2채널 UART (RX / TX / RTS / CTS / DSR / DTR)
  `SPI_IF_SEL` 핀으로 선택하는 UART 또는 SPI 호스트 인터페이스
  채널별 상태 출력: `STATUS0_PHY`, `STATUS0_TCP`, `STATUS1_TCP`
  이더넷 PHY 상태 출력: `LINK`, `ACT`, `SPD`, `DUP` — 각 신호는 330 Ω 직렬 저항을 통해
- 클럭 내장: RP2040 코어용 12 MHz 오실레이터, 이더넷 PHY용 25 MHz 크리스털 —
  외부 클럭이 필요 없습니다
- 단일 3.3V 전원
- 엣지 인터페이스로 인출된 제어 핀: `RSTn`, `RP_BOOT`(RP2040 BOOTSEL),
- S2E 다운시 `FW_BOOT`(S2E 펌웨어 부트), `FACT_RSTn`(공장 초기화), `HW_TRIG`(AT 커맨드 모드), `DEBUG`
  인터페이스 선택 핀: `SPI_IF_SEL`, `UART0_IF_SEL`, `UART1_IF_SEL`
- BOOTSEL 모드 펌웨어 업로드용 네이티브 USB (`D_P` / `D_N`)
- SWD 디버그 포트 (`SWCLK` / `SWDIO`)

## 전기적 사양

| 항목 | 기호 | 최소 | 표준 | 최대 | 단위 | 비고 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 공급 전압 | VDD33 | 3.0 | 3.3 | 3.6 | V | 단일 레일 |
| I/O 레벨 | — | — | 3.3 | — | V | TTL, 5V 비허용 |
| 동작 온도 | TA | −40 | — | +85 | ℃ | 부품 정격 기준, 모듈 정격은 TBD |
| 소비 전류 | IDD | — | TBD | TBD | mA | 구현 Application에 따라 다름. 업데이트 예정 |

:::caution
모듈의 모든 I/O는 **3.3V이며 5V 레벨을 지원하지 않습니다.** 5V 호스트 신호는 외부 회로에서
레벨 시프트하십시오.
:::

### 전원

모듈은 7 / 12 / 27번 핀으로 단일 3.3V(`VDD33`)를 입력받습니다. 
모듈 내부에 Decap이 포함되었으니 외부 Decap은 불필요합니다.

### 리셋

`RSTn`은 액티브 로우이며, 모듈 내부에서 4.7 kΩ 저항으로 3.3V에 풀업 연결되어 있습니다. 
18번 핀에 연결되어있습니다.

## 하드웨어 사양

### 클럭

| 부품 | 주파수 | 용도 |
| ---- | ------ | ---- |
| Y1 | 25 MHz | W55RP20 이더넷 PHY 클럭  |
| Y2 | 12 MHz | W55RP20 M0+ Core 클럭 |
| Y3 | 50 MHz | 10 Base-T1L PHY 클럭  |

모두 모듈에 실장되어 있어 외부 클럭 입력이 필요 없습니다.

### 이더넷 인터페이스

아래 신호는 모듈 내부 신호이며 헤더로 인출되지 **않습니다.**

| 네트 | 기능 | 내부 결선
| ---- | ---- | ---- |
| MDC | ADIN1100, ADIN1200 Config SMI Clock | GP27 |
| MDIO | ADIN1100, ADIN1200 Config SMI DIO | GP28 |


### 이더넷 MDI 인터페이스

모듈에는 10 Base-T1L 종단 MDI 회로가 구현되어 있으나 안정적인 사용을 위해서
외부에 CMC 및 보호 소자를 사용하는 것을 권장합니다.

자세한 회로는 EVB를 참고 부탁드립니다.


### 이더넷 상태 신호

| 신호 | 번호 | 표시 내용 |
| ---- | ---- | --------- |
| LINKn | 36 | 이더넷 링크 연결됨 (액티브 로우) |
| LED_0  | 35 | TBD |
| LED_1   | 34 | TBD |

신호 출력만 제공되며 **모듈에는 표시용 LED가 실장되어 있지 않습니다.** 필요하면 캐리어
보드에서 적절한 직렬 저항과 함께 LED를 추가하십시오.



### USB 인터페이스

`D_P`(26번 핀)와 `D_N`(25번 핀)은 W55RP20의 **네이티브 USB** 라인이며, 모듈에는 USB-to-UART
브리지가 없습니다. 캐리어 보드에서 90 Ω 차동 페어로 배선하고 통상의 직렬 종단 저항과 USB
커넥터를 배치하십시오.

USB 인터페이스는 W55RP20이 BOOTSEL 모드(리셋 시 `RP_BOOT` 로우)로 진입한 후 펌웨어를
업로드·업데이트하는 데 사용합니다. 자세한 방법은 아래 [매뉴얼](#매뉴얼) 항목의 FW 업데이트
가이드를 참고하십시오.

### SWD / 디버그 인터페이스

| 모듈 핀 | 신호 | 설명 |
| ------- | ---- | ---- |
| 15 | SWCLK | Serial Wire Debug 클럭 |
| 16 | SWD   | Serial Wire Debug 데이터 |
| 18 | RSTn  | 리셋  |

### 핀 배치

TBD

### 외형 치수

|                          |
| ------------------------ |
| TBD                      |
| ***EOE-W55RP20 Revision 1.0 Dimension*** |

- TBD (mm)

## 매뉴얼

TBD

## 인증

- TBD

## 설계 파일

### 회로도

| H/W 버전 | 파일 형식 | 다운로드 | 비고 |
| -------- | --------- | -------- | ---- |
| 1.0      | Altium    | TBD      | -    |
| :::      | PDF       | TBD      | :::  |

### 부품 목록

| H/W 버전 | 파일 형식 | 다운로드 | 비고 |
| -------- | --------- | -------- | ---- |
| 1.0      | Excel     | TBD      | -    |
| :::      | PDF       | TBD      | :::  |

### 3D 파일

| H/W 버전 | 파일 형식 | 다운로드 | 비고 |
| -------- | --------- | -------- | ---- |
| 1.0      | STEP      | TBD      | -    |
