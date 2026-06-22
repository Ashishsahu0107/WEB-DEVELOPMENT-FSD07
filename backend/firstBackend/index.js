import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import AuthRouter from './src/routers/auth.route.js';
import PublicRouter from './src/routers/public.route.js';

const app = express(); // object

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

// Default APT
app.get("/", (req, res) => {
    console.log("Server Started");
    res.json({ message: "Welcome to my first backend Projects" });
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server Started on port : ", port);
})