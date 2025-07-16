let text = document.querySelector("#display")
let takebtn = document.querySelectorAll("button")
let emtystr = ""

let storenum = (value) =>{
    emtystr += value
    text.value = emtystr  
}
let result = (value) =>{
    let expression = emtystr.replace(/%/g, "/100");
    let fresult = eval(expression);
    text.value = fresult;
    emtystr = fresult.toString();   
}
let ac = (value) =>{
    emtystr = ""
    text.value = emtystr  

}
let back = (value) =>{
    emtystr = emtystr.slice(0,emtystr.length-1)
    text.value = emtystr  

}
takebtn.forEach((btn)=>{
    btn.addEventListener('click' , ()=>{
        let value = btn.textContent
    
if(value == "="){
   result()
}else if(value == "C"){
    ac()
}else if(value == "←"){
    back()
}else{
    storenum(value)
}
})
})

