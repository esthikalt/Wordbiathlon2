const express = require("express");

const Score = require('../models/score');

const router = express.Router();

router.post("/savedgames", (req, res, next) => {
  const score = new Score({
    name: req.body.name,
    cpm: req.body.cpm,
    title: req.body.title,
    date: req.body.date
  });
  console.log(score);
  score.save().then(result => {
    res.status(201).json({
      message: 'Score saved successfully!',
      scoreId: result._id
    });
  });
});

router.get("/savedgames", (req, res, next) => {
  Score.find()
  .then(documents => {
    console.log(documents);
    res.status(200).json({
      message: "Scores fetched successfully!",
      score: documents
    });
  });
});

module.exports = router;
