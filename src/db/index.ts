import mongoose from "mongoose";

const URI = process.env.MONGO_URI as string;

mongoose
  .connect("")
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("db connection error,", err);
  });
