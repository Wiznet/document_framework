/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
	// 'introduction',
	{
		type: 'category',
		label: 'Products',
		link: {type: 'doc', id: 'Product/products'},
		items: 
		[
			{
				type: 'category',
				label: 'Chips',
				// link: {type: 'doc', id: 'Product/Chip/MCU/mcu'},
				items: [
					{
						type: 'category',
						label: 'MCU',
						link: {type: 'doc', id: 'Product/Chip/MCU/mcu'},
						items: [
							//'Product/Chip/MCU/mcu',
							{
							type: 'category',
							label: 'W55RP20',
							link: {type: 'doc', id: 'Product/Chip/MCU/W55RP20/overview'},
							items: [
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W55RP20/#documentation'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Datasheet', href: '/Product/Chip/MCU/W55RP20/#datasheet' },
											{ type: 'link', label: 'technical documents', href: '/Product/Chip/MCU/W55RP20/#technical-documents' },
											// { type: 'link', label: 'getting-started', href: '/Product/Chip/MCU/W55RP20/#getting-started' },
										]

									},
									{
										type: 'category',
										label: 'Software resources',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W55RP20/#software-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Driver', href: '/Product/Chip/MCU/W55RP20/?software=driver#software-resources' },
											{ type: 'link', label: 'Example', href: '/Product/Chip/MCU/W55RP20/?software=example#software-resources' },
										]
									},

									{
										type: 'category',
										label: 'Hardware resources',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W55RP20/#hardware-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'technical resources', href: '/Product/Chip/MCU/W55RP20/#technical-resources' },
											{ type: 'link', label: 'test certification',  href: '/Product/Chip/MCU/W55RP20/#test--certification' },
										]
									},
									{
										type: 'category',
										label: 'Related-modules',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W55RP20/#related-modules'},  
										items: [
											// 하위 항목들
											{
												type: 'category',
												label: 'evaluation-boards', 
												link: {type :'generated-index',  slug: '/Product/Chip/MCU/W55RP20/#evaluation-boards' },
												items: [
													'Product/Chip/MCU/W55RP20/w55rp20-evb-pico',
												],
											}
											// { type: 'link', label: 'serial-to-ethernet-module',  href: '/Product/Chip/MCU/W55RP20/#serial-to-ethernet-module' },
										]
									},
								],
							},
							{
							type: 'category',
							label: 'W55MH32',
							link: {type: 'doc', id: 'Product/Chip/MCU/W55MH32/overview'},
							items: [
								// 'Product/Chip/MCU/W55MH32/overview',
								// 'Product/Chip/MCU/W55MH32/datasheet',
								// 'Product/Chip/MCU/W55MH32/electrical-characteristics',
								// 'Product/Chip/MCU/W55MH32/pin-assignment',
								// 'Product/Chip/MCU/W55MH32/ref-schematic',
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W55MH32/#documentation'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Datasheet', href: '/Product/Chip/MCU/W55MH32/#datasheet' },
											{ type: 'link', label: 'technical documents', href: '/Product/Chip/MCU/W55MH32/#technical-documents' },
											// { type: 'link', label: 'getting-started', href: '/Product/Chip/MCU/W55MH32/#getting-started' },
										]

									},
									{
										type: 'category',
										label: 'Software resources',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W55MH32/#software-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Driver', href: '/Product/Chip/MCU/W55MH32/?software=driver#software-resources' },
											{ type: 'link', label: 'application-note', href: '/Product/Chip/MCU/W55MH32/?software=appnote#software-resources' },
										]
									},

									{
										type: 'category',
										label: 'Hardware resources',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W55MH32/#hardware-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'technical resources', href: '/Product/Chip/MCU/W55MH32/#technical-resources' },
											{ type: 'link', label: 'test certification',  href: '/Product/Chip/MCU/W55MH32/#test--certification' },
										]
									},


									{
										type: 'category',
										label: 'Related modules',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W55MH32/#related-modules'},  
										items: [
											// 하위 항목들
											{ 
												type: 'category', 
												label: 'evaluation-boards', 
												link: {type: 'generated-index', slug: '/Product/Chip/MCU/W55MH32/#evaluation-boards'},
												items: [
													'Product/Chip/MCU/W55MH32/W55MH32L-evb',
													'Product/Chip/MCU/W55MH32/W55MH32Q-evb',
												], 
											},
											// { type: 'link', label: 'test certification',  href: '/Product/Chip/MCU/W55RP20/#serial-to-ethernet-module' },
										]
									},
								// {
								// 	type: 'category',
								// 	label: '[will be RM]Reference Code',
								// 	items: [
								// 			'Product/Chip/MCU/W55MH32/install_keil',
								// 			'Product/Chip/MCU/W55MH32/W55MH32_examples',					
								// 	],
								// },
								// {
								// 	type: 'category',
								// 	label: 'EVB',
								// 	items: [
								// 			'Product/Chip/MCU/W55MH32/W55MH32L-evb',
								// 			'Product/Chip/MCU/W55MH32/W55MH32Q-evb',					
								// 	],
								// },
								],
							},
							{
							type: 'category',
							label: 'W7500',
							link: {type: 'doc', id: 'Product/Chip/MCU/W7500/overview'},
							items:
							[
								{
									type: 'category',
									label: 'Documentation',
									link: {type: 'generated-index', slug: '/Product/Chip/MCU/W7500/#documentation'},  
									items: [
										// 하위 항목들
										{ type: 'link', label: 'Datasheet', href: '/Product/Chip/MCU/W7500/#datasheet' },
										{ type: 'link', label: 'technical documents', href: '/Product/Chip/MCU/W7500/#technical-documents' },
										{ type: 'link', label: 'getting-started', href: '/Product/Chip/MCU/W7500/#getting-started' },
									]

								},
									{
										type: 'category',
										label: 'Software resources',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W7500/#software-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Driver', href: '/Product/Chip/MCU/W7500/#driver' },
										]
									},

									{
										type: 'category',
										label: 'Hardware resources',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W7500/#hardware-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'technical resources', href: '/Product/Chip/MCU/W7500/#technical-resources' },
											{ type: 'link', label: 'test certification',  href: '/Product/Chip/MCU/W7500/#test--certification' },
										]
									},


									{
										type: 'category',
										label: 'Related modules',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W7500/#related-modules'},  
										items: [
											// 하위 항목들
											{ 
												type: 'category', 
												label: 'Evaluation-boards', 
												items: [
													'Product/Chip/MCU/Mbed-WIZwiki-Platform/wizwiki-w7500',
													'Product/Chip/MCU/Mbed-WIZwiki-Platform/wizwiki-w7500eco',
												]
											
											},
											// { type: 'link', label: 'test certification',  href: '/Product/Chip/MCU/W7500/#serial-to-ethernet-module' },
										]
									},


								],
							},
							{
							type: 'category',
							label: 'W7500P',
							link: {type: 'doc', id: 'Product/Chip/MCU/W7500P/overview'},
							items: [
								{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W7500P/#documentation'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Datasheet', href: '/Product/Chip/MCU/W7500P/#datasheet' },
											{ type: 'link', label: 'technical documents', href: '/Product/Chip/MCU/W7500P/#technical-documents' },
											{ type: 'link', label: 'getting-started', href: '/Product/Chip/MCU/W7500P/#getting-started' },
										]

									},
									{
										type: 'category',
										label: 'Software resources',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W7500P/#software-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Driver', href: '/Product/Chip/MCU/W7500P/#driver' },
										]
									},

									{
										type: 'category',
										label: 'Hardware resources',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W7500P/#hardware-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'technical resources', href: '/Product/Chip/MCU/W7500P/#technical-resources' },
											{ type: 'link', label: 'test certification',  href: '/Product/Chip/MCU/W7500P/#test--certification' },
										]
									},


									{
										type: 'category',
										label: 'Related-modules',
										link: {type: 'generated-index', slug: '/Product/Chip/MCU/W7500P/#related-modules'},  
										items: [
											// 하위 항목들
											{ 
												type: 'category', 
												label: 'Evaluation-boards', 
												items: [
													 'Product/Chip/MCU/Mbed-WIZwiki-Platform/wizwiki-w7500p',
												]
											
											},
											{ 
												type: 'category', 
												label: 'Serial-to-Ethernet-Module', 
												items: [
													{
														type: 'link',
														label: 'wiz750sr',
														href: '/Product/Chip/MCU/W7500P/?module=s2e#related-modules',
														customProps: {
															openInNewTab: true,
															id: 'wiz750sr-external',
															url: '/Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/wiz750sr',
															ignoreActive: true,
														}
													}
													
												
												]
											
											},
										]
									},


								//'Product/Chip/MCU/W7500P/overview',
								// 'Product/Chip/MCU/W7500P/pin-assignment',
								// 'Product/Chip/MCU/W7500P/system-and-memory',
								// 'Product/Chip/MCU/W7500P/interrupt-and-event',
								// 'Product/Chip/MCU/W7500P/power-supply',
								// 'Product/Chip/MCU/W7500P/booting-sequence',
								// 'Product/Chip/MCU/W7500P/electrical-characteristics',
								// 'Product/Chip/MCU/W7500P/w7500p-ref-schematic',
								// 'Product/Chip/MCU/W7500P/documents',
								// 'Product/Chip/MCU/W7500P/peripherals',
								// 'Product/Chip/MCU/W7500P/libraries-examples',
								//'Product/Chip/MCU/W7500P/all_pages',
							],
							},
							// {
							// //	type: 'link',
							// //	label: 'W5100', // string - the label that should be displayed.
							// //	href: 'https://www.wiznet.io/product-item/w5100/' // string - the target URL.
							// 	type: 'category',
							// 	label: '📜W7500X Common resource',
							// 	// link: {type: 'doc', id: 'Product/Chip/Ethernet/W5100/overview'},
							// 	items: [
							// 	{
							// 		type: 'category',
							// 		label: 'Peripherals Internal',
							// 		items: [
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/adc',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/afc',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/blink-led',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/capturemode',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/countermode',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/crg',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/deadzonegeneration',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/delay',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/deladhcpclient',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/dma',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/dmdnsclient',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/eeprom',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/exti',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/flash',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/flowcontrol',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/gpio',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/i2c',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/iap-example',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/illumination-sensor',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/init',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/inter',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/led-toggle',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/lm75-temperature',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/loopback',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/padcon',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/polling',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/printf',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/pwm',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/pwmoutput',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/rng-ex',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/rng',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/sd-card-led',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/sleep',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/ssp',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/systick',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/tcp-function',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/timermode',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/timerrun',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/toe',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/uart',
							// 			// 'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/wdt',
							// 			'Product/Chip/MCU/w7500x_Common_resource/Peripherals-internal/wdtreset',						
							// 		],
							// 	},
							// 	// {
							// 	// 	type: 'category',
							// 	// 	label: 'Other Documents',
							// 	// 	items: 
							// 	// 	[
							// 	// 		{
							// 	// 			type: 'category',
							// 	// 			label: 'Appnote',
							// 	// 			items: [
							// 	// 			'Product/Chip/MCU/w7500x_Common_resource/appnote/how_to_install_KEIL',
							// 	// 			'Product/Chip/MCU/w7500x_Common_resource/appnote/how-to-make-keil-new-project-for-w7500',
							// 	// 			'Product/Chip/MCU/w7500x_Common_resource/appnote/how-to-use-gcc-for-w7500-peripherals-examples',
							// 	// 			'Product/Chip/MCU/w7500x_Common_resource/appnote/how-to-use-isp-tool',
							// 	// 			'Product/Chip/MCU/w7500x_Common_resource/appnote/how-to-use-mdk-for-w7500-peripherals-examples',							
							// 	// 			],
							// 	// 		},
							// 	// 	],
							// 	// },
							// ],
							// },

									{
						type: 'category',
						label: 'Pre-programmed MCU',
						link: {type: 'doc', id: 'Product/Chip/MCU/Pre-programmed-MCU/pre_programmed_mcu'},
						items: [
							//'Product/Chip/Pre-programmed-MCU/pre_programmed_mcu',
							{
								type: 'category',
								label: 'W7500P-S2E',
								items: [
									'Product/Chip/MCU/Pre-programmed-MCU/W7500P-S2E/w7500p-s2e-EN',
									'Product/Chip/MCU/Pre-programmed-MCU/W7500P-S2E/w7500p-s2e-KO',
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
											'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/overview-en',
											'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/w55rp20-evb-pico-s2e',
	
											{
												type: 'category',
												label: 'Common docs for using',
												items: [
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/hw-design-guide-en',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/Config-tool-Guide-en',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/command-manual-en',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/mqtt-connection-guide-en',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/ssl-connection-guide-en',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/modbus-connection-guide-en',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/firmware-update-guide-en',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/Web_Config_Guide_EN',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/factory-rst-guide-en',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/mac_address-write-guide-en',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/w55rp20-s2e-an-spi-mode-en',
												],
											},
										],
									},
									{
										type: 'category',
										label: 'W55RP20-S2E [JP]',
										items: [
											'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/overview-jp',
											'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/w55rp20-evb-pico-s2e-jp',
											{
												type: 'category',
												label: 'Common docs for using',
												items: [
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/hw-design-guide-jp',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/Config-tool-Guide-jp',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/command-manual-jp',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/mqtt-connection-guide-jp',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/ssl-connection-guide-jp',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/modbus-connection-guide-jp',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/firmware-update-guide-jp',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/Web_Config_Guide-jp',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/factory-rst-guide-jp',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/mac_address-write-guide-jp',
													'Product/Chip/MCU/Pre-programmed-MCU/W55RP20-S2E/w55rp20-s2e-an-spi-mode-jp',
												],
											},
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
						label: 'Ethernet',
						link: {type: 'doc', id: 'Product/Chip/Ethernet/iethernet'},
							items: [
							//'Product/Chip/Ethernet/iethernet',
							
							{
								type: 'category',
								label: 'W6300',
								link: {type: 'doc', id: 'Product/Chip/Ethernet/W6300/overview'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W6300/#documentation'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'datasheet', href: '/Product/Chip/Ethernet/W6300/#datasheet' },
											// { type: 'link', label: 'datasheet', href: '/Product/Chip/Ethernet/W6300/#technical-documents' },
										]

									},
									{
										type: 'category',
										label: 'Software resources',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W6300/#software-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Driver', href: '/Product/Chip/Ethernet/W6300/?software=driver#software-resources' },
										]
									},
									{
										type: 'category',
										label: 'Hardware resources',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W6300/#hardware-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'technical resources', href: '/Product/Chip/Ethernet/W6300/#technical-resources' },
											{ type: 'link', label: 'test certification', href: '/Product/Chip/Ethernet/W6300/#test--certification' },
										]
									},
									{
										type: 'category',
										label: 'Related-modules',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W6300/#related-modules'},  
										items: [
											// 하위 항목들
											{ 
												type: 'category',
												label: 'evaluation-boards', 
												items: [
													'Product/Chip/Ethernet/W6300/w6300-evb-pico',
													'Product/Chip/Ethernet/W6300/w6300-evb-pico2',
												]
											 },
											{ 
												type: 'category', 
												label: 'Ethernet Module2',
												items: [
													{
														type: 'link',
														label: 'WIZ630io',
														href: '/Product/Chip/Ethernet/W6300/#related-modules',
														// href : '/Product/ioModule/wiz630io',
														customProps: {
															openInNewTab: true,
															id: 'wiz630io-external',	
															url: '/Product/ioModule/wiz630io',
															ignoreActive: true,
														}
													}
												]
											 },
											{ 
												type: 'category', 
												label: 'Ethernet Module2',
												items: [
													{
														type: 'link',
														label: 'WIZ630MJ',
														href: '/Product/Chip/Ethernet/W6300/#related-modules',
														// href : '/Product/ioModule/wiz630io',
														customProps: {
															openInNewTab: true,
															id: 'wiz630mj-external',	
															url: '/Product/ioModule/wiz630mj',
															ignoreActive: true,
														}
													}
												]
											 },
										]
									},
								]
							},
							{
							type: 'category',
							label: 'W6100',
							link: {type: 'doc', id: 'Product/Chip/Ethernet/W6100/overview'},
							items: [
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W6100/#documentation'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'datasheet', href: '/Product/Chip/Ethernet/W6100/#datasheet' },
											// { type: 'link', label: 'technical-docs', href: '/Product/Chip/Ethernet/W6100/#technical-documents' },
										] 

									},
									{
										type: 'category',
										label: 'Software resources',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W6100/#software-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Driver', href: '/Product/Chip/Ethernet/W6100/?software=driver#software-resources' },
										]
									},

									{
										type: 'category',
										label: 'Hardware resources',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W6100/#hardware-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'technical resources', href: '/Product/Chip/Ethernet/W6100/#technical-resources' },
											{ type: 'link', label: 'test certification', href: '/Product/Chip/Ethernet/W6100/#test--certification' },
										]
									},

									{
										type: 'category',
										label: 'Related-modules',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W6100/#related-modules'},  
										items: [
											// 하위 항목들
											{ 
												type: 'category',
												label: 'evaluation-boards', 
												items: [
													'Product/Chip/Ethernet/W6100/w6100-evb-pico',
													'Product/Chip/Ethernet/W6100/w6100-evb-pico2',
												]	
											},
										
											{ 
												type: 'category', 
												label: 'Ethernet Module',  
												items: [
													
													{
														type: 'link',
														label: 'WIZ610io',
														href :'/Product/Chip/Ethernet/W6100/#related-modules',
														
														customProps: {
															openInNewTab: true,
															id: 'WIZ610io-external',	
															url: '/Product/ioModule/wiz610io',
															ignoreActive: true,
														}
													},
													{
														type: 'link',
														label: 'WIZ610mj',
														href :'/Product/Chip/Ethernet/W6100/?module=hat#related-modules',

														customProps: {
															openInNewTab: true,
															id: 'WIZ610mj-external',	
															url: '/Product/ioModule/wiz610mj',
															ignoreActive: true,
														}
													}
												]	
											},
										]
									},
							],
							},
							{
							type: 'category',
							label: 'W5100S',
							link: {type: 'doc', id: 'Product/Chip/Ethernet/W5100S/overview'},
							items: [
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5100S/#documentation'},  
										items: [
											// 하위 항목들
											{ type: 'link', label:'datasheet', href: '/Product/Chip/Ethernet/W5100S/#datasheet' },
											{ type: 'link', label: 'technical-docs', href: '/Product/Chip/Ethernet/W5100S/#technical-documents' },
										]

									},
									{
										type: 'category',
										label: 'Software resources',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5100S/#software-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Driver', href: '/Product/Chip/Ethernet/W5100S/?software=driver#software-resources' },
											{ type: 'link', label: 'App Note', href: '/Product/Chip/Ethernet/W5100S/?software=appnote#software-resources' },
										]
									},


									{
										type: 'category',
										label: 'Hardware resources',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5100S/#hardware-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'technical resources', href: '/Product/Chip/Ethernet/W5100S/#technical-resources' },
											{ type: 'link', label: 'test certification', href: '/Product/Chip/Ethernet/W5100S/#test--certification' },
										]
									},

									{
										type: 'category',
										label: 'Related-modules',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5100S/#related-modules'},  
										items: [
											// 하위 항목들
											{ 
												type: 'category',
											 	label: 'evaluation-boards', 
												items: [
													'Product/Chip/Ethernet/W5100S/w5100s-evb-pico',
													'Product/Chip/Ethernet/W5100S/w5100s-evb-pico2',
												]
											 },
											{ 
												type: 'category', 
												label: 'Ethernet Module',  
												items: [
													{	
														type: 'link',
														label: 'WIZ810Sio',
														href :'/Product/Chip/Ethernet/W5100S/related-modules',
														customProps: {
															openInNewTab: true,
															id: 'WIZ810Sio-external',	
															url: '/Product/ioModule/wiz810sio',
															ignoreActive: true,
														}
													},

													{
														type: 'link',
														label: 'WIZ810Smj',
														href : '/Product/Chip/Ethernet/W5100S/related-modules',

														customProps: {
															openInNewTab: true,
															id: 'WIZ810Smj-external',	
															url: '/Product/ioModule/wiz810smj',
															ignoreActive: true,
														}
													},
						
												]
											},
										]
									},

							],
							},
							{
							type: 'category',
							label: 'W5500',
							link: {type: 'doc', id: 'Product/Chip/Ethernet/W5500/overview'},
							items: [
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5500/#documentation'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'datasheet', href: '/Product/Chip/Ethernet/W5500/#datasheet' },
											{ type: 'link', label: 'technical documents', href: '/Product/Chip/Ethernet/W5500/#technical-documents' },
										]
									},
									{
										type: 'category',
										label: 'Software resources',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5500/#software-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Driver', href: '/Product/Chip/Ethernet/W5500/?software=driver#software-resources' },
											{ type: 'link', label: 'App Note', href: '/Product/Chip/Ethernet/W5500/?software=appnote#software-resources' },
										]
									},



									{
										type: 'category',
										label: 'Hardware resources',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5500/#hardware-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'technical resources', href: '/Product/Chip/Ethernet/W5500/#technical-resources' },
											{ type: 'link', label: 'test certification', href: '/Product/Chip/Ethernet/W5500/#test--certification' },
										]
									},
									{
										type: 'category',
										label: 'Related-modules',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5500/#related-modules'},  
										items: [
											// 하위 항목들
											{ 
												type: 'category', 
												label: 'evaluation-boards', 
												items: [	
													'Product/Chip/Ethernet/W5500/w5500-evb-pico',
													'Product/Chip/Ethernet/W5500/W5500-EVB-Pico-PoE',
													'Product/Chip/Ethernet/W5500/w5500-evb-pico2',
												]
											},	
											{ 
												type: 'category', 
												label: 'Ethernet Module',  
												items: [
													{
														type: 'link',
														label: 'WIZ850io',
														href: '/Product/Chip/Ethernet/W5500/?module=hat#related-modules',
														customProps: {
															openInNewTab: true,
															id: 'WIZ850io-external',	
															url: '/Product/ioModule/wiz850io',
															ignoreActive: true,
														}
													},

													{
														type: 'link',
														label: 'WIZ550io',
														href: '/Product/Chip/Ethernet/W5500/?module=hat#related-modules',
														customProps: {
															openInNewTab: true,
															id: 'WIZ550io-external',	
															url: '/Product/ioModule/wiz550io',
															ignoreActive: true,
														}
													},

													{
														type: 'category',
														label: 'W5500 Ethernet Shield',
														link: {type: 'doc', id: 'Product/Chip/Ethernet/W5500/W5500-Ethernet-Shield/w5500_ethernet_shield'},
														items: [
															//'Product/Chip/Chip_Related_modules/w5500_ethernet_shield',
															'Product/Chip/Ethernet/W5500/W5500-Ethernet-Shield/w5500_ethernet_shield_kor',
															'Product/Chip/Ethernet/W5500/W5500-Ethernet-Shield/w5500_ethernet_shield_jp',
															'Product/Chip/Ethernet/W5500/W5500-Ethernet-Shield/getting_started_arduino',
															'Product/Chip/Ethernet/W5500/W5500-Ethernet-Shield/getting_started_arduino_kr',
															'Product/Chip/Ethernet/W5500/W5500-Ethernet-Shield/getting_started_arduino_jp',
														],
													},

												]
											},
										]
									},
							],
							},
							{
							//	type: 'link',
							//	label: 'W5300', // string - the label that should be displayed.
							//	href: 'http://www.wiznet.io/product-item/w5300/' // string - the target URL.
								type: 'category',
								label: 'W5300',
								link: {type: 'doc', id: 'Product/Chip/Ethernet/W5300/overview'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5300/#documentation'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'datasheet', href: '/Product/Chip/Ethernet/W5300/#datasheet' },
											{ type: 'link', label: 'technical documents', href: '/Product/Chip/Ethernet/W5300/#technical-documents' },
										]
									},
									{
										type: 'category',
										label: 'Software resources',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5300/#software-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Driver', href: '/Product/Chip/Ethernet/W5300/?software=driver#software-resources' },
											{ type: 'link', label: 'App Note', href: '/Product/Chip/Ethernet/W5300/?software=appnote#software-resources' },
										]
									},
									{
										type: 'category',
										label: 'Hardware resources',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5300/#hardware-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'technical resources', href: '/Product/Chip/Ethernet/W5300/#technical-resources' },
											{ type: 'link', label: 'test certification', href: '/Product/Chip/Ethernet/W5300/#test--certification' },
										]
									},

									{
										type: 'category',
										label: 'Related-modules',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5300/#related-modules'},  
										items: [
											// 하위 항목들
											// { type: 'link', label: 'evaluation-boards', href: '/Product/Chip/Ethernet/W5300/?module=evb#evaluation-boards' },
											{ type: 'link', label: 'Ethernet Module',  href: '/Product/Chip/Ethernet/W5300/?module=hat#related-modules' },
										]
									},

								],
							},
							{

								type: 'category',
								label: 'W5100',
								link: {type: 'doc', id: 'Product/Chip/Ethernet/W5100/overview'},
								items: [
										{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5100/#documentation'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'datasheet', href: '/Product/Chip/Ethernet/W5100/#datasheet' },
											{ type: 'link', label: 'technical documents', href: '/Product/Chip/Ethernet/W5100/#technical-documents' },
										]

									},
									{
										type: 'category',
										label: 'Software resources',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5100/#software-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'Driver', href: '/Product/Chip/Ethernet/W5100/?software=driver#software-resources' },
											{ type: 'link', label: 'App Note', href: '/Product/Chip/Ethernet/W5100/?software=appnote#software-resources' },
										]
									},
									{
										type: 'category',
										label: 'Hardware resources',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5100/#hardware-resources'},  
										items: [
											// 하위 항목들
											{ type: 'link', label: 'technical resources', href: '/Product/Chip/Ethernet/W5100/#technical-resources' },
											{ type: 'link', label: 'test certification', href: '/Product/Chip/Ethernet/W5100/#test--certification' },
										]
									},



