// 2-d array => Array which is made with row and coloumn called....

// let arr = [
//     [1 , 2 , 3],
//     [4 , 5 , 6],
//     [7 , 8 , 9]
// ]
// console.log(arr);        // print as it is
// console.log(arr[0]);        // print row --> [1 , 2 , 3]
// console.log(arr[0][0]);        // print col --> 1 (first  row first element)

// arr[0][0] = 35;   // modify array
// arr[0].push(32);  // add last at first row (arr)
// arr[1].pop();   // add remove at first row (arr)
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     let str = ""
//     for (let j = 0; j < arr.length; j++) {
//         str += arr[i][j] + " "
//     }
//     console.log(str);
// }



// let num = 5;

// for (let i = 0; i <= num ; i++) {

//     let str = ""

//     for (let j = 0; j <= i; j++) {
        
//         str += i + " "
//     }
//     console.log(str);
    
// }

// let d = 5;

// for (let i = d; i >= 0; i--) {
//     let str = "";

//     for (let j = 0; j <= i; j++) {
//         str += i + " ";
//     }

//     console.log(str);
// }

// let c = 5;

// for (let i = 1; i <= c ; i++) {

//     let str = ""

//     for (let j = 0; j <= i; j++) {
        
//         str += i + " "
//     }
//     console.log(str);
// }


// 1. Find Maximum number of given array

// let arr = [10,20,30,40,50,60];
// let max = arr[0]

// for (let index = 0; index < arr.length; index++) {

//     if (arr[index] > max ) {
//         max = arr[index]
//     }
// }

// console.log(max);


// 2. Remove Duplicates elements of given array

let arr = [10,20,30,40,50,60,60,30,50,40];
let result = [];

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
       
        if (arr[i] === arr[j]) {
            count++
        }
        
    }
    if (count === 1) {
        result.push(arr[i]);
    }
}
console.log(result);


// 3. Reverse Array

// let arr = [10,20,30,40,50,60];
// d = []

//     for (let i = arr.length-1; i >= 0; i--) {
        
//         d.push(arr[i])
//     }
// console.log(d);


// 4. Concate Multiple Array

// let a = [10, 20, 30, 40, 50];
// let b = [60, 70, 80, 90, 100];
// let c = [];
// let d = 0;

// for (let i = 0; i < a.length; i++) {
//     c[d] = a[i];
//     d++;
// }

// for (let j = 0; j < b.length; j++) {
//     c[d] = b[j];
//     d++;
// }

// console.log(c);

// 5. Search Insert Position

    // Example 1:

    //     Input: nums = [1,3,5,6], target = 5
    //     Output: 2

    // Example 2:

    //     Input: nums = [1,3,5,6], target = 2
    //     Output: 1

    // Example 2:

    //     Input: nums = [1,3,5,6], target = 7
    //     Output: 4


// let nums = [1, 3, 5, 6];
// let target = 2;

// var searchInsert = function(nums, target) {

//     for (let i = 0; i < nums.length; i++) {

//          if (nums[i] >= target) {
//             return i;
//         }
//     }
//     return nums.length;
// };

// console.log(searchInsert(nums, target));


// 6. Single Number

    // Example 1:

    //     Input: nums = [2,2,1]
    //     Output: 1

    // Example 2:

    //     Input: nums = [4,1,2,1,2]
    //     Output: 4

    // Example 3:

    //     Input: nums = [1]
    //     Output: 1

// nums = [1,2,1,2,4]    

// var singleNumber = function(nums) {

//     for (let i = 0; i < nums.length; i++) {
//         let count = 0;
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 count++;
//             }
//         }
//         if (count === 1) {
//             return nums[i];
//         }
//     }
// };
// console.log(singleNumber(nums));
