

import { test, expect } from '@playwright/test';
import { DIContainer } from '../core/DIContainer';

test('Validate lazy-loaded images become visible after scroll', async () => {
  const page = await DIContainer.resolvePage();
  await page.goto('https://unsplash.com', { waitUntil: 'domcontentloaded' });

  // Scroll gradually to trigger lazy loading
  for (let i = 0; i < 8; i++) {
    await page.mouse.wheel(0, 1000);        // simulate real user scroll
    await page.waitForTimeout(1200);
  }

  // Select only *real* images (not tracking pixels or hidden gifs)
  const realImages = page.locator('img:not([src*="gif"])');

  // Wait until at least one image has a natural size (lazy loaded)
  await page.waitForFunction(() => {
    const imgs = Array.from(document.querySelectorAll('img:not([src*="gif"])'));
    return imgs.some((img) => img.complete && img.naturalHeight > 50);
  }, { timeout: 15000 });

  // Confirm visibility
  const visibleCount = await realImages.count();
  console.log(`✅ ${visibleCount} images found.`);

  expect(visibleCount).toBeGreaterThan(0);
});
