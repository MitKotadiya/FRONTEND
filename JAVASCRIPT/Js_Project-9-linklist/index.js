// 1.WAP for Circular Linklist Operation (Insert, delete, display)

class Nodelist {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // addlast(value){
    //     let newnode = new Nodelist(value)

    //     if (this.head === null) {
    //         this.head = newnode;
    //         this.tail = newnode;
    //         this.tail.next = this.head
    //     }else{
    //         this.tail.next = newnode
    //         newnode.next = this.head
    //         this.tail = newnode
    //     }
    // }
    
    addlast(value){
        let newnode = new Nodelist(value)

        if (this.head == null) {
           this.head = newnode;
           this.head.next = this.head
        }else{
            let current = this.head; // 10 , node
            while (current.next !== this.head) {  //   10 , node !==  10 , node
                current = current.next
            }
             newnode.next = this.head
             current.next = newnode;
        }
    }

    remove(){
        if (this.head == null && this.tail == null) {
            console.log("Data not found");
        }
        else if (this.head == this.tail) {
            this.head = null
            this.tail = null
        }else{
           let current = this.head
            let prev
            while (current != this.tail) {
               prev = current
               current = current.next 
            }
            prev.next = this.head
            this.tail = prev
        }
    }
    display() {
        if (this.head == null) {
            console.log("List is Empty.....!!!");
        } else {
            let current = this.head;
            let str = ""
            while (true) {
                str += current.data + " -> "
                current = current.next;
                if (current === this.head){
                    break;
                } 
            }
            console.log(str);
        }
    }
}

let circular = new CircularLinkedList();
circular.addlast(10);
circular.addlast(20);
circular.display();


// output:
// 10 -> 20 -> 


// 2. WAP for Reverse Singly Linklist

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    addLast(value) {
        let temp = new Node(value);

        if (this.head == null) {
            this.head = temp;
        }else{

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = temp;
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;   
            current.next = prev;   
            prev = current;        
            current = next;      
        }
        this.head = prev; 
    }

// 3.WAP for check linklist is palindrome or not.

        isPalindrome() {
            let current = this.head;
            let arr = [];

        while (current) {
            arr.push(current.data);
            current = current.next;
        }

        let start = 0;
        let end = arr.length - 1;
        while (start < end) {
            if (arr[start] !== arr[end]) {
                console.log("Not a Palindrome");
                return
            }
            start++
            end--
        }
        console.log("Palindrome");
    }

       displaynodeData() {
        if (this.head == null) {
            console.log("List is Empty.....!!!");
        } else {
            let current = this.head
            let data = " "
            while (current) {
               data += current.data + " -> ";
               current = current.next 
            }
            console.log(data);
        }
    }
}

let list = new SinglyLinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(20);
list.addLast(10);

console.log("Original List:");
list.displaynodeData();

list.reverse();

console.log("Reversed List:");
list.displaynodeData();

list.isPalindrome()

// output :

// Original List:
//  10 -> 20 -> 30 -> 40 -> 

// Reversed List:
//  40 -> 30 -> 20 -> 10 -> 

// Not a Palindrome
