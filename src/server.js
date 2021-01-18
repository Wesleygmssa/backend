const express = require('express');
const cors = require('cors');
const router = require('./routes/TaskRouter');

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);

const port = 3333;
server.listen(port, () => {
    console.log('Started API ' + ' ' + port);
});