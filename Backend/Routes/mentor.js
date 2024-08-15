const express = require("express");
const Mentor = require("../Models/Mentor");
const router = express.Router();

// Fetch mentors by area of interest

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const mentor = new Mentor(data);
    await mentor.save();
    res.status(201).json(mentor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { interest } = req.query;
    const mentors = await Mentor.find({ areasOfInterest: interest });
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch mentor availability by ID
router.get("/:id", async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    res.status(200).json(mentor.availability);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
