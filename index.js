const express = require('express');

const router = require('./router/router');
const server = express();


server.use(express.json());

server.use('/api/posts', router); 

server.get('/', (req, res) => {
    res.send(`Hello World!`);
});

const port = 5000;
server.listen(port, () => {
    console.log(`\n=== Server Running on http://localhost:${port} ===\n`);
  });