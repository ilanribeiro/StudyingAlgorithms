// Given an array of strings, return another array containing all of its longest strings. 
// Example 
// For inputArray = [“aba”, “aa”, “ad”, “vcd”, “aba”], the output should be allLongestStrings(inputArray) = [“aba”, “vcd”, “aba”]. 

const inputArray = ['aba', 'aa', 'ad', 'vcd', 'aba'];

const allLongestStrings = (array) => {
	const longestString = array[0].length;
	let newArray = [];

	array.map(currentString => {
		if (currentString.length > longestString) {
			longestString = currentString.length;
		}
	})

	newArray = array.filter(currentString => currentString.length === longestString)

	return newArray;
};

allLongestStrings(inputArray);
