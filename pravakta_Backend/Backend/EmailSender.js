import { Resend } from "resend";
import "dotenv/config";
const resend = new Resend(process.env.RESEND_KEY);

const sendUserEmail = async (userEmail) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Pravakta Legal <consultations@pravaktalegal.com>",
      to: userEmail,
      subject: "Consultation Successfully Booked",
      html: `
    <p><strong>Your consultation has been successfully booked.</strong></p>

    <p>We will shortly contact you regarding the next steps.</p>

    <p>
      Thank you for placing your trust in <strong>Pravakta Legal Associates</strong>.
    </p>

    <br />

    <p>
      Regards,<br />
      <strong>Adv. Mansi Jain</strong><br />
      Pravakta Legal Associates
    </p>
      `,
      replyTo: "mansi@pravaktalegal.com",
    });
    return data;
  } catch (error) {
    console.log("Failed to send email", error);
  }
};

const sendClientEmail = async (userName, userEmail, contactNo, Query) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Pravakta Legal <consultations@pravaktalegal.com>",
      to: process.env.OWNER_EMAIL,
      subject: `New Consultion Booking - ${userName} `,
      html: `
        <p><strong>Username</strong> : ${userName}</p>
        <p><strong>User Email</strong>: ${userEmail}</p>
        <p><strong>Contact Number</strong>: ${contactNo}</p>
        <p><strong>Query</strong>: ${Query}</p>
      `,
    });
    return data;
  } catch (error) {
    console.log("Failed to send message to the client !", error);
  }
};
// export default sendEmail;
export { sendUserEmail, sendClientEmail };
