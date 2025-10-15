
import { BrowserFactory } from './BrowserFactory';

export class DIContainer {
  static async resolvePage(headless = true) {
    return BrowserFactory.newPage(headless);
  }
}
