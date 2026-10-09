let product = {}
product.name = "Wireless Mouse";
product["price"] = 29.99;
product.stock = 100;

console.log(product.name);
console.log(product['price']);

// Modify Properties

product.price = 34.99;
product["stock"] = 80;

// Delete Key Value

delete product.stock;
console.log(product);