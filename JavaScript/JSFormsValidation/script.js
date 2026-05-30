function submit() {
    let fullname = document.getElementById("fullname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    


    document.querySelectorAll(".error").forEach((element) => {
        element.innerText = "";
    })


    if (!/^[A-Za-z ]+$/.test(fullname)) {
        document.getElementById("nameError").innerText = "Invalid Full Name";
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Invalid Phone";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email";
    }
    
    if (!/^[A-Za-z ]+$/.test(password)) {
        document.getElementById("nameError").innerText = "Invalid password";
    }



    // console.log(`Full Name ${fullname} Phone Number ${phone} Email ${email} Password ${password}`);


    document.getElementById("DIV").innerText = `Full Name ${fullname} Phone Number ${phone} Email ${email} Password ${password}`



    console.log(fullname);
    console.log(phone);
    console.log(email);
    console.log(password);

}