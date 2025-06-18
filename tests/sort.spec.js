import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';

test('Products are sorted by price low to high', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  const sortDropdown = page.locator('[data-test="product-sort-container"]');
  await sortDropdown.selectOption('lohi');

  const prices = await page.$$eval('.inventory_item_price', els =>
    els.map(el => parseFloat(el.textContent.replace('$', '')))
  );

  const sortedPrices = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sortedPrices);
});
