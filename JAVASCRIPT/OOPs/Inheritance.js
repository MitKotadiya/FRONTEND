// Inheritance ---> one class property acess by child class 
// types of Inheritance  ---> 1.single 2. multilevel 3 .multipal 4. Herichacal 5. hybrid
// super() ---> super key word called parents constructor  in child class

// class Test{
//     constructor(name , age , role){
//         this.name = name
//         this.age = age
//         this.role = role
//     }
//     getDetails(){
//         return `${this.name } is An indin cricketer , he is ${this.age} old and his role is ${this.role} `
//     }
// }
// class child extends Test{
//     constructor(name , age , role){
//         super(name , age , role)
//     }
// }

// let x = new child("Gill" , 22 , "Opner")
// console.log(x.getDetails());

class Test{
    constructor(name , age , role){
        this.name = name
        this.age = age
        this.role = role
    }
    getDetails(){
        return `${this.name} is an Indian cricketer, he is ${this.age} years old and his role is ${this.role}`;
    }
}
class child extends Test{
    constructor(name , age , role){
        super(name , age , role)
    }
}

class subchild extends child{
    constructor(name , age , role , jnum){
        super(name , age , role)
        this.jnum = jnum
    }
        getData() {
        return `His jersey number is ${this.jnum}`; 
    }
}


let x = new subchild("Gill", 22, "Opener", 77);
console.log(x.getDetails());
console.log(x.getData());

// class Test{
//     constructor(name,age,role){
//         this.name = name
//         this.age = age
//         this.role = role
//     }
//     getdetails(){
//         return `${this.name} is an Indian cricketer, he is ${this.age} years old and his role is ${this.role}`;
//     }
// }
// class child extends Test{
//     constructor(name,age,role ,jnum){
//         super(name,age,role );
//         this.jnum = jnum
//     } 
//     getdata() {
//         return `His jersey number is ${this.jnum}`;
//     }
// }
// class subchild extends Test{
//     constructor(name,age,role ,jnum,iplteam){
//         super(name,age,role ,jnum)
//         this.iplteam = iplteam;
//     }
//     getteam(){
//         return `His IPl Team is ${this.iplteam}`
//     }
// }

// let a = new child("Gill", 22, "Opener", 77);
// console.log(a.getdetails());  
// console.log(a.getdata());     

// let b = new subchild("Gill", 22, "Opener", "Gujarat Titans");
// console.log(b.getdetails());  
// console.log(b.getteam());  