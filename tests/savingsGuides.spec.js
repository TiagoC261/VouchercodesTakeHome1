import { test, expect } from '@playwright/test';
import { AcceptCookiesIfPresent } from '../config/cookies.config';
import { SavingGuides } from '../pages/savingsGuides.page.js';

test.beforeEach(async ({page}) => {
  await page.goto('/'); 
  await AcceptCookiesIfPresent(page);

});

test.describe('Navigate to Saving guides', () =>{
    test.describe.configure({retries: 1});
test.beforeAll(async({page}) => {
    const savingsGuidesPage = new SavingGuides(page);
    await savingsGuidesPage.navigateSavingsGuide();
    })
})

test('Navigate to Saving Guide Page', async ({page}) => {
    const savingsGuidesPage = new SavingGuides(page);
    await savingsGuidesPage.navigateSavingsGuide();
    await savingsGuidesPage.savingGuideFirstOption();
    

})
