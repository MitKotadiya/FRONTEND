// function ---> exicute block of code

// function name(params) {
    
//     // statement
// }
//  name(args)

// type of function

// 1.TNRN
// 2.TSRN
// 3.TNRS
// 4.TSRS

// 1.TNRN

// function addition() {
//     let a = 5 , b = 6;
//     let c = a+b
//     console.log(c);
// }
// addition()

// 2.TSRN

// function addition(a,b) {
//     let c = a+b;
//     console.log(c);
// }
// addition(5,15)

// 3.TNRS

// function maxnumber() {
//     let x = 5 , y = 25;
//     if(x > y){
//         return x;
//     }else{
//         return y;
//     }
// }
// console.log( maxnumber());

// let a = 10;
// let ans =maxnumber();

// let sum =a + ans;
// console.log(sum);

// 4.TSRS

// function maxnumber(x , y) {
//     if(x > y){
//         return x;
//     }else{
//         return y;
//     }
// }
// console.log( maxnumber(25 , 30));



// function pattern(n) {
//   let i , j
// for( i=1;i<=n;i++){
//     let str="";
//     for( j=1;j<=n;j++){ 
//         str +=i + " "; 
//     }
//     console.log(str);
// }  
// }
// pattern(10)

// function pattern(n) {
//     let str=""
// for(let i = 1 ; i <= n ; i++){
//     str = str + i
//     if(i<n)
//     str += "-"
// }
// console.log(str);
// }
// pattern(10)



// let marks = Number(prompt("Enter your marks:"))

// if (marks < 0 || marks > 100) {
//     console.log("Please enter a valid Marks between 0 and 100"); 
// }else{

// function grade(marks) {
//     if(marks >=90){
//         return "Your grade: A";
//     }
//     else if(marks >=75){
//        return "Your grade: B"; 
//     }
//     else if(marks >=60){
//         return "Your grade: C";
//     }
//     else if(marks >=35){
//        return "Your grade: D"; 
//     }
//     else{
//         return "FAIL"
//     }
// }
//     console.log(grade(marks));
// }

// let n = Number(prompt("Enter your Number:"))

// if (n <= 0) {
//     console.log("Please enter a Positive Number"); 
// }
// else{

// function pattern(n) {
//     let i , j , count = 1
//     for( i = 1; i <= n; i++){
//         let str=""
//         for(j = 1; j <= i; j++){
//             str += count + " "
//             count++
//         }
//         console.log(str);
        
//     }
// }
// console.log(pattern(n));

// }


// function addition() {
//    let a = 5 , b = 10
//    console.log("Addition of a and b is:" , a + b);
    
// }
// function substraction(a,b) {  
//     console.log("substraction of a and b is:" , a - b);
// }
// function multiplication(a,b) {
//     return a * b;
// }
// function division() {
//     let a = 5 , b = 10
//     return a/b;
// }

// let choice = 3
// switch (choice) {
//     case 1:
//         addition()
//         break;
//     case 2:
//         console.log(substraction(15,10));
//         break;
//     case 3:
//         console.log(multiplication(5,4));
//         break;
//     case 4:
//         division()
//         break;

//     default:
//         break;
// }

// function fac(n) {
//     if(n == 1){
//         return 1;
//     } else {
//         return n * fac(n - 1);
//     }
// }
// console.log(fac(5));

// let a = function (x , y) {
//     return x + y ;
// }
// console.log(a(10,20));

// ARROW FUNCTION

// let a = (x,b) =>{
//     let c ;
//     c = x + b;
//     return c
// }
// console.log(a(5,6));

// NESTED FUNCTION

// let a = (x, b) => {
//     let c = x + b;

//     let y = (m, n) => {
//         let d = m + n;
//         return d;
//     }
//     console.log(y(5,15)); 
//     return c;
// }
// console.log(a(5,6)); 

// Closure Concepts

// let a = (x, b) => {
//     let c = x + b;

//     let y = (m, n) => {
//         let d = m + n;
//         return d;
//     }
//     return y;
// }
// o = a(25,60)
// console.log(o(35,35));
