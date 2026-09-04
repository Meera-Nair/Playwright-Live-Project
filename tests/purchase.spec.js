import{test,expect} from '@playwright/test'
import Homepage from '../pages/HomePage'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import credentials from '../utils/credentials.json' with {type:'json'}
import userdetails from '../utils/userdetails.json' with {type:'json'}


const data=credentials[0]
const userdata=userdetails[0]

test.beforeEach(async ({page})=>{
await page.goto("https://www.demoblaze.com/")    
const login=new Login(page)
await login.LoginModal(data.username,data.password)
})

test('Purchase a Phone',async ({page})=>{

const homepage=new Homepage(page)
await homepage.gotoPhone()
await homepage.addProductstoCart()

}
)

test('Purchase a Laptop',async ({page})=>{

const homepage=new Homepage(page)
await homepage.gotoLaptop()
await homepage.addProductstoCart()

}
)

test('Purchase a Monitor',async ({page})=>{

const homepage=new Homepage(page)
await homepage.gotoMonitors()
await homepage.addProductstoCart()

}
)

test.afterEach(async ({page})=>{
const purchase=new Cart(page)
await purchase.completepurchase(userdata.fname,userdata.country,userdata.city,userdata.card,userdata.month,userdata.year)
await expect(page.locator('.sweet-alert')).toBeVisible();
await expect(page.locator('.sweet-alert')).toContainText('Thank you for your purchase!')
await expect(page.locator('.sweet-alert')).toContainText(userdata.card)
await expect(page.locator('.sweet-alert')).toContainText(userdata.fname)
//await purchase.Signout()
})


