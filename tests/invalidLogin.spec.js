const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { invalidUser } = require('../utils/testData');

test('Invalid Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    invalidUser.username,
    invalidUser.password
  );

  // IMPORTANT: wait for UI result, not URL
  const errorMessage = page.locator('.oxd-alert-content-text');

  await expect(errorMessage).toBeVisible();

  await expect(errorMessage).toContainText(invalidUser.expectedError);
});