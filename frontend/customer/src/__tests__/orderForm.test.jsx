// __tests__/orderForm.test.js 
const puppeteer = require("puppeteer");

const originalWarn = console.warn.bind(console.warn)
beforeAll(() => {
console.warn = (msg) => 
    !msg.toString().includes('componentWillReceiveProps') && originalWarn(msg)
})
afterAll(() => {
console.warn = originalWarn
})

describe("Order Form", () => {
    let browser;
    let page;

    beforeAll(async () => {
        jest.setTimeout(60000);
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    it('should navigate in forms, fill forms, and submit', async () => {
        await page.goto("http://localhost:5173");
        await page.click("#ourProducts");

        await page.waitForSelector('#button_id660da570d70211c41cbaee62');
        await page.click('#button_id660da570d70211c41cbaee62');

        await page.waitForSelector('#orange_button_id660da570d70211c41cbaee62');
        await page.click('#orange_button_id660da570d70211c41cbaee62');

        //customer details
        await page.waitForSelector('#fname');
        await page.waitForSelector('#lname');
        await page.waitForSelector('#conum');
        await page.waitForSelector('#email');
        await page.waitForSelector('#address1');
        await page.waitForSelector('#address2');
        
        await page.type('#fname', 'John');
        await page.type('#lname', "Doe");
        await page.type('#conum', "09123456789");
        await page.type('#email', "example@example.com");
        await page.type('#address1', "00 Street, Address");
        await page.type('#address2', "Room 0, Building 1");

        await page.waitForSelector('#selectCityMuni');
        await page.click('#selectCityMuni');

        // await page.waitForSelector('#dropdownCityMuni');
        // await page.evaluate(() => {
        //     const ul = document.getElementById('#dropdownCityMuni');
        //     const firstListItem = ul.querySelector('li:first-child');
        //     firstListItem.click();
        // }); 

        

        //
        
    });
});