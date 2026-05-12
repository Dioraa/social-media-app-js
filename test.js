//1. returnOnlyOddPeople(people)

const people = [
  { id: 1, name: "Arta" },
  { id: 2, name: "Blerim" },
  { id: 3, name: "Doni" },
  { id: 4, name: "Elira" },
];

function returnOnlyOddPeople(people) {
  let result = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].id % 2 !== 0) {
      result.push(people[i]);
    }
  }

  return result;
}
console.log(returnOnlyOddPeople(people));

// 2. maxNr(a, b)

function maxNr(a, b) {
  return a > b ? a : b;
}
console.log(maxNr(5, 10));
console.log(maxNr(150, 14));

//3. isLandscape(width, height)
function isLandscapee(width, height) {
  return width > height;
}

console.log(isLandscapee(180, 68));
console.log(isLandscapee(68, 188));

function isLandscape(width, height) {
  if (width > height) {
    return "Fotoja është në pozicion landscape";
  } else {
    return "Fotoja nuk është në pozicion landscape";
  }
}

console.log(isLandscape(12, 80));
console.log(isLandscape(80, 12));

// 4. fizzBuzz(input)

let input = prompt("Shkruaj nje numer:");
input = Number(input);

function fizzBuzz(input) {
  if (isNaN(input)) {
    return "not a number";
  }
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  }
  if (input % 3 === 0) {
    return "Fizz";
  }
  if (input % 5 === 0) {
    return "Buzz";
  }
}
alert(fizzBuzz(input));


// 5. checkSpeed(speed)
const speedLimit = 70;

function checkSpeed(speed) {
  if (speed <= speedLimit) {
    return "Ok";
  }

  const points = Math.floor((speed - speedLimit) / 5);

  if (points >= 12) {
    return "License suspended";
  }

  return points + " points";
}

console.log(checkSpeed(70));
console.log(checkSpeed(80));
console.log(checkSpeed(145));



// 6. countTruthy(array)

let count = 0;
function countTruthy(array) {

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      count++;
    }
  }

  return count;
}

console.log(countTruthy([0, null, undefined, 2, 3]));


//7. sum(limit)

const numbers = [1, 3, 5, 6, 7, 9, 10];
let total = 0;

function sum(numbers) {

  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];

    if (n % 3 === 0 || n % 5 === 0) {
      total = total + n;
    }
  }

  return total;
} 

console.log(sum(numbers))



// 8. Krijo një listë notash [9, 8, 5, 10] dhe gjej mesataren duke përdorur forEach.

let grades = [9, 8, 5, 10];
let suum = 0;

grades.forEach(function(nota) {
  suum += nota;
});

let average = suum / grades.length;

console.log("Mesatarja është: " + average);


// 9. Krijo një funksion getNumbersGreaterThan10(numbers) që kthen vetëm numrat më të mëdhenj se 10.

function getNumbersGreaterThan10(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(getNumbersGreaterThan10([5, 10, 20, 30, 40, 50, 2, 1, 0, 100]));


//10. Krijo një funksion formatProductNames(products) që kthen një array të ri ku çdo emër ka tekstin:
//["Product: Laptop", "Product: Mouse", "Product: Keyboard"]
let products = ["Phone", "Laptop", "Mouse"];

function formatProductNames(products) {
  return products.map(product => "Product: " + product);
}

console.log(formatProductNames(products));


