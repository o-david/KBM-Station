const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    video: {
      type: String,
    },
    userId: {
      type: String,
    },
    postId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;
