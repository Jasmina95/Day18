// Only change code below this line
let shoppingList = new Map([
  ["Banana", 3],
  ["Pineapple", 5],
  ["Pear", 2],
  ["Carrot", 10],
  ["Apple", 1.5]
]);

let arrKey = [];
for (let key of shoppingList.keys()) {
  arrKey.push(key);
}
for (let i = 0; i < arrKey.length; i++) {
  console.log(`groceries: ${arrKey[i]}`);
}

let arrValue = [];
for (let value of shoppingList.values()) {
  arrValue.push(value);
}

for (let i = 0; i < arrValue.length; i++) {
  console.log(`amount: ${arrValue[i]}`);
}

for (let [key, value] of shoppingList.entries()) {
  console.log(`[ '${key}', ${value} ]`);
}
// Only change code above this line

module.exports = { shoppingList, arrKey, arrValue };
