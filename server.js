const express = require("express");
const app = express();
const { Sequelize } = require("./db");
const {db} = require("./db"); // import the database
const seed = require("./seed");  // import seed file

// Import routers
const usersRouter = require("./routes/users");
const showsRouter = require("./routes/shows");

// Use the routers
app.use("/users", usersRouter);
app.use("/shows", showsRouter);

const port = 3001;

// bind the port to my server
app.listen(port, () => {
    db.sync({force: true}); // sync the database, eveytime we reload the db, it will be clear, not keeping any changes we made from the previous session
    seed();  // invoke the seed function
    console.log(`Server listening at http://localhost: ${port}`);
});