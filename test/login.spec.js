import LoginPage from "../pages/loginPage.js";
import BasePage from "../pages/basePage.js";

describe('Login', () => {
    let base;
    let login;

    beforeEach(async () => {
        base = new BasePage();
        await base.open();
        login = new LoginPage(await base.getDriver());
    })

    it('Login successful', async () => {
        await login.validLogin();
    })
    
    it('Login locked', async () => {
        await login.lockedLogin();
    })
    
    afterEach(async () => {
        await base.close();
    })

})