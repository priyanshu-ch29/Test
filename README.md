# Mentor-Student Scheduler
- This project is a Mentor-Student Scheduler built using the MERN stack (MongoDB, Express, React, Node.js). The scheduler helps prioritize mentor availability while allowing students to book sessions based on their interests and preferences.

# Features
- Mentor-Student Scheduling: Schedule sessions with mentors based on their availability.
- Back-to-Back Scheduling: Prioritizes back-to-back sessions for efficiency.
- Customizable Sessions: Different session durations with associated payments.
- User-Friendly Interface: Separate interfaces for mentors and students with easy-to-use UI/UX.

# Tech Stack
- Frontend: React.js, HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB
- Other Tools: Cors, Body-Parser, dotenv, Path

# Installation
- Prerequisites
- Node.js installed
- MongoDB installed

# Backend Setup
- Clone the repository:
- bash
- Copy code
- git clone https://github.com/your-repo.git
- cd your-repo
I
- npm install
- Create a .env file in the root directory and add the following environment variables:
- makefile
- Copy code
- PORT=3000
- MONGO_URI=your_mongodb_connection_string

# Start the backend server:

- npm run server
- Frontend Setup
- Navigate to the Frontend folder:
- cd Frontend
- Install frontend dependencies:
- npm install
- npm start

# API Endpoints
- Mentor Routes
- GET /api/mentors - Get all mentors
- POST /api/mentors - Add a new mentor
- Student Routes
- GET /api/students - Get all students
- POST /api/students - Add a new student
- Schedule Routes
- GET /api/schedule - Get all schedules
- POST /api/schedule - Create a new schedule

# Deployment
- Build the React frontend:
- cd Frontend
- npm run build
