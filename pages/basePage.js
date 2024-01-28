import { Builder } from "selenium-webdriver";

export default class BasePage{
    constructor(){
        this.driver;
    }

    async open(){
        this.driver = new Builder().forBrowser('chrome').build();
        this.driver.get('https://www.saucedemo.com/');
    }

    async getDriver(){
        return this.driver
    }

    async close(){
        this.driver.quit();
        this.driver = null;
    }
}