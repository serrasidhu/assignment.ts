"use strict";
//Create a function that takes an array, an index, and a value as parameters.
// Inside the function, use the splice method to insert the value at the specified index in the array. 
//Return the modified array.
function insertValueAtIndex(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
let originalArr = [1, 2, 3, 4, 5, 6];
let insertionIndex = 2;
let insertionValue = 100;
let modifiedArray = insertValueAtIndex(originalArr, insertionIndex, insertionValue);
console.log('originalArr', originalArr);
console.log('modifiedArray', modifiedArray);
//Write a program that uses a while loop to print the first 25 integers.
let index = 1;
while (index <= 25) {
    console.log(index);
    index = index + 1;
}
// Write a program that uses a while loop to print the first 10 even numberss
let count = 2;
while (count < 21) {
    if (count % 2 == 0) {
    }
    console.log('The first 10 even number are ', count);
    count += 2;
}
// Implement a simple shopping cart program using an array. 
//Create functions to add items, remove items, and update quantities using the splice method. 
//Print the cart's contents after each operation
let shoppingCart = ['fruit', 'vegetable', 'Cookies'];
function addItems(itemsValue, itemsName) {
    shoppingCart.splice(itemsValue, 0, itemsName);
    return shoppingCart;
}
console.log(addItems(0, 'meat'));
let shoppingCart1 = ['fruit', 'vegetable', 'Cookies'];
function removeItems(items, removeItemsName) {
    shoppingCart1.splice(0, items, removeItemsName);
    return shoppingCart1;
}
console.log(removeItems(2, "meat"));
let shoppingCart2 = ['fruit', 'vegetable', 'Cookies'];
function updateItems(item, updateItemsName) {
    shoppingCart2.splice(item, 1, updateItemsName);
    return shoppingCart2;
}
console.log(updateItems(1, "meat"));
//Create a function that takes a positive integer as parameter and 
//uses a while loop to calculate and return the factorial of that number.
function factorial(num) {
    let integers = 1;
    while (num > 0) {
        integers *= num;
        num--;
    }
    return integers;
}
console.log("The value of factorial is", factorial(5));
//Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let num = [1, 2, -3, 4, 5, -6, 7, 8];
let value = 0;
while (value < num.length) {
    if (num[value] < 0) {
        num.splice(value, 1);
    }
    value++;
}
console.log(num);
//Create a function that takes an array of numbers as parameter.
// Use a while loop to calculate and return the sum of all the numbers in the array.
function array(num) {
    let value1 = 0;
    let sumNo = 0;
    while (value1 < num.length) {
        sumNo += num[value1];
        value1++;
    }
    return sumNo;
}
console.log(array([1, 2, 3, 4, 5]));
// Implement a program that takes a list of temperatures in Celsius as input from the user.
// Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array.
// Use a while loop to perform the conversion for each temperature.
let celsiusTemps = [0, 10, 20, 30, 40];
let fahrenheitTemps = [];
let i = 1;
while (i < celsiusTemps.length) {
    let fahrenheit = (celsiusTemps[i] * 9) / 5 + 32;
    fahrenheitTemps.push(fahrenheit);
    i++;
}
console.log(fahrenheitTemps);
