import { expect } from '@playwright/test';

export class RestaurantVouchersPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;

    // Locators for resturant search
    this.categoriesBtn = page.getByRole('button', { name: 'Categories' });
    this.restaurantsLink = page.getByRole('link', { name: /Restaurants icon Restaurants/i });
    this.locationInput = page.getByRole('textbox', { name: 'Location' });
    this.findBtn = page.getByRole('button', { name: /Find restaurants vouchers/i });
    this.dayBox = page.getByRole('combobox', { name: 'Day' });
    this.peopleBox = page.getByRole('combobox', { name: 'People' });
    this.voucherButtons  = page.getByRole('button', { name: /get voucher/i });
  }

  //Opens restaurant page
  async OpenRestaurants() {
    await expect(this.categoriesBtn).toBeVisible();
    await this.categoriesBtn.click();

    await expect(this.restaurantsLink).toBeVisible();
    await this.restaurantsLink.click();

    //Checking that all options are visible before the next step
    await expect(this.locationInput).toBeVisible();
    await expect(this.dayBox).toBeVisible();
    await expect(this.peopleBox).toBeVisible();
    await expect(this.findBtn).toBeVisible();
  }

  /** @param {string} city */
  async SearchRestaurantsByCity(city) {
    await expect(this.locationInput).toBeVisible();
    await this.locationInput.fill(city);
  }

  async SelectDay(dayLabel) {
    await expect(this.dayBox).toBeVisible();
    await this.dayBox.selectOption({ label: String(dayLabel) });
  }

  async SelectPeople(peopleLabel) {
    await expect(this.peopleBox).toBeVisible();
    await this.peopleBox.selectOption({ label: String(peopleLabel) });
  }
  async StartSearch() {
    await this.findBtn.click();
  }
  async HasResults() {
    const count = await this.voucherButtons.count();
    expect(count).toBeGreaterThan(0);                
    await expect(this.voucherButtons.first()).toBeVisible();
  }
}