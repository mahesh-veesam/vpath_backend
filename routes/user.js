const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const User = require("../models/user.js")
const Course = require("../models/course.js")

router.get('/showUsersData', wrapAsync(async (req, res) => {

    const mahesh = req.user?.email === "mahesh.23mis7302@vitapstudent.ac.in";

    if (!mahesh) {
        console.log("Evadra nuvvu");
        return res.status(403).json({ error: "Access denied" });
    }

    const totalUsers = await User.countDocuments();

    const users = await User.find()
        .sort({ _id: -1 })
        .select("name email createdAt");

    res.status(200).json({
        totalUsers,
        users
    });

}));

module.exports = router 