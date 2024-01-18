import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n ✅✅✅ MongoDB Connected! ✅✅✅ \n☘️  DB HOST: ${connectionInstance.connection.host} ☘️\n`
    );
  } catch (error) {
    console.log("❌❌❌ Unable to connect to MongoDB ❌❌❌", error);
    process.exit(1);
  }
};

export default connectDB;
