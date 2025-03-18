import { Page, Locator } from '@playwright/test';
import { Teszteljukle } from '../models/types';

export class TeszteljuklePage {
  TitleMessage() {
    throw new Error('Method not implemented.');
  }
  static openTeszteljuklePage() {
    throw new Error('Method not implemented.');
  }
  openTeszteljuklePage() {
    throw new Error('Method not implemented.');
  }
  readonly page: Page;
  readonly Title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.TitleMessage = page.locator('[class="title"]')
  }

}