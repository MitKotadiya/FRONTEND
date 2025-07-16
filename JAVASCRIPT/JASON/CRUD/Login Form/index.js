document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let phone = document.getElementById("phone").value;
    let pass = document.getElementById("pass").value;


    clearerr();
    

    if (fullname === "") {
        document.getElementById("err-fullname").innerHTML = "Name  must be filled";
        document.getElementById("fullname").style.border = "2px solid red";
        return;
    } else {
        let fnamereg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,}$/;

        if (!fnamereg.test(fullname)) {
            document.getElementById("err-fullname").innerHTML = "Must be exactly 8 characters, include 1 letter & 1 special character, no spaces";
            document.getElementById("fullname").style.border = "2px solid red";
            return;
        }
    }
   
    if (phone === "") {
        document.getElementById("err-phone").innerHTML = "Phone Number must be filled";
        document.getElementById("phone").style.border = "2px solid red";
        return;
    }else{
        let phonereg = /^\d{10}$/
        if(!phonereg.test(phone)){
            document.getElementById("err-phone").innerText = "Phone must be 10 digits only";
            document.getElementById("phone").style.border = "2px solid red";
            return;
        }
    }
   
    if(pass == ""){
        document.getElementById("err-pass").innerText = "Password must be filled";
        document.getElementById("pass").style.border = "2px solid red";
        return;
    }else{
        let passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,}$/
        if(!passreg.test(pass)){
            document.getElementById("err-pass").innerText = "Password must be 8+ chars with uppercase, lowercase, number, special character & no spaces";;
            document.getElementById("pass").style.border = "2px solid red";
            return;
        }
    }

        let data = localStorage.getItem("userObj");

        if (data) {
            let user = JSON.parse(data);

            if (user.fullname === fullname && user.phone === phone && user.pass === pass) {
                alert("Login Successful!");
            } else {
                alert("Invalid credentials. Please try again.");
            }
        } else {
            alert("No user found. Please register first.");
        }



});

let clearerr = ()=> {
    let fields = ["fullname", "phone", "pass" ];
    fields.forEach(field => {
        document.getElementById("err-" + field).innerHTML = "";
        document.getElementById(field).style.border = "";
    });
}

