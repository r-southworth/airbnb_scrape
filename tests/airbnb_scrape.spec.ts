import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Location Anywhere' }).click();
  await page.getByTestId('structured-search-input-field-query').click();
  await page.getByTestId('structured-search-input-field-query').fill('Costa Rica');
  await page.getByTestId('option-0').getByText('Costa Rica').click();
  await page.getByTestId('structured-search-input-search-button').click();

  const listings = await page.$$eval('.cy5jw6o.dir.dir-ltr', all_items => {
  const data: any [] = [];
  all_items.forEach(listing =>{
    const id = listing.querySelector('.t1jojoys.dir.dir-ltr')?.id;
    data.push({id});
  });
  return data;
});
  var nextpage = await page.getByRole('button', { name: 'Next' });
  console.log(nextpage.isEnabled);
  while (nextpage.isEnabled) {
    await page.getByRole('link', { name: 'Next' }).click();
    const listings = await page.$$eval('.cy5jw6o.dir.dir-ltr', all_items => {
      const data: any [] = [];
      all_items.forEach(listing =>{
        const id = listing.querySelector('.t1jojoys.dir.dir-ltr')?.id;
        data.push({id});
      });
      return data;
    });
    nextpage = await page.getByRole('button', { name: 'Next' });
    console.log(nextpage.isEnabled);
  }
console.log(listings);

});

