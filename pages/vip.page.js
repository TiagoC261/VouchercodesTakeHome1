import { expect } from '@playwright/test';

export class VIPPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;

    // Locators for vip search
    this.VIPBtn = page.getByRole('button', { name: 'VIP' });
    this.joinNowbtn = page.locator('header').getByRole('button', { name: 'Join VIP for FREE' });
    this.emailBox = page.getByRole('textbox', { name: 'Email' });
    this.passwordBox = page.getByRole('textbox', { name: 'Password' });
    this.sendUpdates = page.getByRole('checkbox', { name: 'Send me VIP updates and the' });
    this.joinVipbtn = page.locator('#app-drawer-container').getByRole('button', { name: 'Join VIP for FREE' });

  }

  // Opens join VIP page  
  async SelectVIP() {
    await this.VIPBtn.click();
    await expect(this.VIPBtn).toBeVisible();

    await this.joinNowbtn.click();
    await expect(this.joinNowbtn).toBeVisible();

    await expect(this.emailBox).toBeVisible();
    await expect(this.passwordBox).toBeVisible();
  }

  async FillLoginDetails() {
    await this.emailBox.fill('test@test.com');
    await this.passwordBox.fill('pass');
  }

  //Selects update check box
  async SendUpdateCheck(){
    await expect(this.sendUpdates).toBeVisible();
    await this.sendUpdates.click();
  }

    //Clicks to submit details  
  async SubmitVIPReg() {
    await expect(this.joinVipbtn).toBeVisible();
    await this.joinVipbtn.click();
  }
}