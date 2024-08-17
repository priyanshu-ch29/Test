const express = require("express");
const Schedule = require("../Models/Schedule");
const Mentor = require("../Models/Mentor");
const router = express.Router();

// Schedule a session
router.post("/", async (req, res) => {
  try {
    const { mentorId, studentId, day, timeSlot, duration } = req.body;

    // Check for mentor's availability at the time slot
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) return res.status(404).json({ error: "Mentor not found" });

    const availability = mentor.availability.find((slot) => slot.day === day);
    if (!availability)
      return res
        .status(400)
        .json({ error: "No availability for the selected day" });

    const timeSlotDetail = availability.timeSlots.find(
      (slot) => slot.time === timeSlot
    );
    if (!timeSlotDetail)
      return res.status(400).json({ error: "Time slot not available" });

    if (timeSlotDetail.booked)
      return res.status(400).json({ error: "Time slot is already booked" });

    // Mark the time slot as booked
    timeSlotDetail.booked = true;
    await mentor.save();

    const schedule = new Schedule({
      mentor: mentorId,
      student: studentId,
      day,
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
