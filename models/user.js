const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    googleId: String,
    name: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    email: String,
    role: { 
      type: String, 
      default: "student" 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);