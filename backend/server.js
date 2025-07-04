import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import { app, server } from "./socket/socket.js";
import connectToMongoDB from "./db/connecToMongoDB.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

//middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use("/api/messages", messageRoutes);

app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

connectToMongoDB().then(() => {
  server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});
