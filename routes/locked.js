const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('This is a protected route. You should only be able to acces it when logged in!');
});

module.exports = router;