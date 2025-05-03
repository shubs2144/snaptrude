// src/steps/LoginSteps.ts

import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import LoginPage from '../../pageObjects/LoginPage';

let loginPage: LoginPage;

setDefaultTimeout(60 * 1000 * 2);

Given('User navigates to the application', async function () {
  loginPage = new LoginPage(pageFixture.page);
  await loginPage.navigateToLoginPage();
});

Given('User click on the login link', async function () {
  await loginPage.clickLoginLink();
});

Given('User enter the username as {string}', async function (username) {
  await loginPage.enterUsername(username);
});

Given('User enter the password as {string}', async function (password) {
  await loginPage.enterPassword(password);
});

When('User click on the login button', async function () {
  await loginPage.clickLoginButton();
});

Then('Login should be success', async function () {
  const textMessage = await loginPage.getLoggedInUsername();
  console.log('Username: ' + textMessage);
  expect(textMessage).not.toBeNull();
});

When('Login should fail', async function () {
  const isErrorVisible = await loginPage.isLoginErrorVisible();
  expect(isErrorVisible).toBe(true);
});
