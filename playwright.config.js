const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 60000,

  use: {
    browserName: 'chromium',

    headless: false,

    launchOptions: {
      slowMo: 300
    },

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

projects: [
  {
    name: 'chromium'
  }
],

  reporter: [['html', { open: 'always' }]]
});