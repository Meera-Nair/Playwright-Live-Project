export default class Login{

constructor(page){
this.signup=page.locator('a#signin2') //page.getByRole('link',{name: 'Sign up'})
this.signupusername=page.locator('#sign-username')
this.signuppassword=page.locator('#sign-password')
this.signupconfirm=page.getByRole('button', { name: 'Sign up' })
this.signupclose=page.locator('button[data-dismiss="modal"]', { hasText: 'Close' }).nth(1)
this.login=page.locator('#login2')
this.username=page.locator('#loginusername')
this.password=page.locator('#loginpassword')
this.clickLogin=page.getByRole('button', { name: 'Log in' })

}

async SignUp(usernamevalue,passwordvalue){

    await this.signup.click()
    await this.signupusername.fill(usernamevalue)
    await this.signuppassword.fill(passwordvalue)
    await this.signupconfirm.click()
}

async SignUpClose(){

    await this.signup.click()
    await this.signupclose.click()
}

async LoginModal(usernamevalue,passwordvalue){
 await this.login.click()
 await this.username.fill(usernamevalue)
 await this.password.fill(passwordvalue)
 await this.clickLogin.click()
}


}