class node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
    }

    addData(val){
        let temp = new node(val);
        
        if (this.head == null) {
            this.head = temp;
        } else {
            let current = this.head;
            

            while (current.next != null) {
                current = current.next;
                
            }

            current.next = temp;
        
            
        }
    }

    display(){
        if (this.head == null) {
            console.log("List is Empty....");
        } else {
            let current = this.head;
            let data = "";
            while (current) {
                data += current.data + " -> ";
                current = current.next;
            }
            console.log(data);
            
        }
    }
    remove(){

        if (this.head == null) {
            console.log("Data not found");
        }
        else if(this.head.next == null)
        {
            this.head = null
        }else{

        let current = this.head;
        let prev

        while (current.next !== null)  {
            prev = current
           current = current.next 
        }
        prev.next = null
    }
    }

    addfirst(val){
        let temp = new node(val)
        if(this.head == null){
            this.head = temp 
        }
        else{
            temp.next = this.head 
            this.head = temp
        }
    }
    removeFirst() {
        if (this.head == null) {
            console.log("Data not found");
        }
        this.head = this.head.next;
        
        }

    revrse(){
      let current = this.head
        let arr = []
        while (current) {
            arr.push(current.data)
            current = current.next
        }
        
        this.head = null;

        for (let i =  arr.length - 1; i >= 0 ; i--) {
           this.addData(arr[i])
        }
    }
}

let list = new SinglyLinkedList();

list.addData(10);
list.addData(20);
list.addData(30);
list.addData(40);
// list.remove()
// list.addfirst(100)
// list.addfirst(200)
// list.removeFirst()
list.revrse()
list.display();  


// class node {
//     constructor(data) {
//         this.head = {
//             value: data,
//             next: null,
//         };
//         this.tail = this.head;
//         console.log(this.tail);
        
//     }

//     addData(nodedata) {
//         let newNode = {
//             value: nodedata,
//             next: null,
//         };
//         this.tail.next = newNode;
//         console.log(this.tail);
        
//         this.tail = newNode;
//     }

//     printValues() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.value);
//             current = current.next;
//         }
//     }
//     remove(){
//        let current = this.head;
//        while (current.next !== null) {
//             current = current.next;
//        }
       
//        current.next = null
//     }
// }

// let list = new node(100);
// list.addData(200);
// list.addData(300);
// list.addData(400);
// list.remove()
// list.printValues(); 
