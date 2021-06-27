// Given a sorted array of integers a, find an integer x from a such that the value of 
// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)

// is the smallest possible (here abs denotes the absolute value). If there are several possible answers, output the smallest one. 
// Example 
// For a = [2, 4, 7], the output should be absoluteValuesSumMinimization(a) = 4. 
// For a = [2, 4, 7, 6], the output should be absoluteValuesSumMinimization(a) = 4. 
// For a = [2, 4, 7, 6, 6], the output should be absoluteValuesSumMinimization(a) = 7. 
// For a = [2, 4, 7, 6, 6, 8], the output should be absoluteValuesSumMinimization(a) = 7. 
// Hints - Math.floor() 

const absoluteValuesSumMinimization = (array) => {
	const isEven = array.length % 2 === 0;
	const halfOfArray = array.length / 2;

	return isEven
		? array[halfOfArray - 1]
		: array[Math.floor(halfOfArray)];
}

let a = [2, 4, 7];
let b = [2, 4, 7, 6];
let c = [2, 4, 7, 6, 6];
let d = [2, 4, 7, 6, 6, 8];

console.log(absoluteValuesSumMinimization(a));
console.log(absoluteValuesSumMinimization(b));
console.log(absoluteValuesSumMinimization(c));
console.log(absoluteValuesSumMinimization(d));