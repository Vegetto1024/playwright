import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import path from 'path';
const authFile = path.join(__dirname, '../playwright/.auth/user.json') 

setup('login and save session', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto('/login/')
  await loginPage.login('admin@example.com','123456')
  await page.waitForURL('https://cms.anhtester.com/admin')
  await page.context().storageState({ path: 'storageState.json' })
  
  await page.context().storageState({ path: authFile })

});

