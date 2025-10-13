import { test, expect } from '@playwright/test';
import { VIPPage } from '../pages/vip.page.js';
import { acceptCookiesIfPresent } from '../config/cookies.config.js';

test.beforeEach(async ({page}) => {
  await page.goto('/'); 
  await acceptCookiesIfPresent(page);

});

//Test Scenario 1 - Joining VIP
test.describe('Joining VIP test', () => {
  test.describe.configure({ retries: 1 });
  test.beforeEach(async ({ page }) => {
    const joinPage = new VIPPage(page);
    await joinPage.selectVIP();
  });

  test('Filling VIP details', async ({ page }) => {
    const joinPage = new VIPPage(page);

    await joinPage.fillLoginDetails();  
    await joinPage.sendUpdateCheck();
    await joinPage.submitVIPReg();

    });
});