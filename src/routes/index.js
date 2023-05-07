module.exports = app => {

    const router = require("express").Router();
    const notes = require("../controller/notes.controller.js");
    const folder = require("../controller/folder.controller.js");


    // Get all notes
    router.get("/notes", notes.findAll);


    router.get('/folder', folder.findAll);
    router.post('/folder', folder.create);
    router.get('/folder/:id', folder.findOne);
    router.put('/folder/:id', folder.update);

    app.use('/api', router);
}