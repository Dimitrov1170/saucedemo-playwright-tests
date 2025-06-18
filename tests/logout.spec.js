import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { MenuPage } from '../pageObjects/MenuPage';

test('User can log out successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MenuPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await menuPage.logout();

  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('#login-button')).toBeVisible();
});
