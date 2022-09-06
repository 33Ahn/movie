const express = require("express");
const app = express();
const { Sequelize } = require("./db");
const {db} = require("./db");
const seed = require("./seed");

// Import routers
const UsersRouter = require("./routes/Users")

// Use the routers
app.use("/Users", UsersRouter);
// app.use("/", )

// Include middleware to parse body from the request
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 3000;



app.listen(port, () => {
    db.sync();
    seed();
    console.log(`Server listening at http://localhost: ${port}`)
});