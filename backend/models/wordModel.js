const mongoose = require("mongoose");

const wordSchema = mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
    },
    fLetter: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },

    example: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Word = mongoose.model("Word", wordSchema);

module.exports = Word;
