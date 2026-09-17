import { expect } from '@playwright/test';

export class DxTechPage {
  constructor(page) {
    this.page = page;

    // Login
    this.email = page.getByRole('textbox', { name: 'Email address' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.continueBtn = page.getByRole('button', { name: 'Continue' });
  }

  async login() {
    await this.page.goto('https://app.dxtech.ai/#/login');
    await this.email.fill('gploughman@dxagency.com');
    await this.password.fill('Bruinscup72!');
    await this.continueBtn.click();
  }


}