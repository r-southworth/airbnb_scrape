import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  await page.getByRole('button', { name: 'Location Anywhere' }).click();
  await page.getByTestId('structured-search-input-field-query').click();
  await page.getByTestId('structured-search-input-field-query').fill('Costa Ri');
  await page.getByTestId('option-0').locator('div').nth(1).click();
  await page.getByTestId('structured-search-input-search-button').click();
  const page4Promise = page.waitForEvent('popup');
  await page.locator('.rfexzly').first().click();
  const page4 = await page4Promise;
  await page4.getByRole('button', { name: 'Close' }).click();
  const page5Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(2) > .c4mnd7m > .c1l1h97y > div > div > div > .cy5jw6o > .lwy0wad > .m1v28t5c > .c14dgvke > .cnjlbcx > .s1yvqyx7 > div > .awuxh4x > .cw9aemg > .c14whb16 > a').first().click();
  const page5 = await page5Promise;
  const page6Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(3) > .c4mnd7m > .c1l1h97y > div > div > div > .cy5jw6o > .lwy0wad > .m1v28t5c > .c14dgvke > .cnjlbcx > .s1yvqyx7 > div > .awuxh4x > .cw9aemg > .c14whb16 > a').first().click();
  const page6 = await page6Promise;
  const page7Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(4) > .c4mnd7m > .c1l1h97y > div > div > div > .cy5jw6o > .lwy0wad > .m1v28t5c > .c14dgvke > .cnjlbcx > .s1yvqyx7 > div > .awuxh4x > .cw9aemg > .c14whb16 > a').first().click();
  const page7 = await page7Promise;
  const page8Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(5) > .c4mnd7m > .c1l1h97y > div > div > div > .cy5jw6o > .lwy0wad > .m1v28t5c > .c14dgvke > .cnjlbcx > .s1yvqyx7 > div > .awuxh4x > .cw9aemg > .c14whb16 > a').first().click();
  const page8 = await page8Promise;
  const page9Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(6) > .c4mnd7m > .c1l1h97y > div > div > div > .cy5jw6o > .lwy0wad > .m1v28t5c > .c14dgvke > .cnjlbcx > .s1yvqyx7 > div > .awuxh4x > .cw9aemg > .c14whb16 > a').first().click();
  const page9 = await page9Promise;
  const page10Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(7) > .c4mnd7m > .c1l1h97y > div > div > div > .cy5jw6o > .lwy0wad > .m1v28t5c > .c14dgvke > .cnjlbcx > .s1yvqyx7 > div > .awuxh4x > .cw9aemg > .c14whb16 > a').first().click();
  const page10 = await page10Promise;
});