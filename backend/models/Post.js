const { model, Schema } = require('mongoose')

const postSchema = new Schema(
  {
    name: String,
    imgURL: {
      type: String,
    },
    pricing: Number,
    description: String,
    isActive: { type: Boolean, default: true },
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
