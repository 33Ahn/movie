const express = require("express");
const router = express.Router();
// from the User database
const {User} = require("../models/User")
// Add middleware
router.use(express.json());
router.use(express.urlencoded({extended: true}));

// Define Routes
router.get("/", async (req, res) => {
    const allUsers = await User.findAll();
    res.json(allUsers);
})




module.exports = router;