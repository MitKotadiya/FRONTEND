// Simple Queue

class queue{
    constructor(){
        this.queue = []
    }

    add(data){
        this.queue.push(data)
    }
    shift(){
        this.queue.shift()
    }
}

let Queue = new queue();
Queue.add(10)
Queue.add(20)
Queue.shift()
console.log(Queue);

// Circuler Queue

class circulerQueue{
  constructor(size){
    this.queue = new Array(size)
    this.i = -1
    this.start = -1
    
  }


  insert (value){
     if(this.i === -1 && this.start==-1){
      this.i =this.start = 0
      this.queue[this.i] = value
     } else if ((this.i+1)%this.queue.length == this.start){
      console.log("queue is Full")
     }else{
      this.i = (this.i +1)%this.queue.length
      this.queue[this.i] = value
     }
  }

  delete (){
     if(this.i == -1 && this.start ==-1){
      console.log("queue is empty")
     } else if (this.i == this.start){
      this.i = this.start = -1
     }else{
      this.start = (this.start +1)%this.queue.length
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


let queuee= new circulerQueue(5) 

queuee.insert(10)
queuee.insert(20)
queuee.insert(30)
queuee.insert(40)
queuee.insert(50)
queuee.display()
console.log("first")
queuee.delete()
queuee.insert(60)

queuee.delete()
queuee.insert(70)
queuee.display()


// stack opration using consept of queue

class Qust {
  constructor() {
    this.q1 = [];  
    this.q2 = [];
  }

  insert(data) {
    this.q1.push(data);
  }
  delete(){
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift())
    }
    [this.q2 ,this.q1 ] = [this.q1 ,this.q2 ]
    this.q2.shift()
  }
}

let qustObj = new Qust();
qustObj.insert(10);
qustObj.insert(20);
qustObj.insert(30);
qustObj.insert(40);
qustObj.insert(50);
qustObj.delete();

console.log(qustObj);
