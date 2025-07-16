// object ---> object is instance of class

// let person = {
//     name : "jagdish puthar",
//     age : 16,
//     address : "Simada ,surat",
//     state : "Gujrat",
//     country : "india",
//     mobile : "21544842644",
    
// }
// console.log(person);

// property modify 

// 1. .(dot oprater)
// person.age = 20;
// person.email = "jagu111gemail.com";
// console.log(person);

// 2. ["key"](key methods)

// console.log(person["age"] = 22);


// Object Method

// console.log(person.hasOwnProperty("state"));
// console.log(Object.keys(person));
// console.log(Object.values(person));

// function in object

// let person = {
//     name : "jagdish puthar",
//     age : 16,
//     address : "Simada ,surat",
//     state : "Gujrat",
//     country : "india",
//     mobile : "21544842644",
//     objfunction : (a,b)=>{
//         return a * b
//     }
    
// }
// console.log(person.objfunction(5,2));


// array in object and object in object

// let person = {
//     name : "jagdish puthar",
//     age : 16,
//     mobile : "21544842644", 
//     grde : ['a','b','c','d'], 
//     address : {
//         line1 : 'Royal Arcade',
//         line2 : 'JakatNaka',
//         city : 'Surat',
//         State : 'Gujrat',
//     }
// }
// console.log(person);
// console.log(person["grde"][2]);
// console.log(person["address"]["line1"]);
//  console.log(person.grde[2]);
// console.log(person.address.line1);

// for in ----> (object,array)
// for of ----> (array)

// for (let i in person){     // i is variable represent the key of object
//     console.log(`${i}  ---> ${person[i]}`); 
// }

// for (let data of person["grde"]) {
//     console.log(data);
// }

// object in arrray

let person = [
    {
        name: "Jagdish Puthar",
        age: 16,
        mobile: "21544842644",
        grade: ['A', 'B', 'C'],
        address: {
            line1: "Royal Arcade",
            line2: "JakatNaka",
            city: "Surat",
            state: "Gujarat"
        }
    },
    {
        name: "Mehul Patel",
        age: 18,
        mobile: "9876543210",
        grade: ['B', 'C', 'D'],
        address: {
            line1: "Silver Residency",
            line2: "Varachha",
            city: "Surat",
            state: "Gujarat"
        }
    },
    {
        name: "Snehil Shah",
        age: 17,
        mobile: "9123456789",
        grade: ['A', 'A+', 'B'],
        address: {
            line1: "Green Homes",
            line2: "Adajan",
            city: "Surat",
            state: "Gujarat"
        }
    }
];
// console.log(person[0]["grade"][2]["address"]);

// person.forEach((ele,i)=>{
//     console.log(ele["name"]);   
// })




let data = [
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse"
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost"
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale"
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan"
  },
  {
    quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart"
  },
  {
    quote: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth"
  },
  {
    quote: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone"
  },
  {
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse"
  },
  {
    quote: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "We become what we think about.",
    author: "Earl Nightingale"
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    author: "Mark Twain"
  },
  {
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll"
  },
  {
    quote: "The most common way people give up their power is by thinking they don’t have any.",
    author: "Alice Walker"
  }
];

let index = 0;
let prev = () =>{
    if(index === 0){
        index = data.length - 1
    }else{
        index--;
    }
    display()
}

let next = () =>{
    if(index === data.length - 1){
        index = 0
    }else{
        index++;
    }
    display()
}

let display = () => {
  document.getElementById("quote").innerHTML = data[index].quote;
  document.getElementById("author").innerHTML = data[index].author;
}

display()