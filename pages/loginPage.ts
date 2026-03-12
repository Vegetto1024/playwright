import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
export class LoginPage extends BasePage
{
    readonly emailInput: Locator
    readonly passwordInput : Locator
    readonly loginButton: Locator
    constructor(page: Page){
    super(page)   
    this.emailInput = this.page.getByRole('textbox',{name: 'Email'})
    this.passwordInput = this.page.getByRole('textbox',{name: 'Password'})
    this.loginButton = this.page.getByRole('button',{name: 'Login'})
    }

    async login(username:string, password:string)
    {
        await this.emailInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }


}