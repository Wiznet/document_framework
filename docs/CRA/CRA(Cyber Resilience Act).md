
---
title: "WIZnet Product Security & Vulnerability Reporting"
description: "WIZnet 제품 보안 취약점 신고, 보안 공지 및 CRA 대응 안내"
slug: "/security"
status: "draft"
last_updated: "2026-04-27"
review_required: ["Product", "Engineering", "Legal/Compliance", "Support"]
---

<!--
Publication TODO
- 보안 신고 전용 메일 alias 또는 웹 폼 URL 확정: [security@wiznet.io] / [form URL]
- PGP 공개키 제공 여부 확정
- 제품별 CRA 적용 범위, 지원 기간, 보안 업데이트 정책 확정
- 법무/컴플라이언스 검토 후 게시
-->

# (작성중인 페이지 입니다.)
# WIZnet Product Security & Vulnerability Reporting

WIZnet은 안정적이고 안전한 네트워크 연결 솔루션을 제공하기 위해 제품 보안 취약점 신고, 보안 업데이트, 보안 공지 절차를 지속적으로 개선하고 있습니다.

이 페이지는 WIZnet 제품 또는 관련 펌웨어/소프트웨어에서 발견된 보안 취약점을 신고하는 방법과, 보안 공지 및 업데이트가 제공되는 방식을 안내합니다.

> 본 페이지는 초안입니다. 실제 게시 전 전용 신고 채널, 제품별 지원 기간, CRA 적용 범위, 법무 검토가 필요합니다.

---

## 1. 보안 취약점 신고 채널

WIZnet 제품의 보안 취약점을 발견하셨다면 아래 전용 채널로 신고해 주세요.

