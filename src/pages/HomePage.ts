

/*


Page load analysis with performance.timing

Handling lazy-loaded DOM

Headless vs headed performance metrics

Parallel scaling with sharding

Serial vs parallel test design

Dependency ordering and teardown logic

Cross-test communication

Retry mechanisms

POM, Factory, Singleton, Builder, Strategy

Command pattern for reusable actions

Custom waiters and decorators

Dependency Injection in test frameworks


*/




import { BasePage, logStep } from '../core/BasePage';
import { Locator } from '@playwright/test';

export class HomePage extends BasePage {
  private get addButton(): Locator {
    return this.page.locator('button.add-to-cart');
  }

  @logStep
  async open() {
    await this.page.goto('/');
  }

  @logStep
  async clickAddToCart() {
    await this.waitForVisible(this.addButton);
    await this.addButton.click();
  }
}


