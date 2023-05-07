const db = require("../models");
const Folder = db.folder;
const Op = db.Sequelize.Op;
const { Validator } = require('node-input-validator');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    findAll: (req, res) => {
        Folder.findAll()
            .then(data => {
                res.send({
                    status: 'success',
                    message: 'Success get all data',
                    payload: data
                })
            })
            .catch(err => {
                res.status(500).send({
                    status: "error",
                    message:
                        err.message
                });
            });
    },

    create: (req, res) => {
        const v = new Validator(req.body, {
            name: 'required'
        });

        v.check().then((matched) => {
            if (!matched) {
                res.status(422).send(v.errors);
            }
            else {
                let id = uuidv4();

                const folder = {
                    id: id,
                    name: req.body.name,
                    user_id: "60e21bf3-94a4-42ac-9bbc-c2ee332bc9ed",
                }

                Folder.create(folder).then(data => {
                    res.send({
                        status: 'success',
                        message: 'Success create data',
                        payload: data
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
    },
    findOne(req, res) {
        let id = req.params.id;
        Folder.findByPk(id)
            .then(data => {
                res.send({
                    status: 'success',
                    message: 'Success get data',
                    payload: data
                })
            })
            .catch(err => {
                res.status(500).send({
                    status: "error",
                    message:
                        err.message
                });
            });
    },
    update(req, res) {
        let id = req.params.id;
        const v = new Validator(req.body, {
            name: 'required'
        });

        v.check().then((matched) => {
            if (!matched) {
                res.status(422).send(v.errors);
            }
            else {
                Folder.update(req.body, {
                    where: { id: id }
                })
                    .then(num => {
                        if (num == 1) {
                            res.send({
                                status: 'success',
                                message: 'Success update data',
                            })
                        } else {
                            res.send({
                                status: 'error',
                                message: `Cannot update data with id=${id}. Maybe data was not found!`
                            })
                        }
                    })
                    .catch(err => {
                        res.status(500).send({
                            status: "error",
                            message:
                                err.message
                        });
                    });
            }
        });
    }
}