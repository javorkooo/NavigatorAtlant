import { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
  timeout: 120_000,
  testMatch: ['tests/**/*.test.ts'],
  use: {
    baseURL:"https://www.navigator.ba/#/categories",
    headless: false,
    screenshot: "on",
    video: "off",
    launchOptions: {
      slowMo:1500
    }    
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "never"
  }]]
};

export default config;