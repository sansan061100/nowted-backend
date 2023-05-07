module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define("notes", {
        id : {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        date : {
            type: Sequelize.DATE
        },
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.TEXT('long')
        },
        status : {
            type: Sequelize.ENUM('favorites', 'trash', 'archive')
        }, 
        folder_id : {
            type: Sequelize.INTEGER
        },
        user_id : {
            type: Sequelize.INTEGER
        },
    }, {
        timestamps: false
    });
    return Note;
}
