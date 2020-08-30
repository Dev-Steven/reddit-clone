const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		title: { type: String, required: true },
		author: { type: String, required: true },
		body: { type: String, required: true },
		// comments: [{ body: String, date: Date }],
		date: { type: Date, default: Date.now },
		// meta: {
		// 	upvotes: Number,
		// 	downvotes: Number,
		// 	favs: Number,
		// },
	},
	{
		timestamps: true,
	}
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
