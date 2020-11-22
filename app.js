const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require("connect-flash");
const nodemailer = require('nodemailer');

require('dotenv').config();

const app = express();
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + "/public"));
console.log(__dirname);
// View engine setup
app.set("view engine", "ejs");

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(flash());



//contact form REMOVED
/*
app.get('/catering', (req, res)=> {
	res.render('catering.ejs');
});



app.post('/catering', (req, res)=> {
	var output = `
	<p> Catering request </p>
	<h3> Contact Details</h3>
	<ul>
		<li>Name: ${req.body.name}</li>
		<li>Email: ${req.body.email}</li>
		<li>Phone Number: ${req.body.phone}</li>
	</ul>
	<h3>Message</h3>
	<p>${req.body.message}</p>
	`;
	
	var transporter = nodemailer.createTransport({
	 service: 'gmail',
	 port: 587,
     secure: false,
	 auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD
		}
	});

	const mailOptions = {
	  from: process.env.EMAIL, // sender address
	  to: process.env.RECIPIENT, // list of receivers
	  subject: 'Everbean Catering', // Subject line
	  html: output// plain text body
	};

transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      res.redirect('catering');
  });
});
*/



//contact form end
app.get("/", (req, res) => {
	res.render('home.ejs');
});

app.get('/menu', (req, res) => {
  res.redirect('https://oftendining.com/#s:search.php,menu.php?store_id=7454&view=');
  // res.render('menu.ejs');
});

//app.get('/love', (req, res) => {
//  res.render('giveLove.ejs');
//});
app.get('/GiveThanks', (req, res) => {
 res.render('gc.ejs');
});



app.listen(app.get('port'), function() {
 console.log('Server started...'+ app.get('port'));
})
