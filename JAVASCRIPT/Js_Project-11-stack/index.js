// 1. Write a program for Stack Operation Program (Insert, Delete, isEmpty, Length) - 4 mark.

// class Stack {
//     constructor(){
//         this.stack = []
//     }
//     Insert(val){
//         this.stack.push(val)
//     }
//     Delete() {
//         if (this.stack.length > 0) {
//              return this.stack.pop();
//         } else {
//             console.log("Stack is empty STOP!!!!!");
//         }
//     }
//     isEmpty(){
//         if (this.stack.length < 1) {
//             console.log("Stack is empty");
//         }else{
//             console.log("Stack is Not empty");
//         }
//     }
//     Length() {
//         console.log("Stack Length :" , this.stack.length);
//     }
//     Display(){
//         console.log(this.stack);

//     }
// }

// let Operation = new Stack()

// Operation.Insert(10)
// Operation.Insert(20)
// Operation.Insert(300)
// Operation.Insert(40)
// Operation.Insert(50)
// Operation.Insert(100)
// Operation.Delete()
// Operation.isEmpty()
// Operation.Length()
// Operation.Display()

// Ourput :
// Stack is Not empty
// Stack Length : 5
// [ 10, 20, 300, 40, 50 ]

// 2.Write a program for Next Greater Element using Stack. - 3 mark

class GreaterElement {
  constructor() {
    this.stack = [];
  }
  nextElement(data) {
    let result = new Array(data.length).fill(-1);

    for (let i = data.length - 1; i >= 0; i--) {
      while (
        this.stack.length &&
        this.stack[this.stack.length - 1] <= data[i]
      ) {
        this.stack.pop();
      }
      if (this.stack.length) {
        result[i] = this.stack[this.stack.length - 1];
      }
      this.stack.push(data[i]);
    }
    return result;
  }
}
let greaterElement = new GreaterElement();

console.log("Next Greater Element :" , greaterElement.nextElement([2, 4, 8, 15, 20, 25, 36, 100, 1, 100]));

// Output : Next Greater Element : [ 4,   8, 15,  20, 25, 36, 100, -1, 100, -1 ]

// 3.Write a program for a reverse string using Stack. - 3 mark

class reverseStr {
  constructor() {
    this.stack = [];
  }
  reverseString(str){
    let reversed = "";

   str.split("").forEach((element,index)=> {
        this.stack.push(element);
    })
    
    while (this.stack.length > 0) {
        reversed += this.stack.pop();
    }
    return reversed;
}
}
let reverse = new reverseStr ()
console.log("Reverse String :" , reverse.reverseString("MIT"));  

// Reverse String : TIM