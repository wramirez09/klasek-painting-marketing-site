import { expect, test } from '@playwright/test';
import { routeList } from './routeList';

routeList.forEach((route) => {
	// Test each route to ensure it has a title tag
	test(route + ' page has title tag', async ({ page }) => {
		await page.goto(route);
		await expect(page).toHaveTitle(/^(?!\s*$).+/);
	});
});
