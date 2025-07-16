// string ---> string is collection character

// data = "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web,"
// data = 'JavaScript, often abbreviated as JS, is "a programming language" and core technology of the World Wide Web'
// data = `'JavaScript, often 'abbreviated' as JS, is "a programming language" and core technology of the World Wide Web'`

// console.log(data);


let data = "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web,"
let num = "6886480000423"
let space = "         js          "

// console.log(data.toUpperCase());
// console.log(data.toLowerCase());

// console.log(data.split(","));

// console.log(data.slice(2 , 15));

// console.log(data.at(2));

// console.log(num.padStart(20 , "X"))

// console.log(num.padEnd(15 , "X"))

// console.log(space.trim());
// console.log(space.trimStart());
// console.log(space.trimEnd());

// console.log(data.concat(num));

// console.log(num.repeat(2));

// console.log(space.replace("js","html"));


// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451

// let x = 15438;
// let y = x.toString()
// let z = y.split("")

// let rev = ()=>{
//     return z.reverse()
// }
// let reversestr = rev().join("")
// let reversenum = Number(reversestr)
// console.log(reversenum);
 


// 2. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.


// let alphabetical = (str) =>{
//     return str.split("").sort().join("")
// }
// console.log(alphabetical("webmaster"));


// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

// let uppercase = (str) =>{
//     return str.split(" ").map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(" ")
// }
// console.log(uppercase("the quick brown fox"));

// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// function findLongestWord(str) {
//     let words = str.split(" ");
//     let longest = "";

//     words.forEach(word => {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     });
//     return longest;
// }
// let result = findLongestWord("Web Development Tutorial");
// console.log(result); 

// 5.Write a JavaScript function that checks whether a number is perfect.

// function isPerfectNumber(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//    return sum === num;
// }
// console.log(isPerfectNumber(6));  

