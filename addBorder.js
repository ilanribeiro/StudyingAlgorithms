// Given a rectangular matrix of characters, add a border of asterisks(*) to it. 
// Example: 
// For 
// picture = ["abc",
// "ded"]

// the output should be 
// addBorder(picture) = ["*****",
// "*abc*",
// "*ded*",
// "*****"]

// Hints - concat() - unshift() - push() 

let picture = ["abc", "ded"];
const ast = '*';

const addBorder = (array) => {
	const borderLength = array[0].length + 2;
	let border = ast.repeat(borderLength);
	let newPicture = [];
	// console.log(border)

	for (let i = 0; i < picture.length; i++) {
		const newLine = ast.concat(picture[i], ast);
		newPicture.push(newLine); 
	}

	newPicture.unshift(border);
	newPicture.push(border);

	return newPicture;
};

// const letterWithAsterisk = `${ast}${picture[0]}${ast}`;
console.log(addBorder(picture));
