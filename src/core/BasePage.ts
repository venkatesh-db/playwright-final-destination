

// src/core/BasePage.ts
import { Page, Locator, expect } from '@playwright/test';

/**
 * Method decorator for logging test steps
 */
export function logStep(
  target: Object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => Promise<void>>
): TypedPropertyDescriptor<(...args: any[]) => Promise<void>> {
  const originalMethod = descriptor.value!;
  descriptor.value = async function (...args: any[]) {
    console.log(`🔹 Step: ${propertyKey}`);
    return await originalMethod.apply(this, args);
  };
  return descriptor;
}

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForVisible(locator: Locator) {
    await expect(locator).toBeVisible({ timeout: 5000 });
  }
}
