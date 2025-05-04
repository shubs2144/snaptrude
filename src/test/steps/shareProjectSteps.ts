import { When, Then, setDefaultTimeout, Given } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import DashboardPage from '../../pageObjects/dashboardPage';
import CanvasProject from '../../pageObjects/CanvasProject';
// import LoginPage from '../../pageObjects/DashboardPage';


let dashboardPage: DashboardPage;
let canvasProject: CanvasProject;

setDefaultTimeout(60 * 1000 * 2);

Given('I have a project open on the canvas', async function () {
    dashboardPage = new DashboardPage(pageFixture.page);
    canvasProject = new CanvasProject(pageFixture.page);
    await dashboardPage.clickCreatedProject();
    await pageFixture.page.waitForTimeout(2000);
  });

  When('I click the share button', async function () {
    await dashboardPage.clickShareButton();
    await pageFixture.page.waitForTimeout(2000);
    
  });

  When('I enter the email {string}', async function (string) {
    await dashboardPage.enterEmail(string);
    await pageFixture.page.waitForTimeout(2000);
  });

  When('I click the send invite button', async function () {
    await dashboardPage.clickSendInviteButton();
    // await pageFixture.page.waitForTimeout(2000);
  });

  Then('I should see a success popup', async function () {
    await canvasProject.getPopupMessage().then(async (message) => {
      console.log('Popup Message:', message);
      expect(message).toContain("has viewer permission");
    });
    await pageFixture.page.waitForTimeout(2000);
    
  });