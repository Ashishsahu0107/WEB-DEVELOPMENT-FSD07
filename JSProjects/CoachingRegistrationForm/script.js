document.getElementById("submitRegistrationform").addEventListener("submit", (event) => {
    event.preventDefault();

    const fn = document.getElementById("fullname").value;
    const gndr = document.querySelectorAll("input=[name='gender']:checked")?.value;



    const timings = [];

    document.querySelectorAll("input[name='timings']:checked").forEach((item) => {
        timings.push(item.value);
    })


    console.log(gndr);
    console.log(timings);
    
})


