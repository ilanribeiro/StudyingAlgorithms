// 1. Write a function that returns the sum of two numbers.
// 2. Write a function that returns the sum of all numbers regardless of # of params. 
// Example 
// For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3. 
// Hints - Arithmetic Operators - Rest Operator - forEach() 

const param1 = 10;
const param2 = 5;
const param3 = 9;

// 1. Write a function that returns the sum of two numbers.
const sumOfTwoNumbers = (a, b) => {
	return a + b;
};

// 2. Write a function that returns the sum of all numbers
const sumOfAllNumbers = (...values) => {
	console.log(...values)
	return values.reduce((a, b) => a + b, 0)
};

console.log('sumOfTwoNumbers: ', sumOfTwoNumbers(param1, param2));
console.log('sumOfAllNumbers: ', sumOfAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log('sumOfAllNumbers2: ', sumOfAllNumbers(param1, param2, param3));