import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    baseURL: 'https://sl30trading.lovable.app',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testMatch: '**/fixtures/auth.setup.ts',
    },
    {
      name: 'chromium',
      testIgnore: [
        '**/fixtures/auth.setup.ts',
        '**/sl30trading/dashboard.spec.ts',
      ],
    },
    {
      name: 'authenticated',
      use: {
        storageState: 'tests/fixtures/.auth/user.json',
      },
      testMatch: '**/sl30trading/dashboard.spec.ts',
      dependencies: ['setup'],
    },
  ],
});

