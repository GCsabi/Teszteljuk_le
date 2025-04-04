import { Page } from '@playwright/test';

export class TeszteljuklePage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://teszteljukle.hu');
  }

  titleMessage = this.page.locator('.title');
  textMessage = this.page.locator('//*[@id="project-modules"]//span[contains(., "Magyar szoftvertesztelő közösség")]');
  Button = this.page.locator('.button-module');
}
