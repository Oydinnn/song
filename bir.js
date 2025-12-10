class Product{
  id
  name
  price
  constructor(id, name, price){
    this.id = id,
    this.name = name,
    this.price = price
  }
}

const product1 = new Product(1, "olma", 10000)
const product2 = new Product(2, "anor", 15000)
const product3 = new Product(3, "nok", 20000)

class Card{
  constructor(){
    this.products = []
  }

  addProduct(product){
    this.products.push(product)
  }
  removeProduct(id){
    this.products.remove(id)
  }
  getTotalPrice(){
    return this.products.reduce((sum, p) =>  sum + p.price, 0)
  }

  getProduct(){
    return this.products
  }

  getProductCount(){
    return this.products.length
  }

  clearCart(){
    return this.products = []
  }

  findTheMostExpensiveProduct(){
  return this.products.reduce(
    (max, p) => p.price > max.price ? p : max,
    this.products[0]
  )
}

 searchProducts(name){
    return this.products.filter(p => p.name === name)
  }

}
const card = new Card()

card.addProduct(product1)
card.addProduct(product2)
card.addProduct(product3)


console.log(card.getProduct());
console.log(card.getTotalPrice());
console.log(card.getProductCount());
// console.log(card.clearCart());
console.log(card.findTheMostExpensiveProduct());
console.log(card.searchProducts("olma"));









