var express = require('express'); //importing
var bodyParser = require('body-parser');
var axios = require('axios');
var {mongoose} = require('./db/mongoose');

var {Class} = require('./models/classes')
var {User} = require('./models/user')
var {Deadline} = require('./models/classes')

var app = express(); //middleware
app.use(bodyParser.json());

app.get('/classes',(req, res) => {
  Class.find().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
})

app.post('/classes', (req, res) => {
  var clas = new Class({
    name: req.body.name,
    profname: req.body.profname,
    profID: req.body.profID,
    deadlines: req.body.deadlines
  })

  clas.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});

app.get('/users',(req, res) => {
  User.find().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
})

app.post('/user', (req, res) => {
  var user = new User({
    name: req.body.name,
    classes: req.body.classes
  })

  user.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});

app.get('/deadlines',(req, res) => {
  Deadline.find().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
})

app.post('/deadline', (req, res) => {
  var deadline = new Deadline({
    name: req.body.name,
    description: req.body.description,
    due: req.body.due
  })

  deadline.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});

app.listen(4000, () => {
  console.log("Started on port 4000");
});
