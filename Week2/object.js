let menuItem={}
menuItem.name = "Margaherita Pizza";
menuItem.price = 12.99;
menuItem.isAvailable = true;
console.log(menuItem);

console.log(menuItem.name);
console.log(menuItem['price']);

// Modify propertie menuItem.price = 14.99;
// updating the price

menuItem.price = 14.99;
console.log(menuItem.price);

// updating the availability
menuItem.isAvailable = false;
console.log(menuItem.isAvailable)

// Remove Properrties

delete menuItem.isAvailable;
console.log(menuItem);