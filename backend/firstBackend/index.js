import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express(); // object

app.get("/", (req, res) => {
    console.log("Server Started");
    res.json({ message: "Welcome to mu first backend Projects" });
})

app.get("/login", (req, res) => {
    res.json({message: "Login Successful"});
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server Started on port : ",port);
})
3
