// Wiki.js -Wiki route module
// grouping the route handler for the part of the site
// that handles wiki pages
// it is achieved by using the express.Router class to create an object
//letting us creating the rout in this module and then export the 
// router to be mounted as a middleware by the main application
const express= require("express")

const router = express.Router();

// Home page route
router.get("/", (req, res) => {
    res.send("Wiki home page");
});

// About page route
router.get("/about", (req, res) => {
    res.send("About this wiki");
});

module.exports = router;