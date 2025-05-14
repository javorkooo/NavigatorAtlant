import { expect, Locator, Page } from '@playwright/test';


export class LandingPage {
    page: Page;
    public createObjectButton: Locator;
    public sendCommentButton: Locator;
    public searchInput: Locator;
    public navbarLogo: Locator;
    public socialMediaList: Locator;
    public headerContainer: Locator;
    public navigatorAppContent: Locator;
    public leftMenuCategories: Locator;
    public mapConainter: Locator;


    constructor(page: Page) {
        this.page = page;
        this.createObjectButton = page.locator(`#ember572`);
        this.sendCommentButton = page.locator(`#ember587`);
        this.searchInput = page.locator(`#ember564`);
        this.navbarLogo = page.locator(`ember551`);
        this.socialMediaList = page.locator(`#ember614`);
        this.headerContainer = page.locator(`#header_container`);
        this.navigatorAppContent = page.locator(`div#page-body-content`);
        this.leftMenuCategories = page.locator(`#ember509`);
        this.mapConainter = page.locator(`#ember622`);
    }


}