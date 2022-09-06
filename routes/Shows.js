const express = require("express");
const router = express.Router();

// Get the Show, User database
const {Show} = require("../models/Show");
const {User} = require("../models/Show");

// Add middleware
router.use(express.json());
router.use(express.urlencoded({extended: true}));

// Define Routes
router.get("/", async (req, res) => {
    const allShows = await Show.findAll();
    res.json(allShows);
});

router.get("/:id", async (req, res) => {
    const showId = await Show.findByPk(req.params.id);
    res.json(showId);
});




// Export Express Router
module.exports = router;