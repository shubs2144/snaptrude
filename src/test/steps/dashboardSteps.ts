// src/steps/LoginSteps.ts

import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import DashboardPage from '../../pageObjects/dashboardPage';
// import LoginPage from '../../pageObjects/DashboardPage';


let dashboardPage: DashboardPage;
setDefaultTimeout(50 * 1000);


// When('I click on {string}', async function (string) {
//     dashboardPage = new DashboardPage(pageFixture.page);
//   await dashboardPage.clickNewProjectButton();
//   });
  When('I click on Create New Project', async function () {
    dashboardPage = new DashboardPage(pageFixture.page);
    await dashboardPage.clickNewProjectButton();
  });
  
// Given('User navigates to the application', async function () {
//   dashboardPage = new DashboardPage(pageFixture.page);
//   await dashboardPage.clickNewProjectButton();
// });

When('I enter {string} and select unit', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await dashboardPage.enterProjectName(string);
  await dashboardPage.selectUnit();
});

When('I click on Create button', async function () {
  await dashboardPage.clickCreateProjectButton();
});

Then('I should see a canvas with the new project loaded', async function () {
  // Write code here that turns the phrase above into concrete actions
  await dashboardPage.isCanvasVisible().then(async (isVisible) => {
    expect(isVisible).toBeTruthy();
  } );
});

