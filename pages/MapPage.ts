import { expect, type Locator, type Page} from '@playwright/test';


export class MapPage {
    readonly page: Page;
    readonly zoomInButton: Locator;
    readonly zoomOutButton: Locator;
    readonly mapCanvas: Locator;
    readonly mapMarker: Locator;


    constructor(page: Page) {
        this.page = page;
        this.zoomInButton = page.locator('a.leaflet-control-zoom-in[title="Zoom in"]');
        this.zoomOutButton= page.locator('a.leaflet-control-zoom-out[title="Zoom out"]');
        this.mapCanvas = page.locator('');
        this.mapMarker = page.locator('');
    }

    async zoomIn(times: number = 1) {
        for(let i = 0; i < times ; i++){
            await this.zoomInButton.click();
        }
    }

    async zoomOut(times: number = 1) {
        for(let i = 0; i < times ; i++){
            await this.zoomOutButton.click();
        }
    }

    async verifyZoomAvailable() {
        await expect(this.zoomInButton).toBeVisible();
        await expect(this.zoomOutButton).toBeVisible();

    }

    async clickFirstMapMarker(){
        await this.mapMarker.first().click();
    }

    async verifyMarkerPopupVisible(){
        const popup = this.page.locator('');
        await expect(popup).toBeVisible();
    }
}
