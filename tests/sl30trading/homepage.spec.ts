import { test, expect } from '@playwright/test';

const BASE_URL = 'https://sl30trading.lovable.app';

test.describe('SL30 Trading - Homepage', () => {
  test('HP-001 homepage loads and hero is visible', async ({ page }) => {
    const start = Date.now();
    await page.goto(BASE_URL);
    const elapsed = Date.now() - start;

    expect(elapsed).toBeLessThan(3000);
    await expect(page.getByRole('heading', { name: /Simple Strategies for the Everyday Forex Trader/i })).toBeVisible();
  });

  test('HP-003 play button opens media dialog or embed', async ({ page }) => {
    await page.goto(BASE_URL);

    const playButton = page.getByRole('button', { name: /play/i }).first();
    await expect(playButton).toBeVisible();
    await playButton.click();

    await expect(page.locator('video, iframe, [role="dialog"]').first()).toBeVisible({ timeout: 10000 });
  });

  test('HP-004 start free CTA navigates to auth', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: /start free/i }).first().click();
    await expect(page).toHaveURL(/\/auth/);
  });

  test('HP-005 explore courses jumps to course catalog', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: /explore courses/i }).first().click();
    await expect(page.getByRole('heading', { name: /course catalog/i })).toBeVisible();
  });

  test('HP-006 and HP-007 course badge and risk disclaimer are visible', async ({ page }) => {
    await page.goto(BASE_URL);

    await expect(page.getByText(/11\+ courses/i)).toBeVisible();
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.getByText(/risk|educational|not financial advice|trading involves/i).first()).toBeVisible();
  });
});
