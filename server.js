const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
  res.status(200).sendFile(__dirname + './index.html');
});

app.get('/favicon.ico', (req, res)=>{
  res.status(204);
  res.redirect('/');
});

app.listen(process.env.port || 3000, ()=>{
  console.log("Server up and running!!");
  console.log(process.env.port);
});