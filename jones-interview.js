const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://contractorsinsurancereview.com/ExampleForm/');
    await page.type('[name=name]', 'Avi Lugassi');
    await page.type('[name=email]', 'avilugassi23@gmail.com');
    await page.type('[name=phone]', '0508513679');
    await page.type('[name=company]', 'pool');
    await page.select('[id=employees]', '51-500');
    await page.screenshot({ path: 'imgs/example.png' });
    await page.click('button');
    console.log('Reaching The Thank You Page');
    browser.close();
})();
