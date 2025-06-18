import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { InventoryPage } from '../pageObjects/InventoryPage';

test('User can add and remove an item from the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();

  const item = page.locator('.inventory_item_name');
  await expect(item).toHaveText('Sauce Labs Backpack');

  await page.click('[data-test="remove-sauce-labs-backpack"]');
  await expect(page.locator('.cart_item')).toHaveCount(0);
});
