
MERN Registration Form App

A full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to fill out a registration form.
The form data is validated on the frontend, submitted to a Node.js server, and saved into a MongoDB database.


📦 Technologies Used

- Frontend: React.js (with plain CSS)
- Backend: Node.js, Express.js
- Database: MongoDB (local)
- Styling: Custom CSS (no framework)

🧾 Features

- Neatly designed registration form
- Frontend validation for required fields, email format, and mobile number
- Thank-you message after successful form submission
- Data saved to MongoDB

🗂️ Folder Structure

mern-form-app/
│
├── backend/
│   ├── models/
│   │   └── FormData.js
│   ├── routes/
│   │   └── formRoutes.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── Form.js
│   │   ├── Form.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
└── README.md

🚀 Getting Started

Prerequisites

- Node.js & npm
- MongoDB & mongosh installed and running locally
- VS Code or any code editor

🛠️ Setup Instructions

1. Clone the repository
git clone https://github.com/yourusername/mern-form-app.git
cd mern-form-app

2. Backend Setup
cd backend
npm install
node server.js
Server runs on `http://localhost:5000`

Make sure MongoDB is running using:

mongod

3. Frontend Setup
cd ../frontend
npm install
npm start


Frontend runs on `http://localhost:3000`

📌 API Endpoints

| Method | Endpoint                   | Description            |
| ------ | -------------------------- | ---------------------- |
| POST   | `/api/form/submit`         | Submit form data       |
| GET    | `/api/form/all` (optional) | Get all submitted data |
