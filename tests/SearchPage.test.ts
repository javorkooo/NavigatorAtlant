import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test.describe('Searching for places', () => {
  let searchPage: SearchPage;

  test.beforeEach(async ({ page }) => {
    searchPage = new SearchPage(page);
    await page.goto('/');
  });

  test('Verify that serach input return some values.', {
      tag: ['@UI', '@Smoke', '@SerchInput', '@NavigatorApp']
    }, async () => {
  const searchValue = 'atlantbh'
  await searchPage.searchLabel(searchValue);

    // Asserting
  expect(await searchPage.searchResults.count()).toBeGreaterThan(0);

  });

  test('Verify that serach input return message for non-existing values.', {
      tag: ['@UI', '@Smoke', '@SerchInput', '@NavigatorApp', '@NegativeTestCase']
    }, async ()=> {
    const nonExistingValue = 'qwe123';
    const expectedMessage = 'Žao nam je'
    await searchPage.searchLabel(nonExistingValue);

    // Asserting
    await expect(searchPage.noResultsMessage).toBeVisible();
    await expect(searchPage.noResultsMessage).toContainText(expectedMessage);
  });
});