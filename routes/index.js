const express = require('express');
const router = express.Router();

//GET /
router.get('/', (req,res) => {
    res.render('home', {isLoggenIn: Boolean(req.user)});
})

module.exports = router;