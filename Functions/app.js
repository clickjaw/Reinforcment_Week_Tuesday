"use strict";


// ### Exercise 1

// Define a function max() that takes two numbers as arguments and returns 
// the largest of them. Use the if-then-else construct available in Javascript.

// function max(){
//     let numOne = Math.floor(Math.random() * 10);
//     let numTwo = Math.floor(Math.random() * 10);

//     if (numOne > numTwo){
//         console.log(`${numOne} is greater than ${numTwo}.`);
//     }else if (numOne == numTwo){
//         console.log('Holy Shit. 2 random numbers are equal.')
//     }else{
//         console.log(`${numTwo} is greater than ${numOne}`);
//     }
// }
// max();

function max(numOne, numTwo){

    if (numOne > numTwo){
        console.log(`${numOne} is greater than ${numTwo}.`);
    }else if (numOne == numTwo){
        console.log('Holy Shit. 2 random numbers are equal.')
    }else{
        console.log(`${numTwo} is greater than ${numOne}`);
    }
}
max(7,8);




// ### Exercise 2

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a,b,c){

    let largestNumber = Math.max(a,b,c);
    console.log(largestNumber);
}
maxOfThree(7, 84, 38);
// ### Exercise 3

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function trueVowel(letter){

   if (letter == 'a'|| letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
    console.log('true')
   }else{
    console.log("false")
   }
}
trueVowel('u');


// ### Exercise 4 

// Define a function sum() and a function multiply() that sums and 
// multiplies (respectively) all the numbers in an array of numbers.
//  For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.


let sumNumbers = [1,2,3,4];
let sum = sumNumbers.reduce(function sumFunction(sum, number){
    let realSum = sum + number;
    return realSum;
})
console.log(sum);

let productNumbers = [1,2,3,4];
let product = productNumbers.reduce(function product(product, item){
    let realProduct = product * item;
    return realProduct;
})
console.log(product);


// ### Exercise 5 
// Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".

function reverseString(str){
let splitString = str.split("");
let reverseArray = splitString.reverse();
let joinArray = reverseArray.join("");
return console.log(joinArray);
}
reverseString("jag testar");



// ### Stretch Goal Exercise 1

// Write a function `lengths` that accepts a single parameter as an argument, 
// namely an array of strings. The function should return an array of numbers 
// where each number is the length of the corresponding string.

//  ["hello", "what", "is", "up", "dude"]; => [5, 4, 2, 2, 4]

function lengths(string){
    for (let i = 0; i < string.length; i++){
    let splitString = string.split("")
    let finalSplitString = splitString.length;
    return finalSplitString;
}
}
console.log(lengths("tyler", "is"));


// ## Stetch Goal Exercise 2
// Turn all functions you have written into arrow functions [click here for info]
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)