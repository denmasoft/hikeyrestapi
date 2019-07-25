var express = require('express');
var router = express.Router();
require('../components/repo/routes')(router);
module.exports = router;