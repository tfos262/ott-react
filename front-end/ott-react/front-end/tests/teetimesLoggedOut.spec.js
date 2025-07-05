import { test, expect } from '@playwright/test';

test.describe('Logged Out User Tee Time Tests', () => {

    test('Logged out users can view teetimes page', async ({ page }) => {
        await page.goto(process.env.CLIENT_ORIGIN);

        // check we are logged out
        await expect(page.locator('text=Login')).toBeVisible();
        // wait for at least one instance of the Reserve button
        const buttons = await page.locator('button[name="reserve"]');
        await expect(buttons.first()).toBeVisible();
    });
});
