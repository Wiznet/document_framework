import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';

export default function ContentWrapper(props) {
  const location = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    const redirects = [

      /* Serial to Ethernet Module */
      {
        match: '/Product/S2E-Module/WIZ750SR-1xx-Series/wiz750sr-1xx-series',
        target: '/Product/Modules/Serial-to-Ethernet-Module/s2e_module',
      },
      {
        match: '/Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100',
      },
      {
        match: '/Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105',
      },
      {
        match: '/Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110',
      },
      {
        match: '/Product/S2E-Module/WIZ752SR-12x-Series/wiz750sr-1xx-series',
        target: '/Product/Modules/Serial-to-Ethernet-Module/s2e_module',
      },
      {
        match: '/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120',
      },
      {
        match: '/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125',
      },
      {
        match: '/Product/S2E-Module/WIZ750SR',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ750SR',
      },
      {
        match: '/Product/S2E-Module/WIZ550SR',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ550SR',
      },
      {
        match: '/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP',
      },
      {
        match: '/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP',
      },
      {
        match: '/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ510SR-RP',
      },
      {
        match: '/Product/S2E-Module/WIZ5xxSR-RP-Series',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP',
      },
      {
        match: '/Product/S2E-Module/WIZ100SR',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ1xx-series/WIZ100SR',
      },
      {
        match: '/Product/S2E-Module/WIZ105SR',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ1xx-series/WIZ105SR',
      },
      {
        match: '/Product/S2E-Module/WIZ110SR',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ1xx-series/WIZ110SR',
      },
      {
        match: '/Product/S2E-Module/W5500S2E-S1',
        target: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1',
      },
      {
        match: '/Product/S2E-Module/W5500S2E-Z1',
        target: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1',
      },
      {
        match: '/Product/S2E-Module/W7500S2E-R1',
        target: '/Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1',
      },
      {
        match: '/Product/S2E-Module/Industrial',
        target: '/Product/Modules/Serial-to-Ethernet-Module/W232N',
      },
      {
        match: '/Product/S2E-Module/WIZ550S2E',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E',
      },
      {
        match: '/Product/S2E-Module/WIZ107SR/wiz107sr-evb',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ107SR/wiz107sr-evb',
      },
      {
        match: '/Product/S2E-Module/WIZ107SR/wiz107sr',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ107SR',
      },
      {
        match: '/Product/S2E-Module/WIZ108SR/wiz108sr-evb',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ108SR/wiz108sr-evb',
      },
      {
        match: '/Product/S2E-Module/WIZ108SR/wiz108sr',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ108SR',
      },
      {
        match: '/Product/S2E-Module/WIZ120SR/wiz120sr',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ120SR',
      },
      {
        match: '/Product/S2E-Module/WIZ120SR/wiz120sr-evb',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ120SR/wiz120sr-evb',
      },
      {
        match: '/Product/S2E-Module/WIZ125SR/wiz125sr',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ125SR',
      },
      {
        match: '/Product/S2E-Module/WIZ140SR/wiz140sr-evb',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ140SR/wiz140sr-evb',
      },
      {
        match: '/Product/S2E-Module/WIZ140SR/wiz140sr',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ140SR',
      },
      {
        match: '/Product/S2E-Module/WIZ145SR/wiz145sr-evb',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ145SR/wiz145sr-evb',
      },
      {
        match: '/Product/S2E-Module/WIZ145SR/wiz145sr',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ145SR',
      },
      {
        match: '/Product/S2E-Module/wiz1000',
        target: '/Product/Modules/Serial-to-Ethernet-Module/WIZ1000',
      },
      // For all other cases, redirect to /Product/Modules/Serial-to-Ethernet-Module/s2e_module
      {
        match: '/Product/S2E-Module',
        target: '/Product/Modules/Serial-to-Ethernet-Module/s2e_module',
      },

      /* WiFi Module */
      {
        match: '/Product/Wi-Fi-Module/WizFi210',
        target: '/Product/Modules/Wi-Fi-Module/WizFi210',
      },
      {
        match: '/Product/Wi-Fi-Module/WizFi250',
        target: '/Product/Modules/Wi-Fi-Module/WizFi250',
      },
      {
        match: '/Product/Wi-Fi-Module/WizFi310',
        target: '/Product/Modules/Wi-Fi-Module/WizFi310',
      },
      {
        match: '/Product/Wi-Fi-Module/WizFi360',
        target: '/Product/Modules/Wi-Fi-Module/WizFi360',
      },
      {
        match: '/Product/Wi-Fi-Module/WizFi630A',
        target: '/Product/Modules/Wi-Fi-Module/WizFi630A',
      },
      {
        match: '/Product/Wi-Fi-Module/WizFi630S',
        target: '/Product/Modules/Wi-Fi-Module/WizFi630S',
      },
      {
        match: '/Product/Wi-Fi-Module/wi_fi_module',
        target: '/Product/Modules/Wi-Fi-Module/wi_fi_module',
      },
      {
        match: '/Product/Obsolete/wizfi630',
        target: '/Product/Modules/Wi-Fi-Module/wizfi630',
      },

      /* io Module */
      {
        match: '/Product/ioModule/W5100S-io',
        target: '/Product/Modules/ioModule/W5100S-io',
      },
      {
        match: '/Product/ioModule/W5500-io',
        target: '/Product/Modules/ioModule/W5500-io',
      },
      {
        match: '/Product/ioModule/W6100-io',
        target: '/Product/Modules/ioModule/W6100-io',
      },
      {
        match: '/Product/ioModule/nm7010b',
        target: '/Product/Modules/ioModule/nm7010b',
      },
      {
        match: '/Product/ioModule/wiz610mj',
        target: '/Product/Modules/ioModule/wiz610mj',
      },
      {
        match: '/Product/ioModule/wiz630io',
        target: '/Product/Modules/ioModule/wiz630io',
      },
      {
        match: '/Product/ioModule/wiz810mj',
        target: '/Product/Modules/ioModule/wiz810mj',
      },
      {
        match: '/Product/ioModule/wiz810sio',
        target: '/Product/Modules/ioModule/wiz810sio',
      },
      {
        match: '/Product/ioModule/wiz810smj',
        target: '/Product/Modules/ioModule/wiz810smj',
      },
      {
        match: '/Product/ioModule/wiz811mj',
        target: '/Product/Modules/ioModule/wiz811mj',
      },
      {
        match: '/Product/ioModule/wiz812mj',
        target: '/Product/Modules/ioModule/wiz812mj',
      },
      {
        match: '/Product/ioModule/wiz820io',
        target: '/Product/Modules/ioModule/wiz820io',
      },
      {
        match: '/Product/ioModule/wiz830mj',
        target: '/Product/Modules/ioModule/wiz830mj',
      },
      {
        match: '/Product/ioModule/wiz850io',
        target: '/Product/Modules/ioModule/wiz850io',
      },
      {
        match: '/Product/Obsolete/egsr7100a',
        target: '/Product/Modules/ioModule/egsr7100a',
      },
      {
        match: '/Product/Obsolete/nm7010a',
        target: '/Product/Modules/ioModule/nm7010a',
      },
      {
        match: '/Product/Obsolete/w7200',
        target: '/Product/Modules/ioModule/w7200',
      },
      {
        match: '/Product/Obsolete/wiz220io',
        target: '/Product/Modules/ioModule/wiz220io',
      },
      {
        match: '/Product/Obsolete/wiz220web',
        target: '/Product/Modules/ioModule/wiz220web',
      },
      {
        match: '/Product/Obsolete/wiz610wi',
        target: '/Product/Modules/ioModule/wiz610wi',
      },
      {
        match: '/Product/Obsolete/wiz850sw',
        target: '/Product/Modules/ioModule/wiz850sw',
      },
      {
        match: '/Product/Obsolete/wizsm10',
        target: '/Product/Modules/ioModule/wizsm10',
      },

      /* App Module */
      {
        match: '/Product/App-Module/WIZ550web',
        target: '/Product/Modules/App-Module/WIZ550web',
      },

      /* Mbed WIZwiki Platform */
      {
        match: '/Product/Mbed-WIZwiki-Platform/Getting-Started',
        target: '/Product/Modules/Mbed-WIZwiki-Platform/Getting-Started',
      },
      {
        match: '/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit',
        target: '/Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit',
      },
      {
        match: '/Product/Mbed-WIZwiki-Platform/mbed-wizwiki-platform',
        target: '/Product/Modules/Mbed-WIZwiki-Platform/mbed-wizwiki-platform',
      },

      // For all other cases, redirect to /Product/Modules/Mbed-WIZwiki-Platform/mbed-wizwiki-platform
      {
        match: '/Product/Mbed-WIZwiki-Platform',
        target: '/Product/Modules/Mbed-WIZwiki-Platform/mbed-wizwiki-platform',
      },

      /* Open-Source-Hardware */
      {
        match: ['/Product/Open-Source-Hardware/rp2040_based',
                '/Product/Open-Source-Hardware/wiznet_ethernet_hat',
                '/Product/Open-Source-Hardware/wizfi360-evb-pico',
                '/Product/Open-Source-Hardware/wiznet-pico-poe'
              ],
        target: '/Product/Modules/Open-Source-Hardware/rp2040_based',
      },
      {
        match: '/Product/Open-Source-Hardware/rp2350_based',
        target: '/Product/Modules/Open-Source-Hardware/rp2350_based',
      },
      {
        match: '/Product/Open-Source-Hardware/surf5',
        target: '/Product/Modules/Open-Source-Hardware/surf5',
      },
      {
        match: '/Product/Open-Source-Hardware/PoE',
        target: '/Product/Modules/Open-Source-Hardware/PoE/PoE-Main',
      },
      {
        match: ['/Product/Open-Source-Hardware/arduino',
                '/Product/Open-Source-Hardware/wizarduino_m0_eth',
                '/Product/Open-Source-Hardware/wizarduino_m0_eth_eng',
                '/Product/Open-Source-Hardware/wizarduino_mega_wifi',
                '/Product/Open-Source-Hardware/wizarduino_mega_wifi_eng',
                '/Product/Open-Source-Hardware/wizfi310_shield',
                '/Product/Open-Source-Hardware/ioshield_a',
                '/Product/Open-Source-Hardware/ioshield_k',
                '/Product/Open-Source-Hardware/ioshield_l',
                '/Product/Open-Source-Hardware/w5100s_mkr_ethernet_shield',
                '/Product/Open-Source-Hardware/w5500_ethernet_shield',
                '/Product/Open-Source-Hardware/w5500_ethernet_shield_jp',
                '/Product/Open-Source-Hardware/w5500_ethernet_shield_kor',
                '/Product/Open-Source-Hardware/w6100_mkr_ethernet_shield'],
        target: '/Product/Modules/Open-Source-Hardware/arduino',
      },
      {
        match: '/Product/Open-Source-Hardware',
        target: '/Product/Modules/Open-Source-Hardware/open_source_hardware',
      },

      /* Azure-Sphere */
      {
        match: '/Product/Azure-Sphere',
        target: '/Product/Modules/Serial-to-Ethernet-Module/s2e_module',
      },

      /* Ethernet Module */
      {
        match: ['/Product/iEthernet/W6300',
                '/Product/Ethernet/W6300',
                '/Product/Chip/Ethernet/W6300'],
        target: '/Product/Chip/Ethernet/W6300',
      },
      {
        match: ['/Product/iEthernet/W6100',
                '/Product/Ethernet/W6100',
                '/Product/Chip/Ethernet/W6100'],
        target: '/Product/Chip/Ethernet/W6100',
      },
      {
        match: ['/Product/iEthernet/W5100S',
                '/Product/Ethernet/W5100S',
                '/Product/Chip/Ethernet/W5100S'],
        target: '/Product/Chip/Ethernet/W5100S',
      },
     {
        match: ['/Product/iEthernet/W5100',
                '/Product/Ethernet/W5100',
                '/Product/Chip/Ethernet/W5100'],
        target: '/Product/Chip/Ethernet/W5100',
      },

     {
        match: ['/Product/iEthernet/W5300',
                '/Product/Ethernet/W5300',
                '/Product/Chip/Ethernet/W5300'],
        target: '/Product/Chip/Ethernet/W5300',
      },
     {
        match: ['/Product/iEthernet/W5500',
                '/Product/Ethernet/W5500',
                '/Product/Chip/Ethernet/W5500'],
        target: '/Product/Chip/Ethernet/W5500',
      },
      {
        match: ['/Product/iEthernet',
                '/Product/Chip/Ethernet'],
        target: ' /Product/Chip/Ethernet',
      },
      
      /* iMCU */
      {
        match: ['/Product/ioNIC',
               '/Product/iMCU/W55RP20',
                '/Product/Chip/MCU/W55RP20'],
        target: '/Product/Chip/MCU/W55RP20',
      },
      {
        match: ['/Product/iMCU/W55MH32',
                '/Product/Chip/MCU/W55MH32'],
        target: '/Product/Chip/MCU/W55MH32',
      },
      {
        match: ['/Product/iMCU/W7500P',
                '/Product/Chip/MCU/W7500P'],
        target: '/Product/Chip/MCU/W7500P',
      },
      {
        match:  ['/Product/iMCU/W7500',
                '/Product/Chip/MCU/W7500'],
        target: '/Product/Chip/MCU/W7500',
      },

     {
        match:  ['/Product/iMCU',
                '/Product/Chip/MCU'],
        target: '/Product/Chip/MCU',
      },

      // For all other cases, redirect to /Product`
      {
          match: ['/Product',
                  '/'],
          target: '/',
      },
    ];

    const delay = 2000;
    for (const r of redirects) {
      if (Array.isArray(r.match)) {
        // match가 배열이면, 배열 안에 있는 문자열 중 하나라도 startsWith에 맞으면 성공
        if (r.match.some(m => location.startsWith(m))) {
          const timer = setTimeout(() => {
            window.location.replace(r.target);
          }, delay);
          return () => clearTimeout(timer);
        }
      } else {
        // match가 문자열이면 기존처럼 처리
        if (location.startsWith(r.match)) {
          const timer = setTimeout(() => {
            window.location.replace(r.target);
          }, delay);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [location]);

  return (
    <>
      <div style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h1>The documentation site has been reorganized</h1>
        <p>This page will redirect to the main page.</p>
        <p>Please wait a moment. You will be redirected automatically...</p>
      </div>
    </>
  );
}
