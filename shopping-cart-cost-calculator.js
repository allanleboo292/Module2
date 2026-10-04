const booksPrice = 15
const tshirtPrice = 20
const booksQuantity = 2
const tshirtQuantity = 3
const taxRate = 0.08
const shippingFee = 5

const booksSubtotal = booksPrice * booksQuantity
const tshirtSubtotal = tshirtPrice * tshirtQuantity
const subtotal = booksSubtotal + tshirtPrice
const taxAmount = subtotal * taxRate

const totalCost = subtotal + taxAmount + shippingFee

console.log(totalCost)
