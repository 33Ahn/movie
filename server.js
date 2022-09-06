const express = require("express");
const app = express();
const { Sequelize } = require("./db");
const {db} = require("./db");
const seed = require("./seed");

// Import routers
const usersRouter = require("./routes/users");
const showsRouter = require("./routes/shows")

// Use the routers
app.use("/users", usersRouter);
app.use("/shows", showsRouter);

// Include middleware to parse body from the request
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 3000;


// bind the port to my server
app.listen(port, () => {
    db.sync();
    seed();
    console.log(`Server listening at http://localhost: ${port}`)
});