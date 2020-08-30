const router = require('express').Router();
let Post = require('../models/post.model');

// get all posts
router.route('/').get((req, res) => {
	Post.find()
		.then(posts => res.json(posts))
		.catch(err => res.status(400).json('Error: ' + err));
});

// create a post
router.route('/add').post((req, res) => {
	const title = req.body.title;
	const author = req.body.author;
	const body = req.body.body;
	// const comments = req.body.comments;
	const date = Date.parse(req.body.date);
	// const meta = req.body.meta;

	const newPost = new Post({
		title,
		author,
		body,
		// comments,
		date,
		// meta,
	});

	newPost
		.save()
		.then(() => res.json('Post added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

// find a post
router.route('/:id').get((req, res) => {
	Post.findById(req.params.id)
		.then(post => res.json(post))
		.catch(err => res.status(400).json('Error: ' + err));
});

// delete a post
router.route('/:id').delete((req, res) => {
	Post.findByIdAndDelete(req.params.id)
		.then(() => res.json('Post deleted'))
		.catch(err => res.status(400).json('Error: ' + err));
});

// edit a post
router.route('/update/:id').post((req, res) => {
	Post.findById(req.params.id)
		.then(post => {
			post.title = req.body.title;
			post.author = req.body.author;
			post.body = req.body.body;
			post.data = Date.parse(req.body.data);

			post.save()
				.then(() => res.json('Post updated!'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
