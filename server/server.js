const express = require('express');
const cors = require('cors');
const server = express();
const port = 3000;

server.use(cors());

server.listen(port, () => {
    console.log('Saint Seiya Server is running on port: ' + port)
});

