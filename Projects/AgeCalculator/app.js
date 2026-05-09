document.querySelector("form").addEventListener("submit", (event) => {
    event.defaultPrevented();

    const dob = document.getElementById("yourdob").value;
    const curdate = document.getElementById("currdate").value;

    const Age = Number(dob.split("-")[0]) - Number(currdate.split("-")[0]);

    document.document.getElementById("yourdob").value = "";
    document.document.getElementById("curdate").value = "";

    document.getElementById("MyAge").innerText = Age;
})