import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { InventoryPage } from '../pageObjects/InventoryPage';
import { CheckoutPage } from '../pageObjects/CheckoutPage';

test('User can complete a full checkout flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();

  await checkoutPage.startCheckout();
  await checkoutPage.fillCustomerInfo('Georgi', 'Dimitrov', '1000');

  await expect(page).toHaveURL(/.*checkout-step-two/);
  await checkoutPage.finishCheckout();
  await checkoutPage.assertOrderComplete();
});
