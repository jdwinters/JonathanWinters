const express = require("express");
const exphbs = require("express-handlebars");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
var creds;
//-------
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
var oauth2Client;
//-------

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Static folder for 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  creds = {
    USER: process.env.USER,
    PASS: process.env.PASS,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN
  };
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}else{
  creds = require('./config/config');
  const path = require("path");
  app.use('./client/public', express.static(path.join(__dirname, 'public')));
}

oauth2Client = new OAuth2(
  creds.CLIENT_ID,
  creds.CLIENT_SECRET, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);
oauth2Client.setCredentials({
  refresh_token: creds.REFRESH_TOKEN
});


app.post("/send", (req, res) => {
  console.log("Well shit, this worked.");
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
  const accessToken = oauth2Client.getAccessToken();
  var transport = {
    service: "gmail",
    auth:{
          type: "OAuth2",
          user: "wintersfile@gmail.com", 
          clientId: creds.CLIENT_ID,
          clientSecret: creds.CLIENT_SECRET,
          refreshToken: creds.REFRESH_TOKEN,
          accessToken: accessToken
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
      html: output
    }
    transporter.sendMail(mailOptions, (error, response) => {
      error ? console.log(error) : console.log(response);
      if (error) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
      transporter.close();
    });
    
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);