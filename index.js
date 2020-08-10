const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 1800 })
  await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#checkboxes-and-radios')
  const innerText = await page.evaluate(() => document.querySelector('#checkboxes-and-radios > span').innerText);
  console.log(innerText)
  const title = await page.title()
  console.log(title)
  await browser.close()
})()