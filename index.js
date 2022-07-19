const express = require('express')
const app = express()
const port = 3000
const nodemailer = require('nodemailer');
require('dotenv').config();
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  let mailOptions = {
    from: 'miamsmarthomes@gmail.com',
    to: 'sheiduhalilu@gmail.com,abduljelil32@gmail.com,halilus@borderlesshr.com',
    subject: 'JJNodemailer Project',
    text: 'Hi this is a task by sheidu halilu for testing nodemailer'
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

app.listen(port, () => {
  console.log(`The project is running`)
})