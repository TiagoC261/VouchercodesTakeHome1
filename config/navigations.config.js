import { expect } from '@playwright/test';

export class HomepageNavigation {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;

    //Compare insurance 
    this.compareInsuranceBtn = page.getByRole('button', { name: 'Compare Insurance NEW' });
    this.homeInsuranceBtn = page.getByRole('link', { name: 'House icon Home Insurance' });
    this.carInsuranceBtn = page.getByRole('link', { name: 'Car icon Car Insurance' });
    this.petinsturanceBtn = page.getByRole('link', { name: 'Pet icon Pet Insurance' });
    this.travelInsurance = page.getByRole('link', { name: 'Aeroplane icon Travel' });

    //Resturant navigations
    this.categoriesBtn = page.getByRole('button', { name: 'Categories' });
    this.restaurantsLink = page.getByRole('link', { name: /Restaurants icon Restaurants/i });

    // Locators for vip search
    this.VIPBtn = page.getByRole('button', { name: 'VIP' });
    this.joinNowbtn = page.locator('header').getByRole('button', { name: 'Join VIP for FREE' });

  }
  
  //Opens restaurant page
    async OpenRestaurants() {
        await expect(this.categoriesBtn).toBeVisible();
        await this.categoriesBtn.click();

        await expect(this.restaurantsLink).toBeVisible();
        await this.restaurantsLink.click();
        await expect(page).toHaveURL(/restaurant-vouchers\/search/i);

    }
    async SelectVIP() {
        await this.VIPBtn.click();
        await expect(this.VIPBtn).toBeVisible();
        await expect(page).toHaveURL(/vip\/join/i)
    }

    async OpenHomeInsurance(){
        await this.compareInsuranceBtn.click();
        await expect(this.homeInsuranceBtn).toBeVisible();
        await (this.homeInsuranceBtn).click();
        await expect(page).toHaveURL(/home-insurance-ui\/\?step=1/);
        
    }

}