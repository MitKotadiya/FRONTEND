document.querySelector("form").addEventListener("submit" , (event) => {
    event.preventDefault();
    clearerror()

    let str = document.getElementById("inputString").value
    let strchar = document.getElementById("inputChar").value
    str = str.toLowerCase(); 
    strchar = strchar.toLowerCase();

    if (str === "" || /^\d+$/.test(str)) {
        document.getElementById("errorshowstr").innerHTML = "Please enter a string";
    }else{
        let len = str.replace(/\s/g, "").length
        document.getElementById("length").innerHTML = `String Length : ${len}`

        let count = 0;
        let ch = "aeiou"
        for(let i = 0 ; i < str.length ; i++){
            if(ch.includes(str[i])){
               count++ 
            }
        }
        document.getElementById("vowelcount").innerHTML = `Vowel in your string ${count}`
    }
    if(strchar === "" || /^\d+$/.test(strchar)){
        document.getElementById("errorshowchar").innerHTML = "Plase Enter Character (A-Z)"
    }else{
        let count = 0;
        for(let i = 0 ; i < str.length ; i++){
            if(strchar == str[i])
            count++
        }
        document.getElementById("charcount").innerHTML = `${strchar} in this string ${count} Times`

    }
})
    let clear = document.getElementsByClassName("error")
    let clearerror = () => {
        document.getElementById("errorshowstr").innerHTML = ""
        document.getElementById("errorshowchar").innerHTML = ""
    }

    document.getElementById("strgenerate").addEventListener("submit" , (event) =>{
        
        event.preventDefault();
        removeerror();

        let num = document.getElementById("num").value
        let alphabate = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(num === ""){
            document.getElementById("generateer").innerHTML = "Plase enter Number"
        }  
        else if(num < 0){
            document.getElementById("generateer").innerHTML = "Plase enter Positive Number"
        }
        else{
            let result = "";
            for( let i = 0 ; i < num ; i++){
                let random = Math.floor(Math.random() * alphabate.length)
            result = result + alphabate[random]            
            }
            
            document.getElementById("strgen").innerText = "Generated String: " + result;
         }
    })

    let removeerr = document.querySelector(".removeerr") 
    let removeerror = () => {
        document.getElementById("generateer").innerHTML = ""
        document.getElementById("generateer").innerHTML = ""
    }