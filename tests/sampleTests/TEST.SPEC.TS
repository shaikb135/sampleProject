import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByText('Wrong credentialsInvalid').click();
  await page.getByRole('textbox', { name: 'Email address or phone number' }).click();
  await page.getByRole('textbox', { name: 'Email address or phone number' }).fill('hsdvbjhabfdahkasbciadbckjdc');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('ha');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('haBSCFIADBCFOUAWD');
  await page.getByRole('button', { name: 'Log in' }).click();
});