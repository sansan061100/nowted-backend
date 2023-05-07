module.exports = app => {
    
    const router = require("express").Router();
    const notes = require("../controller/notes.controller.js");
    // Get all notes
    router.get("/notes", notes.findAll);



    app.use('/api', router);
}