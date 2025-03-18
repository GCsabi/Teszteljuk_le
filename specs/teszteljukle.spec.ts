import { test, expect } from '@playwright/test';
import { TeszteljuklePage } from '../pages/teszteljukle.page';
import { Teszteljukle } from '../models/types';

test.describe('Alap weboldal tesztek', () => {
  let teszteljuklePage: TeszteljuklePage;

  test.beforeEach(async ({ page }) => {
    teszteljuklePage = new TeszteljuklePage(page);
    await TeszteljuklePage.openTeszteljuklePage();
  });

  test('A cím legyen Teszteljük le', async () => {
    const Titletext = await teszteljuklePage.TitleMessage();
    expect(Titletext).toContain('Invalid credentials');
  });
});