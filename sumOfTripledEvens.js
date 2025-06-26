console.log('sumOfTripledEvens');

// original -- using for loop ----------------------------------------------------------------
// function sumOfTripledEvens(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     // step 1: if the element is any even number
//     if (array[i] % 2 === 0) {
//       // step 2: multiply this number by three
//       const tripleEvenNumber = array[i] * 3;

//       // step 3: add the number to the total
//       sum += tripleEvenNumber;
//     }
//   }
//   return sum;
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(sumOfTripledEvens(arr)); // OUTPUT: 18

// sumOfTripledEvenMapped using map method ----------------------------------------------------------------
// function sumOfTripledEvensMapped(num) {
//   let sum = 0;
//   if (num % 2 === 0) {
//     sum += num * 3;
//   }
//   return sum;
// }
// const arr = [1, 2, 3, 4, 5];
// const mappedTripleEvens = arr.map(sumOfTripledEvensMapped);
// console.log(mappedTripleEvens);

// sumOfTripledEvensFiltered using filter method ----------------------------------------------------------------
// function sumOfTripledEvensFiltered(num) {
//   let sum = 0;
//   if (num % 2 === 0) {
//     sum += num * 3;
//   }
//   return sum;
// }

// const arr = [1, 2, 3, 4, 5];
// const filteredTripleEvens = arr.filter(sumOfTripledEvensFiltered);
// console.log(filteredTripleEvens);

// sumOfTripledEvensReduced using reduce method ----------------------------------------------------------------
// const arr = [1, 2, 3, 4, 5];
// const reducedTripleEvens = arr.reduce((sum, currentItem) => {
//   if (currentItem % 2 === 0) {
//     sum += currentItem * 3;
//   }

//   return sum;
// }, 0);

// console.log(reducedTripleEvens);

// !! SOLUTION:
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

const arr = [1, 2, 3, 4, 5];
const sumOfTriples = sumOfTripledEvens(arr);
console.log(sumOfTriples);
