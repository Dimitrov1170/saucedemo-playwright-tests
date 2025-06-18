import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';

test('Successful login redirects to inventory page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();
});
