import mongoose from "mongoose";

export const dbConn = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "HMS",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
};
