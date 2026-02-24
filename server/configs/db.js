import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("🔄 Attempting to connect to MongoDB...");

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 60000,
    });

    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    console.error("⚠️ Server will run but database operations will fail");
  }
};

export default connectDB;