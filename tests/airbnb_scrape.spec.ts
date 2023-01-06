import { test, expect } from '@playwright/test';


test('get listings', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Location Anywhere' }).click();
  await page.getByTestId('structured-search-input-field-query').click();
  await page.getByTestId('structured-search-input-field-query').fill('Costa Rica');
  await page.getByTestId('option-0').getByText('Costa Rica').click();
  await page.getByTestId('structured-search-input-search-button').click();
  var nextpage = await page.$$eval('._833p2h', numpages =>{
       const nums: any [] = [];
       numpages.forEach(num =>{
        var pagenum: number = +num.innerHTML;
        nums.push({pagenum});
       });
       return nums;
    });
    console.log(nextpage);
//   const nextpage = await page.$$eval('._833p2h', numpages => {
//     const nums: any [] = [];
//     numpages.forEach(num =>{
//      var pagenum: number = +num.innerHTML;
//      nums.push({pagenum});
//     })
//     const totalpages = nums.sort[(nums.length - 1)];
//     for (let i=0; i <= totalpages; i++){
//       await page.getByRole('link', { name: 'Next' }).click();
//         listings = await page.$$eval('.cy5jw6o.dir.dir-ltr', all_items => {
//           const data: any [] = [];
//           all_items.forEach(listing =>{
//             const id = listing.querySelector('.t1jojoys.dir.dir-ltr')?.id;
//             data.push({id});
//           });
//           return data;
//         });
//      }
//  });

//  var listings: any [] = []
//  const totalpages = await nextpage.sort[(nextpage.length - 1)]
//  for (let i=0; i <= totalpages; i++){
//   await page.getByRole('link', { name: 'Next' }).click();
//     listings = await page.$$eval('.cy5jw6o.dir.dir-ltr', all_items => {
//       const data: any [] = [];
//       all_items.forEach(listing =>{
//         const id = listing.querySelector('.t1jojoys.dir.dir-ltr')?.id;
//         data.push({id});
//       });
//       return data;
//     });
//  }

//   const listings = await page.$$eval('.cy5jw6o.dir.dir-ltr', all_items => {
//   const data: any [] = [];
//   all_items.forEach(listing =>{
//     const id = listing.querySelector('.t1jojoys.dir.dir-ltr')?.id;
//     data.push({id});
//   });
//   return data;
// });
  // var nextpage = await page.$$eval('._833p2h', numpages =>{
  //    const nums: any [] = [];
  //    numpages.forEach(num =>{
  //     var pagenum: number = +num.innerHTML;
  //     nums.push({pagenum});
  //    })
  // });
  // console.log(nextpage.isEnabled());
  // while (nextpage.isEnabled()) {
  //   await page.getByRole('link', { name: 'Next' }).click();
  //   const listings = await page.$$eval('.cy5jw6o.dir.dir-ltr', all_items => {
  //     const data: any [] = [];
  //     all_items.forEach(listing =>{
  //       const id = listing.querySelector('.t1jojoys.dir.dir-ltr')?.id;
  //       data.push({id});
  //     });
  //     return data;
  //   });
  //   //nextpage = await page.getByRole('button', { name: 'Next' });
  //   console.log(nextpage.isEnabled());
  // }
//console.log(listings);

});

