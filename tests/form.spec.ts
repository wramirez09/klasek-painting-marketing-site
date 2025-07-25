import { expect, test, type Locator, type Page } from '@playwright/test';

// Load the form on the page
const loadForm: (page: Page) => Promise<Locator> = async (page: Page) => {
	const form = page.locator('form');
	await form.waitFor({ state: 'visible' });
	return form;
};

test.describe('Contact Us page', () => {
	test.use({ viewport: { width: 500, height: 500 } });

	test.beforeEach(async ({ page }) => {
		await page.goto('/contact-us');
	});

	// Load the form
	test('the form loads', async ({ page }) => {
		// Load form
		const form = await loadForm(page);

		// Expect the form to be visible
		await expect(form).toBeVisible();
	});
});
