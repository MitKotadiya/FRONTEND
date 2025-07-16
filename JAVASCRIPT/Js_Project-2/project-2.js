// 1. Enter Electricity UNIT and Calculate amount to pay 

//     For first 50 units, Rs: 1/unit 
//     For next 100 units, 2/unit 
//     For next 100 units, 3/ units 
//     For units above 250, 4/units 
//     For all bills above 150 units an additional surcharge of 20% of total bill amount is added. 

// let units = Number(prompt("Enter Electricity UNIT")) , total_amount;

// if(units < 0){
//     console.log("Plase Enter Valid Units");
// }
// else{
//     if(units <= 50){

//        total_amount = units * 1;
//     }
//     else if(units > 50 && units < 150){

//         total_amount = (50 * 1 ) + (units-50) * 2;
//     }
//     else if(units > 150 && units <= 250){

//         total_amount = (50 * 1 ) + (100 * 2) + (units-150) * 3;
//         total_amount += total_amount * 0.2
//     }
//     else{

//         total_amount = (50 * 1 ) + (100 * 2) + (100 * 3) + (units-250) * 4;
//         total_amount += total_amount * 0.2

//     }
//     console.log("Your Payable Amount of units" , units , "is" , total_amount , "₹")
// }

             /* LOGIC EXPLAIN FOR ABOVE PROGRAME 
                -------------------------------- */

// if user input 35 units

// if(35 <= 50){ // condition true
//    total_amount = 50 * 1; // calculation for 50 units per unit 1₹
//  }

//     total Payable amount is 50₹

//  if user input 170 units

// else if(170 > 150 && 170 <= 250){ // condition true

//         total_amount = (50 * 1 ) + (100 * 2) + (170-150) * 3;

//         calculation for 0 to 50 units per unit 1₹  ----> 50₹
//         calculation for 51 to 150 units per unit 2₹  ----> 200₹
//         calculation for above 150 units per unit 3₹  ----> 60₹
//         total_amount += total_amount * 0.2 // add aditionl charge for payble amount of 170 unit
// }
//             total Payable amount is 372₹

// <<<<<--------------------------------------------------------->>>>>
// <<<<<---------------------------------------------------------->>>>>

// 2. Write a JAVASCRIPT Program to print season according user input using switch case. 
// (e.g. 1 to 4 for "Winter", 5 to 8 for "Summer", 9 to 12 "Monsoon" then add any number print "Invalid season" etc.) 


// let month = Number(prompt("Enter month number (1 to 12):"));

// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:

//         console.log("This season is Winter");

//         break; 
        
//     case 5:
//     case 6:
//     case 7:
//     case 8:

//         console.log("This season is Summer");
        
//         break;
        
//     case 9:
//     case 10:
//     case 11:
//     case 12:

//         console.log("This season is Monsoon");
        
//         break;

//     default:
//         console.log("invalid number");
        
//         break;
// }

             /* LOGIC EXPLAIN FOR ABOVE PROGRAME 
                -------------------------------- */

// When the user enters 5, it represents the Summer season
// When the user enters 4, it represents the Winter season
// When the user enters 10, it represents the Monsoon season
// When the user enters above 12, it represents invalid output

// <<<<<--------------------------------------------------------->>>>>
// <<<<<---------------------------------------------------------->>>>>
 

// 3. Write a JAVASCRIPT Program to find rate based on year and calculate total interest using nested if.
// (I = PRN/100) Principal Amount (P) 
// Interest Rate(R) 
// No. of Years (N) 
// (if 3<N<=5 then R is 3 | if 5<N<=8 then R is 5 | if 8<N<=12 then R is 12 | else R is 15) 

// let principal = Number(prompt("Enter the Principal Amount :")) , rate;
// let years = Number(prompt("Enter the Number of Years :")) , interest;

// if (years> 3 && years <= 5){

//     rate = 0.3;
//     interest = principal * rate * years / 100;

//     console.log("Principal Amount:", principal);
//     console.log("Number of Years:", years);
//     console.log("Rate of Interest:", (rate * 10) + "%");
//     console.log("Total Interest:", interest);
   
