
import { Page } from '@playwright/test';

export interface PerformanceStrategy {
  analyze(page: Page): Promise<number>;
}

export class TimingStrategy implements PerformanceStrategy {
  async analyze(page: Page): Promise<number> {
    const timing = await page.evaluate(() => JSON.stringify(window.performance.timing));
    const data = JSON.parse(timing);
    return data.loadEventEnd - data.navigationStart;
  }
}
