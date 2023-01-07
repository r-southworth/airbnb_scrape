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

  const listingimage = page.locator('._6tbg2q');
  await expect(listingimage.first()).toBeVisible();
  const listings = await page.$$eval('.cy5jw6o.dir.dir-ltr', all_items => {
    const data: any [] = [];
    all_items.forEach(listing =>{
      const id = listing.querySelector('.t1jojoys.dir.dir-ltr')?.id;
      data.push({id});
    });
    return data;
  });
  
  var nextPage = await page.getByRole('link', { name: 'Next' });
  //var nextPageButton = await nextpage[0];

  console.log(nextPage);
  if (await nextPage.isEnabled) {
    await page.getByRole('link', { name: 'Next' }).click();
    await expect(listingimage.first()).toBeVisible();
    const newlistings = await page.$$eval('.cy5jw6o.dir.dir-ltr', all_items => {
      const data: any [] = [];
      all_items.forEach(listing =>{
        const id = listing.querySelector('.t1jojoys.dir.dir-ltr')?.id;
        data.push({id});
      });
      return data;
    });
    // nextpage = await page.getByRole('link', { name: 'Next' });
    // console.log(nextpage);
    listings.push(newlistings);
  }
console.log(listings);

});

