
import { test, expect } from '@playwright/test';

test.describe.parallel('Parallel tests', () => {
  test('Test A', async ({ page }) => {
    await page.goto('https://example.com');
    expect(await page.title()).toContain('Example');
  });

  test('Test B', async ({ page }) => {
    await page.goto('https://playwright.dev');
    expect(await page.title()).toContain('Playwright');
  });
});
