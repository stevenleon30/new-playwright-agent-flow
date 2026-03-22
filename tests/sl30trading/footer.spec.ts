import { test, expect } from '@playwright/test';

const BASE_URL = 'https://sl30trading.lovable.app';

test.describe('SL30 Trading - Footer', () => {
  test('FT-001 footer is visible with quick links and legal links', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const footer = page.locator('footer').first();
    await expect(footer).toBeVisible();
    await expect(footer.getByText(/quick links/i)).toBeVisible();
    await expect(footer.getByText(/legal/i)).toBeVisible();
  });

  test('FT-002 and FT-003 footer links for courses and terms work', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await footerLinkClick(page, /courses/i);
    await expect(page.getByRole('heading', { name: /course catalog/i })).toBeVisible();

    await page.goto(BASE_URL);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await footerLinkClick(page, /terms of use/i);
    await expect(page).toHaveURL(/\/terms/);
  });

  test('FT-005 and FT-006 footer disclaimers are visible', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await expect(page.getByRole('heading', { name: /risk disclaimer/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /prop firm disclaimer/i })).toBeVisible();
  });
});

async function footerLinkClick(page: import('@playwright/test').Page, name: RegExp) {
  await page.locator('footer').getByRole('link', { name }).click();
}