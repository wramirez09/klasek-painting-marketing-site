import { expect, test } from '@playwright/test';
import { routeList } from './routeList';

routeList.forEach((route) => {
	// Test each route to ensure it has a meta tag
	test(route + ' page has meta tag', async ({ page }) => {
		await page.goto(route);
		const metaDescription = page.locator('meta[name="description"]');
		await expect(metaDescription).toHaveAttribute('content', /^(?!\s*$).+/);
	});
});
