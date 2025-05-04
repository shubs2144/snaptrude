import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import DashboardPage from '../../pageObjects/dashboardPage';
// import CanvasProject from '../../pageObjects/CanvasProject';
import CanvasProject from '../../pageObjects/CanvasProject';
// import LoginPage from '../../pageObjects/DashboardPage';


let dashboardPage: DashboardPage;
let canvasProject: CanvasProject;


let carpetArea: number = 0;
let AfterDrawingcarpetArea: number = 0;

setDefaultTimeout(60 * 1000 * 2);

Given('I have a new project open on the canvas', async function () {
  dashboardPage = new DashboardPage(pageFixture.page);
  canvasProject = new CanvasProject(pageFixture.page);
  await dashboardPage.clickCreatedProject();
});

When('I activate the draw rectangle tool', async function () {
  await dashboardPage.clickRectangleIcon();
  await pageFixture.page.waitForTimeout(2000);
});

When('I click once on the canvas to start the rectangle', async function () {
  await dashboardPage.clickOnCanvas();
  await pageFixture.page.waitForTimeout(2000);
});

When('I move the cursor to stretch the shape', async function () {
  await dashboardPage.moveCursorToStretchShape();
});


Given('User enter the length as {string}', async function (length) {
  await canvasProject.enterLength(length);
});

Given('User enter the width as {string}', async function (width) {
  await canvasProject.enterWidth(width);
  await pageFixture.page.waitForTimeout(2000);
  
});

Given('I capture the carpet area before drawing the rectangle', async function () {
  carpetArea =await canvasProject.areaElementGetText();
  console.log('Area Element Text:', carpetArea );
});

Then('the carpet area value should be greater than previous value', async function () {

  AfterDrawingcarpetArea =await canvasProject.areaElementGetText();
  console.log('Area Element Text:', AfterDrawingcarpetArea );
  expect(AfterDrawingcarpetArea).toBeGreaterThan(carpetArea);
});





// Then('the width, length, and area values should update live', async function () {
//   await dashboardPage.getWidthValue().then(async (width) => {
//     console.log('Width:', width);
//     expect(width).toBeTruthy();
//   });
//   await dashboardPage.getLengthValue().then(async (length) => {
//     console.log('Length:', length);
//     expect(length).toBeTruthy();
//   } );
//   await dashboardPage.getAreaValue().then(async (area) => {
//     console.log('Area:', area);
//     expect(area).toBeTruthy();
//   } );
// });

// When('I click a second time to finish', async function () {
//   await dashboardPage.clickSecondTimeToFinish();
//   await pageFixture.page.waitForTimeout(2000);
// });

// Then('the rectangle should appear on the canvas', async function () {
//   await dashboardPage.isRectangleVisible().then(async (isVisible) => {
//     expect(isVisible).toBeTruthy();
//   } );
//   await pageFixture.page.waitForTimeout(2000);
// });


