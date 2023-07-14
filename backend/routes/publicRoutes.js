const express = require("express");
const {
  getWords,
  CreateWord,
  DeleteNote,
  UpdateNote,
} = require("../controllers/wordController.js");
const router = express.Router();

router.route("/").get(getWords);
router.route("/create").post(CreateWord);

module.exports = router;
