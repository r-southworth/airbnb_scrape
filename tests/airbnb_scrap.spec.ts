import { test, expect } from '@playwright/test';


test('get listings', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Location Anywhere' }).click();
  await page.getByTestId('structured-search-input-field-query').click();
  await page.getByTestId('structured-search-input-field-query').fill('Costa Rica');
  await page.getByTestId('option-0').getByText('Costa Rica').click();
  await page.getByTestId('structured-search-input-search-button').click();
  await page.waitForLoadState('networkidle');

  const nums = await page.locator('a._833p2h').last().textContent();
  console.log(nums);



});

