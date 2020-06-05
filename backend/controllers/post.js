const Post = require('../models/Post')

exports.addPost = async (req, res) => {
  const post = await Post.create({ author: req.user._id, ...req.body })
  res.status(201).json({ post })
}

exports.viewPosts = async (req, res) => {
  const posts = await Post.find({}).populate('author')
  res.status(201).json({ posts })
}

exports.viewPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('author')
  res.status(201).json({ post })
}

exports.editPost = async (req, res) => {
  const { id } = req.params
  const updatePost = await Post.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
  res.status(201).json({ updatePost })
}

exports.deletePost = async (req, res) => {
  const post = await Post.findOneAndDelete(req.params.id)
  res.status(201).json({ post })
}
