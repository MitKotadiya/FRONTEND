// 1 Write a simple JavaScript program to print expected Output using the following array. 
// Sample array: myColor = ["Red", "Green", "White", "Black"]; 
// Red, Green, White, Black 
// Red+Green+White+Black 
// Red, Green, White 
// Red 
// Green, White 
// Red, Green, White, Black, orange 

// let myColor = ["Red", "Green", "White", "Black"]; 

// console.log(myColor.join(",")); // Red,Green,White,Black
// console.log(myColor.join("+")); // Red+Green+White+Black
// myColor.pop()                   // Red,Green,White
// console.log(myColor.join(",")); 
// console.log(myColor.shift());    // Red
// console.log(myColor.join(","));  // Green, White
// myColor.unshift('Red')
// myColor.push('Black', 'orange')
// console.log(myColor.join());    // Red,Green,White,Black,orange


// outout

// // Red, Green, White, Black 
// // Red+Green+White+Black 
// // Red, Green, White 
// // Red 
// // Green, White 
// // Red, Green, White, Black, orange 


// 2.Write a JavaScript program to get the sum of all array elements using for loop and foreach loop. 

// let a = [10,20,30] , sum = 0

// for(let i = 0 ; i < a.length; i++){
//     sum += a[i]   
// }
// console.log(sum);

// output

// 60

// let a = [10,20,30] , sum = 0

// a.forEach(a=>{
//     sum+= a
// })
// console.log(sum);

// output

// 60


// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic

// a = [10,20,30]

// let find = (para) => {
//     let max = para.reduce((a,b)=>{
//         if(a>b){
//             return a;
//         }else{
//             return b;
//         }
//     });
//      let min = para.reduce((a,b)=>{
//         if(a<b){
//             return a;
//         }else{
//             return b;
//         }
//     });
//   console.log("Maximum value:", max);
//   console.log("Minimum value:", min);
// }
// find(a)

// Maximum value: 30
// Minimum value: 10



// 4.Write a JavaScript program to convert all array elements into ASCII values. 

// let a = ['M', 'e', 'e', 't'];
// let asciiValues = a.map((ele,i)=>{
//     return ele.charCodeAt(0);
// });
// console.log(asciiValues);

// output

// a = ['M', 'e', 'e', 't'] ---->  [ 77, 101, 101, 116 ]


// 5.Write a JavaScript program to remove negative values using the filter array function. 
// numbers = [-23,-20,-17,-12,-5, 0, 1, 5, 12, 19, 20];

// let numbers = [-23,-20,-17,-12,-5, 0, 1, 5, 12, 19, 20];

// let positive = numbers.filter((ele,i)=>{
//     return ele >= 0  
// });

// console.log("Positive numbers:", positive);

// output

// Positive numbers: [0, 1, 5, 12, 19, 20]

// 6. Write a JavaScript program using array map() method and return the square of 
// the array element. 
// arr = [2, 5, 6, 3, 8, 9]; 

// let arr = [2, 5, 6, 3, 8, 9]; 

// let square = arr.map((ele,i)=>{
//     return ele * ele
// })
// console.log("Original Array:", arr);
// console.log("Squared Array:", square);

// output

// original Array: [ 2, 5, 6, 3, 8, 9 ]
// Squared Array: [ 4, 25, 36, 9, 64, 81 ]

// 7.Write a JavaScript program for sorting an array in ascending descending. 
// numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20]; 
// myColor = ["Red", "Green", "White", "Black"];

// let numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20]; 
// let myColor = ["Red", "Green", "White", "Black"];

// let ascNumbers = numbers.sort((a,b)=>{
//     return a - b   
// })

// console.log("Ascending:", ascNumbers);
// console.log("Descending:", numbers.reverse());
// console.log("Colors A-Z:" , myColor.sort());
// console.log("Colors Z-A:", myColor.reverse());

// output

// Ascending: [ 0,  1,  5,  5, 12, 12, 17, 19, 20, 20, 23 ] 
// Descending: [ 23, 20, 20, 19, 17,12, 12,  5,  5,  1, 0 ]
// Colors A-Z: [ 'Black', 'Green', 'Red', 'White' ]
// Colors Z-A: [ 'White', 'Red', 'Green', 'Black' ]

// 8. Write a JavaScript program which filters out any string which is less than 8 characters. 
// words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']; 

// let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

// let filters = words.filter((ele,i)=>{
//     return ele.length < 8
// })
// console.log(filters);

// output
// [ 'Python', 'Go', 'Java', 'PHP', 'Ruby' ]

// 9. write a JavaScript program to print expected output for the following string. 
// x = "airplane"; output:- r 
// x = "oxoxoxox"; output:- "oXoXoXoX" 11 
// x = "A New Java Book"; 
// output:- "a new java book", "A NEW JAVA BOOK" 

// let x1 = "airplane";
// console.log(x1[2]); 

// output
// r

// let x2 = "oxoxoxox";
// let str = "";

// for (let i = 0; i < x2.length; i++) {
//   if (i % 2 === 0) {
//     str += x2[i].toUpperCase();
//   } else {
//     str += x2[i];
//   }
// }
// console.log(str);

//  Output
//  OxOxOxOx

// let x3 = "A New Java Book";
// lowercase = x3.toLowerCase()
// uppercase = x3.toUpperCase()
// console.log(`"${lowercase}" , "${uppercase}`);

// output
// "a new java book" , "A NEW JAVA BOOK

// 10. write a JavaScript program for array reverse

// let a = [10,20,30,40,50,60,70,80,90];
// let reversed = a.reverse();
// console.log("Array Reverse :", reversed);

// output
// Array Reverse : [ 90, 80, 70, 60, 50, 40, 30, 20, 1 ]

// 11. write a JavaScript program to check if a value is found or not? 

// let a = [10,20,30,40,50,60,70,80,90];
// let foundValue = Number(prompt("Enter number to check in array"))

// if(a.includes(foundValue)){
//     console.log("Value is Found");
// }else{
//     console.log("Value is Not Found");  
// }

// output

// foundValue = 10   ---->  Value is Found
// foundValue = 11   ---->  Value is Not Found

// 12. write a JavaScript program to print your name and write the number of total characters

// let yourName = "Mit Kotadiya";

// console.log("My Name is:", yourName);
// spaceremove = yourName.trim()
// console.log("Total Characters:", spaceremove.length);

// output

// My Name is: Mit Kotadiya
// Total Characters: 12

// 13. write a JavaScript program given this output using replace concept. 
// Input: - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning"; 
// Output:- "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"

// let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

// let output = input.replaceAll("dog", "cat");

// console.log(output);

// Output
//  "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"

// 14. write a JavaScript program convert string to array. 
// Input :- "Hire the top 1% freelance developers"; 
// Output :- ["Hire", "the", "top", "1%"] 

// let input = "Hire the top 1% freelance developers";

// let words = input.split(" ");
// let result = words.slice(0, 4);

// console.log(result);

// output
// [ 'Hire', 'the', 'top', '1%' ]

// 15. write a JavaScript program to convert an array to string. 
// Input:- ['5', 32, 'Daniel']; 
// Output: 5,32, Daniel

// let input = ['5', 32, 'Daniel'];
// console.log(input.join(","));

// Output
//  5,32, Daniel

