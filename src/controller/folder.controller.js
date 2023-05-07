const db = require("../models");
const Folder = db.folder;
const Op = db.Sequelize.Op;
const { Validator } = require('node-input-validator');
const { v4: uuidv4 } = require('uuid');

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
    },

    create : (req, res) => {
        const v = new Validator(req.body, {
            name : 'required|email'
        });

        v.check().then((matched) => {
            if(!matched){
                res.status(422).send(v.errors);
            }
            else {
                let id = uuidv4();

                const folder = {
                    id : id,
                    name : req.body.name,
                    user_id : "60e21bf3-94a4-42ac-9bbc-c2ee332bc9ed",
                }

                Folder.create(folder).then(data => {
                    res.send({
                        status : 'success',
                        message : 'Success create data',
                        data : data
                    })
                }
                ).catch(err => {
                    res.status(500).send({
                    message:
                        err.message
                    });
                });
            }
        });
    }
}