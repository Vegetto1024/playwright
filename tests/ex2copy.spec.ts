import { test, expect } from '@playwright/test'
test('open success', async ({ page }) => {
  await page.goto('/admin')
  await expect(page.getByText('Dashboard')).toBeVisible()
  
})

test('test2', async ({ page }) => {
  await page.goto('/admin')
  await expect(page.getByText('POS System')).toBeVisible()
})
