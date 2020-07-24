const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('MongoDB connection successfull');
})

const usersRouter = require('./routes/users');
const linkRouter = require('./routes/links');
const articlesRouter = require('./routes/articles');

app.use('/users',usersRouter);
app.use('/links',linkRouter);
app.use('/articles',articlesRouter);

app.listen(PORT,() =>console.log('Server started on port:' + PORT));