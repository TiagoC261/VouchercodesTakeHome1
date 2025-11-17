import {test, expect} from '@playwright/test';

export class SavingGuides {
    /** @param {import('@playwright/test').Page} page */
    constructor(page){
        this.page = page;


        //locators
        this.savingGuideBtn = page.getByRole('button', { name: 'Savings Guides' });
        this.viewAllBtn = page.getByRole('link', { name: 'View all', exact: true });
        this.savingGuidestitle = page.getByRole('heading', { name: 'Savings Guides' });
        this.savingGuidesAndReports = page.getByText('ReportShopping for Christmas 2025: Black FridaySam DaveyReportShopping for');
    }
    async navigateSavingsGuide(){
        await expect(this.savingGuideBtn).toBeVisible();
        await this.savingGuideBtn.click();

        await expect(this.viewAllBtn).toBeVisible();
        await this.viewAllBtn.click();
    }
    async savingGuideFirstOption(){
        await expect(this.savingGuidestitle).toHaveText('Savings Guides');
        await this.savingGuidesAndReports.click();
    }
}