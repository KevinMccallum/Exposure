const { model, Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    body: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model('Comment', commentSchema)
