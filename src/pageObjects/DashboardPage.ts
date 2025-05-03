// src/pageObjects/LoginPage.ts

import { Page } from '@playwright/test';

export default class DashboardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private locators = {
    newProjectButton: () => this.page.locator("//button[@id='new-project-button']"),
    projectNameInput: () => this.page.locator("//input[@id='create-project-name']"),
    unitSelect: () => this.page.locator("(//div[@class='sc-kUnTIk hUmfei'])[1]"),
    createProjectButton: () => this.page.locator("//button[normalize-space()='Create']"),
    canvas: () => this.page.locator("//canvas[@id='canvas' and not(ancestor::div[@class='fixed left-1/2 top-[46px] z-10 flex -translate-x-1/2 transform items-center justify-center gap-1 rounded-xl bg-white p-1.5 border-custom'])]"),
    CreatedProject: () => this.page.locator("(//img[@class='dark-mode'])[1]"),
    clickRectangleIcon: () => this.page.locator("//img[@id='img-top-menu-bar-design-rectangle']"),
    createTeam: () => this.page.locator("(//div[@class='sc-fJqfNw eirkje'])[1]"),
    plusButton: () => this.page.locator("//img[@id='add-new-team']"),
    teamNameInput: () => this.page.locator("(//input[@id='create-team-name'])[1]"),
    createTeamButton: () => this.page.locator("//button[normalize-space()='Create']"),
    // warningMessage: () => this.page.locator("//div[@class='sc-kUnTIk hUmfei']"),
    shareButton: () => this.page.locator("//button[@id='share-project-button']"),
    emailInput: () => this.page.locator("//input[@placeholder='Enter email address to invite someone']"),
    sendInviteButton: () => this.page.locator("//button[@class='sc-ixGGxD hBQgjD']"),
    warningMessage: () => this.page.locator("//div[@class='sc-kUnTIk hUmfei']"),

  };

  async clickNewProjectButton() {
    await this.locators.newProjectButton().click();
    await this.page.waitForLoadState();
    await this.page.waitForTimeout(2000);
  }

  async enterProjectName(name: string) {
    await this.locators.projectNameInput().fill(name);
    await this.page.waitForTimeout(2000);
  }
  
  async selectUnit() {
    await this.locators.unitSelect().click();
    await this.page.waitForTimeout(2000);
    
  }

  async clickCreateProjectButton() {
    await this.locators.createProjectButton().click();
    await this.page.waitForTimeout(2000);
  }

  async isCanvasVisible() {
    return await this.locators.canvas().isVisible();
  }

  async clickCreatedProject() {
    await this.locators.CreatedProject().click();
    await this.page.waitForTimeout(2000);
  }

  async clickRectangleIcon() {
    await this.locators.clickRectangleIcon().click();
    await this.page.waitForTimeout(2000);
  }

  async clickOnCanvas() {
    await this.locators.canvas().click();
    await this.page.waitForTimeout(2000);
  }

  // async moveCursorToStretchShape() {
  //   await this.page.mouse.move(6000, 6000); // Move the cursor to stretch the shape
  //   await this.page.waitForTimeout(2000);
  //   await this.locators.canvas().click();
  //   await this.page.mouse.move(6000, 6000);
  //   await this.page.waitForTimeout(2000);
  // }

  async moveCursorToStretchShape() {
    // Scroll by specific amounts
    await this.page.mouse.move(0, 3000);
    await this.page.waitForTimeout(2000);
    
    // Click on the canvas
    await this.locators.canvas().click();
    await this.page.waitForTimeout(2000);
  }

  async clickSecondTimeToFinish() {
    await this.page.mouse.click(200, 200); // Click a second time to finish
    await this.page.waitForTimeout(2000);
  }

  async getWidthValue() {
    
  }

  async getLengthValue() {
    
  }

  async getAreaValue() {
    
  }

  async isRectangleVisible() {
    
  }

  async visibleCreateTeam() {
    await this.locators.createTeam().isVisible();
    await this.page.waitForTimeout(2000);
  }

  async clickPlusButton() {
    await this.locators.plusButton().click();
    await this.page.waitForTimeout(2000);
  }

  async enterTeamName(name: string) {
    await this.locators.teamNameInput().fill(name);
    await this.page.waitForTimeout(2000);
  }

  async clickCreateTeamButton() {
    await this.locators.createTeamButton().click();
    await this.page.waitForTimeout(2000);
  }

 async clickShareButton() { 
    await this.locators.shareButton().click();
    await this.page.waitForTimeout(2000);
  }

  async enterEmail(email: string) {
    await this.locators.emailInput().fill(email);
    await this.page.waitForTimeout(2000);
  }

  async clickSendInviteButton() {
    await this.locators.sendInviteButton().click();
    await this.page.waitForTimeout(2000);
  }

  async getWarningMessage() {
    return await this.locators.warningMessage().textContent();
  }


  
}
