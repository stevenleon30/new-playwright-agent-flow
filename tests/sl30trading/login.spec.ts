import { test, expect } from '@playwright/test';
import { users } from '../fixtures/testData';

test('login with email and password', async ({ page }) => {
  // Go to login page
  await page.goto('https://sl30trading.lovable.app/auth');

  // Wait for page to fully load
  await page.waitForLoadState('networkidle');

  // Fill email using exact selector from codegen
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(users.validUser.email);

  // Fill password using exact selector from codegen
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(users.validUser.password);

  // Click Sign In using exact selector from codegen
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Wait for login to complete
  await page.waitForLoadState('networkidle', { timeout: 15000 });

  // Verify we are logged in and no longer on auth page
  await expect(page).not.toHaveURL(/auth/i, { timeout: 15000 });
});