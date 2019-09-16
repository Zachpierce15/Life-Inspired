const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../dist'));

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/newUser', (req, res) => {
  console.log('this is data coming in', req.body)
  res.send('This is getting here SERVER')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))