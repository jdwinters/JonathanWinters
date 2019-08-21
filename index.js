const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require('nodemailer');
const creds = require('./config/config');

const passport = require("passport");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder for 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}else{
  const path = require("path");
  app.use('./client/public', express.static(path.join(__dirname, 'public')));
}

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  console.log(req.body);
  const output =
  `<p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Name: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
    var transport = {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: creds.USER,
        pass: creds.PASS
      }
    }
    
    var transporter = nodemailer.createTransport(transport);
    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take messages');
      }
    });
    var mailOptions = {
      from: req.body.name,
      to: 'wintersfile@gmail.com',  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: "Brace yourself Winters is coming",
      html: output
    }
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);