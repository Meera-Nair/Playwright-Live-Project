import{test,expect} from '@playwright/test'
import Login from '../pages/Login'
import Homepage from '../pages/HomePage'
import credentials from '../utils/credentials.json' with {type:'json'}


for(const data of credentials){

test(`DemoBlaze Login for -${data.username} - ${data.result}`,  async({page})=>{

await page.goto("https://www.demoblaze.com/")
const login=new Login(page)
await login.LoginModal(data.username,data.password)


        if (data.result === 'pass') {

            await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${data.username}`)
            const homepage= new Homepage(page)
            await homepage.Signout()

        } else {

               // Handle the browser popup
            page.once('dialog', async dialog => {
                expect(dialog.message()).toBe(data.message)
                await dialog.accept()
            })
        }

}

)
}