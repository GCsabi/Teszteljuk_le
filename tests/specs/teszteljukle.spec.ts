import { test, expect } from '@playwright/test';
import { TeszteljuklePage } from '../pages/teszteljukle.page';

test.describe('Alap weboldal tesztek', () => {
  test('Megnyitás és cím ellenőrzése', async ({ page }) => {
    const teszteljuklePage = new TeszteljuklePage(page);
    await teszteljuklePage.open();
    await expect(teszteljuklePage.titleMessage).toHaveText('Teszteljük le');
    await expect(teszteljuklePage.textMessage).toHaveText('Magyar szoftvertesztelő közösség, melynek a célja, hogy segítséget nyújtson a szoftvertesztelővé válás rögös útján. Legyél wannabe, vagy expert, nálunk támogató közösségre találsz. Szakmai tippek-trükkök, tapasztalatcsere, kapcsolattartás, közös fejlődés.');
  });
});
