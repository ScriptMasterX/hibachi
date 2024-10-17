require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail", // You can use other services like Yahoo, Outlook, etc.
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  // Set up email data
  let mailOptions = {
    from: email,
    to: "thefakedazz@gmail.com", // The email you want to receive messages
    subject: `Contact form submission from ${name}`,
    text: `You received a new message from ${name} (${email}): \n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
    res.send({ success: true, message: "Email sent successfully!" });
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
