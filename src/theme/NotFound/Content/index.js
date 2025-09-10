import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';

export default function ContentWrapper(props) {
  const location = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    const redirects = [
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




    ];

    const delay = 2000;
    for (const r of redirects) {
      if (location.startsWith(r.match)) {
        const timer = setTimeout(() => {
          window.location.replace(r.target);
        }, delay);
        return () => clearTimeout(timer);
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
