/*1. Is Five Define a function isFive that will return true if a number is equal
   to 5 and false if it is not.
*/
let isFive = (num) => num === 5;



/*2. Is Odd Write a function isOdd that takes in a number as an argument and
   returns true if the number is odd and returns false otherwise.
*/
let isOdd = number => {
  if (typeof number !== 'number') {
    throw new TypeError('enter a number'); // throw is a return word
  } else {
    return !!(number % 2);
  };
};



/*3. Array  of the Range Write a function myRange(min, max, step) that takes in
      3 numbers as parameters. The function should return an array of the
      numbers between and inclusive of min and max at step intervals.
*/


function myRange(min, max, step = 1) {
  const array = []
  if(typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError();
  }

  for (let i = min; i <= max; i += step) {
    array.push(i);
  }
  return array
}
/*4. Fizz Buzz Define a function fizzBuzz(max) that takes a number and prints
   every number from 0 to max (not inclusive) that is divisible by either 3 or
   5, but not both.
*/

function fizzBuzz(max) {
  if (typeof max !== 'number') {
    throw new TypeError('needs to be a number')
  }
  if (max < 0) {
    throw new RangeError('enter pos num')
  }

  const array = []
  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      array.push(i);
    }
  }
  console.log(...array);
  return array
}
console.log(fizzBuzz(50))

module.exports = { isFive, isOdd, myRange, fizzBuzz }
