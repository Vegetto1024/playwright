import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
test('login', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto('/practice-test-login/')
  await loginPage.login('student','Password123')
  await expect(page.getByText('Logged In Successfully')).toBeVisible()
});

