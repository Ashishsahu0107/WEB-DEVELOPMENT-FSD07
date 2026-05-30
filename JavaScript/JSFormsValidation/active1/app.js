function handleForm() {
    let name = document.getElementById("name").value;
    let agree = document.getElementById("agree").checked;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let city = document.getElementById("city").value;
    let file = document.getElementById("fileInput").files[0];

    console.log("Name:", name);
    console.log("Agree:", agree);
    console.log("Gender:", gender);
    console.log("City:", city);


    console.log(file.name);

}




function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let namePattern =  !/^[A-Za-z]+$/;
    let emailPattern =  !/^[A-Za-z\d]+@gmail.com$/;
    let phonePattern =  !/^[6-9]\d{9}$/;

    console.log("Name Valid:", namePattern.test(name));
    console.log("Email Valid:", emailPattern.test(email));
    console.log("Phone Valid:", phonePattern.test(phone));
}

