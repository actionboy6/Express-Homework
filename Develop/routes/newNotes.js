const express = require('express');
const router = express.Router();

router.post ("/:newNoteid", (req, res) => {
    res.sendFile(path.join(__dirname))
})