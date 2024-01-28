import { Builder } from "selenium-webdriver";
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.URL

export default class BasePage {
    
    constructor() {
        this.driver;
    }

    async open() {
        this.driver = new Builder().forBrowser('chrome').build();
        this.driver.get(url);
    }

    async getDriver() {
        return this.driver
    }

    async close() {
        this.driver.quit();
        this.driver = null;
    }
}