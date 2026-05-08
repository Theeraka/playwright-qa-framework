const { test, expect } = require('@playwright/test');

test('POC - verify homepage loads', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example Domain/);

  console.log('POC executed successfully');
});