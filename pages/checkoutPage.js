import { By } from "selenium-webdriver";

export default class CheckoutPage {

    constructor(driver) {
        this.driver = driver;
        this.firstName = By.css('[data-test="firstName"]')
        this.lastName = By.css('[data-test="lastName"]')
        this.postalCode = By.css('[data-test="postalCode"]')
        this.continue = By.css('[data-test="continue"]')
    }

    async addYourInformations() {
        await this.driver.findElement(this.firstName).sendKeys('Alicia');
        await this.driver.findElement(this.lastName).sendKeys('S');
        await this.driver.findElement(this.postalCode).sendKeys("12345");
        await this.driver.findElement(this.continue).click();
    }

}