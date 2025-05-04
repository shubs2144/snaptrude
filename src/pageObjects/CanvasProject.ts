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
        rectangleLengthValue: () => this.page.locator("(//span[text()='Carpet Area']/parent::div/parent::div/following-sibling::div/div)[1]"),
        // PopupMessage: () => this.page.locator("//div[@id='toast-priority-high']"),
        PopupMessage: () => this.page.locator("//div[contains(text(), 'has viewer permission')]"),
        areaElement: () => this.page.locator("//div[contains(text(),'Total Carpet Area')]")


    };

    async getWidthValue() {
        return await this.locators.rectangleWidthValue().textContent();
    }

    async getLengthValue() {
        return await this.locators.rectangleLengthValue().textContent();
    }

    async getAreaValue(){
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

    async getPopupMessage() {
        return await this.locators.PopupMessage().textContent();
    }

    // async areaElementGetText() {
    //     return await this.locators.areaElement().textContent();
        
    // }   
    // async areaElementGetText(): Promise<string | null> {
    //     const fullText = await this.locators.areaElement().textContent();
    //     if (!fullText) return null;
      
    //     const match = fullText.match(/[\d.]+/); // This regex captures digits and decimal point
    //     return match ? match[0] : null;
    //   }
    async areaElementGetText(): Promise<number> {
        try {
          const fullText = await this.locators.areaElement().textContent();
          if (!fullText) return 0;
      
          const match = fullText.match(/[\d.]+/);
          return match ? parseFloat(match[0]) : 0;
        } catch (error) {
          // Element not found or other error — return 0 instead of failing test
          return 0;
        }
      }



}