- **Security Contact:** [security@wiznet.io]
- **Security Report Form:** [https://wiznet.io/security/report]
- **PGP Key:** [PGP public key URL 또는 fingerprint 입력]
- **Preferred Languages:** English, Korean

일반 기술 문의, 구매 문의, 샘플 요청, 커스터마이징 문의는 기존 문의 채널을 이용해 주세요. 보안 취약점 신고는 공개 포럼, 공개 GitHub 이슈, SNS 댓글 등에 먼저 게시하지 말고 위 전용 채널로 보내주시기 바랍니다.

---

## 2. 신고 대상

아래와 같은 문제는 보안 취약점 신고 대상으로 접수할 수 있습니다.

- WIZnet 제품, 모듈, 보드, 펌웨어, 예제 코드 또는 관련 도구에서 발생하는 인증 우회, 권한 상승, 원격 코드 실행, 정보 노출, 서비스 거부, 암호화/키 관리 오류
- 네트워크 프로토콜 처리 과정에서 제품 보안성에 영향을 줄 수 있는 취약점
- 제품의 기본 설정, 업데이트 절차, 보안 기능 동작과 관련된 취약점
- 제품 공급망, 펌웨어 배포, 문서화된 보안 설정과 관련된 보안 리스크
- 이미 악용 중이거나 악용 가능성이 높은 취약점 또는 보안 사고 징후

다음 항목은 보안 취약점 신고가 아닌 일반 지원 채널로 문의해 주세요.

- 일반 사용법, 회로 검토, 성능 튜닝, 호환성 문의
- 판매, 샘플, 견적, 배송, 반품 문의
- 보안 영향이 확인되지 않은 단순 기능 요청
- WIZnet이 관리하지 않는 제3자 서비스 또는 고객 시스템 자체의 취약점

---

## 3. 제품 범위

WIZnet은 제품별 특성, 사용 목적, 시장 출시 형태, 펌웨어/소프트웨어 포함 여부에 따라 보안 지원 범위를 정의합니다.

| 구분 | 예시 | 보안 신고 처리 방향 |
|---|---|---|
| Products with Digital Elements | 네트워크 연결 기능과 펌웨어/소프트웨어가 포함된 제품 | 제품별 지원 기간과 업데이트 정책에 따라 처리 |
| Serial-to-Ethernet / Ethernet Modules | S2E 계열 모듈, Ethernet 모듈, ioNIC 모듈 등 | CRA 및 제품 보안 요구사항 검토 대상 |
| Evaluation Boards | EVB, Pico 계열 평가 보드 등 | 제품의 시장 출시 형태와 의도된 사용 목적에 따라 별도 검토 |
| Semiconductor Components | Ethernet chip, MCU chip 등 | 부품 단독 유통 여부와 최종 제품 내 역할에 따라 별도 검토 |
| Firmware / Example Code / GitHub Repositories | 공식 펌웨어, SDK, 예제 코드, 도구 | 저장소별 보안 정책과 지원 범위에 따라 처리 |

제품별 적용 범위, 보안 업데이트 지원 기간, 취약점 처리 방식은 해당 제품 페이지, 릴리즈 노트 또는 보안 공지를 통해 별도로 안내될 수 있습니다.

---

## 4. 취약점 신고 시 포함할 정보

가능한 경우 아래 정보를 포함해 주세요. 정보가 충분할수록 빠른 검토와 재현이 가능합니다.

```text
Subject: [SECURITY] <제품명 또는 저장소명> 취약점 신고

1. Reporter
- Name / Organization:
- Email:
- Preferred contact method:
- Public disclosure plan, if any:

2. Affected Product
- Product name / model:
- Hardware revision:
- Firmware / software version:
- Repository URL / commit hash, if applicable:
- Configuration / network environment:
- Country or region where the product is used, if relevant:

3. Vulnerability Summary
- Short description:
- Attack vector:
- Required privileges:
- User interaction required:
- Impact on confidentiality / integrity / availability / safety:

4. Reproduction Steps
- Steps to reproduce:
- Proof-of-concept code or packet capture:
- Logs, screenshots, crash dumps:
- Expected behavior:
- Actual behavior:

5. Mitigation
- Temporary workaround, if known:
- Suggested fix, if any:
```

민감한 PoC, exploit code, 고객 데이터, 인증 정보가 포함된 경우 암호화된 채널 또는 사전에 협의된 전달 방식을 사용해 주세요.

---

## 5. 신고 후 처리 절차

WIZnet은 접수된 보안 신고를 아래 절차에 따라 검토합니다.

1. **접수 확인**  
   신고가 접수되면 WIZnet은 신고자에게 접수 여부와 추적 번호를 안내합니다.  
   목표 응답 시간: [예: 48시간 이내 또는 영업일 기준 3일 이내 — 내부 확정 필요]

2. **초기 분류 및 영향도 평가**  
   제품, 버전, 재현 가능성, 공격 가능성, 영향 범위를 확인합니다. 필요 시 CVSS 등 표준적인 심각도 평가 체계를 활용할 수 있습니다.

3. **기술 검증 및 재현**  
   내부 엔지니어링 팀이 취약점 재현, 원인 분석, 영향 범위 확인을 진행합니다. 추가 정보가 필요한 경우 신고자에게 연락할 수 있습니다.

4. **수정 또는 완화 조치**  
   WIZnet은 보안 업데이트, 설정 변경 안내, 임시 완화책, 문서 업데이트, 제품별 보안 공지 등 적절한 조치를 검토합니다.

5. **조율된 공개**  
   취약점이 사용자에게 영향을 줄 수 있다고 판단되는 경우, WIZnet은 신고자와 공개 시점과 공개 범위를 조율한 뒤 보안 공지를 게시할 수 있습니다.

---

## 6. 조율된 취약점 공개 원칙

WIZnet은 선의의 보안 연구와 책임 있는 신고를 존중합니다. 신고자는 아래 원칙을 따라 주세요.

- 취약점이 수정되거나 완화책이 제공되기 전까지 상세 exploit 정보를 공개하지 말아 주세요.
- 실제 고객 데이터, 제3자 시스템, 생산 환경을 대상으로 무단 테스트를 수행하지 말아 주세요.
- 서비스 장애, 데이터 삭제, 대량 스캔, 피싱, 사회공학, 물리적 침입, 악성코드 배포를 수행하지 말아 주세요.
- 필요한 최소 범위에서만 검증하고, 취약점 확인 후 즉시 테스트를 중단해 주세요.
- 신고 과정에서 획득한 민감 정보는 저장, 공유, 공개하지 말고 즉시 삭제해 주세요.

WIZnet은 위 원칙을 준수한 선의의 신고에 대해 합리적이고 협력적인 방식으로 대응합니다.

---

## 7. 보안 업데이트 및 지원 기간

WIZnet은 제품별 특성과 사용 목적을 고려하여 보안 업데이트 제공 범위와 지원 기간을 정의합니다.

- 지원 기간이 적용되는 제품은 제품 페이지, 사용자 문서, 릴리즈 노트 또는 보안 공지에서 지원 종료 시점을 안내할 수 있습니다.
- 지원 기간 내 제품에 대해 보안 취약점이 확인되면, 심각도와 영향 범위에 따라 보안 업데이트, 설정 가이드, 완화 조치 또는 보안 공지가 제공될 수 있습니다.
- 지원 종료 제품의 경우 보안 업데이트 제공이 제한될 수 있으나, 심각한 보안 위험이 확인되면 가능한 범위에서 안내 또는 완화책을 제공할 수 있습니다.
- 보안 업데이트 적용 방법, 펌웨어 다운로드 위치, 변경 사항은 제품별 릴리즈 노트 또는 보안 공지에서 확인할 수 있습니다.

---

## 8. 보안 공지 정책

WIZnet은 사용자 보호를 위해 필요한 경우 보안 공지를 게시합니다. 보안 공지에는 가능한 범위에서 아래 정보가 포함됩니다.

- Advisory ID
- 게시일 및 최종 업데이트일
- 영향을 받는 제품 및 버전
- 심각도
- 취약점 요약
- 영향 범위
- 수정 버전 또는 완화 조치
- 업데이트 방법
- 임시 대응 방법
- 신고자 credit, 신고자가 동의한 경우
- CVE ID 또는 외부 reference, 해당되는 경우

### 보안 공지 목록 예시

| Advisory ID | 제품 | 심각도 | 상태 | 게시일 | 최종 업데이트 |
|---|---|---:|---|---|---|
| WIZ-SA-YYYY-001 | [제품명] | Critical | Fixed | YYYY-MM-DD | YYYY-MM-DD |
| WIZ-SA-YYYY-002 | [제품명] | High | Mitigation Available | YYYY-MM-DD | YYYY-MM-DD |

---

## 9. CRA 및 CE 관련 보안 안내

EU Cyber Resilience Act(CRA)는 EU 시장에 제공되는 디지털 요소가 포함된 제품에 대해 제품 설계, 개발, 취약점 처리, 보안 업데이트, 사용자 정보 제공 등 사이버보안 요구사항을 강화하는 규정입니다.

WIZnet은 CRA 및 관련 CE 요구사항에 대응하기 위해 다음 항목을 제품별로 검토하고 있습니다.

- 제품별 CRA 적용 여부 및 제품 분류
- 보안 위험 평가 및 기술 문서화
- 취약점 처리 절차 및 보안 신고 채널
- 제품별 지원 기간 및 보안 업데이트 정책
- 사용자에게 제공해야 하는 보안 관련 정보
- 보안 공지 및 취약점 공개 절차
- 관련 법령에 따른 필수 보고 절차

관련 법령상 요구되는 경우, WIZnet은 해당 기관 및 플랫폼을 통해 적극적으로 악용 중인 취약점 또는 제품 보안에 중대한 영향을 주는 사고를 보고할 수 있습니다.

---

## 10. 긴급 보안 사고

다음에 해당하는 경우 제목에 `[URGENT SECURITY]`를 포함해 신고해 주세요.

- 제품 취약점이 실제로 악용되고 있는 정황이 있는 경우
- 원격에서 인증 없이 악용 가능한 취약점인 경우
- 대규모 사용자 또는 중요 인프라에 영향을 줄 수 있는 경우
- 공개 exploit 또는 공격 코드가 이미 유포된 경우
- 제품 보안 기능 우회, 펌웨어 변조, 공급망 공격 가능성이 있는 경우

긴급 신고 시 가능한 한 상세한 재현 조건, 영향 제품, 악용 정황, 로그 또는 패킷 캡처를 함께 제공해 주세요.

---

## 11. 개인정보 및 민감 정보 처리

보안 신고 과정에서 개인정보, 고객 데이터, 인증 정보, 암호화 키, 비공개 소스 코드 등 민감 정보가 포함될 수 있습니다. 신고자는 필요한 최소 정보만 제공해 주세요.

WIZnet은 신고 내용을 취약점 분석, 재현, 수정, 고객 보호, 법적 의무 이행 목적 범위 내에서 사용합니다. 민감 정보 전달이 필요한 경우 사전에 전달 방식을 협의해 주세요.

---

## 12. 문의 구분

| 문의 유형 | 권장 채널 |
|---|---|
| 보안 취약점 신고 | [security@wiznet.io] 또는 [Security Report Form] |
| 일반 기술 문의 | WIZnet Forum 또는 Technical Inquiries |
| 커스텀 펌웨어 / 프로젝트 문의 | WIZnet Direct |
| 샘플 / 구매 / 견적 | Sales 또는 Online Store |
| CE / DoC / 인증 문서 문의 | [compliance contact 입력] |

---

## 13. 보안 공지 템플릿

아래 양식은 향후 개별 보안 공지를 작성할 때 사용할 수 있습니다.

```markdown
# WIZ-SA-YYYY-NNN: <취약점 제목>

- Published: YYYY-MM-DD
- Last Updated: YYYY-MM-DD
- Severity: Critical / High / Medium / Low
- CVE: CVE-YYYY-NNNN 또는 Pending
- Status: Investigating / Mitigation Available / Fixed / Not Affected

## Summary

<취약점 개요>

## Affected Products

| Product | Affected Version | Fixed Version | Support Status |
|---|---|---|---|
| <제품명> | <버전> | <버전> | Supported |

## Impact

<공격 조건, 영향 범위, 보안 속성 영향>

## Mitigation

<임시 완화 조치>

## Fixed Version / Update Instructions

<업데이트 파일, 릴리즈 노트, 적용 방법>

## Detection / Indicators

<로그, 트래픽, 설정 상태 등 확인 방법>

## Credit

<신고자명 또는 Anonymous, 동의 받은 경우에만>

## References

- <제품 문서 링크>
- <릴리즈 노트 링크>
```

---

## 14. security.txt 예시

WIZnet 웹사이트에 `/.well-known/security.txt`를 운영하는 경우 아래와 같은 형식을 사용할 수 있습니다.

```text
Contact: mailto:security@wiznet.io
Policy: https://wiznet.io/security
Preferred-Languages: en, ko
Encryption: https://wiznet.io/security/pgp-key.txt
Expires: YYYY-MM-DDT00:00:00.000Z
```

---

## 15. 변경 이력

| 버전 | 날짜 | 변경 내용 |
|---|---|---|
| 0.1 | 2026-04-27 | 초안 작성 |

<!--
Internal Review Checklist
- [ ] security@wiznet.io alias 수신자 및 백업 담당자 지정
- [ ] 신고 접수 SLA 확정
- [ ] PSIRT 또는 제품 보안 담당 조직명 확정
- [ ] 제품별 support period 정책 확정
- [ ] CRA 대상 제품군 및 제외 제품군 법무 검토
- [ ] 보안 공지 URL 구조 확정
- [ ] PGP key 운영 여부 확정
- [ ] vulnerability intake form 필드 확정
- [ ] 내부 ticketing / escalation flow 확정
- [ ] CRA Single Reporting Platform 대응 절차 별도 문서화
-->
