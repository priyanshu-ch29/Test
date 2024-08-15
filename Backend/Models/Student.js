const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  areaOfInterest: String,
  preferredMentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
  selectedDuration: { type: Number, enum: [30, 45, 60], required: true },
});

module.exports = mongoose.model("Student", StudentSchema);
