const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const model = require('../Postgres Database/index.js')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../dist'));

// ========= Get Routes =========
app.get('/loginUser', (req, res) => {
  const { email, password } = req.query
  model.getUser(email, password, (err, userData) => {
    if(err) {
      res.send(err).status(400)
    } else {
      res.send(userData).status(200)
    }
  })
})

// ======== Post Routes ========
app.post('/newUser', (req, res) => {
  model.addUsers(req.body, (err, data) => {
    if(err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))