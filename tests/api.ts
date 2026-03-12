import { test, expect } from '@playwright/test'
test('check resonse API', async ({ request }) => {
  const response = await request.get(
    'https://cms.anhtester.com/admin/customers'
  )
  expect(response.status()).toBe(200)
})

test('GET users API', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  )
  const body = await response.json()
  expect(body.length).toBeGreaterThan(0)
})

test('create user', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'test',
        body: 'automation',
        userId: 1
      }
    }
  )
  expect(response.status()).toBe(201)
})

test('verify user name', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/2'
  )
  const body = await response.json()
  expect(body.name).toBe('Ervin Howell')
})
