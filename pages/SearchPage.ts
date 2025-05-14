import { type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchResults: Locator;
  readonly noResultsMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[placeholder="Traži ulicu ili objekat"]');
    this.searchButton = page.locator('span.iconav-search');
    this.searchResults = page.locator('a', { hasText: 'Atlantbh' });
    this.noResultsMessage = page.locator('p.no-results', { hasText: 'Žao nam je' });
  }

  async searchLabel(searchText: string) {
    await this.searchInput.fill(searchText);
    await this.searchButton.click();
  }
}