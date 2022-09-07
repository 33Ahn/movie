const express = require("express");
const router = express.Router();

// Get the Show, User database
const { User, Show } = require("../models/index"); // ES6 - object destructuring  assigns properties of an object to individual variables

// Add middleware to parse body from the request
router.use(express.json());
router.use(express.urlencoded({extended: true}));

// Server-Side Validation, get two methods
const { check, validationResult } = require("express-validator");


// Define Routes
// Router can get all shows from the database using the endpoint “/shows”
router.get("/", async (req, res) => {
    const allShows = await Show.findAll();
    res.json(allShows);
});

// Router can get one show from the database using an endpoint such as “/shows/2” or “/shows/5”
router.get("/:id", async (req, res) => {
    const showId = await Show.findByPk(req.params.id);  
    res.json(showId);
});

// Router can get shows of a specific genre using an endpoint such as “/shows/genres/Comedy“ or “/shows/genres/Drama”
router.get("/genres/:name", async (req, res) => {
    let { name } = req.params;
    name = name[0].toUpperCase() + name.slice(1);
    const show = await Show.findAll({
        where: {
            genre: name
        }
    });

    res.json(show);
});

// Router can update a rating on a specific show using an endpoint such as “/shows/4/watched” or “/shows/9/watched”    
// Include Server-Side Validation when updating the “rating” of a show. The “rating” field cannot be empty.  (OPTIONAL)

router.put("/:id/watched", 
    [   check("rating")
            .not()
            .isEmpty()
            .trim()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({error: errors});
        }

    const { id } = req.params;
    const { rating } = req.body;
    const show = await Show.findByPk(id);
    const updatedShow = await show.update({ rating });

    res.json(show);
});


// Include Server-Side Validation when updating the “status” of a show. The “status” field cannot be empty and must be between 5 and 25 characters. (OPTIONAL)

router.put("/:id/updates", 
    [check("status")
        .not()
        .isEmpty()
        .trim() 
        .isLength({min:5, max: 25})],        
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({error: errors});
        }

        const { id } = req.params;
        const { status } = req.body;
        const show = await Show.findByPk(id);
        const updatedShow = await show.update({ status });

        res.json(show);
    }
);

// Router can update the status on a specific show from “canceled” to “on-going” or vice versa using an endpoint such as “/shows/3/updates” or “/shows/9/updates”
router.put("/:id/updates", async (req, res) => {
    const { id } = req.params;
    const show = await Show.findByPk(id);

    // Alternates status of show
    const updatedShow = await show.update({
        status: `${show.status === "on-going" ? "cancelled" : "on-going"}`
    });
    res.json(updatedShow);
});


// Router can delete a show
router.delete("/:id", async (req, res) => {    
    const { id } = req.params;
    const show = await Show.findByPk(id);
    const deletedShow = await show.destroy();
    res.json(deletedShow);

    // Or this way
    // const showId = await Show.findById(req.params.id);
    // const deletedShow = await showId.destroy();
    // res.json(deletedShow);
    
});


// Export Express Router
module.exports = router;