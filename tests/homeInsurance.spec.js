import {test, expect} from '@playwright/test'
import { AcceptCookiesIfPresent } from '../config/cookies.config'
import { HomepageNavigation } from '../config/navigations.config'


test.beforeEach(async({page}) => {
    await page.goto('/');
    await AcceptCookiesIfPresent(page);

});



test.describe('Navigate to home Insurance Page', () => {
        test.describe.configure({retries: 1});
    test.beforeEach(async ({page}) => {
        const homeInsurancePage = new HomepageNavigation(page);
        await homeInsurancePage.OpenHomeInsurance();
    });

    test('Get Home Insurance Quotes', async ({page}) => {


    })
});