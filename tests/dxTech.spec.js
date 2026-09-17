import { test } from '../fixtures/dxTechFixture';

test('Complete DxTech flow', async ({ dxTechPage }) => {
    await dxTechPage.login();
    await dxTechPage.publishersFlow();
    await dxTechPage.placementsFlow();
    await dxTechPage.appsFlow();
    await dxTechPage.listsFlow();
});