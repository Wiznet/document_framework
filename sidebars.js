/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
	'introduction',
    {
		type: 'category',
		label: 'Products',
		link: {type: 'doc', id: 'Product/products'},
		items: [
		//,
		{
			type: 'category',
			label: 'Azure Sphere Guardian Module',
			items: [
				{
				type: 'category',
				label: 'ASG210',
				link: {type: 'doc', id: 'Product/Azure-Sphere/asg210'},
				items: [
				//'Product/Azure-Sphere/asg200',
				//'Product/Azure-Sphere/asg210',
				'Product/Azure-Sphere/asg210-datasheet',
				'Product/Azure-Sphere/asg210-debugger',
				'Product/Azure-Sphere/asg210-resources',
				'Product/Azure-Sphere/asg210-getting-started',
				'Product/Azure-Sphere/asg210-running-application',
				],
				},
			],
		},
		{
			type: 'category',
			label: 'iMCU',
			link: {type: 'doc', id: 'Product/iMCU/imcu'},
			items: [
				//'Product/iMCU/imcu',
				{
				type: 'category',
				label: 'W7500',
				link: {type: 'doc', id: 'Product/iMCU/W7500/overview'},
				items: [
					//'Product/iMCU/W7500/overview',
					'Product/iMCU/W7500/pin-assignment',
					'Product/iMCU/W7500/system-and-memory',
					'Product/iMCU/W7500/interrupt-and-event',
					'Product/iMCU/W7500/power-supply',
					'Product/iMCU/W7500/booting-sequence',
					'Product/iMCU/W7500/electrical-characteristics-w7500',
					'Product/iMCU/W7500/w7500-ref-schematic',
					'Product/iMCU/W7500/documents_md',
					'Product/iMCU/W7500/peripherals',
					'Product/iMCU/W7500/libraries-examples',
					//'Product/iMCU/W7500/all_pages',
					{
						type: 'category',
						label: 'Peripherals Internal',
						items: [
							'Product/iMCU/W7500/Peripherals-internal/adc',
							'Product/iMCU/W7500/Peripherals-internal/afc',
							'Product/iMCU/W7500/Peripherals-internal/blink-led',
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
							'Product/iMCU/W7500/Peripherals-internal/iap-example',
							'Product/iMCU/W7500/Peripherals-internal/illumination-sensor',
							'Product/iMCU/W7500/Peripherals-internal/init',
							'Product/iMCU/W7500/Peripherals-internal/inter',
							'Product/iMCU/W7500/Peripherals-internal/led-toggle',
							'Product/iMCU/W7500/Peripherals-internal/lm75-temperature',
							'Product/iMCU/W7500/Peripherals-internal/loopback',
							'Product/iMCU/W7500/Peripherals-internal/padcon',
							'Product/iMCU/W7500/Peripherals-internal/polling',
							'Product/iMCU/W7500/Peripherals-internal/printf',
							'Product/iMCU/W7500/Peripherals-internal/pwm',
							'Product/iMCU/W7500/Peripherals-internal/pwmoutput',
							'Product/iMCU/W7500/Peripherals-internal/rng-ex',
							'Product/iMCU/W7500/Peripherals-internal/rng',
							'Product/iMCU/W7500/Peripherals-internal/sd-card-led',
							'Product/iMCU/W7500/Peripherals-internal/sleep',
							'Product/iMCU/W7500/Peripherals-internal/ssp',
							'Product/iMCU/W7500/Peripherals-internal/systick',
							'Product/iMCU/W7500/Peripherals-internal/tcp-function',
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
								'Product/iMCU/W7500/documents/appnote/how-to-make-keil-new-project-for-w7500',
								'Product/iMCU/W7500/documents/appnote/how-to-use-gcc-for-w7500-peripherals-examples',
								'Product/iMCU/W7500/documents/appnote/how-to-use-isp-tool',
								'Product/iMCU/W7500/documents/appnote/how-to-use-mdk-for-w7500-peripherals-examples',							
						],
						},
							],
							},
				],
				},
				{
				type: 'category',
				label: 'W7500P',
				link: {type: 'doc', id: 'Product/iMCU/W7500P/overview'},
				items: [
					//'Product/iMCU/W7500P/overview',
					'Product/iMCU/W7500P/pin-assignment',
					'Product/iMCU/W7500P/system-and-memory',
					'Product/iMCU/W7500P/interrupt-and-event',
					'Product/iMCU/W7500P/power-supply',
					'Product/iMCU/W7500P/booting-sequence',
					'Product/iMCU/W7500P/electrical-characteristics',
					'Product/iMCU/W7500P/w7500p-ref-schematic',
					'Product/iMCU/W7500P/documents',
					'Product/iMCU/W7500P/peripherals',
					'Product/iMCU/W7500P/libraries-examples',
					//'Product/iMCU/W7500P/all_pages',
				],
				},
				{			
					type: 'category',
					label: 'W7100',
					link: {type: 'doc', id: 'Product/iMCU/W7100/w7100a'},
					items: [
						//'Product/iMCU/W7100/w7100a',
						'Product/iMCU/W7100/imcu7100-evb',
					],
				},
					//'Product/iMCU/w7100a',			
			],
		},
		{
			type: 'category',
			label: 'Pre-programmed MCU',
			link: {type: 'doc', id: 'Product/Pre-programmed-MCU/pre_programmed_mcu'},
			items: [
				//'Product/Pre-programmed-MCU/pre_programmed_mcu',
				{
					type: 'category',
					label: 'W7500P-S2E',
					items: [
						'Product/Pre-programmed-MCU/W7500P-S2E/w7500p-s2e-EN',
						'Product/Pre-programmed-MCU/W7500P-S2E/w7500p-s2e-KO',
					],
				},	
			],
		},
		{
			type: 'category',
			label: 'iEthernet',
			link: {type: 'doc', id: 'Product/iEthernet/iethernet'},
				items: [
				//'Product/iEthernet/iethernet',
				{
				type: 'category',
				label: 'W6100',
				link: {type: 'doc', id: 'Product/iEthernet/W6100/w6100'},
				items: [
					//'Product/iEthernet/W6100/w6100',
					'Product/iEthernet/W6100/overview',
					'Product/iEthernet/W6100/document',
					'Product/iEthernet/W6100/driver-basic-project',
					'Product/iEthernet/W6100/ref-schematic',
					'Product/iEthernet/W6100/application-note',
					'Product/iEthernet/W6100/w6100-evb',
					'Product/iEthernet/W6100/getting-started-w6100evb',
					'Product/iEthernet/W6100/new-project-truestudio',
					'Product/iEthernet/W6100/new-project-eclipse',
				],
				},
				{
				type: 'category',
				label: 'W5100S',
				link: {type: 'doc', id: 'Product/iEthernet/W5100S/overview'},
				items: [
					//'Product/iEthernet/W5100S/overview',
					'Product/iEthernet/W5100S/document',
					'Product/iEthernet/W5100S/driver',
					'Product/iEthernet/W5100S/ref-schematic',
					'Product/iEthernet/W5100S/comparison-sheet',
					
					{
					type: 'category',
					label: 'Application Note',
					link: {type: 'doc', id: 'Product/iEthernet/W5100S/Application-Note/w5100s-application'},
					items: [
						//'Product/iEthernet/W5100S/Application-Note/w5100s_application',
						'Product/iEthernet/W5100S/Application-Note/tcp',
						'Product/iEthernet/W5100S/Application-Note/udp',
						'Product/iEthernet/W5100S/Application-Note/ipraw',
						'Product/iEthernet/W5100S/Application-Note/pppoe',
						'Product/iEthernet/W5100S/Application-Note/socket-less-command',
						'Product/iEthernet/W5100S/Application-Note/interrupt',
						'Product/iEthernet/W5100S/Application-Note/dma',
						],
					},
					'Product/iEthernet/W5100S/w5100s-evb',
					'Product/iEthernet/W5100S/w5100s-evb-pico',
					'Product/iEthernet/W5100S/w5100s-getting-started',
					'Product/iEthernet/W5100S/w5100s-projects-truestudio',
					'Product/iEthernet/W5100S/w5100s-projects-eclipse',
				//'Product/iEthernet/W5100S/all_pages',
				],
				},
				{
				type: 'category',
				label: 'W5500',
				link: {type: 'doc', id: 'Product/iEthernet/W5500/overview'},
				items: [
					//'Product/iEthernet/W5500/overview',
					'Product/iEthernet/W5500/japanese-v',
					'Product/iEthernet/W5500/datasheet',
					'Product/iEthernet/W5500/driver',
					'Product/iEthernet/W5500/ref-schematic',
					'Product/iEthernet/W5500/migration-from-w5200',
					{
					type: 'category',
					label: 'Application',
					link: {type: 'doc', id: 'Product/iEthernet/W5500/Application/w5500-application'},
					items: [
						//'Product/iEthernet/W5500/Application/w5500_application',
						'Product/iEthernet/W5500/Application/tcp',
						'Product/iEthernet/W5500/Application/udp',
						'Product/iEthernet/W5500/Application/ipraw',
						'Product/iEthernet/W5500/Application/pppoe',
						'Product/iEthernet/W5500/Application/spi-performance',
						'Product/iEthernet/W5500/Application/esd-test-document',
					],
					},
					//'Product/iEthernet/W5500/all_pages',
					//'Product/iEthernet/W5500/all_pages_jp',
					{
					type: 'category',
					label: 'W5500-EVB',
					link: {type: 'doc', id: 'Product/iEthernet/W5500/W5500-EVB/w5500-evb'},
					items: [
						//'Product/iEthernet/W5500/W5500-EVB/w5500_evb',
						'Product/iEthernet/W5500/W5500-EVB/getting-started',
						'Product/iEthernet/W5500/W5500-EVB/make-new-projects',
						'Product/iEthernet/W5500/W5500-EVB/how-to-install-and-activate-lpcxpresso',
						//'Product/iEthernet/W5500/W5500-EVB/w5500-evb_firmware',
					],
					},
					'Product/iEthernet/W5500/w5500-evb-pico'
				],
				},
				{
				//	type: 'link',
				//	label: 'W5300', // string - the label that should be displayed.
				//	href: 'http://www.wiznet.io/product-item/w5300/' // string - the target URL.
					type: 'category',
					label: 'W5300',
					link: {type: 'doc', id: 'Product/iEthernet/W5300/w5300'},
					items: [
						//'Product/iEthernet/W5300/w5300',
						'Product/iEthernet/W5300/overview',
						'Product/iEthernet/W5300/document',
						'Product/iEthernet/W5300/w5300-evb',
					],
				},
				{
				//	type: 'link',
				//	label: 'W5100', // string - the label that should be displayed.
				//	href: 'https://www.wiznet.io/product-item/w5100/' // string - the target URL.
					type: 'category',
					label: 'W5100',
					link: {type: 'doc', id: 'Product/iEthernet/W5100/w5100'},
					items: [
						//'Product/iEthernet/W5100/w5100',
						'Product/iEthernet/W5100/overview',
						'Product/iEthernet/W5100/document',
						'Product/iEthernet/W5100/w5100-evb',
					],
				},

				/*{
					type: 'category',
					label: 'W5200',
					items: [
						'Product/iEthernet/W5200/w5200',
					],
				}*/
			],
		},
		{
			type: 'category',
			label: 'S2E Module',
			link: {type: 'doc', id: 'Product/S2E-Module/s2e_module'},
			items: [
			//'Product/S2E-Module/s2e_module',
			'Product/S2E-Module/serial-to-ethernet-guide',
			{
				type: 'category',
				label: 'WIZ75x Series',
				items: [
					{
						type: 'category',
						label: 'Common docs for WIZ75x',
						items: [
							'Product/S2E-Module/WIZ750SR/users-manual-EN',
							'Product/S2E-Module/WIZ750SR/users-manual-KO',
							'Product/S2E-Module/WIZ750SR/configuration-tool-manual-EN',
							'Product/S2E-Module/WIZ750SR/configuration-tool-manual-KO',
							'Product/S2E-Module/WIZ750SR/configuration-tool-manual-new-EN',
							'Product/S2E-Module/WIZ750SR/configuration-tool-manual-new-KO',
							{
								type: 'category',
								label: 'CLI-Config-Tool-Tutorial',
								link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
								items: [
									'Product/S2E-Module/WIZ750SR/CLI-Config-Tool-Tutorial/overview-environment',
									'Product/S2E-Module/WIZ750SR/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
									'Product/S2E-Module/WIZ750SR/CLI-Config-Tool-Tutorial/single-device-configuration',
									'Product/S2E-Module/WIZ750SR/CLI-Config-Tool-Tutorial/multi-device-configuration',
									'Product/S2E-Module/WIZ750SR/CLI-Config-Tool-Tutorial/file-options',
								],
							},
							'Product/S2E-Module/WIZ750SR/command-manual-EN',
							'Product/S2E-Module/WIZ750SR/command-manual-KO',
							'Product/S2E-Module/WIZ750SR/trouble-shooting-EN',
							'Product/S2E-Module/WIZ750SR/trouble-shooting-KO',
							'Product/S2E-Module/WIZ750SR/technical-references',
							'Product/S2E-Module/WIZ750SR/download',
							'Product/S2E-Module/WIZ750SR/developers-guide-EN',
							'Product/S2E-Module/WIZ750SR/developers-guide-KO',
						],	
					},
					{
				
					type: 'category',
					label: 'WIZ750SR',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR/wiz750sr'},
					items: [
					//'Product/S2E-Module/WIZ750SR/wiz750sr',
					'Product/S2E-Module/WIZ750SR/overview-EN',
					'Product/S2E-Module/WIZ750SR/overview-KO',
					'Product/S2E-Module/WIZ750SR/datasheet',
					'Product/S2E-Module/WIZ750SR/getting-started-EN',
					'Product/S2E-Module/WIZ750SR/getting-started-KO',								
				],
				},
				{
					type: 'category',
					label: 'WIZ750SR-1xx Series',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR-1xx-Series/wiz750sr-1xx-series'},
					items: [
					//'Product/S2E-Module/WIZ750SR-1xx-Series/wiz750sr-1xx-series',
					{
					type: 'category',
					label: 'WIZ750SR-100',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/wiz750sr-100'},
					items: [
						//'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/wiz750sr-100',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/overview-EN',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/overview-KO',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/datasheet',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/getting-started-EN',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/getting-started-KO',						
					],
					},
					{
					type: 'category',
					label: 'WIZ750SR-105',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/wiz750sr-105'},
					items: [
						//'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/wiz750sr-105',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/overview-KO',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/overview-EN',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/datasheet',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/getting-started-KO',
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/getting-started-EN',			
						
						],
					},
					{
					type: 'category',
					label: 'WIZ750SR-110',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/wiz750sr-110'},
					items: [
							//'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/wiz750sr-110',
							'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/overview-KO',
							'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/overview-EN',
							'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/datasheet',
							'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/getting-started-KO',
							'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/getting-started-EN',					
							
							],
							},
					],
				},
				{	
					type: 'category',
					label: 'WIZ752SR-12x Series',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ752SR-12x-Series/wiz750sr-1xx-series'},
					items: [
						//'Product/S2E-Module/WIZ752SR-12x-Series/wiz750sr-1xx-series',
						{
						type: 'category',
						label: 'WIZ752SR-120',
						link: {type: 'doc', id: 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/wiz752sr-120'},
						items: [
						//'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/wiz752sr-120',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/overview-EN',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/overview-KO',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/getting-started-guide-EN',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/getting-started-guide-KO',				
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/datasheet',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/command-manual-EN',
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/command-manual-KO',
						],
						},
						{
							type: 'category',
							label: 'WIZ752SR-125',
							link: {type: 'doc', id: 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/wiz752sr-125'},
							items: [
							//'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/wiz752sr-125',
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/overview-EN',
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/overview-KO',
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/getting-started-guide-EN',
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/getting-started-guide-KO',
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/datasheet',
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/command-manual-EN',
							'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/command-manual-KO',
							],
							},
					],
				},
			],
			},
			{
				type: 'category',
				label: 'WIZ5xx Series',
				items:[
				{
					type: 'category',
					label: 'WIZ5xxSR-RP Series',
					items: [
					{
						type: 'category',
						label: 'Common docs for WIZ5xxSR-RP',
						items: [
						'Product/S2E-Module/WIZ5xxSR-RP-Series/command_manual',
						]
					},
					{
						type:'category',
						label:'WIZ500SR-RP',
						items: [
						'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/datasheet',
					]					
					},
					{
						type:'category',
						label:'WIZ505SR-RP',
						items: [
						'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/datasheet'
						]
					},
					{
						type:'category',
						label:'WIZ510SR-RP',
						items: [
						'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/datasheet'
						]
					}					
					]
				},
//				{
//					type:'category',
//					label:'WIZ500SR-RP',
//					items: [
//					'Product/S2E-Module/WIZ500SR-RP/datasheet',	
//					]
//				},
//				{
//					type:'category',
//					label:'WIZ505SR-RP',
//					items: [
//					'Product/S2E-Module/WIZ505SR-RP/datasheet',	
//					]
//				},
//				{
//					type:'category',
//					label:'WIZ510SR-RP',
//					items: [
//					'Product/S2E-Module/WIZ510SR-RP/datasheet',	
//					]
//				},
				{
						type: 'category',
						label: 'WIZ510SSL',
						link: {type: 'doc', id: 'Product/S2E-Module/WIZ510SSL/wiz510ssl'},
						items: [
						//'Product/S2E-Module/WIZ510SSL/wiz510ssl',
						'Product/S2E-Module/WIZ510SSL/datasheet',
						'Product/S2E-Module/WIZ510SSL/wiz510ssl-evb',
						'Product/S2E-Module/WIZ510SSL/getting-started',
						//'Product/S2E-Module/WIZ510SSL/getting_started-[ko]',
						'Product/S2E-Module/WIZ510SSL/command-manual',
						'Product/S2E-Module/WIZ510SSL/configuration-tool-manual',
						'Product/S2E-Module/WIZ510SSL/firmware-update-guide',
						'Product/S2E-Module/WIZ510SSL/ssl-connection-guide',
						'Product/S2E-Module/WIZ510SSL/troubleshooting-guide',
						'Product/S2E-Module/WIZ510SSL/aws-connection-guide',
						],
				},
				{	
						type: 'category',
						label: 'WIZ550SR',
						link: {type: 'doc', id: 'Product/S2E-Module/WIZ550SR/wiz550sr'},
						items: [
						//'Product/S2E-Module/WIZ550SR/wiz550sr',
						'Product/S2E-Module/WIZ550SR/overview-EN',
						'Product/S2E-Module/WIZ550SR/overview-KO',
						'Product/S2E-Module/WIZ550SR/getting_started-EN',	
						'Product/S2E-Module/WIZ550SR/getting_started-KO',
						'Product/S2E-Module/WIZ550SR/users_manual_programmers_guide-EN',	
						'Product/S2E-Module/WIZ550SR/users_manual_programmers_guide-KO',
						'Product/S2E-Module/WIZ550SR/atcommand_tutorial-EN',	
						'Product/S2E-Module/WIZ550SR/atcommand_tutorial-KO',
						'Product/S2E-Module/WIZ550SR/datasheet_hardware_spec_characteristics-EN',	
						'Product/S2E-Module/WIZ550SR/datasheet_hardware_spec_characteristics-KO',	
						'Product/S2E-Module/WIZ550SR/download',
						],
				},
				{
					type: 'category',
					label: 'WIZ550S2E',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ550S2E/wiz550s2e'},
					items: [
					//'Product/S2E-Module/WIZ550S2E/wiz550s2e',
					'Product/S2E-Module/WIZ550S2E/datasheet-eng',
					'Product/S2E-Module/WIZ550S2E/datasheet-kor',
					'Product/S2E-Module/WIZ550S2E/datasheet-chn',
					'Product/S2E-Module/WIZ550S2E/programmer-guide-eng',
					'Product/S2E-Module/WIZ550S2E/programmer-guide-kor',
					'Product/S2E-Module/WIZ550S2E/programmer-guide-chn',
					'Product/S2E-Module/WIZ550S2E/at-command-eng',
					'Product/S2E-Module/WIZ550S2E/at-command-kor',
					'Product/S2E-Module/WIZ550S2E/at-command-chn',
					'Product/S2E-Module/WIZ550S2E/configuration-tool-eng', 
					'Product/S2E-Module/WIZ550S2E/configuration-tool-kor',
					'Product/S2E-Module/WIZ550S2E/configuration-tool-chn',
					'Product/S2E-Module/WIZ550S2E/tutorial-eng',
					'Product/S2E-Module/WIZ550S2E/tutorial-kor',
					'Product/S2E-Module/WIZ550S2E/download',
					],
				},
				
			],
			},		
			{
				type: 'category',
				label: 'WIZ1xx series',
				items:[
				{
				type: 'category',
				label: 'WIZ100SR', // string - the label that should be displayed.
				link: {type: 'doc', id: 'Product/S2E-Module/WIZ100SR/wiz100sr'},
				items: [//'Product/S2E-Module/WIZ100SR/wiz100sr',
						'Product/S2E-Module/WIZ100SR/wiz100sr-evb'
						]
				},
				{
				type: 'category',
				label: 'WIZ105SR', // string - the label that should be displayed.
				link: {type: 'doc', id: 'Product/S2E-Module/WIZ105SR/wiz105sr'},
				items: [//'Product/S2E-Module/WIZ105SR/wiz105sr',
						'Product/S2E-Module/WIZ105SR/wiz105sr-evb']
				},
				//'Product/S2E-Module/wiz107sr',
				//'Product/S2E-Module/wiz107sr_um',
				{
				type: 'category',
				label: 'WIZ107SR', // string - the label that should be displayed.
				link: {type: 'doc', id: 'Product/S2E-Module/WIZ107SR/wiz107sr'},
				items: [//'Product/S2E-Module/WIZ107SR/wiz107sr',
						'Product/S2E-Module/WIZ107SR/wiz107sr-evb']
				},
				{
				type: 'category',
				label: 'WIZ108SR', // string - the label that should be displayed.
				link: {type: 'doc', id: 'Product/S2E-Module/WIZ108SR/wiz108sr'},
				items: [//'Product/S2E-Module/WIZ108SR/wiz108sr',
						'Product/S2E-Module/WIZ108SR/wiz108sr-evb']
				},
				'Product/S2E-Module/WIZ110SR/wiz110sr',
				{
				type: 'category',
				label: 'WIZ120SR', // string - the label that should be displayed.
				link: {type: 'doc', id: 'Product/S2E-Module/WIZ120SR/wiz120sr'},
				items: [//'Product/S2E-Module/WIZ120SR/wiz120sr',
						'Product/S2E-Module/WIZ120SR/wiz120sr-evb']
				},
				'Product/S2E-Module/WIZ125SR/wiz125sr',
				{
				type: 'category',
				label: 'WIZ140SR', // string - the label that should be displayed.
				link: {type: 'doc', id: 'Product/S2E-Module/WIZ140SR/wiz140sr'},
				items: [//'Product/S2E-Module/WIZ140SR/wiz140sr',
						'Product/S2E-Module/WIZ140SR/wiz140sr-evb']
				},
				{
				type: 'category',
				label: 'WIZ145SR', // string - the label that should be displayed.
				link: {type: 'doc', id: 'Product/S2E-Module/WIZ145SR/wiz145sr'},
				items: [//'Product/S2E-Module/WIZ145SR/wiz145sr',
						'Product/S2E-Module/WIZ145SR/wiz145sr-evb']
				},
			],
			},
			{	
				type: 'category',
				label: 'W5500S2E-S1',
				link: {type: 'doc', id: 'Product/S2E-Module/W5500S2E-S1/w5500s2e_s1'},
				items: [
					//'Product/S2E-Module/W5500S2E-S1/w5500s2e_s1',
					'Product/S2E-Module/W5500S2E-S1/overview-EN',
				
				],
				},
				{	
				type: 'category',
				label: 'W5500S2E-Z1',
				link: {type: 'doc', id: 'Product/S2E-Module/W5500S2E-Z1/w5500s2e_z1'},
				items: [
					//'Product/S2E-Module/W5500S2E-Z1/w5500s2e_z1',
					'Product/S2E-Module/W5500S2E-Z1/overview-EN',
				],
				},
				{	
				type: 'category',
				label: 'W7500S2E-R1',
				link: {type: 'doc', id: 'Product/S2E-Module/W7500S2E-R1/w7500s2e_r1'},
				items: [
					//'Product/S2E-Module/W7500S2E-R1/w7500s2e_r1',
					'Product/S2E-Module/W7500S2E-R1/overview-EN',
					],
				},
		],
		},
		{
			type: 'category',
			label: 'ioModule',
			link: {type: 'doc', id: 'Product/ioModule/iomodule'},
			items: [
			//'Product/ioModule/iomodule',
			'Product/ioModule/wiz610io',
			'Product/ioModule/wiz610mj',
			'Product/ioModule/wiz810sio',
			'Product/ioModule/wiz810smj',
			'Product/ioModule/wiz850io',
			'Product/ioModule/wiz550io',
			/*{
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
				//'Product/ioModule/WIZ550io/all_pages',
				],
			},*/
			'Product/ioModule/wiz820io',
			'Product/ioModule/wiz810mj',
			'Product/ioModule/wiz811mj',
			'Product/ioModule/wiz812mj',
			'Product/ioModule/wiz830mj',
			'Product/ioModule/nm7010b'
			],
		},
		{
			type: 'category',
			label: 'App Module',
			link: {type: 'doc', id: 'Product/App-Module/app-module'},
			items: [
			//'Product/App-Module/app_module',
			{
			type: 'category',
			label: 'WIZ550web',
			link: {type: 'doc', id: 'Product/App-Module/WIZ550web/wiz550web'},
			items: [
			//'Product/App-Module/WIZ550web/wiz550web',
			'Product/App-Module/WIZ550web/datasheet-eng',
			'Product/App-Module/WIZ550web/datasheet-kor',
			'Product/App-Module/WIZ550web/getting-started-guide-eng',
			'Product/App-Module/WIZ550web/getting-started-guide-kor',
			'Product/App-Module/WIZ550web/users-guide-eng',
			'Product/App-Module/WIZ550web/users-guide-kor',
			'Product/App-Module/WIZ550web/future-plan-eng',
			'Product/App-Module/WIZ550web/future-plan-kor',
			'Product/App-Module/WIZ550web/tutorials-eng',
			'Product/App-Module/WIZ550web/tutorials-kor',
			'Product/App-Module/WIZ550web/download',
			],
			}
			],
		},
		{
			type: 'category',
			label: 'Wi-Fi Module',
			link: {type: 'doc', id: 'Product/Wi-Fi-Module/wi_fi_module'},
			items: [
			//'Product/Wi-Fi-Module/wi_fi_module',
			{
				type: 'category',
				label: 'WizFi630S',
				link: {type: 'doc', id: 'Product/Wi-Fi-Module/WizFi630S/wizfi630s'},
				items: [
				//'Product/Wi-Fi-Module/WizFi630S/wizfi630s',
				'Product/Wi-Fi-Module/WizFi630S/datasheet',
				'Product/Wi-Fi-Module/WizFi630S/user_guide',
				'Product/Wi-Fi-Module/WizFi630S/hw_reference',
				'Product/Wi-Fi-Module/WizFi630S/certificate',
				],
			},
			{
				type: 'category',
				label: 'WizFi360',
				link: {type: 'doc', id: 'Product/Wi-Fi-Module/WizFi360/wizfi360'},
				items: [
				//'Product/Wi-Fi-Module/WizFi360/wizfi360',
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
						label: 'AT-Command Firmware release', // string - the label that should be displayed.
						href: 'https://github.com/wizfi/Release/tree/master/Binary' // string - the target URL.
					}
				],
			},
			{
				type: 'category',
				label: 'WizFi250',
				link: {type: 'doc', id: 'Product/Wi-Fi-Module/WizFi250/wizfi250'},
				items: [
				//'Product/Wi-Fi-Module/WizFi250/wizfi250',
				'Product/Wi-Fi-Module/WizFi250/wizfi250_datasheet',
				'Product/Wi-Fi-Module/WizFi250/wizfi250_programmersguide',
				'Product/Wi-Fi-Module/WizFi250/wizfi250_quickstart',
				/*{
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
				},*/
				'Product/Wi-Fi-Module/WizFi250/comparison',
				'Product/Wi-Fi-Module/WizFi250/wizfi250_evb_if_fimension',
				'Product/Wi-Fi-Module/WizFi250/wizfi250_evb_sch',
				'Product/Wi-Fi-Module/WizFi250/wizfi250_firmware',
				'Product/Wi-Fi-Module/WizFi250/reference_youtube',
				],
			},
						
			
			/*{
				type: 'category',
				label: 'WizFi630A',
				items: [
				'Product/Wi-Fi-Module/WizFi630A/wizfi630a',
				],
				},*/
			
			],
		},
		
		{
			type: 'category',
			label: 'Mbed WIZwiki Platform',
			link: {type: 'doc', id: 'Product/Mbed-WIZwiki-Platform/mbed-wizwiki-platform'},
			items: [
			//'Product/Mbed-WIZwiki-Platform/mbed-wizwiki-platform',
			'Product/Mbed-WIZwiki-Platform/wizwiki-w7500',
			'Product/Mbed-WIZwiki-Platform/wizwiki-w7500p',
			'Product/Mbed-WIZwiki-Platform/wizwiki-w7500eco',
			'Product/Mbed-WIZwiki-Platform/wizwiki-w7500-eco-shield',
			{
			type: 'category',
			label: 'Getting Started',
			items: [
				'Product/Mbed-WIZwiki-Platform/Getting-Started/how-to-start-wizwiki-w7500-board',
				'Product/Mbed-WIZwiki-Platform/Getting-Started/how-to-install-wizwiki-7500-serial-driver',
				'Product/Mbed-WIZwiki-Platform/Getting-Started/how-to-write-firmware-into-wizwiki-w7500',
				'Product/Mbed-WIZwiki-Platform/Getting-Started/how-to-debug-wizwiki-w7500',
				'Product/Mbed-WIZwiki-Platform/Getting-Started/how-to-write-firmware-into-cmsis-dap',
				'Product/Mbed-WIZwiki-Platform/Getting-Started/using-cmsis-dap-debugger',
				],
			},
			{
			type: 'category',
			label: 'WIZwiki-W7500 Mbed Starter Kit',
			link: {type: 'doc', id: 'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/wizwiki-w7500-mbed-starter-kit'},
			items: [
			//'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/wizwiki_w7500_mbed_starter_kit',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/product-information-eng',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/tutorial-eng',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/sign-up-at-arm-mbed-eng',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-1-led-eng',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-2-serial-port-eng',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-3-switch-eng',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-4-pwm-eng',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-5-variable-resistor-eng',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-6-temperature-sensor-eng',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-7-photoresistor-eng',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-1-tcp-loopback-eng',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-2-led-with-tcp-eng',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/kit-parts-datasheet',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/product-information-kor',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/tutorial-kor',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/sign-up-at-arm-mbed-kor',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-1-led-kor',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-2-serial-port-kor',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-3-switch-kor',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-4-pwm-kor',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-5-variable-resistor-kor',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-6-temperature-sensor-kor',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-7-photoresistor-kor',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-1-tcp-loopback-kor',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-2-led-with-tcp-kor',
			'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/kit-parts-datasheet-kor',
			],
			}
			],
		},
		{
			type: 'category',
			label: 'Open Source Hardware',
			link: {type: 'doc', id: 'Product/Open-Source-Hardware/open_source_hardware'},
			items: [
			//'Product/Open-Source-Hardware/open_source_hardware',
			'Product/Open-Source-Hardware/wiznet_ethernet_hat',
			'Product/Open-Source-Hardware/wizfi360-evb-pico',
			'Product/Open-Source-Hardware/w2e-gateway-pico',
			'Product/iEthernet/W5500/w5500-evb-pico',
			'Product/iEthernet/W5100S/w5100s-evb-pico',
			'Product/Open-Source-Hardware/w5100s_mkr_ethernet_shield',
			'Product/Open-Source-Hardware/w6100_mkr_ethernet_shield',
			'Product/Open-Source-Hardware/wizarduino_m0_eth',
			'Product/Open-Source-Hardware/wizarduino_m0_eth_eng',
			'Product/Open-Source-Hardware/wizarduino_mega_wifi',
			'Product/Open-Source-Hardware/wizarduino_mega_wifi_eng',
			'Product/Open-Source-Hardware/wizfi310_shield',
			{
				type: 'category',
				label: 'W5500 Ethernet Shield',
				link: {type: 'doc', id: 'Product/Open-Source-Hardware/w5500_ethernet_shield'},
				items: [
					//'Product/Open-Source-Hardware/w5500_ethernet_shield',
					'Product/Open-Source-Hardware/w5500_ethernet_shield_kor',
					'Product/Open-Source-Hardware/w5500_ethernet_shield_jp',
					'Product/Open-Source-Hardware/getting_started_arduino',
					'Product/Open-Source-Hardware/getting_started_arduino_kr',
					'Product/Open-Source-Hardware/getting_started_arduino_jp',
				],
			},

			'Product/Open-Source-Hardware/ioshield_a',
			//'Product/Open-Source-Hardware/ethernet_library_for_ioShield_A',
			'Product/Open-Source-Hardware/ioshield_k',
			'Product/Open-Source-Hardware/ioshield_l',

			/*'Product/Open-Source-Hardware/Tutorial',
			'Product/Open-Source-Hardware/IP_Configuration',
			'Product/Open-Source-Hardware/http_client',
			'Product/Open-Source-Hardware/loopback',
			'Product/Open-Source-Hardware/Energy_micro',
			'Product/Open-Source-Hardware/tinygecko',
			'Product/Open-Source-Hardware/twitter_test',
			'Product/Open-Source-Hardware/cookie', // is coocox already in cookie?
			'Product/Open-Source-Hardware/open_source_hardware_coocox',
			'Product/Open-Source-Hardware/open_source_hardware_all_pages',*/
			],
		},
		{
			type: "category",
			label: "Obsolete",
			items: [
				{
				type: "category",
				label: "Chips",
				items: [
					'Product/Obsolete/w7200',
					{
						type: 'category',
						label: 'W3150A+',
						link: {type: 'doc', id: 'Product/iEthernet/W3150/w3150'},
						items: [
							//'Product/iEthernet/W3150/w3150',
							'Product/iEthernet/W3150/overview',
							'Product/iEthernet/W3150/document',
							'Product/iEthernet/W3150/w3150-evb',
						],
					},
					'Product/iEthernet/W5200/w5200',
				],
				},
				{
					type: "category",
					label: "S2E / IO Modules",
					items: [
						'Product/Obsolete/egsr7100a',
						'Product/Obsolete/nm7010a',
						'Product/Obsolete/wiz220io',
						'Product/Obsolete/wiz220web',
						'Product/Obsolete/wizsm10',
						'Product/Obsolete/wiz850sw',
					],
				},
				{
					type: "category",
					label: "Wi-Fi Modules",
					items: [
						'Product/Obsolete/wizfi630',
						'Product/Obsolete/wiz610wi',
						'Product/Wi-Fi-Module/WizFi630A/wizfi630a',
						{
							type: 'category',
							label: 'WizFi310',
							link: {type: 'doc', id: 'Product/Wi-Fi-Module/WizFi310/wizfi310'},
							items: [
							//'Product/Wi-Fi-Module/WizFi310/wizfi310',
							'Product/Wi-Fi-Module/WizFi310/datasheet',
							{
							type: 'category',
							label: 'Programers Guide',
							link: {type: 'doc', id: 'Product/Wi-Fi-Module/WizFi310/Programers-Guide/overview'},
							items: [
							//'Product/Wi-Fi-Module/WizFi310/Programers-Guide/overview',
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
							label: 'WizFi210/220',
							link: {type: 'doc', id: 'Product/Wi-Fi-Module/WizFi210/wizfi210'},
							items: [
								//'Product/Wi-Fi-Module/WizFi210/wizfi210',
								'Product/Wi-Fi-Module/WizFi210/wizfi210-evb',
							],	
						},
					],
				},				
			],
		},
	],
	},
    {
		type: 'category',
		label: 'Design Guide',
		link: {type: 'doc', id: 'Design-Guide/design_guide'},
		items: 
		[	
		//'Design-Guide/design_guide',
		'Design-Guide/hardware_design_guide',
		'Design-Guide/package_information',
		'Design-Guide/ir_reflow_profile',
		'Design-Guide/eagle_cad_library_of_wiznet_products',
		],
	},
	{
		type: 'category',
		label: 'VAR Products using WIZnet',
		link: {type: 'doc', id: 'VAR-Products-using-WIZnet/var_products_using_wiznet'},
		items: 
		[
		//'VAR-Products-using-WIZnet/var_products_using_wiznet',
		'VAR-Products-using-WIZnet/ethernet_shield',
		'VAR-Products-using-WIZnet/wi_fi_shield',
		'VAR-Products-using-WIZnet/ble_to_ethernet',
		'VAR-Products-using-WIZnet/w5500BoB_ESoPe',
		'VAR-Products-using-WIZnet/w5500CoB_ESoPe',
		'VAR-Products-using-WIZnet/third_party',	
		],
	},
	],
}; 
