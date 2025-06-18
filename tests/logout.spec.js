import { test, expect } from '@playwright/test';

test('User can log out successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Open menu and logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  // Assertion: back on login page
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
