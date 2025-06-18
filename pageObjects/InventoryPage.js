exports.InventoryPage = class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.backpackAddBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.bikeLightAddBtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  }

  async addBackpackToCart() {
    await this.backpackAddBtn.click();
  }

  async addBikeLightToCart() {
  await this.bikeLightAddBtn.click();
}


  async goToCart() {
    await this.cartIcon.click();
  }
};
