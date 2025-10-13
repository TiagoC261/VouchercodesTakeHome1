import { test, expect } from '@playwright/test';
import { VIPPage } from '../pages/vip.page.js';
import { AcceptCookiesIfPresent } from '../config/cookies.config.js';

test.beforeEach(async ({page}) => {
  await page.goto('/'); 
  await AcceptCookiesIfPresent(page);

});

//Test Scenario 1 - Joining VIP
test.describe('Joining VIP test', () => {
  test.describe.configure({ retries: 1 });
  test.beforeEach(async ({ page }) => {
    const joinPage = new VIPPage(page);
    await joinPage.SelectVIP();
  });

  test('Filling VIP details', async ({ page }) => {
    const joinPage = new VIPPage(page);

    await joinPage.FillLoginDetails();  
    await joinPage.SendUpdateCheck();
    await joinPage.SubmitVIPReg();

    });
});