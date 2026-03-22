import { test, expect } from '@playwright/test';

const BASE_URL = 'https://sl30trading.lovable.app';

test.describe('SL30 Trading - Pricing', () => {
  test('PR-001 to PR-004 pricing section and tiers render', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: /pricing/i }).first().click();

    await expect(page.getByRole('heading', { name: /simple pricing/i })).toBeVisible();
    await expect(page.getByText('$0')).toBeVisible();
    await expect(page.getByText(/forever/i)).toBeVisible();
    await expect(page.getByText(/\$25\/?month/i)).toBeVisible();
    await expect(page.getByText(/core trader/i)).toBeVisible();
    await expect(page.getByText(/\$50\/?hour/i)).toBeVisible();
    await expect(page.getByRole('heading', { name: /private coaching/i })).toBeVisible();
  });

  test('PR-005 and PR-006 free and core CTAs go to auth', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: /pricing/i }).first().click();

    await page.getByRole('link', { name: /start free/i }).first().click();
    await expect(page).toHaveURL(/\/auth/);

    await page.goto(BASE_URL);
    await page.getByRole('link', { name: /pricing/i }).first().click();
    const betaCta = page.getByRole('link', { name: /start free beta/i });
    await expect(betaCta).toHaveAttribute('href', '/auth');
    await betaCta.evaluate((element: HTMLAnchorElement) => element.click());
    await expect(page).toHaveURL(/\/auth/);
  });

  test('PR-007 private coaching CTA opens booking page', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: /pricing/i }).first().click();

    const bookingCta = page.getByRole('link', { name: /book a session/i });
    await expect(bookingCta).toHaveAttribute('href', '/book-coaching');
    await bookingCta.evaluate((element: HTMLAnchorElement) => element.click());
    await expect(page).toHaveURL(/\/book-coaching/);
  });

  test('PR-008 pricing disclaimer text is visible', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: /pricing/i }).first().click();

    await expect(page.getByText(/usd|cancel|cancellation/i)).toBeVisible();
  });
});
