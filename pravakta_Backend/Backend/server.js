import express from "express";
import { sendEmail } from "./emailController.js";
import cors from "cors";
// import { methods } from './emailController'
import "dotenv/config";
const app = express(); 
app.use(cors()); 
app.use(express.json()); 

// app.use((req, res, next) => {
//   console.log("backend!", req.method, req.path);
//   next(); // Important: call next() to pass control to the next middleware/route
// });

const port = process.env.PORT;

app.post("/api/sendEmail", sendEmail);

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
