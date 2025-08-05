// 1. 2D array print and also print its transpose array

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log("Original Array :")
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log("Transpose Array :")
// for (let i = 0; i < arr.length; i++) {
//     let temp = []
//     for (let j = 0; j < arr.length; j++) {
                    
//       temp[j] = arr[j][i];
//     }
//     console.log(temp); 
// }

// output :

// Original Array :

// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 7, 8, 9 ]

// Transpose Array :

// [ 1, 4, 7 ]
// [ 2, 5, 8 ]
// [ 3, 6, 9 ]


// 2. Array Descending order sorting using selection sort

// let arr = [35,38,30,32,48,28,88,12,5,7]
// let temp

// console.log("Orignal Array" , arr);

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
        
//         if (arr[i] < arr[j]) {
//            temp =  arr[i]
//            arr[i] = arr[j]
//            arr[j] = temp
//         }
//     }
// }
// console.log("Descending Order" , arr);

// output:

// Orignal Array [ 35, 38, 30, 32, 48, 28, 88, 12,  5,  7 ]
// Descending Order [ 88, 48, 38, 35, 32, 30, 28, 12,  7,  5 ]


// 3.Array Ascending order sorting using Merge sort

// let arr = [35, 38, 30, 32, 48, 28, 88, 12, 5, 7];

// let merge = (arr) => {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     return sorting(merge(left), merge(right));
// }

// let sorting = (left, right) => {
//     let result = [];

//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }

//     return result.concat(left).concat(right);
// }
// console.log("Ascending order:", merge(arr));


// output :

// Ascending order: [ 5, 7, 12, 28, 30, 32, 35, 38, 48, 88 ]

