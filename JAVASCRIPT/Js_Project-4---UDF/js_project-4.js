// 1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that time print message Good Morning. 

// let greet = (message) => {
//     if (message === undefined) {
//         console.log("Good Morning");
//     } else {
//         console.log(message);
//     }
// }

// greet(); 
// greet("Hello how are you"); 


// output

// greet() ---> Good Morning.
// greet("Hello how are you") ---> Hello how are you


// 2. Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function. 


// let radius = Number(prompt("Enter The Radius Of Circle"));

// let circleArea = (radius) => {
//    let pi = 3.14;
//    circleArea = pi * radius * radius;
//    return "Area Of Circle is :" + " " + circleArea;
// }
// console.log(circleArea(radius));

// output

// radius ---> 10 , pi = 3.14 ;
// circleArea = pi * radius * radius;
// circleArea =  3.14 * 10 * 10;
// Area of Circle is: 314

// 3. Write a JAVASCRIPT Program to find Triangle area (area = (1*h)/2) using return type with argument function

// let base = Number(prompt("Enter the base of the triangle"));
// let height = Number(prompt("Enter the height of the triangle"));

// let triangleArea = (base, height) => {
//     let area = 0.5 * base * height;
//     return "Area of Triangle is: " + area;
// }
// console.log(triangleArea(base, height));

// output

// base = 10, height = 5
// Area of Triangle is: 25

// 4. Write a JAVASCRIPT Program to find Rectangle area = 1 * h using return type with argument function. 

// let length = Number(prompt("Enter the length of the rectangle"));
// let height = Number(prompt("Enter the height of the rectangle"));

// let rectangleArea = (length, height) => {
//     let area = length * height;
//     return "Area of Rectangle is: " + area;
// }
// console.log(rectangleArea(length, height));

// output

// length = 8, height = 4
// Area of Rectangle is: 32

// 5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function. 

// let a = Number(prompt("Enter value of a"));
// let b = Number(prompt("Enter value of b"));
// let c = Number(prompt("Enter value of c"));

// let calculate = (a, b, c) => {
//     let result = ((b * b) * (4 * a * c)) / (2 * a);
//     return "Answer is: " + result;
// }
// console.log(calculate(a, b, c));

// output

// a = 1; b = 2; c = 3;
// Answer is: 24

// 6. Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function 

// let a = Number(prompt("Enter value of a"));
// let b = Number(prompt("Enter value of b"));

// let calculate = (a, b) => {
//     let result = (a * a) + (2 * a * b) + (b * b);
//     return "Answer is: " + result;
// }
// console.log(calculate(a, b));

// output

// a = 3; b = 4;
// Answer is: 49

// 7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8) using return type with argument function

// let fahrenheit = Number(prompt("Enter temperature in Fahrenheit"));

// let Celsius = (fahrenheit) => {
//     let celsius = (fahrenheit - 32) / 1.8;
//     return "Temperature in Celsius is: " + celsius;
// }
// console.log(Celsius(fahrenheit));

// output

// fahrenheit = 100
// Temperature in Celsius is: 37.77777777777778

// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f= (c*1.8)+32) using return type with argument function 

// let celsius = Number(prompt("Enter temperature in Celsius"));

// const Fahrenheit = (celsius) => {
//     let fahrenheit = (celsius * 1.8) + 32;
//     return "Temperature in Fahrenheit is: " + fahrenheit;
// }
// console.log(Fahrenheit(celsius));

// output

// celsius = 37;
// Temperature in Fahrenheit is: 98.60000000000001

// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using an argument with no return type. 

// let number = Number(prompt("Enter a number"));

// function OddEven(number) {
//     if (number % 2 === 0) {
//         console.log("Even Number");
//     } else {
//         console.log("Odd Number");
//     }
// }
// OddEven(number);

// output
// number = 2;
// Even Number
// number = 3;
// Odd Number

// 10. Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type

// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));

// console.log("Before Swapping: a =", a, ", b =", b);

// let Swapping = (a, b) => {
    
//     a = a + b; // a = 1 + 2 = 3
//     b = a - b; // b = 3 - 2 = 1
//     a = a - b; // a = 3 - 1 = 2
    
//     console.log("After Swapping: a =", a, ", b =", b);
// }
// Swapping(a, b);

// output
// a = 1; b = 2;
// Before Swapping: a = 1 , b = 2
// After Swapping: a = 2 , b = 1