// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
import { config } from "./config.js";
// import { config } from '../assets/conifg.js'
const transporter = nodemailer.createTransport({
  host: config.smtp_Host,
  port: config.smtp_port,
  secure: false,
  auth: {
    user: config.senderEmail,
    pass: config.smtp_HostPassword,
  },
});

// byvq zbrl swkm swbx
export const sendEmail = async (req, res) => {
  try {
    console.log("this is my req : \n", req);
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
      text: `${name || "Vishal"} booked a consultation !`,
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
