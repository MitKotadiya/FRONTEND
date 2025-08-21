// let arr = [1,2,3,-1,4,8,9];
// let current = 0;
// let max = 0;

// let kadane = (arr) => {

//     arr.forEach(element => {
//         console.log(element);
        
//         current += element     // current = 1 , current = 1 + 2 = 3 ,, current = 1 + 2 + 3 = 6 ,, current = 1 + 2 + 3 + (-1) = 5 ,, current = 1 + 2 + 3 + (-1) + 4 = 9......
//         if (max < current) {   // 0 < 1 ,, 1 < 3 ,, 3 < 6 ,, 6 < 5(F) ,, 6 < 9 ....
//             max = current;    // max = 1 ,, max = 3 ,, max = 6 ,, max = 9 .....
//         }
//         if (current < 0) {  // (F) ,, (F) ,, (F) ,,(T) ,, (F) .....
//             current = 0;   //  current = 0  
//         }
//     });
//     return max
// }
// console.log(kadane(arr)); // 26


// Binary search using recursion


// function binarySearch(arr, target, low = 0, high = arr.length - 1) {
//     if (low > high) {
//         return -1; 
//     }

//     let mid = Math.floor((low + high) / 2); 

//     if (arr[mid] === target) {
//         return mid; 
//     } else if (arr[mid] > target) {
//         return binarySearch(arr, target, low, mid - 1); 
//     } else {
//         return binarySearch(arr, target, mid + 1, high); 
//     }
// }

// let data = [10, 20, 30, 40, 50, 60, 70];
// let target = 50;

// let result = binarySearch(data, target);
// console.log(result !== -1 ? `Found at index ${result}` : "Not found");




