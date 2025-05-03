// src/pageObjects/LoginPage.ts

import { Page } from '@playwright/test';

export default class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private locators = {
    loginLink: () => this.page.locator('//span[text()="Login"]'),
    usernameInput: () => this.page.locator("//input[@placeholder='username@company.com']"),
    passwordInput: () => this.page.locator("//input[@type='password']"),
    loginButton: () => this.page.locator("//button[@type='submit']"),
    newProjectButton: () => this.page.locator("//button[@id='new-project-button']"),
    errorMessage: () => this.page.locator('mat-error[role="alert"]'),
  };

  async navigateToLoginPage() {
    await this.page.goto('https://app.snaptrude.com/login');
  }

  async clickLoginLink() {
    await this.locators.loginLink().click();
  }

  async enterUsername(username: string) {
    await this.locators.usernameInput().type(username);
  }

  async enterPassword(password: string) {
    await this.locators.passwordInput().type(password);
  }

  async clickLoginButton() {
    await this.locators.loginButton().click();
    await this.page.waitForLoadState();
    await this.page.waitForTimeout(2000);
  }

  async getLoggedInUsername(): Promise<string | null> {
    return await this.locators.newProjectButton().textContent();
  }

  async isLoginErrorVisible(): Promise<boolean> {
    return await this.locators.errorMessage().isVisible();
  }
}
