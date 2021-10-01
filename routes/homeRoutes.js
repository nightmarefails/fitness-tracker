const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.sendFile('/index.html');
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;