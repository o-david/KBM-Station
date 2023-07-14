const Word = require("../models/wordModel.js");
const Question = require("../models/questionModel.js");
const Answer = require("../models/answerModel.js");
const asyncHandler = require("express-async-handler");

// @desc    Get logged in user notes
// @route   GET /api/notes
// @access  Private
const getWords = asyncHandler(async (req, res) => {
  const words = await Word.find();
  res.json(words);
});

const CreateWord = asyncHandler(async (req, res) => {
  const { word, meaning, example } = req.body;

  if (!word || !meaning || !example) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    fLetter = word[0];
    const newWord = new Word({ word, fLetter, meaning, example });

    const createdWord = await newWord.save();

    res.status(201).json(createdWord);
  }
});

module.exports = { getWords, CreateWord };
