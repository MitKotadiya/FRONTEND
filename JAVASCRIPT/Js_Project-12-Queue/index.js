// 1.Write a program for Circular Queue.

class circulerQueue{
  constructor(size){
    this.queue = new Array(size)
    this.i = -1
    this.start = -1
  }
  
  add(data){
     if(this.i === -1 && this.start == -1){
      this.i =this.start = 0
      this.queue[this.i] = data
     } else if ((this.i+1) % this.queue.length == this.start){
      console.log("Queue is Full")
     }else{
      this.i = (this.i +1) % this.queue.length
      this.queue[this.i] = data
     }
  }

  delete(){
     if(this.i == -1 && this.start == -1){
      console.log("Queue is empty")
     } else if (this.i == this.start){
      this.i = this.start = -1
     }else{
      this.start = (this.start +1) % this.queue.length
     }
  }

  display (){
   let index = this.start
   if(this.i == -1 && this.start == -1){
    console.log("Queue is empty")
   }else{

     while(index!=this.i){
       console.log(this.queue[index])
       index = (index+1)%this.queue.length
      }
      console.log(this.queue[this.i])
    }
  }
}

let cqueue= new circulerQueue(5) 

cqueue.add(10)
cqueue.add(20)
cqueue.add(30)
cqueue.add(40)
cqueue.add(50)
cqueue.delete()
cqueue.display()

// output :

// 20
// 30
// 40
// 50

// 2. write a program Queue using two stacks.

class QueueStack {
  constructor(){
    this.s1 = []  
    this.s2 = []  
  }

  Add(value){
    this.s1.push(value)  
  }

  Delete(){
    if(this.s1.length <= 0){
      console.log("Queue Is Empty")  
    } else {
      while(this.s1.length > 1){
        this.s2.push(this.s1.pop())
      }

      this.s1.pop()

      while(this.s2.length > 0){
        this.s1.push(this.s2.pop())
      }
    }
  }


  Display (){
    if(this.s1.length <= 0){
      console.log("No Data Found") 
    } else {
      console.log(this.s1)
    }
  }
}

let StackQueue = new QueueStack()

StackQueue.Add(80)  
StackQueue.Add(90)   
StackQueue.Add(50) 
StackQueue.Delete()  
StackQueue.Display()    

// output : 

// [ 90, 50 ]


// 3.write a program check first string swap can make strings equal. (leetcode question no 1790)

let strEqual = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let arr = [];

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      arr.push(i);
    }
    if (arr.length > 2) {
      return false;
    }
  }
  if (arr.length === 0) {
    return true;
  }
  if (arr.length !== 2) {
    return false;
  }

  let [i, j] = arr;
  return str1[i] === str2[j] && str1[j] === str2[i];
};

console.log(strEqual("abc", "def"));     
console.log(strEqual("abcd", "abdc"));
console.log(strEqual("hello", "hello")); 

// output :

// false
// true
// true