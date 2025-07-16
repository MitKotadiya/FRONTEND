// JSON ---> JSON STAND FOR JAVASCRIPT OBJECT NOTTION ( SAME AS JS OBJECT )


// NORMAL OR JS OBJECT

let person1 = {
    name : "Jagdish puthar",
    age : 20,
    address : "Simada ,surat",
    state : "Gujrat",
    country : "india",
    mobile : "21544842644"
}

// JSON OBJECT

let person2 =` {
    "name ": "Hari Puter",
    "age" : 16,
    "address" : "Sarthana ,surat",
    "state ": "Gujrat",
    "country" : "india",
    "mobile" : "85846257632"
}`

// JS OBJECT TO JSON

let convert = JSON.stringify(person1)
console.log(convert);

// JSON TO JS OBJECT

let con = JSON.parse(person2)
console.log(con);

// STORE DATA , GET DATA AND APPLY ON DOCUMENT

let person3 = {
    name : "Sandip Labichane",
    age : 23,
    address : "Kamrej ,surat",
    state : "Gujrat",
    country : "india",
    mobile : "0303038875"
}

localStorage.setItem("person3", JSON.stringify(person3));
sessionStorage.setItem("person3" , JSON.stringify(person3));

let data = localStorage.getItem("person3");
data = JSON.parse(data)
console.log(data);

let p = document.createElement("p");
p.innerHTML = `${data.name } , ${data.age}`

document.querySelector('body').append(p)



 


