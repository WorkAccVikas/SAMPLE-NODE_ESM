import dotenv from "dotenv";
dotenv.config({
  path: `./.env`,
});

const PORT = process.env.PORT || 8000;

import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `🚀🚀🚀 Server is running http://localhost:${PORT} 🚀🚀🚀\n${"#".repeat(
          100
        )}`
      );
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
  });
