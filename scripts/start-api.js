const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const http = require('http');

//CONFIGS
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));

const port = process.env.PORT || 8080;

app.use('/', router);

app.listen(port);

console.log('port at : ' + port);


//HTTP SERVER
const server = http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];

  request.on('error', err => {
    console.error(err);
  })
  .on('data', chunk => {
    body.push(chunk);
  })
  .on('end', () => {
    body = Buffer.concat(body).toString();

    response.on('error', err => {
      console.error(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json')

    const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();
  });
}).listen(5060);


//ROUTES
app.get('/', function(req, res){
  res.json({message:'BackEnd Working!'})
});


app.post('/contact', function(req, res) {
  var data = req.body;
  res.set('Content-Type', 'application/json')
  res.json({message: data})
});
