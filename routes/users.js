const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

// import validations
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

// import user model
let User = require('../models/user.model');

// Register Endpoint
router.post('/register', (req, res) => {
	// Form validation
	// take req.body and pass it to register validation
	const { errors, isValid } = validateRegisterInput(req.body);

	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;

	// Check to see if email already exists
	User.findOne({ email }).then(user => {
		if (user) {
			res.status(400).json({ email: 'Email already exists' });
		} else {
			// Create a new user
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			});

			// Hash password before saving to database
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					// assign the hashed password to newUser password
					// rather than the actual password
					// THEN save() **NEVER store actual password in database
					newUser.password = hash;
					newUser
						.save()
						.then(user => res.json(user))
						.catch(err => console.log(err));
				});
			});
		}
	});
});

// Login Endpoint
router.post('/login', (req, res) => {
	// Form validation
	// Take req.body and pass it through login validation
	const { errors, isValid } = validateLoginInput(req.body);

	// return if input did not pass validation check
	if (!isValid) {
		return res.status(400).json(errors);
	}

	// if all inputs passed, grab email and password
	const email = req.body.email;
	const password = req.body.password;

	User.findOne({ email }).then(user => {
		if (!user) {
			return res
				.status(400)
				.json({ emailNotFound: 'Incorrect information' });
		}
		// Else a User with this email does exist!

		// Check the password
		bcrypt.compare(password, user.password).then(matched => {
			if (matched) {
				// We have a successful login!

				// create a JWT payload
				const payload = {
					id: user.id,
					name: user.name,
				};

				// Sign token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{ expiresIn: 31556926 },
					(err, token) => {
						res.json({
							success: true,
							token: 'Bearer ' + token,
						});
					}
				);
			} else {
				return res
					.status(400)
					.json({ passwordIncorrect: 'Incorrect information' });
			}
		});
	});
});

module.exports = router;
