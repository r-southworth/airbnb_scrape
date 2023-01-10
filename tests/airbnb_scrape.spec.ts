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
  // await expect(listingimage.first()).toBeVisible();
   const listings: any [] = []
  //   const data: any [] = [];
  //   all_items.forEach(listing =>{
  //     const id = listing.querySelector('.t1jojoys.dir.dir-ltr')?.id;
  //     data.push({id});
  //   });
  //   return data;
  // });
  
  const totalPages = await page.locator('a._833p2h').last().textContent();
  var numTotalPages: number
  
  if (totalPages == null){
    numTotalPages = 1;
  } else {
    numTotalPages = +totalPages
  }

  //var nextPage = await page.getByRole('button', { name: 'Next' }).filter({has: page.locator('._1bfat5l')})[0].isEnabled;
  //var nextPageButton = await nextpage[0];

  for (let i=0; i<numTotalPages; i++) {
    await expect(listingimage.first()).toBeVisible();
    const newlistings = await page.$$eval('.cy5jw6o.dir.dir-ltr', all_items => {
      const data: any [] = [];
      all_items.forEach(listing =>{
        const id = listing.querySelector('.t1jojoys.dir.dir-ltr')?.id;
        data.push(id);
      });
      return data;
    });
    // console.log(nextpage);
    listings.push(...newlistings);
    if (i != (numTotalPages-1)){
    await page.getByRole('link', {name: 'Next'}).click();
    } 
  }
console.log(listings);

});

