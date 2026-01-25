import { Resend } from "resend";
import "dotenv/config";
const resend = new Resend(process.env.RESEND_KEY);

const sendUserEmail = async (userEmail) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "bookings@pravaktalegal.com",
      to: userEmail,
      subject: "Consultation has been booked !",
      html: "<strong>Hey , your consultation is successfully booked . </strong>",
      replyTo : "mansi@pravaktalegal.com"
    });
    return data;
  } catch (error) {
    console.log("Failed to send email", error);
  }
};

const sendClientEmail = async (userName , userEmail , contactNo , Query) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "vkant2005",
      subject: `${userName} has booked a consultation!`,
      html: `
        <p><strong>Username</strong> : ${userName}</p>
        <p><strong>User Email</strong>: ${userEmail}</p>
        <p><strong>Contact Number</strong>: ${contactNo}</p>
        <p><strong>Query</strong>: ${Query}</p>
      
      `,

    });
    return data
  } catch (error) {
    console.log("Failed to send message to the client !", error);
  }
};
// export default sendEmail;
export {sendUserEmail , sendClientEmail}
