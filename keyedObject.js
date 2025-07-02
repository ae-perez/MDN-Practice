console.log('keyed object');

let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

let usersById = groupById(users);

function groupById(arr) {
  return arr.reduce((a, b) => {
    if (!a[b.id]) {
      a[b.id] = b;
    }
    return a;
  }, {});
}

console.log(usersById);

/*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
