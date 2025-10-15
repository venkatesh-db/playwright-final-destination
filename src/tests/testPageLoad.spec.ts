

import { test, expect } from '@playwright/test';
import { DIContainer } from '../core/DIContainer';
import { TimingStrategy } from '../core/Strategy';

test('Analyze page load performance', async () => {
  const page = await DIContainer.resolvePage();
  const strategy = new TimingStrategy();

  await page.goto('https://example.com');
  const loadTime = await strategy.analyze(page);

  console.log(`Page Load Time: ${loadTime} ms`);
  expect(loadTime).toBeLessThan(4000);
});
