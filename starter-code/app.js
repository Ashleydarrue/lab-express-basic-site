
const express = require('express');
const app = express();




// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/coffee.html');
});
app.get('/aboutbeans', (request, response, next) => {
  response.sendFile(__dirname + '/views/aboutbeans.html');
});

app.use(express.static('public'));