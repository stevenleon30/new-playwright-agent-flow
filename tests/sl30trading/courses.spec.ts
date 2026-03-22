import { test, expect } from '@playwright/test';

const BASE_URL = 'https://sl30trading.lovable.app';

test.describe('SL30 Trading - Course Catalog', () => {
  test('CC-001 and CC-002 course catalog and cards are visible', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: /courses/i }).first().click();

    await expect(page.getByRole('heading', { name: /course catalog/i })).toBeVisible();
    await expect(page.locator('article, [class*="card"]').first()).toBeVisible();
  });

  test('CC-003 free starter courses are listed', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: /courses/i }).first().click();

    await expect(page.getByRole('heading', { name: /what is forex/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /risk responsibility/i })).toBeVisible();
  });

  test('CC-004 progress tracking feature text is shown', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('link', { name: /courses/i }).first().click();

    await expect(page.getByText(/progress tracking|track your progress/i).first()).toBeVisible();
  });
});
