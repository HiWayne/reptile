const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Your App is running at http://%s:%s', host, port)
})