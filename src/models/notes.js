module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define("note", {
        date : {
            type: Sequelize.DATETIME
        },
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.LONGTEXT
        },
        status : {
            type: Sequelize.ENUM('favorites', 'trash', 'archive')
        }, 
        folder_id : {
            type: Sequelize.INTEGER
        },
        user_id : {
            type: Sequelize.INTEGER
        }
    });
    return Note;
}
