import { test, expect } from '@playwright/test';

const BASE_URL = 'https://sl30trading.lovable.app';

test.describe('SL30 Trading - Dashboard and Authenticated Flows', () => {
  test('authenticated storage state removes guest navigation CTAs', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).not.toHaveURL(/\/auth/);
    await expect(page.getByRole('banner').getByRole('link', { name: /sign in/i })).toHaveCount(0);
    await expect(page.getByRole('banner').getByRole('link', { name: /start free/i })).toHaveCount(0);
  });

  test('authenticated storage state preserves account nav state on homepage', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.getByRole('heading', { name: /simple strategies for the everyday forex trader/i })).toBeVisible();
    await expect(page.locator('header').getByText(/^[A-Z]{1,2}$/).first()).toBeVisible();
  });

  test('CA-001 chart analysis page loads after sign in', async ({ page }) => {
    await page.goto(`${BASE_URL}/chart-analysis`);

    await expect(page).toHaveURL(/\/chart-analysis/);
    await expect(page.getByText(/higher timeframe trend and key levels/i)).toBeVisible();
  });

  test('BC-001 booking page is accessible for signed-in users', async ({ page }) => {
    await page.goto(`${BASE_URL}/book-coaching`);

    await expect(page).toHaveURL(/\/book-coaching/);
    await expect(page.getByRole('heading', { name: /book private coaching session/i })).toBeVisible();
  });
});

