const express = require('express')
const router = express.Router()
const uploadCloud = require('../config/cloudinary')

const { addPost, viewPost, viewPosts, editPost, deletePost } = require('../controllers/post')

router.post('/upload', uploadCloud.single('imageURL'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded'))
  }
  res.status(201).json({ secure_url: req.file.secure_url })
})

router.post('/add', addPost)
router.get('/view', viewPosts)
router.get('/:id', viewPost)
router.patch('/edit/:id', editPost)
router.delete('/:id', deletePost)

module.exports = router
