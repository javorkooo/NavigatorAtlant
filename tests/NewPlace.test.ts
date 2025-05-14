import { expect, test } from "@playwright/test";
import { NewPlace } from "../pages/NewPlace";

test.describe("Creating new place", () => {
    let newPlace: NewPlace;

    test.beforeEach(async ({ page }) => {
        newPlace = new NewPlace(page);
        await page.goto('/');
    });

    
  test('Verify if user tries to enter emtpy form to get displayed error message.', {
      tag: ['@UI', '@Smoke', '@SerchInput', '@NavigatorApp', '@NegativeTestCase']
    }, async ({page}) => {

    const expectedErrorMessage = 'Forma sadrži nevalidne podatke. Molimo ispravite i pokušajte ponovo'

    await newPlace.openCreatePlaceForm();
    await expect(newPlace.succesButton).toBeAttached();
    await page.getByRole('button', { name: 'Kreiraj' }).click();

     // Asserting
    await newPlace.errorMessageEmptyForm.scrollIntoViewIfNeeded();
    await expect(newPlace.errorMessageEmptyForm).toHaveText(expectedErrorMessage);

  });

    test("Verify user can fulfill form.", {
      tag: ['@UI', '@Smoke', '@FillingForm', '@NavigatorApp', '@NegativeTestCase']
    }, async ({}) => {
        await newPlace.openCreatePlaceForm();

        await newPlace.fillFormInfo({
            name: "Test Kafic",
            city: "Sarajevo",
            zip: "71000",
            placeId: "1",
            number: "12A",
            altStreet: "Druga ulica",
            description: "Odličan kafić u centru grada"
        });

        await newPlace.selectCategoryByValue('Kafa');
        await newPlace.setWorkingHours("08:00", "16:00");
        await newPlace.fillContactInfo({
            telephone: "033123456",
            email: "proba@gmail.com",
            hasWifi: true,
            comment: "Zagarantovano dobar provod i ugodna atmosfera"
        });

        await newPlace.submitPlace();
    });

    
});
