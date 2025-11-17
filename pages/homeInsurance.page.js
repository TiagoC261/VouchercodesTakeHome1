import { expect } from '@playwright/test';

export class HomeInsurance {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;

    this.getQuotesBtn = page.getByRole('link', { name: 'Get Your Quotes' });
    this.retrieveQuotesBtn = page.getByRole('link', { name: 'Retrieve Previous Quotes' });
    this.homeInsurnaceLink = page.getByRole('button', {name: /insurance\/home/i});
    this.postcodeInput = page.locator('[data-test="postcode"]');
    this.selectAddress = page.getByRole('button').nth(4);
    this.ownOrRentOption = page.locator('[data-test="property_owned_true"]');
    this.whatSortProperty = page.locator('[data-test="property_sort_H"]').getByText('House');
    this.typeOfProperty = page.locator('[data-test="property_type_T"]').getByText('Terrace');
    this.howManyRooms = page.locator('[data-test="property_bedrooms"]');
    this.howManyRooms1 = page.locator('[data-test="property_bathrooms"]');
    this.howManyRooms2 = page.locator('[data-test="property_livingrooms"]');
    this.howManyRooms3 = page.locator('[data-test="property_otherooms"]');
    this.approximateYear = page.locator('[data-test="property_year"]');
    this.roofMadeOf = page.locator('[data-test="property_roof_made_TI"]');
    this.roofFlat = page.locator('[data-test="property_flat_roof_false"]').getByText('No')
    this.continueBtn = page.locator('[data-test="next_btn"]')


    }

  async GetQuotes () {
    await expect(this.getQuotesBtn).toBeVisible();
    await this.getQuotesBtn.click();

    await expect.this.homeInsurnaceLink.toBeVisible();
  }
}