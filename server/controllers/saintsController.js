const connection = require('../database/connection');

const saintsController = {
    getAllSaints: (req, res) => {
        connection.query(
            'SELECT * FROM saints',
            (error, saints, fields) => {
                if(error) return console.error(error);

                res.json(saints);
            }
        )
    }
};

module.exports = saintsController;