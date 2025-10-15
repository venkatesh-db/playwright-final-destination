
export interface Command {
  execute(): Promise<void>;
}

export class ClickCommand implements Command {
  constructor(private locator: any) {}
  async execute() {
    await this.locator.click();
  }
}
