// Import all modules here
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Declaring some variables
const PORT = process.env.SERVER_PORT || 3000;
const HOST = process.env.SERVER_HOST || "127.0.0.1";
const DB = process.env.SERVER_DB || "store";
const URI = process.env.SERVER_URI || "mongodb://localhost:27017/";

// Defined Some Middlewares
app.use(express.static(path.join(__dirname, "../frontend/dist")));
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(cookieParser());

// Define the index route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

// Imported All Routes Here...
const UserRouter = require("./routes/User.Routes")
app.use("/api/user",UserRouter)





// Listening The Server
mongoose
    .connect(URI, { dbName: DB })
    .then(() => {
        app.listen(PORT, () => {
            console.clear();
            console.log(
                `\n ____________________________________________________`
            );
            console.log(`\n [+]  SERVER IS RUNNING - ${HOST}:${PORT}`);
            console.log(`\n [+]  WEB DEVELOPER NAME : GHS JULIAN`);
            console.log(
                ` ____________________________________________________\n\n`
            );
        });
    })
    .catch(error => {
        console.clear();
        console.log(error);
    });
