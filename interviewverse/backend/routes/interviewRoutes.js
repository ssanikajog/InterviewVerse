const express = require("express");
const router = express.Router();

const Interview = require("../models/Interview");

// Test route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Interview routes are working!",
  });
});

// Save an interview attempt
router.post("/", async (req, res) => {
  try {
    const {
      role,
      experienceLevel,
      interviewType,
      difficulty,
      question,
      answer,
      score,
      feedback,
    } = req.body;

    const interview = await Interview.create({
      role,
      experienceLevel,
      interviewType,
      difficulty,
      question,
      answer,
      score,
      feedback,
    });

    res.status(201).json({
      success: true,
      message: "Interview saved successfully",
      data: interview,
    });
  } catch (error) {
    console.error("Error saving interview:", error.message);

    res.status(500).json({
      success: false,
      message: "Could not save interview",
    });
  }
});

// Get interview history
router.get("/", async (req, res) => {
  try {
    const interviews = await Interview.find()
      .sort({ createdAt: -1 })
      .limit(50);

    res.json({
      success: true,
      count: interviews.length,
      data: interviews,
    });
  } catch (error) {
    console.error("Error loading interviews:", error.message);

    res.status(500).json({
      success: false,
      message: "Could not load interviews",
    });
  }
});

module.exports = router;