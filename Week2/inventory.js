const products = []

const product1 = {
    name: "Laptop",
    price: 2000,
    stock:200
}

const product2 = {
    name: "HeadPhone",
    price:200,
    stock:300
}

products.push(product1, product2)
console.log(products)
// Function to add a new product  to the product array
function addProduct(name, price,stock){
    debugger
    const newProduct = {
        name: name,
        price: price,
        stock: stock
    }
    products.push(newProduct)
}
addProduct('keyboard', 200, 1000)
