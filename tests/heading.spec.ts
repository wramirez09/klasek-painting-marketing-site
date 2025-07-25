import { expect, test } from '@playwright/test';
import { routeList } from './routeList';

routeList.forEach((route) => {
	// Test each route to ensure its respective hero heading loads
	test(route + ' page has expected heading', async ({ page }) => {
		await page.goto(route);
		await expect(page.getByTestId('page-heading')).toBeVisible();
	});
});
