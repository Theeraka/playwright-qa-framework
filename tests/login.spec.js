const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { validUser } = require('../utils/testData');

test('Valid Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    validUser.username,
    validUser.password
  );

  // Verify dashboard URL
  await expect(page).toHaveURL(/dashboard/);

});