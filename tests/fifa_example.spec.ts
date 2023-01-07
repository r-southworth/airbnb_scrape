import {test,expect} from '@playwright/test';

test("Open home page and verify title", async ({page}) => {
    await page.goto('https://www.fifa.com/fifaplus/en/home');
    await expect(page).toHaveTitle('FIFA+');

})

test("Verify Logo", async ({page})=>{
    await page.goto('https://www.fifa.com/fifaplus/en/home');
    const logo = page.locator('[href="/fifaplus/en/home"] img')
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('title', 'Qatar 2022™');
})

test("Verify Links", async ({page})=>{
    const expectedLinks = [
    "NEWS",
    "HIGHLIGHTS",
    "SCORES & FIXTURES",
    "KNOCKOUT",
    "TEAMS",
    "FANTASY",
    "ORIGINALS",
    "ARCHIVE",
    "FIFA FAN FESTIVAL™",
    "FIFA WORLD CUP TROPHY TOUR",
    "FIFA SOUND",
    "FIFA FAN WORLD CUP"
    ]
    
    await page.goto('https://www.fifa.com/fifaplus/en/home');
    const navLinks = page.locator('#mainLinksID a');

    await expect(navLinks.first()).toBeVisible();

    expect(await navLinks.allInnerTexts()).toEqual(expectedLinks);
})