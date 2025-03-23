import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, devices, Page, Browser } from 'playwright';
import { strict as assert } from 'assert';
import data from "../../test_data/data.json";

let browser: Browser;
let page: Page;


Given('megnyitom a Chrome böngészőt az Android emulátorban', async function() {
  browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext({
    ...devices['Pixel 5'],
    locale: 'hu-HU'
  });
  page = await context.newPage();
});

Then('betöltöm a {string} weboldalt', async function(url: string) {
  await page.goto(url, { waitUntil: 'networkidle' });
});

// Pozitív scenario
When('a weboldal címének tartalmaznia kell {string}', async function(expectedTitle: string) {
  const title = await page.title();
  const expectedTitleFromData = data.Positive.expectedTitle;
  assert.ok(title.includes(expectedTitleFromData), `A cím nem tartalmazza: ${expectedTitleFromData}, tényleges cím: ${title}`);
});

Then('az oldalon lennie kell {string} szövegnek', async function(expectedText: string) {
  const content = await page.textContent('body');
  const expectedTextFromData = data.Positive.expectedText;
  assert.ok(content && content.includes(expectedTextFromData), `Az oldal nem tartalmazza: ${expectedTextFromData}`);
});

// Negatív scenario

When('a weboldal címének nem kell tartalmaznia {string}', async function(expectedTitle: string) {
  const title = await page.title();
  const expectedTitleFromData = data.Negative.expectedTitle;
  assert.notEqual(!title.includes(expectedTitleFromData), `A cím nem tartalmazza: ${expectedTitleFromData}, tényleges cím: ${title}`);
});

Then('az oldalon nem kell lennie {string} szövegnek', async function(expectedText: string) {
  const content = await page.textContent('body');
  const expectedTextFromData = data.Negative.expectedText;
  assert.notEqual(content && !content.includes(expectedTextFromData), `Az oldal tartalmazza: ${expectedTextFromData}`);
});

Then('bezárom a böngészőt', async function() {
  await browser.close();
});