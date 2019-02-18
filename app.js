const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url = process.env.MONGO_URL || 'mongodb://localhost:27017/node-server'
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log("Mongo url:",url)

// Connect to MongoDB
mongoose
  .connect(
    url,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const port = 3000;

const user = require('./routes/user.route');
app.use('/user', user);

const coin = require('./routes/coin.route');
app.use('/', coin);


app.listen(port, () => console.log('Server running...'));
