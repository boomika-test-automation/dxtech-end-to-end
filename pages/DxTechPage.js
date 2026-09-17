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

    // Placements
    this.aditudeWeb = page.getByRole('link', { name: 'Aditude - Web' });
    this.copyIcon = page.locator('.far.fa-copy');
    this.pricingTab = page.getByRole('tab', { name: 'Pricing' });
    this.demandIntegrationsTab =
      page.getByRole('tab', { name: 'Demand integrations' });
    this.manageIntegrations =
      page.getByRole('button', { name: 'Manage Integrations' });
    this.closeBtn = page.getByRole('button', { name: 'Close' });
    this.targetingTab = page.getByRole('tab', { name: 'Targeting' });
    this.exclusionsTab = page.getByRole('tab', { name: 'Exclusions' });
    this.bidCacheTab =
      page.getByRole('tab', { name: 'Bid cache / Stitcher' });
    this.xpMappingTab =
      page.getByRole('tab', { name: 'XP Parameters Mapping' });
    this.overrideXP =
      page.getByRole('switch', { name: 'Override Publisher XP' });
    this.addXP = page.getByRole('button', { name: '+ Add XP Parameter' });
    this.deleteBtn =
      page.getByRole('button').filter({ hasText: 'delete' });

    // Apps
    this.exportBtn =
      page.getByRole('button', { description: 'Export', exact: true });
    this.columnsBtn =
      page.getByRole('button', { description: 'Columns', exact: true });
    this.statusCheckbox =
      page.getByRole('checkbox', { name: 'Status' });
    this.processedCheckbox =
      page.getByRole('checkbox', { name: 'Processed' });
    this.editAppMenu =
      page.getByRole('menuitem', { name: 'Edit app' });
    this.appRequestsTab =
      page.getByRole('tab', { name: 'App requests' });
    this.last7Days =
      page.getByRole('radio', { name: 'Last 7 days' });
    this.complianceTab =
      page.getByRole('tab', { name: 'Compliance' });

    // Lists
    this.editDescriptionBtn =
      page.getByRole('button', { description: 'Edit', exact: true });
    this.rewriteLink =
      page.getByRole('link', { name: 'Rewrite' });
    this.addRewrite =
      page.getByRole('button', { name: 'Add Rewrite' });
    this.schainLink =
      page.getByRole('link', { name: 'SCHAIN' });
    this.schainRow =
      page.getByRole('row', { name: 'ds 0 Items' });
  }

  async login() {
    await this.page.goto('https://app.dxtech.ai/#/login');
    await this.email.fill('gploughman@dxagency.com');
    await this.password.fill('Bruinscup72!');
    await this.continueBtn.click();
  }

  async publishersFlow() {
    await this.page.getByRole('button', { name: 'Supply' }).click();
    await this.page.getByRole('button', { name: 'Supply' }).click();

    await this.publishersLink.click();
    await this.page.getByRole('main').getByText('Publishers').click();
    await this.page.getByRole('main').getByText('Publishers').hover();

    await this.search.fill('Dasha');
    await this.search.press('Enter');
    await this.dashaLink.click();

    await this.appsTab.click();
    await this.domainsTab.click();
    await this.manageDomains.click();
    await this.cancelBtn.click();

    await this.page.getByRole('table')
      .getByRole('button')
      .filter({ hasText: /^$/ })
      .click();

    await this.editMenu.click();
    await this.cancelBtn.click();
    await this.placementsTab.click();

    await this.page.locator('mat-toolbar')
      .getByRole('button')
      .filter({ hasText: /^$/ })
      .click();
  }

  async placementsFlow() {
    await this.placementsLink.click();
    await this.aditudeWeb.click();
    await this.copyIcon.click();

    await this.pricingTab.click();
    await this.demandIntegrationsTab.click();
    await this.manageIntegrations.click();
    await this.closeBtn.click();

    await this.targetingTab.click();
    await this.exclusionsTab.click();
    await this.bidCacheTab.click();
    await this.xpMappingTab.click();

    await this.overrideXP.click();
    await this.addXP.click();
    await this.deleteBtn.click();
    await this.overrideXP.click();

    await this.emptyButton.click();
  }

  async appsFlow() {
    await this.appsLink.click();

    const downloadPromise = this.page.waitForEvent('download');
    await this.exportBtn.click();
    await downloadPromise;

    await this.columnsBtn.click();
    await this.statusCheckbox.check();
    await this.statusCheckbox.uncheck();
    await this.columnsBtn.click();

    await this.emptyButton.nth(4).click();
    await this.editAppMenu.click();

    await this.emptyButton.click();
    await this.appRequestsTab.click();

    await this.emptyButton.nth(3).click();
    await this.last7Days.click();

    await this.exportBtn.click();
    await this.columnsBtn.click();

    const download1Promise = this.page.waitForEvent('download');
    await this.processedCheckbox.uncheck();
    await download1Promise;

    await this.columnsBtn.click();
    await this.processedCheckbox.check();
    await this.columnsBtn.click();

    await this.emptyButton.nth(3).click();
    await this.complianceTab.click();
  }

  async listsFlow() {
    await this.listsLink.click();

    await this.editDescriptionBtn.click();
    await this.emptyButton.click();

    await this.rewriteLink.click();
    await this.addRewrite.click();
    await this.emptyButton.click();

    await this.schainLink.click();
    await this.schainRow.locator('button').click();
    await this.editMenu.click();
    await this.emptyButton.click();
  }


}