// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
import { config } from "./config.js";
import "dotenv/config"
// import { config } from '../assets/conifg.js'
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// byvq zbrl swkm swbx
export const sendEmail = async (req, res) => {
  try {
    console.log("Post Hit!");
    console.log(process.env.SMTP_HOST);
    console.log(process.env.SMTP_PASSWORD);
    console.log(process.env.SENDER_EMAIL);
    // console.log(process.env.SENDER_EMAIL);
    
    // console.log("this is my req : \n", req);
    await transporter.verify()
    console.log("smtp ready");
    
    // const { name, email, contactNo, query } = req.body;
    // const emailBody = `
    //        User Details -:

    //        Name : ${name} ,
    //        Email : ${email} ,
    //        Contact Number : ${contactNo} ,
    //        Query : ${query}
    //   `;
    const mailToClient = {
      from: config.senderEmail,
      //   to: "mansi@pravaktalegal.com",
      to: "loxilo3400@atinjo.com",
      subject: `hii`,
      text: ` You have booked a consultation !`,
    };
    const info = await transporter.sendMail(mailToClient);
    console.log("This is my info object : ", info);

    // Send success response to client
    res.status(200).json({
      success: true,
      message: "Email sent successfully",
      info: info.messageId,
    });
  } catch (error) {
    console.log("This is my error : ", error);

    // Send error response to client
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
};
