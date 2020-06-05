const { model, Schema } = require('mongoose')

const postSchema = new Schema(
  {
    name: String,
    imgURL: {
      type: String,
    },
    description: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = model('Post', postSchema)
