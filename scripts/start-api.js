const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const nodeMailer = require('nodemailer');

//CONFIGS
app.use(express.static(__dirname));
app.use('/', router);
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

//MIDDLEWARE
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })


//ROUTES
app.get('/', function(req, res){
  res.json({message:'BackEnd Working!'})
});

app.get('/contact', function(req, res) {
  const data = req.body;

  res.set('Content-Type', 'application/json')
  res.send({message: req.body})

})

app.post('/contact', function(req, res) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'andrewangelle@gmail.com',
      pass: 'zydeco!@#$'
    }
  });

  let mailOptions = {
    from: `${req.body.name} <${req.body.email}>`,
    to: 'andrewangelle@gmail.com',
    subject: req.body.subject,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }

    console.log('Message %s sent: %s', info.messageId, info.response);

    res.send({id: info.messageId, data: info.response});

  });
});

app.listen(port);
console.log('port at : ' + port);
