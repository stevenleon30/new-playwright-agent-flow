import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 120000,
  reporter: 'html',
  use: {
    baseURL: 'https://sl30trading.lovable.app',
    
    // Screenshots
    screenshot: 'on',              // takes screenshot on every test
    
    // Video
    video: 'on',                   // records video of every test
    
    // Trace — full step by step replay
    trace: 'on',
    
    actionTimeout: 15000,
    navigationTimeout: 60000,
    launchOptions: {
      slowMo: 800,
    },
  },
});

