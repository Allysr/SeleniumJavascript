import { By } from "selenium-webdriver";
import { expect } from "chai";

export default class ProductsPage {

    constructor(driver) {
        this.driver = driver;
        this.addCartButton = By.css('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.shoppingCartIcon = By.id('shopping_cart_container');
        this.title = By.className('title');
    }

    async addItemToCart() {
        await this.driver.findElement(this.addCartButton).click();
        await this.driver.findElement(this.shoppingCartIcon).click();
        const title = await this.driver.findElement(this.title).getText();
        expect(title).to.be.eq('Your Cart');
    }


}