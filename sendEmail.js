var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Hotmail',
  auth: {
    user: 'othman-jabes@hotmail.com',
    pass: 'YOUR_PASSWORD'
  }
});

var mailOptions = {
  from: 'othman-jabes@hotmail.com',
  to: 'k11111t12@gmail.com',
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