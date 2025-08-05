// Selection sort

// let arr = [50,12,8,2,32,25];
// let temp

// for (let i = 0; i < arr.length; i++) {
    
//     for (let j = i + 1; j < arr.length; j++) {
        
//         if(arr[i] > arr[j]) {

//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
        
//         }
        
//     }
// }
// console.log(arr);

// Bubbale Sort

// let array = [50,12,8,2,32,25];
// let temp

// for (let i = 0; i < array.length; i++) {

//     for (let j = 0; j < array.length - i; j++) {

//         if (array[j] > array[j + 1]) {   //  50 > 12
//            temp =  array[j]              //  temp = 50  array[j] = []
//            array[j] = array[j + 1]       //  array[j] = 12  array[j + 1] = []
//            array[j + 1] = temp           //  array[j + 1] = 50 
//         }   
//     }
// }
// console.log(array);   // [12 , 50  , ......]

// 7. Longest Common Prefix

// var longestCommonPrefix = function(strs) {
//     let oglength = strs[0].length;
//     let prefix = "";

//     for (let i = 0; i < oglength; i++) {
//         let onchar = strs[0][i];

//         for (let j = 1; j < strs.length; j++) {
//             if (strs[j][i] !== onchar) {
//                 return prefix; 
//             }
//         }

//         prefix += onchar;
//     }

//     return prefix; 
// };

// 26. Remove Duplicates from Sorted Array

// let nums = [1, 1, 2];
// let arr = [];

// for (let i = 0; i < nums.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < arr.length; j++) {
//         if (nums[i] === arr[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }

//     if (!isDuplicate) {
//         arr.push(nums[i]);
//     }
// }

// console.log("Unique elements:", arr);  

// 4. Median of Two Sorted Arrays

// let nums1 = [33, 14];
// let nums2 = [50, 25 , 56];
// let d = []   
// let k = 0
// let temp

// for (let i = 0; i < nums1.length; i++) {
//      d[k] = nums1[i]
//      k++  
// }

// for (let j = 0; j < nums2.length; j++) {
//     d[k] = nums2[j]
//     k++
// }
// console.log("Before sorting:", d);

// for (let i = 0; i < d.length; i++) {

//     for (let j = i+1; j < d.length; j++) {
        
//         if (d[i] > d[j] ) {
//            temp = d[i]
//            d[i] = d[j]
//            d[j] = temp
//         }
        
//     }
    
// }

// console.log("Sorted:", d); // Sorted: [ 14, 25, 33, 50 , 56 ]

// n = d.length / 2

// if (n % 2 === 0) {

//     median = (d[n] + d[n-1]) / 2
//     console.log("median:" , median); 
    
// }else{
//     median = d[Math.floor(n)];
//     console.log("median:" , median);
    
// }
    
    
// Merge sort

let d = [90,20,80,30,70,60]

let Merge = (d) => {

    if (d.length <= 1) return d;
    let median = Math.floor(d.length / 2)
    let left = d.slice(0,median)
    let right = d.slice(median)
    return ab(Merge(left), Merge(right));

}

let ab = (left , right) => { 
    let result = [];

    while(left.length && right.length){

        if (left[0] < right[0]) {
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right];
}
console.log(Merge(d));


// Quick Sort

// let d = [90,20,80,30,70,60]
// let quick = (d) => {
//     if (d.length <= 1) {
//         return d;
//     }
//     let pivot = d[0];
//     let left = []
//     let right = []
    
//     d.forEach((element , index) => {
//         if (index === 0){
//             return
//         }
//         if (element < pivot) {
//             left.push(element);
//         } else {
//             right.push(element);
//         }
//     })
//     return [...quick(left), pivot, ...quick(right)];
// }
// console.log(quick(d))








