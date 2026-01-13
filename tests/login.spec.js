import { test, expect } from '@playwright/test';
require('dotenv').config();

test('PortFolio Test', async ({ page }) => {

  await page.goto(process.env.SITE_BASE_URL);

  await page.getByRole('img').first().click();

  console.log(process.env.SITE_USERNAME);
  console.log(process.env.SITE_PASSWORD);

  await page.locator('//*[@id="username"]').fill(process.env.SITE_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.SITE_PASSWORD);

  await page.locator('//*[@id="root"]/div/div[2]/div/form/button').click();

  await page.waitForTimeout(10000);
});

