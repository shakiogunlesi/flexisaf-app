var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shakkyogunlesi@gmail.com',
    pass: 'Logan100#'
  }
});

var mailOptions = {
  from: 'shakkyogunlesi@gmail.com',
  to: 'shaki_ogunlesi@outlook.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});