import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to mongo db");
  }
};

export default connectToMongoDB;
