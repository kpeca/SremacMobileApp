const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB databse connection established")
})

const app = express();
app.use(cors());
app.use(bodyParser.json());


const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});

console.log(uri)

// const matchRouter = require('./routes/matches')

// app.use('/matches', matchRouter)
app.use(require('./routes/matches'))



app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})