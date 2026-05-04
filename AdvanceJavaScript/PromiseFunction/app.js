function getData(value) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (value === 3) {
                reject("Query not found")
            }
            else {
                console.log("Data Sent", value);
                resolve("Query solve")
            }
        }, 2000)
    })
}

// const myPromise = getData(2);
// console.log(myPromise);


getData(1)
    .then(() => getData(2))
    .then(() => getData(3))
    .then(() => getData(4))
    .catch((rej) => console.log(rej))
