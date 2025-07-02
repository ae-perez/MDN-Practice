console.log('Map To Names');

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [john, pete, mary];

let names = [john.name, pete.name, mary.name];

console.log(names); // John, Pete, Mary

// ! SOLUTION:
// let names = users.map(item => item.name);
