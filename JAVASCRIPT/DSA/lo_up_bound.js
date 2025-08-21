let arr = [1,5,7,8,7,5,7,6,3,2,4]

let sort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    let pivot = arr[0]
    let left = []
    let right = []

    arr.forEach((element,index)=>{
        if (index === 0) {
           return; 
        }
        if (element < pivot) {
           left.push(element) 
        }else{
           right.push(element) 
        }
    });
    return [...sort(left),pivot,...sort(right)]
}
let array = sort(arr); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                      // [ 1, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8 ]


let lower = (array , target) => {
    low = 0 
    high = arr.length  

    while (low < high) {  
        mid = Math.floor((low + high)/2)  
        if (array[mid] < target) {  
            low = mid  + 1  
        }else{
            high = mid - 1  
        }   
    }
    return low 
}
let upper = (array , target) => {
    low = 0 
    high = arr.length  

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

console.log("Lower Bound Index :" , lower(array,7));
console.log("Upper Bound Index :" , upper(array,7));
let fre = upper(array,7) - lower(array,7)
console.log("Number of Frequency :",fre);

