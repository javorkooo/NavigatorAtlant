import { expect, Page, Locator } from "@playwright/test";

export class NewPlace {
    readonly page: Page;
    readonly createButton: Locator;
    readonly insertName: Locator;
    readonly insertCity: Locator;
    readonly insertPost: Locator;
    readonly insertPlace: Locator;
    readonly insertNumber: Locator;
    readonly insertScndAdd: Locator;
    readonly description: Locator;
    readonly categoryButton: Locator;
    readonly selectCategory: Locator;
    readonly deleteButton: Locator;
    readonly selectDay: Locator;
    readonly workFrom: Locator;
    readonly workTo: Locator;
    readonly workHours: Locator;
    readonly workFrom2: Locator;
    readonly workTo2: Locator;
    readonly addWorkingHours: Locator;
    readonly telephone: Locator;
    readonly mobilephone: Locator;
    readonly email: Locator;
    readonly wifi: Locator;
    readonly addComment: Locator;
    readonly createPlaceButton: Locator;
    readonly succesButton: Locator;
    readonly cancelButton: Locator;
    readonly errorMessageEmptyForm: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createButton = page.getByRole('link', { name: 'Kreiraj objekat' });
        this.insertName = page.locator('#poi_name');
        this.insertCity = page.locator('#poi_city_name');
        this.insertPost = page.locator('#poi_zip_code');
        this.insertPlace = page.locator('#poi_place_id');
        this.insertNumber = page.locator('#poi_house_number');
        this.insertScndAdd = page.locator('#poi_street_name_alt');
        this.description = page.locator('#poi_description');
        this.categoryButton = page.locator("//button[@title='Odaberite kategoriju']");
        this.selectCategory = page.locator('select');
        this.deleteButton = page.locator("//div[@class='ember-view category-selector-view'])[1]");
        this.selectDay = page.locator("//span[normalize-space(text())='Pon']");
        this.workFrom = page.locator('#working_hours_0_0');
        this.workTo = page.locator('#working_hours_0_1');
        this.workHours = page.locator('#addSecondWhoursPartLink');
        this.workFrom2 = page.locator('#working_hours_1_0');
        this.workTo2 = page.locator('#working_hours_1_1');
        this.addWorkingHours = page.locator("//button[@class='btn btnAddWorkingHours']");
        this.telephone = page.locator('#poi_phone');
        this.mobilephone = page.locator('poi[mobile_phone]');
        this.email = page.locator('#poi_email');
        this.wifi = page.locator('#poi_has_wifi');
        this.addComment = page.locator('#poi_comment');
        this.succesButton = page.locator("//button[@class='btn btn-success']");
        this.cancelButton = page.locator("//button[@class='btn cancel']");
        this.errorMessageEmptyForm = page.locator(`div.row.validation-error-msg`)
    }


    async openCreatePlaceForm() {
        await this.createButton.click();
    }

    async fillFormInfo({
        name,
        city,
        zip,
        placeId,
        number,
        altStreet,
        description,
    }: {
        name: string;
        city: string;
        zip: string;
        placeId: string;
        number: string;
        altStreet: string;
        description: string;
    }) {
        await this.insertName.fill(name);
        await this.insertCity.fill(city);
        await this.insertPost.fill(zip);
        await this.insertPlace.fill(placeId);
        await this.insertNumber.fill(number);
        await this.insertScndAdd.fill(altStreet);
        await this.description.fill(description);
    }

    async selectCategoryByValue(value: string) {
        await this.categoryButton.click();
        await this.selectCategory.selectOption(value);
    }

    async setWorkingHours(from: string, to: string, from2?: string, to2?: string) {
        await this.selectDay.click();
        await this.workFrom.fill(from);
        await this.workTo.fill(to);

        if(from2 && to2){
            await this.workHours.click();
            await this.workFrom2.fill(from2);
            await this.workTo2.fill(to2);
        }
        await this.addWorkingHours.click();
    }
    async fillContactInfo({
        telephone,
        email,
        hasWifi,
        comment,
    }: {
        telephone: string;
        email: string;
        hasWifi: boolean;
        comment: string;
    }) {
        await this.telephone.fill(telephone);
        await this.email.waitFor({ state: 'visible' });
        await this.email.fill(email);

    if (hasWifi) {
        await this.wifi.check();
    } else {
        await this.wifi.uncheck();
    }
    await this.addComment.fill(comment);
    }

    async submitPlace(){
        await this.succesButton.click();
    }

    async cancelCreation() {
        await this.cancelButton.click();
    }
}
