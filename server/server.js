const express = require('express');
const cors = require('cors');
const server = express();
const port = 3306;

const saintsController = require('./controllers/saintsController');

server.use(cors());

server.get('/saints', saintsController.getAllSaints); 

server.listen(port, () => {
    console.log('Saint Seiya Server is running on port: ' + port)
});

