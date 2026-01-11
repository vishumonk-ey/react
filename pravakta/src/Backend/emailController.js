const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: process.config.smtp_Host,
  port: process.config.smtp_port,
  secure: false,
  auth: {
    user: process.config.sender,
    pass: process.config.smtp_HostPassword,
  },
});
const sendEmail = async (req, res) => {
  try {
    console.log("this is my req : \n", req);
    const { name, email, contactNo, note } = req.body;
    const emailBody = `
           User Details -: 
           
           Name : ${name} ,
           Email : ${email} ,
           Contact Number : ${contactNo} ,
           Note : ${note}
      `;
    const mailToClient = {
      from: process.config.sender,
      to: "mansi@pravaktalegal.com",
      subject: `${name} booked a consultation !`,
      text: emailBody,
    };
    const info = await transporter.sendMail(mailToClient);
    console.log("This is my info object : ", info);
  } catch (error) {
    console.log("This is my error : ", error);
  }
};
module.exports = { sendEmail };
// why exported?
