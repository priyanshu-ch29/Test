const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const mentorRoutes = require("./Routes/mentor");
const studentRoutes = require("./Routes/student");
const scheduleRoutes = require("./Routes/schedule");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/mentors", mentorRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/schedule", scheduleRoutes);

// app.use(express.static(path.join(__dirname, "../Frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
// });

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Sucess",
  });
});

app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
