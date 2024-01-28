import { By } from "selenium-webdriver";
import { expect } from "chai";
import dotenv from 'dotenv';
dotenv.config();

const validLogin = process.env.VALID_LOGIN;
const lockedLogin = process.env.LOCKED_LOGIN;
const validPassword = process.env.VALID_PASSWORD;

export default class LoginPage {

    constructor(driver) {
        this.driver = driver;
        this.username = By.css('[data-test="username"]');
        this.password = By.css('[data-test="password"]');
        this.loginButton = By.css('[data-test="login-button"]');
        this.errorMessage = By.css('[data-test="error"]');
        this.title = By.className('title');

    }

    async validLogin() {
        await this.driver.findElement(this.username).sendKeys(validLogin);
        await this.driver.findElement(this.password).sendKeys(validPassword);
        await this.driver.findElement(this.loginButton).click();
        const title = await this.driver.findElement(this.title).getText();
        expect(title).to.be.eq('Products');
    }

    async lockedLogin() {
        await this.driver.findElement(this.username).sendKeys(lockedLogin);
        await this.driver.findElement(this.password).sendKeys(validPassword);
        await this.driver.findElement(this.loginButton).click();
        const errorMessage = await this.driver.findElement(this.errorMessage).getText();
        expect(errorMessage).to.be.eq('Epic sadface: Sorry, this user has been locked out.');
    }


}
