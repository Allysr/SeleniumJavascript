import { By} from "selenium-webdriver";
import { expect } from "chai";

export default class OverviewPage {

    constructor(driver) {
        this.driver = driver;
        this.finishButton = By.css('[data-test="finish"]')
        this.title = By.className('title');
        this.titleComplete = By.className('complete-header');
    }

     async finish() {
       const titleOverview = await this.driver.findElement(this.title).getText();
       expect(titleOverview ).to.be.eq('Checkout: Overview');
       await this.driver.findElement(this.finishButton).click();

       const titleComplete = await this.driver.findElement(this.titleComplete).getText();
       expect(titleComplete).to.be.eq('Thank you for your order!')
    }

    
}