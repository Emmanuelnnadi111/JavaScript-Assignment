//creating a function to increase a line with the an integer parsed to the argument
function drawLine(lineLength) {
	let line = "";
	for (let i = 0; i < lineLength; i++) {
		line += "=";
	}
	console.log(line); // =
}

drawLine(1);
//The drawLine function takes an integer as an argument and creates a line of equal signs (=) with the length specified by the argument.

//Regex Methods and examples

// The Exec - it searches for matches and returns an array of found matches
const string = "Am in love with JavaScript";
const re = /[a-z][A-Z]/;
const result =  re.exec(string);
console.log(result);//['aS', index: 19, input: 'Am in love with JavaScript', groups: undefined]

// The Test Method - it searches for matches and returns a boolean expression (true/false)
const string1 = "Am in love with JavaScript";
const re1 = /[a-z][A-Z]/;
const result1 =  re1.test(string1);
console.log(result1);// true

// The Search Method - it searches for the first occurrence of a match and returns the index of that match
const string2 = "Am in love with you 55";
const re2 = /\d/;
const result2 =  string2.search(re2);
console.log(result2);// 20

// The Replace Method - it replaces a substring of the string with another substring
const string3 = "Am in love with you 55";
const re3 = /\d/;
const result3 =  string3.replace(/55/, "JavaScript");
console.log(result3);// Am in love with you JavaScript

// The Split Method - it splits the given string into an array of substring
const string4 = "Am in love with you 55";
const re4 = /\s/;
const result4 =  string4.split(re4);
console.log(result4);//  ['Am', 'in', 'love', 'with', 'you', '55']

// The Match Method - it returns an array of matched pattern
const string5 = "Am in love with you 55 and 55";
const re5 = /\d+/g;
const result5 =  string5.match(re5);
console.log(result5);//  ['55', '55']

// The MatchAll Method - it returns an array of matched pattern the index and the entire string
const sentence = "JavaScript1JavaScript";
const regex = /JavaScript\d/g;
let results = sentence.matchAll(regex);
// looping through the iterator
for (let result of results) {
	console.log(result); // ['JavaScript1', index: 0, input: 'JavaScript1JavaScript', groups: undefined]
}

//Explain vividly 15 array methods and show 2 examples of each
//Array Push Method - adds a new string to the array and returns the array
const arrStr = ["Am loving this challenge"];
arrStr.push("JavaScript is awesome!");
console.log(arrStr); //['Am loving this challenge', 'JavaScript is awesome!']

//Array Pop Method - removes the last  index of the array and returns it
const arrStr1 = [
	"JavaScript is Amazingly Good",
	"JavaScript is Awesome!",
	"So much love it",
];
console.log(arrStr1.pop()); //So much love it

//Array Sort Method - sorts the element in the array in alphabetical order or in an orderly manner without changing the original elements of the arrange
const arrStr2 = [
	"Am loving this challenge",
	"This is great",
	"Best challenge",
	"Finish on time",
];
arrStr2.sort();
console.log(arrStr2); //['Am loving this challenge', 'Best challenge', 'Finish on time', 'This is great']

//Array Slice Method - returns a section of the elements in the array
const arrStr3 = [
	"Am loving this challenge",
	"This is great",
	"Best challenge",
	"Finish on time",
];
 console.log(arrStr3.slice(2)); //  ['Best challenge', 'Finish on time']

//Array Split Method


//Array Unshift Method - adds the new elements to the beginning of the array
const arrStr5 = [
	1,
    2,
    3
];
arrStr5.unshift(4, 5);
console.log(arrStr5); // [4, 5, 1, 2, 3]

//Array Shift Method - removes the first element in an array and returns it
const arrStr6 = [
	"Am loving this challenge",
	"This is great",
	"Best challenge",
	"Finish on time",
];
arrStr6.shift(); // ['This is great', 'Best challenge', 'Finish on time']
console.log(arrStr6);

//Array Reverse Method - reverse the elements in the array to start from left to right
const arrStr7 = [
	"Am loving this challenge",
	"This is great",
	"Best challenge",
	"Finish on time",
];
arrStr7.reverse();
console.log(arrStr7); // ['Finish on time', 'Best challenge', 'This is great', 'Am loving this challenge']

//Array IndexOf Method - returns the index of a given element
const arrStr8 = [
	"Am loving this challenge",
	"This is great",
	"Best challenge",
	"Finish on time",
];
console.log(arrStr8.indexOf("This is great")); // 1


//Array lastIndexOf Method - returns the index of an element specified
const arrStr9 = [
	"Am loving this challenge",
	"This is great",
	"Best challenge",
	"Finish on time",
];
console.log(arrStr9.lastIndexOf("Best challenge")); // 2


//Array Reduce Method - returns a callback function and iterate on each element of the array
const arrStr10 = [
	1,
    2,
    3,
    4
];
const reduceArr = arrStr10.reduce((a, b) => a + b);
console.log(reduceArr); // 10

//Array Join Method - converts all the element in an array into a string and separate them with the specified separator 
const arrStr11 = [
	"Am loving this challenge",
	"This is great",
	"Best challenge",
	"Finish on time",
];
console.log(arrStr11.join(" + ")); // Am loving this challenge + This is great + Best challenge + Finish on time


//Array Splice Method - changes or replaces the content of an array
const arrStr12 = [
	"Am loving this challenge",
	"This is great",
	"Best challenge",
	"Finish on time",
];
arrStr12.splice(2, 0, "Join me");
console.log(arrStr12); // ['Am loving this challenge', 'This is great', 'Join me', 'Best challenge', 'Finish on time']
//Adds 1 element to the array

const arrStrS12 = [
	"Am loving this challenge",
	"This is great",
	"Best challenge",
	"Finish on time",
];
arrStrS12.splice(2, 1);
console.log(arrStrS12); // ['Am loving this challenge', 'This is great', 'Finish on time']
//Removes 1 element from the array

//Array Concat Method - combines two or more array but doesn't change or modify the original content of the array
const arrStr13 = [
	"Am loving this challenge",
	"This is great",
	"Best challenge",
	"Finish on time",
];
const numbers = [1, 2, 3, 4];
console.log(arrStr13.concat(numbers)); // ['Am loving this challenge', 'This is great', 'Best challenge', 'Finish on time', 1, 2, 3, 4]


//Array Find Method - returns the element that meets the required condition
const arrStr14 = [
	"Am loving this challenge",
	"This is great",
	"Best challenge",
	"Finish on time",
];

console.log(arrStr14.filter((arrStr14) => arrStr14.length > 20)); // ['Am loving this challenge']

