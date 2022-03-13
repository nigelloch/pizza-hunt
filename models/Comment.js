const { Schema, model, Types } = require('mongoose');

const CommentSchema = new Schema(
  {
  writtenBy: {
    type: String,
    required: true
  },
  commentBody: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
}
);

const Comment = model('Comment', CommentSchema);

module.exports = Comment;