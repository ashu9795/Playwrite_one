import { test, expect } from '@playwright/test';
import { login } from '../utils/login.js';
import { loginScenarios } from '../testData/loginData.js';

require('dotenv').config();

test.describe("Login test scenarios", () => {

  for (const data of loginScenarios) {
    test(data.name, async ({ page }) => {

      await page.goto(process.env.SITE_BASE_URL);

      await login(page, data.username, data.password);

      if (data.success) {
        await expect(page).not.toHaveURL(/login/i);
      } else {
        await expect(page.getByText(/invalid|error|required/i)).toBeVisible();
      }
    });
  }

});