{
										type: 'category',
										label: 'Related-modules',
										link: {type: 'generated-index', slug: '/Product/Chip/Ethernet/W5100/#related-modules'},  
										items: [
											// 하위 항목들
											{ 
												type: 'category', 
												label: 'evaluation-boards', 
												items: [	
													'Product/Chip/Ethernet/W5100/w5100-evb',
												]
											},	
											{ 
												type: 'category', 
												label: 'Ethernet Module',  
												items: [
													{	
														type: 'link',
														label: 'WIZ810MJ',
														href : '/Product/Chip/Ethernet/W5100/#related-modules',
														customProps: {
															openInNewTab: true,
															id: 'WIZ810MJ-external',	
															url: '/Product/ioModule/wiz810mj',
															ignoreActive: true,
														}
													}
												]
											},
										]
									},		
								],
							},
						],
					},
				],
			},
			{
				type: 'category',
				label: 'Modules',
				items: 
				[
					{
						type: 'category',
						label: 'Serial to Ethernet Module',
						link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/s2e_module'},
						items: [
							{
								type: 'category',
								label: 'WIZ750SR',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/wiz750sr'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/users-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/users-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/datasheet',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/command-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/command-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/configuration-tool-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/configuration-tool-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/configuration-tool-manual-new-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/configuration-tool-manual-new-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/WIZ750SR_Web_Config_Guide_EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/WIZ750SR_Web_Config_Guide_KO',
											{
											type: 'category',
											label: 'CLI-Config-Tool-Tutorial',
											link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
											items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/CLI-Config-Tool-Tutorial/overview-environment',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/CLI-Config-Tool-Tutorial/single-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/CLI-Config-Tool-Tutorial/multi-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/CLI-Config-Tool-Tutorial/file-options',
												],
											},
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-en',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-ko',

											],
									},
									'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/download',
								],
							},
							{
								type: 'category',
								label: 'WIZ750SR-100',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/wiz750sr-100'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/users-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/users-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/datasheet',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/command-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/command-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/configuration-tool-manual-new-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/configuration-tool-manual-new-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/WIZ750SR_Web_Config_Guide_EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/WIZ750SR_Web_Config_Guide_KO',
											{
											type: 'category',
											label: 'CLI-Config-Tool-Tutorial',
											link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
											items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/CLI-Config-Tool-Tutorial/overview-environment',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/CLI-Config-Tool-Tutorial/single-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/CLI-Config-Tool-Tutorial/multi-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/CLI-Config-Tool-Tutorial/file-options',
												],
											},
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/getting-started-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/getting-started-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/trouble-shooting-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/trouble-shooting-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/developers-guide-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/developers-guide-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/modbus-connection-guide-en',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/modbus-connection-guide-ko',

											],
									},
									'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-100/download',
								],
							},
							{
								type: 'category',
								label: 'WIZ750SR-105',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/wiz750sr-105'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/users-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/users-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/datasheet',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/command-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/command-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/configuration-tool-manual-new-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/configuration-tool-manual-new-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/WIZ750SR_Web_Config_Guide_EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/WIZ750SR_Web_Config_Guide_KO',
											{
											type: 'category',
											label: 'CLI-Config-Tool-Tutorial',
											link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
											items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/CLI-Config-Tool-Tutorial/overview-environment',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/CLI-Config-Tool-Tutorial/single-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/CLI-Config-Tool-Tutorial/multi-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/CLI-Config-Tool-Tutorial/file-options',
												],
											},
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/getting-started-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/getting-started-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/trouble-shooting-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/trouble-shooting-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/developers-guide-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/developers-guide-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/modbus-connection-guide-en',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/modbus-connection-guide-ko',

											],
									},
									'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-105/download',
								],
							},
							{
								type: 'category',
								label: 'WIZ750SR-110',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/wiz750sr-110'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/users-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/users-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/datasheet',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/command-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/command-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/configuration-tool-manual-new-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/configuration-tool-manual-new-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/WIZ750SR_Web_Config_Guide_EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/WIZ750SR_Web_Config_Guide_KO',
											{
											type: 'category',
											label: 'CLI-Config-Tool-Tutorial',
											link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
											items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/CLI-Config-Tool-Tutorial/overview-environment',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/CLI-Config-Tool-Tutorial/single-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/CLI-Config-Tool-Tutorial/multi-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/CLI-Config-Tool-Tutorial/file-options',
												],
											},
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/getting-started-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/getting-started-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/trouble-shooting-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/trouble-shooting-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/developers-guide-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/developers-guide-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/modbus-connection-guide-en',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/modbus-connection-guide-ko',

											],
									},
									'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-110/download',
								],
							},
							{
								type: 'category',
								label: 'WIZ752SR-120',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/wiz752sr-120'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/users-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/users-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/datasheet',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/command-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/command-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/configuration-tool-manual-new-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/configuration-tool-manual-new-KO',
											{
											type: 'category',
											label: 'CLI-Config-Tool-Tutorial',
											link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
											items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/CLI-Config-Tool-Tutorial/overview-environment',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/CLI-Config-Tool-Tutorial/single-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/CLI-Config-Tool-Tutorial/multi-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/CLI-Config-Tool-Tutorial/file-options',
												],
											},
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/getting-started-guide-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/getting-started-guide-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/trouble-shooting-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/trouble-shooting-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/developers-guide-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/developers-guide-KO',

											],
									},
									'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-120/download',
								],
							},
							{
								type: 'category',
								label: 'WIZ752SR-125',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/wiz752sr-125'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/users-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/users-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/datasheet',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/command-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/command-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/configuration-tool-manual-new-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/configuration-tool-manual-new-KO',
											{
											type: 'category',
											label: 'CLI-Config-Tool-Tutorial',
											link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
											items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/CLI-Config-Tool-Tutorial/overview-environment',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/CLI-Config-Tool-Tutorial/single-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/CLI-Config-Tool-Tutorial/multi-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/CLI-Config-Tool-Tutorial/file-options',
												],
											},
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/getting-started-guide-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/getting-started-guide-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/trouble-shooting-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/trouble-shooting-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/developers-guide-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/developers-guide-KO',

											],
									},
									'Product/Modules/Serial-to-Ethernet-Module/WIZ752SR-125/download',
								],
							},
							{
								type: 'category',
								label: 'WIZ550SR',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ550SR/wiz550sr'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ550SR/datasheet-EN',	
												'Product/Modules/Serial-to-Ethernet-Module/WIZ550SR/datasheet-KO',
											],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ550SR/users_manual_programmers_guide-EN',	
											'Product/Modules/Serial-to-Ethernet-Module/WIZ550SR/users_manual_programmers_guide-KO',
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ550SR/getting_started-EN',	
												'Product/Modules/Serial-to-Ethernet-Module/WIZ550SR/getting_started-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ550SR/atcommand_tutorial-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ550SR/atcommand_tutorial-KO',
											],
									},
									'Product/Modules/Serial-to-Ethernet-Module/WIZ550SR/download',
								],
							},
							{
								type: 'category',
								label: 'WIZ500SR-RP',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/wiz500sr-rp'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										items: [
											// 'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/users-manual-EN',
											// 'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/users-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/datasheet',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/command-manual',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/configuration-tool-manual',
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/getting-started',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/trouble-shooting-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/trouble-shooting-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/developers-guide-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/developers-guide-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/mqtt-connection-guide',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/ssl-connection-guide',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/modbus-connection-guide',
											],
									},
									'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/download',
									'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/wiz500sr-rp-evb',
									'Product/Modules/Serial-to-Ethernet-Module/WIZ500SR-RP/wiz505sr-rp-evb',

								],
							},
							{
								type: 'category',
								label: 'WIZ505SR-RP',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/wiz505sr-rp'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										items: [
											// 'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/users-manual-EN',
											// 'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/users-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/datasheet',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/command-manual',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/configuration-tool-manual',
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/getting-started',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/trouble-shooting-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/trouble-shooting-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/developers-guide-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/developers-guide-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/mqtt-connection-guide',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/ssl-connection-guide',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/modbus-connection-guide',
											],
									},
									'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/download',
									'Product/Modules/Serial-to-Ethernet-Module/WIZ505SR-RP/wiz505sr-rp-evb',
								],
							},
							{
								type: 'category',
								label: 'WIZ510SR-RP',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ510SR-RP/wiz510sr-rp'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ510SR-RP/datasheet',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ510SR-RP/command-manual',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ510SR-RP/configuration-tool-manual',
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ510SR-RP/getting-started',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ510SR-RP/mqtt-connection-guide',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ510SR-RP/ssl-connection-guide',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ510SR-RP/modbus-connection-guide',
											],
									},
									'Product/Modules/Serial-to-Ethernet-Module/WIZ510SR-RP/download',
								],
							},
							
							{
								type: 'category',
								label: 'WIZ1xx series',
								items:[
								{
								type: 'category',
								label: 'WIZ100SR', // string - the label that should be displayed.
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ1xx-series/WIZ100SR/wiz100sr'},
								items: [
										'Product/Modules/Serial-to-Ethernet-Module/WIZ1xx-series/WIZ100SR/wiz100sr-evb'
										]
								},
								{
								type: 'category',
								label: 'WIZ105SR', // string - the label that should be displayed.
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ1xx-series/WIZ105SR/wiz105sr'},
								items: [
										'Product/Modules/Serial-to-Ethernet-Module/WIZ1xx-series/WIZ105SR/wiz105sr-evb']
								},
								'Product/Modules/Serial-to-Ethernet-Module/WIZ1xx-series/WIZ110SR/wiz110sr',
								],
							},
							{
								type: 'category',
								label: 'W5500S2E-S1',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/w5500s2e_s1'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/#documentation'}, 
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/datasheet-s1',

										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/#setup--configuration'}, 
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/wizse_at_command_s1',
												'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/wizse_config_tool_s1',
												'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/wizse_webpage_s1',
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/#user-guide'}, 
										items: [
												{ type: 'link', label: 'Getting Started', href: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/#user-guide'},
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-en',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-ko',

											],
									},
									{
										type: 'category',
										label: 'Software Resources',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/#software-resources'}, 
										items: [
												{ type: 'link', label: 'Config Tools', href: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/#software-resources'},

										]
									},
										// 'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/wizse_at_command',
										// 'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-S1/wizse_config_tool_55_75',
								],
							},
							{
								type: 'category',
								label: 'W5500S2E-Z1',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/w5500s2e_z1'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/#documentation'}, 
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/datasheet-z1',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/#setup--configuration'}, 
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/wizse_at_command_z1',
												'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/wizse_config_tool_z1',
												'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/wizse_webpage_z1',
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/#user-guide'}, 
										items: [
												{ type: 'link', label: 'Getting Started', href: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/#user-guide'},
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-en',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-ko',
											],
									},
									{
										type: 'category',
										label: 'Software Resources',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/#software-resources'}, 
										items: [
												{ type: 'link', label: 'Config Tools', href: '/Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/#software-resources'},

										]
									},
										// 'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/wizse_at_command',
										// 'Product/Modules/Serial-to-Ethernet-Module/W5500S2E-Z1/wizse_config_tool_55_75',
								],
							},
							{
								type: 'category',
								label: 'W7500S2E-R1',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/w7500s2e_r1'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/#documentation'}, 
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/datasheet-r1',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/#setup--configuration'}, 
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/wizse_at_command_r1',
												'Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/wizse_config_tool_r1',
												'Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/wizse_webpage_r1',
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/#user-guide'}, 
										items: [
												{ type: 'link', label: 'Getting Started', href: '/Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/#user-guide'},
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-en',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-ko',

											],
									},
									{
										type: 'category',
										label: 'Software Resources',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/#software-resources'}, 
										items: [
												{ type: 'link', label: 'Config Tools', href: '/Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/#software-resources'},

										]
									},
								],	
										// 'Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/wizse_at_command',
										// 'Product/Modules/Serial-to-Ethernet-Module/W7500S2E-R1/wizse_config_tool_55_75',

							},
							{
								type: 'category',
								label: 'WIZ-DTU',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZDTU/wizdtu'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZDTU/#documentation'}, 
										items: [
												//{ type: 'link', label: 'User Manual', href: '/Product/Modules/Serial-to-Ethernet-Module/WIZDTU/#documentation'},
												'Product/Modules/Serial-to-Ethernet-Module/WIZDTU/datasheet-dtu',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZDTU/#setup--configuration'}, 
										items: [
												//{ type: 'link', label: 'AT Commands', href: '/Product/Modules/Serial-to-Ethernet-Module/WIZDTU/#setup--configuration'},
												'Product/Modules/Serial-to-Ethernet-Module/WIZDTU/wizse_at_command_dtu',
												'Product/Modules/Serial-to-Ethernet-Module/WIZDTU/wizse_config_tool_dtu',
												'Product/Modules/Serial-to-Ethernet-Module/WIZDTU/wizse_webpage_dtu',
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZDTU/#user-guide'}, 
										items: [
												{ type: 'link', label: 'Getting Started', href: '/Product/Modules/Serial-to-Ethernet-Module/WIZDTU/#user-guide'},
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-en',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-ko',

											],
									},
									{
										type: 'category',
										label: 'Software Resources',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZDTU/#software-resources'}, 
										items: [
												{ type: 'link', label: 'Config Tools', href: '/Product/Modules/Serial-to-Ethernet-Module/WIZDTU/#software-resources'},

										]
									},
								],								
								// 		'Product/Modules/Serial-to-Ethernet-Module/WIZDTU/wizse_at_command',
								// 		'Product/Modules/Serial-to-Ethernet-Module/WIZDTU/wizse_config_tool_dtu',
							},
							{
								type: 'category',
								label: 'W232N',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/W232N/w232n'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/W232N/W232N-datasheet-en',
											'Product/Modules/Serial-to-Ethernet-Module/W232N/W232N-datasheet-kr',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/W232N/command-manual-en',
											'Product/Modules/Serial-to-Ethernet-Module/W232N/command-manual-kr',
											'Product/Modules/Serial-to-Ethernet-Module/W232N/Config-tool-Guide-en',
											'Product/Modules/Serial-to-Ethernet-Module/W232N/Config-tool-Guide-kr',
											'Product/Modules/Serial-to-Ethernet-Module/W232N/Web_Config_Guide_EN',
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/W232N/factory-rst-guide-en',
												'Product/Modules/Serial-to-Ethernet-Module/W232N/factory-rst-guide-kr',
												'Product/Modules/Serial-to-Ethernet-Module/W232N/mqtt-connection-guide-en',
												'Product/Modules/Serial-to-Ethernet-Module/W232N/mqtt-connection-guide-kr',
												'Product/Modules/Serial-to-Ethernet-Module/W232N/ssl-connection-guide-en',
												'Product/Modules/Serial-to-Ethernet-Module/W232N/ssl-connection-guide-kr',
												'Product/Modules/Serial-to-Ethernet-Module/W232N/modbus-connection-guide-en',
												'Product/Modules/Serial-to-Ethernet-Module/W232N/modbus-connection-guide-kr',
											],
									},
									'Product/Modules/Serial-to-Ethernet-Module/W232N/firmware-update-guide-en',
								],
							},

							// here
							{
								type: 'category',
								label: 'WIZ750SR-T1L',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/WIZ750SR-t1l'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										items: [
											//'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/users-manual-EN',
											//'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/users-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/datasheet',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										items: [
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/command-manual-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/command-manual-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/configuration-tool-manual-new-EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/configuration-tool-manual-new-KO',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/WIZ750SR_Web_Config_Guide_EN',
											'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/WIZ750SR_Web_Config_Guide_KO',
											{
											type: 'category',
											label: 'CLI-Config-Tool-Tutorial',
											link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/CLI-Config-Tool-Tutorial/cli-config-tool-tutorial',},
											items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/CLI-Config-Tool-Tutorial/overview-environment',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/CLI-Config-Tool-Tutorial/how-to-use-cli-config-tool',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/CLI-Config-Tool-Tutorial/single-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/CLI-Config-Tool-Tutorial/multi-device-configuration',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/CLI-Config-Tool-Tutorial/file-options',
												],
											},
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										items: [
									 			'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/getting-started-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/getting-started-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/trouble-shooting-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/trouble-shooting-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/developers-guide-EN',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/developers-guide-KO',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/modbus-connection-guide-en',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/modbus-connection-guide-ko',
												

											],
									},
									 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR-T1L/download',
								],
							},
							// here

							{
							type: 'category',
							label: 'WIZ-IP32',
							link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/wizip32'},
							items: [
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/#documentation'}, 
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/datasheet-ip32',

										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/#setup--configuration'}, 
										items: [
												//{ type: 'link', label: 'AT Commands', href: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/#setup--configuration'},
												'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/wizse_at_command_ip32',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/wizse_config_tool_ip32',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/wizse_webpage_ip32',

										],
									},
									{
										type: 'category',
										label: 'User Guides',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/#user-guide'}, 
										items: [
												{ type: 'link', label: 'Getting Started', href: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/#user-guide'},
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-en',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-ko',
												
											],
									},
									{
										type: 'category',
										label: 'Software Resources',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/#software-resources'}, 
										items: [
												{ type: 'link', label: 'Config Tools', href: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/#software-resources'},

										]
									},
									// 'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/wizse_at_command_32',
									// 'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP32/wizse_config_tool_dtu',
								],
							},
							{
								type: 'category',
								label: 'WIZ-IP20',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP20/wizip20'},
								items: [
									{
										type: 'category',
										label: 'Related modules', 
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP20/#related-modules'},
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP20/ip20-io/ip20-io',
										],
									},
								],
							},
							{
								type: 'category',
								label: 'WIZ-IP75',
								link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/wizip75'},
								items: [
									{
										type: 'category',
										label: 'Documentation',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/#documentation'}, 
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/datasheet-ip75',
										],
									},
									{
										type: 'category',
										label: 'Setup & Configuration',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/#setup--configuration'}, 
										items: [
												'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/wizse_at_command_ip75',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/wizse_config_tool_ip75',
												'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/wizse_webpage_ip75',
											
										],
									},
									{
										type: 'category',
										label: 'User Guides',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/#user-guide'}, 
										items: [
												{ type: 'link', label: 'Getting Started', href: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/#user-guide'},
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/getting-started-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/trouble-shooting-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-EN',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/developers-guide-KO',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-en',
												// 'Product/Modules/Serial-to-Ethernet-Module/WIZ750SR/modbus-connection-guide-ko',
												
											],
									},
									{
										type: 'category',
										label: 'Software Resources',
										link: {type: 'generated-index', slug: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/#software-resources'}, 
										items: [
												{ type: 'link', label: 'Config Tools', href: '/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/#software-resources'},
										]
									},
										// 'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/wizse_at_command_75',
										// 'Product/Modules/Serial-to-Ethernet-Module/WIZ-IP75/wizse_config_tool_55_75',
								],
							},

						],
					},
					{
						type: 'category',
						label: 'Ethernet Module',
						link: {type: 'doc', id: 'Product/Modules/Ethernet-Module/ethernet_module'},
						items: [
							'Product/Modules/Ethernet-Module/W5500-io',
							'Product/Modules/Ethernet-Module/wiz550io',
							'Product/Modules/Ethernet-Module/wiz610io',
							'Product/Modules/Ethernet-Module/wiz610mj',
							'Product/Modules/Ethernet-Module/wiz630io',
							'Product/Modules/Ethernet-Module/wiz630mj',
							'Product/Modules/Ethernet-Module/wiz810sio',
							'Product/Modules/Ethernet-Module/wiz810smj',
							'Product/Modules/Ethernet-Module/wiz810mj',
							'Product/Modules/Ethernet-Module/wiz811mj',
							'Product/Modules/Ethernet-Module/wiz830mj',
							'Product/Modules/Ethernet-Module/wiz850io',
							'Product/Modules/Ethernet-Module/wizip51s',
							'Product/Modules/Ethernet-Module/wizip55',
							'Product/Modules/Ethernet-Module/WIZMC-T1L/wizmc-t1l',
							
						],
					},
					{
						type: 'category',
						label: 'Wi-Fi Module',
						link: {type: 'doc', id: 'Product/Modules/Wi-Fi-Module/wi_fi_module'},
						items: [
							{
								type: 'category',
								label: 'WizFi360',
								link: {type: 'doc', id: 'Product/Modules/Wi-Fi-Module/WizFi360/wizfi360'},
								items: [
									'Product/Modules/Wi-Fi-Module/WizFi360/wizfi360_evb_shield',
								],
							},
							{
								type: 'category',
								label: 'WizFi630S',
								link: {type: 'doc', id: 'Product/Modules/Wi-Fi-Module/WizFi630S/wizfi630s'},
								items: [
									'Product/Modules/Wi-Fi-Module/WizFi630S/wizfi630_evb',
								],
							},
						],
					},
					{
						type: 'category',
						label: 'PoE',
						link: {type: 'doc', id: 'Product/Modules/PoE/PoE-Main'},
						items: [
							//'Product/Modules/PoE/WIZPoE-S1',
							'Product/Modules/PoE/WIZPoE-P1',
							'Product/Modules/PoE/WIZPoDL-P1',
							'Product/Chip/Chip_Related_modules/wiznet-pico-poe',
						//	'Product/Modules/PoE/raspberrypi-5-hat-poe',
							]
					},

					// {
					// 	type: 'category',
					// 	label: 'Mbed WIZwiki Platform',
					// 	link: {type: 'doc', id: 'Product/Modules/Mbed-WIZwiki-Platform/mbed-wizwiki-platform'},
					// 	items: [
					// 	//'Product/Modules/Mbed-WIZwiki-Platform/mbed-wizwiki-platform',
					// 	'Product/Modules/Mbed-WIZwiki-Platform/wizwiki-w7500-eco-shield',
					// 	{
					// 	type: 'category',
					// 	label: 'Getting Started',
					// 	link: {type: 'doc', id: 'Product/Modules/Mbed-WIZwiki-Platform/Getting-Started/getting-started'},
					// 	items: [
					// 		'Product/Modules/Mbed-WIZwiki-Platform/Getting-Started/how-to-start-wizwiki-w7500-board',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/Getting-Started/how-to-install-wizwiki-7500-serial-driver',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/Getting-Started/how-to-write-firmware-into-wizwiki-w7500',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/Getting-Started/how-to-debug-wizwiki-w7500',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/Getting-Started/how-to-write-firmware-into-cmsis-dap',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/Getting-Started/using-cmsis-dap-debugger',
					// 		],
					// 	},
					// 	{
					// 	type: 'category',
					// 	label: 'WIZwiki-W7500 Mbed Starter Kit',
					// 	link: {type: 'doc', id: 'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/wizwiki-w7500-mbed-starter-kit'},
					// 	items: [
					// 		//'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/wizwiki_w7500_mbed_starter_kit',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/product-information-eng',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/tutorial-eng',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/sign-up-at-arm-mbed-eng',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-1-led-eng',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-2-serial-port-eng',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-3-switch-eng',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-4-pwm-eng',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-5-variable-resistor-eng',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-6-temperature-sensor-eng',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-7-photoresistor-eng',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-1-tcp-loopback-eng',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-2-led-with-tcp-eng',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/kit-parts-datasheet',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/product-information-kor',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/tutorial-kor',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/sign-up-at-arm-mbed-kor',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-1-led-kor',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-2-serial-port-kor',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-3-switch-kor',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-4-pwm-kor',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-5-variable-resistor-kor',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-6-temperature-sensor-kor',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-7-photoresistor-kor',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-1-tcp-loopback-kor',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-2-led-with-tcp-kor',
					// 		'Product/Modules/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/kit-parts-datasheet-kor',
					// 	],
					// 	}
					// 	],
					// },
					// {
					// 	type: 'category',
					// 	label: 'Open Source Hardware',
					// 	link: {type: 'doc', id: 'Product/Modules/Open-Source-Hardware/open_source_hardware'},
					// 	items: [		
					// 	{
					// 		type: 'category',
					// 		label: 'RP2040 Based',
					// 		link: {type: 'doc', id: 'Product/Modules/Open-Source-Hardware/rp2040_based'},
					// 		items: [
					// 			//'Product/Open-Source-Hardware/w2e-gateway-pico',
					// 			'Product/Chip/MCU/W55RP20/w55rp20-evb-pico',
					// 			'Product/Chip/Ethernet/W6300/w6300-evb-pico',
					// 			'Product/Chip/Ethernet/W6100/w6100-evb-pico',
					// 			'Product/Chip/Ethernet/W5500/w5500-evb-pico',
					// 			'Product/Chip/Ethernet/W5100S/w5100s-evb-pico',
					// 			'Product/Modules/Open-Source-Hardware/wiznet_ethernet_hat',
					// 			'Product/Modules/Open-Source-Hardware/wiznet-pico-poe',
					// 		]
					// 	},
					// 	{
					// 		type: 'category',
					// 		label: 'RP2350 Based',
					// 		link: {type: 'doc', id: 'Product/Modules/Open-Source-Hardware/rp2350_based'},
					// 		items: [
					// 			//'Product/Open-Source-Hardware/w2e-gateway-pico',
					// 			'Product/Chip/Ethernet/W6300/w6300-evb-pico2',
					// 			'Product/Chip/Ethernet/W6100/w6100-evb-pico2',
					// 			'Product/Chip/Ethernet/W5500/w5500-evb-pico2',
					// 			'Product/Chip/Ethernet/W5100S/w5100s-evb-pico2',
					// 			// 'Product/Open-Source-Hardware/wiznet_ethernet_hat',
					// 			// 'Product/Open-Source-Hardware/wiznet-pico-poe',
					// 		]
					// 	},
					// 	],
					// },

				],
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
				items: 
				[
					{			
						type: 'category',
						label: 'W7100',
						link: {type: 'doc', id: 'Product/Chip/MCU/W7100/w7100a'},
						items: [
							//'Product/Chip/MCU/W7100/w7100a',Ethernet-Module
							'Product/Chip/MCU/W7100/imcu7100-evb',
						],
					},
					'Product/Modules/Ethernet-Module/w7200',
					{
						type: 'category',
						label: 'W3150A+',
						link: {type: 'doc', id: 'Product/Chip/Ethernet/W3150/w3150'},
						items: [
							//'Product/Chip/Ethernet/W3150/w3150',
							'Product/Chip/Ethernet/W3150/overview',
							'Product/Chip/Ethernet/W3150/document',
							'Product/Chip/Ethernet/W3150/w3150-evb',
						],
					},
					'Product/Chip/Ethernet/W5200/w5200',
				],
			},
			{
				type: 'category',
				label: 'App Module',
				link: {type: 'doc', id: 'Product/Modules/App-Module/app-module'},
				items: 
				[
					//'Product/Modules/App-Module/app_module',
					{
						type: 'category',
						label: 'WIZ550web',
						link: {type: 'doc', id: 'Product/Modules/App-Module/WIZ550web/wiz550web'},
						items:
						[
							//'Product/Modules/App-Module/WIZ550web/wiz550web',
							'Product/Modules/App-Module/WIZ550web/datasheet-eng',
							'Product/Modules/App-Module/WIZ550web/datasheet-kor',
							'Product/Modules/App-Module/WIZ550web/getting-started-guide-eng',
							'Product/Modules/App-Module/WIZ550web/getting-started-guide-kor',
							'Product/Modules/App-Module/WIZ550web/users-guide-eng',
							'Product/Modules/App-Module/WIZ550web/users-guide-kor',
							'Product/Modules/App-Module/WIZ550web/future-plan-eng',
							'Product/Modules/App-Module/WIZ550web/future-plan-kor',
							'Product/Modules/App-Module/WIZ550web/tutorials-eng',
							'Product/Modules/App-Module/WIZ550web/tutorials-kor',
							'Product/Modules/App-Module/WIZ550web/download',
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
					link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ107SR/wiz107sr'},
					items: [
							'Product/Modules/Serial-to-Ethernet-Module/WIZ107SR/wiz107sr-evb']
					},
					{
					type: 'category',
					label: 'WIZ108SR', // string - the label that should be displayed.
					link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ108SR/wiz108sr'},
					items: [
							'Product/Modules/Serial-to-Ethernet-Module/WIZ108SR/wiz108sr-evb']
					},
					{
					type: 'category',
					label: 'WIZ120SR', // string - the label that should be displayed.
					link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ120SR/wiz120sr'},
					items: [
							'Product/Modules/Serial-to-Ethernet-Module/WIZ120SR/wiz120sr-evb']
					},
					'Product/Modules/Serial-to-Ethernet-Module/WIZ125SR/wiz125sr',
					{
					type: 'category',
					label: 'WIZ140SR', // string - the label that should be displayed.
					link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ140SR/wiz140sr'},
					items: [
							'Product/Modules/Serial-to-Ethernet-Module/WIZ140SR/wiz140sr-evb']
					},
					{
					type: 'category',
					label: 'WIZ145SR', // string - the label that should be displayed.
					link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ145SR/wiz145sr'},
					items: [
							'Product/Modules/Serial-to-Ethernet-Module/WIZ145SR/wiz145sr-evb']
					},
					
					'Product/Modules/Ethernet-Module/egsr7100a',
					'Product/Modules/Ethernet-Module/nm7010a',
					'Product/Modules/Ethernet-Module/wiz220io',
					'Product/Modules/Ethernet-Module/wiz220web',
					'Product/Modules/Ethernet-Module/wizsm10',
					{
						type: 'category',
						label: 'WIZ550S2E',
						link: {type: 'doc', id: 'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/wiz550s2e'},
						items: [
						//'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/wiz550s2e',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/datasheet-eng',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/datasheet-kor',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/datasheet-chn',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/programmer-guide-eng',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/programmer-guide-kor',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/programmer-guide-chn',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/at-command-eng',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/at-command-kor',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/at-command-chn',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/configuration-tool-eng', 
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/configuration-tool-kor',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/configuration-tool-chn',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/tutorial-eng',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/tutorial-kor',
						'Product/Modules/Serial-to-Ethernet-Module/WIZ550S2E/download',
						],
					},
					'Product/Modules/Ethernet-Module/wiz850sw',
					'Product/Modules/Serial-to-Ethernet-Module/WIZ1000/wiz1000',
					'Product/Modules/Ethernet-Module/W5100S-io',
					'Product/Modules/Ethernet-Module/W6100-io',
					'Product/Modules/Ethernet-Module/wiz812mj',
					'Product/Modules/Ethernet-Module/wiz820io',
					'Product/Modules/Ethernet-Module/nm7010b',

				],
			},
			{
				type: "category",
				label: "Wi-Fi Modules",
				items: [
					{
						type: 'category',
						label: 'WizFi250',
						link: {type: 'doc', id: 'Product/Modules/Wi-Fi-Module/WizFi250/wizfi250'},
						items: [
						//'Product/Modules/Wi-Fi-Module/WizFi250/wizfi250',
						'Product/Modules/Wi-Fi-Module/WizFi250/wizfi250_datasheet',
						'Product/Modules/Wi-Fi-Module/WizFi250/wizfi250_programmersguide',
						'Product/Modules/Wi-Fi-Module/WizFi250/wizfi250_quickstart',
						'Product/Modules/Wi-Fi-Module/WizFi250/comparison',
						'Product/Modules/Wi-Fi-Module/WizFi250/wizfi250_evb_if_fimension',
						'Product/Modules/Wi-Fi-Module/WizFi250/wizfi250_evb_sch',
						'Product/Modules/Wi-Fi-Module/WizFi250/wizfi250_firmware',
						'Product/Modules/Wi-Fi-Module/WizFi250/reference_youtube',
						],
					},
					'Product/Modules/Wi-Fi-Module/wizfi630',
					'Product/Modules/Ethernet-Module/wiz610wi',
					'Product/Modules/Wi-Fi-Module/WizFi630A/wizfi630a',
					{
						type: 'category',
						label: 'WizFi310',
						link: {type: 'doc', id: 'Product/Modules/Wi-Fi-Module/WizFi310/wizfi310'},
						items: [
						//'Product/Modules/Wi-Fi-Module/WizFi310/wizfi310',
						'Product/Modules/Wi-Fi-Module/WizFi310/datasheet',
						{
						type: 'category',
						label: 'Programers Guide',
						link: {type: 'doc', id: 'Product/Modules/Wi-Fi-Module/WizFi310/Programers-Guide/overview'},
						items: [
						//'Product/Modules/Wi-Fi-Module/WizFi310/Programers-Guide/overview',
						'Product/Modules/Wi-Fi-Module/WizFi310/Programers-Guide/at_commands',
						'Product/Modules/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_serial_interface',
						'Product/Modules/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_ota',
						'Product/Modules/Wi-Fi-Module/WizFi310/Programers-Guide/examples',
						'Product/Modules/Wi-Fi-Module/WizFi310/Programers-Guide/gmmp_example',
						'Product/Modules/Wi-Fi-Module/WizFi310/Programers-Guide/thingplug_example',
						'Product/Modules/Wi-Fi-Module/WizFi310/Programers-Guide/mqtt_example',
						]
						},
						'Product/Modules/Wi-Fi-Module/WizFi310/quick_start_guide',
						'Product/Modules/Wi-Fi-Module/WizFi310/wizfi310_evb_if_dimension',
						'Product/Modules/Wi-Fi-Module/WizFi310/wizfi310_evb_sch',
						'Product/Modules/Wi-Fi-Module/WizFi310/wizfi310_firmware_using_serial',
						'Product/Modules/Wi-Fi-Module/WizFi310/wizfi310_firmware_using_ota',
						],
					},
					{
						type: 'category',
						label: 'WizFi210/220',
						link: {type: 'doc', id: 'Product/Modules/Wi-Fi-Module/WizFi210/wizfi210'},
						items: [
							//'Product/Modules/Wi-Fi-Module/WizFi210/wizfi210',
							'Product/Modules/Wi-Fi-Module/WizFi210/wizfi210-evb',
						],	
					},
					'Product/Modules/Wi-Fi-Module/WizFi360/wizfi360io',
				],
			},
				{
					type: 'category',
					label: 'Evaluation Boards',
					items: [
						{
						type: 'category',
						label: 'W6100-EVB',
						link: {type: 'doc', id: 'Product/Chip/Ethernet/W6100/w6100-evb'},
						items: [
							'Product/Chip/Ethernet/W6100/getting-started-w6100evb',
							'Product/Chip/Ethernet/W6100/new-project-stm32cubeide',
							'Product/Chip/Ethernet/W6100/new-project-truestudio',
							'Product/Chip/Ethernet/W6100/new-project-eclipse',
						],
						},
						{
						type: 'category',
						label: 'W5500-EVB',
						link: {type: 'doc', id: 'Product/Chip/Ethernet/W5500/W5500-EVB/w5500-evb'},
						items: [
							//'Product/Chip/Ethernet/W5500/W5500-EVB/w5500_evb',
							'Product/Chip/Ethernet/W5500/W5500-EVB/getting-started',
							'Product/Chip/Ethernet/W5500/W5500-EVB/make-new-projects',
							'Product/Chip/Ethernet/W5500/W5500-EVB/how-to-install-and-activate-lpcxpresso',
							//'Product/Chip/Ethernet/W5500/W5500-EVB/w5500-evb_firmware',
						],
						},
						{
						type: 'category',
						label: 'W5100S-EVB',
						link: {type: 'doc', id: 'Product/Chip/Ethernet/W5100S/w5100s-evb'},
						items: [
							'Product/Chip/Ethernet/W5100S/w5100s-getting-started',
							'Product/Chip/Ethernet/W5100S/w5100s-projects-stm32cubeide',
							'Product/Chip/Ethernet/W5100S/w5100s-projects-truestudio',
							'Product/Chip/Ethernet/W5100S/w5100s-projects-eclipse',
						],
						},
						
						
						'Product/Chip/Chip_Related_modules/wizfi360-evb-pico',
						'Product/Modules/Wi-Fi-Module/WizFi360/wizfi360_evb_mini',
					],
				},
				{
					type: 'category',
					label: 'Open Source Hardware',
					items: [
						{
						type: 'category',
						label: 'Surf 5',
						link: {type: 'doc', id: 'Product/Chip/Chip_Related_modules/surf5/surf5'},
						items: [
							{
								type: 'category',
								label: 'Getting Started',
								link: {type: 'doc', id: 'Product/Chip/Chip_Related_modules/surf5/getting-started/getting-started'},
								items: [
									'Product/Chip/Chip_Related_modules/surf5/getting-started/install-usb-driver',
									'Product/Chip/Chip_Related_modules/surf5/getting-started/flashing-surf5',
									'Product/Chip/Chip_Related_modules/surf5/getting-started/install-vscode-guide',
									'Product/Chip/Chip_Related_modules/surf5/getting-started/install-keil-guide',
									'Product/Chip/Chip_Related_modules/surf5/getting-started/fw-examples',
									'Product/Chip/Chip_Related_modules/surf5/getting-started/debugger-surf5',
									'Product/Chip/Chip_Related_modules/surf5/getting-started/surf5-s2e',
									],
								},
							],
						},
						'Product/Chip/Chip_Related_modules/w5100s_mkr_ethernet_shield',
						'Product/Chip/Chip_Related_modules/w6100_mkr_ethernet_shield',
						'Product/Chip/Ethernet/W5500/wizarduino_m0_eth',
						'Product/Chip/Ethernet/W5500/wizarduino_m0_eth_eng',
						'Product/Modules/Wi-Fi-Module/wizarduino_mega_wifi',
						'Product/Modules/Wi-Fi-Module/wizarduino_mega_wifi_eng',
						'Product/Modules/Wi-Fi-Module/WizFi310/wizfi310_shield',
						'Product/Chip/Ethernet/W5500/W5500-Ethernet-Shield/ioshield_a',
						'Product/Chip/Ethernet/W5500/W5500-Ethernet-Shield/ioshield_k',
						'Product/Chip/Ethernet/W5500/W5500-Ethernet-Shield/ioshield_l',
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




