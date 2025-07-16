// if, else if, nested ladder, switch, ternary

// 1. Check Even or Odd

// let number = Number(prompt("Enter a number to check even or odd:"));

// if (number % 2 == 0) {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }

// 1.1 Check Even or Odd using Ternary Operator

// let number = Number(prompt("Enter a number to check even or odd:"));

// console.log(number % 2 === 0 ? "Even number" : "Odd number");

// 2. Find Maximum of Three Numbers

// let a = Number(prompt("Enter value of A:"));
// let b = Number(prompt("Enter value of B:"));
// let c = Number(prompt("Enter value of C:"));

// if (a > b) {
//     if (a > c) {
//         console.log("A is max");
//     } else {
//         console.log("C is max");
//     }
// } else {
//     if (b > c) {
//         console.log("B is max");
//     } else {
//         console.log("C is Maximum");
//     }
// }

// console.log((a > b && a > c) ? "A is max" : (b > c) ? "B is max" :"C is max") ;

// 3. Find Maximum of Four Numbers

// a = Number(prompt("Enter value of A:"));
// b = Number(prompt("Enter value of B:"));
// c = Number(prompt("Enter value of C:"));
// d = Number(prompt("Enter value of D:"));

// if (a > b) {
//     if (a > c) {
//         if (a > d) {
//             console.log("A is max");
//         } else {
//             console.log("D is max");
//         }
//     } else {
//         console.log("C is max");
//     }
// } else {
//     if (b > c) {
//         if (b > d) {
//             console.log("B is max");
//         } else {
//             console.log("D is max");
//         }
//     } else {
//         console.log("C is max");
//     }
// }

// console.log((a>b && a>c && a>d) ? "A is max" :  (b > c && b > d) ? "B is max" : (c > d) ? "C is max" :"D is max";);


// 4. Find Maximum of Two Numbers

// a = Number(prompt("Enter value of A:"));
// b = Number(prompt("Enter value of B:"));

// if (a > b) {
//     console.log("A is max");
// } else {
//     console.log("B is max");
// }

// 4.1 Find Maximum of Two Numbers

// let a = Number(prompt("Enter value of A:"));
// let b = Number(prompt("Enter value of B:"));

// console.log(a > b ? "A is maximum" : "B is maximum");

// 5. Check Positive or Negative

// number = Number(prompt("Enter a number to check positive or negative:"));

// if (number >= 0) {
//     console.log("Number is Positive");
// } else {
//     console.log("Number is Negative");
// }

// 5. Check Positive or Negative

// number = Number(prompt("Enter a number to check positive or negative:"));

// console.log(number >= 0 ? "Number is Positive" : "Number is Negative")

// 6. Check if Number is Divisible by 5

// number = Number(prompt("Enter a number to check if divisible by 5:"));

// if (number % 5 == 0) {
//     console.log("Number is divisible by 5");
// } else {
//     console.log("Number is not divisible by 5");
// }

// 7. Check if Number is Divisible by Both 5 and 3

// number = Number(prompt("Enter a number to check if divisible by 5 and 3:"));

// if (number % 5 == 0 && number % 3 == 0) {
//     console.log("Number is divisible by both 5 and 3");
// } else {
//     console.log("Number is not divisible by both 5 and 3");
// }

// 8. Check if Student Passed or Failed

// let studentMarks = Number(prompt("Enter student's marks:"));
// let passingMarks = 33;

// if (studentMarks >= passingMarks) {
//     console.log("Student is Pass");
// } else {
//     console.log("Student is Fail");
// }

// 9. Check if Year is Leap Year

// let year = Number(prompt("Enter a year to check if it is a leap year:"));

// if (year % 4 == 0) {
//     console.log("Year is a Leap Year");
// } else {
//     console.log("Year is Not a Leap Year");
// }

// 10. Find Minimum of Three Numbers

// a = Number(prompt("Enter value of A:"));
// b = Number(prompt("Enter value of B:"));
// c = Number(prompt("Enter value of C:"));

// if (a < b) {
//     if (a < c) {
//         console.log("A is min");
//     } else {
//         console.log("C is min");
//     }
// } else {
//     if (b < c) {
//         console.log("B is min");
//     } else {
//         console.log("C is min");
//     }
// }

// ladder else if

// let marks = 100;

// if(marks>100 || marks < 0){
//     console.log("Plase enater valid marks")

