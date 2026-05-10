document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const dob = document.getElementById("yourdob").value;
    const curdate = document.getElementById("currdate").value;

    const Age = Number(dob.split("-")[0]) - Number(curdate.split("-")[0]);

    document.getElementById("yourdob").value = "";
    document.getElementById("currdate").value = "";

    document.getElementById("MyAge").innerText = Age;
})