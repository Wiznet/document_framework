/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
	'WIZnet Document Wiki': ['introduction'],
    'Products': [//------------------------------------------------------------------------------------------------------------------------------------------------------------------------->PRODUCTS
	'Product/products',
	{
        type: 'category',
        label: 'iMCU',
		items: [
			'Product/iMCU/imcu',
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
				'Product/iMCU/W7500/electrical_characteristics_w7500',
				'Product/iMCU/W7500/w7500_ref_schematic',
				'Product/iMCU/W7500/documents_md',
				'Product/iMCU/W7500/peripherals',
				'Product/iMCU/W7500/libraries_examples',
				'Product/iMCU/W7500/all_pages',
				{
					type: 'category',
					label: 'Peripherals Internal',
					items: [
						'Product/iMCU/W7500/Peripherals-internal/adc',
						'Product/iMCU/W7500/Peripherals-internal/afc',
						'Product/iMCU/W7500/Peripherals-internal/blink_led',
						'Product/iMCU/W7500/Peripherals-internal/capturemode',
						'Product/iMCU/W7500/Peripherals-internal/countermode',
						'Product/iMCU/W7500/Peripherals-internal/crg',
						'Product/iMCU/W7500/Peripherals-internal/deadzonegeneration',
						'Product/iMCU/W7500/Peripherals-internal/delay',
						'Product/iMCU/W7500/Peripherals-internal/deladhcpclient',
						'Product/iMCU/W7500/Peripherals-internal/dma',
						'Product/iMCU/W7500/Peripherals-internal/dmdnsclient',
						'Product/iMCU/W7500/Peripherals-internal/eeprom',
						'Product/iMCU/W7500/Peripherals-internal/exti',
						'Product/iMCU/W7500/Peripherals-internal/flash',
						'Product/iMCU/W7500/Peripherals-internal/flowcontrol',
						'Product/iMCU/W7500/Peripherals-internal/gpio',
						'Product/iMCU/W7500/Peripherals-internal/i2c',
						'Product/iMCU/W7500/Peripherals-internal/iap_example',
						'Product/iMCU/W7500/Peripherals-internal/illumination_sensor',
						'Product/iMCU/W7500/Peripherals-internal/init',
						'Product/iMCU/W7500/Peripherals-internal/inter',
						'Product/iMCU/W7500/Peripherals-internal/led_toggle',
						'Product/iMCU/W7500/Peripherals-internal/lm75_temperature',
						'Product/iMCU/W7500/Peripherals-internal/loopback',
						'Product/iMCU/W7500/Peripherals-internal/padcon',
						'Product/iMCU/W7500/Peripherals-internal/polling',
						'Product/iMCU/W7500/Peripherals-internal/printf',
						'Product/iMCU/W7500/Peripherals-internal/pwm',
						'Product/iMCU/W7500/Peripherals-internal/pwmoutput',
						'Product/iMCU/W7500/Peripherals-internal/rng_ex',
						'Product/iMCU/W7500/Peripherals-internal/rng',
						'Product/iMCU/W7500/Peripherals-internal/sd_card_led',
						'Product/iMCU/W7500/Peripherals-internal/sleep',
						'Product/iMCU/W7500/Peripherals-internal/ssp',
						'Product/iMCU/W7500/Peripherals-internal/systick',
						'Product/iMCU/W7500/Peripherals-internal/tcp_function',
						'Product/iMCU/W7500/Peripherals-internal/timermode',
						'Product/iMCU/W7500/Peripherals-internal/timerrun',
						'Product/iMCU/W7500/Peripherals-internal/toe',
						'Product/iMCU/W7500/Peripherals-internal/uart',
						'Product/iMCU/W7500/Peripherals-internal/wdt',
						'Product/iMCU/W7500/Peripherals-internal/wdtreset',						
					],
					},
					{
						type: 'category',
						label: 'Other Documents',
						items: [
						{
							type: 'category',
							label: 'Appnote',
							items: [
							'Product/iMCU/W7500/documents/appnote/how_to_install_KEIL',
							'Product/iMCU/W7500/documents/appnote/how_to_make_keil_new_project_for_w7500',
							'Product/iMCU/W7500/documents/appnote/how_to_use_gcc_for_w7500_peripherals_examples',
							'Product/iMCU/W7500/documents/appnote/how_to_use_isp_tool',
							'Product/iMCU/W7500/documents/appnote/how_to_use_mdk_for_w7500_peripherals_examples',							
					],
					},
						],
						},
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
				'Product/iMCU/W7500P/all_pages',
			],
			},
			{			
				type: 'category',
				label: 'W7100',
				items: [
					 'Product/iMCU/W7100/internal_memory_and_sfr',
					 'Product/iMCU/W7100/p0_pu',
					 'Product/iMCU/W7100/p0',
					 'Product/iMCU/W7100/p1',
					 'Product/iMCU/W7100/peripheral_sfr',
					 'Product/iMCU/W7100/memorymap_sfr',
				],
			},
				'Product/iMCU/w7100a',
			{	
				type: 'link',
				label: 'W7100A (Link)', // string - the label that should be displayed.
				href: 'http://www.wiznet.io/product-item/w7100a/' // string - the target URL
			},			
		],
    },
	{
        type: 'category',
        label: 'Pre-Programmed MCU',
        items: [
			'Product/Pre-Programmed-MCU/pre_programmed_mcu',
			{
				type: 'category',
				label: 'W7500P-S2E',
				items: [
					'Product/Pre-Pogrammed-MCU/W7500P-S2E/w7500p-s2e-[EN]',
					'Product/Pre-Programmed-MCU/W7500P-S2E/w7500p-s2e-[KO]',
				],
			},	
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
				'Product/iEthernet/W6100/w6100',
				'Product/iEthernet/W6100/overview',
				'Product/iEthernet/W6100/document',
				'Product/iEthernet/W6100/driver_basic_project',
				'Product/iEthernet/W6100/ref_schematic',
				'Product/iEthernet/W6100/application_note',
				'Product/iEthernet/W6100/w6100_evb',
				'Product/iEthernet/W6100/getting_started_w6100evb',
				'Product/iEthernet/W6100/new_project_truestudio',
				'Product/iEthernet/W6100/new_project_eclipse',
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
				'Product/iEthernet/W5100S/Application-Note/w5100s_application',
				'Product/iEthernet/W5100S/Application-Note/tcp',
				'Product/iEthernet/W5100S/Application-Note/udp',
				'Product/iEthernet/W5100S/Application-Note/ipraw',
				'Product/iEthernet/W5100S/Application-Note/pppoe',
				'Product/iEthernet/W5100S/Application-Note/socket_less_command',
				'Product/iEthernet/W5100S/Application-Note/interrupt',
				'Product/iEthernet/W5100S/Application-Note/dma',
			],
			},
			'Product/iEthernet/W5100S/w5100s_evb',
			'Product/iEthernet/W5100S/w5100s_getting_started',
			'Product/iEthernet/W5100S/w5100s_projects_truestudio',
			'Product/iEthernet/W5100S/w5100s_projects_eclipse',
			'Product/iEthernet/W5100S/all_pages',
			],
			},
			{
			type: 'category',
			label: 'W5500',
			items: [
				'Product/iEthernet/W5500/overview',
				'Product/iEthernet/W5500/japanese_v',
				'Product/iEthernet/W5500/datasheet',
				'Product/iEthernet/W5500/driver',
				'Product/iEthernet/W5500/ref_schematic',
				'Product/iEthernet/W5500/migration_from_w5200',
			{
			type: 'category',
			label: 'Application',
			items: [
				'Product/iEthernet/W5500/Application/w5500_application',
				'Product/iEthernet/W5500/Application/tcp',
				'Product/iEthernet/W5500/Application/udp',
				'Product/iEthernet/W5500/Application/ipraw',
				'Product/iEthernet/W5500/Application/pppoe',
				'Product/iEthernet/W5500/Application/spi_performance',
				'Product/iEthernet/W5500/Application/esd_test_document',
			],
			},
				'Product/iEthernet/W5500/all_pages',
				'Product/iEthernet/W5500/all_pages_jp',
			{
			type: 'category',
			label: 'W5500-EVB',
			items: [
				'Product/iEthernet/W5500/W5500-EVB/w5500_evb',
				'Product/iEthernet/W5500/W5500-EVB/getting_started',
				'Product/iEthernet/W5500/W5500-EVB/make_new_projects',
				'Product/iEthernet/W5500/W5500-EVB/how_to_install_and_activate_lpcxpresso',
				'Product/iEthernet/W5500/W5500-EVB/w5500-evb_firmware',
			],
			}
			],
			},
			{
				type: 'link',
				label: 'W5300(Link)', // string - the label that should be displayed.
				href: 'http://www.wiznet.io/product-item/w5300/' // string - the target URL.
			},
			{
				type: 'link',
				label: 'W5100(Link)', // string - the label that should be displayed.
				href: 'https://www.wiznet.io/product-item/w5100/' // string - the target URL.
			},
			{
				type: 'link',
				label: 'W3150A+(Link)', // string - the label that should be displayed.
				href: 'https://www.wiznet.io/product-item/w3150a+/' // string - the target URL.
			}
		],
	},
	{
        type: 'category',
        label: 'S2E Module',
        items: [
		'Product/S2E-Module/s2e_module',
		'Product/S2E-Module/serial_to_ethernet_guide',
		//
		{	
			type: 'category',
			label: 'W5500S2E-S1',
			items: [
			'Product/S2E-Module/W5500S2E-S1/w5500s2e_s1',
			'Product/S2E-Module/W5500S2E-S1/overview-[EN]',
			
			],
			},
			{	
				type: 'category',
				label: 'W5500S2E-Z1',
				items: [
				'Product/S2E-Module/W5500S2E-Z1/w5500s2e_z1',
				'Product/S2E-Module/W5500S2E-Z1/overview-[EN]',
				
			],
			},
			{	
				type: 'category',
				label: 'W7500S2E-R1',
				items: [
				'Product/S2E-Module/W7500S2E-R1/w7500s2e_r1',
				'Product/S2E-Module/W7500S2E-R1/overview-[EN]',
			
				],
				},
		{	
			type: 'category',
			label: 'WIZ550SR',
			items: [
			'Product/S2E-Module/WIZ550SR/wiz550sr',
			'Product/S2E-Module/WIZ550SR/overview-[EN]',
			'Product/S2E-Module/WIZ550SR/overview-[KO]',
			'Product/S2E-Module/WIZ550SR/getting_started-[EN]',	
			'Product/S2E-Module/WIZ550SR/getting_started-[KO]',
			'Product/S2E-Module/WIZ550SR/users_manual_programmers_guide-[EN]',	
			'Product/S2E-Module/WIZ550SR/users_manual_programmers_guide-[KO]',
			'Product/S2E-Module/WIZ550SR/atcommand_tutorial-[EN]',	
			'Product/S2E-Module/WIZ550SR/atcommand_tutorial-[KO]',
			'Product/S2E-Module/WIZ550SR/datasheet_hardware_spec_characteristics-[EN]',	
			'Product/S2E-Module/WIZ550SR/datasheet_hardware_spec_characteristics-[KO]',	
			'Product/S2E-Module/WIZ550SR/download',
			],
			},
		{
			type: 'category',
			label: 'WIZ750SR',
			items: [
			'Product/S2E-Module/WIZ750SR/wiz750sr',
			'Product/S2E-Module/WIZ750SR/overview-[EN]',
			'Product/S2E-Module/WIZ750SR/overview-[KO]',
			'Product/S2E-Module/WIZ750SR/getting_started-[EN]',
			'Product/S2E-Module/WIZ750SR/getting_started-[KO]',
			'Product/S2E-Module/WIZ750SR/users_manual-[EN]',
			'Product/S2E-Module/WIZ750SR/users_manual-[KO]',
			'Product/S2E-Module/WIZ750SR/configuration_tool_manual-[EN]',
			'Product/S2E-Module/WIZ750SR/configuration_tool_manual-[KO]',
			'Product/S2E-Module/WIZ750SR/configuration_tool_manual_new-[EN]',
			'Product/S2E-Module/WIZ750SR/configuration_tool_manual_new-[KO]',
			{
			type: 'category',
			label: 'CLI_Config_Tool_Tutorial',
			items: [
			'Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/cli_config_tool_tutorial',
			'Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/overview_environment',
			'Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/how_to_use_cli_config_tool',
			'Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/single_device_configuration',
			'Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/multi_device_configuration',
			'Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/file_options',
			],
			},
			'Product/S2E-Module/WIZ750SR/command_manual-[EN]',
			'Product/S2E-Module/WIZ750SR/command_manual-[KO]',
			'Product/S2E-Module/WIZ750SR/trouble_shooting-[EN]',
			'Product/S2E-Module/WIZ750SR/trouble_shooting-[KO]',
			'Product/S2E-Module/WIZ750SR/datasheet',
			'Product/S2E-Module/WIZ750SR/technical_references',
			'Product/S2E-Module/WIZ750SR/developers_guide-[EN]',
			'Product/S2E-Module/WIZ750SR/developers_guide-[KO]',
			'Product/S2E-Module/WIZ750SR/download',
			],
			},
			{
				type: 'category',
				label: 'WIZ750SR-1xx Series',
				items: [
				'Product/S2E-Module/WIZ750SR-1xx-Series/wiz750sr_1xx_series',
				{
				type: 'category',
				label: 'WIZ750SR-100',
				items: [
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/wiz750sr_100',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/overview-[EN]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/overview-[KO]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/getting_started-[EN]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/getting_started-[KO]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/users_manual-[EN]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/users_manual-[KO]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/configuration_tool_manual-[EN]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/configuration_tool_manual-[KO]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/configuration_tool_manual_new-[EN]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/configuration_tool_manual_new-[KO]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/command_manual-[EN]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/command_manual-[KO]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/trouble_shooting-[EN]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/trouble_shooting-[KO]',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/datasheet',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/technical_references',
				'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/download',
				],
				},
				{
					type: 'category',
					label: 'WIZ750SR-105',
					items: [
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/wiz750sr_105',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/overview-[KO]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/overview-[EN]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/getting_started-[KO]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/getting_started-[EN]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/users_manual-[EN]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/users_manual-[KO]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/configuration_tool_manual-[EN]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/configuration_tool_manual-[KO]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/configuration_tool_manual_new-[EN]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/configuration_tool_manual_new-[KO]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/command_manual-[EN]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/command_manual-[KO]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/trouble_shooting-[EN]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/trouble_shooting-[KO]',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/datasheet',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/technical_references',
					'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/download',
					],
					},
					{
						type: 'category',
						label: 'WIZ750SR-110',
						items: [
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/wiz750sr_110',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/overview-[KO]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/overview-[EN]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/getting_started-[KO]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/getting_started-[EN]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/users_manual-[EN]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/users_manual-[KO]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/configuration_tool_manual-[EN]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/configuration_tool_manual-[KO]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/configuration_tool_manual_new-[EN]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/configuration_tool_manual_new-[KO]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/command_manual-[EN]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/command_manual-[KO]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/trouble_shooting-[EN]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/trouble_shooting-[KO]',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/datasheet',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/technical_references',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/download',
						],
						},
					],
				},
				{
					type: 'category',
					label: 'WIZ752SR-12x Series',
					items: [
					'Product/S2E-Module/WIZ752SR-12x-Series/wiz750sr_1xx_series',
					{
					type: 'category',
					label: 'WIZ752SR-120',
					items: [
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/wiz752sr_120',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/overview-[EN]',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/overview-[KO]',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/getting_started_guide-[EN]',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/getting_started_guide-[KO]',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/users_manual-[EN]',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/users_manual-[KO]',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/configuration_tool_manual_new-[EN]',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/configuration_tool_manual_new-[KO]',
					{
						type: 'category',
						label: 'CLI_Config_Tool_Tutorial',
						items: [
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/cli_config_tool_tutorial',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/overview_environment',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/how_to_use_cli_config_tool',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/single_device_configuration',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/multi_device_configuration',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/file_options',
					],
					},
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/command_manual-[EN]',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/command_manual-[KO]',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/trouble_shooting-[EN]',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/trouble_shooting-[KO]',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/datasheet',
					'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/download',
					],
					},
					{
						type: 'category',
						label: 'WIZ752SR-125',
						items: [
						 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/wiz752sr_125',
						 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/overview-[EN]',
						 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/overview-[KO]',
						 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/getting_started_guide-[EN]',
						 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/getting_started_guide-[KO]',
						 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/users_manual-[EN]',
						 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/users_manual-[KO]',
						 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/configuration_tool_manual_new-[EN]',
						 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/configuration_tool_manual_new-[KO]',
						{
							type: 'category',
							label: 'CLI_Config_Tool_Tutorial',
							items: [
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/cli_config_tool_tutorial',
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/overview_environment',
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/how_to_use_cli_config_tool',
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/single_device_configuration',
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/multi_device_configuration',
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/file_options',
						],
						},
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/command_manual-[EN]',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/command_manual-[KO]',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/trouble_shooting-[EN]',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/trouble_shooting-[KO]',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/datasheet',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/download',
						],
						},
				],
			},
			{
				type: 'category',
				label: 'WIZ550S2E',
				items: [
				'Product/S2E-Module/WIZ550S2E/wiz550s2e',
				'Product/S2E-Module/WIZ550S2E/datasheet_eng',
				'Product/S2E-Module/WIZ550S2E/datasheet_kor',
				'Product/S2E-Module/WIZ550S2E/datasheet_chn',
				'Product/S2E-Module/WIZ550S2E/programmer_guide_eng',
				'Product/S2E-Module/WIZ550S2E/programmer_guide_kor',
				'Product/S2E-Module/WIZ550S2E/programmer_guide_chn',
				'Product/S2E-Module/WIZ550S2E/at_command_eng',
				'Product/S2E-Module/WIZ550S2E/at_command_kor',
				'Product/S2E-Module/WIZ550S2E/at_command_chn',
				'Product/S2E-Module/WIZ550S2E/configuration_tool_eng', 
				'Product/S2E-Module/WIZ550S2E/configuration_tool_kor',
				'Product/S2E-Module/WIZ550S2E/configuration_tool_chn',
				'Product/S2E-Module/WIZ550S2E/tutorial_eng',
				'Product/S2E-Module/WIZ550S2E/tutorial_kor',
				'Product/S2E-Module/WIZ550S2E/download',
				],
				},	
		{
			type: 'link',
			label: 'WIZ100SR(Link)', // string - the label that should be displayed.
			href: 'http://www.wiznet.io/product-item/wiz100sr/' // string - the target URL.
		},
		{
			type: 'link',
			label: 'WIZ105SR(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz105sr/' // string - the target URL.
		},
		'Product/S2E-Module/wiz107sr',
		'Product/S2E-Module/wiz107sr_um',
		{
			type: 'link',
			label: 'WIZ107SR(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz107sr/' // string - the target URL.
		},
		{
			type: 'link',
			label: 'WIZ108SR(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz108sr/' // string - the target URL.
		},
		{
			type: 'link',
			label: 'WIZ110SR(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz110sr/' // string - the target URL.
		},
		{
			type: 'link',
			label: 'WIZ120SR(Link)', // string - the label that should be displayed.
			href: 'http://www.wiznet.io/product-item/wiz120sr/' // string - the target URL.
		},
		{
			type: 'link',
			label: 'WIZ125SR(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz125sr/' // string - the target URL.
		},
		{
			type: 'link',
			label: 'WIZ140SR(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz140sr/' // string - the target URL.
		},
		{
			type: 'link',
			label: 'WIZ145SR(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz145sr/' // string - the target URL.
		}
		],
	},
	{
        type: 'category',
        label: 'ioModule',
        items: [
		'Product/ioModule/iomodule',
		'Product/ioModule/WIZ610io/wiz610io',
		'Product/ioModule/WIZ610MJ/wiz610mj',
		'Product/ioModule/WIZ810Sio/wiz810sio',
		'Product/ioModule/WIZ810SMJ/wiz810smj',
		'Product/ioModule/WIZ850io/wiz850io',
		{
        type: 'category',
        label: 'WIZ550io',
        items: [
		'Product/ioModule/WIZ550io/overview',
		'Product/ioModule/WIZ550io/hardware_pins',
		'Product/ioModule/WIZ550io/characteristic',
		'Product/ioModule/WIZ550io/spi_operations',
		'Product/ioModule/WIZ550io/timing_diagram',
		'Product/ioModule/WIZ550io/block_diagram_schematic',
		'Product/ioModule/WIZ550io/dimension',
		'Product/ioModule/WIZ550io/related_products',
		'Product/ioModule/WIZ550io/all_pages',
		],
		},
		{
			type: 'link',
			label: 'WIZ820io(Link)', // string - the label that should be displayed.
			href: 'http://www.wiznet.io/product-item/wiz820io/' // string - the target URL.
		},
		'Product/ioModule/wiz810mj',
		{
			type: 'link',
			label: 'WIZ810MJ(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz810mj/' // string - the target URL.
		},
		'Product/ioModule/wiz811mj',
		{
			type: 'link',
			label: 'WIZ811MJ(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz811mj/' // string - the target URL.
		},
		'Product/ioModule/wiz812mj',
		{
			type: 'link',
			label: 'WIZ812MJ(Link)', // string - the label that should be displayed.
			href: 'http://www.wiznet.io/product-item/wiz812mj/' // string - the target URL.
		},
		{
			type: 'link',
			label: 'WIZ830MJ(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz830mj/' // string - the target URL.
		},
		'Product/ioModule/nm7010b+',
		{
			type: 'link',
			label: 'NM7010B+(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/nm7010b+/' // string - the target URL.
		}
		],
	},
	{
        type: 'category',
        label: 'App Module',
        items: [
		'Product/App-Module/app_module',
		{
        type: 'category',
        label: 'WIZ550web',
        items: [
		'Product/App-Module/WIZ550web/wiz550web',
		'Product/App-Module/WIZ550web/datasheet_eng',
		'Product/App-Module/WIZ550web/datasheet_kor',
		'Product/App-Module/WIZ550web/getting_started_guide_eng',
		'Product/App-Module/WIZ550web/getting_started_guide_kor',
		'Product/App-Module/WIZ550web/users_guide_eng',
		'Product/App-Module/WIZ550web/users_guide_kor',
		'Product/App-Module/WIZ550web/future_plan_eng',
		'Product/App-Module/WIZ550web/future_plan_kor',
		'Product/App-Module/WIZ550web/tutorials_eng',
		'Product/App-Module/WIZ550web/tutorials_kor',
		'Product/App-Module/WIZ550web/download',
		],
		}
		],
	},
	{
        type: 'category',
        label: 'Wi-Fi Module',
        items: [
		'Product/Wi-Fi-Module/wi_fi_module',
		{
			type: 'category',
			label: 'WizFi250',
			items: [
			'Product/Wi-Fi-Module/WizFi250/wizfi250',
			{
			type: 'category',
			label: 'Datasheet',
			items: [
			'Product/Wi-Fi-Module/WizFi250/Datasheet/1_introduction',
			'Product/Wi-Fi-Module/WizFi250/Datasheet/2_features',
			'Product/Wi-Fi-Module/WizFi250/Datasheet/3_block_diagram',
			'Product/Wi-Fi-Module/WizFi250/Datasheet/4_pin_description',
			'Product/Wi-Fi-Module/WizFi250/Datasheet/5_technical_specification',
			'Product/Wi-Fi-Module/WizFi250/Datasheet/6_io_port_characteristics',
			'Product/Wi-Fi-Module/WizFi250/Datasheet/7_dimensions_weight_and_mounting',
			'Product/Wi-Fi-Module/WizFi250/Datasheet/8_design_guide',
			'Product/Wi-Fi-Module/WizFi250/Datasheet/9_recommend_reflow_profile',
			'Product/Wi-Fi-Module/WizFi250/Datasheet/10_wizfi250_ref_schematic',
			'Product/Wi-Fi-Module/WizFi250/Datasheet/instruction_to_oem',
			]
			},
			{
			type: 'category',
			label: 'Programers Guide',
			items: [
			'Product/Wi-Fi-Module/WizFi250/Programers-Guide/overview',
			'Product/Wi-Fi-Module/WizFi250/Programers-Guide/at_command_set',
			'Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin',
			'Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_use_web_configuration',
			'Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware',
			'Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_association_disassociation',
			'Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_data_communication',
			'Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_wifi_direct',
			'Product/Wi-Fi-Module/WizFi250/Programers-Guide/appendix',
			]
			},
			{
			type: 'category',
			label: 'Quick Start Guide',
			items: [
			'Product/Wi-Fi-Module/WizFi250/Quick-Start-Guide/1_wizfi250_evaluation_board',
			'Product/Wi-Fi-Module/WizFi250/Quick-Start-Guide/2_start_serial_to_wi_fi',
			]
			},
			'Product/Wi-Fi-Module/WizFi250/comparison',
			'Product/Wi-Fi-Module/WizFi250/wizfi250_evb_if_fimension',
			'Product/Wi-Fi-Module/WizFi250/wizfi250_evb_sch',
			'Product/Wi-Fi-Module/WizFi250/wizfi250_firmware',
			'Product/Wi-Fi-Module/WizFi250/reference_youtube',
			],
			},
			{
				type: 'category',
				label: 'WizFi310',
				items: [
				'Product/Wi-Fi-Module/WizFi310/wizfi310',
				'Product/Wi-Fi-Module/WizFi310/datasheet',
				{
				type: 'category',
				label: 'Programers Guide',
				items: [
				'Product/Wi-Fi-Module/WizFi310/Programers-Guide/overview',
				'Product/Wi-Fi-Module/WizFi310/Programers-Guide/at_commands',
				'Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_serial_interface',
				'Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_ota',
				'Product/Wi-Fi-Module/WizFi310/Programers-Guide/examples',
				'Product/Wi-Fi-Module/WizFi310/Programers-Guide/gmmp_example',
				'Product/Wi-Fi-Module/WizFi310/Programers-Guide/thingplug_example',
				'Product/Wi-Fi-Module/WizFi310/Programers-Guide/mqtt_example',
				]
				},
				'Product/Wi-Fi-Module/WizFi310/quick_start_guide',
				'Product/Wi-Fi-Module/WizFi310/wizfi310_evb_if_dimension',
				'Product/Wi-Fi-Module/WizFi310/wizfi310_evb_sch',
				'Product/Wi-Fi-Module/WizFi310/wizfi310_firmware_using_serial',
				'Product/Wi-Fi-Module/WizFi310/wizfi310_firmware_using_ota',
				],
				},	
		{
        type: 'category',
        label: 'WizFi360',
        items: [
		'Product/Wi-Fi-Module/WizFi360/wizfi360',
		'Product/Wi-Fi-Module/WizFi360/documents',
		'Product/Wi-Fi-Module/WizFi360/application_examples',
		'Product/Wi-Fi-Module/WizFi360/wizfi360_evb_shield',
		'Product/Wi-Fi-Module/WizFi360/wizfi360_evb_mini',
		'Product/Wi-Fi-Module/WizFi360/wizfi360io',
		{
        type: 'category',
        label: 'Other Resource',
        items: [
		'Product/Wi-Fi-Module/WizFi360/Other-Resource/w600_sdk',
		]
		},
		{
			type: 'link',
			label: 'AT-Command Firmware release(Link)', // string - the label that should be displayed.
			href: 'https://github.com/wizfi/Release/tree/master/Binary' // string - the target URL.
		}
		],
		},
		{
			type: 'category',
			label: 'WizFi630A',
			items: [
			'Product/Wi-Fi-Module/WizFi630A/wizfi630a',
			],
			},
		{
        type: 'category',
        label: 'WizFi630S',
        items: [
		'Product/Wi-Fi-Module/WizFi630S/wizfi630s',
		'Product/Wi-Fi-Module/WizFi630S/datasheet',
		'Product/Wi-Fi-Module/WizFi630S/user_guide',
		'Product/Wi-Fi-Module/WizFi630S/hw_reference',
		'Product/Wi-Fi-Module/WizFi630S/certificate',
		],
		}
		],
	},
	{
		type: 'category',
		label: 'Azure Sphere',
		items: [
			'Product/Azure-Sphere/asg200',
			'Product/Azure-Sphere/asg210',
		],
	},
	{
        type: 'category',
        label: 'Mbed WIZwiki Platform',
        items: [
		'Product/Mbed-WIZwiki-Platform/mbed_wizwiki_platform',
		{
        type: 'category',
        label: 'WIZwiki-W7500',
        items: [
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/overview',
		{
			type: 'category',
			label: 'Getting Started',
			items: [
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_start_wizwiki_w7500_board',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_install_wizwiki_7500_serial_driver',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_wizwiki_w7500',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_debug_wizwiki_w7500',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_cmsis_dap',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/using_cmsis_dap_debugger',
			],
			},
			{
				type: 'category',
				label: 'Make New WIZwiki-W7500 Projects',
				items: [
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_install_keil_uvision',
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_make_w7500_keil_project',
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_use_mdk_for_w7500',
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_use_makefile_with_windows7',
				],
				},
				{
					type: 'category',
					label: 'Etc.',
					items: [
					'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_use_isp_tool',
					],
					},
		],
		},
		{
        type: 'category',
        label: 'WIZwiki-W7500P',
        items: [
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/overview',
		{
			type: 'category',
			label: 'Getting Started',
			items: [	
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_start_wizwiki_w7500p_board',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_install_wizwiki_w7500p_serial_driver',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_write_firmware_into_wizwiki_w7500p',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_debug_wizwiki_w7500p',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_write_firmware_into_cmsis_dap',
			
			],
			},
			{
				type: 'category',
				label: 'Make New WIZwiki-W7500P Projects',
				items: [
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/make_new_wizwiki_w7500p_projects',
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_install_keil_uvision',
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_make_w7500_keil_project',
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_use_mdk_for_w7500',
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_use_makefile_with_windows7',
				],
				},
				{
					type: 'category',
					label: 'Etc.',
					items: [
					'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_use_isp_tool',
					],
					},
		],
		},
		{
        type: 'category',
        label: 'WIZwiki-W7500ECO',
        items: [
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/overview',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/eco-shield',
		{
			type: 'category',
			label: 'Getting Started',
			items: [
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_start_wizwiki_w7500eco_board',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_install_wizwiki_w7500eco_driver',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_write_firmware_wizwiki_w7500eco',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_write_firmware_into_cmsis_dap',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/using_cmsis_dap_debugger',
			
			],
			},
			{
				type: 'category',
				label: 'Make New WIZwiki-W7500ECO Projects',
				items: [
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/make_new_wizwiki_w7500eco_projects',
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_install_keil_uvision',
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_make_w7500_keil_project',
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_use_mdk_for_w7500',
				'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_use_makefile_with_windows7',
				],
				},
				{
					type: 'category',
					label: 'Etc.',
					items: [
					'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_use_isp_tool',
					],
					},
		],
		},
		{
        type: 'category',
        label: 'WIZwiki-W7500 Mbed Starter Kit',
        items: [
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/wizwiki_w7500_mbed_starter_kit',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/product_information_eng',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/tutorial_eng',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/sign_up_at_arm_mbed_eng',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_1_led_eng',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_2_serial_port_eng',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_3_switch_eng',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_4_pwm_eng',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_5_variable_resistor_eng',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_6_temperature_sensor_eng',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_7_photoresistor_eng',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network_exercise_1_tcp_loopback_eng',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network_exercise_2_led_with_tcp_eng',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/kit_parts_datasheet',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/product_information_kor',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/tutorial_kor',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/sign_up_at_arm_mbed_kor',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_1_led_kor',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_2_serial_port_kor',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_3_switch_kor',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_4_pwm_kor',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_5_variable_resistor_kor',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_6_temperature_sensor_kor',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_7_photoresistor_kor',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network_exercise_1_tcp_loopback_kor',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network_exercise_2_led_with_tcp_kor',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/kit_parts_datasheet_kor',
		],
		}
		],
	},
	{
        type: 'category',
        label: 'Open Source Hardware',
        items: [
		'Product/Open-Source-Hardware/open_source_hardware',
		'Product/Open-Source-Hardware/w5100s_mkr_ethernet_shield',
		'Product/Open-Source-Hardware/w6100_mkr_ethernet_shield',
		'Product/Open-Source-Hardware/wizarduino_m0_eth',
		'Product/Open-Source-Hardware/wizarduino_mega_wifi',
		'Product/Open-Source-Hardware/wizfi310_shield',
		'Product/Open-Source-Hardware/w5500_ethernet_shield',
		'Product/Open-Source-Hardware/w5500_ethernet_shield_kor',
		'Product/Open-Source-Hardware/w5500_ethernet_shield_jp',
		'Product/Open-Source-Hardware/ioshield_a',
		'Product/Open-Source-Hardware/ethernet_library_for_ioShield_A',
		'Product/Open-Source-Hardware/ioshield_k',
		'Product/Open-Source-Hardware/ioshield_l',
		'Product/Open-Source-Hardware/getting_started_arduino',
		'Product/Open-Source-Hardware/getting_started_arduino_kr',
		'Product/Open-Source-Hardware/getting_started_arduino_jp',
		'Product/Open-Source-Hardware/Tutorial',
		'Product/Open-Source-Hardware/IP_Configuration',
		'Product/Open-Source-Hardware/http_client',
		'Product/Open-Source-Hardware/loopback',
		'Product/Open-Source-Hardware/Energy_micro',
		'Product/Open-Source-Hardware/tinygecko',
		'Product/Open-Source-Hardware/twitter_test',
		'Product/Open-Source-Hardware/cookie', // is coocox already in cookie?
		'Product/Open-Source-Hardware/open_source_hardware_coocox',
		'Product/Open-Source-Hardware/open_source_hardware_all_pages',
		],
    },
	],
    'Design Guide': [//------------------------------------------------------------------------------------------------------------------------------------------------------------------------->DESIGN GUIDE                                                                    									
	'Design-Guide/design_guide',
	'Design-Guide/hardware_design_guide',
	'Design-Guide/package_information',
	'Design-Guide/ir_reflow_profile',
	'Design-Guide/eagle_cad_library_of_wiznet_products',
	],
	'VAR Products using WIZnet': [//------------------------------------------------------------------------------------------------------------------------------------------------------------>VAR PRODUCTS
	'VAR-Products-using-WIZnet/var_products_using_wiznet',
	'VAR-Products-using-WIZnet/ethernet_shield',
	'VAR-Products-using-WIZnet/wi_fi_shield',
	'VAR-Products-using-WIZnet/ble_to_ethernet',
	'VAR-Products-using-WIZnet/w5500BoB_ESoPe',
	'VAR-Products-using-WIZnet/w5500CoB_ESoPe',
	'VAR-Products-using-WIZnet/third_party',	
	],
  },
}; 
