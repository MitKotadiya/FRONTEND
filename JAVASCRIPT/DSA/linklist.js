class Node {
    constructor(data) {
        this.data = data
        this.next = null
    } 
}

class linklist {
    constructor() {
        this.head = null
    } 

    addlast(value) {
        let temp = new Node(value)

        if (this.head == null) {
            this.head = temp
        } else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = temp
        }
    }

    removeLast() {
        if (this.head == null) {
            console.log("Data not found");
        }
        else if (this.head.next == null) {
            this.head = null
        }
        else {
            let current = this.head;
            let prev

            while (current.next !== null) {
                prev = current
                current = current.next 
            }

            prev.next = null
        }
    }

    addFirst(value) {
        let temp = new Node(value) 
        if (this.head == null) {
            this.head = temp 
        } else {          
            temp.next = this.head
            this.head = temp
        }
    }

    removeFirst() {
        if (this.head == null) {
            console.log("Data not found");
        }
        else if (this.head.next == null) {
            this.head = null
        } 
        else {
            this.head = this.head.next;
        }
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

let nodelist = new linklist()
nodelist.addlast(200)
nodelist.addlast(300)
nodelist.addlast(400)
nodelist.removeLast()
nodelist.addFirst(100)
nodelist.removeFirst()
nodelist.displaynodeData()


