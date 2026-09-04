export default class Cart{
    
constructor(page){

    this.page=page
    this.placeOrder=page.getByRole('button', {name: 'Place Order'})
    this.detailsname=page.locator('#name')
    this.detailscountry=page.locator('#country')
    this.detailscity=page.locator('#city')
    this.detailscard=page.locator('#card')
    this.detailsmonth=page.locator('#month')
    this.detailsyear=page.locator('#year')
    this.purchase=page.getByRole('button', {name: 'Purchase'})
    this.signout=page.locator('#logout2')
}
async Signout(){
await this.signout.click()
}
async completepurchase(fname,country,city,card,month,year){    
    
    await this.placeOrder.click()
    await this.detailsname.fill(fname)
    await this.detailscountry.fill(country)
    await this.detailscity.fill(city)
    await this.detailscard.fill(card)
    await this.detailsmonth.fill(month)
    await this.detailsyear.fill(year)
    await this.purchase.click()

}
}
