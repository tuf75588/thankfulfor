const monk = require('monk');

const db = monk('mongodb://localhost:27017');

module.exports = db;
