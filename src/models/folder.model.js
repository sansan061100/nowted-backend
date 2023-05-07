module.exports = (sequelize, Sequelize) => {
    const Folder = sequelize.define("folders", {
        id : {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        name : {
            type: Sequelize.STRING
        },
        user_id : {
            type: Sequelize.INTEGER
        },
    }, {
        timestamps: false
    });
    return Folder;
}
