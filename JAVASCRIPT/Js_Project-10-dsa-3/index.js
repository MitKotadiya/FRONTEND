let arr = [10,100,100,40,50,60,60,70,20,30,70,80,90,100];

let sort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    let pivot = arr[0]
    let left = []
    let right = []

    arr.forEach((element,index) => {
        if (index === 0) {
            return
        }
        if (element < pivot) {
           left.push(element) 
        }else{
            right.push(element)
        }
    })
    return [...sort(left),pivot,...sort(right)]
}
let array = sort(arr)
console.log("Sorted Array :" , array);

// output : Sorted Array : [ 10,  20, 30, 40, 50,  60, 60,  70, 70, 80, 90, 100, 100, 100 ]


// 1. Write a program to implement binary search to find the index of a target element in a sorted array. (3 marks)

let binary = (array, target) => {
    let low = 0, high = array.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === target) {
            return mid; 
        } else if (array[mid] < target) {
            low = mid + 1; 
        } else {
            high = mid - 1; 
        }
    }
    return -1; 
}
console.log("Target Found at Index Number:", binary(array, 70)); 

// // output  :  Target Found at Index Number: 7

// // 2. write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences. (4 marks)

let lower = (array , target) => {
    low = 0 
    high = array.length  

    while (low < high) {  
        mid = Math.floor((low + high)/2)  
        if (array[mid] < target) {  
            low = mid  + 1  
        }else{
            high = mid  
        }   
    }
    return low 
}
let upper = (array , target) => {
    low = 0 
    high = array.length  

    while (low < high) {  
        mid = Math.floor((low + high)/2)  
        if (array[mid] <= target) {  
            low = mid  + 1  
        }else{
            high = mid 
        }   
    }
    return low 
}

let Occurrences = (array, target) => {
    let first = lower(array, target);     
    let last = upper(array, target) - 1; 
    let number = upper(array, target) - lower(array, target);  

    if (number === 0 || array[first] !== target) {
        console.log(`Element ${target} not found`);
    } else {
        console.log("First occurrence:", first);
        console.log("Last occurrence:", last);
        console.log("Count of occurrences:", number);
    }
}

console.log("Lower Bound Index:", lower(array, 100));
console.log("Upper Bound Index:", upper(array, 100));
Occurrences(array, 100)


// output :

// Lower Bound Index: 11
// Upper Bound Index: 14
// First occurrence:  11
// Last occurrence:  13
// Count of occurrences: 3


// 3. Write a program to find the pivot index where the rotation occurs in a rotated sorted array. (3 marks)

let rotated = (array) => {
    mid = Math.floor(array.length / 2 );

    a = []

    for (let i = mid; i < array.length; i++) {
            a.push(array[i])
        
    }
    for (let i = 0; i < mid - 1; i++) {
        
        a.push(array[i])
    }
    return a;
    
}

let Pivot = (a) => {
    let low = 0;
    let high = a.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (a[mid] > a[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low; 
}

console.log("Rotated Array :", rotated(array));
console.log("Pivot index:", Pivot(a));

// output : 

// Rotated: [ 70,  70, 80, 90, 100, 100, 100, 10, 20,  30, 40,  50, 60 ]
// Pivot index: 7



// All Over Output : 

// Sorted Array : [ 10,  20, 30, 40, 50,  60, 60,  70, 70, 80, 90, 100, 100, 100 ]
// Target Found at Index Number: 8
// Lower Bound Index: 11
// Upper Bound Index: 14
// First occurrence: 11
// Last occurrence: 13
// Count of occurrences: 3
// Rotated: [ 70,  70, 80, 90, 100, 100, 100, 10, 20,  30, 40,  50, 60 ]
// Pivot index: 7


