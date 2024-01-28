import { By} from "selenium-webdriver";
import { expect } from "chai";

export default class CartPage {

    constructor(driver) {
        this.driver = driver;
        this.checkoutButton = By.css('[data-test="checkout"]');
        this.title = By.className('title');
    }

     async goToCheckout() {
       await this.driver.findElement(By.css('[data-test="checkout"]')).click();
       const titleCheckout = await this.driver.findElement(this.title).getText();
       expect(titleCheckout).to.be.eq('Checkout: Your Information');
    }

    
}