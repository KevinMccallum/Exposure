const express = require('express')
const router = express.Router()

const { createComment, getPostComments, deleteComment } = require('../controllers/comment')

router.post('/', createComment)
router.get('/:postId', getPostComments)
router.delete('/:id', deleteComment)


module.exports = router