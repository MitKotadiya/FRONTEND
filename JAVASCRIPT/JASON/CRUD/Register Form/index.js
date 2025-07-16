let form = document.querySelector("form");
let editindex = null;

 form.addEventListener("submit", (event) => {
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

    // if (fullname === "") {
    //     document.getElementById("err-fullname").innerHTML = "Name  must be filled";
    //     document.getElementById("fullname").style.border = "2px solid red";
    //     return;
    // } 
    // if(email === ""){
    //     document.getElementById("err-email").innerHTML = "Email must be filled";
    //     document.getElementById("email").style.border = "2px solid red";
    //     return;
    // }else{
    //     let emailreg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    //     if(!emailreg.test(email)){
    //         document.getElementById("err-email").innerHTML = "Please enter a valid email address."
    //         document.getElementById("email").style.border = "2px solid red";
    //         return;
    //     }
    // }
    // if (phone === "") {
    //     document.getElementById("err-phone").innerHTML = "Phone Number must be filled";
    //     document.getElementById("phone").style.border = "2px solid red";
    //     return;
    // }else{
    //     let phonereg = /^\d{10}$/
    //     if(!phonereg.test(phone)){
    //         document.getElementById("err-phone").innerText = "Phone must be 10 digits only";
    //         document.getElementById("phone").style.border = "2px solid red";
    //         return;
    //     }
    // }
    // if (gender === "") {
    //     document.getElementById("err-gender").innerText = "Plase select Gender";
    //     document.getElementById("gender").style.border = "2px solid red";
    //     return;
    // }
    // if(dob === ""){
    //     document.getElementById("err-dob").innerText = "Plase Enter Date of birth";
    //     document.getElementById("dob").style.border = "2px solid red";
    //     return;
    // }else{
    //     let dobreg = /^(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[0-2])[-\/](19|20)\d{2}$/
    //     if(!dobreg.test(dob)){
    //         document.getElementById("err-dob").innerText = "DOB must be in dd-mm-yyyy format and valid";
    //         document.getElementById("dob").style.border = "2px solid red"; 
    //         return;  
    //     }
    // }
    // if(pass == ""){
    //     document.getElementById("err-pass").innerText = "Password must be filled";
    //     document.getElementById("pass").style.border = "2px solid red";
    //     return;
    // }else{
    //     let passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,}$/
    //     if(!passreg.test(pass)){
    //         document.getElementById("err-pass").innerText = "Password must be 8+ chars with uppercase, lowercase, number, special character & no spaces";;
    //         document.getElementById("pass").style.border = "2px solid red";
    //         return;
    //     }
    // }
    // if (cpass === "") {
    //     document.getElementById("err-cpass").innerText = "Please confirm your password";
    //     document.getElementById("cpass").style.border = "2px solid red";
    //     return;
    // } else{    
    //     if (pass !== cpass) {
    //        document.getElementById("err-cpass").innerText = "Passwords do not match";
    //        document.getElementById("cpass").style.border = "2px solid red";
    //        return;
    //    }
    // }
    // if(address === ""){
    //     document.getElementById("err-address").innerText = "Address must be filled";
    //     document.getElementById("address").style.border = "2px solid red"; 
    //     return;
    // }

        let Users = JSON.parse(localStorage.getItem("key")) || [];

        let userobj = {
            fullname,
            email,
            phone,
            gender,
            dob,
            pass,
            address
        };

            Users.push(userobj);
            localStorage.setItem("key", JSON.stringify(Users)); 
            form.reset(); 
        display()

});

let clearerr = ()=> {
    let fields = ["fullname", "email", "phone", "gender", "dob" , "pass" , "cpass" , "address"];
    fields.forEach(field => {
        document.getElementById("err-" + field).innerHTML = "";
        document.getElementById(field).style.border = "";
    });
}

let display = () => {
    let show = document.getElementById("tbody");
    show.innerHTML = "";

    let Users = JSON.parse(localStorage.getItem("key")) || [];

    Users.forEach((user, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${user.fullname}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.gender}</td>
            <td>${user.dob}</td>
            <td>${user.address}</td>
            <td><button onClick = "edit(${index})">Edit</button></td>
            <td><button onClick = "del(${index})">Delete</button></td>
        </tr>`;
        show.innerHTML += row;
    });
};


let del = (id) => {
    let Users = JSON.parse(localStorage.getItem("key")) || [];
    Users.splice(id, 1); 
    localStorage.setItem("key", JSON.stringify(Users)); 
    display(); 
};


let edit = (id) => {
    
    let Users = JSON.parse(localStorage.getItem("key")) || [];
    editvalue = Users[id];

    document.getElementById("ed-form").style.display = "block";
    document.getElementById("og-form").style.display = "none";

    let edfullname = document.getElementById("edfullname");
    let edemail = document.getElementById("edemail");
    let edphone = document.getElementById("edphone");
    let edgender = document.getElementById("edgender");
    let eddob = document.getElementById("eddob");
    let edpass = document.getElementById("edpass");
    let edcpass = document.getElementById("edcpass");
    let edaddress = document.getElementById("edaddress");
    
    edfullname.value = editvalue.fullname;
    edemail.value = editvalue.email;
    edphone.value = editvalue.phone;
    edgender.value = editvalue.gender;
    eddob.value = editvalue.dob;
    edpass.value = editvalue.pass;
    edcpass.value = editvalue.pass; 
    edaddress.value = editvalue.address;
    
    editindex = id;
    }


let editform = document.getElementById("ed-form");

editform.addEventListener("submit", (event) => {
    event.preventDefault();

    let Users = JSON.parse(localStorage.getItem("key")) || [];

    let edfullname = document.getElementById("edfullname").value;
    let edemail = document.getElementById("edemail").value;
    let edphone = document.getElementById("edphone").value;
    let edgender = document.getElementById("edgender").value;
    let eddob = document.getElementById("eddob").value;
    let edpass = document.getElementById("edpass").value;
    let edcpass = document.getElementById("edcpass").value;
    let edaddress = document.getElementById("edaddress").value;

    Users[editindex] = {
        fullname: edfullname,
        email: edemail,
        phone: edphone,
        gender: edgender,
        dob: eddob,
        pass: edpass,
        address: edaddress
    };

    localStorage.setItem("key", JSON.stringify(Users));

    display();
    


    document.getElementById("ed-form").style.display = "none";
    document.getElementById("og-form").style.display = "block";

    editindex = null;
});

