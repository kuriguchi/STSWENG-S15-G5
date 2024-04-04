// __tests__/orderForm.test.js 
const puppeteer = require("puppeteer");

describe("Google", () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    it('should navigate in forms, fill forms, and submit', async () => {
        await page.goto("http://localhost:5173");
        await page.click("#ourProducts");

        await page.waitForNavigation();
    });
});