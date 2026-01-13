export async function login(page, username, password) {
  await page.getByRole('img').first().click();

  await page.locator('//*[@id="username"]').fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);

  await page.locator('//*[@id="root"]/div/div[2]/div/form/button').click();
}
