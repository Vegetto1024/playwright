import { test, expect } from '@playwright/test';

test('register', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
  await page.getByRole('textbox', { name: 'Username:' }).fill('abc');
  await page.getByLabel('Email').fill('test123@gmail.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Cooking' }).check();
  await page.getByLabel('Interests:').selectOption('science');
  await page.getByLabel('Country:').selectOption('canada');
  await page.getByRole('textbox', { name: 'Date of Birth:' }).fill('1999-02-03');
  await page.getByRole('textbox', { name: 'Biography:' }).fill('test');
  await page.getByRole('slider', { name: 'Rate Us:' }).fill('6');
  await page.getByText('Register').click();
});