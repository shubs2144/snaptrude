import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import DashboardPage from '../../pageObjects/dashboardPage';
import { expect } from '@playwright/test';
// import LoginPage from '../../pageObjects/DashboardPage';



let dashboardPage: DashboardPage;

setDefaultTimeout(60 * 1000 * 2);


Given('I navigate to the Teams dashboard should be visible create a team title', async function () {
  dashboardPage = new DashboardPage(pageFixture.page);

  await dashboardPage.visibleCreateTeam();
  
});

When('I click on the plus button to create a new team', async function () {
  await dashboardPage.clickPlusButton();
  await pageFixture.page.waitForTimeout(2000);
});

When('I enter a team name into the input field is {string}', async function (string) {
  await dashboardPage.enterTeamName(string);
  await pageFixture.page.waitForTimeout(2000);
});

When('I click on the create button', async function () {
  await dashboardPage.clickCreateTeamButton();
  await pageFixture.page.waitForTimeout(2000);
});

Then('I should see a popup message saying {string}', async function (string) {
  await dashboardPage.getWarningMessage().then(async (message) => {
    console.log('Warning Message:', message);
    expect(message).toBe(string);
  });
  await pageFixture.page.waitForTimeout(2000);
});