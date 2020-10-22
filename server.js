const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('Mongodb connection successful!');
});

const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

// Routes
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

// *** to start server file: cd backend then run node server
