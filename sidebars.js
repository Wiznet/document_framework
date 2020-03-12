/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    TEST: [
	{
    type: 'link',
    label: 'Custom Label', // string - the label that should be displayed.
    href: 'https://example.com' // string - the target URL.
	}
	],
    Products: ['test/doc2','test/doc1', 'test/doc2', 'doc3'],
    Design_Guide: ['test/example1', 'example2', 'example3'],
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
