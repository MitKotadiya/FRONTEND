// class Person{
//     #name
//     #age
//     #role
//     constructor(name , age , role){
//         this.#name = name
//         this.#age = age
//         this.#role = role
//     }
//     getData(){
//         return `${this.#name} is an Indian cricketer, he is ${this.#age} years old and his role is ${this.#role}`;
//     }
// }
// class Child extends Person{
//      constructor(name , age , role){
//         super(name , age , role)
//         super.getData()
//     }
// }
// class Subchild extends Person{
//       #jnum
//      constructor(name , age , role , jnum){
//         super(name , age , role)
//         this.#jnum = jnum
//     }
//         getData() {
//         return `${this.name}'s jersey number is ${this.#jnum}`; 
//     }
// }

// let obj = new Child("Gill" , 22 , "Opner" , 77)
// let ob = new Subchild("js" , 22 , "Opner" , 25)
// console.log(obj.getData());
// console.log(ob.getData());
