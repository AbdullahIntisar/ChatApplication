# 💬 Real-Time Chat Application

## 📌 Description
A real-time chat application built with the MERN stack and Socket.IO. It allows users to register, log in, and chat instantly with others through a smooth, responsive interface. Designed to simulate a modern messaging experience.

---

## ⚙️ Tech Stack

- **Frontend**: React, Tailwind CSS, Axios, Socket.IO Client
- **Backend**: Node.js, Express, Socket.IO Server
- **Database**: MongoDB, Mongoose
- **Tools**: Vite, JWT, bcrypt, dotenv

---

## ✨ Features

- 🔐 User Authentication (JWT-based)
- 📨 Real-time messaging with Socket.IO
- ✅ Online user indicator
- 🕓 Chat timestamps
- 📦 Backend API with MongoDB integration
- 💻 Fully responsive UI

---

## 📸 Screenshots
Login Page:
<img width="609" height="554" alt="image" src="https://github.com/user-attachments/assets/95048f73-5f26-490f-a09a-d73af1ea3c80" />

Sign Up Page:
<img width="520" height="719" alt="image" src="https://github.com/user-attachments/assets/cc7b9c18-2e6b-4a27-b5aa-2c7feb085fde" />


Home Page:
<img width="947" height="704" alt="image" src="https://github.com/user-attachments/assets/51761430-3a5b-4b31-b29f-5f3fcaee3890" />

---
Users have avatar too generated through https://avatar.iran.liara.run/public/boy?username=${username} but currently they are not working.


## 🚀 How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/AbdullahIntisar/ChatApplication.git
cd ChatApplication


2. Install Dependencies
Goto root & do npm install

3. Start Backend
cd backend
npm run start


4. Start frontend
cd frontend
npm run dev


5. 🔐 Environment Variables

PORT=YOUR_PORT_NO
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


6. 📁 Folder Structure (Optional)

ChatApplication/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── .env
│   └── server.js
└── frontend/
    ├── components/
    ├── pages/
    ├── utils/
    └── App.jsx


7. 🙌 Future Improvements
Group chats support

File/image sharing

User profile pictures

Read receipts

Notification system

















































