const mongoose = require("mongoose");

const answerSchema = mongoose.Schema(
  {
    answer: {
      type: String,
    },
    image: {
      type: String,
    },
    questionId: {
      type: String,
    }, 
    userId: {
      type: String,
    },

  },
  {
    timestamps: true,
  }
);

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
