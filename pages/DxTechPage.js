import { expect } from '@playwright/test';

export class DxTechPage {
  constructor(page) {
    this.page = page;

    // Login
    this.email = page.getByRole('textbox', { name: 'Email address' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.continueBtn = page.getByRole('button', { name: 'Continue' });

    // Common
    this.emptyButton = page.getByRole('button').filter({ hasText: /^$/ });

    // Navigation
    this.publishersLink = page.getByRole('link', { name: 'Publishers' });
    this.placementsLink = page.getByRole('link', { name: 'Placements' });
    this.appsLink = page.getByRole('link', { name: 'Apps' });
    this.listsLink = page.getByRole('link', { name: 'Lists' });

    // Publishers
    this.search = page.getByRole('textbox', { name: 'Search' });
    this.dashaLink = page.getByRole('link', { name: 'Dasha Test' });
    this.appsTab = page.getByRole('tab', { name: 'Apps', exact: true });
    this.domainsTab = page.getByRole('tab', { name: 'Domains' });
    this.placementsTab = page.getByRole('tab', { name: 'Placements' });
    this.manageDomains = page.getByRole('button', { name: 'Manage domains' });
    this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
    this.editMenu = page.getByRole('menuitem', { name: 'Edit' });
  }

  async login() {
    await this.page.goto('https://app.dxtech.ai/#/login');
    await this.email.fill('gploughman@dxagency.com');
    await this.password.fill('Bruinscup72!');
    await this.continueBtn.click();
  }


}