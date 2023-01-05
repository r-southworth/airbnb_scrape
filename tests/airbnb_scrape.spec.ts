import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Location Anywhere' }).click();
  await page.getByTestId('structured-search-input-field-query').click();
  await page.getByTestId('structured-search-input-field-query').fill('Costa Rica');
  await page.getByTestId('option-0').getByText('Costa Rica').click();
  await page.getByTestId('structured-search-input-search-button').click();
  //await page.getByRole('link', { name: '2' }).click();
  //await page.getByRole('link', { name: '3' }).click();
  //await page.getByRole('link', { name: '15' }).click();
  
  // const page4Promise = page.waitForEvent('popup');
  // await page.locator('div:nth-child(14) > .c4mnd7m > .c1l1h97y > div > div > div > .cy5jw6o > .lwy0wad > .m1v28t5c > .c14dgvke > .cnjlbcx > .s1yvqyx7 > div > .awuxh4x > .cw9aemg > .c14whb16 > a').first().click();
  // const page4 = await page4Promise;
  // page4.getByRole('button', { name: 'Close' }).click();
  // const cleanliness = await page4.getByText('Cleanliness').click();
  // console.log('Cleanliness Score', cleanliness);
const listings = await page.$$eval('.cy5jw6o  dir dir-ltr', all_items => {
  const data: any [] = [];
  all_items.forEach(listing =>{
    const name = listing.querySelector('.t1jojoys dir dir-ltr')?.textContent;
    const id = listing.querySelector('.t1jojoys dir dir-ltr')?.id;
    data.push({ name, id});
  });
  return data;
});
console.debug(listings);

});

