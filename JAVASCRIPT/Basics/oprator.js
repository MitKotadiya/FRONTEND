// AIRTHMATIC OPRATER => + , - , * , / , % , ++ , -- , ** ;

// let a=10;
// let b=5;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(++a);
// console.log(--b);
// b++
// console.log(b);
// a--
// console.log(a);
// console.log(a**b);

// RELATIONAL OPRATOR => < , > , <= , >= , == , === , != !== ;

// let a=10;
// let b=5;

// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);
// console.log(a==b);
// console.log(a=="b");
// console.log(a!=b);
// console.log(a!=="b");

// ASSIGNMENT OPRATER => +a -a *a /a

// let a=10;
// let b=5;

// a+=20
// console.log(a)

// a-=20
// console.log(a)

// a*=20
// console.log(a)

// a/=20
// console.log(a)

// LOGICAOL OPRATER => && || !

    //     &&                              

    // T  T  T  => T
    // T  F  T  => F
    // F  T  T  => F
    // F  F  F  => F

    //     ||

    // T  T  T  => T
    // T  F  T  => T
    // F  T  T  => T
    // F  F  F  => F

// let a=10;
// let b=20;

// console.log(a < b && b > a);
// console.log(b > a || b < a);
// console.log(!(10<5))

// console.log(5 == '5');   // true 
// console.log(5 === '5');  // false 
// console.log(typeof ('5')); // string
// console.log(1 + '5');  // 15 
// console.log(1 + 'A');  // 1A
// console.log(1 - '5');  // -4 
// console.log(typeof (1 - 'D'));  // NaN -> Not a Number but type is number
// console.log(5 == 5.0) // true 
// console.log(null == undefined)
// console.log(typeof (null == undefined))
// console.log(null === undefined)

// WAP PRO TO SWAPIING NUMBER

// let a = 20 ,b = 50 , c;

// console.log("Before swaping")
// console.log("A ===> " , a)
// console.log("B ===> " , b)

// c = b; 
// b = a; 
// a = c; 

// a = a + b;
// b = a - b;
// a = a - b;

// a = a * b;
// b = a / b;
// a = a / b;

// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

// console.log("After swaping")
// console.log("A ===> " , a)
// console.log("B ===> " , b)

// WAP PRO TO CALCULATE GORSS SALARY WITH HRA AND DA IN ORDER OF 10% ND 5% BS=10000


// let basicSalary=10000, hra , da , gorssSalary;

// hra = basicSalary *0.10;
// da = basicSalary *0.05;

// gorssSalary = basicSalary + hra + da;

// console.log("Basic Salary :" , basicSalary)
// console.log("Hra :" , hra)
// console.log("Da :" , da)
// console.log("Gross Salary :" , gorssSalary)


// WAP PRO TO CALCULATE SIMPLAE INTEREST RATE IS 5% AND TIME DURATION 2 YEAR

// let principalAmount=10000 , rate=5 , timeDuration = 1 , interest , grossamount; 

// interest= (principalAmount * rate * timeDuration) /100;
// grossamount= principalAmount + interest;

// console.log("Principal Amount : " , principalAmount )
// console.log("Rate   : ", rate,"%")
// console.log("Time : " , timeDuration + " Year" )
// console.log("Intrest: " , interest )
// console.log("Gross Amount: " , grossamount )

// WAP PRO TO CALCULATE AREA OF TRIANGLE

// let area , base=8 , height=10;
// area = 0.5 * base * height;

// console.log("Base of the triangle is:", base);
// console.log("Height of the triangle is:", height);
// console.log("Area of the triangle is:", area);

// WAP PRO TO CALCULATE AREA OF SQUARE

// let area , side=6;
// area= side*side

// console.log("Side of the square is:", side);
// console.log("Area of the square is:", area);

// WAP PRO TO CALCULATE AREA OF RETANGLE

// let area , width=8 , length=10;
// area =  width * length;

// console.log("Width of the rectangle is:", width);
// console.log("Length of the rectangle is:", length);
// console.log("Area of the rectangle is:", area);


// WAP PRO TO CALCULATE AREA OF CIRCLE

// let  area , radius = 4 , pi=3.14;

// area=pi*radius*radius;

// console.log("Radius of the circle is:", radius);
// console.log("Area of the circle is:", area);

// WAP PRO TO CONVERT DOLLER INTO RUPPES

// let dollars=10 , rupees , rate=84;

// rupees=dollars*rate

// console.log("Amount of Dollars :" , dollars)
// console.log("Currenr Rate of Dollars :" , rate)
// console.log(dollars + "$ =" , "₹" + rate)

// WAP PRO TO CONVERT FEET INTO INCHES

// let feet = 5 , inches;

// inches=feet*12;

// console.log("Feet :" ,feet)
// console.log(feet + " feet =", inches + " inches");

// WAP PRO TO CONVERT FEET INTO METERS

// let feet = 5 , meters ;

// meters=feet*0.3048;

// console.log("Feet :" ,feet)
// console.log(feet + " feet =", meters + " meters");

// WAP PRO TO CONVERT CELSIUS INTO FAHRENHEIT

// let celsius = 40 , fahrenheit;

// fahrenheit = (celsius * 9/5) + 32;

// console.log(celsius + "°C =",  + fahrenheit ,"F");

// CALCULATE a**2-b**2=a(a-b)(a+b)

// let a=10, b=5 ,left ,right,ans;

// left = (a-b) * (a+b);
// right = a**2 - b**2;
// ans = right == left;

// console.log("Right side is :" ,right)
// console.log("Left side is :" , left)
// console.log("Its prove that R.H.S == L.H.S :" , ans)

// CALCULATE a-b**2=a**2-2*a*b+b**2;


//  let a=10, b=5 ,left , right , ans;

//  left = (a-b)**2;

//  right= a**2 - (2*a*b) + b**2;

//  ans = right == left;

//  console.log("Right side is :" ,right)
//  console.log("Left side is :" , left)
//  console.log("Its prove that R.H.S == L.H.S :" , ans)

// CALCULATE (a + b + c)**2 = a**2 + b**2 + c**2 + (2*a*b) + (2*a*c) + (2*b*c);

//  let a=10, b=5 , c=2 , left , right , ans;

//  left = (a + b + c)**2;

//  right= a**2 + b**2 + c**2 + (2*a*b) + (2*a*c) + (2*b*c);

//  ans = right == left;

//  console.log("Right side is :" ,right)
//  console.log("Left side is :" , left)
//  console.log("Its prove that R.H.S == L.H.S :" , ans)


// CALCULATE (a - b - c)**2 = a**2 + b**2 + c**2 - (2*a*b) - (2*a*c) + (2*b*c);

//  let a=10, b=5 , c=2 , left , right , ans;

//  left = (a + b + c)**2;

//  right= a**2 + b**2 + c**2 + (2*a*b) + (2*a*c) + (2*b*c);

//  ans = right == left;

//  console.log("Right side is :" ,right)
//  console.log("Left side is :" , left)
//  console.log("Its prove that R.H.S == L.H.S :" , ans)

// CALCULATE (a - b)**3 = a**3 - (3*a**2*b) + (3*a*b**2) - b**3;

//  let a=10, b=5 ,left , right , ans;

//  left = (a - b)**3;

//  right= a**3 - (3*a**2*b) + (3*a*b**2) - b**3;

//  ans = right == left;

//  console.log("Right side is :" ,right)
//  console.log("Left side is :" , left)
//  console.log("Its prove that R.H.S == L.H.S :" , ans)