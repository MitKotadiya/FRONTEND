// constructor  --> constructer is method to call class autometicaly when object created

class Test {
    constructor() {
        console.log("Constructor called");
    }
}
let obj = new Test()

class Add {
    constructor(a,b) {
        console.log(a+b);
    }
}
let x = new Add (5,15)

class multi {
    constructor(a,b) {
        console.log(a*b);
    }
}
let y = new multi (5,15)