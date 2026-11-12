---
id: pics-en
title: EOE-W55RP20_BACnet Module PICS
sidebar_label: PICS
date: 2026-11-12
keywords:
  - BACnet
  - PICS
  - BIBB
  - ASHRAE 135
  - EOE-W55RP20
description: BACnet Protocol Implementation Conformance Statement (ASHRAE 135 Annex A) of the EOE-W55RP20_BACnet module
---
# BACnet Protocol Implementation Conformance Statement (Annex A)

**EOE-W55RP20_BACnet Module, firmware 1.0.0**

> This PICS describes the EOE-W55RP20_BACnet module running firmware **1.0.0**.
>
> - Sections A.1–A.11 follow the order of the ANSI/ASHRAE 135 Annex A PICS form. The A.x
>   numbering is this document's own, not the standard's.
> - Sections V.1–V.3 are vendor notes on behaviour that the form has no row for: Out_Of_Service
>   behaviour, service details and implementation limits.
> - The AT commands named here are described in the [AT Command Guide](./at-command-guide-en.md),
>   and the first setup of the module in the [BACnet Setup Guide](./bacnet-setup-guide-en.md).

---

| Section | Contents |
|---|---|
| [A.1](#a1) | General information |
| [A.2](#a2) | BACnet Standardized Device Profile (Annex L) |
| [A.3](#a3) | BACnet Interoperability Building Blocks supported (Annex K) |
| [A.4](#a4) | Segmentation capability |
| [A.5](#a5) | Standard object types supported |
| [A.6](#a6) | Data link layer options |
| [A.7](#a7) | Device address binding |
| [A.8](#a8) | Networking options |
| [A.9](#a9) | Network security options |
| [A.10](#a10) | Character sets supported |
| [A.11](#a11) | Gateway and host interface notes |
| [V.1](#v1) | Out_Of_Service behaviour (all nine host types) |
| [V.2](#v2) | Services: implementation details |
| [V.3](#v3) | Implementation notes and limits |

---

<a id="a1"></a>

## A.1 General information

| Item | Value |
|---|---|
| Date | 2026-11-11 |
| Vendor Name | WIZnet Co., Ltd. The Device object's Vendor_Name reports `WIZnet` by default. The integrator can change it (AT+BACVENDOR, web UI). |
| Vendor Identifier | **1697**, assigned to WIZnet by ASHRAE (November 2026). It is the default Vendor_Identifier. The module is a component: an integrator who sells it inside their own product may set their own identifier at runtime (AT+BACVENDOR, web UI). If the identifier is set to 0, ASHRAE's own, the boot log warns. |
| Product Name | EOE-W55RP20_BACnet Module (WIZnet W55RP20 SiP: RP2040 + W5500 hardwired TCP/IP) |
| Product Model Number | `EOE-W55RP20_BACnet` (default Model_Name, which the integrator can change; OTA product ID `0x454F4502`) |
| Application Software Version | 1.0.0 |
| Firmware Revision | 1.0.0. Firmware_Revision and Application_Software_Version both report the single firmware image's version, because the module runs no separately loaded application. |
| BACnet Protocol Version | 1 |
| BACnet Protocol Revision | **22**, as the Device object's Protocol_Revision reports it. See [A.6](#a6) for how BACnet/SC is represented under revision 22. |

### Product description

The EOE-W55RP20_BACnet Module is an embedded communication module built on the WIZnet W55RP20
system-in-package: an RP2040 microcontroller with an on-package W5500 Ethernet controller. A host
microcontroller drives the module over a UART AT-command interface. The module is a BACnet
**server** that exposes the host's data points as standard BACnet objects:

- Up to 256 host-defined objects.
- Nine object types: Analog, Binary and Multi-state Input, Output and Value.
- One Device object and one Network Port object.

The host defines the objects in one of two ways: with AT commands, or by importing an
object-definition CSV through the web UI or AT. It then updates their values, and it can take
part in remote writes (see [A.11](#a11)).

The module runs one BACnet datalink at a time, selected by configuration:

- **BACnet/IP** (Annex J), optionally as a foreign device.
- **BACnet/SC** (Annex AB), as a hub connector.

All TCP/IP processing runs in the W5500's hardwired TCP/IP engine. TLS 1.3 for BACnet/SC runs in
software on the RP2040. The module also has these interfaces, which are not BACnet:

- an HTTP administration UI protected by a login
- transparent TCP/UDP socket channels for the host
- firmware update through a separate bootloader

The module does not route, does not act as a BBMD, and initiates no client requests other than
COV notifications.

<a id="a2"></a>

## A.2 BACnet Standardized Device Profile (Annex L)

| Profile | Claimed |
|---|---|
| BACnet Operator Workstation (B-OWS) | No |
| BACnet Advanced Operator Workstation (B-AWS) | No |
| BACnet Operator Display (B-OD) | No |
| B-XAWS (extended operator workstation profile) | No |
| BACnet Building Controller (B-BC) | No |
| BACnet Advanced Application Controller (B-AAC) | No |
| **BACnet Application Specific Controller (B-ASC)** | **Yes** |
| BACnet Smart Sensor (B-SS) | No |
| BACnet Smart Actuator (B-SA) | No |
| BACnet Router (B-RTR) | No |
| BACnet Gateway (B-GW) | No |
| BACnet Broadcast Management Device (B-BBMD) | No |
| BACnet Advanced Life Safety Workstation (B-ALSWS) | No |
| BACnet Life Safety Workstation (B-LSWS) | No |
| BACnet Life Safety Annunciator Panel (B-LSAP) | No |
| BACnet Advanced Life Safety Controller (B-ALSC) | No |
| BACnet Life Safety Controller (B-LSC) | No |
| BACnet Advanced Access Control Workstation (B-AACWS) | No |
| BACnet Access Control Workstation (B-ACWS) | No |
| BACnet Access Control Security Display (B-ACSD) | No |
| BACnet Advanced Access Control Controller (B-AACC) | No |
| BACnet Access Control Controller (B-ACC) | No |
| BACnet Access Control Door Controller (B-ACDC) | No |
| BACnet Access Control Credential Reader (B-ACCR) | No |
| BACnet General (B-GENERAL) | No |

B-ASC requires DS-RP-B, DS-WP-B, DM-DDB-B, DM-DOB-B and DM-DCC-B, and all five are supported.

<a id="a3"></a>

## A.3 BACnet Interoperability Building Blocks supported (Annex K)

| BIBB | Name | Services executed (B side) | Services initiated |
|---|---|---|---|
| **DS-RP-B** | Data Sharing – ReadProperty – B | ReadProperty | — |
| **DS-RPM-B** | Data Sharing – ReadPropertyMultiple – B | ReadPropertyMultiple, including the special property identifiers ALL, REQUIRED and OPTIONAL | — |
| **DS-WP-B** | Data Sharing – WriteProperty – B | WriteProperty | — |
| **DS-WPM-B** | Data Sharing – WritePropertyMultiple – B | WritePropertyMultiple (all-or-nothing, see V.2) | — |
| **DS-COV-B** | Data Sharing – COV – B | SubscribeCOV | ConfirmedCOVNotification, UnconfirmedCOVNotification |
| **DM-DDB-B** | Device Management – Dynamic Device Binding – B | Who-Is | I-Am |
| **DM-DOB-B** | Device Management – Dynamic Object Binding – B | Who-Has | I-Have |
| **DM-DCC-B** | Device Management – DeviceCommunicationControl – B | DeviceCommunicationControl | — |
| **DM-RD-B** | Device Management – ReinitializeDevice – B | ReinitializeDevice (COLDSTART and WARMSTART) | — |
| **DM-TS-B** | Device Management – TimeSynchronization – B | TimeSynchronization | — |
| **DM-UTC-B** | Device Management – UTCTimeSynchronization – B | UTCTimeSynchronization | — |

The following BIBBs are **not** claimed:

| Area | BIBBs not claimed |
|---|---|
| Any A-side (client) BIBB | — |
| Data sharing | DS-COVP-B (SubscribeCOVProperty is not executed), DS-COVU-B |
| Alarm and event | AE-* (no intrinsic or algorithmic reporting, no Notification Class) |
| Scheduling and trending | SCHED-*, T-* |
| Device management | DM-OCD-B (no CreateObject/DeleteObject). DM-BR-B (no backup and restore: no File object, no AtomicReadFile/AtomicWriteFile). DM-LM-B (AddListElement/RemoveListElement are not executed). DM-R-B (the Device serves Last_Restart_Reason and Time_Of_Device_Restart, but it has no Restart_Notification_Recipients and sends no restart notification). |
| Network management | NM-* |
| BACnet/SC | Any BIBB that Addendum 135-2020cc defines for BACnet/SC (the device claims revision 22). |

### Protocol_Services_Supported (as reported)

The bit string is 49 bits long. These bits are set:

| Bit | Service |
|---|---|
| 5 | subscribeCOV |
| 12 | readProperty |
| 14 | readPropertyMultiple |
| 15 | writeProperty |
| 16 | writePropertyMultiple |
| 17 | deviceCommunicationControl |
| 20 | reinitializeDevice |
| 32 | timeSynchronization |
| 33 | who-Has |
| 34 | who-Is |
| 36 | utcTimeSynchronization |

Only services the device executes are marked. The services it only initiates (I-Am, I-Have and
both COV notifications) are left clear.

The device answers any other confirmed service with **Reject UNRECOGNIZED_SERVICE**. It ignores
any other unconfirmed service, including other devices' I-Am.

<a id="a4"></a>

## A.4 Segmentation capability

| Item | Value |
|---|---|
| Able to transmit segmented messages | **No** |
| Able to receive segmented messages | **No** |
| Window size | Not applicable |
| Segmentation_Supported | NO_SEGMENTATION |
| Max_Segments_Accepted | Not present (the device does not segment) |

- A segmented confirmed request is answered with **Abort SEGMENTATION_NOT_SUPPORTED**.
- The device limits each reply to the smaller of the client's max-APDU and its own
  Max_APDU_Length_Accepted. A reply that would need more is answered with **Abort
  SEGMENTATION_NOT_SUPPORTED**. This happens, for example, when an RPM ALL result or an
  Object_List read without an array index does not fit. Clients can read Object_List element by
  element.
  - A reserved max-APDU code (6 to 15) in a request is read as 50 octets.
  - **On BACnet/SC the limit is lower still** when the hub accepted a smaller NPDU in its
    Connect-Accept: the reply must fit that Max-NPDU-Length less the reply's own NPDU header. So
    an SC reply shorter than 1476 octets can still draw Abort SEGMENTATION_NOT_SUPPORTED. On
    BACnet/IP this limit never applies.

<a id="a5"></a>

## A.5 Standard object types supported

| Object type | Type no. | Instances | Dynamically creatable (CreateObject) | Dynamically deletable (DeleteObject) |
|---|---|---|---|---|
| Analog Input | 0 | host-defined | No | No |
| Analog Output | 1 | host-defined | No | No |
| Analog Value | 2 | host-defined | No | No |
| Binary Input | 3 | host-defined | No | No |
| Binary Output | 4 | host-defined | No | No |
| Binary Value | 5 | host-defined | No | No |
| Device | 8 | exactly 1 | No | No |
| Multi-state Input | 13 | host-defined | No | No |
| Multi-state Output | 14 | host-defined | No | No |
| Multi-state Value | 19 | host-defined | No | No |
| Network Port | 56 | exactly 1 (instance 1) | No | No |

- Protocol_Object_Types_Supported is 63 bits long and sets bits 0, 1, 2, 3, 4, 5, 8, 13, 14, 19
  and 56.
- Host objects are created and deleted **by the host**, not over BACnet: with AT+BOBJADD and
  AT+BOBJDEL, or by importing an object-definition CSV.
- Database_Revision increments on each of these events. The journal keeps it across resets.
  - an object is created, deleted or renamed
  - a CSV import is applied
  - the object mapping is cleared (AT+BMAPCLEAR)
  - a new Device instance or Device Object_Name takes effect after a save. A client that caches
    Object_List by Database_Revision therefore also sees the revision move when the Device's own
    identity changes.
  - a reset throws away an object-list change that was never saved: the device then serves the
    saved list under a new revision.
- **No proprietary object types.** **No proprietary properties** on any object type.
- **Instance wildcard.** A request may name the Device or the Network Port with the wildcard
  instance 4194303 (ReadProperty, ReadPropertyMultiple, WriteProperty, WritePropertyMultiple,
  Who-Has, SubscribeCOV).
  The device resolves it to its own instance.

### A.5.1 Device (8)

| Item | Value |
|---|---|
| Required properties | Object_Identifier, Object_Name, Object_Type, System_Status, Vendor_Name, Vendor_Identifier, Model_Name, Firmware_Revision, Application_Software_Version, Protocol_Version, Protocol_Revision, Protocol_Services_Supported, Protocol_Object_Types_Supported, Object_List, Max_APDU_Length_Accepted, Segmentation_Supported, APDU_Timeout, Number_Of_APDU_Retries, Device_Address_Binding, Database_Revision, Property_List |
| Conditionally required properties served | Local_Time, Local_Date (TimeSynchronization and UTCTimeSynchronization are executed); UTC_Offset, Daylight_Savings_Status (UTCTimeSynchronization is executed); Active_COV_Subscriptions (SubscribeCOV is executed). |
| Optional properties supported | Location, Description, Last_Restart_Reason, Time_Of_Device_Restart, Serial_Number, Device_UUID (BACnet/SC build only; served in every datalink mode of that build) |
| Writable properties (over BACnet) | **None.** WriteProperty to any Device property returns WRITE_ACCESS_DENIED, or UNKNOWN_PROPERTY for a property the object does not have. |
| Properties set through the host interface | The AT commands and the web UI both set Object_Identifier (instance) and Object_Name (AT+BACDEV), Vendor_Identifier, Vendor_Name and Model_Name (AT+BACVENDOR), Location and Description (AT+BACDEVINFO), APDU_Timeout and Number_Of_APDU_Retries (AT+BACAPDU), and UTC_Offset (AT+UTCOFFSET). A change takes effect only after it is saved. |
| Proprietary properties | None |

**Range restrictions and fixed values (Device)**

| Property | Restriction or value |
|---|---|
| Object_Identifier | Instance 0 to 4194302. The default is derived from the factory MAC address: `((MAC[3] & 0x3F) << 16) \| (MAC[4] << 8) \| MAC[5]`, clamped to 4194302. The formula gives the wildcard 4194303 when MAC[3] & 0x3F = 0x3F and MAC[4] = MAC[5] = 0xFF; the device then uses 4194302. |
| Object_Name | 1 to 31 octets of UTF-8 with no control characters (C0, DEL or C1 U+0080–U+009F). It must be unique in the device, including among host objects and the Network Port's name. The default is `<Model_Name>-XXXXXX`, where XXXXXX is the last three MAC octets in hexadecimal. |
| Vendor_Name, Model_Name, Location, Description | 0 to 63 octets of UTF-8 with no control characters (C0, DEL or C1 U+0080–U+009F) |
| Vendor_Identifier | 0 to 65535. **Default 1697 (WIZnet, see A.1).** |
| System_Status | Always OPERATIONAL |
| Max_APDU_Length_Accepted | **1024** while BACnet/IP is active or BACnet is off. **1476** while BACnet/SC is active. See [A.6](#a6). |
| Segmentation_Supported | NO_SEGMENTATION |
| APDU_Timeout | 1 to 65535 ms. Default 3000. Used for the device's own confirmed COV notifications. |
| Number_Of_APDU_Retries | 0 to 10. Default 3. |
| Device_Address_Binding | Always an empty list (see [A.7](#a7)) |
| Local_Time, Local_Date | The module has no real-time clock. While the time is unknown, both are encoded with every field unspecified (0xFF). The time is unknown after every reset until a source sets it; the sources are TimeSynchronization, UTCTimeSynchronization and SNTP (V.3). In BACnet/SC mode it can also become unknown again without a reset (V.3, "Clock forgotten"). |
| UTC_Offset | −1440 to +1440 minutes. Default 0. BACnet sign convention: UTC = local + UTC_Offset. |
| Daylight_Savings_Status | Always FALSE. The device applies no daylight-saving rule. |
| Last_Restart_Reason | One of: DETECTED_POWER_LOST (power-on or brown-out), COLDSTART (reset pin, or a restart the firmware requested), WARMSTART (ReinitializeDevice WARMSTART), HARDWARE_WATCHDOG (the watchdog reset the device), UNKNOWN (debug reset or unknown cause). When the bootloader installs a staged firmware image after a reset and restarts, the reason is that of the reset which led to the install. |
| Time_Of_Device_Restart | BACnetTimeStamp, using the dateTime choice and local time. Every field is unspecified while the time is unknown, as for Local_Time. |
| Serial_Number | The factory record's serial number. `UNPROVISIONED` on a board that has none. |
| Device_UUID | 16 octets. A version-5 UUID derived from the factory MAC, the same UUID that BACnet/SC Connect-Request carries. |
| Protocol_Revision | 22 |

### A.5.2 Network Port (56)

There is one instance (instance 1), which describes the active datalink. Its Object_Name is
always `BACnet Network Port`, and that name is reserved: no other object can take it. The object
is **read-only** in this version, and Changes_Pending is always FALSE. Port settings are made
through the AT commands and the web UI.

| Item | Value |
|---|---|
| Properties on every port | Object_Identifier, Object_Name, Object_Type, Status_Flags, Reliability, Out_Of_Service, Network_Type, Protocol_Level, Network_Number, Network_Number_Quality, Changes_Pending, MAC_Address, APDU_Length, Link_Speed, Property_List |
| BACnet/IP port | Required: BACnet_IP_Mode, IP_Address, BACnet_IP_UDP_Port, IP_Subnet_Mask, IP_Default_Gateway, IP_DNS_Server. Optional: IP_DHCP_Enable. Only while BACnet_IP_Mode is FOREIGN: FD_BBMD_Address, FD_Subscription_Lifetime. |
| BACnet/SC port | Required: Max_BVLC_Length_Accepted, Max_NPDU_Length_Accepted, SC_Primary_Hub_URI, SC_Failover_Hub_URI, SC_Minimum_Reconnect_Time, SC_Maximum_Reconnect_Time, SC_Connect_Wait_Timeout, SC_Disconnect_Wait_Timeout, SC_Heartbeat_Timeout, SC_Hub_Connector_State, SC_Primary_Hub_Connection_Status, SC_Failover_Hub_Connection_Status. Optional (always FALSE): SC_Hub_Function_Enable, SC_Direct_Connect_Initiate_Enable, SC_Direct_Connect_Accept_Enable. |
| SC properties not supported | Operational_Certificate_File, Issuer_Certificate_Files and Certificate_Signing_Request_File are **not served**. They reference File objects, and the device has no File object and no AtomicReadFile/AtomicWriteFile. Credentials are managed through the AT commands and the web UI. |
| Writable properties | None (WRITE_ACCESS_DENIED) |
| Proprietary properties | None. The SC port's property identifiers are the standard ones that Addendum 135-2020cc assigns: 4194304 to 4194327, for example SC_Hub_Connector_State = 4194318. |

**Range restrictions and fixed values (Network Port)**

| Property | Restriction or value |
|---|---|
| Status_Flags, Reliability, Out_Of_Service | Always `{F,F,F,F}`, NO_FAULT_DETECTED and FALSE |
| Network_Type | IPV4 on the B/IP port. On the SC port, the **proprietary value 64**: Network_Type SECURE_CONNECT and the SC property set arrived with Protocol_Revision 24. For revisions 17 to 23, which include the revision this device claims (22), the device represents its SC port with this proprietary value. A proprietary value is defined relative to Vendor_Identifier: WIZnet's 1697 by default, but an integrator who sets their own identifier takes the value's meaning with it (A.1). |
| Protocol_Level | BACNET_APPLICATION on both ports |
| Network_Number | 0 to 65534, configured through the AT commands (AT+BACNETNUM) or the web UI, separately for the B/IP and the SC port. 65535 (0xFFFF, the global-broadcast DNET) is refused. Network_Number_Quality is UNKNOWN when the number is 0 and CONFIGURED otherwise. The device does not learn its network number from Network-Number-Is. |
| MAC_Address | On B/IP, 6 octets: the IPv4 address followed by the UDP port, most significant octet first. On SC, the 6-octet VMAC. |
| APDU_Length | Equal to the Device's Max_APDU_Length_Accepted (1024 on B/IP, 1476 on SC) |
| Link_Speed | Always 0.0 ("not known"). The PHY's negotiated speed is not available to the application. |
| BACnet_IP_Mode | NORMAL, or FOREIGN when foreign-device registration is configured. BBMD is never reported. |
| IP_Address, IP_Subnet_Mask, IP_Default_Gateway | The address in effect on the W5500, including a DHCP lease |
| IP_DNS_Server | An array of 1 element |
| IP_DHCP_Enable | Whether DHCP is in effect |
| FD_BBMD_Address | BACnetHostNPort. The host is an IPv4 address or a DNS name of up to 63 octets. |
| FD_Subscription_Lifetime | The configured TTL in seconds (default 300) |
| SC_Primary_Hub_URI, SC_Failover_Hub_URI | `wss://host[:port][/path]`, up to 127 octets |
| Max_BVLC_Length_Accepted, Max_NPDU_Length_Accepted | 1600 and 1497 |
| SC timers (defaults, in seconds) | Heartbeat 300, connect wait 10, disconnect wait 10, minimum reconnect 2, maximum reconnect 30 |
| SC_*_Hub_Connection_Status | The connection and disconnection timestamps are the most recent ones for that URI. A Disconnect-Request from the hub is reported as NOT_CONNECTED, not as an error. |

### A.5.3 Analog Input (0), Analog Output (1), Analog Value (2)

### A.5.4 Binary Input (3), Binary Output (4), Binary Value (5)

### A.5.5 Multi-state Input (13), Multi-state Output (14), Multi-state Value (19)

All nine types share one property table. Key to the table below:

- **R** required
- **C** conditionally required, and present when the condition holds
- **O** optional and supported
- **W** writable over BACnet
- **—** not present

| Property | AI | AO | AV | BI | BO | BV | MSI | MSO | MSV |
|---|---|---|---|---|---|---|---|---|---|
| Object_Identifier, Object_Name, Object_Type | R | R | R | R | R | R | R | R | R |
| Present_Value | R, W¹ | R, W | R, W² | R, W¹ | R, W | R, W² | R, W¹ | R, W | R, W² |
| Description | O | O | O | O | O | O | O | O | O |
| Status_Flags | R | R | R | R | R | R | R | R | R |
| Event_State | R | R | R | R | R | R | R | R | R |
| Reliability | O | O | O | O | O | O | O | O | O |
| Out_Of_Service | R, W | R, W | R, W | R, W | R, W | R, W | R, W | R, W | R, W |
| Units | R | R | R | — | — | — | — | — | — |
| Polarity | — | — | — | R | R | — | — | — | — |
| Number_Of_States | — | — | — | — | — | — | R | R | R |
| Priority_Array | — | R | C³ | — | R | C³ | — | R | C³ |
| Relinquish_Default | — | R | C³ | — | R | C³ | — | R | C³ |
| Current_Command_Priority | — | R | C³ | — | R | C³ | — | R | C³ |
| COV_Increment | C⁴ | C⁴ | C⁴ | — | — | — | — | — | — |
| Property_List | R | R | R | R | R | R | R | R | R |

1. An Input's Present_Value is writable only while Out_Of_Service is TRUE. Otherwise a write
   returns WRITE_ACCESS_DENIED.
2. A Value object's Present_Value is writable in three cases:
   - the host defined the object as writable (flag `W`), or
   - the object is commandable (a commandable Value object is always writable), or
   - Out_Of_Service is TRUE.

   Otherwise a write returns WRITE_ACCESS_DENIED.
3. Present only when the host defined the Value object as commandable (flag `C`). AO, BO and MSO
   are always commandable. Inputs are never commandable.
4. Required because SubscribeCOV is executed for every analog object.

**Optional properties not supported** (a read returns UNKNOWN_PROPERTY):

| Group | Properties |
|---|---|
| All nine types | Device_Type, Update_Interval, Event_Detection_Enable, Notification_Class, Event_Enable, Acked_Transitions, Notify_Type, Event_Time_Stamps, Event_Message_Texts, Event_Algorithm_Inhibit, Reliability_Evaluation_Inhibit, Time_Delay, Time_Delay_Normal |
| Analog | Min_Pres_Value, Max_Pres_Value, Resolution, High_Limit, Low_Limit, Deadband, Limit_Enable |
| Binary | Active_Text, Inactive_Text, Change_Of_State_Time, Change_Of_State_Count, Time_Of_State_Count_Reset, Elapsed_Active_Time, Time_Of_Active_Time_Reset, Minimum_On_Time, Minimum_Off_Time, Feedback_Value, Alarm_Value |
| Multi-state | State_Text, Alarm_Values, Fault_Values, Feedback_Value |

The analog minimum and maximum the host defines are enforced on writes, but they are not exposed
as Min_Pres_Value and Max_Pres_Value.

**Writable properties:** Present_Value (subject to notes 1 and 2) and Out_Of_Service, on all nine
types. Every other property returns WRITE_ACCESS_DENIED. Object_Name, Description, Units,
Number_Of_States, Polarity, Relinquish_Default and COV_Increment are fixed by the host's object
definition.

**Proprietary properties:** none.

**Range restrictions (host objects)**

| Property or parameter | Restriction |
|---|---|
| Object instance | 0 to 4194302. (type, instance) is unique. |
| Number of objects | 256 host objects per device, plus the Device and the Network Port |
| Number of commandable objects | 64 per device. The CSV import checks this before it applies anything. |
| Object_Name | 1 to 31 octets of UTF-8 with no control characters (C0, DEL or C1 U+0080–U+009F), unique in the device |
| Description | 0 to 31 octets of UTF-8 with no control characters (C0, DEL or C1 U+0080–U+009F) |
| Present_Value: analog | A finite REAL within the host-defined [min, max]. Either bound may be unlimited. An out-of-range value returns VALUE_OUT_OF_RANGE. NaN and ±infinity are refused. |
| Present_Value: binary | INACTIVE (0) or ACTIVE (1) |
| Present_Value: multi-state | 1 to Number_Of_States |
| Number_Of_States | 2 to 16 |
| Units | Any BACnetEngineeringUnits value from 0 to 65535 (the host's choice, which may be proprietary). Fixed per object. |
| COV_Increment | A finite REAL ≥ 0, fixed per object |
| Polarity (BI, BO) | NORMAL or REVERSE, fixed per object. BV has no Polarity. |
| Relinquish_Default | Within the type's range (above), fixed per object |
| Event_State | NORMAL, or FAULT while Reliability is not NO_FAULT_DETECTED. The device has no intrinsic reporting, so no other state occurs. |
| Reliability | NO_FAULT_DETECTED, or UNRELIABLE_OTHER when the host reports the point as faulty (AT+BOBJVAL status FAULT) |
| Status_Flags | IN_ALARM and FAULT follow Reliability. OVERRIDDEN is always FALSE. OUT_OF_SERVICE follows Out_Of_Service. |
| Datatype of Present_Value writes | Exactly the property's datatype: REAL for analog, ENUMERATED for binary, Unsigned for multi-state. The device does not coerce, so for example an Unsigned written to a REAL returns INVALID_DATA_TYPE. NULL is accepted only by commandable objects. |
| Write priority | 1 to 16 (absent means 16). **Priority 6 (Minimum On/Off) is refused with WRITE_ACCESS_DENIED** on commandable objects. Non-commandable objects ignore the priority. |
| Priority_Array persistence | Not persistent. After any reset a commandable object starts with an empty Priority_Array, at Relinquish_Default. |
| Present_Value persistence | Only for non-commandable objects the host flagged PERSISTENT. The value is journalled at most once per 10 s per object and restored after reset. The first change after a journal tick is written at once; later changes in the same 10 s are held in RAM and only the last one is written at the next tick. **So a value that was already acknowledged (SimpleACK to WriteProperty or WritePropertyMultiple, OK to the host's AT+BOBJVAL) can be lost if power fails, or a reset-pin or watchdog reset occurs, within about 10 s of the write**: the object then restarts with the last value written to the journal, never a mixed or corrupt one. A planned restart (AT+SAVE, AT+REBOOT, the web UI's restart, ReinitializeDevice, an OTA install) writes the held values first (A.11). All other objects start at 0.0, INACTIVE or state 1. When 0 is outside an analog object's range, it starts at the nearer bound. |

<a id="a6"></a>

## A.6 Data link layer options

The module runs **one datalink at a time**. The configuration mode is OFF, BIP or SC, and a
factory-reset module starts with BACnet OFF. Running B/IP and SC at the same time would make the
device a router, which this version does not do. The B/IP-only build variant omits BACnet/SC
completely.

| Option (Annex A form) | Supported |
|---|---|
| **BACnet IP (Annex J)** | **Yes** |
| **BACnet IP (Annex J), Foreign Device** | **Yes** |
| BACnet IPv6 (Annex U) | No |
| BACnet IPv6 (Annex U), Foreign Device | No |
| ISO 8802-3, Ethernet (Clause 7) | No |
| ANSI/ATA 878.1, 2.5 Mb ARCNET (Clause 8) | No |
| ANSI/ATA 878.1, EIA-485 ARCNET (Clause 8), baud rate(s) | No |
| MS/TP master (Clause 9), baud rate(s) | No |
| MS/TP slave (Clause 9), baud rate(s) | No |
| Point-To-Point, EIA 232 (Clause 10), baud rate(s) | No |
| Point-To-Point, modem (Clause 10), baud rate(s) | No |
| LonTalk (Clause 11), medium | No |
| BACnet/ZigBee (Annex O) | No |
| **Other: BACnet Secure Connect (Annex AB), hub connector** | **Yes.** Protocol_Revision 22 has no form entry for BACnet/SC, so it is listed here. |

The baud-rate and medium fields are left empty because every such row is answered No.

### A.6.1 BACnet/IP (Annex J)

| Item | Value |
|---|---|
| UDP port | 47808 (0xBAC0) by default. Configurable (AT+BIP, web UI). It may not be the web UI's TCP port, because the W5500 has one port space for TCP and UDP. |
| Broadcast address | The subnet-directed broadcast by default. `255.255.255.255` can be selected instead (AT+BIP …,GLOBAL). |
| Max_APDU_Length_Accepted | **1024** |
| Max datagram | The W5500 does **not reassemble IP fragments**, so a UDP payload larger than 1472 octets is lost. The device advertises 1024, the largest standard max-APDU value below that limit: 4 (BVLL) + up to 13 (NPDU) + 1024 = 1041 ≤ 1472. It never sends a datagram larger than 1472 octets. **Larger B/IP frames from other devices are lost on reception.** This includes large broadcasts that a BBMD wraps in Forwarded-NPDU, which adds 6 octets. |
| BVLL functions processed | Original-Unicast-NPDU, Original-Broadcast-NPDU, Forwarded-NPDU (details below this table), BVLC-Result (answers to the device's own registration) |
| BVLL functions initiated | Register-Foreign-Device, Distribute-Broadcast-To-Network (when registered as a foreign device), Original-Unicast-NPDU, Original-Broadcast-NPDU |
| BBMD functions | Not a BBMD. Write-BDT, Read-BDT, Register-Foreign-Device, Read-FDT, Delete-FDT-Entry and Distribute-Broadcast-To-Network are answered with the matching BVLC-Result NAK. |
| Foreign device registration | Details: see below this table. |

**Forwarded-NPDU details**

A Forwarded-NPDU is treated as a broadcast received from its original source address, not from
the BBMD that forwarded it:

- A confirmed request in it is answered to the original source address.
- A Who-Is or Who-Has in it is answered as for any local broadcast: by local broadcast, and also
  through the BBMD while the device is registered as a foreign device.

It is dropped without an answer in these cases:

- The originator is this device itself (its own broadcast, distributed back by a BBMD).
- The originator is not a usable single-station address: port 0, 0.0.0.0, a broadcast address,
  a multicast or reserved address (224.0.0.0 and up), or a loopback address.
- The originator is on the device's own subnet, unless every answer the NPDU can draw is a local
  broadcast (an unconfirmed request without SNET, such as Who-Is). Answering such an address
  directly could hold the device in the W5500's ARP timeout. So an integrator testing through a
  BBMD from a workstation on the module's own subnet gets an I-Am, but a confirmed request sent
  that way goes unanswered.

**Foreign device registration details**

- The BBMD is configured by IPv4 address or DNS name, with its port and a TTL. The TTL defaults to
  300 s.
- The device registers when B/IP starts and re-registers at half the TTL.
- A NAK or a timeout is reported to the host (`+BIPFD` URC) and retried with a back-off: 64 s,
  doubling to the smaller of the TTL and 10 minutes. A BBMD that comes back after an outage is
  registered with again within 10 minutes, however long the TTL.
- A BVLC-Result is taken as the answer to a registration only when it comes from the configured
  BBMD's address and port. A BBMD that answers from another port (one behind NAT, say) is never
  heard, and the registration ends FAILED with TIMEOUT.
- When the BBMD accepts the registration, the device broadcasts an I-Am (V.2).
- While registered, a broadcast is sent both locally and to the BBMD as
  Distribute-Broadcast-To-Network.

### A.6.2 BACnet/SC (Annex AB)

| Item | Value |
|---|---|
| Role | **Hub connector only.** Connects to a primary hub and, optionally, a failover hub. |
| Direct connections | **Not supported**, neither initiated nor accepted. A unicast Address-Resolution is answered with BVLC-Result NAK (OPTIONAL_FUNCTIONALITY_NOT_SUPPORTED). A broadcast one is not answered. |
| Hub function | **Not supported** |
| Max_APDU_Length_Accepted | **1476** (a reply is also bounded by the NPDU length the hub accepted, A.4) |
| Max BVLC / Max NPDU length accepted | 1600 / 1497 octets |
| Hub URIs | `wss://host[:port][/path]`, up to 127 octets. The default port is 443. The host is an IPv4 literal or a DNS name. |
| Failover | Details: see below this table. |
| BVLC-SC messages | Details: see below this table. |
| VMAC | Random-48, locally administered and unicast. Drawn **once per boot**, when the SC thread starts; an SC build starts that thread in every datalink mode. The VMAC is kept across reconnects, hub changes and datalink-mode changes, so switching the datalink to SC does not draw a new one. A new VMAC is drawn only when the hub answers Connect-Request with BVLC-Result NAK NODE_DUPLICATE_VMAC (at most 3 times per connection round). |
| Device UUID | Version-5 UUID derived from the factory MAC, stable across resets. Also served as the Device's Device_UUID. |
| Timers (defaults) | Heartbeat 300 s, connect wait 10 s, disconnect wait 10 s, reconnect 2 s doubling to 30 s. Configurable through AT+BSCTIME and the web UI. |
| WebSocket | Subprotocol `hub.bsc.bacnet.org` (verified in the 101 response). Binary frames, masked. Fragmented messages are reassembled up to Max BVLC; a longer one is closed with code 1009. |
| TLS | Details: see below this table. |
| Credentials | Details: see below this table. |
| Certificate validity without a clock | Details: see below this table. |

**Failover details**

- The device always tries the primary hub first.
- Only one hub connection exists at a time.
- While it is connected to the failover hub, the device probes the primary periodically with a
  TCP-only connection attempt. When the primary is reachable, the device moves back to it.
- SC_Hub_Connector_State reports NO_HUB_CONNECTION, CONNECTED_TO_PRIMARY or CONNECTED_TO_FAILOVER.

**BVLC-SC message handling**

| Message received or sent | Handling |
|---|---|
| Encapsulated-NPDU | Sent and received. A received one without an originating VMAC is dropped. |
| Connect-Request | Sent to the hub. A Connect-Request received from the hub is answered with BVLC-Result NAK BVLC_FUNCTION_UNKNOWN, because the device accepts no connections. |
| Connect-Accept | Processed while the device waits for it. A late one is ignored. |
| Disconnect-Request / Disconnect-ACK | Both directions. A stray Disconnect-ACK is ignored. |
| Heartbeat-Request / Heartbeat-ACK | Both directions |
| Address-Resolution | Unicast: NAK OPTIONAL_FUNCTIONALITY_NOT_SUPPORTED. Broadcast: no answer. |
| Address-Resolution-ACK | Ignored |
| Advertisement-Solicitation | Answered with Advertisement |
| Advertisement | Ignored |
| BVLC-Result | While the device waits for Connect-Accept: processed. NAK NODE_DUPLICATE_VMAC draws a new VMAC, and any other NAK ends the attempt. At other times a BVLC-Result is counted and logged, and nothing else is done. |
| Proprietary-Message | NAK BVLC_PROPRIETARY_FUNCTION_UNKNOWN. The device understands no vendor function. |
| An unknown BVLC function | NAK BVLC_FUNCTION_UNKNOWN |
| A header option marked Must-Understand that the device does not understand | NAK HEADER_NOT_UNDERSTOOD, carrying the option's marker. The message is dropped. |
| A malformed message | When the header was readable: a NAK with the code the decoder found, which is one of MESSAGE_INCOMPLETE, PAYLOAD_EXPECTED, UNEXPECTED_DATA and HEADER_ENCODING_ERROR. Otherwise it is dropped. |

- **No NAK is ever sent** for a response message (BVLC-Result, Connect-Accept, Disconnect-ACK,
  Heartbeat-ACK, Address-Resolution-ACK), or for a message addressed to the broadcast VMAC,
  whatever is wrong with it (Annex AB.2). This limits every NAK row above, including the
  Must-Understand row.
- A NAK goes to the message's originating VMAC when it has one. Its error class is COMMUNICATION.
- The table describes a connection in the CONNECTED state. Heartbeat and Disconnect-Request are
  handled in every state of an open WebSocket. The NAKs for an unknown function, an unknown
  Must-Understand option and a malformed message are sent in every state. Any other message
  received outside CONNECTED is counted and dropped.

**TLS details**

- TLS 1.3 only, with mutual authentication.
- Cipher suites: TLS_AES_128_GCM_SHA256 and TLS_AES_256_GCM_SHA384.
- Key exchange group: secp256r1.
- Signature algorithm: ecdsa_secp256r1_sha256. **RSA certificates and keys are not supported.**
- The hub is authenticated by its certificate chain to a configured issuer and by the
  certificate's dates, the checks Annex AB.7.4 lists. By default the device does not check the
  hub certificate's CN or SAN against the URI's host. AT+BSCHOSTCHECK=ON (or the web UI) adds
  that check: a DNS-named hub must match a DNS SAN, or the CN if the certificate has no SAN; an
  IPv4 hub must match an iPAddress SAN. A mismatch is reported as CERT with verify flag
  0x00000004. SNI is sent for a DNS-named hub, and not for an IPv4 literal, either way.
- Record sizes: the device accepts TLS records of up to 16,384 octets of plaintext (the TLS 1.3
  maximum) and sends records of up to 5,120. Neither max_fragment_length nor record_size_limit is
  negotiated. The largest record the device sends is its Certificate message, which carries the
  operational certificate (at most 4,096 octets of DER, below).

**Credential details**

- The device holds one P-256 private key, one operational certificate and up to two issuer (CA)
  certificates.
- They are uploaded through AT+BSCCERT/AT+BSCCERTW or the web UI, and stored in flash (A/B slots).
  Each item is at most 4,096 octets as uploaded, PEM or DER; a certificate item holds exactly one
  certificate.
- A factory reset erases them, first and checked: if the credential area does not erase (after
  one retry), the reset stops there - nothing else is reset, the device does not restart, and the
  host is told (`+FACTORY:ERROR,CREDENTIALS`) instead of being told the reset completed.
- No key is generated on the device and no CSR is produced: the private key and the certificates are loaded from outside (AT or the web UI).

**Certificate validity without a clock**

| Policy | Behaviour |
|---|---|
| LENIENT (default) | Connect without the validity check, then re-check both certificates once the clock is set. Disconnect if either is out of its validity period. |
| STRICT | Do not connect until the time is known |

The device refuses a configuration in which STRICT could never connect: datalink mode SC with
STRICT and time source BACNET or NONE. BACNET time could only arrive over the hub connection that
is waiting for it, and NONE never sets the clock. Whichever setter would create that combination
is refused (AT+BSCVALIDITY and AT+TIMESRC answer INVALID_PARAMETER). Time source SNTP or BOTH is
accepted, with either policy, only when an SNTP server is configured.

<a id="a7"></a>

## A.7 Device address binding

| Question | Answer |
|---|---|
| Is static device binding supported? | **No** |

Device_Address_Binding is always an empty list. The device's only requests are COV notifications.
Each goes to the address its SubscribeCOV request came from, including SNET/SADR through a
router. So the device never needs to resolve another device's address. It does not process I-Am
from other devices.

<a id="a8"></a>

## A.8 Networking options

| Option | Supported |
|---|---|
| Router (Clause 6) | **No** |
| Annex H, BACnet Tunneling Router over IP | No |
| BACnet/IP Broadcast Management Device (BBMD) | **No** |
| BBMD: registrations by foreign devices | No (not a BBMD) |
| BBMD: network address translation | No |
| **Foreign device registration with a BBMD (client)** | **Yes** (A.6.1) |

The network layer behaves as a non-router device:

- **Remote requests.** A request from a remote network is answered through the router that
  delivered it, using the NPDU's SNET/SADR and the datalink source address.
- **DNET.** Of NPDUs that carry a DNET, only the global broadcast (DNET 0xFFFF) is accepted.
  Others are dropped.
- **Network-layer messages** (Who-Is-Router-To-Network and the like) are ignored.

<a id="a9"></a>

## A.9 Network security options

| Option | Supported |
|---|---|
| Non-secure device (Clause 24 network security not implemented) | **Yes** |
| Secure device (Clause 24) | No |
| Multiple application-specific keys, encryption, key server (Clause 24) | No |

BACnet/SC (A.6.2) provides security at the datalink: TLS 1.3 with mutual authentication between
the device and the hub. This is separate from Clause 24 network security. On BACnet/IP, all
traffic is unauthenticated plaintext, as Annex J defines it.

<a id="a10"></a>

## A.10 Character sets supported

| Character set | Supported |
|---|---|
| **ISO 10646 (UTF-8)** (character set 0) | **Yes**. This is the only set the device encodes or accepts. |
| IBM/Microsoft DBCS | No |
| JIS X 0208 | No |
| ISO 10646 (UCS-4) | No |
| ISO 10646 (UCS-2) | No |
| ISO 8859-1 | No |

- Every CharacterString the device sends is UTF-8.
- No CharacterString property is writable over BACnet.
- A CharacterString received in another character set behaves as follows:
  - In Who-Has objectName, it never matches.
  - As a DeviceCommunicationControl or ReinitializeDevice password, it never matches, so the
    request fails with PASSWORD_FAILURE when a password is set.
- Text the host or the web UI supplies is checked to be well-formed UTF-8 with no control
  characters.

<a id="a11"></a>

## A.11 Gateway and host interface notes

The module is a **gateway between a host microcontroller and BACnet**:

- The non-BACnet side is the host MCU on a UART AT-command port (115200 8N1 by default).
- The BACnet side is the datalink selected in A.6.

The BACnet objects are proxies for the host's data points:

- The host defines each object with AT+BOBJADD or by importing an object-definition CSV. The
  definition fixes the object's type, instance, name, description, units or number of states,
  analog min/max, COV_Increment, polarity, Relinquish_Default and the flags below.
- The host updates Present_Value and Reliability with AT+BOBJVAL, within these limits. A refused
  update answers ACCESS_DENIED.
  - On a **commandable** object (AO, BO and MSO always, and a Value object with flag `C`) the host
    can set only Reliability. Its Present_Value is what the Priority_Array decides, so a
    Present_Value from the host is refused.
  - While Out_Of_Service is TRUE, every update is refused, Reliability included (V.1).

| Object flag | Meaning |
|---|---|
| `C` commandable | The object has a Priority_Array, Relinquish_Default and Current_Command_Priority. Always set for AO, BO and MSO. Never allowed for inputs. |
| `W` writable | A Value object's Present_Value can be written over BACnet. Implied by `C` on a Value object. |
| `P` persistent | Present_Value survives a reset (journal). Non-commandable objects only. The journal takes at most one record per object every 10 s, so a value written less than about 10 s before a power cut can come back as the previous value (A.5, Present_Value persistence). A host that must not lose a value waits 10 s after the write, or sends AT+SAVE, before power may be removed. |
| `F` confirmed | A remote write is committed only after the host accepts it (below). Without `F`, the write mode is IMMEDIATE. |

**Remote writes to Present_Value**

| Write mode | Behaviour |
|---|---|
| IMMEDIATE | The write is committed and answered at once. The host gets a notification URC `+BACWRITE:<type>,<inst>,<priority>,<value>`, but only when the write changed something. |
| CONFIRMED (`F`), object in service | The device sends `+BACWRITE:<tid>,<type>,<inst>,<priority>,<value\|NULL>` to the host, then goes on serving other requests without blocking. The reply to the client goes out when the host answers AT+BWRACK or the wait times out (below). |
| CONFIRMED (`F`), object out of service | Committed without asking the host (V.1) |

Outcomes of a CONFIRMED write:

| Outcome | Reply to the client |
|---|---|
| The host accepts (AT+BWRACK `OK`), and the commit succeeds | SimpleACK |
| The host accepts, but the commit then fails | The commit's Error, not SimpleACK. The write is checked again when it is committed, because the object may have changed while the host was deciding. If the object was deleted or redefined, or an Input went back in service, the client gets for example OBJECT / UNKNOWN_OBJECT, PROPERTY / WRITE_ACCESS_DENIED or PROPERTY / VALUE_OUT_OF_RANGE. |
| The host refuses | Error PROPERTY / WRITE_ACCESS_DENIED, VALUE_OUT_OF_RANGE or INVALID_DATA_TYPE, as the host chooses |
| No answer within 750 ms | Error DEVICE / OPERATIONAL_PROBLEM |
| The active datalink changed while the write was waiting | **No reply at all.** The host's verdict is still applied (an accepted value is committed), and the client's own APDU timeout ends the request. |
| No free pending-write slot, or the AT port cannot take the URC | Error RESOURCES / NO_SPACE_TO_WRITE_PROPERTY |
| The write is part of a WritePropertyMultiple | Refused (V.2) |

Clients should use an APDU timeout longer than the host-write timeout. The default APDU timeout of
3 s or more satisfies this.

**Other host interface notes**

- DeviceCommunicationControl and ReinitializeDevice are reported to the host as URCs: `+BACDCC`
  and `+BACREINIT`. The restart follows `+BACREINIT`.
- Device identity, datalink, time source and SC credentials are configured through the AT
  commands and the login-protected web UI. Configuration changes take effect at AT+SAVE or a web
  save; nothing changes on the network before that. The web UI asks for the password again before
  a destructive change (the DCC/ReinitializeDevice password, its own account, a factory reset),
  and those re-confirmations share the login's limit: five wrong passwords lock both out for 60 s
  and end the session.

---

# Vendor notes (not part of the Annex A form)

These sections describe the implementation in more detail than the Annex A form asks for. They
are not form items.

<a id="v1"></a>

## V.1 Out_Of_Service behaviour (all nine host types)

Out_Of_Service decouples an object from the host, as Clause 12 describes:

- While Out_Of_Service is TRUE, a Present_Value write is committed inside the module. The host is
  neither asked nor told, even for an object defined as CONFIRMED (A.11).
- While Out_Of_Service is TRUE, the host's own updates are refused: Present_Value and Reliability
  alike (AT+BOBJVAL answers ACCESS_DENIED).
- When Out_Of_Service returns to FALSE:
  - An Input goes back to the host's last reading.
  - An Output or Value object whose Present_Value changed while it was out of service is reported
    to the host once, so the host follows the value now in force.

<a id="v2"></a>

## V.2 Services: implementation details

| Service | Behaviour |
|---|---|
| ReadProperty | Array indexes are supported on Object_List, Property_List, Priority_Array and IP_DNS_Server. An array index on a property that is not an array returns PROPERTY_IS_NOT_AN_ARRAY. |
| ReadPropertyMultiple | ALL and REQUIRED expand from the object's own property table, **not from its Property_List**. They also return Object_Identifier, Object_Name, Object_Type and Property_List, which Property_List leaves out (Clause 12.1.1.4.1), so an RPM ALL result has four more properties than a Property_List read lists. OPTIONAL returns the properties marked O in A.5. Property errors are reported per property inside the ACK. A special property identifier on an object that does not exist gets one result carrying that identifier and OBJECT / UNKNOWN_OBJECT. A result that does not fit returns Abort SEGMENTATION_NOT_SUPPORTED (A.4). |
| WriteProperty | See the writable properties in A.5. For an object defined as CONFIRMED, the answer is sent only after the host accepts or refuses the write (A.11). |
| WritePropertyMultiple | **All-or-nothing.** Every write is checked first, with the same rules as WriteProperty, and none is committed unless all pass. A request may carry at most 32 writes; more returns Reject BUFFER_OVERFLOW. A write to a CONFIRMED object that is in service returns WRITE_ACCESS_DENIED in the WritePropertyMultiple-Error, because an atomic batch cannot wait on the host. |
| SubscribeCOV | Supported on all nine host object types. Not supported on the Device or the Network Port (Error SERVICES / COV_SUBSCRIPTION_FAILED). Details: see below this table. |
| COV notifications | Each notification carries Present_Value and Status_Flags. A notification is sent when Status_Flags change, and also when:<br />• analog: \|ΔPV\| ≥ COV_Increment<br />• binary and multi-state: the value changes |
| Confirmed COV notifications | At most one outstanding per subscription. They use APDU_Timeout and Number_Of_APDU_Retries, with up to 4 confirmed requests outstanding device-wide. A notification that fails is not repeated; the next change is sent. A notification the device could not send, because DCC or a datalink outage blocked it, is sent again once that clears. |
| Who-Is | With or without a range. A malformed range is ignored. The device answers with I-Am the way the Who-Is came: a local broadcast for a local broadcast, unicast for unicast, and through the router for a remote network. A Who-Is in a Forwarded-NPDU counts as a local broadcast (A.6.1). |
| I-Am (initiated) | Broadcast at each of these points: when the B/IP socket opens (startup) or the device's datalink address changes; when the active datalink changes; when a new Device instance or Object_Name takes effect; when a BBMD accepts the foreign-device registration (that copy also goes to the BBMD as Distribute-Broadcast-To-Network, A.6.1); when the SC hub connector reaches CONNECTED; each time the Ethernet link comes up and the device has its IP address. An I-Am is held, not dropped, while DeviceCommunicationControl disables initiation or no datalink is up, and goes out once that clears; triggers that arrive meanwhile send one I-Am. It carries Max_APDU_Length_Accepted (1024 or 1476), NO_SEGMENTATION and the Vendor_Identifier. |
| Who-Has | Matches by object identifier, or by object name (exact and case-sensitive). The Device and the Network Port are included. The device answers with I-Have, addressed as for I-Am: a unicast Who-Has gets a unicast I-Have. |
| DeviceCommunicationControl | Details: see below this table. |
| ReinitializeDevice | Details: see below this table. |
| TimeSynchronization / UTCTimeSynchronization | Both carry a date and time, and every field must be specified except the weekday; a weekday that is given must be 1 to 7. TimeSynchronization carries local time and is converted to UTC with UTC_Offset. A date and time that do not name a real moment, or that fall before 1970, are malformed: the request is dropped and counted. A valid time before **2026-01-01T00:00:00Z** is refused whatever the time source, and counted as ignored. Otherwise, whether the clock accepts the time depends on the configured time source (V.3). |

**SubscribeCOV details**

- Lifetime 0 means indefinite. Any non-zero lifetime up to 2³²−1 s is accepted.
- A request with both optional parameters absent is a cancellation. It is answered with SimpleACK
  even when there is nothing to cancel.
- A request with Lifetime but without issueConfirmedNotifications is answered with **Reject
  MISSING_REQUIRED_PARAMETER**.
- A subscription to an object that does not exist gets Error OBJECT / UNKNOWN_OBJECT.
- The subscription table holds 16 entries. When it is full, the request fails with
  RESOURCES / NO_SPACE_TO_ADD_LIST_ELEMENT.
- A renewal from the same (address, process identifier, object) replaces the existing entry.
- An initial notification is sent shortly after the SimpleACK.
- Subscriptions are held in RAM only. They do not survive a reset, and they are dropped when the
  active datalink changes.
- A subscription is also dropped when its object is deleted or redefined (AT+BOBJDEL, AT+BOBJADD
  or a CSV import). It then disappears from Active_COV_Subscriptions, and no notification tells
  the subscriber.

**DeviceCommunicationControl details**

- ENABLE and DISABLE_INITIATION are accepted. An enable-disable value above 2 gets
  **Reject PARAMETER_OUT_OF_RANGE**.
- Duration:
  - The optional duration is 1 to 65535 minutes. A duration that is absent or 0 means until
    changed.
  - A duration above 65535 gets **Reject PARAMETER_OUT_OF_RANGE**.
  - A duration sent with ENABLE is ignored.
- **DISABLE:** refused with **Error SERVICES / SERVICE_REQUEST_DENIED**, and nothing changes.
  The value is deprecated for a device claiming Protocol_Revision 20 or higher (Clause 16.1), and
  this device claims 22. The password is checked first, so a request with a wrong or missing
  password gets PASSWORD_FAILURE. Since the device never enters DISABLE, it always answers Who-Is.
- **DISABLE_INITIATION:** the device still answers requests, including I-Am in reply to Who-Is.
  It stops scheduled I-Am broadcasts, COV notifications and I-Have.
- **Password:** set through AT+BACPASS or the web UI, which apply the same check, and stored only
  as a salted SHA-256 hash. An empty value clears it.
  - The setter allows 1 to 20 **octets** of UTF-8 with no control characters (C0, DEL or C1 U+0080–U+009F).
  - A request's password is limited in **characters**: a UTF-8 password of more than 20
    characters gets **Reject PARAMETER_OUT_OF_RANGE**. A password with no character-set octet
    gets **Reject INVALID_TAG**. Both apply to ReinitializeDevice as well.
  - Because the setter counts octets, a password with non-ASCII characters is limited to 20
    octets, which is fewer than 20 characters.
  - When a password is set, a missing or wrong password returns SECURITY / PASSWORD_FAILURE.
  - When no password is set, any password or none is accepted.

**ReinitializeDevice details**

- COLDSTART and WARMSTART restart the device after the SimpleACK has been sent. After a WARMSTART,
  Last_Restart_Reason reports WARMSTART.
- START_BACKUP, END_BACKUP, START_RESTORE, END_RESTORE, ABORT_RESTORE and ACTIVATE_CHANGES return
  SERVICES / OPTIONAL_FUNCTIONALITY_NOT_SUPPORTED.
- A state value the standard does not define (above 7) is rejected with PARAMETER_OUT_OF_RANGE,
  before the password is checked.
- The password is checked first, as for DeviceCommunicationControl, including the Reject for a
  password of more than 20 characters.
- ReinitializeDevice is accepted in every DeviceCommunicationControl state.

<a id="v3"></a>

## V.3 Implementation notes and limits

| Item | Value |
|---|---|
| Object count limits | 256 host objects. 64 commandable objects. 16 COV subscriptions. 4 confirmed requests outstanding. 4 writes waiting for the host. |
| Time source | One of NONE, BACNET (default), SNTP or BOTH (AT+TIMESRC, web UI). |
| Time source: BACNET | TimeSynchronization and UTCTimeSynchronization set the clock. |
| Time source: SNTP or NONE | The device accepts both services but does not apply them; it only counts them. |
| Time source: BOTH | SNTP is used. BACnet time is applied only while SNTP has never succeeded, or has been silent for two polling intervals. |
| Time floor | Any time before 2026-01-01T00:00:00Z is refused, from BACnet or SNTP alike (V.2). An SNTP server that answers with such a time counts as failing: the host is told once (`+TIME:SNTPFAIL,BADREPLY`), as for any other SNTP failure. |
| Clock after reset | The module has no RTC, so time is unknown after every reset until a source sets it. |
| Clock forgotten | In BACnet/SC mode, a clock that BACnet time synchronization set is forgotten when the certificate dates refuse a connection attempt or the LENIENT re-check (A.6.2). That time came over the very link being judged. Local_Time, Local_Date and Time_Of_Device_Restart then read unspecified again until a new time arrives. A clock that SNTP set is kept. |
| Unsupported confirmed service | Reject UNRECOGNIZED_SERVICE |
| Malformed confirmed request | Reject with the reason the decoder found: INVALID_TAG, MISSING_REQUIRED_PARAMETER, TOO_MANY_ARGUMENTS, PARAMETER_OUT_OF_RANGE, and so on. A request shorter than the 4-octet confirmed-request header is dropped. |
| Answers to the device's own requests | A SimpleACK, Error, Reject or Abort that does not match one of the device's outstanding transactions is ignored. SegmentACK is ignored. |
