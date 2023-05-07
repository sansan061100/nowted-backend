const db = require("../models");
const Notes = db.notes;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Notes.findAll()
    .then(data => {
        res.send({
            status: "success",
            message: "Get all data notes",
            data: data
        });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message
        });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};