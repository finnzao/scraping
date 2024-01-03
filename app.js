import puppeteer from 'puppeteer';

const url = 'URL LINK'

    ; (async () => {

        // Launch the browser and open a new blank page
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        // Navigate the page to a URL
        await page.goto(url);

        await page.waitForSelector('Name of class/id for selector')

        console.log(`success in accessing the URL: ${url}`)


        // Make a Array with all content with this name property 
        const pageContent = await page.$$eval('property name', el => el.map(title => title.innerHTML))


        new Promise(r => setTimeout(r, 2000));

        console.log(pageContent)
        await browser.close();
        
    })();