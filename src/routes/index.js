module.exports = app => {
    
    const router = require("express").Router();
    const notes = require("../controller/notes.controller.js");
    const folder = require("../controller/folder.controller.js");


    // Get all notes
    router.get("/notes", notes.findAll);


    router.get('/folder', folder.findAll);

    app.use('/api', router);
}