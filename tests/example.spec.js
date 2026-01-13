import { test, expect } from '@playwright/test';

test ("PortFolio Test", async ({ page }) => {

  await page.goto('https://ashu9795.netlify.app/');

  await page.getByRole('img').first().click();
  await page.locator('//*[@id="username"]').fill('ashu');
   await page.getByRole('textbox', { name: 'Password' }).fill('Apple@123');

await page.getByRole('button', { name: 'Login' }).click();


  await page.waitForTimeout(2000);


});
