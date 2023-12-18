
// ________________________________Task1_____________________________________

// Create a function that takes the age in years and returns the age in days.
// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300
// Notes
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

function calcAge(p) {
    return p * 365;
}
console.log(calcAge(65));
console.log(calcAge(20));



// _____________________________Task2________________________________________

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Examples
// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100

function points(a, b) {
    return 2 * a + 3 * b;
}

console.log(points(1, 1));
console.log(points(7, 5));
console.log(points(38, 8));
// ____________________________Task3__________________________________________
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// lessThan100(22, 15) ➞ true
// 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// 83 + 34 = 117

// lessThan100(3, 77) ➞ true

function lessThen100(a, b) {
    if (a + b <= 100) {
        return true;
    } else {
        return false;
    }
}

console.log(lessThen100(22, 15));
console.log(lessThen100(83, 34));
console.log(lessThen100(3, 77));
// ___________________________Task4___________________________________

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

function addUp(num) {
    if (num == 1) {
       return 1;
    } else {
        return num + addUp(num - 1)
    }
}

console.log(addUp(4)) ;
console.log(addUp(13)) ;
console.log(addUp(600)) ;

// _______________________Task5_____________________________________


//You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
// Assume that the following array of drink objects needs to be sorted:
function sortDrinksByPrice(drinks) {
    const sortedDrinks = drinks.slice().sort((a, b) => a.price - b.price);
    return sortedDrinks;
}

let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "pepsi", price: 100 },
    { name: "cola", price: 163 },
];

console.log(sortDrinksByPrice(drinks));
