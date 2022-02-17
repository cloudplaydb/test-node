'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const config = require('config')
const logger = require('./logging/logger')
const mock = require('../mocks/dummy.json')

// App
const app = express();

app.get('/', (req, res) => {
    res.send(mock["Weather API"]);
});

app.listen(config.get("Node.server.port"), () => {
    logger.info(`test node api running on port ${config.get("Node.server.port")}`)
});

