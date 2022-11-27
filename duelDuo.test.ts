
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// beforeEach(async () => {
//     driver.get('http://localhost:3000/')
// })

// afterAll(async () => {
//     driver.quit()
// })

// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
// })

beforeAll(async () => {
    driver.get('http://127.0.0.1:5500/public/index.html')
})

afterAll(async () => {
    driver.quit()
})

describe ('testing duel duo', () => {
    test('draw button', async () => { 
        await driver.findElement(By.xpath('//button[@id="draw"]')).click()

        const displayed = await driver.findElement(By.xpath('//div[@id="choices"]'))

        expect(displayed).toBeTruthy

    });

    test('add duo button', async () => {
        await driver.findElement(By.xpath('//button[@id="draw"]')).click()

        await driver.findElement(By.xpath('//button[text(), "Add to Duo"]')).click()

        const displayed = await driver.findElement(By.xpath('//div[text()="player-duo"]'))

        expect(displayed).toBeTruthy

    })
})
