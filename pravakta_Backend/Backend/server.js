import express from "express";
import cors from "cors";
// import sendEmail from "./EmailSender.js";
import { sendUserEmail , sendClientEmail } from "./EmailSender.js";
import "dotenv/config";
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.post("/api/sendEmail", async (req, res) => {
  const { userEmail , userName , contactNo , Query } = req.body;
  try {
    // await sendEmail(userEmail);
    // const [result1 , result2] = await Promise.all([sendUserEmail(userEmail) ,sendClientEmail(userName , userEmail , contactNo , Query)] )
    const data = await sendUserEmail(userEmail)
    console.log("data:" ,data);
    
    res.json({message: "Mail send succesfully!"})

  } catch (error) {
    console.log("Failed to send email", error)
 }
  
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
app.listen(PORT, () => {
  console.log("server is running live on : ", PORT);
});
