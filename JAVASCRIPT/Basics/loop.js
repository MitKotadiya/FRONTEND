// For  , While ,  Do while , for...of	(Loop over arrays) , for...in	(Loop over object properties)

// for (let int ;  condition ; inc/dec) {
    
//     statement;
// }

    // int;
// while (condition) {
    
//     statement;
//     inc/dec;
// }

//   int
// do {
    
//     statement;
//     inc/dec;

// }while (condition);

// for(let i = 1 ; i<=10 ; i++){
    
//     console.log(i)
// }

// i = 1;

// while(i<=5){
//     console.log(i);
//     i++
// }

// i = 1;

// do{
//     console.log(i);
//     i++;
    
// }while(i<=5)


// 1. Print 10 to 1.

// for(let i = 10; i>=1 ; i--){

//     console.log(i); 
// }

// 2. Print 51 to 99.

// i = 51;

// while(i<=99){

//     console.log(i);
//     i++ 

// }


// 3. Print 1 to n.

// let n = Number(prompt("enter n"));

// i = 1;
// do{
//   console.log(i);
//   i++;

//  }while(i <= n);

// 4. Print n to 1.

// let n = Number(prompt("enter n"));

// for(let i = n; i>=1 ; i--){

//     console.log(i); 
// }

// 5. Print -n to n.

// let n1 = Number(prompt("enter starting number must be in Nagative"));
// let n2 = Number(prompt("enter ending number must be in Positive"));

// if(n1 > 0 && n2 < 0){

//     console.log("Plase enter valid value as Per instruction");
// }

// for (let i = n1; i <= n2; i++) {
  
//     console.log(i);
    
// }

// 6. Enter N and print out odd numer till n

// let n = Number(prompt("Enter n for print odd number untill you want"));

// i = 1;
// while (i <= n) {
   
//     if(i % 2 == 1){
//        console.log(i);
//     }
//     i++
// }

// 7. Enter N and print out even numer untill n

// let n = Number(prompt("Enter n for print even number untill you want"));

// i = 1;
// do {
   
//     if(i % 2 == 0){
//        console.log(i);
//     }
//     i++
// }while (i <= n)


//  8.Print out series 1,4,9,16,.....,n

// let n = Number(prompt("Enter n"));

// for(i = 1; i <= n; i**2){
//     console.log(i);
    
// }

// 9. Print out series 1,4,3,16,5,...,n

// let n = Number(prompt("Enter n"));

//  i = 1;
//  while(i <= n){

//     if(i % 2 == 1){

//         console.log(i);
          
//     }else{
//         console.log(i**2);         
//     }
//     i++
// }

// for(i = 1; i <= n; i++){
//     if(i % 2 == 1){
//         console.log(i);
//     }else{
//         console.log(i**2);   
//     }
// }

// 10. Print out series 1,2,4,8,16,...,n

// let n = Number(prompt("Enter n")) ,a ;

// i = 1;
// do{
//     console.log(a);
//     i++;
//     a = 2 **(i-1)

//  }while(i <= n);

// for(i = 1; i <= n; i++){ 
    
//     a = 2 **(i-1)
//     console.log(a);
    
// } 

// 11. Print out series 1,4,12,32,80,...,n

// let n = Number(prompt("Enter n")),a;

// for(i = 1; i <= n; i++){

//     a = i * (2 **(i-1)); //  a_n = n * (2**(n - 1))
//     console.log(a);
    
// }

// 11. Find the sum of numbers from 1 to 100.

// let i = 1 , sum = 0;
// while (i <= 100) {
//     sum += i
//     i++
//     console.log( i , sum);
// }

// 12. Find the factorial of a given number.

// let n = Number(prompt("Enter n")) , factorial = 1;

// i = 1;
// do{
//     factorial *= i; // factorial = factorial * i; 1 * 1 = 1
//     i++
//     console.log(factorial);
    
// }while (i <= n) 

// 13. Program to Print Fibonacci Series up to n

// let n = Number(prompt("Enter n")) , x = 0 , y = 1 , z;

// for(i = 1; i <= n; i++){
//     z = x + y; //  z = 0 + 1 // z = 1 + 1 = 2 //
//     x = y  //  x = 1 // x = 1
//     y = z  // y = 1  // y = 2 
//     console.log(z) // 1 // 1 // 2

// }

// 14.Program to Find the Sum of Digits of a Number

// let n = Number(prompt("Enter n")) , sum = 0 , x;

// for(i = 1; i <= n; i++){
//     x = n % 10 //123 --> 3 // 2  
//     sum += x // sum += 3  // sum = 3 + 2 = 5
//     n = parseInt (n / 10); // 123 / 10 --> 12.3 === 12
// }
// console.log(sum + 1); 

// continue

// for(let i=1 ; i<=50; i++){
//     if(i==20){
//         continue
//     }else{
//     console.log(i);
    
//     }
// }

// pattern

// let i , j
// for( i=1;i<=5;i++){
//     let str="";
//     for( j=1;j<=5;j++){ 
//         str +=i + " "; 
//     }
//     console.log(str);
// }


// let n = Number(prompt("Enter n")) , str = "" , x;

// if (n <= 0) {
//     console.log("Enter a valid number");
      
// }else{

// for(i = 1; i <= n; i++){
//     x = n % 10 
//     str += x
//     n = Math.floor (n / 10); 
// }
// console.log(str); 
// }

// let n = Number(prompt("Enter n")) ;
// let n = 123 ,  str = "" , x;

// while (n > 0) {
//     x = n % 10;
//     str = str + x
//     n = Math.floor(n / 10);
// }

// console.log(str);   

// let n = Number(prompt("Enter n")) ,sum = 0, x ,og = n;

//     // let n = 153 , sum = 0, x ,og = n;

//     while (n > 0) { 

//     x = n % 10; // 3
//     sum += x**3 // 0+3**3 =27 + 125 + 1
//     n = Math.floor(n / 10); // 15.3 , 1.5 ,1

// }
// if(sum == og){
//     console.log(" Armstrong number.");
// }else{
//     console.log("not an Armstrong number.");
// }

// let n = Number(prompt("Enter n")) , str = "" , x , og = n ;

// let n = 121 ,  str = "" , x , og = n;

// while (n > 0) { 
//     x = n % 10; // 121 --> 1 // 12 --> 2 // 1
//     str = str + x // "121"
//     n = Math.floor(n / 10); // 121 --> 12.1 (12 ) // 1.2(1) // 1 // 0
// }
// if(str == og){
//   console.log("Palindrome number");   
// }else{
//   console.log("Not an Palindrome number");  
// }

