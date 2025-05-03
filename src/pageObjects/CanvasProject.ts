import {  Page } from '@playwright/test';

export default class CanvasProject {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

    private locators = {
        rectangleWidthInput: () => this.page.locator("//div[text()='W']/following-sibling::div/input"),
        rectangleLengthInput: () => this.page.locator("//div[text()='L']/following-sibling::div/input"),
        rectangleAreaValue: () => this.page.locator("//div[@id='rectangle-area']"),
        rectangleWidthValue: () => this.page.locator("//div[@id='rectangle-width-value']"),
        rectangleLengthValue: () => this.page.locator("//div[@id='rectangle-length-value']"),
        views: () => this.page.locator("//span[@class='font-interDisplay']"),
        plans: () => this.page.locator("//div[contains(@class,'px-1.5 py-1')]//div[contains(@class,'absolute')]"),
        actionButton: () => this.page.locator("//div[contains(@class,'px-1.5 py-1')]//div[contains(@class,'absolute')]"),
        renameButton: () => this.page.locator("text=Rename View"),
        renameInput: () => this.page.locator("//div[@class='sc-kUnTIk hUmfei']"),
        renamePopUpMessage: () => this.page.locator("//div[@class='sc-kUnTIk hUmfei']"),
    };

    async getWidthValue() {
        return await this.locators.rectangleWidthValue().textContent();
    }

    async getLengthValue() {
        return await this.locators.rectangleLengthValue().textContent();
    }

    async getAreaValue() {
        return await this.locators.rectangleAreaValue().textContent();
    }

    async enterWidth(width: string) {
        await this.locators.rectangleWidthInput().fill(width);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Enter');
    }

    async enterLength(length: string) {
        await this.locators.rectangleLengthInput().fill(length);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Tab');
        await this.page.waitForTimeout(2000);
        // await expect(this.locators.rectangleWidthInput()).toBeFocused();
    }

    async viewPlansOnLeftPanel() {
        await this.locators.views().isVisible();
        await this.page.waitForTimeout(2000);
    }

    async hoverOnPlan() {
        await this.locators.plans().hover();
        await this.page.waitForTimeout(2000);
    }

    async clickActionButton() {
        await this.locators.actionButton().click();
        await this.page.waitForTimeout(2000);
    }

    async clickRenameButton() {
        await this.locators.renameButton().click();
        await this.page.waitForTimeout(2000);
    }

    async enterRenameInput(name: string) {
        await this.locators.renameInput().fill(name);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Enter');
    }

    async getRenamePopUpMessage() {
        return await this.locators.renamePopUpMessage().textContent();
    }

}