import { test, expect } from '@playwright/test';


test('generator', async ({ page }) => {
  const page5Promise = page.waitForEvent('popup');
  await page.locator('.rfexzly').first().click();
  const page5 = await page5Promise;
  await page5.getByRole('heading', { name: 'Entire home hosted by Jerome' }).click();
  await page5.locator('._bgq2leu').first().click();
});

