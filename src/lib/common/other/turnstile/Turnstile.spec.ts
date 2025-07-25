import { test, expect } from '@playwright/experimental-ct-svelte';
import SITE_KEY from './siteKey';
import packageJson from '../../../../../package.json' assert { type: 'json' };

const templateName = 'website-template';

test.use({ viewport: { width: 500, height: 500 } });

test('does not have a development site key outside the template', () => {
	// eslint-disable-next-lint
	const name = packageJson.name;

	// If template package name
	if (name === templateName) {
		// Display warning message
		console.warn(
			"!\n!\n!\n!\n!\tThe package name is set to 'website-template'. If this is not the template repository, change the package name.\n!\n!\n!\n!"
		);

		// Skip test
		return;
	} else {
		// Turnstile test keys
		const testKeys: string[] = [
			'1x00000000000000000000AA',
			'2x00000000000000000000AB',
			'1x00000000000000000000BB',
			'2x00000000000000000000BB',
			'3x00000000000000000000FF'
		];

		// Check if the site key is a test key
		const isTestKey = testKeys.includes(SITE_KEY as string);
		expect(isTestKey).toBe(false);
	}
});
