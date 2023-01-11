import { test, expect } from '@playwright/test';

//create an empty list of listing results
var listings: string [] = []

test('get listings', async ({ page, context }) => {
  //go to airbnb site
  await page.goto('https://www.airbnb.com/');

  //close a popup if it happens to come up
  page.getByRole('button', { name: 'Close' }).click();

  //ask for search area
  //const searchArea = 

  await page.getByRole('button', { name: 'Location Anywhere' }).click();
  await page.getByTestId('structured-search-input-field-query').click();
  await page.getByTestId('structured-search-input-field-query').fill('Costa Rica');
  await page.getByTestId('option-0').getByText('Costa Rica').click();
  await page.getByTestId('structured-search-input-search-button').click();
  await page.waitForLoadState('networkidle');

  //find the first image on the page (used to check if page has loaded)
  const listingimage = page.locator('._6tbg2q');

  //create an empty list of listing results
  //const listings: string [] = []

  //find the total number of pages from search results
  const totalPages = await page.locator('a._833p2h').last().textContent();
  var numTotalPages: number
  
  if (totalPages == null){
    numTotalPages = 1;
  } else {
    numTotalPages = +totalPages
  }

  //On each page of search results take the id of each listing and add it to our listings variable
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
    listings.push(...newlistings);

    //check if we are on the last page, if not go to next page
    if (i != (numTotalPages-1)){
    await page.getByRole('link', {name: 'Next'}).click();
    } 
  }

console.log(listings[listings.length-1]);
var cleanliness: string

async function goToPage (id: string) {
  const url = 'https://www.airbnb.com/rooms/' + id;
  //const listingPagePromise = context.waitForEvent('page');
  const listingPage = await context.newPage();
  await listingPage.goto(url);
  for (let i=0; i<10; i++){
  listingPage.getByRole('button', { name: 'Close' }).click();
  await listingPage.waitForLoadState('networkidle');
  
  
  //const url = 'https://www.airbnb.com/rooms/' + id;
  //await page.goto(url);
  //await page.waitForLoadState('networkidle');
  //page.getByRole('button', { name: 'Close' }).click();
  cleanliness = await listingPage.innerText('._4oybiu');
  if (cleanliness != undefined){
    break;
  };
  };
  console.log(cleanliness);
}

// just for testing a single page
const testListing = listings[0];
const listingId = testListing.substring(6);


await goToPage(listingId);

// Add back for iterating over all the pages
// listings.forEach(listing => {
//   const id = listing.substring(6);
//   goToPage(id);
// });

});