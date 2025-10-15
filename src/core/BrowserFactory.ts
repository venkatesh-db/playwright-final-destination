
import { chromium, Browser, Page } from '@playwright/test';

export class BrowserFactory {
  private static browser: Browser | null = null;

  static async getBrowser(headless = true): Promise<Browser> {
    if (!this.browser) {
      this.browser = await chromium.launch({ headless });
    }
    return this.browser;
  }

  static async newPage(headless = true): Promise<Page> {
    const browser = await this.getBrowser(headless);
    const context = await browser.newContext();
    return context.newPage();
  }
}
