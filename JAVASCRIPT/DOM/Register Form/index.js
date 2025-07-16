document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    let address = document.getElementById("address").value;

    clearerr();

    if (fullname === "") {
        document.getElementById("err-fullname").innerHTML = "Name  must be filled";
        document.getElementById("fullname").style.border = "2px solid red";
    } else {
        let fnamereg = /^(?=.*[A-Za-z])(?=.*[^A-Za-z0-9])\S{8}$/;

        if (!fnamereg.test(fullname)) {
            document.getElementById("err-fullname").innerHTML = "Must be exactly 8 characters, include 1 letter & 1 special character, no spaces";
            document.getElementById("fullname").style.border = "2px solid red";
        }
    }
    if(email === ""){
        document.getElementById("err-email").innerHTML = "Email must be filled";
        document.getElementById("email").style.border = "2px solid red";
    }else{
        let emailreg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        if(!emailreg.test(email)){
            document.getElementById("err-email").innerHTML = "Please enter a valid email address."
            document.getElementById("email").style.border = "2px solid red";
        }
    }
    if (phone === "") {
        document.getElementById("err-phone").innerHTML = "Phone Number must be filled";
        document.getElementById("phone").style.border = "2px solid red";
    }else{
        let phonereg = /^\d{10}$/
        if(!phonereg.test(phone)){
            document.getElementById("err-phone").innerText = "Phone must be 10 digits only";
            document.getElementById("phone").style.border = "2px solid red";
        }
    }
    if (gender === "") {
        document.getElementById("err-gender").innerText = "Plase select Gender";
        document.getElementById("gender").style.border = "2px solid red";
    }
    if(dob === ""){
        document.getElementById("err-dob").innerText = "Plase Enter Date of birth";
        document.getElementById("dob").style.border = "2px solid red";
    }else{
        let dobreg = /^(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[0-2])[-\/](19|20)\d{2}$/
        if(!dobreg.test(dob)){
            document.getElementById("err-dob").innerText = "DOB must be in dd-mm-yyyy format and valid";
            document.getElementById("dob").style.border = "2px solid red";   
        }
    }
    if(pass == ""){
        document.getElementById("err-pass").innerText = "Password must be filled";
        document.getElementById("pass").style.border = "2px solid red";
    }else{
        let passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,}$/
        if(!passreg.test(pass)){
            document.getElementById("err-pass").innerText = "Password must be 8+ chars with uppercase, lowercase, number, special character & no spaces";;
            document.getElementById("pass").style.border = "2px solid red";
        }
    }
    if (cpass === "") {
        document.getElementById("err-cpass").innerText = "Please confirm your password";
        document.getElementById("cpass").style.border = "2px solid red";
    } else{    
        if (pass !== cpass) {
           document.getElementById("err-cpass").innerText = "Passwords do not match";
           document.getElementById("cpass").style.border = "2px solid red";
       }
    }
    if(address === ""){
        document.getElementById("err-address").innerText = "Address must be filled";
        document.getElementById("address").style.border = "2px solid red"; 
    }

});

let clearerr = ()=> {
    let fields = ["fullname", "email", "phone", "gender", "dob" , "pass" , "cpass" , "address"];
    fields.forEach(field => {
        document.getElementById("err-" + field).innerHTML = "";
        document.getElementById(field).style.border = "";
    });
}