import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

import connectToMongoDB from "./db/connecToMongoDB.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World!!");
// });

//middleware
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});
