import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  await page.getByRole('button', { name: 'Location Anywhere' }).click();
  await page.getByTestId('structured-search-input-field-query').click();
  await page.getByTestId('structured-search-input-field-query').fill('Costa Rica');
  await page.getByTestId('option-0').getByText('Costa Rica').click();
  await page.getByRole('tab', { name: 'I\'m flexible' }).click();
  await page.getByRole('tab', { name: 'I\'m flexible' }).click();
  await page.getByTestId('structured-search-input-search-button').click();
  await page.getByRole('link', { name: '2' }).click();
  await page.getByRole('link', { name: '3' }).click();
  await page.getByRole('link', { name: '15' }).click();
});