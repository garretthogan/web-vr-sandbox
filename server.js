const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/sandbox', (req, res) => {
  res.sendFile(__dirname + '/sandbox/index.html');
});

app.listen(8080, () => {
  console.log('LISTENING ON 8080');
});
