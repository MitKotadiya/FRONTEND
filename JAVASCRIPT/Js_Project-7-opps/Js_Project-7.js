// 1) Create a School class and create a student and faculty method. The Student method gives the student name, email and contact number as arguments and prints all details the same as faculty using class & object. (3 marks)

// class School{
    
//     constructor(name, email,contactNumber){
//     this.name = name
//     this.email = email
//     this.contactNumber = contactNumber
//     }
    
//     student(){
//         console.log("---- Student Details ----");
//         console.log(`Student Name  ---> ${this.name}`);
//         console.log(`Student Email  ---> ${this.email}`);
//         console.log(`Student Contact Number  ---> ${this.contactNumber}`);
//         console.log("-------------------------");
        
//     }
//     faculty(){
//         console.log("---- Faculty Details ----");
//         console.log(`Faculty Name  ---> ${this.name}`);
//         console.log(`Faculty  Email  ---> ${this.email}`);
//         console.log(`Faculty  Contact Number  ---> ${this.contactNumber}`);
//         console.log("--------------------------");
//     }
// }

// let obj = new School("Mit","mit17551@gmail.com",8160959116).student()
// let obj2 = new School("Girish Sir","girish17511@gmail.com",9516021039).faculty()


// output

// ---- Student Details ----

// Student Name  ---> Mit
// Student Email  ---> mit17551@gmail.com
// Student Contact Number  ---> 8160959116

// -------------------------

// ---- Faculty Details ----

// Faculty Name  ---> Girish Sir
// Faculty  Email  ---> girish17511@gmail.com
// Faculty  Contact Number  ---> 9516021039

// --------------------------


// 2) Create a Person class with an argument name and age. create an Employee class through print out details of Person Class. (3 marks)


// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     getdetail(){
//         console.log(`Person Name  ---> ${this.name}`);
//         console.log(`Person Age  ---> ${this.age}`);
//     }
// }
// class Employee extends Person{
//     constructor(name,age){
//        super(name,age)
//     }
// }

// let obj = new Employee("Mit",20).getdetail()

// output

// Person Name  ---> Mit
// Js_Project-7.js:50 Person Age  ---> 20


// 3) Employee class creates a constructor called print a simple message. (1 marks)

// class Employee{
//     constructor(){
//         console.log("Constructor called....");  
//     }
// }
// let obj = new Employee()

// output

// Constructor called....

// 4) Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area (width*height) using with argument. (3 marks)

// let radius = Number(prompt("Enter radius of the circle:"));
// let width = Number(prompt("Enter width of the rectangle:"));
// let height = Number(prompt("Enter height of the rectangle:"));

// if(radius < 0 || width < 0 || height < 0 ){
//     console.log("Plase Enter Positive Number");  
// }else{
// class Shape{
//     constructor(radius,width,height){
//         this.radius = radius
//         this.width = width
//         this.height = height
//     }
//     circleArea(){
//         let area = Math.PI * this.radius * this.radius
//         let fixnum = Math.round(area * 100)/100
//         console.log("Area of circle is" ,fixnum );
//     } 
//     rectangleArea(){
//         let area = this.width * this.height;
//         let fixnum = Math.round(area * 100)/100
//         console.log("Area of Rectangle is" , fixnum);
//     }
// }

// let obj = new Shape(radius, width, height).circleArea()
// let obj2 = new Shape(radius, width, height).rectangleArea()
// }

// output

// Enter radius of the circle: 5
// Enter width of the rectangle: 10
// Enter height of the rectangle: 20
// Area of circle is 78.54
// Area of Rectangle is 200


// 5) Create a mobile functional class default set model and then set color using prototyping.

// class Mobile {
//     constructor(model){
//         this.model = model
//     }
//     getDetails() {
//         console.log(`Model: ${this.model}`);
//         console.log(`Color: ${this.color}`);
//     }
// }
// Mobile.prototype.setColor = function(color) {
//     this.color = color;
// };

// let obj = new Mobile("Nokia 5233")
// obj.setColor("Black"); 
// obj.getDetails()

// output

// Model: Nokia 5233
// Js_Project-7.js:139 Color: Black


// 6) Using Object prototyping create Emp function already added name, email, salary but not add designation. designation added by object prototyping.

// class Emp{
//     constructor( name, email, salary){
//         this.name = name;
//         this.email = email;
//         this.salary = salary
//     }
//     getDetails(){
//         console.log("Name       :", this.name);
//         console.log("Email      :", this.email);
//         console.log("Salary     :", this.salary);
//         console.log("Designation:", this.designation);
//     }
// }
// Emp.prototype.designation = function(designation){
//     this.designation = designation
// }

// let obj = new Emp("Mit Kotadiya", "mit@gmail.com", 100000)
// obj.designation("Web Developer")
// obj.getDetails()


// output

// Name       : Mit Kotadiya
// Js_Project-7.js:166 Email      : mit@gmail.com
// Js_Project-7.js:167 Salary     : 100000
// Js_Project-7.js:168 Designation: Web Developer

// 7) Array prototyping to upload game arrays and all game names are converted to Uppercase.

// Array.prototype.convertToUpper = function(){
//     return this.map(ele => ele.toUpperCase())
// }
// let games = ["cricket", "football", "hockey", "tennis"];
// let upperCaseGames = games.convertToUpper();

// console.log("Original Games:", games);
// console.log("Uppercase Games:", upperCaseGames);

// output

// Original Games: ['cricket', 'football', 'hockey', 'tennis']
// Uppercase Games: ['CRICKET', 'FOOTBALL', 'HOCKEY', 'TENNIS']