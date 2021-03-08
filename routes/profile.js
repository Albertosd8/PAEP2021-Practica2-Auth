//GET /profile
const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    const dataUser = req.user._json; 
    console.log(dataUser.name);
    console.log(dataUser.email);
    console.log(dataUser.picture);
    console.log(dataUser);
    res.render('profile', {dataUser, isLoggenIn: Boolean(req.user)});
})


module.exports = router;