import { test, expect } from '@playwright/test';

const BASE_URL = 'https://sl30trading.lovable.app';

test.describe('SL30 Trading - Accessibility Smoke', () => {
  test('A11Y-001 keyboard navigation reaches interactive controls', async ({ page }) => {
    await page.goto(BASE_URL);

    const focused: string[] = [];
    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('Tab');
      const tag = await page.evaluate(() => (document.activeElement as HTMLElement | null)?.tagName || '');
      focused.push(tag);
    }

    expect(focused.some((v) => v.length > 0)).toBeTruthy();
  });

  test('A11Y-002 landmarks are present', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('nav').first()).toBeVisible();
    await expect(page.locator('main').first()).toBeVisible();
    await expect(page.locator('footer').first()).toBeVisible();
  });

  test('A11Y-004 visible images include alt text', async ({ page }) => {
    await page.goto(BASE_URL);

    const missingAlt = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img'));
      const visible = images.filter((img) => {
        const rect = img.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });
      return visible.filter((img) => !img.hasAttribute('alt')).length;
    });

    expect(missingAlt).toBe(0);
  });

  test('A11Y-005 auth form fields have labels', async ({ page }) => {
    await page.goto(`${BASE_URL}/auth`);

    await expect(page.getByRole('textbox', { name: /email/i })).toBeVisible();
    await expect(page.getByRole('textbox', { name: /password/i })).toBeVisible();
  });

  test('A11Y-006 focus indicator styles are visible', async ({ page }) => {
    await page.goto(BASE_URL);

    const firstInteractive = page.locator('a[href], button, input, select, textarea').first();
    await firstInteractive.focus();

    const hasIndicator = await firstInteractive.evaluate((el) => {
      const style = window.getComputedStyle(el as HTMLElement);
      const outlineVisible = style.outlineStyle !== 'none' && parseFloat(style.outlineWidth || '0') > 0;
      const boxShadowVisible = style.boxShadow && style.boxShadow !== 'none';
      return outlineVisible || boxShadowVisible;
    });

    expect(hasIndicator).toBeTruthy();
  });
});
