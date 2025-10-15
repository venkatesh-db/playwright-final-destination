
import { BrowserFactory } from '../core/BrowserFactory';

export async function teardown() {
  const browser = (BrowserFactory as any).browser;
  if (browser) await browser.close();
}
