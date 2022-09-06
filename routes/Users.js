const express = require("express");
const router = express.Router();

// from the User, Show database
const {User} = require("../models/User");
const { Show } = require("../models/Show");

// Add middleware
router.use(express.json());
router.use(express.urlencoded({extended: true}));

// Define Routes
router.get("/", async (req, res) => {
    const allUsers = await User.findAll();
    res.json(allUsers);
});

router.get("/:id", async (req, res) => {
    const UserId = await User.findByPk(req.params.id);
    res.json(UserId);
});

// GET all shows watched by a user (user id in req.params) 




// PUT update and add a show if a user has watched it



// Export Express Router
module.exports = router;