require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint to send email
app.post('/send-email', (req, res) => {
  const { name, email, contact, propertyInfo } = req.body;

  // Create a transporter object using your email service
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable for email
      pass: process.env.EMAIL_PASS, // Use environment variable for app password
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: 'shadmanrohan@gmail.com', // Your email address to receive the form data
    subject: 'Testing Node Server',
    text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nProperty Info: ${propertyInfo}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
