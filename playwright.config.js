import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test',
  retries: 1,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    headless: true,
    ignoreDefaultArgs: ['--disable-extensions'],
    launchOptions: {
      slowMo: 50,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  },
});