// }
//  else if (years> 5 && years <= 8){

//     rate = 0.5;
//     interest = principal * rate * years / 100;

//     console.log("Principal Amount:", principal);
//     console.log("Number of Years:", years);
//     console.log("Rate of Interest:", (rate * 10) + "%");
//     console.log("Total Interest:", interest);
   
// }
//  else if (years> 8 && years <= 12){

//     rate = 0.12;
//     interest = principal * rate * years / 100;

//     console.log("Principal Amount:", principal);
//     console.log("Number of Years:", years);
//     console.log("Rate of Interest:", (rate * 10 )+ "%");
//     console.log("Total Interest:", interest);
   
// }
//  else{

//     rate = 0.15;
//     interest = principal * rate * years / 100;

//     console.log("Principal Amount:", principal);
//     console.log("Number of Years:", years);
//     console.log("Rate of Interest:", (rate * 10) + "%");
//     console.log("Total Interest:", interest);
   
// }

             /* LOGIC EXPLAIN FOR ABOVE PROGRAME 
                -------------------------------- */


// if users principal is 1000 for 4 years than

// if (4 > 3 && 4 <= 5){ // condtion True

//     rate = 0.3; // rate of interest for 4 and 5 years is 3% 
//     interest = principal * rate * years / 100;// now use I=PRN/100 for calculatiion

//     console.log("Principal Amount:", 1000);
//     console.log("Number of Years:", 4);
//     console.log("Rate of Interest:", 0.3 + "%");
//     console.log("Total Interest:", 12 );
    
// }

// "If the user gets ₹1000 at an interest rate of 3% for 4 years, then the interest is ₹120."


// <<<<<--------------------------------------------------------->>>>>
// <<<<<---------------------------------------------------------->>>>>


// 4. Write a JAVASCRIPT Program to check Voting Eligibility. 

// let age = Number(prompt("Enter your age:"));

// if (age <= 0) {

//     console.log("Invalid age entered");
    
// }
// else if(age >= 18){

//     console.log("You are eligible to vote");

// }else{

//     console.log("You are not eligible to vote");

// }

             /* LOGIC EXPLAIN FOR ABOVE PROGRAME 
                -------------------------------- */

// if user input age in nagative number than first condition true and if block exicute like user input -15 age

// if (-15 <= 0) { // condition true

//     console.log("Invalid age entered"); // statement exixute
    
// }

// if user input age 15 than

// else if(15 >= 18){ // condition false check next & exicute next condition's statement

//     console.log("You are eligible to vote");

// }else{

//     console.log("You are not eligible to vote");

// }

// If the age is less than 0 or negative, it means the input is invalid.
// If the age is between 1 and 17, the user is not eligible for voting.
// If the age is 18 or above, the user is eligible for voting.


// <<<<<--------------------------------------------------------->>>>>
// <<<<<---------------------------------------------------------->>>>>


// 5. Write a JAVASCRIPT Program to Classify Age Groups

// let age = Number(prompt("Enter your age:"));

// if (age < 0) {
//   console.log("Invalid age.");
// }else{

// if (age >= 0 && age <= 12) {
//     console.log("You are a Child.");
// } 
// else if (age >= 13 && age <= 19) {
//     console.log("You are a Teenager.");
// } 
// else if (age >= 20 && age <= 59) {
//     console.log("You are an Adult.");
// } 
// else if (age >= 60) {
//     console.log("You are a LEGEND.");
// }
// }

                 /* LOGIC EXPLAIN FOR ABOVE PROGRAME 
                -------------------------------- */

// If the age is less than 0 or negative, it means the input is invalid.
// If the age is between 0 and 12, the user is Child.
// If the age is between 13 and 19, the user is Teenager.
// If the age is between 20 and 59, the user is  Adult.
// If the age is 60 or above, the user is  Senior Citizen.

// <<<<<--------------------------------------------------------->>>>>
// <<<<<---------------------------------------------------------->>>>>