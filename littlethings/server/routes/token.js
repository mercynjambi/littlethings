const express = require('express');
const router = express.Router();

const { createToken, stkPush } = require('../controller/token'); // Ensure this path is correct

router.post("/", createToken, stkPush);

module.exports = router;
