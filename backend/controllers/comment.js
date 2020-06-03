const Comment = require('../models/Comment')

exports.createComment = async (req, res) => {
  const { body, postId } = req.params
  const { owner } = req.user

  const comment = await Comment.create({ body, owner, post: postId })
  res.status(201).json({ comment })
}

exports.getPostComments = async (req, res) => {
  const { postId } = req.params
  const comments = await Comment.find({ post: postId }).populate('owner').populate('post')
  res.status(200).json({ comments })
}

exports.deleteComment = async (req, res) => {
  const { id } = req.params
  await Comment.findByIdAndDelete(id)
  res.status(200).json({ message: 'Comment deleted successfully' })
}