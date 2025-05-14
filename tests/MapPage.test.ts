import {expect, test} from "@playwright/test";
import { MapPage } from "../pages/MapPage"; 

test.describe("Test Suit: Landing Page - Map functionality", async () => {
    let mapPage : MapPage;

    test.beforeEach( async({page}) => {
        mapPage = new MapPage(page);
        await page.goto('/');
    })

    test("Zoom-in and zoom-out", {
        tag: ['@UI', '@Smoke', '@MapZoom', '@NavigatorApp']
    }, async ({}) => {
        await mapPage.verifyZoomAvailable();
        await mapPage.zoomIn(2);
        await mapPage.zoomOut(3);
    })
})