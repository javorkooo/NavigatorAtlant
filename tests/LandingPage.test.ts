import {expect , test} from "@playwright/test";
import { NewPlace } from "../pages/NewPlace";
import { LandingPage } from "../pages/LandingPage";


test.describe("Test Suit: Landing Page", async () => {

  let landingPage: LandingPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await page.goto('/');
  });

    test("Verify that Navigator Application load successfully.", {
        tag: ['@UI', '@Smoke', '@AppContenct', '@NavigatorApp']
    }, async ({page}) => {

    // Asserting
    await expect(landingPage.navigatorAppContent).toBeAttached();
    await expect(page).toHaveURL('https://www.navigator.ba/#/categories');
    });


    test("Verify that 'Kreairaj objekat' button is displayed to user.", {
        tag: ['@UI', '@Smoke', '@CreteObjectButton', '@NavigatorApp']
    }, async ({}) => {
    // Asserting
    await expect(landingPage.createObjectButton).toBeAttached();
    });

    
    test("Verify that left menu categories are displayed.", {
        tag: ['@UI', '@Smoke', '@MenuCategories', '@NavigatorApp']
    }, async ({}) => {
    // Asserting
     await expect(landingPage.leftMenuCategories).toBeAttached();
    });


    test("Verify that map is displayed.", {
        tag: ['@UI', '@Smoke', '@MapContainer', '@NavigatorApp']
    }, async ({}) => {
     // Asserting
    await expect(landingPage.mapConainter).toBeAttached();
    });


    test("Verify that search input is displayed to user.", {
        tag: ['@UI', '@Smoke', '@SearchInput', '@NavigatorApp']
    }, async ({}) => {
     // Asserting
    await expect(landingPage.searchInput).toBeAttached();
    });


})