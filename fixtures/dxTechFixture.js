import { test as base } from '@playwright/test';
import { DxTechPage } from '../pages/DxTechPage';

export const test = base.extend({
  dxTechPage: async ({ page }, use) => {
    await use(new DxTechPage(page));
  },
});

export { expect } from '@playwright/test';