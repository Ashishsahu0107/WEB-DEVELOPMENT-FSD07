document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const name = document.getElementById("fullname").value; 
    const email = document.getElementById("email").value; 
    const password = document.getElementById("password").value; 
    

    const formData = {
        Fullname : name,
        Email: email,
        Password: password
    };

    console.log(formData);

    document.getElementById("fullname").value = ""; 
    document.getElementById("email").value = ""; 
    document.getElementById("password").value = ""; 
    

});


document.querySelector("form").addEventListener("reset", (event) => {
    event.preventDefault();

    confirm("Are you sure you want to submit the form?a") && window.location.reload();
});


document.addEventListener("keydown", (event) => {
    let esp = event.key;
    esp === "Escape" && window.location.reload();
})