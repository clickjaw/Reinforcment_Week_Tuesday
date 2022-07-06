"use strict";
// #### Exercise 1
// 1. Create an array.
let namesArray = [];
// 2. Add four names to the array.
namesArray.push("matthew", "mark", "luke", "john");
// 3. Print the array one entry at a time.
for (let i = 0; i <namesArray.length; i++){
    console.log(namesArray[i])
}
// #### Exercise 2
// 1. Create an array with 5 numbers in it.
let numberArray = [1, 2, 3, 4, 5];
// 2. Print the numbers one entry at a time.
for (let j = 0; j < numberArray.length; j++){
    console.log(numberArray[j]);
}

// #### Exercise 3
// 1. Create an array with 4 names.
let marxBros = ["Groucho", "Harpo", "Zeppo", "Chico"];
// 2. Print the third item in the array.
console.log(marxBros[2]);
// 3. Delete the second item.
marxBros.splice(1,1);
// 4. Print the third item in the array again.
console.log(marxBros[2]);


// ### Exercise 4 
// Create the array [5,3,7, 4]. Pass the array to a new function to do the following:
let numberList = [5,3,7,4];
// Print the array.
console.log(numberList);
// Print the 3rd element of the numberList.
console.log(numberList[2]);
// Delete the second element.
numberList.splice(1,1);
// Print the 3rd index element.
console.log(numberList[2]);



// ## NOTE: Below are exercise that require knowlede of Higher Order Array Methods. Watch the attached video to gain more understanding of how to use these methods:

// [8 must know Array Methods](https://www.youtube.com/watch?v=R8rmfD9Y5-c&t=153s)



// ### Exercise 5 

// Given an array of integers, use the 'map' method to create a new array in which the double of each integer in the first array is stored, and log it to the console.

// [477, 8914, 40461, 599148]; => [954, 17828, 80922, 1198296]

let numArray = [477, 8914, 40461, 599148];
let newNumArray = numArray.map(j => j * 2);
console.log(newNumArray);



// ### Exercise 6

// Given an array of singular nouns, use the map function create a new array that stores the plural noun of each of the words in the first array, and log it to the console (assume that the singular nouns can be made plural by adding a 's').

// [ 'pen', 'book', 'code' ] => ['pens', 'books', 'codes']

let singleNounArray = ['pen', 'book', 'code'];
let pluralNounArray = singleNounArray.map(n => n + 's');
console.log(pluralNounArray);

// ### Exercise 7 

// Given an array of costs of different products, use the filter function 
// to create a new array with the costs from the input array if 
// the cost is <= $350, and print it to the console.
// [390, 190, 311.85, 67, 19048, 5000, 670] => [190, 311.85, 67]

let costArray = [390, 190, 311.85, 67, 19048, 5000, 670];
let newCostArray = costArray.filter(n => n <= 350)
console.log(newCostArray);

// ### Exercise 8


// Given an array of objects with the city name and population, use the filter 
// funciton to create an array with objects from the first array if the population
//  of that particular city is >= 5 million.

let cityArray = [
  { "name": "Shanghai", "population": 24300000 },
  { "name": "Los Angeles", "population": 3792621 },
  { "name": "New Delhi", "population": 21800000 },
  { "name": "Mumbai", "population": 18400000 },
  { "name": "Chicago", "population": 2695598 },
  { "name": "Houston", "population": 2100263 },
];
let newCityArray = cityArray.filter(({population}) => population >=5000000);
console.log(newCityArray);



// ### Exercise 9 

// (i) Given an array of numbers, find the sum of every element in the array, and log it to the console.

// [1, 2, 3, 4, 5] =>  15
let sumArray = [1,2,3,4,5];
let sum = sumArray.reduce((accumulator, current) => accumulator + current);
console.log(sum);


// ### Exercise 10 

// Given an array of numbers, find the average of them, and log it to the console.

// [1, 2, 3, 456, 108115, 45909.15154, 1988.1545, 145e8] => 1812519559.288255

let numAverageArray = [1, 2, 3, 456, 108115, 45909.15154, 1988.1545, 145e8];
let averageSum = (numAverageArray.reduce((a, b) => a + b) / numAverageArray.length);
console.log(averageSum);
