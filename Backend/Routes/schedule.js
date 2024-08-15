const express = require("express");
const Schedule = require("../Models/Schedule");
const Mentor = require("../Models/Mentor");
const router = express.Router();

// Helper function to get the day of the week from a Date object
const getDayOfWeek = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
};

// Schedule a session
router.post("/", async (req, res) => {
  try {
    const { mentorId, studentId, date, timeSlot, duration } = req.body;

    // Convert the date string to a Date object
    const sessionDate = new Date(date);
    if (isNaN(sessionDate))
      return res.status(400).json({ error: "Invalid date format" });

    // Get the day of the week
    const dayOfWeek = getDayOfWeek(sessionDate);

    // Check for mentor's availability at the time slot
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) return res.status(404).json({ error: "Mentor not found" });

    const isAvailable = mentor.availability.some(
      (slot) => slot.day === dayOfWeek && slot.timeSlots.includes(timeSlot)
    );

    if (!isAvailable)
      return res.status(400).json({ error: "Time slot not available" });

    const schedule = new Schedule({
      mentor: mentorId,
      student: studentId,
      date: sessionDate, // Store the actual Date object
      timeSlot,
      duration,
    });
    await schedule.save();

    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const response = await Schedule.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
