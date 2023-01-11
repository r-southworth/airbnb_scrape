import { test, expect } from '@playwright/test';


test('generator', async ({ page }) => {
  const page5Promise = page.waitForEvent('popup');
  await page.locator('.rfexzly').first().click();
  const page5 = await page5Promise;
  await page5.getByRole('heading', { name: 'Entire home hosted by Jerome' }).click();
  await page5.locator('._bgq2leu').first().click();

  await page.getByRole('button', { name: 'Close' }).click();
  const page9Promise = page.waitForEvent('popup');
  await page.locator('.rfexzly').first().click();
  const page9 = await page9Promise;


  await page.goto('https://www.airbnb.com/');
  await page.getByRole('button', { name: 'Close' }).click();
  await page1.goto('https://www.airbnb.com/rooms/799602378745952167');
  await page1.goto('https://www.airbnb.com/rooms/799602378745952167?source_impression_id=p3_1673455314_s9MOmmmRUQmc9C9u');
  await page2.goto('https://www.airbnb.com/rooms/46545881');
  await page2.goto('https://www.airbnb.com/rooms/46545881?source_impression_id=p3_1673455370_jkf96v7M8dtfNPkq');
  await page2.getByRole('button', { name: 'Close' }).click();
  await page2.locator('._4oybiu').first().click();
});

