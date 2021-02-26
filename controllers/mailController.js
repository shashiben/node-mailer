import expressAsyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
const sendMail = expressAsyncHandler(async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  const from_mail = req.body.from;
  const subject = `From:${from_mail} and subject is:` + req.body.subject || "";
  const text = req.body.message || "";

  const mail = {
    from: from_mail,
    to: process.env.TO_MAIL,
    subject: subject,
    text: text,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong.");
    } else {
      res.status(200).send("Email sent successfully!!");
    }
  });
});
export { sendMail };
