import { expect, Locator, Page } from '@playwright/test';


export class CommentPage{
        page: Page;
        public createCommentButton: Locator;
        public commentInputField: Locator;
        public sendButton: Locator;
        public errorMessage: Locator;


    
        constructor(page: Page) {
            this.page = page;
            this.createCommentButton = page.locator(`//span[normalize-space(text())='Predloži ideju - Pošalji komentar']`);
            this.commentInputField = page.locator(`textarea[title='Komentar']`);
            this.sendButton = page.locator(`input[type='submit']`)
            this.errorMessage = page.locator(`div.alert.alert-error`);
        }



}