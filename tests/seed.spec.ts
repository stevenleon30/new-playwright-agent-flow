import { test, expect } from '@playwright/test';

test('seed', async ({ page }) => {
  await page.goto('https://sl30trading.lovable.app');
  await expect(page).toHaveURL(/sl30trading/);
});