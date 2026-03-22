import { test as setup, expect } from '@playwright/test';
import path from 'path';
import { users } from './testData';

const authFile = path.join(__dirname, '.auth/user.json');

setup('authenticate', async ({ page }) => {
  await page.goto('https://sl30trading.lovable.app/auth');

  await page.locator('input[type="email"]').fill(users.validUser.email);
  await page.locator('input[type="password"]').fill(users.validUser.password);

  await page.getByRole('button', { name: /sign in|login|continue|submit/i }).click();

  await expect(page).not.toHaveURL(/\/auth/, { timeout: 15000 });
  await expect(page.getByText(/welcome to sl30 trading|step 1 of 4/i).first()).toBeVisible({ timeout: 15000 });

  await page.context().storageState({ path: authFile });
});