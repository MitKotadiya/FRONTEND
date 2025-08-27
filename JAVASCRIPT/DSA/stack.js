// stack ---> run on lifo principal 

class stack{
    constructor(data){
        this.data = []
    }

    push(val){
        this.data.push(val)
    }  
    pop(){
        this.data.pop()
    } 
    topElement() {
    if (this.data.length === 0) {
        return null; 
    }
        return this.data[this.data.length - 1];
    }
    search(val) {
        let index = this.data.indexOf(val);
        if (index === -1) {
            return -1
        }else{
            return index
        }
        
    }

}

let arr = new stack();
arr.push(12)
arr.push(20)
arr.push(30)
arr.push(40)
arr.push(50)
arr.push(60)
// arr.pop()
// console.log(arr.topElement());
// console.log(arr.search(50));
console.log(arr);


let reverseString = (str) => {
    let stack = [];
    let reversed = "";

   str.split("").forEach((element,index)=> {
        stack.push(element);
    })
    
    while (stack.length > 0) {
        reversed += stack.pop();
    }
    return reversed;
}
console.log("Reversed:", reverseString("hello"));


let balanced = (val) => {
    let pair = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };
    let stack = [];

    for (let element of val) {
        if (element === '(' || element === '{' || element === '[') {
            stack.push(element);
        } else {
            if (stack.length === 0 || stack.pop() !== pair[element]) {
                return false;        
            }
        }
    }
    return stack.length === 0;
};

console.log(balanced("{[()]}"));  


function nextGreaterElement(arr) {
  let stack = [];
  let result = new Array(arr.length).fill(-1);

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    if (stack.length) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return result;
}

console.log(nextGreaterElement([4, 5, 2, 10, 8])); 
