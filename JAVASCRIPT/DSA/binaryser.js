let d = [90,80,70,60,50,40,30,20,10]
let quick = (d) => {
    if (d.length <= 1) {
        return d;
    }
    let pivot = d[0];
    let left = []
    let right = []
    
    d.forEach((element , index) => {
        if (index === 0){
            return
        }
        if (element < pivot) {
            left.push(element);
        } else {
            right.push(element);
        }
    })
    return [...quick(left), pivot, ...quick(right)];
}
arr = quick(d)
console.log(arr);  // [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]

let binary = (arr, target) => {
    let start = 0;  // 5  
    let end = arr.length - 1;  // 8

    while (start <= end) {     // 0 < 8  // 5 < 8
        let mid = Math.floor((start + end) / 2); // 4  --->  50  // 6 ---> 70
        
        if (arr[mid] === target) {  // 50 === 70 (F) // 70 === 70 (T)
            return mid; 
        } else if (arr[mid] < target) {  // 50 <= 70 (T)
            start = mid + 1;            // start = 4 + 1 = 5 (start = 5)
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

let index = binary(arr, 70);
console.log(index); 
