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
		/*{
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
		},*/
		{
			type: 'category',
			label: 'ioNIC',
			//link: {type: 'doc', id: 'Product/ioNIC/ionic'},
			items: [
				//'Product/ioMCU/iomcu',
				{
				type: 'category',
				label: 'W55RP20 [EN]',
				link: {type: 'doc', id: 'Product/ioNIC/W55RP20/overview'},
				items: [
					'Product/ioNIC/W55RP20/documents_md',
					'Product/ioNIC/W55RP20/w55rp20-evb-pico',
					],
				},
				{
				type: 'category',
				label: 'W55RP20 [JP]',
				link: {type: 'doc', id: 'Product/ioNIC/W55RP20/overview-jp'},
				items: [
					'Product/ioNIC/W55RP20/documents_md-jp',
					'Product/ioNIC/W55RP20/w55rp20-evb-pico-jp',
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
				label: 'W55MH32',
				link: {type: 'doc', id: 'Product/iMCU/W55MH32/overview'},
				items: [
					'Product/iMCU/W55MH32/overview',
					'Product/iMCU/W55MH32/datasheet',
					'Product/iMCU/W55MH32/electrical-characteristics',
					'Product/iMCU/W55MH32/pin-assignment',
					'Product/iMCU/W55MH32/ref-schematic',
					{
						type: 'category',
						label: 'Reference Code',
						items: [
								'Product/iMCU/W55MH32/install_keil',
								'Product/iMCU/W55MH32/W55MH32_examples',					
						],
					},
					{
						type: 'category',
						label: 'EVB',
						items: [
								'Product/iMCU/W55MH32/W55MH32L-evb',
								'Product/iMCU/W55MH32/W55MH32Q-evb',					
						],
					},
					],
				},
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
							// 'Product/iMCU/W7500/Peripherals-internal/eeprom',
							'Product/iMCU/W7500/Peripherals-internal/exti',
							'Product/iMCU/W7500/Peripherals-internal/flash',
							'Product/iMCU/W7500/Peripherals-internal/flowcontrol',
							'Product/iMCU/W7500/Peripherals-internal/gpio',
							// 'Product/iMCU/W7500/Peripherals-internal/i2c',
							'Product/iMCU/W7500/Peripherals-internal/iap-example',
							'Product/iMCU/W7500/Peripherals-internal/illumination-sensor',
							// 'Product/iMCU/W7500/Peripherals-internal/init',
							'Product/iMCU/W7500/Peripherals-internal/inter',
							'Product/iMCU/W7500/Peripherals-internal/led-toggle',
							// 'Product/iMCU/W7500/Peripherals-internal/lm75-temperature',
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
				{
					type: 'category',
					label: 'W55RP20-S2E',
					items: [
						{
							type: 'category',
							label: 'W55RP20-S2E [EN]',
							items: [
								'Product/ioNIC/W55RP20/W55RP20-S2E/overview-en',
								'Product/ioNIC/W55RP20/W55RP20-S2E/w55rp20-evb-pico-s2e',
		//						{
		//							type: 'category',
		//							label: 'Common docs for using-[KR]',
		//							items: [
		//								'Product/ioNIC/W55RP20/W55RP20-S2E/Config-tool-Guide-kr',
		//								'Product/ioNIC/W55RP20/W55RP20-S2E/command-manual-kr',
		//								'Product/ioNIC/W55RP20/W55RP20-S2E/mqtt-connection-guide-kr',
		//								'Product/ioNIC/W55RP20/W55RP20-S2E/ssl-connection-guide-kr',
		//								'Product/ioNIC/W55RP20/W55RP20-S2E/modbus-connection-guide-kr',
		//								'Product/ioNIC/W55RP20/W55RP20-S2E/firmware-update-guide-kr',
		//								'Product/ioNIC/W55RP20/W55RP20-S2E/Web_Config_Guide_KO',
		//								'Product/ioNIC/W55RP20/W55RP20-S2E/factory-rst-guide-kr',																											
		//							],
		//						},
								{
									type: 'category',
									label: 'Common docs for using',
									items: [
										'Product/ioNIC/W55RP20/W55RP20-S2E/hw-design-guide-en',
										'Product/ioNIC/W55RP20/W55RP20-S2E/Config-tool-Guide-en',
										'Product/ioNIC/W55RP20/W55RP20-S2E/command-manual-en',
										'Product/ioNIC/W55RP20/W55RP20-S2E/mqtt-connection-guide-en',
										'Product/ioNIC/W55RP20/W55RP20-S2E/ssl-connection-guide-en',
										'Product/ioNIC/W55RP20/W55RP20-S2E/modbus-connection-guide-en',
										'Product/ioNIC/W55RP20/W55RP20-S2E/firmware-update-guide-en',
										'Product/ioNIC/W55RP20/W55RP20-S2E/Web_Config_Guide_EN',
										'Product/ioNIC/W55RP20/W55RP20-S2E/factory-rst-guide-en',
										'Product/ioNIC/W55RP20/W55RP20-S2E/mac_address-write-guide-en',
										'Product/ioNIC/W55RP20/W55RP20-S2E/w55rp20-s2e-an-spi-mode-en',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'W55RP20-S2E [JP]',
							items: [
								'Product/ioNIC/W55RP20/W55RP20-S2E/overview-jp',
								'Product/ioNIC/W55RP20/W55RP20-S2E/w55rp20-evb-pico-s2e-jp',
								{
									type: 'category',
									label: 'Common docs for using',
									items: [
										'Product/ioNIC/W55RP20/W55RP20-S2E/hw-design-guide-jp',
										'Product/ioNIC/W55RP20/W55RP20-S2E/Config-tool-Guide-jp',
										'Product/ioNIC/W55RP20/W55RP20-S2E/command-manual-jp',
										'Product/ioNIC/W55RP20/W55RP20-S2E/mqtt-connection-guide-jp',
										'Product/ioNIC/W55RP20/W55RP20-S2E/ssl-connection-guide-jp',
										'Product/ioNIC/W55RP20/W55RP20-S2E/modbus-connection-guide-jp',
										'Product/ioNIC/W55RP20/W55RP20-S2E/firmware-update-guide-jp',
										'Product/ioNIC/W55RP20/W55RP20-S2E/Web_Config_Guide-jp',
										'Product/ioNIC/W55RP20/W55RP20-S2E/factory-rst-guide-jp',
										'Product/ioNIC/W55RP20/W55RP20-S2E/mac_address-write-guide-jp',
										'Product/ioNIC/W55RP20/W55RP20-S2E/w55rp20-s2e-an-spi-mode-jp',
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
			label: 'iEthernet',
			link: {type: 'doc', id: 'Product/iEthernet/iethernet'},
				items: [
				//'Product/iEthernet/iethernet',
				
				{
					type: 'category',
					label: 'W6300',
					items: [
						{
							type: 'category',
							label: 'W6300 [EN]',
							link: {type: 'doc', id: 'Product/iEthernet/W6300/w6300'},
							items: [
							//'Product/iEthernet/W6300/W6300',
							'Product/iEthernet/W6300/overview',
							'Product/iEthernet/W6300/application-note',
							'Product/iEthernet/W6300/document',
							'Product/iEthernet/W6300/libraries-w6300',
							// 'Product/iEthernet/W6300/new-project-vscode',
							'Product/iEthernet/W6300/ref-schematic',
							'Product/iEthernet/W6300/w6300-evb-pico',
							'Product/iEthernet/W6300/w6300-evb-pico2',
							]
						},
						{
							type: 'category',
							label: 'W6300 [JP]',
							link: {type: 'doc', id: 'Product/iEthernet/W6300/w6300-jp'},
							items: [
							//'Product/iEthernet/W6300/W6300',
							'Product/iEthernet/W6300/overview-jp',
							// 'Product/iEthernet/W6300/application-note',
							'Product/iEthernet/W6300/document-jp',
							'Product/iEthernet/W6300/libraries-w6300-jp',
							// 'Product/iEthernet/W6300/new-project-vscode',
							'Product/iEthernet/W6300/ref-schematic-jp',
							'Product/iEthernet/W6300/w6300-evb-pico-jp',
							'Product/iEthernet/W6300/w6300-evb-pico2-jp',
							]
						},
					]
				},
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
					
					'Product/iEthernet/W6100/w6100-evb-pico',
					'Product/iEthernet/W6100/w6100-evb-pico2',
					
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
					
					'Product/iEthernet/W5100S/w5100s-evb-pico',
					'Product/iEthernet/W5100S/w5100s-evb-pico2',
					
				//'Product/iEthernet/W5100S/all_pages',
				],
				},
				{
				type: 'category',
				label: 'W5500',
				link: {type: 'doc', id: 'Product/iEthernet/W5500/overview'},
				items: [
					'Product/iEthernet/W5500/overview',
					//'Product/iEthernet/W5500/japanese-v',
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
					
					'Product/iEthernet/W5500/w5500-evb-pico',
					'Product/iEthernet/W5500/W5500-EVB-Pico-PoE',
					'Product/iEthernet/W5500/w5500-evb-pico2',
					
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
						'Product/iEthernet/W5300/W5300-TOE-Shield'
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
			label: 'Serial to Ethernet Module',
			link: {type: 'doc', id: 'Product/S2E-Module/s2e_module'},
			items: [
				{
					type: 'category',
					label: 'WIZ750SR',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR/wiz750sr'},
					items: [
						{
							type: 'category',
							label: 'Documentation',
							items: [
								'Product/S2E-Module/WIZ750SR/users-manual-EN',
								'Product/S2E-Module/WIZ750SR/users-manual-KO',
								'Product/S2E-Module/WIZ750SR/datasheet',
							],
						},
						{
							type: 'category',
							label: 'Setup & Configuration',
							items: [
								'Product/S2E-Module/WIZ750SR/command-manual-EN',
								'Product/S2E-Module/WIZ750SR/command-manual-KO',
								'Product/S2E-Module/WIZ750SR/configuration-tool-manual-EN',
								'Product/S2E-Module/WIZ750SR/configuration-tool-manual-KO',
								'Product/S2E-Module/WIZ750SR/configuration-tool-manual-new-EN',
								'Product/S2E-Module/WIZ750SR/configuration-tool-manual-new-KO',
								'Product/S2E-Module/WIZ750SR/WIZ750SR_Web_Config_Guide_EN',
								'Product/S2E-Module/WIZ750SR/WIZ750SR_Web_Config_Guide_KO',
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
							],
						},
						{
							type: 'category',
							label: 'User Guides',
							items: [
									'Product/S2E-Module/WIZ750SR/getting-started-EN',
									'Product/S2E-Module/WIZ750SR/getting-started-KO',
									'Product/S2E-Module/WIZ750SR/trouble-shooting-EN',
									'Product/S2E-Module/WIZ750SR/trouble-shooting-KO',
									'Product/S2E-Module/WIZ750SR/developers-guide-EN',
									'Product/S2E-Module/WIZ750SR/developers-guide-KO',

								],
						},
						'Product/S2E-Module/WIZ750SR/download',
					],
				},
				{
					type: 'category',
					label: 'WIZ750SR-100',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/wiz750sr-100'},
					items: [
						{
							type: 'category',
							label: 'Documentation',
							items: [
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/users-manual-EN',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/users-manual-KO',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/datasheet',
							],
						},
						{
							type: 'category',
							label: 'Setup & Configuration',
							items: [
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/command-manual-EN',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/command-manual-KO',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/configuration-tool-manual-new-EN',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/configuration-tool-manual-new-KO',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/WIZ750SR_Web_Config_Guide_EN',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/WIZ750SR_Web_Config_Guide_KO',
								{
								type: 'category',
								label: 'CLI-Config-Tool-Tutorial',
								link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
								items: [
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/CLI-Config-Tool-Tutorial/overview-environment',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/CLI-Config-Tool-Tutorial/single-device-configuration',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/CLI-Config-Tool-Tutorial/multi-device-configuration',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/CLI-Config-Tool-Tutorial/file-options',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'User Guides',
							items: [
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/getting-started-EN',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/getting-started-KO',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/trouble-shooting-EN',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/trouble-shooting-KO',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/developers-guide-EN',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/developers-guide-KO',

								],
						},
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/download',
					],
				},
				{
					type: 'category',
					label: 'WIZ750SR-105',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/wiz750sr-105'},
					items: [
						{
							type: 'category',
							label: 'Documentation',
							items: [
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/users-manual-EN',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/users-manual-KO',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/datasheet',
							],
						},
						{
							type: 'category',
							label: 'Setup & Configuration',
							items: [
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/command-manual-EN',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/command-manual-KO',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/configuration-tool-manual-new-EN',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/configuration-tool-manual-new-KO',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/WIZ750SR_Web_Config_Guide_EN',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/WIZ750SR_Web_Config_Guide_KO',
								{
								type: 'category',
								label: 'CLI-Config-Tool-Tutorial',
								link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
								items: [
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/CLI-Config-Tool-Tutorial/overview-environment',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/CLI-Config-Tool-Tutorial/single-device-configuration',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/CLI-Config-Tool-Tutorial/multi-device-configuration',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/CLI-Config-Tool-Tutorial/file-options',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'User Guides',
							items: [
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/getting-started-EN',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/getting-started-KO',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/trouble-shooting-EN',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/trouble-shooting-KO',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/developers-guide-EN',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/developers-guide-KO',

								],
						},
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/download',
					],
				},
				{
					type: 'category',
					label: 'WIZ750SR-110',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/wiz750sr-110'},
					items: [
						{
							type: 'category',
							label: 'Documentation',
							items: [
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/users-manual-EN',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/users-manual-KO',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/datasheet',
							],
						},
						{
							type: 'category',
							label: 'Setup & Configuration',
							items: [
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/command-manual-EN',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/command-manual-KO',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/configuration-tool-manual-new-EN',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/configuration-tool-manual-new-KO',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/WIZ750SR_Web_Config_Guide_EN',
								'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/WIZ750SR_Web_Config_Guide_KO',
								{
								type: 'category',
								label: 'CLI-Config-Tool-Tutorial',
								link: {type: 'doc', id: 'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
								items: [
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/CLI-Config-Tool-Tutorial/overview-environment',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/CLI-Config-Tool-Tutorial/single-device-configuration',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/CLI-Config-Tool-Tutorial/multi-device-configuration',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/CLI-Config-Tool-Tutorial/file-options',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'User Guides',
							items: [
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/getting-started-EN',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/getting-started-KO',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/trouble-shooting-EN',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/trouble-shooting-KO',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/developers-guide-EN',
									'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/developers-guide-KO',

								],
						},
						'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/download',
					],
				},
				{
					type: 'category',
					label: 'WIZ752SR-120',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/wiz752sr-120'},
					items: [
						{
							type: 'category',
							label: 'Documentation',
							items: [
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/users-manual-EN',
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/users-manual-KO',
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/datasheet',
							],
						},
						{
							type: 'category',
							label: 'Setup & Configuration',
							items: [
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/command-manual-EN',
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/command-manual-KO',
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/configuration-tool-manual-new-EN',
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/configuration-tool-manual-new-KO',
								{
								type: 'category',
								label: 'CLI-Config-Tool-Tutorial',
								link: {type: 'doc', id: 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
								items: [
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI-Config-Tool-Tutorial/overview-environment',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI-Config-Tool-Tutorial/single-device-configuration',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI-Config-Tool-Tutorial/multi-device-configuration',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI-Config-Tool-Tutorial/file-options',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'User Guides',
							items: [
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/getting-started-EN',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/getting-started-KO',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/trouble-shooting-EN',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/trouble-shooting-KO',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/developers-guide-EN',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/developers-guide-KO',

								],
						},
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/download',
					],
				},
				{
					type: 'category',
					label: 'WIZ752SR-125',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/wiz752sr-125'},
					items: [
						{
							type: 'category',
							label: 'Documentation',
							items: [
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/users-manual-EN',
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/users-manual-KO',
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/datasheet',
							],
						},
						{
							type: 'category',
							label: 'Setup & Configuration',
							items: [
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/command-manual-EN',
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/command-manual-KO',
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/configuration-tool-manual-new-EN',
								'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/configuration-tool-manual-new-KO',
								{
								type: 'category',
								label: 'CLI-Config-Tool-Tutorial',
								link: {type: 'doc', id: 'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
								items: [
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI-Config-Tool-Tutorial/overview-environment',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI-Config-Tool-Tutorial/single-device-configuration',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI-Config-Tool-Tutorial/multi-device-configuration',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI-Config-Tool-Tutorial/file-options',
									],
								},
							],
						},
						{
							type: 'category',
							label: 'User Guides',
							items: [
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/getting-started-EN',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/getting-started-KO',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/trouble-shooting-EN',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/trouble-shooting-KO',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/developers-guide-EN',
									'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/developers-guide-KO',

								],
						},
						'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/download',
					],
				},
				{
					type: 'category',
					label: 'WIZ550SR',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ550SR/wiz550sr'},
					items: [
						{
							type: 'category',
							label: 'Documentation',
							items: [
									// 'Product/S2E-Module/WIZ550SR/users-manual-EN',
									// 'Product/S2E-Module/WIZ550SR/users-manual-KO',
									'Product/S2E-Module/WIZ550SR/datasheet-EN',	
									'Product/S2E-Module/WIZ550SR/datasheet-KO',
								],
						},
						{
							type: 'category',
							label: 'Setup & Configuration',
							items: [
								'Product/S2E-Module/WIZ550SR/command-manual-EN',	
								'Product/S2E-Module/WIZ550SR/command-manual-KO',
							],
						},
						{
							type: 'category',
							label: 'User Guides',
							items: [
									'Product/S2E-Module/WIZ550SR/getting_started-EN',	
									'Product/S2E-Module/WIZ550SR/getting_started-KO',
									// 'Product/S2E-Module/WIZ550SR/trouble-shooting-EN',
									// 'Product/S2E-Module/WIZ550SR/trouble-shooting-KO',
									// 'Product/S2E-Module/WIZ550SR/developers-guide-EN',
									// 'Product/S2E-Module/WIZ550SR/developers-guide-KO',
									'Product/S2E-Module/WIZ550SR/command_tutorial-EN',
									'Product/S2E-Module/WIZ550SR/command_tutorial-KO',
								],
						},
						'Product/S2E-Module/WIZ550SR/download',
					],
				},
				{
					type: 'category',
					label: 'WIZ500SR-RP',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/wiz500sr-rp'},
					items: [
						{
							type: 'category',
							label: 'Documentation',
							items: [
								// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/users-manual-EN',
								// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/users-manual-KO',
								'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/datasheet',
							],
						},
						{
							type: 'category',
							label: 'Setup & Configuration',
							items: [
								'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/command-manual-EN',
								'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/configuration-tool-manual-EN',
							],
						},
						{
							type: 'category',
							label: 'User Guides',
							items: [
									'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/getting-started',
									// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/trouble-shooting-EN',
									// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/trouble-shooting-KO',
									// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/developers-guide-EN',
									// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/developers-guide-KO',
									'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/mqtt-connection-guide',
									'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/ssl-connection-guide',
									'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/modbus-connection-guide',
								],
						},
						'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/download',
						'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/wiz500sr-rp-evb',
						'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/wiz505sr-rp-evb',

					],
				},
				{
					type: 'category',
					label: 'WIZ505SR-RP',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/wiz505sr-rp'},
					items: [
						{
							type: 'category',
							label: 'Documentation',
							items: [
								// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/users-manual-EN',
								// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/users-manual-KO',
								'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/datasheet',
							],
						},
						{
							type: 'category',
							label: 'Setup & Configuration',
							items: [
								'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/command-manual-EN',
								'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/configuration-tool-manual-EN',
							],
						},
						{
							type: 'category',
							label: 'User Guides',
							items: [
									'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/getting-started',
									// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/trouble-shooting-EN',
									// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/trouble-shooting-KO',
									// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/developers-guide-EN',
									// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/developers-guide-KO',
									'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/mqtt-connection-guide',
									'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/ssl-connection-guide',
									'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/modbus-connection-guide',
								],
						},
						'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/download',
						'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/wiz505sr-rp-evb',
					],
				},
				{
					type: 'category',
					label: 'WIZ510SR-RP',
					link: {type: 'doc', id: 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/wiz510sr-rp'},
					items: [
						{
							type: 'category',
							label: 'Documentation',
							items: [
								// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/users-manual-EN',
								// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/users-manual-KO',
								'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/datasheet',
							],
						},
						{
							type: 'category',
							label: 'Setup & Configuration',
							items: [
								'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/command-manual-EN',
								'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/configuration-tool-manual-EN',
							],
						},
						{
							type: 'category',
							label: 'User Guides',
							items: [
									'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/getting-started',
									// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/trouble-shooting-EN',
									// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/trouble-shooting-KO',
									// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/developers-guide-EN',
									// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/developers-guide-KO',
									'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/mqtt-connection-guide',
									'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/ssl-connection-guide',
									'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/modbus-connection-guide',
								],
						},
						'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/download',
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
					
					'Product/S2E-Module/WIZ110SR/wiz110sr',
					],
				},

				'Product/S2E-Module/W5500S2E-S1/w5500s2e_s1',
				'Product/S2E-Module/W5500S2E-Z1/w5500s2e_z1',
				'Product/S2E-Module/W7500S2E-R1/w7500s2e_r1',

				{
					type: 'category',
					label: 'W232N',
					link: {type: 'doc', id: 'Product/S2E-Module/Industrial/w232n'},
					items: [

						{
							type: 'category',
							label: 'Documentation',
							items: [
								// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/users-manual-EN',
								// 'Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/users-manual-KO',
								'Product/S2E-Module/Industrial/datasheet-en',
								'Product/S2E-Module/Industrial/datasheet-ko',
							],
						},
						{
							type: 'category',
							label: 'Setup & Configuration',
							items: [
								'Product/S2E-Module/Industrial/command-manual-en',
								'Product/S2E-Module/Industrial/command-manual-kr',
								'Product/S2E-Module/Industrial/Config-tool-Guide-en',
								'Product/S2E-Module/Industrial/Config-tool-Guide-kr',
								'Product/S2E-Module/Industrial/Web_Config_Guide_EN',
							],
						},
						{
							type: 'category',
							label: 'User Guides',
							items: [
									'Product/S2E-Module/Industrial/factory-rst-guide-en',
									'Product/S2E-Module/Industrial/factory-rst-guide-kr',
									'Product/S2E-Module/Industrial/mqtt-connection-guide-en',
									'Product/S2E-Module/Industrial/mqtt-connection-guide-kr',
									'Product/S2E-Module/Industrial/ssl-connection-guide-en',
									'Product/S2E-Module/Industrial/ssl-connection-guide-kr',
									'Product/S2E-Module/Industrial/modbus-connection-guide-en',
									'Product/S2E-Module/Industrial/modbus-connection-guide-kr',
								],
						},
						'Product/S2E-Module/Industrial/firmware-update-guide-en',
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
			
			'Product/ioModule/W5500-io',
			
			'Product/ioModule/wiz550io',
			'Product/ioModule/wiz610io',
			'Product/ioModule/wiz610mj',
			'Product/ioModule/wiz630io',
			'Product/ioModule/wiz810sio',
			'Product/ioModule/wiz810smj',
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
			'Product/ioModule/wiz810mj',
			'Product/ioModule/wiz811mj',
			
			'Product/ioModule/wiz820io',
			'Product/ioModule/wiz830mj',
			'Product/ioModule/wiz850io',
			'Product/ioModule/nm7010b'
			],
		},
		
		{
			type: 'category',
			label: 'Wi-Fi Module',
			link: {type: 'doc', id: 'Product/Wi-Fi-Module/wi_fi_module'},
			items: [

				{
					type: 'category',
					label: 'WizFi360',
					link: {type: 'doc', id: 'Product/Wi-Fi-Module/WizFi360/wizfi360'},
					items: [
						'Product/Wi-Fi-Module/WizFi360/wizfi360_evb_shield',
					],
				},
				
				{
					type: 'category',
					label: 'WizFi630S',
					link: {type: 'doc', id: 'Product/Wi-Fi-Module/WizFi630S/wizfi630s'},
					items: [
						'Product/Wi-Fi-Module/WizFi630S/wizfi630_evb',
					],
				},
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
			{
				type: 'category',
				label: 'RP2040 Based',
				link: {type: 'doc', id: 'Product/Open-Source-Hardware/rp2040_based'},
				items: [
					//'Product/Open-Source-Hardware/w2e-gateway-pico',
					'Product/ioNIC/W55RP20/w55rp20-evb-pico',
					'Product/iEthernet/W6300/w6300-evb-pico',
					'Product/iEthernet/W6100/w6100-evb-pico',
					'Product/iEthernet/W5500/w5500-evb-pico',
					'Product/iEthernet/W5100S/w5100s-evb-pico',
					'Product/Open-Source-Hardware/wiznet_ethernet_hat',
					'Product/Open-Source-Hardware/wiznet-pico-poe',
					
				]
			},
			{
				type: 'category',
				label: 'RP2350 Based',
				link: {type: 'doc', id: 'Product/Open-Source-Hardware/rp2350_based'},
				items: [
					//'Product/Open-Source-Hardware/w2e-gateway-pico',
					'Product/iEthernet/W6300/w6300-evb-pico2',
					'Product/iEthernet/W6100/w6100-evb-pico2',
					'Product/iEthernet/W5500/w5500-evb-pico2',
					'Product/iEthernet/W5100S/w5100s-evb-pico2',
					// 'Product/Open-Source-Hardware/wiznet_ethernet_hat',
					// 'Product/Open-Source-Hardware/wiznet-pico-poe',
				]
			},
			{
				type: 'category',
				label: 'Arduino',
				link: {type: 'doc', id: 'Product/Open-Source-Hardware/arduino'},
				items: [
					
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
							'Product/Open-Source-Hardware/ioshield_a',
							'Product/Open-Source-Hardware/ioshield_k',
							'Product/Open-Source-Hardware/ioshield_l',
						],
					},
				]
			},
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
				{
				type: 'category',
				label: 'PoE',
				link: {type: 'doc', id: 'Product/Open-Source-Hardware/PoE/PoE-Main'},
				items: [
					//'Product/Open-Source-Hardware/PoE/WIZPoE-S1',
					'Product/Open-Source-Hardware/PoE/WIZPoE-P1',
				//	'Product/Open-Source-Hardware/PoE/raspberrypi-5-hat-poe',
					]
				},
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
					{			
						type: 'category',
						label: 'W7100',
						link: {type: 'doc', id: 'Product/iMCU/W7100/w7100a'},
						items: [
							//'Product/iMCU/W7100/w7100a',
							'Product/iMCU/W7100/imcu7100-evb',
						],
					},
					
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
					type: "category",
					label: "S2E / IO Modules",
					items: [
	
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
						
						'Product/Obsolete/egsr7100a',
						'Product/Obsolete/nm7010a',
						'Product/Obsolete/wiz220io',
						'Product/Obsolete/wiz220web',
						'Product/Obsolete/wizsm10',
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
						'Product/Obsolete/wiz850sw',
						'Product/S2E-Module/wiz1000',
						'Product/ioModule/W5100S-io',
						'Product/ioModule/W6100-io',
						'Product/ioModule/wiz812mj',
					],
				},
				{
					type: "category",
					label: "Wi-Fi Modules",
					items: [
						{
							type: 'category',
							label: 'WizFi250',
							link: {type: 'doc', id: 'Product/Wi-Fi-Module/WizFi250/wizfi250'},
							items: [
							//'Product/Wi-Fi-Module/WizFi250/wizfi250',
							'Product/Wi-Fi-Module/WizFi250/wizfi250_datasheet',
							'Product/Wi-Fi-Module/WizFi250/wizfi250_programmersguide',
							'Product/Wi-Fi-Module/WizFi250/wizfi250_quickstart',
							'Product/Wi-Fi-Module/WizFi250/comparison',
							'Product/Wi-Fi-Module/WizFi250/wizfi250_evb_if_fimension',
							'Product/Wi-Fi-Module/WizFi250/wizfi250_evb_sch',
							'Product/Wi-Fi-Module/WizFi250/wizfi250_firmware',
							'Product/Wi-Fi-Module/WizFi250/reference_youtube',
							],
						},
						
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
						'Product/Wi-Fi-Module/WizFi360/wizfi360io',
					],
				},
				{
					type: 'category',
					label: 'Evaluation Boards',
					items: [
						{
						type: 'category',
						label: 'W6100-EVB',
						link: {type: 'doc', id: 'Product/iEthernet/W6100/w6100-evb'},
						items: [
							'Product/iEthernet/W6100/getting-started-w6100evb',
							'Product/iEthernet/W6100/new-project-stm32cubeide',
							'Product/iEthernet/W6100/new-project-truestudio',
							'Product/iEthernet/W6100/new-project-eclipse',
						],
						},
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
						{
						type: 'category',
						label: 'W5100S-EVB',
						link: {type: 'doc', id: 'Product/iEthernet/W5100S/w5100s-evb'},
						items: [
							'Product/iEthernet/W5100S/w5100s-getting-started',
							'Product/iEthernet/W5100S/w5100s-projects-stm32cubeide',
							'Product/iEthernet/W5100S/w5100s-projects-truestudio',
							'Product/iEthernet/W5100S/w5100s-projects-eclipse',
						],
						},
						
						
						'Product/Open-Source-Hardware/wizfi360-evb-pico',
						'Product/Wi-Fi-Module/WizFi360/wizfi360_evb_mini',
					],
				},
				{
					type: 'category',
					label: 'Open Source Hardware',
					items: [
						{
						type: 'category',
						label: 'Surf 5',
						link: {type: 'doc', id: 'Product/Open-Source-Hardware/surf5/surf5'},
						items: [
							{
								type: 'category',
								label: 'Getting Started',
								link: {type: 'doc', id: 'Product/Open-Source-Hardware/surf5/getting-started/getting-started'},
								items: [
									'Product/Open-Source-Hardware/surf5/getting-started/install-usb-driver',
									'Product/Open-Source-Hardware/surf5/getting-started/flashing-surf5',
									'Product/Open-Source-Hardware/surf5/getting-started/install-vscode-guide',
									'Product/Open-Source-Hardware/surf5/getting-started/install-keil-guide',
									'Product/Open-Source-Hardware/surf5/getting-started/fw-examples',
									'Product/Open-Source-Hardware/surf5/getting-started/debugger-surf5',
									'Product/Open-Source-Hardware/surf5/getting-started/surf5-s2e',
									
								],
							},
						],
						
						},
						'Product/Open-Source-Hardware/w5100s_mkr_ethernet_shield',
						'Product/Open-Source-Hardware/w6100_mkr_ethernet_shield',
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
	/*{
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
	},*/
	],
}; 
