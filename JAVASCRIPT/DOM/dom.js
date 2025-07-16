// DOM --> DOCUMENT OBJECT MODAL

// EVENT METHOD

// 1 . document.getElementById("id name")
// 2 . document.getElementsByClass("id name")
// 3 . document.getElementsByTag("id name")
// 4 . querySelector \\ quarrySelectorAll

// let select = document.getElementById("abc")
// select.style.color = "orange"
// select.style.fontSize = "100px"
// select.setAttribute('class' , "xyz") 
// console.log(select);

// let classSelect = document.getElementsByClassName("border")
// classSelect[0].style.border = "2px solid orange";


// let tagSelect = document.getElementsByTagName("h2")
// tagSelect[1].style.border = "20px solid black";

// let qSelector = document.querySelector("#mit");
// qSelector.style.fontWeight = "900";
// qSelector.style.fontSize = "50px";

// let qSelectorall = document.querySelectorAll(".meet")
// qSelectorall[0].style.fontWeight = "900"
// qSelectorall[0].style.fontSize = "150px"


let mousemove = () => {
    console.log("mousemove event called");
    
}

let btnselect = document.getElementById("btn")
btnselect.style.padding = "10px 20px"
btnselect.style.color = "white"
btnselect.style.backgroundColor = "black"
btnselect.style.fontWeight = "700"
btnselect.style.borderRadius = "5px"

btnselect.addEventListener("mouseenter", () => {
btnselect.style.backgroundColor = "white";
btnselect.style.color = "black";
btnselect.style.transition = "0.5s";
});

btnselect.addEventListener("mouseleave", () => {
btnselect.style.backgroundColor = "black";
btnselect.style.color = "white";
});

btnselect.addEventListener("click" , () => {
    console.log("btn click");
    
})

