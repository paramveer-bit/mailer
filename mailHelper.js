import nodemailer from "nodemailer";
import 'dotenv/config'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function mail(to, subject, text, html,from) {
    console.log("starting")
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: from, // sender address
    to: to,
    subject: subject, 
    text: text, 
    html: html,
  });

  console.log("Message sent: %s", info.messageId);
  return info.messageId
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}


export default mail
