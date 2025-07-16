$("form").on("submit", function (e) {
    e.preventDefault();

    let fullname = $("#fullname");
    let email = $("#email");
    let phone = $("#phone");
    let gender = $("#gender");
    let dob = $("#dob");
    let pass = $("#pass");
    let cpass = $("#cpass");
    let address = $("#address");

      clearerr();

    // Fullname
    if (fullname.val() === "") {
        $("#err-fullname").text("Name must be filled");
        fullname.css("border", "2px solid red");
    } else {
        let fnamereg = /^(?=.*[A-Za-z])(?=.*[^A-Za-z0-9])\S{8}$/;
        if (!fnamereg.test(fullname.val())) {
            $("#err-fullname").text("Must be exactly 8 characters, include 1 letter & 1 special character, no spaces");
            fullname.css("border", "2px solid red");

        } else {
            $("#err-fullname").text("");
            fullname.css("border", "");
        }
    }

    // Email
    if (email.val() === "") {
        $("#err-email").text("Email must be filled");
        email.css("border", "2px solid red");
    } else {
        let emailreg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!emailreg.test(email.val())) {
            $("#err-email").text("Please enter a valid email address");
            email.css("border", "2px solid red");

        } else {
            $("#err-email").text("");
            email.css("border", "");
        }
    }

    // Phone
    if (phone.val() === "") {
        $("#err-phone").text("Phone Number must be filled");
        phone.css("border", "2px solid red");
    } else {
        let phonereg = /^\d{10}$/;
        if (!phonereg.test(phone.val())) {
            $("#err-phone").text("Phone must be 10 digits only");
            phone.css("border", "2px solid red");

        } else {
            $("#err-phone").text("");
            phone.css("border", "");
        }
    }

    // Gender
    if (gender.val() === "") {
        $("#err-gender").text("Please select Gender");
        gender.css("border", "2px solid red");
    } else {
        $("#err-gender").text("");
        gender.css("border", "");
    }

    // DOB
    if (dob.val() === "") {
        $("#err-dob").text("Please enter Date of Birth");
        dob.css("border", "2px solid red");
    } else {
        let dobreg = /^(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[0-2])[-\/](19|20)\d{2}$/;
        if (!dobreg.test(dob.val())) {
            $("#err-dob").text("DOB must be in dd-mm-yyyy format");
            dob.css("border", "2px solid red");

        } else {
            $("#err-dob").text("");
            dob.css("border", "");
        }
    }

    // Password
    if (pass.val() === "") {
        $("#err-pass").text("Password must be filled");
        pass.css("border", "2px solid red");
    } else {
        let passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,}$/;
        if (!passreg.test(pass.val())) {
            $("#err-pass").text("Password must include UPPER, lower, number, symbol, no space");
            pass.css("border", "2px solid red");

        } else {
            $("#err-pass").text("");
            pass.css("border", "");
        }
    }

    // Confirm Password
    if (cpass.val() === "") {
        $("#err-cpass").text("Please confirm your password");
        cpass.css("border", "2px solid red");
    } else {
        if (cpass.val() !== pass.val()) {
            $("#err-cpass").text("Passwords do not match");
            cpass.css("border", "2px solid red");

        } else {
            $("#err-cpass").text("");
            cpass.css("border", "");
        }
    }

    if (address.val() === "") {
        $("#err-address").text("Address must be filled");
        address.css("border", "2px solid red");
    } else {
        $("#err-address").text("");
        address.css("border", "");
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});
let clearerr = () => {
    let fields = ["fullname", "email", "phone", "gender", "dob", "pass", "cpass", "address"];
    fields.forEach(field => {
        $("#err-" + field).text("");
        $("#" + field).css("border", "");
    });
};
