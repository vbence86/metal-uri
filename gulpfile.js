'use strict';

var metal = require('gulp-metal');

var options = {
	bundleCssFileName: 'uri.css',
	bundleFileName: 'uri.js',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'metal-uri',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	],
	testSaucelabsBrowsers: {
		sl_chrome: {
			base: 'SauceLabs',
			browserName: 'chrome'
		},
		sl_chrome_57: {
			base: 'SauceLabs',
			browserName: 'chrome',
			version: '57'
		},
		sl_safari_8: {
			base: 'SauceLabs',
			browserName: 'safari',
			version: '8'
		},
		sl_safari_9: {
			base: 'SauceLabs',
			browserName: 'safari',
			version: '9'
		},
		sl_safari_10: {
			base: 'SauceLabs',
			browserName: 'safari',
			version: '10'
		},
		sl_firefox: {
			base: 'SauceLabs',
			browserName: 'firefox'
		},
		sl_firefox_53: {
			base: 'SauceLabs',
			browserName: 'firefox',
			version: '53'
		},
		sl_ie_10: {
			base: 'SauceLabs',
			browserName: 'internet explorer',
			platform: 'Windows 7',
			version: '10'
		},
		sl_ie_11: {
			base: 'SauceLabs',
			browserName: 'internet explorer',
			platform: 'Windows 8.1',
			version: '11'
		},
		sl_edge_20: {
			base: 'SauceLabs',
			browserName: 'microsoftedge',
			platform: 'Windows 10',
			version: '13'
		},
		sl_iphone: {
			base: 'SauceLabs',
			browserName: 'iphone',
			platform: 'OS X 10.10',
			version: '9.2'
		},
		sl_android_4: {
			base: 'SauceLabs',
			browserName: 'android',
			platform: 'Linux',
			version: '4.4'
		},
		sl_android_5: {
			base: 'SauceLabs',
			browserName: 'android',
			platform: 'Linux',
			version: '5.0'
		}
	}
};

metal.registerTasks(options);
