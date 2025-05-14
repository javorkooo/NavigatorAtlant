import {expect , test} from "@playwright/test";
import { CommentPage } from "../pages/CommentPage";


test.describe("Test Suit: Landing Page", async () => {

  let commentPage: CommentPage;

  test.beforeEach(async ({ page }) => {
    commentPage = new CommentPage(page);
    await page.goto('/');
  });

    test.only("Verify that Navigator Application load successfully.", {
        tag: ['@UI', '@Smoke', '@CommentPage', '@NavigatorApp']
    }, async ({page}) => {

        const errorMessage = `
            Greška prilikom slanja poruke
             `

    // Asserting
    await commentPage.createCommentButton.click();
    await expect(page).toHaveURL('https://www.navigator.ba/#/feedback');
    await commentPage.commentInputField.fill('Cool poruka!');


    await commentPage.sendButton.scrollIntoViewIfNeeded();
    await commentPage.sendButton.click();

    await expect(commentPage.errorMessage).toContainText(errorMessage)
    });


})