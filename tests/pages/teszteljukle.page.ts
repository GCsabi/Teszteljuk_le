import { Page } from '@playwright/test';

export class TeszteljuklePage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://teszteljukle.hu');
  }

  titleMessage = this.page.locator('.title');
}
