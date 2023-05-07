const db = require("../models");
const Folder = db.folder;
const Op = db.Sequelize.Op;

module.exports = {
    create : (req, res) => {
  
    },
    
    // Retrieve all Tutorials from the database.
    findAll : (req, res) => {
        Folder.findAll()
        .then(data => {
            res.send({
                status : 'success',
                message : 'Success get all data',
                data : data
            })
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message
            });
        });
    }
};