let arr = [1,2,3,-1,4,8,9];
let current = 0;
let max = 0;

let kadane = (arr) => {

    arr.forEach(element => {
        console.log(element);
        
        current += element     // current = 1 , current = 1 + 2 = 3 ,, current = 1 + 2 + 3 = 6 ,, current = 1 + 2 + 3 + (-1) = 5 ,, current = 1 + 2 + 3 + (-1) + 4 = 9......
        if (max < current) {   // 0 < 1 ,, 1 < 3 ,, 3 < 6 ,, 6 < 5(F) ,, 6 < 9 ....
            max = current;    // max = 1 ,, max = 3 ,, max = 6 ,, max = 9 .....
        }
        if (current < 0) {  // (F) ,, (F) ,, (F) ,,(T) ,, (F) .....
            current = 0;   //  current = 0  
        }
    });
    return max
}
console.log(kadane(arr)); // 26