// }else{

//     if(marks>90)
//         console.log("Your Grade is A")

//    else if(marks > 75)
//         console.log("Your Grade is B")

//    else if(marks > 60)
//         console.log("Your Grade is C")

//    else if(marks >= 35)
//     console.log("Your Grade is D")

//     else if(marks<35)
//     console.log("Faild")
 
//     else{
//         console.log("invalid marks")
//     }
// }


// Switch case 

// let choice=3 , a=20 , b=10;

// switch (choice) {
//     case 1:
//         console.log("Addition of two value :" , a + b);
//         break;
    
//     case 2:
//         console.log("Substarction of two value :" , a - b);
//         break;

//     case 3:
//         console.log("multiply of two value :" , a * b);
//         break;

//     case 4:
//         console.log("Division of two value :" , a / b);
//         break;
    
//     case 5:
//         console.log("Remider of two value :" , a % b);
//         break;

//     case 6:
//         console.log("Power of  5 and 3 :" , 5 ** 3);
//         break;

//     default:

//     console.log("Invalid choise");

//         break;
// }

// Password - Change logic

// let org_pass = 123 , cur_pass = 123 , new_pass =1234 , con_pass = 1234 ;

// if(org_pass == cur_pass ){

//     if(cur_pass == new_pass){
        
//         console.log("Old and New Passkey Both Same");  
//     }
//     else if(new_pass == con_pass){
//             console.log("Passkey change Sucessfully"); 
//         }
//         else{
//         console.log("Plase confirm Your New Passkey "); 
  
//         }
// }
// else{
//  console.log("Plase enater valid passkey");
// }


// Check Persons are Eligible for voting or not


// let age=17;

// if(age>=18){
//     console.log("You are Eligible for voting ")
// }else{
//     console.log("You are NOT Eligible for voting ")

// }


// 1. An electricity board charges the following rates to domestic users to discourage large consumption of energy For the first 100 units 60P per unit For the next 200 units 80P per unit Beyond 300 units 90P per unit All users are charged a minimum of Rs. 50. If the total amount is more than 300.00 then an additional surcharge of 15% is added. 


// let units = 500 , fix_charge=50 , unit_100 , unit_100pluse , unit_300pluse ,total_amount;

// if(units<=0){
//     console.log("Enter valid Units")
// }
// else{

//  if(units<=100){
    
//     unit_100 = units*0.6 + fix_charge; //100 units ----> 110₹ including fix charge
//     console.log(" Yout total amount of unit " , units , "is" , unit_100 + " ₹");
// }
// else if(units > 100 && units <= 300){

//        unit_100 = units*0.6 + fix_charge;
//        unit_100pluse = (units - 100)  * 0.2 + unit_100 //101 units to 300 ----> 160₹ + 110₹ = 270₹ (total of 300 units)
//        console.log(" Yout total amount of unit " , units , "is" , unit_100pluse + " ₹")

// }
// else if(units > 300){

//        unit_100 = units*0.6 + fix_charge;
//        unit_100pluse = (units - 100)  * 0.2 + unit_100 //101 units to 300 ----> 160₹ + 110₹ = 270₹ (total of 300 units)
//        unit_300pluse = (units-300) * 0.1 + unit_100pluse 
//        console.log(" Yout total amount of unit " , units , "is" , unit_300pluse + " ₹")
//        if (unit_300pluse > 300) {
        
//        }
// }
// if(unit_300pluse > 300){

//     unit_300pluse += unit_300pluse * 0.15;
//     console.log(" Your Payable amout with 15% additional tex of unit " , units , "is" , unit_300pluse + " ₹")

// }

// }


// Q3. Write a C program to accept the basic salary of an employee from the user. Calculate the gross salary on the following basis:

// | Basic Salary Range | HRA % | DA % |
// | ------------------ | ----- | ---- |
// | Up to ₹5000        | 8%    | 20%  |
// | ₹5000 to ₹10000    | 12%   | 30%  |
// | ₹10000 to ₹15000   | 15%   | 40%  |
// | Above ₹15000       | 20%   | 50%  |


// let salary = 16000 , da , hra , gross_Salary ;

// if (salary < 0){

//     console.log("invalid salary");
    
// }
// else{
//     if(salary < 5000 && salary > 0 ){

//         da = salary * 0.8
//         hra = salary * 0.20
//         gross_Salary = salary + da + hra;

