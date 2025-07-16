// 1 .Write a JAVASCRIPT Program to display the multiplication table of a given integer using a while loop

// let n = Number(prompt("Enter your number:"));

// let i = 1
// while (i <= 10) {
//     console.log(n + " x " + i + " =  " + n * i);
//     i++
    
// }

// output  n ---> 2

//    console.log(n + " x " + i + " =  " + n * i);

// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4= 8

// 2. Write a JAVASCRIPT Program to calculate the factorial of a given number using a while loop. 

// let n = Number(prompt("Enter your number:")), fac = 1;

// let i = 1;
// while (i <= n) {
//   fac = fac * i;
//   i++

// }
// console.log(fac);

// output n --->  5

//  5 =  5 * 4 * 3 * 2 * 1 --> 120


// 3. Write a JAVASCRIPT Program to find the Armstrong number list of a given number using a do while loop. 

// let n = Number(prompt("Enter your number:")) , x , sum = 0, og = n , num = n ,count = 0;

// while (num != 0) {
//     num = Math.floor(num / 10)
//     count++  
// }
// do{
//     x = n % 10; // 153 --> 3 
//     sum += x ** count  // 3 ** 3 --> 27 + 125 +1 == 153
//     n = Math.floor(n / 10); // 15

// }while (n != 0) 

//     if (sum == og) {
//         console.log("Armestrong number"); 
//     }else{
//        console.log(" not a Armestrong  number"); 

//     }

// output

// n = 153

// sum += x ** count
// sum = 153

// than number is Armestrong number
    

// 4. Write a JAVASCRIPT Program to find the Palindrome number list of a given number using a while loop.

// let n = Number(prompt("Enter your number:")) , x , str = "" , og = n;

// while (n != 0) {
//     x = n % 10; // 121 ---> 1 , 12 ---> 2 ,1
//     str += x   // str ="121" 
//     n = Math.floor(n / 10); // 121 ---> 12 , 1

// }
//     if (str == og) {
//         console.log("Palindrome number"); 
//     }else{
//        console.log(" not a Palindrome number"); 

//     }

// output

    // x = n % 10; // 121 ---> 1 , 12 ---> 2 ,1
    // str += x   // str ="121" 
    // n = Math.floor(n / 10); // 121 ---> 12 , 1

    // if (str == og) { // 121 == 121
    // console.log("Palindrome number"); 
    // }else{
    //    console.log(" not a Palindrome number"); 
    // }

    // if condition is true than  number is Palindrome number


// 5. Write a JAVASCRIPT Program to calculate the Fibonacci Series of a given number using a while loop. 

// let n = Number(prompt("Enter your number:")) , x = 0 , y = 1 , z;

// let i = 1
// while (i <= n) {
//     z =  x + y; // z = 0 + 1 --> z = 1 ,, z = 1 + 1 = 2
//     x = y // x = 1
//     y = z // y = 1 ,, y = 2
//     i++;
//     console.log(x);
// }

// output

//  n = 5

//  1 , 1 , 2 , 3 , 5

// 6. Write a JAVASCRIPT Program to add all the integers between 0 and 30 and display the total using do while loop

// let i = 0 ,sum = 0 ;
// do{
//     sum += i
//     i++
// }while (i <= 30) 

// console.log("The sum of all integers from 0 to 30 is: " + sum);


// output

// i = 0 , sum = 1
// sum = sum + i
// sum = 1 + 0 --->sum = 1
// i++ // now  i = 1
// sum = sum + i
// sum = 1 + 1 --->sum = 2
// The sum of all integers from 0 to 30 is: 465


// 7. Write a JAVASCRIPT Program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz" using do while loop. 

// let i = 1;

// do {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
//   i++;
// } while (i <= 100);

// output

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz

// 8. Write a JAVASCRIPT Program that displays 1-2-3-4-5-6-7-8-9-10 on one line using a for loop. There will be no hyphen(-) at starting and ending position. 

// let str=""
// for(let i = 1 ; i <= 10 ; i++){
//     str = str + i
//     if(i<10)
//     str += "-"
// }
// console.log(str);

// output ---> 1-2-3-4-5-6-7-8-9-10

// 9. Write a JAVASCRIPT Program that displays 1+4+9+16+....+100 = 385 on one line using a for loop. 

// let str="" ,sum = 0
// for(let i = 1 ; i <= 10 ; i++){
//     str += i ** 2
//     sum += i**2
//     if(i<10)
//     str += " + "

// }
// console.log(str + " = " , sum);

// output

// 1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 =  385


// 10. Write a JAVASCRIPT Program that displays below pattern using nested for loop: 

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

// let i , j , str="";

// for(i = 5; i >= 1; i--){
//     str=""
//     for(j = 5; j >= i; j--){
//         str += j + " ";
//     } 
//     console.log(str);
// }

// output

// 5 
// 5 4 
// 5 4 3 
// 5 4 3 2 
// 5 4 3 2 1 


// 11. Write a JAVASCRIPT Program that displays below pattern using nested for loop: 

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let i , j , str = "" , count = 1;

// for(i = 1; i <=5; i++){ 
//     str=""
//     for(j = 1; j <= i; j++){
//         str +=  count  + ""
//         count++
//     }
//     console.log(str);
    
// }

// output

// 1
// 23
// 456
// 78910
// 1112131415