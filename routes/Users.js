const express = require("express");
const router = express.Router();

// Get the User, Show database
const {User, Show} = require("../models/index");

// Add middleware
router.use(express.json());
router.use(express.urlencoded({extended: true}));



// Define Routes
// User Router can get all users from the database using the endpoint “/users”
router.get("/", async (req, res) => {
    const allUsers = await User.findAll();
    res.json(allUsers);
});


// User Router can get one user from the database using an endpoint such as “/users/1” or “/users/2”
router.get("/:id", async (req, res) => {
    const UserId = await User.findByPk(req.params.id);
    res.json(UserId);
});


// GET all shows watched by a user (user id in req.params) --one to many associations
// User Router can get all the shows watched by a user using an endpoint such as “/users/2/shows”, or “/users/8/shows”
 router.get("/:id/shows", async (req, res) => {
    let user = User.findByPk(req.params.id);
    let allShows = await user.getShows(); 
    res.json(allShows);
 });

 // Or this way
// router.get("/:id/shows", async (req, res) => {
//     const { id } = req.params;
//     const user = await User.findByPk(id, {
//         include: Show
//     });
//     res.json(user);
//  });


// User Router can update and add a show if a user has watched it using an endpoint such as “/users/2/shows/9” or “/users/1/shows/2”
 router.put("/:id/shows/:showId", async (req, res) => {
    const {id, showId} = req.params;
    const user = await User.findByPk(id);
    const show = await Show.findByPk(showId);
    user.addShow(show);
    const userShows = await user.getShows();

    res.json(userShows);
});   


// Export Express Router
module.exports = router;