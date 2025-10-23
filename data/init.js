// import mongoose from "mongoose";
// import User from "../models/user.js";

// const addTimestamps = async () => {
//   console.log("functionr uns")
//   await mongoose.connect("mongodb+srv://vpath:lIRg8LSaXlTsipIM@cluster0.xvmktho.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0");

//   const today = new Date();
//   console.log("after date")
//   const result = await User.updateMany(
//     { createdAt: { $exists: false } },
//     { $set: { createdAt: today, updatedAt: today } }
//   );
//   console.log("got")

//   console.log(`${result.modifiedCount} users updated with timestamps.`);
//   mongoose.connection.close();
// };

// addTimestamps();