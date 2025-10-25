const mongoose = require("mongoose");
const User = require("./models/User.js");

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

// const updateTimestamps = async () => {
//   try {
//     // 1️⃣ Connect
//     await mongoose.connect("mongodb+srv://vpath:lIRg8LSaXlTsipIM@cluster0.xvmktho.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0");
//     console.log("✅ Connected to MongoDB");

//     // 2️⃣ Update missing createdAt
//     const result = await User.updateMany(
//       { createdAt: { $exists: false }, updatedAt: { $exists: true } },
//       [{ $set: { createdAt: "$updatedAt" } }]
//     );

//     console.log(`✅ Updated ${result.modifiedCount} documents`);

//   } catch (err) {
//     console.error("❌ Error updating timestamps:", err);
//   } finally {
//     // 3️⃣ Disconnect
//     await mongoose.disconnect();
//     console.log("🔌 Disconnected from MongoDB");
//   }
// };

// updateTimestamps();