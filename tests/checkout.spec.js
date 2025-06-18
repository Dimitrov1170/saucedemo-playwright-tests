import { test, expect } from '@playwright/test';

test('User can complete a full checkout flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add item to cart and go to cart
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');

  // Checkout Step One
  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', 'Georgi');
  await page.fill('[data-test="lastName"]', 'Dimitrov');
  await page.fill('[data-test="postalCode"]', '1000');
  await page.click('[data-test="continue"]');

  // Checkout Step Two - confirm overview page
  await expect(page).toHaveURL(/.*checkout-step-two/);
  await expect(page.locator('.summary_total_label')).toContainText('Total');

  // Finish checkout
  await page.click('[data-test="finish"]');

  // Confirmation page
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
