const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 1800 })
  // await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#checkboxes-and-radios')
  await page.goto('https://brooklynbedding.com/products/brooklyn-signature-hybrid?sscid=81k4_3dh82&utm_campaign=314743&utm_medium=referral&utm_source=shareasale.com&variant=32591736569901')
  // const element = await page.$("#price > div > span");
  const innerText = await page.evaluate(() => document.querySelector('#price > div > span').innerText);

  // const text = await page.evaluate(element => element.textContent, element);
  console.log(innerText)
  const title = await page.title()
  console.log(title)
  // await page.screenshot({
  //   fullPage: false,
  //   path:`screenshot.png`
  // });
  await browser.close()
})()