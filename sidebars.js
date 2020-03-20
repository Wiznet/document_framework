/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    Link_TEST: [
	{
    type: 'link',
    label: 'link_test', // string - the label that should be displayed.
    href: 'https://example.com' // string - the target URL.
	}
	],
    Products: [
	'overview',
	{
        type: 'category',
        label: 'iMCU',
        items: [
		{
        type: 'category',
        label: 'W7500',
        items: [
		'Product/iMCU/W7500/overview',
		'Product/iMCU/W7500/pin_assignment',
		'Product/iMCU/W7500/system_and_memory',
		'Product/iMCU/W7500/interrupt_and_event',
		'Product/iMCU/W7500/power_supply',
		'Product/iMCU/W7500/booting_sequence',
		'Product/iMCU/W7500/electrical_characteristics',
		'Product/iMCU/W7500/w7500_ref_schematic',
		'Product/iMCU/W7500/documents',
		'Product/iMCU/W7500/peripherals',
		'Product/iMCU/W7500/libraries_examples',
		'Product/iMCU/W7500/all_pages'
		],
		},
		{
        type: 'category',
        label: 'W7500P',
        items: [
		'Product/iMCU/W7500P/overview',
		'Product/iMCU/W7500P/pin_assignment',
		'Product/iMCU/W7500P/system_and_memory',
		'Product/iMCU/W7500P/interrupt_and_event',
		'Product/iMCU/W7500P/power_supply',
		'Product/iMCU/W7500P/booting_sequence',
		'Product/iMCU/W7500P/electrical_characteristics',
		'Product/iMCU/W7500P/w7500p_ref_schematic',
		'Product/iMCU/W7500P/documents',
		'Product/iMCU/W7500P/peripherals',
		'Product/iMCU/W7500P/libraries_examples',
		'Product/iMCU/W7500P/all_pages'
		],
		}
		],
    },
	{
        type: 'category',
        label: 'Pre-programmed MCU',
        items: [
		'Product/Pre-programmed MCU/pre_programmed_mcu',
		{
        type: 'category',
        label: 'W7500P',
        items: [
		'Product/Pre-programmed MCU/W7500P-S2E/w7500p-s2e',
		],
		}
		],
    },
	{
        type: 'category',
        label: 'iEthernet',
        items: [
		'Product/iEthernet/iethernet',
		{
        type: 'category',
        label: 'W6100',
        items: [
		'Product/iEthernet/W6100/overview',
		'Product/iEthernet/W6100/document',
		'Product/iEthernet/W6100/driver_basic_project',
		'Product/iEthernet/W6100/ref_schematic',
		'Product/iEthernet/W6100/application_note',
		'Product/iEthernet/W6100/w6100_evb'
		],
		},
		{
        type: 'category',
        label: 'W5100S',
        items: [
		'Product/iEthernet/W5100S/overview',
		'Product/iEthernet/W5100S/document',
		'Product/iEthernet/W5100S/driver',
		'Product/iEthernet/W5100S/ref_schematic',
		'Product/iEthernet/W5100S/comparison_sheet',
		{
        type: 'category',
        label: 'Application Note',
        items: [
		'Product/iEthernet/W5100S/Application Note/tcp',
		'Product/iEthernet/W5100S/Application Note/udp',
		'Product/iEthernet/W5100S/Application Note/ipraw',
		'Product/iEthernet/W5100S/Application Note/pppoe',
		'Product/iEthernet/W5100S/Application Note/socket_less_command',
		'Product/iEthernet/W5100S/Application Note/interrupt',
		'Product/iEthernet/W5100S/Application Note/dma',
		],
		},
		'Product/iEthernet/W5100S/all_pages',
		'Product/iEthernet/W5100S/w5100s_evb'
		],
		},
		{
        type: 'category',
        label: 'W5500',
        items: [
		'Product/iEthernet/W5500/overview',
		'Product/iEthernet/W5500/datasheet',
		'Product/iEthernet/W5500/driver',
		'Product/iEthernet/W5500/ref_schematic',
		'Product/iEthernet/W5500/migration_from_w5200',
		{
        type: 'category',
        label: 'Application',
        items: [
		'Product/iEthernet/W5500/Application/tcp',
		'Product/iEthernet/W5500/Application/udp',
		'Product/iEthernet/W5500/Application/ipraw',
		'Product/iEthernet/W5500/Application/pppoe',
		'Product/iEthernet/W5500/Application/spi_performance',
		'Product/iEthernet/W5500/Application/esd_test_document',
		],
		},
		'Product/iEthernet/W5500/all_pages',
		{
        type: 'category',
        label: 'W5500-EVB',
        items: [
		'Product/iEthernet/W5500/W5500-EVB/w5500_evb',
		'Product/iEthernet/W5500/W5500-EVB/getting_started',
		'Product/iEthernet/W5500/W5500-EVB/make_new_projects',
		],
		}
		],
		}
		],
    },
	{
        type: 'category',
        label: 'S2E Module',
        items: ['example1', 'example2', 'example3'],
    },
	{
        type: 'category',
        label: 'ioModule',
        items: ['example1', 'example2', 'example3'],
    },
	{
        type: 'category',
        label: 'App Module',
        items: ['example1', 'example2', 'example3'],
    },
	{
        type: 'category',
        label: 'Wi-Fi Module',
        items: ['example1', 'example2', 'example3'],
    },
	{
        type: 'category',
        label: 'Mbed WIZwiki Platform',
        items: ['example1', 'example2', 'example3'],
    },
	{
        type: 'category',
        label: 'Open Source Hardware',
        items: ['example1', 'example2', 'example3'],
    },
	],
    Design_Guide: ['example1', 'example2', 'example3'],
	VAR_Products_using_WIZnet: [
	'example1', 
	'example2', 
	{
        type: 'category',
        label: 'example4',
        items: [
		'example1',
		'example2',
		{
        type: 'category',
        label: 'example4',
        items: ['example1', 'example2', 'example3'],
        },
		'example3'
		],
    },
	'example3', 
	'example3'
	],
  },
};
