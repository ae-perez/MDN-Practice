console.log('sort by age');

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let arr = [pete, john, mary];

function sortByAge(users) {
  //code here
  users.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
