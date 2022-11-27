
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))

    await driver.sleep(2000)

    const displayed = await title.isDisplayed()

    expect(displayed).toBe(true)
})

test('draw button ', async () => { 
    await driver.findElement(By.xpath('//button[@id="draw"]')).click()

    await driver.sleep(2000)

    const displayed = await driver.findElement(By.xpath('//div[@id="choices"]'))

    expect(displayed).toBeTruthy()

})

test('add duo button', async () => {
    await driver.findElement(By.xpath('//button[@id="draw"]')).click()

    await driver.findElement(By.xpath('//button[@onclick="chooseBot (3)"]')).click()
    //can't find a way to click add to duo button

    const displayed = await driver.findElement(By.xpath('//div[text()="player-duo"]'))

    expect(displayed).toBeTruthy()

})
