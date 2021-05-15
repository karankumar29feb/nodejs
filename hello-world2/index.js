var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!_this is created by Karan as practice for another nodejs application')
})

app.listen(9091, function () {
  console.log('app listening on port 9091!')
}) 
