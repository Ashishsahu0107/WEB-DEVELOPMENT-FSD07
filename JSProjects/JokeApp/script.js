async function GetNewJoke() {
    // const API_URL = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous";

    const url = "https://official-joke-api.appspot.com/types";

    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("setup").innerText = data.message;
    // document.getElementById("delivery").innerHTML = data.punchline ;


    // document.getElementById("setup").innerText = data.joke || data.setup;
    // document.getElementById("delivery").innerText = data.punchline || "";


    // if (data.type === "single") {
    //     document.getElementById("setup").innerHTML = data.joke;
    //     document.getElementById("delivery").innerText = "";
    // } else {
    //     document.getElementById("setup").innerHTML = data.setup;
    //     document.getElementById("delivery").innerText = data.delivery;
    // }
}