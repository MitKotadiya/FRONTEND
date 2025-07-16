// Polymorphism ---> poly -- many ,,, morphism --- form

class Person{
    constructor(name , age , role){
        this.name = name
        this.age = age
        this.role = role
    }
    getData(){
        return `${this.name} is an Indian cricketer, he is ${this.age} years old and his role is ${this.role}`;
    }
}
class Child extends Person{
     constructor(name , age , role){
        super(name , age , role)
        super.getData()
    }
}
class Subchild extends Person{
     constructor(name , age , role , jnum){
        super(name , age , role)
        this.jnum = jnum
    }
        getData() {
        return `${this.name}'s jersey number is ${this.jnum}`; 
    }
}

let obj = new Child("Gill" , 22 , "Opner" , 77)
let ob = new Subchild("Gill" , 22 , "Opner" , 77)
console.log(obj.getData());
console.log(ob.getData());
 
// console.log(new Child("Gill" , 22 , "Opner" , 77).getData())
// console.log(new Subchild("Gill" , 22 , "Opner" , 77).getData())