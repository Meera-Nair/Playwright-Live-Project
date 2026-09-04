import{test,expect} from '@playwright/test'
import Login from '../pages/Login'
import random from '../Helpers/random'


test.beforeEach(async ({page})=>{
await page.goto("https://www.demoblaze.com/")    
const signuppage=new Login(page)
//await signuppage.LoginModal()
})

test('DemoBlaze SignUp',  async({page})=>{

//await page.goto("https://www.demoblaze.com/")
const signuppage=new Login(page)
await signuppage.LoginModal()
const randomdata=new random()
await signuppage.SignUp(randomdata.generateUsername(),randomdata.generatePassword())

})

test('DemoBlaze SignUpClose',  async({page})=>{

await page.goto("https://www.demoblaze.com/")
const Signup=new Login(page)
await Signup.SignUpClose()

})
