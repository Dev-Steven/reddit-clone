const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

require('dotenv').config();

const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

const app = express();

// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);

app.use(bodyParser.json());

// const uri = process.env.ATLAS_URI;
const db = require('./config/keys').mongoURI;
mongoose
	.connect(db, { useNewUrlParser: true, useCreateIndex: true })
	.then(() => console.log('MongoDB successfully connected'))
	.catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

// *** to start server file: cd backend then run node server

// app.use(cors());
// app.use(express.json());

// const connection = mongoose.connection;
// connection.once('open', () => {
// 	console.log('Mongodb connection successful!');
// });
