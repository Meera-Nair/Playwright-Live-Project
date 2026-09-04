export default class Homepage{
    
constructor(page){

    this.page=page
    this.products = page.locator('.card-title a')
    this.phone= page.getByRole('link', { name: 'Phones' })
    this.laptop= page.getByRole('link', { name: 'Laptops' })
    this.monitor= page.getByRole('link', { name: 'Monitors' })
    this.addToCart = page.getByRole('link',{name: 'Add to cart'})
    this.gotoCart= page.locator('#cartur')
    }
async Signout(){
await this.signout.click()
}

async gotoPhone(){
    await this.phone.click()
   
}

async gotoLaptop(){
await this.laptop.click()

}

async gotoMonitors(){
await this.monitor.click()

}

async addProductstoCart(){
    await this.products.first().click()
    await this.addToCart.click()
    await this.page.on('dialog', async dialog => {await dialog.accept()})
    await this.gotoCart.click()

}

}
