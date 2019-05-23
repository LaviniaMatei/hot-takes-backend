// MONGODB CONNECTION : mongodb+srv://Lavi:<password>@cluster0-efsap.mongodb.net/test?retryWrites=true

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const path = require('path');

const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

const app = express();
mongoose.connect('mongodb+srv://Lavi:QpaUcHtcgD8RplJD@cluster0-efsap.mongodb.net/test?retryWrites=true')
.then(() => {
console.log('successfully connected to MongoDB Atlas');
})
.catch((error) =>{
    console.log('unable to connect to MongoDB Atlas');
    console.log('error');
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
//any request that goes to /api/sauces, will go to the saucesRoutes
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);
  

module.exports = app;