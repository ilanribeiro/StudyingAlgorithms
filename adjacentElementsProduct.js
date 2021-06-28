// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product. 
// Example 
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21. 
// 7 and 3 produce the largest product. 
// Hints - None 

const inputArray = [3, 6, -2, -5, 7, 3]
let pairElements = [];

const adjacentElementsProduct = (array) => {
	let biggerProduct = 0;

	array.map((number, index) => {
		const currentProduct = number * array[index + 1];
		
		if (currentProduct > biggerProduct) {
			biggerProduct = currentProduct;
			pairElements = [number, array[index + 1]]
		}
	})

	return biggerProduct;
};

console.log('adjacentElementsProduct: ', adjacentElementsProduct(inputArray));
console.log('pairElements: ', pairElements);
