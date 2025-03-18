import { test, expect } from '@playwright/test';
import { TeszteljuklePage } from '../pages/teszteljukle.page';

test.describe('Alap weboldal tesztek', () => {
  test('Megnyitás és cím ellenőrzése', async ({ page }) => {
    const teszteljuklePage = new TeszteljuklePage(page);
    await teszteljuklePage.open();
    await expect(teszteljuklePage.titleMessage).toHaveText('Teszteljük le');
  });
});
