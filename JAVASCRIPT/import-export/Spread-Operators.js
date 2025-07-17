// (...) ---> spreard oprateor

// The ... operator is used to "spread" the elements of an array (or object) into individual elements.



// let a = [11,22,33,44,55]
// let b = [...a];

// b.push(66);
// a.pop()
// console.log("a -->" , a);
// console.log("b -->" , b);


// let data = [1,2,3,4,5,6]
// let [x,y,z,...m] = data

// console.log("m -->" , ...m);


// function addThreeNumbers(a, b, c) {
//   return a + b + c;
// }

// let nums = [10, 20, 30];
// let result = addThreeNumbers(...nums);
// console.log("Result:", result); 



let person = {
    name: "Johan Peter",
    age: "50",
    dob: "15-05-1975",
    nationality: "USA",
};

let person2 = { ...person };
person2.age = 30
console.log("person2:", person2);
