// You are given a two-digit integer n. Return the sum of its digits. 
// Example 
// For n = 29, the output should be addTwoDigits(n) = 11. 
// Hint - split() - parseInt() - toString() - reduce() 

const sumOfDigits = (num) => {
	const numbers = num.toString().split('');
	const firstDigit = parseInt(numbers[0]);
	const secondDigit = parseInt(numbers[1]);
	
	return firstDigit + secondDigit;
};

const sumOfAllDigits = (...num) => {
	const numbers = num.toString().split('');
	
	return numbers.reduce((a, b) => parseInt(a) + parseInt(b), 0)
};



console.log('sumOfDigits: ', sumOfDigits(29))
console.log('sumOfAllDigits: ', sumOfAllDigits(2937547))