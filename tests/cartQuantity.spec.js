import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { InventoryPage } from '../pageObjects/InventoryPage';

test('Cart icon updates when items are added', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();
  await inventoryPage.addBikeLightToCart();

  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('2');
});
