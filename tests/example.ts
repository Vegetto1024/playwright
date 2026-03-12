import { test, expect } from '@playwright/test'
test('login success', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/')
  await page.getByLabel('Username').fill('student')
  await page.getByLabel('Password').fill('Password123')
  await expect(page.getByRole('textbox',{name:'Username'})).toHaveValue('student')
  await page.getByRole('button', { name: 'Submit' }).click()
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
  await expect(page.getByText('Logged In Successfully')).toBeVisible()
  await expect(page.getByRole('link',{name:'Out'})).toHaveText('Log out')
  await expect(page).toHaveScreenshot()
})

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

