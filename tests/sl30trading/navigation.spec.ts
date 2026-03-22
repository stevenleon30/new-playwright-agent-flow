import { test, expect } from '@playwright/test';

const BASE_URL = 'https://sl30trading.lovable.app';

test.describe('SL30 Trading - Navigation', () => {
  test('NAV-001 logo routes to homepage', async ({ page }) => {
    await page.goto(`${BASE_URL}/book-coaching`);

    const logoLink = page.locator('header a').filter({ hasText: /sl30 trading/i }).first();
    await expect(logoLink).toBeVisible();
    await logoLink.click();
    await expect(page).toHaveURL(/sl30trading\.lovable\.app\/?$/);
  });

  test('NAV-002 sign in link routes to auth', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('banner').getByRole('link', { name: /sign in/i }).click();
    await expect(page).toHaveURL(/\/auth/);
  });

  test('NAV-003 and NAV-004 courses and pricing links navigate to sections', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.getByRole('link', { name: /courses/i }).first().click();
    await expect(page.getByRole('heading', { name: /course catalog/i })).toBeVisible();

    await page.getByRole('link', { name: /pricing/i }).first().click();
    await expect(page.getByRole('heading', { name: /simple pricing/i })).toBeVisible();
  });

  test('NAV-005 and NAV-006 mobile menu opens and links are clickable', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE_URL);

    const menuButton = page.locator('header button').first();
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    const coursesLink = page.getByRole('link', { name: /courses/i }).last();
    await expect(coursesLink).toBeVisible();
    await coursesLink.click();
    await expect(page.getByRole('heading', { name: /course catalog/i })).toBeVisible();
  });
});
