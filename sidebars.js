/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
	'WIZnet Document Wiki': ['introduction'],
	/*
    Products: [
	'Product/products',
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
		//'Product/iMCU/W7500/electrical_characteristics',
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
		//'Product/iMCU/W7500P/electrical_characteristics',
		'Product/iMCU/W7500P/w7500p_ref_schematic',
		'Product/iMCU/W7500P/documents',
		'Product/iMCU/W7500P/peripherals',
		'Product/iMCU/W7500P/libraries_examples',
		'Product/iMCU/W7500P/all_pages'
		],
		},
		{
			type: 'link',
			label: 'W7100A(Link)', // string - the label that should be displayed.
			href: 'http://www.wiznet.io/product-item/w7100a/' // string - the target URL.
		}
		],
    },
	{
        type: 'category',
        label: 'Pre-programmed MCU',
        items: [
		'Product/Pre-programmed-MCU/pre_programmed_mcu',
		{
        type: 'category',
        label: 'W7500P',
        items: [
		'Product/Pre-programmed-MCU/W7500P-S2E/w7500p-s2e-[KO]',
		'Product/Pre-programmed-MCU/W7500P-S2E/w7500p-s2e-[EN]',
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
		'Product/iEthernet/W5100S/Application-Note/tcp',
		'Product/iEthernet/W5100S/Application-Note/udp',
		'Product/iEthernet/W5100S/Application-Note/ipraw',
		'Product/iEthernet/W5100S/Application-Note/pppoe',
		'Product/iEthernet/W5100S/Application-Note/socket_less_command',
		'Product/iEthernet/W5100S/Application-Note/interrupt',
		'Product/iEthernet/W5100S/Application-Note/dma',
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
		//'Product/iEthernet/W5500/driver',
		'Product/iEthernet/W5500/ref_schematic',
		//'Product/iEthernet/W5500/migration_from_w5200',
		{
        type: 'category',
        label: 'Application',
        items: [
		'Product/iEthernet/W5500/Application/tcp',
		'Product/iEthernet/W5500/Application/udp',
		'Product/iEthernet/W5500/Application/ipraw',
		'Product/iEthernet/W5500/Application/pppoe',
		'Product/iEthernet/W5500/Application/spi_performance'
		],
		},
		'Product/iEthernet/W5500/esd_test_document',
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
		{
        type: 'category',
        label: 'W7500S2E-R1',
        items: [
		//'Product/S2E-Module/W7500S2E-R1/overview-[EN]',
		'Product/S2E-Module/W7500S2E-R1/w5500s2e_r1'
		],
		},
		{
        type: 'category',
        label: 'W5500S2E-S1',
        items: [
		//'Product/S2E-Module/W5500S2E-S1/overview-[EN]',
		'Product/S2E-Module/W5500S2E-S1/w5500s2e_s1'
		],
		},
		{
        type: 'category',
        label: 'W5500S2E-Z1',
        items: [
		//'Product/S2E-Module/W5500S2E-Z1/overview-[EN]',
		'Product/S2E-Module/W5500S2E-Z1/w5500s2e_z1'
		],
		},
		{
        type: 'category',
        label: 'WIZ750SR',
        items: [
		'Product/S2E-Module/WIZ750SR/wiz750sr',
		'Product/S2E-Module/WIZ750SR/overview-[KO]',
		'Product/S2E-Module/WIZ750SR/overview-[EN]',
		'Product/S2E-Module/WIZ750SR/getting_started-[KO]',
		'Product/S2E-Module/WIZ750SR/getting_started-[EN]',
		'Product/S2E-Module/WIZ750SR/users_manual-[KO]',
		'Product/S2E-Module/WIZ750SR/users_manual-[EN]',
		'Product/S2E-Module/WIZ750SR/configuration_tool_manual_new-[KO]',
		'Product/S2E-Module/WIZ750SR/configuration_tool_manual_new-[EN]',
		'Product/S2E-Module/WIZ750SR/configuration_tool_manual-[KO]',
		'Product/S2E-Module/WIZ750SR/configuration_tool_manual-[EN]',
		{
        type: 'category',
        label: 'CLI_Config_Tool_Tutorial',
        items: [
		'Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/cli_config_tool_tutorial',
		'Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/file_options',
		//'Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/how_to_use_cli_config_tool',
		'Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/multi_device_configuration',
		'Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/overview_environment',
		'Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/single_device_configuration',
		],
		},
		'Product/S2E-Module/WIZ750SR/command_manual-[KO]',
		'Product/S2E-Module/WIZ750SR/command_manual-[EN]',
		'Product/S2E-Module/WIZ750SR/trouble_shooting-[KO]',
		'Product/S2E-Module/WIZ750SR/trouble_shooting-[EN]',
		'Product/S2E-Module/WIZ750SR/datasheet',
		'Product/S2E-Module/WIZ750SR/technical_references',
		'Product/S2E-Module/WIZ750SR/developers_guide-[KO]',
		'Product/S2E-Module/WIZ750SR/developers_guide-[EN]',
		'Product/S2E-Module/WIZ750SR/download'
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
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/overview-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/overview-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/getting_started-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/getting_started-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/users_manual-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/users_manual-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/configuration_tool_manual_new-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/configuration_tool_manual_new-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/configuration_tool_manual-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/configuration_tool_manual-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/command_manual-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/command_manual-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/trouble_shooting-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/trouble_shooting-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/datasheet',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/technical_references',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/download'
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
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/users_manual-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/users_manual-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/configuration_tool_manual_new-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/configuration_tool_manual_new-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/configuration_tool_manual-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/configuration_tool_manual-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/command_manual-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/command_manual-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/trouble_shooting-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/trouble_shooting-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/datasheet',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/technical_references',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/download'
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
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/users_manual-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/users_manual-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/configuration_tool_manual_new-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/configuration_tool_manual_new-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/configuration_tool_manual-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/configuration_tool_manual-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/command_manual-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/command_manual-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/trouble_shooting-[KO]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/trouble_shooting-[EN]',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/datasheet',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/technical_references',
		'Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/download'
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
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/overview-[KO]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/overview-[EN]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/gtting_started_guide-[KO]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/gtting_started_guide-[EN]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/users_manual-[KO]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/users_manual-[EN]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/configuration_tool_manual_new-[KO]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/configuration_tool_manual_new-[EN]',
		{
        type: 'category',
        label: 'CLI_Config_Tool_Tutorial',
        items: [
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/cli_config_tool_tutorial',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/file_options',
		//'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/how_to_use_cli_config_tool',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/multi_device_configuration',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/overview_environment',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/single_device_configuration',
		],
		},
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/command_manual-[KO]',
		//'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/command_manual-[EN]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/trouble_shooting-[KO]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/trouble_shooting-[EN]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/datasheet',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/download'
		],
		},
		{
        type: 'category',
        label: 'WIZ752SR-125',
        items: [
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/wiz752sr_125',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/overview-[KO]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/overview-[EN]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/getting_started_guide-[KO]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/getting_started_guide-[EN]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/users_manual-[KO]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/users_manual-[EN]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/configuration_tool_manual_new-[KO]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/configuration_tool_manual_new-[EN]',
		{
        type: 'category',
        label: 'CLI_Config_Tool_Tutorial',
        items: [
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/cli_config_tool_tutorial',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/file_options',
		//'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/how_to_use_cli_config_tool',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/multi_device_configuration',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/overview_environment',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/single_device_configuration',
		],
		},
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/command_manual-[KO]',
		//'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/command_manual-[EN]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/trouble_shooting-[KO]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/trouble_shooting-[EN]',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/datasheet',
		'Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/download'
		],
		}
		],
		},
		{
        type: 'category',
        label: 'WIZ550SR',
        items: [
		'Product/S2E-Module/WIZ550SR/wiz550sr',
		'Product/S2E-Module/WIZ550SR/overview-[KO]',
		'Product/S2E-Module/WIZ550SR/overview-[EN]',
		'Product/S2E-Module/WIZ550SR/gtting_started-[KO]',
		'Product/S2E-Module/WIZ550SR/gtting_started-[EN]',
		'Product/S2E-Module/WIZ550SR/users_manual_programmers_guide-[KO]',
		'Product/S2E-Module/WIZ550SR/users_manual_programmers_guide-[KO]',
		//'Product/S2E-Module/WIZ550SR/atcommand_tutorial-[KO]',
		//'Product/S2E-Module/WIZ550SR/atcommand_tutorial-[EN]',
		'Product/S2E-Module/WIZ550SR/datasheet_hardware_spec_characteristics-[KO]',
		'Product/S2E-Module/WIZ550SR/datasheet_hardware_spec_characteristics-[EN]',
		'Product/S2E-Module/WIZ550SR/download'
		],
		},
		{
        type: 'category',
        label: 'WIZ550S2E',
        items: [
		'Product/S2E-Module/WIZ550S2E/wiz550s2e',
		'Product/S2E-Module/WIZ550S2E/datasheet_kor',
		'Product/S2E-Module/WIZ550S2E/datasheet_eng',
		'Product/S2E-Module/WIZ550S2E/datasheet_chn',
		//'Product/S2E-Module/WIZ550S2E/programmer_guide_kor',
		//'Product/S2E-Module/WIZ550S2E/at_command_kor',
		'Product/S2E-Module/WIZ550S2E/configuration_tool_kor',
		//'Product/S2E-Module/WIZ550S2E/programmer_guide_eng',
		//'Product/S2E-Module/WIZ550S2E/at_command_eng',
		'Product/S2E-Module/WIZ550S2E/configuration_tool_eng',
		//'Product/S2E-Module/WIZ550S2E/programmer_guide_chn',
		//'Product/S2E-Module/WIZ550S2E/at_command_chn',
		'Product/S2E-Module/WIZ550S2E/configuration_tool_chn',
		'Product/S2E-Module/WIZ550S2E/tutorial_kor',
		'Product/S2E-Module/WIZ550S2E/tutorial_eng',
		'Product/S2E-Module/WIZ550S2E/download'
		],
		},
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
			label: 'WIZ100SR(Link)', // string - the label that should be displayed.
			href: 'http://www.wiznet.io/product-item/wiz100sr/' // string - the target URL.
		},
		{
			type: 'link',
			label: 'WIZ105SR(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz105sr/' // string - the target URL.
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
		{
        type: 'category',
        label: 'WIZ610io',
        items: [
		'Product/ioModule/WIZ610io/wiz610io'
		],
		},
		{
        type: 'category',
        label: 'WIZ610MJ',
        items: [
		'Product/ioModule/WIZ610MJ/wiz610mj'
		],
		},
		{
        type: 'category',
        label: 'WIZ810Sio',
        items: [
		'Product/ioModule/WIZ810Sio/wiz810sio'
		],
		},
		{
        type: 'category',
        label: 'WIZ810SMJ',
        items: [
		'Product/ioModule/WIZ810SMJ/wiz810smj'
		],
		},
		{
        type: 'category',
        label: 'WIZ850io',
        items: [
		'Product/ioModule/WIZ850io/wiz850io'
		],
		},
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
		'Product/ioModule/WIZ550io/all_pages'
		],
		},
		{
			type: 'link',
			label: 'WIZ820io(Link)', // string - the label that should be displayed.
			href: 'http://www.wiznet.io/product-item/wiz820io/' // string - the target URL.
		},
		{
			type: 'link',
			label: 'WIZ810MJ(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz810mj/' // string - the target URL.
		},
		{
			type: 'link',
			label: 'WIZ811MJ(Link)', // string - the label that should be displayed.
			href: 'https://www.wiznet.io/product-item/wiz811mj/' // string - the target URL.
		},
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
		'Product/App-Module/WIZ550web/datasheet_kor',
		'Product/App-Module/WIZ550web/datasheet_eng',
		'Product/App-Module/WIZ550web/getting_started_guide_kor',
		'Product/App-Module/WIZ550web/getting_started_guide_eng',
		//'Product/App-Module/WIZ550web/users_guide_kor',
		//'Product/App-Module/WIZ550web/users_guide_eng',
		'Product/App-Module/WIZ550web/future_plan_kor',
		'Product/App-Module/WIZ550web/future_plan_eng',
		'Product/App-Module/WIZ550web/tutorials_kor',
		'Product/App-Module/WIZ550web/tutorials_eng',
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
        label: 'WizFi360',
        items: [
		'Product/Wi-Fi-Module/WizFi360/wizfi360',
		'Product/Wi-Fi-Module/WizFi360/documents',
		'Product/Wi-Fi-Module/WizFi360/application_examples',
		{
			type: 'link',
			label: 'AT-Command Firmware release(Link)', // string - the label that should be displayed.
			href: 'https://github.com/wizfi/Release/tree/master/Binary' // string - the target URL.
		},
		'Product/Wi-Fi-Module/WizFi360/wizfi360_evb_shield',
		'Product/Wi-Fi-Module/WizFi360/wizfi360_evb_mini',
		'Product/Wi-Fi-Module/WizFi360/wizfi360io',
		{
        type: 'category',
        label: 'Other Resource',
        items: [
		'Product/Wi-Fi-Module/WizFi360/Other-Resource/w600_sdk'
		]
		}
		],
		},
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
		'Product/Wi-Fi-Module/WizFi250/Datasheet/instruction_to_oem'
		]
		},
		{
        type: 'category',
        label: 'Programers Guide',
        items: [
		'Product/Wi-Fi-Module/WizFi250/Programers-Guide/overview',
		'Product/Wi-Fi-Module/WizFi250/Programers-Guide/at_command_set',
		'Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin',
		//'Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_use_web_configuration',
		'Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware',
		'Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_association_disassociation',
		//'Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_data_communication',
		'Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_wifi_direct',
		'Product/Wi-Fi-Module/WizFi250/Programers-Guide/appendix',
		]
		},
		{
        type: 'category',
        label: 'Quick Start Guide',
        items: [
		'Product/Wi-Fi-Module/WizFi250/Quick-Start-Guide/1_wizfi250_evaluation_board',
		'Product/Wi-Fi-Module/WizFi250/Quick-Start-Guide/2_start_serial_to_wi_fi'
		]
		},
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
		//'Product/Wi-Fi-Module/WizFi310/Programers-Guide/at_commands',
		'Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_serial_interface',
		'Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_ota',
		//'Product/Wi-Fi-Module/WizFi310/Programers-Guide/examples'
		]
		},
		//'Product/Wi-Fi-Module/WizFi310/quick_start_guide',
		'Product/Wi-Fi-Module/WizFi310/wizfi310_evb_if_dimension',
		'Product/Wi-Fi-Module/WizFi310/wizfi310_evb_sch',
		'Product/Wi-Fi-Module/WizFi310/wizfi310_firmware_using_serial',
		'Product/Wi-Fi-Module/WizFi310/wizfi310_firmware_using_ota'
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
		'Product/Wi-Fi-Module/WizFi630S/certificate'
		],
		},
		{
        type: 'category',
        label: 'WizFi630A',
        items: [
		'Product/Wi-Fi-Module/WizFi630A/wizfi630a'
		],
		}
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
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/features',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/firmware',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/getting_started',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/make_new_wizwiki_w7500_projects',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/technical_reference',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/etc',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/see_also',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/where_to_buy'
		],
		},
		{
        type: 'category',
        label: 'WIZwiki-W7500P',
        items: [
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/overview',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/features',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/firmware',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/getting_started',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/make_new_wizwiki_w7500p_projects',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/technical_reference',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/etc',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/see_also',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/where_to_buy'
		],
		},
		{
        type: 'category',
        label: 'WIZwiki-W7500ECO',
        items: [
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/overview',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/features',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/firmware',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/getting_started',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/make_new_wizwiki_w7500eco_projects',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/technical_reference',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/etc',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/see_also',
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/where_to_buy'
		],
		},
		{
        type: 'category',
        label: 'WIZwiki-W7500 Mbed Starter Kit',
        items: [
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/wizwiki_w7500_mbed_starter_kit',
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
		'Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network_exercise_2_led_with_tcp_eng'
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
		'Product/Open-Source-Hardware/ioshield_a',
		'Product/Open-Source-Hardware/ioshield_k',
		'Product/Open-Source-Hardware/ioshield_l'
		],
    },
	],
	*/
    Design_Guide: [
	'Design-Guide/design_guide',
	'Design-Guide/hardware_design_guide',
	'Design-Guide/package_information',
	'Design-Guide/ir_reflow_profile',
	'Design-Guide/eagle_cad_library_of_wiznet_products'
	],
	VAR_Products_using_WIZnet: [
	//'VAR Products using WIZnet/var_products_using_wiznet',
	'VAR-Products-using-WIZnet/ethernet_shield',
	'VAR-Products-using-WIZnet/wi_fi_shield',
	'VAR-Products-using-WIZnet/third_party'
	],
  },
};
