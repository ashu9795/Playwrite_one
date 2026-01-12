import { test, expect } from '@playwright/test';

test("PortFolio Test", async ({ page }) => {

  await page.goto('https://ashu9795.netlify.app/');

  await page.getByRole('img').first().click();




  await page.waitForTimeout(2000);


});
