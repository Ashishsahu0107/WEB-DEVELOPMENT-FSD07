let fd = [
    ["Ashish sahu", "01-07-2005", 9302752556, "Student"],
    ["Prasoon sahu", "01-07-2005", 9302752556, "Student"],
    ["Anit sahu", "01-07-2005", 9302752556, "Student"],
    ["Shubham sahu", "01-07-2005", 9302752556, "Student"],
]

// fd.forEach((ele) => {
//     console.log(ele);

// })






let fData = [
    {
        fname: "ashish",
        DOB: "01-07-2005",
        mobileNo: 932216556,
        role: "Student",
        city: "Satna",
    },
    {
        fname: "anit",
        DOB: "01-07-2005",
        mobileNo: 9308798656,
        role: "Student",
        city: "Satna",
    },
    {
        fname: "prasoon",
        DOB: "01-07-2005",
        mobileNo: 93027526,
        role: "Student",
        city: "Satna",
    },
    {
        fname: "shubham",
        DOB: "24-07-2005",
        mobileNo: 9302564556,
        role: "Student",
        city: "Bhopal",
    },
];





// fData.forEach((element) => {
//     console.log( `${element["fname"]}` ); 
// })

// // Bracket Notation
console.log(fData[1]["fname"]);


// Dot NOtation -> work only json 
console.log(fData[1].fname);


