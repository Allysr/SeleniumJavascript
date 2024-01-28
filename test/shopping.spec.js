import LoginPage from "../pages/loginPage.js";
import ProductsPage from "../pages/productPage.js";
import CartPage from "../pages/cartPage.js";
import CheckoutPage from "../pages/checkoutPage.js";
import OverviewPage from "../pages/overviewPage.js";
import BasePage from "../pages/basePage.js";

describe('Shopping', () => {
    let base;
    let login;
    let products;
    let cart;
    let checkout;
    let overview;

    beforeEach(async () => {
        base = new BasePage();
        await base.open();
        login = new LoginPage(await base.getDriver());
        products = new ProductsPage(await base.getDriver());
        cart = new CartPage(await base.getDriver());
        checkout = new CheckoutPage(await base.getDriver());
        overview = new OverviewPage(await base.getDriver());
    })

    it('Successful purchase', async () => {
        await login.validLogin();
        await products.addItemToCart();
        await cart.goToCheckout();
        await checkout.addYourInformations();
        await overview.finish();
    })

    afterEach(async () => {
        await base.close();
    })


})