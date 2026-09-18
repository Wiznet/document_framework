---
id: eoe-w55-datasheet-kr
title: EOE-W55 Datasheet [KO]
keywords: [wiznet, w5500, esp32-s3, EOE-W55, hardwired tcp/ip, ethernet, wifi, ble, som, spi]
description: EOE-W55는 ESP32-S3와 WIZnet W5500을 결합한 듀얼 연결 System-on-Module입니다.
---

## 개요

EOE-W55는 Espressif ESP32-S3 애플리케이션 프로세서와 WIZnet W5500 Hardwired TCP/IP 이더넷 컨트롤러를 결합한 모듈입니다. 두 장치는 SPI로 통신하며, ESP32-S3는 Wi-Fi, Bluetooth LE, USB 및 범용 주변장치 인터페이스를 제공합니다.

:::note
본 페이지는 현재의 출시 전 하드웨어 정의를 설명합니다. 최종 핀 배치, 소비 전류 및 양산 정격은 추후 확정됩니다.
:::

## 주요 특징

- 최대 240 MHz 듀얼코어 Xtensa LX7 ESP32-S3
- 2.4 GHz Wi-Fi 4 / 802.11 b/g/n 및 Bluetooth LE
- SPI로 연결된 W5500 Hardwired TCP/IP 컨트롤러
- 10/100Base-T 이더넷 MAC 및 PHY
- TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE 하드웨어 처리
- 독립 하드웨어 소켓 8개
- TX/RX용 내부 버퍼 메모리 32 KB
- W5500 인터페이스에서 SPI 모드 0/3 및 최대 80 MHz 지원
- 프로그래밍·디버그용 네이티브 USB 및 UART0
- GPIO, ADC, I2C, SPI 확장 인터페이스
- 18.3 × 26.15 mm 모듈, 1.1 mm 핀 피치

## W5500 이더넷 컨트롤러

| 항목 | 사양 |
| --- | --- |
| 호스트 인터페이스 | SPI 모드 0 또는 3 |
| 최대 SPI 클럭 | 80 MHz |
| 하드웨어 소켓 | 8개 |
| 내부 패킷 버퍼 | TX/RX용 32 KB |
| 네트워크 프로토콜 | TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE |
| 이더넷 | 자동 협상을 지원하는 10Base-T / 100Base-TX |
| 저전력 기능 | Power-down 모드 및 UDP Wake-on-LAN |

## 모듈 인터페이스

| 인터페이스 | 기능 |
| --- | --- |
| 이더넷 | 외부 RJ45 마그네틱 연결용 W5500 이더넷 MDI 신호 |
| 무선 | 안테나 커넥터를 통한 ESP32-S3 Wi-Fi 및 Bluetooth LE |
| USB | 프로그래밍·디버그용 ESP32-S3 네이티브 USB |
| UART | UART0 송수신 |
| 확장 | GPIO, ADC, I2C, SPI |
| 이더넷 상태 | 링크, 동작, 속도 및 듀플렉스 상태 출력 |

## 설계 참고 사항

- W5500 SPI 연결은 짧게 유지하고 출시된 레퍼런스 회로도를 따르십시오.
- 캐리어 보드에 외부 RJ45 마그네틱 또는 마그네틱 일체형 RJ45 잭을 배치하십시오.
- 3.3 V 전원은 ESP32-S3 Wi-Fi 송신 피크 전류를 기준으로 설계하십시오.
- ESP32-S3에 연결되는 외부 I/O는 3.3 V이며 5 V 톨러런트가 아닌 것으로 취급하십시오.

## 추후 확정 항목

- 최종 핀 배치 및 기구 도면
- 모듈 소비 전류와 열 특성
- 인증 및 양산 주문 정보
- 레퍼런스 회로도, BOM 및 3D 모델
