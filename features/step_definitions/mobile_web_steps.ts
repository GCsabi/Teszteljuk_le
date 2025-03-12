import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, devices, Page, Browser } from 'playwright';
import { strict as assert } from 'assert';

let browser: Browser;
let page: Page;

Given('megnyitom a Chrome böngészőt az Android emulátorban', async function() {
  // Indítsuk a böngészőt mobil emulációval
  browser = await chromium.launch({
    headless: false // Fejlesztés közben érdemes látni, mi történik
  });

  // Használjuk a Playwright beépített eszköz-emulációját
  const context = await browser.newContext({
    ...devices['Pixel 5'], // Vagy más támogatott eszköz
    locale: 'hu-HU'
  });
  page = await context.newPage();
});

Then('betöltöm a {string} weboldalt', async function(url: string) {
  await page.goto(url, { waitUntil: 'networkidle' });
});

When('a weboldal címének tartalmaznia kell {string}', async function(expectedTitle: string) {
  const title = await page.title();
  assert.ok(title.includes(expectedTitle), `A cím nem tartalmazza: ${expectedTitle}, tényleges cím: ${title}`);
});

Then('az oldalon lennie kell {string} szövegnek', async function(expectedText: string) {
  const content = await page.textContent('body');
  assert.ok(content && content.includes(expectedText), `Az oldal nem tartalmazza: ${expectedText}`);
});

Then('bezárom a böngészőt', async function() {
  await browser.close();
});