//         console.log("Basic Salary :", salary);
//         console.log("DA :", da);
//         console.log("HRA :", hra);
//         console.log("Gross Salary :", gross_Salary);
        
//     }   
//     else if(salary >= 5000 && salary < 10000 ){

//         da = salary * 0.12
//         hra = salary * 0.30
//         gross_Salary = salary + da + hra;

//         console.log("Basic Salary :", salary);
//         console.log("DA :", da);
//         console.log("HRA :", hra);
//         console.log("Gross Salary :", gross_Salary);
        
//     } 
//     else if(salary >= 10000 && salary < 15000 ){

//         da = salary * 0.15
//         hra = salary * 0.40
//         gross_Salary = salary + da + hra;

//         console.log("Basic Salary :", salary);
//         console.log("DA :", da);
//         console.log("HRA :", hra);
//         console.log("Gross Salary :", gross_Salary);
        
//     }
//     else{

//         da = salary * 0.20
//         hra = salary * 0.50
//         gross_Salary = salary + da + hra;

//         console.log("Basic Salary :", salary);
//         console.log("DA :", da);
//         console.log("HRA :", hra);
//         console.log("Gross Salary :", gross_Salary);

//     }
// }

// 4. Compute taxes for a given income with tax slab rates as follows... 

//     a. slab 1... 0-2500: 0% 
//     b. slab 2... 2500-5000: 10% 
//     c. slab 3... 5000-10000: 20% 
//     d. slab 4... 10000+: 30% 

// (for each range of a given income, the tax rate is different) e.g. input: x = 5200 divisions are 0-2500, 2500-5000, 5000-5200 calculation: 0-2500 of x: 0% of 2500 = 0 2500-5000 of x: 10% of 2500 = 250 5000-1000 of x: 20% of 200 = 40 output: 290 

// let income = 5200 , tex ;

// if(income < 0){

//     console.log("invalid income");

// }
// else{

//     if (income > 10000 ) {
        
//         tex = (income-10000) * 0.30 + (5000 * 0.20) + (2500 * 0.10)

//         console.log("Your Text free income :" , income);
//         console.log("Text on your income :" , tex);
        
//     }     
//     else if (income > 5000 ) {
        
//         tex = (income - 5000) * 0.20 + (2500 * 0.10)

//         console.log("Your Text free income :" , income);
//         console.log("Text on your income :" , tex);
        
//     }  
//     else if (income > 2500 ) {
        
//         tex = (income - 2500) * 0.10 // 250

//         console.log("Your Text free income :" , income);
//         console.log("Text on your income :" , tex);
        
//     }  

// }

// 5. Write a program to evaluate the Total, Percentage, Grade of a student for the following constraints: 

//         a. If marks > 75 - grade A 
//         b. If 60 marks < 75-grade B 
//         c. If 45 marks<60 - grade C 
//         d. If 35 marks<45 - grade D 
//         e. If marks < 35 - Fail 

// let subject1 = 80 , subject2 = 65 , subject3 = 70 , subject4 = 55 , subject5 = 90 , total , percentage;


//  total = subject1 + subject2 + subject3 + subject4 + subject5;
//  console.log("Total Marks: " + total);

//  percentage = total / 5;
//  console.log("Your Percentage is: " + percentage + "%");


// if (percentage < 0 && percentage > 100) {

//     console.log("Invalid");

// } else{

//      if (percentage >= 75) {

//         console.log("You Are passing With Grade A")

//     } 
//     else if (percentage >= 60 && percentage < 75 ) {

//         console.log("You Are passing With Grade B")

//     }  
//     else if (percentage >= 45 && percentage < 60 ) {

//         console.log("You Are passing With Grade C")

//     }   
//     else if (percentage >= 35 && percentage < 45 ) {

//         console.log("You Are passing With Grade D")

//     } 
//     else{

//         console.log("You are FAIL....");
        
//     }

// }

// 6. Declare two variables x and y. Assign values to these variables. Number x should be printed only if it is less than 2000 or greater than 3000, and number y should be printed only if it is between 100 and 500.

// let x = 100, y = 250;

// if (x < 0 || y < 0) {
//     console.log("Please add positive numbers");
// } else {

//     if (x < 2000 || x > 3000) {
//         console.log("x =", x);
//     }

//     else if (y >= 100 && y <= 500) {
//         console.log("y =", y);
//     }
// }
