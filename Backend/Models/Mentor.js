const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  availability: [{ day: String, timeSlots: [String] }], // e.g., [{day: 'Monday', timeSlots: ['7pm-7:30pm', '7:30pm-8pm']}]
  areasOfInterest: [String],
  rating: { type: Number, default: 0 },
  isPremium: { type: Boolean, default: false },
});

module.exports = mongoose.model("Mentor", MentorSchema);
