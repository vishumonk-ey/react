// const express = require('express')
import express from "express";
import { sendEmail } from "./emailController.js";
import cors from "cors";
// import { methods } from './emailController'
const app = express(); //what is this app ? creates a web application server
app.use(cors()); // why is it being used and why is it written first in middlewares
app.use(express.json()); // Parse JSON request bodies - needed for POST requests
app.use((req, res, next) => {
  console.log("backend hit!", req.method, req.path);
  next(); // Important: call next() to pass control to the next middleware/route
});
const port = 5173;

app.post("/api/sendEmail", (req, res)=>{
    console.log("api hit!");

    res.send("Something");
});
app.get(
  "/api/health",
  (req, res) => {
    console.log("Server is running");
    res.send("<p>HIII</p>");
  }
  //   res.setHeader("Content-Type", "application/json");
  //   res.status(200).json({
  //     status: "OK",
  //     message: "Server is running",
  //   })
);
app.listen(port, () => {
  console.log("server is running live on : ", port);
});
