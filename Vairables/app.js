"use strict";


// - Exercise 1
//         Create two variables. One should equal “My name is:
//          “ and the other should equal your name. 
//         Print the two variables in one print message.

let greet = "My name is: ";
let myName = "Tyler";
console.log(`${greet}${myName}`)

// - Exercise 2
//     Ask the user “What is your balance”. Make sure to save that
//      answer in a variable balance. Subtract 10 from that balance. 
//      Print "You lost $10. Your new balance is: [THE BALANCE]".

let balance = prompt("What is your balance?");
let newBalance = balance - 10;
console.log(`You lost $10. Your new balance is : ${newBalance}`);

// - Exercise 3
//     Create a variable. Ask the user to “Enter your number grade”. 
//     Ask the user “Enter your extra credit". 
//     Print the grade plus extra credit.

let grade = Number(prompt("Enter your number grade: "));
let credit = Number(prompt("Enter your extra credit: "));
let finalGrade = (grade + credit);
console.log(`Your final grade is: ${finalGrade}`);

// - Exercise 4
//     Create a variable called balance and save it after asking the 
//     user “What is your balance?”. Create a variable called deduction
//      and save it when asking the user “How much do you want to deduct?” 
//      Print the remaining balance after subtracting the deduction.
let balance1 = Number(prompt("What is your balance?"));
let deduction = Number(prompt("How much do you want to deduct?"));
let remainingBalance = (balance1 - deduction);
console.log(`Your remaining balance:$${remainingBalance}`)