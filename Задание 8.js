let myMap = new Map();
myMap.set('dog', 'black');
myMap.set('cat', 'ginger');
myMap.set('bird', 'yellow');

for (let [key, value] of myMap) {
  console.log( `Ключ ${key} Значение ${value}`)
}
