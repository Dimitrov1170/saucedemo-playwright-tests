import { test, expect } from '@playwright/test';

test('User can add and remove an item from the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add item to cart
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // Click cart icon
  await page.click('.shopping_cart_link');

  // Verify item is in cart
  const item = await page.locator('.inventory_item_name');
  await expect(item).toHaveText('Sauce Labs Backpack');

  // Remove item
  await page.click('[data-test="remove-sauce-labs-backpack"]');

  // Assert item is gone
  await expect(page.locator('.cart_item')).toHaveCount(0);
});
