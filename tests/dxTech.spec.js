import { test } from '../fixtures/dxTechFixture';

test('Complete DxTech flow', async ({ dxTechPage }) => {
    await dxTechPage.login();

});