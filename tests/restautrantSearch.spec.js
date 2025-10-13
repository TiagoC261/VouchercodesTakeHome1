import { test, expect } from '@playwright/test';
import { RestaurantVouchersPage } from '../pages/restaurantVouchers.page.js';
import { AcceptCookiesIfPresent } from '../config/cookies.config.js';

test.beforeEach(async ({page}) => {
  await page.goto('/'); 
  await AcceptCookiesIfPresent(page);

});


//Test Scenario 1 London Resturant - Positive Test Scenario
test.describe('Search for local restaurants', () => {
    test.describe.configure({ retries: 1 });
  test.beforeEach(async ({ page }) => {
    const restaurantPage = new RestaurantVouchersPage(page);
    await restaurantPage.OpenRestaurants();
  });

  test('Search Restaurants in London, Date: Any, People: Any', async ({ page }) => {
    const restaurantPage = new RestaurantVouchersPage(page);
    const city = 'London'

    await restaurantPage.SearchRestaurantsByCity(city);  
    await restaurantPage.StartSearch();

    await expect(page).toHaveURL(/restaurant-vouchers\/search/i);
    const url = new URL(page.url());
    expect(url.searchParams.get('rl')).toBe(city);
    });
});

//Test Scenario 2 Paris Resturants- Negative test scenario
test.describe('Search for local restaurants 2', () => {
    test.describe.configure({ retries: 1 });
  test.beforeEach(async ({ page }) => {
    const restaurantPage = new RestaurantVouchersPage(page);
    await restaurantPage.OpenRestaurants();
  });

  test('Search Restaurants in Paris, Date: Today, People: 3', async ({ page }) => {
    const restaurantPage = new RestaurantVouchersPage(page);
    const city = 'Paris'
    const people = '3'
    const day = 'Today'

    await restaurantPage.SearchRestaurantsByCity(city);
    await restaurantPage.SelectDay(day);
    await restaurantPage.SelectPeople(people);  
    await restaurantPage.StartSearch();

    await expect(page).toHaveURL(/restaurant-vouchers\/search/i);
    const url = new URL(page.url());
    expect(url.searchParams.get('rl')).toBe('Fail'); //intentional fail 
    });
});