const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  day: { type: String, required: true },
  timeSlot: { type: String, required: true },
  duration: { type: Number, required: true },
  status: { type: String, default: "Scheduled" },
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
