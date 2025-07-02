console.log('Get Average Age');

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 29 };

let arr = [john, pete, mary];

function getAverageAge(users) {
  let ageAverage = 0;

  for (let user of users) {
    ageAverage += user.age;
  }
  return ageAverage / users.length;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
